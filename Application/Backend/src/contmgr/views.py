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

def insertComments(target_data, rcomments):
    for comment in rcomments:
        target_data.append({
            "owner":comment.owner.username,
            "description":comment.description,
            "vote_count":comment.voted_users.all().count(),
            "created_at":comment.created_at,
            "mentioned_users": list(comment.mentioned_users.all().values_list('username', flat=True)),
            "comments": []
        })
        ncomments = Comment.objects.filter(parent_comment= comment).order_by('created_at')
        insertComments(target_data[-1]["comments"], ncomments)

# Inherited class for both comment and post voting systems
class Vote(APIView):
    permission_classes = (IsGetOrIsAuthenticated,)
    def get(self, req, _type):
        user = RegisteredUser.objects.get(username=req.user)
        modelID = int(req.POST.get("id", None))
        try:
            if _type=="comment":
                model = Comment.objects.get(commentID=modelID)
            elif _type=="post":
                model = Post.objects.get(postID=modelID)
            else: raise
        except Exception as e:
            return JsonResponse({"info":"Fetch data failed", "error": str(e)}, status=400)

        if model.voted_users.filter(owner__username=user.username).exists():
            return JsonResponse({"voted":True}, status=200)
        else:
            return JsonResponse({"voted":False}, status=200)

    def post(self, req, _type):
        user = RegisteredUser.objects.get(username=req.user)
        modelID = int(req.POST.get("id", None))
        try:
            if _type=="comment":
                model = Comment.objects.get(commentID=modelID)
            elif _type=="post":
                model = Post.objects.get(postID=modelID)
            else: raise
        except Exception as e:
            return JsonResponse({"info":"Fetch data failed", "error": str(e)}, status=400)

        if model.voted_users.filter(owner__username=user.username).exists():
            try:
                model.voted_users.remove(user)
                return JsonResponse({"info":f"Vote removed from {_type} for user"}, status=201)
            except Exception as e:
                return JsonResponse({"info":f"Vote remove from {_type} failed", "error": str(e)}, status=400)
        else:
            try:
                model.voted_users.add(user)
                return JsonResponse({"info":"Vote added from comment for user"}, status=201)
            except Exception as e:
                return JsonResponse({"info":"Vote add from comment failed", "error": str(e)}, status=400)


class CommentVote(Vote):
    def get(self, req):
        return super().get(req, "comment")
    def post(self, req):
        return super().post(req, "comment")

class PostVote(Vote):
    def get(self, req):
        return super().get(req, "post")
    def post(self, req):
        return super().post(req, "post")


class CommentView(APIView):
    permission_classes = (IsGetOrIsAuthenticated,)

    # Return comment with all of its child comments
    def get(self, req):
        commentID = int(req.GET.get("id", None))
        # Only one comment as a query (Didn't used get for compability with function)
        comment = Comment.objects.filter(commentID=commentID)
        data = []
        insertComments(data, comment)
        # Return first one (Only one element will return)
        return JsonResponse(data[0], status=200)

    # Create a comment
    def post(self, req):
        user = RegisteredUser.objects.get(username=req.user)

        # Check if all fields are present
        _parent_comment_id = req.POST.get("parent_comment_id", None)
        _parent_post_id = req.POST.get("parent_post_id", None)
        try:
            _description = req.POST["description"]
            # Only one of them should be set.
            if (_parent_comment_id is None) == (_parent_post_id is None):
                raise
        except:
            return JsonResponse({"info":"post creation failed", "error": "{'form_data': ['Missing or wrong form data.']}"}, status=400)

        _parent_post = Post.objects.get(postID=_parent_post_id) if _parent_post_id is not None else None
        _parent_comment = Comment.objects.get(commentID=_parent_comment_id) if _parent_comment_id is not None else None
        new_coment = Comment(description=_description, owner=user, parent_post=_parent_post, parent_comment=_parent_comment)
        try:
            new_coment.save()
            return JsonResponse({"info": "comment creation successful", "commentID": new_coment.commentID}, status=201)
        except Exception as e:
            return JsonResponse({"info":"user registration failed", "error": str(e)}, status=400)


class PostView(APIView):
    permission_classes = (IsGetOrIsAuthenticated,)

    # Return post with all of its comments
    def get(self, req):
        postID = int(req.GET.get("id", None))
        tpost = Post.objects.get(postID= postID)
        data = {
            "owner":tpost.owner.username,
            "description":tpost.description,
            "vote_count":tpost.voted_users.all().count(),
            "created_at":tpost.created_at,
            "mentioned_users": list(tpost.mentioned_users.all().values_list('username', flat=True)),
            "title":tpost.title,
            "type":tpost.type,
            "location":tpost.location,
            "imageURL":tpost.imageURL,
            "is_marked_nsfw":tpost.is_marked_nsfw,
            "comments": []
        }
        
        comments = Comment.objects.filter(parent_post= tpost).order_by('created_at')
        insertComments(data["comments"], comments)
        return JsonResponse(data, status=200)

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

        # Parse all fields
        _title = _title.title().strip()
        _type = _type.strip().lower()
        _description = _description.strip()
        _location = _location.strip().lower() if _location is not None else None
        _imageURL = _imageURL.strip().lower() if _imageURL is not None else None
        _is_marked_nsfw = _is_marked_nsfw.strip().lower()=="true" if _is_marked_nsfw is not None else False

        new_post = Post(title=_title, type=_type, location=_location, imageURL = _imageURL,
                        is_marked_nsfw=_is_marked_nsfw, owner=user, description=_description)
        
        try:
            new_post.save()
            return JsonResponse({"info": "post creation successful", "postID": new_post.postID}, status=201)
        except Exception as e:
            return JsonResponse({"info":"user registration failed", "error": str(e)}, status=400)

