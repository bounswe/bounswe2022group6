from rest_framework.views import APIView
from django.http import JsonResponse
from .models import *
class Labels(APIView):

    def get(self, req):

        labels = Label.objects.all()
        data = {"labels" : []}
        for label in labels:
            data["labels"].append(label.as_dict())
        return JsonResponse(data, status=200, safe=False)

class SearchPost(APIView):

    def get(self, req):

        keywords = req.GET.get("keyword", None)
        labels = req.GET.getlist("label", None)
        
        if keywords is None and labels is None:
            return JsonResponse({"info":"search failed", "error": "no keyword or label provided"}, status=400)

        posts = Post.objects.all()

        if keywords is not None:
            if type(keywords) is not list:
                keywords = [keywords]
            for keyword in keywords:
                posts = Post.objects.filter(description__icontains=keyword) | Post.objects.filter(title__icontains=keyword)
        
        if labels is not None:
            if type(labels) is not list:
                labels = [labels]
            for label in labels:
                posts = posts.filter(labels__labelName=label)

        data = {"posts" : []}
        for post in posts:
            data["posts"].append(post.as_dict())
        
        return JsonResponse(data, status=200)