from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.views import generic
from django.urls import reverse
from django.utils import timezone

from .models import Comment
from apps.user.models import User

import json
import requests
import datetime


def index(request): # Index page - lists the last 20 comments.
    latest_comment_list = Comment.objects.order_by('-pub_date')
    quote_api_url = "https://api.quotable.io/random" # External API to get a random inspirational quote.
    param = {'maxLength': '100'}
    r = requests.get(url=quote_api_url, params=param)
    context = dict()
    if r.status_code == 200: # If the request was successful
        context = r.json()

    context['latest_comment_list'] = latest_comment_list
    return render(request, 'comment/index.html', context)

class DetailView(generic.DetailView): # Details of a single comment
    model = Comment
    template_name = 'comment/detail.html'

def insert(request): # Adding a new comment to the database.
    model = Comment
    if request.method == 'POST': # If the method is POST
        author = User.objects.get(username=request.POST['author'])
        new_comment = Comment(text = request.POST['text'], author=author, pub_date=request.POST['pub_date'], upvotes=request.POST['upvotes'], downvotes=request.POST['downvotes'], parentID=request.POST['parentID'], isMarkedNSFW=(True if request.POST['nsfw']=='Yes' else False))
        new_comment.save()
        return HttpResponseRedirect(reverse('comment:index'))
    else:
        return render(request, 'comment/insert.html', context={'users': User.objects.all()})
