from django.shortcuts import render
from django.http import JsonResponse
import json

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer
from .models import User

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/user-list/',
        'Detail':'/user-detail/',
        'Post':'/user-create/',
    }
    return Response(api_urls)

@api_view(['GET'])
def userList(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def userDetail(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def userCreate(request):
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

def index(request):
    return render(request, 'home.html')

def listAll(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    data = serializer.data
    users=[]
    for row in data:
        id = row["id"]
        username = row["username"]
        password = row["password"]
        mail= row["mail"]
        users.append((id, username, password, mail))

    return render(request,'user-list.html',{"results": users})

def listOne(request):
    return render(request,'user-detail.html')

def listOneWorker(request):
    username=request.POST["username"]

    user = User.objects.get(username=username)
    serializer = UserSerializer(user, many=False)
    data = serializer.data

    users=[]
    id = data["id"]
    username = data["username"]
    password = data["password"]
    mail= data["mail"]

    users.append((id, username, password, mail))

    return render(request,'user-detail.html',{"results": users})

def addNew(request):
    isFailed=request.GET.get("fail",False)
    isSuccessful=request.GET.get("success",False)
    return render(request,'user-create.html',{"action_success": isSuccessful, "action_fail": isFailed})

@api_view(['POST'])
def addNewWorker(request):
    serializer = UserSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
        isFailed=request.GET.get("fail",False)
        isSuccessful=request.GET.get("success",True)
        return render(request, 'user-create.html',{"action_success": isSuccessful,"action_fail": isFailed})
    else:
        isFailed=request.GET.get("fail",True)
        isSuccessful=request.GET.get("success",False)
        return render(request, 'user-create.html',{"action_success": isSuccessful,"action_fail": isFailed})