from django.http import JsonResponse
from rest_framework.views import APIView
import requests
from .models import *

class Info(APIView):
    # Return location list
    def get(self, req):
        country = req.GET.get("country", None)
        state = req.GET.get("state", None)
        if country:
            country = country.title()
            if state:
                state = state.title()
                return JsonResponse(list(Cities.objects.filter(state__name= state, country__name= country).order_by('name').values_list('name', flat=True)), safe=False)
            return JsonResponse(list(States.objects.filter(country__name= country).order_by('name').values_list('name', flat=True)), safe=False)
        if state:
            state = state.title()
            return JsonResponse(list(Cities.objects.filter(state__name= state).order_by('name').values_list('name', flat=True)), safe=False)
        return JsonResponse(list(Countries.objects.all().order_by('name').values_list('name', flat=True)), safe=False)

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
