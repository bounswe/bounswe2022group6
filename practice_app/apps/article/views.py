import json
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from rest_framework.renderers import TemplateHTMLRenderer
from django.core import serializers
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Article

# Create your views here.


@api_view(["GET","POST"])
def api(req):
    if req.method == "GET":
        articles = serializers.serialize( "python", Article.objects.all(),fields = ("Article_title","Article_summary","Article_authors","Article_link") )
        response ={}
        for i in range(len(articles)):
            response["article"+str(i+1)] = articles[i]["fields"]

        return Response(response,status=status.HTTP_200_OK)

    if req.method == "POST":
        
        try:
            
            subject = req.POST["subject"]
            noOfArticles = req.POST["numberOfArticles"]

        except Exception as e:
            return Response("Missing Input",status=status.HTTP_400_BAD_REQUEST)

        try:
            int(noOfArticles)
        except Exception as e:
            return Response("numberOfArticles field should be an integer between 1 and 100",status=status.HTTP_400_BAD_REQUEST)
        
        if(int(noOfArticles)>100):
            return Response("Too large value for numberOfArticles field, try something smaller",status=status.HTTP_400_BAD_REQUEST)

        elif(int(noOfArticles)<= 0):
            return Response("numberOfArticles field cannot be non-positive",status=status.HTTP_400_BAD_REQUEST)

        parameters = {"search_query":"all:"+subject,"max_results":noOfArticles}
        data = requests.get("http://export.arxiv.org/api/query",params = parameters)

        ArticleInfoList = findInfo(data,noOfArticles)
        
        newData = {}
        numberOfArticlesInDb = len(Article.objects.all())

        for i in range(len(ArticleInfoList)):

            authors = ""
            for author in ArticleInfoList[i][2]:
                authors += author +','

            newData["article"+str(i+1+numberOfArticlesInDb)] = {"Article_title":ArticleInfoList[i][0],
                                                                "Article_summary":ArticleInfoList[i][1],
                                                                "Article_authors":authors,
                                                                "Article_link":ArticleInfoList[i][3]}

            newArticle = Article.objects.create(**newData["article"+str(i+1+numberOfArticlesInDb)])

        return Response(newData,status=status.HTTP_200_OK)

def index(req):
    
    return render(req, "index.html")

def list(req):
    data = requests.get("http://127.0.0.1:8000/article/api")
    
    data = data.text
    data =json.loads(data)
    Information = []

    i = 1
    for key in data:
            title = data[key]["Article_title"]
            summary = data[key]["Article_summary"]
            authors = data[key]["Article_authors"].split(",")[:-1]
            link = data[key]["Article_link"]
            Information.append((title,summary,authors,link,i))
            i+=1
    
    if len(Information)==0:
        return render(req,"list.html",{"ArticleInfoList":Information,"isEmpty":True})
    else:
        return render(req,"list.html",{"ArticleInfoList":Information,"isEmpty":False})

def search(req):
    if req.method == "POST":

        subject = req.POST["subject"]
        noOfArticles = req.POST["numberOfArticles"]    
        
        parameters = {"subject":subject,"numberOfArticles":noOfArticles}
        data = requests.post("http://127.0.0.1:8000/article/api",data=parameters)

        data = data.text

        data =json.loads(data)
        Information = []

        i = 1
        for key in data:
                title = data[key]["Article_title"]
                summary = data[key]["Article_summary"]
                authors = data[key]["Article_authors"].split(",")[:-1]
                link = data[key]["Article_link"]
                Information.append((title,summary,authors,link,i))
                i+=1

        if len(Information) == 0:
            return render(req,"search.html",{"ArticleInfoList":Information,"isEmpty":True})
        
        return render(req,"search.html",{"ArticleInfoList":Information,"isEmpty":False})
    else :
        return render(req, "index.html")

def findInfo(data,noOfArticles):

    dataString = data.text
    ArticleInfoList = []

    for i in range(0,int(noOfArticles)):

        if dataString.count("<summary>") == 0:
            break

        startIndexOfTitle = dataString.index("<title>") + len("<title>")

        dataString = dataString[startIndexOfTitle:]

        endIndexOfTitle = dataString.index("</title>")
        startIndexOfSummary = dataString.index("<summary>")
        endIndexOfSummary = dataString.index("</summary>")

        title = dataString[:endIndexOfTitle]
        summary = dataString[startIndexOfSummary+len("<summary>"):endIndexOfSummary]

        dataString = dataString[endIndexOfSummary + len("</summmary>"):]

        authors = []
        dataCopy = dataString

        while(dataCopy.count("<name>")!=0 and dataCopy.count("</entry>")==int(noOfArticles)-i ):
            startIndexOfAuthor = dataCopy.index("<name>") + len("<name>")
            endIndexOfAuthor = dataCopy.index("</name>")

            author = dataCopy[startIndexOfAuthor:endIndexOfAuthor]
            authors.append(author)
            dataCopy = dataCopy[endIndexOfAuthor + len("</name>") : ]

        articleLinkStart = dataString.index("href=\"") + len("href=\"")
        articleLinkEnd = dataString.index("rel=") -2

        articleLink = dataString[articleLinkStart:articleLinkEnd]

        ArticleInfoList.append((title,summary,authors,articleLink,i+1))
    return ArticleInfoList

def deleteHistory(req):
    if req.method == "POST":
        try:
            Article.objects.all().delete()
            return HttpResponseRedirect("../article")
        except Exception as e:
            return Response("Could not performed deletion operation",status=status.HTTP_400_BAD_REQUEST)




