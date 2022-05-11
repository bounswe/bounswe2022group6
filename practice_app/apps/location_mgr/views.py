from django.http import HttpResponse, HttpResponseRedirect
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
        if data.has_key("error"):
            return HttpResponse(data["error"])
        return HttpResponse(str(data))
    return HttpResponseRedirect('../location_mgr')
"""
def places(req):
    country = req.GET.get("country")
    state = req.GET.get("state")
    if state:
        return HttpResponse(str(world.get_city_list(state)))
    if country:
        return HttpResponse(str(world.get_state_list(country)))
    return HttpResponse(str(world.get_country_list()))
"""
def index(req):
    ip = req.META.get('HTTP_X_FORWARDED_FOR')
    if not ip:
        ip = req.META.get('REMOTE_ADDR')

    
    return HttpResponse(get_ip(ip))


def userLocation(req):
    pass

def nearLocation(req):
    pass
