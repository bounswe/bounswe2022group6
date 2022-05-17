import django.db.models
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from rest_framework.parsers import JSONParser
from .models import Post
from .serializers import PostSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import requests
import json
import urllib.request as request



def postindex(req):

    f = request.urlopen('https://api.openweathermap.org/data/2.5/weather?lat=41.0096334&lon=28.9651646&appid=bd91d7972aabcee560cb9eda43e28070')
    json_string = f.read()
    parsed_json = json.loads(json_string)
    x = json.dumps(parsed_json['main']['temp'], indent = 4)
    f.close()
    x = (float(x)-273.15)
    weather= format(x, ".2f")
    return render(req, "postindex.html",{"weather": weather})




@api_view(['GET', 'POST'])
def getPost(request):
    post_id = request.GET["id"]
    
    try:
        post = Post.objects.get(pk=post_id)
    except:
        return render(request, "posterror.html")

    serializer = PostSerializer(post)
    data = serializer.data
    post_info = []

    id = data["id"]
    title = data["title"]
    description = data["description"]
    post_type_label= data["post_type_label"]
    date = data["date"]
    post_info.append((id, title, description, post_type_label , date))



    return render(request, "postDetail.html", {"results": post_info,"action_fail":False, "id":post_id })

@api_view(['POST'])
def createPost(request):
    isvalid = False
    notvalid =False
    
    serializer = PostSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
        isvalid = True
    else:
        notvalid = True

    return render(request, "postindex.html", {"success":isvalid, "fail": notvalid })




