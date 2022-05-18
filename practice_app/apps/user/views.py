from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from .serializers import UserSerializer
from .models import User
from .forms import UserForm
import requests
from rest_framework import status

def index(request):
    return render(request, 'user-home.html')

@api_view(['GET'])
def userList(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    data = serializer.data
    users=[]
    for row in data:
        id = row["id"]
        username = row["username"]
        password = row["password"]
        mail= row["mail"]
        horoscope = row["horoscope"]
        users.append((id, username, password, mail,horoscope))

    return render(request,'user-list.html',{"results": users})

def userDetail(request):
    return render(request,'user-detail.html')

@api_view(['GET','POST'])
def userDetailWorker(request):
    username=request.POST["username"]

    try:
        user = User.objects.get(username=username)
        serializer = UserSerializer(user, many=False)
        data = serializer.data
    
        users=[]
        id = data["id"]
        username = data["username"]
        password = data["password"]
        mail= data["mail"]
        horoscope = data["horoscope"]

        params = (
        ('sign', horoscope),
        ('day', 'today'),
        )
        
        daily = requests.post('https://aztro.sameerkumar.website/', params=params)
        resp = daily.json()

        desc = resp["description"] 

        users.append((id, username, password, mail,horoscope))   
        return render(request,'user-detail.html',{"results": users, "daily":desc})

    except:
        isFailed=request.GET.get("fail",True)
        return render(request,'user-detail.html',{"action_fail": isFailed}, status=status.HTTP_404_NOT_FOUND)

def userCreate(request):
    form = UserForm()
    isFailed=request.GET.get("fail",False)
    isSuccessful=request.GET.get("success",False)
    return render(request,'user-create.html',{"action_success": isSuccessful, "action_fail": isFailed,"form":form})

@api_view(['POST'])
def userCreateWorker(request):
    form = UserForm()
    serializer = UserSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
        isFailed=request.GET.get("fail",False)
        isSuccessful=request.GET.get("success",True)
        return render(request, 'user-create.html',{"action_success": isSuccessful,"action_fail": isFailed,"form":form})
    else:
        isFailed=request.GET.get("fail",True)
        isSuccessful=request.GET.get("success",False)
        return render(request, 'user-create.html',{"action_success": isSuccessful,"action_fail": isFailed,"form":form},status=status.HTTP_422_UNPROCESSABLE_ENTITY)