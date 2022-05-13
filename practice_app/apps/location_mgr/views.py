from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.views import View
from .models import *
import requests
import csv

# External ip-api gateway to get ip location
def get_ip(ip):
    res = requests.get(f"http://ip-api.com/json/{ip}")
    if res.status_code==200:
        data = res.json()
        if data["status"]=="success":
            return data
        return {"error":f"Failed with message: {data['message']}"}
    
    return {"error":f"Failed with code: {res.status_code}"}

def getIpLocation(req):
    if req.GET.get("ip"):
        data = get_ip(req.GET["ip"])
        if "error" in data:
            return HttpResponse(data["error"])
        return HttpResponse(str(data))
    return HttpResponseRedirect('../location_mgr')

def places(req):
    country = req.GET.get("country")
    state = req.GET.get("state")
    if state:
        state = state.title()
        return HttpResponse(str(list(Cities.objects.filter(state__state= state).values_list('city', flat=True))))
    if country:
        country = country.title()
        return HttpResponse(str(list(States.objects.filter(country__country= country).values_list('state', flat=True))))
    return HttpResponse(str(list(Countries.objects.all().values_list('country', flat=True))))

class Index(View):
    def get(self, req, *args,**kwargs):
        ip = req.META.get('HTTP_X_FORWARDED_FOR')
        if not ip:
            ip = req.META.get('REMOTE_ADDR')

        loc = get_ip(ip)
        
        return render(req,'index.html')

    def post(self, req, *args,**kwargs):
        username = req.POST["username"].lower()
        country_text = req.POST["country"].title()
        state_text = req.POST.get("state", "").title()
        city_text = req.POST.get("city", "").title()
        country = Countries.objects.filter(country=country_text).first()
        state = States.objects.filter(state=state_text, country=country).first()
        city = Cities.objects.filter(city=city_text, state=state).first()
        user = UserLocation(username=username, country=country, state=state, city=city)
        user.save()
        return HttpResponseRedirect('../location_mgr')


def userLocation(req):
    username = req.GET.get("username")
    if username:
        username = username.lower()
        data = UserLocation.objects.filter(username= username).first()
        return HttpResponse(f"Country: {data.country}, State: {data.state}, City: {data.city}")

    return HttpResponse("[]")

def nearLocation(req):
    country = req.GET.get("country")
    state = req.GET.get("state")
    city = req.GET.get("city")
    if city:
        city = city.title()
        return HttpResponse(str(list(UserLocation.objects.filter(city__city= city).values_list('username', flat=True))))
    if state:
        state = state.title()
        return HttpResponse(str(list(UserLocation.objects.filter(state__state= state).values_list('username', flat=True))))
    if country:
        country = country.title()
        return HttpResponse(str(list(UserLocation.objects.filter(country__country= country).values_list('username', flat=True))))
    return HttpResponse("[]")
