from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
import requests
import json
import os

def news_home(req):

    return render(req, 'news_index.html')

# This get method simply gets the news from newsapi service with default values.
@api_view(['GET'])
def news_without_query(req):
    url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=474bbe02bb3a445899448063108f69e0"
    news = requests.get(url).json()

    articles = news['articles']
    titles =[]
    descriptions =[]
    images =[]
    urls = []

    for i in range(len(articles)):
            article = articles[i]
            titles.append(article['title'])
            descriptions.append(article['description'])
            images.append(article['urlToImage'])
            urls.append(article["url"])

    list_of_news = zip(titles, descriptions, images, url)
    return render(req, 'news_list.html', {'list_of_news': list_of_news})

#This post method receives the input from the html form and sends the necessary request to newsapi service.
@api_view(['POST'])
def news_with_query(req):

    path = os.path.join(os.path.dirname(__file__), 'country_abbreviations.json')
    file = open(path, "r")
    country_abbreviations = json.loads(file.read())

    #default country is needed for the API to work.
    country = country_abbreviations[req.POST["country"]] if req.POST["country"] else "tr"
    keyword = req.POST["keyword"] if req.POST["keyword"] else ""
    date = req.POST["start_date"] if req.POST["start_date"] else ""
    sort_option = req.POST["sort"]
    
    # The free version provides news back to at most 1 month.
    url = f'https://newsapi.org/v2/top-headlines?apiKey=474bbe02bb3a445899448063108f69e0&q={keyword}&country={country}&from={date}&sortBy={sort_option}'
    news_response = requests.get(url)

    if news_response.status_code == 200:
        news = news_response.json()
        articles = news['articles']
        titles =[]
        descriptions =[]
        images =[]
        urls = []

        for i in range(len(articles)):
                article = articles[i]
                titles.append(article['title'])
                descriptions.append(article['description'])
                images.append(article['urlToImage'])
                urls.append(article["url"])

        list_of_news = zip(titles, descriptions, images, url)
        if len(titles) == 0:
            list_of_news = zip(["There is no current news with these parameters"], ["Please go back to the home page using the top right option."], " ", " ")
        return render(req, 'news_list.html', {'list_of_news': list_of_news})
    else:
        return JsonResponse({"Message": str(news_response.content)}, status=news_response.status_code)

