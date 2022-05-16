from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.views import generic
from django.urls import reverse

from .models import Comment
from apps.user.models import User


class IndexView(generic.ListView):
    template_name = 'comment/index.html'
    context_object_name = 'latest_comment_list'

    def get_queryset(self):
        """Return the last 10 published comments."""
        return Comment.objects.order_by('-pub_date')[:10]

class DetailView(generic.DetailView):
    model = Comment
    template_name = 'comment/detail.html'

def insert(request):
    model = Comment
    if not request.POST:
        return render(request, 'comment/insert.html', context={'users': User.objects.all()})
    else:
        author = User.objects.get(username=request.POST['author'])
        new_comment = Comment(text = request.POST['text'], author=author, pub_date=request.POST['pub_date'], upvotes=request.POST['upvotes'], downvotes=request.POST['downvotes'], parentID=request.POST['parentID'], isMarkedNSFW=(True if request.POST['nsfw'] else False))
        new_comment.save()
        return HttpResponseRedirect(reverse('comment:index'))
