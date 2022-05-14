from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer
from django.http import JsonResponse
from django.http import HttpRequest
from .models import *
import requests
import json

# API Class to get location info from ip, and register user's location.
class Location(APIView):
    # External ip-api gateway to get ip location
    def get_ip(self, ip):
        res = requests.get(f"http://ip-api.com/json/{ip}")
        if res.status_code==200:
            data = res.json()
            # If ip was localhost or equivalent, API will return error.
            if data["status"]=="success":
                return data
            return {"error":f"Failed with message: {data['message']}"}
        
        return {"error":f"Failed with code: {res.status_code}"}

    # Return requested ip's location information
    def get(self, req):
        if req.GET.get("ip"):
            data = self.get_ip(req.GET["ip"])
            if "error" in data:
                return JsonResponse({"loc": []})
            return JsonResponse({"loc": [data['country'], data['regionName'], data['city']]})
        return JsonResponse({"loc": []})

    # Insert new user location information and return success message.
    def post(self, req):
        username = req.POST.get("username", "").lower().strip()
        country_text = req.POST.get("country", "").title().strip()
        state_text = req.POST.get("state", "").title().strip()
        city_text = req.POST.get("city", "").title().strip()
        if state_text=='-': state_text=''
        if city_text=='-': city_text=''
        # If user did not entered an appropriate country name, abort.
        if country_text == "" or username == "":
            return JsonResponse({"info": "Operation failed!"})
        country = Countries.objects.filter(country=country_text).first()
        if country == None:
            return JsonResponse({"info": "Operation failed!"})
        state = States.objects.filter(state=state_text, country=country).first()
        city = Cities.objects.filter(city=city_text, state=state).first()
        user = UserLocation(username=username, country=country, state=state, city=city)
        user.save()
        data = UserLocation.objects.filter(username= username).first()
        return JsonResponse({"info": "Operation completed successfully!"})

# Api to get country list, get user location and users near location.
class Info(APIView):
    # Return location list
    def get(self, req):
        country = req.GET.get("country", None)
        state = req.GET.get("state", None)
        if state:
            state = state.title()
            return JsonResponse(list(Cities.objects.filter(state__state= state).order_by('city').values_list('city', flat=True)), safe=False)
        if country:
            country = country.title()
            return JsonResponse(list(States.objects.filter(country__country= country).order_by('state').values_list('state', flat=True)), safe=False)
        return JsonResponse(list(Countries.objects.all().order_by('country').values_list('country', flat=True)), safe=False)

    # This request handles 2 operations. Considering action, either return user location information,
    # or return users near location.
    def post(self, req):
        action = req.POST.get("action", None)
        if action=="userdata":
            username = req.POST.get("username", "").strip()
            if username !="":
                username = username.lower()
                data = UserLocation.objects.filter(username= username).first()
                if data:      
                    return JsonResponse({"userdata":{
                        "username": username,
                        "country": data.country.__str__(),
                        "state": data.state.__str__(), 
                        "city": data.city.__str__()
                    }})

        elif action=="near":
            country = req.POST.get("country", "").title().strip()
            state = req.POST.get("state", "-").title().strip()
            city = req.POST.get("city", "-").title().strip()
            if country !="":
                if state != '-':
                    if city != '-':
                        city = city.title()
                        return JsonResponse({"near": list(UserLocation.objects.filter(city__city= city).values_list('username', flat=True))})
                    state = state.title()
                    return JsonResponse({"near": list(UserLocation.objects.filter(state__state= state).values_list('username', flat=True))})
                country = country.title()
                return JsonResponse({"near": list(UserLocation.objects.filter(country__country= country).values_list('username', flat=True))})
        return JsonResponse({})

# Endpoint for users to use api's easily.
class Index(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'index.html'

    # This function will call Location api to get location information based on ip.
    def ipResolver(self, req):
        ip = req.META.get('HTTP_X_FORWARDED_FOR')
        if not ip:
            ip = req.META.get('REMOTE_ADDR')
        request = HttpRequest()
        request.method = 'GET'
        request.GET = {"ip": ip}
        return json.loads(Location.as_view()(request=request).content)

    def get(self, req):
        return Response(self.ipResolver(req))

    def post(self, req):
        action = req.POST["action"]
        data = ""
        if action == "add":
            data = Location.as_view()(request=req._request).content
        else:
            data = Info.as_view()(request=req._request).content

        return Response(dict(json.loads(data), **self.ipResolver(req)))