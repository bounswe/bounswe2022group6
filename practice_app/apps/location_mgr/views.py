from django.http import HttpResponse
import requests

# External ip-api gateway to get ip location
def get_ip(ip):
    res = requests.get(f"http://ip-api.com/json/{ip}")
    if res.status_code==200:
        data = res.json()
        if data["status"]=="success":
            return str(data)
        return f"Failed with message: {data['message']}"
    
    return f"Failed with code: {res.status_code}"

def index(request):
    ip = request.META.get('HTTP_X_FORWARDED_FOR')
    if not ip:
        ip = request.META.get('REMOTE_ADDR')
    return HttpResponse(get_ip(ip))