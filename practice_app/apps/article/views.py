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

#This function defines the GET and POST operations for my api choice
@api_view(["GET","POST"])
def api(req):
    if req.method == "GET":

        #Get all the articles in database and process them to produce a GET response
        articles = serializers.serialize( "python", Article.objects.all(),fields = ("Article_title","Article_summary","Article_authors","Article_link") )
        response ={}
        for i in range(len(articles)):
            response["article"+str(i+1)] = articles[i]["fields"]
        return Response(response,status=status.HTTP_200_OK)

    if req.method == "POST":
        
        #First try to catch possible errors with post body and produce an error response
        try:
            
            subject = req.POST["subject"]
            noOfArticles = req.POST["numberOfArticles"]

        except Exception as e:
            return Response("Bad Input",status=status.HTTP_400_BAD_REQUEST)

        try:
            int(noOfArticles)
        except Exception as e:
            return Response("numberOfArticles field should be an integer between 1 and 100",status=status.HTTP_400_BAD_REQUEST)
        
        if(int(noOfArticles)>100):
            return Response("Too large value for numberOfArticles field, try something smaller",status=status.HTTP_400_BAD_REQUEST)

        elif(int(noOfArticles)<= 0):
            return Response("numberOfArticles field cannot be non-positive",status=status.HTTP_400_BAD_REQUEST)

        #If post body is succesfull then make a search based on given inputs using external api: arXiv (https://arxiv.org/help/api/basics)
        parameters = {"search_query":"all:"+subject,"max_results":noOfArticles}
        data = requests.get("http://export.arxiv.org/api/query",params = parameters)

        #Process the data to find necessary information about article search result
        ArticleInfoList = findInfo(data,noOfArticles)
        
        newData = {}
        numberOfArticlesInDb = len(Article.objects.all())

        #For each result create the Article object to store and produce the api POST request response which is the found article attributes.
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

#Renders the index page for UI
def index(req):
    
    return render(req, "index.html")

#This function sends a request to api and uses it response to render the search history in html
def list(req):
    apiUrl = "http://"+req.get_host()+"/article/api"
    data = requests.get(apiUrl)
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

#This function sends a request to api and uses it response to render the search results in html based on the user input taken by user interface
def search(req):
    if req.method == "POST":

        subject = req.POST["subject"]
        noOfArticles = req.POST["numberOfArticles"]    
        
        apiUrl = "http://"+req.get_host()+"/article/api"
        parameters = {"subject":subject,"numberOfArticles":noOfArticles}
        data = requests.post(apiUrl,data=parameters)

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

#This function helps processing the external api's response to a dictionary format which is easier to work with.
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

#This function is activated by UI and it deletes the article database therefore article history.
def deleteHistory(req):
    if req.method == "POST":
        try:
            Article.objects.all().delete()
            return HttpResponseRedirect("../article")
        except Exception as e:
            return Response("Could not performed deletion operation",status=status.HTTP_400_BAD_REQUEST)
