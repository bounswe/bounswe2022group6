from rest_framework.views import APIView
from django.http import JsonResponse
from ..accmgr.models import *
from .models import *
from rest_framework.permissions import BasePermission

class IsGetOrIsAuthenticated(BasePermission):
    def has_permission(self, request, view):
        # allow all GET requests
        if request.method == 'GET':
            return True
        # Else is same as IsAuthenticated
        return request.user and request.user.is_authenticated


class Post(APIView):
    permission_classes = (IsGetOrIsAuthenticated,)

    # Return post with all of its comments
    def get(self, req):
        def insertComments(target_data, rcomments):
            for comment in rcomments:
                target_data["comments"].append({
                    "owner":comment.owner.username,
                    "description":comment.description,
                    "vote_count":comment.vote_count,
                    "created_at":comment.created_at,
                    "mentioned_users": comment.mentioned_users.all().values_list('username', flat=True),
                    "comments": []
                })
                ncomments = Comment.objects.filter(parent_comment= comment).order_by('created_at')
                insertComments(target_data["comments"][-1], ncomments)

        postID = int(req.GET.get("postid", None))
        tpost = Post.objects.get(postID= postID)
        data = {
            "owner":tpost.owner.username,
            "description":tpost.description,
            "vote_count":tpost.vote_count,
            "created_at":tpost.created_at,
            "mentioned_users": tpost.mentioned_users.all().values_list('username', flat=True),
            "title":tpost.title,
            "type":tpost.type,
            "location":tpost.location,
            "imageURL":tpost.imageURL,
            "is_marked_nsfw":tpost.is_marked_nsfw,
            "comments": []
        }
        
        comments = Comment.objects.filter(parent_post= tpost).order_by('created_at')
        insertComments(data, comments)
        return JsonResponse(data)

    # Create a post
    def post(self, req):
        user = RegisteredUser.objects.get(username=req.user)

        # Check if all fields are present
        try:
            _title = req.POST["title"]
            _type = req.POST["type"]
            _description = req.POST["description"]
        except:
            return JsonResponse({"info":"post creation failed", "error": "{'form_data': ['Missing form data.']}"}, status=400)

        _location = req.POST.get("location", None)
        _imageURL = req.POST.get("imageURL", None)
        _is_marked_nsfw = req.POST.get("is_marked_nsfw", None)

        _title = _title.title().strip()
        _type = _type.strip().lower()
        _description = _description.strip()
        _location = _location.strip().lower() if _location is not None else None
        _imageURL = _imageURL.strip().lower() if _imageURL is not None else None
        _is_marked_nsfw = True if _is_marked_nsfw.strip().lower()=="true" else False

        new_post = Post(title=_title, type=_type, location=_location, imageURL = _imageURL,
                        is_marked_nsfw=_is_marked_nsfw, owner=user, description=_description)
        
        try:
            new_post.save()
            new_account = Account(owner=new_post)
            new_account.save()
            return JsonResponse({"info": "post creation successful", "PostID": new_post.postID}, status=201)
        except Exception as e:
            return JsonResponse({"info":"user registration failed", "error": str(e)}, status=400)

