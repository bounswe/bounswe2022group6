from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer
from django.http import JsonResponse
from django.http import HttpRequest
from .models import *
import requests
import json

# External ip-api gateway to get ip location
def get_ip(ip):
    res = requests.get(f"http://ip-api.com/json/{ip}")
    if res.status_code==200:
        data = res.json()
        if data["status"]=="success":
            return data
        return {"error":f"Failed with message: {data['message']}"}
    
    return {"error":f"Failed with code: {res.status_code}"}

# API Classes
class Location(APIView):
    def get(self, req, *args,**kwargs):
        if req.GET.get("ip"):
            data = get_ip(req.GET["ip"])
            if "error" in data:
                return JsonResponse({"loc": []})
            return JsonResponse({"loc": [data['country'], data['regionName'], data['city']]})
        return JsonResponse({"loc": []})

    def post(self, req, *args,**kwargs):
        username = req.POST["username"].lower()
        country_text = req.POST["country"].title()
        state_text = req.POST.get("state", "").title()
        city_text = req.POST.get("city", "").title()
        if state_text=='-': state_text=''
        if city_text=='-': city_text=''
        country = Countries.objects.filter(country=country_text).first()
        state = States.objects.filter(state=state_text, country=country).first()
        city = Cities.objects.filter(city=city_text, state=state).first()
        user = UserLocation(username=username, country=country, state=state, city=city)
        user.save()
        data = UserLocation.objects.filter(username= username).first()
        return JsonResponse({"info": "Operation completed successfully!"})

class Info(APIView):
    def get(self, req, *args,**kwargs):
        country = req.GET.get("country")
        state = req.GET.get("state", None)
        if state:
            state = state.title()
            return JsonResponse(list(Cities.objects.filter(state__state= state).order_by('city').values_list('city', flat=True)), safe=False)
        if country:
            country = country.title()
            return JsonResponse(list(States.objects.filter(country__country= country).order_by('state').values_list('state', flat=True)), safe=False)
        return JsonResponse(list(Countries.objects.all().order_by('country').values_list('country', flat=True)), safe=False)

    def post(self, req, *args,**kwargs):
        action = req.POST.get("action", None)
        if action=="userdata":
            username = req.POST.get("username", "")
            if username !="":
                username = username.lower()
                data = UserLocation.objects.filter(username= username).first()        
                return JsonResponse({"userdata":{
                    "username": username,
                    "country": data.country.__str__(),
                    "state": data.state.__str__(), 
                    "city": data.city.__str__()
                }})

        elif action=="near":
            country = req.POST.get("country", "")
            state = req.POST.get("state", "-")
            city = req.POST.get("city", "-")
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

class Index(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'index.html'

    def ipResolver(self, req):
        ip = req.META.get('HTTP_X_FORWARDED_FOR')
        if not ip:
            ip = req.META.get('REMOTE_ADDR')
        request = HttpRequest()
        request.method = 'GET'
        request.GET = {"ip": ip}
        return json.loads(Location.as_view()(request=request).content)

    def get(self, req, *args,**kwargs):
        return Response(self.ipResolver(req))

    def post(self, req, *args,**kwargs):
        action = req.POST["action"]
        r=""
        if action == "add":
            r = Location.as_view()(request=req._request)
        else:
            r = Info.as_view()(request=req._request)

        return Response(dict(json.loads(r.content), **self.ipResolver(req)))