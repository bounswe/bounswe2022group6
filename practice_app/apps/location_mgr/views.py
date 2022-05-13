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
        return HttpResponse(str([data['country'], data['regionName'], data['city']]).replace("'", "\""))
    return HttpResponseRedirect('../location_mgr')

def places(req):
    country = req.GET.get("country")
    state = req.GET.get("state", None)
    if state:
        state = state.title()
        return HttpResponse(str(list(Cities.objects.filter(state__state= state).order_by('city').values_list('city', flat=True))).replace("'", "\""))
    if country:
        country = country.title()
        return HttpResponse(str(list(States.objects.filter(country__country= country).order_by('state').values_list('state', flat=True))).replace("'", "\""))
    return HttpResponse(str(list(Countries.objects.all().order_by('country').values_list('country', flat=True))).replace("'", "\""))

class Index(View):
    def get(self, req, *args,**kwargs):
        ip = req.META.get('HTTP_X_FORWARDED_FOR')
        if not ip:
            ip = req.META.get('REMOTE_ADDR')
        loc = get_ip(ip)
        if "error" in loc:
            return render(req,'index.html', {"loc": str([])})
        return render(req,'index.html', {"loc": str([loc['country'], loc['regionName'], loc['city']]).replace("'", "\"")})

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
    if country:
        if state != '-':
            if city != '-':
                city = city.title()
                return HttpResponse(str(list(UserLocation.objects.filter(city__city= city).values_list('username', flat=True))))
            state = state.title()
            return HttpResponse(str(list(UserLocation.objects.filter(state__state= state).values_list('username', flat=True))))
        country = country.title()
        return HttpResponse(str(list(UserLocation.objects.filter(country__country= country).values_list('username', flat=True))))
    return HttpResponse("[]")
