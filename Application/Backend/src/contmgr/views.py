from rest_framework.views import APIView
from django.http import JsonResponse
from django.utils import timezone
from .models import *
from ..accmgr.models import *
from rest_framework.permissions import BasePermission, IsAuthenticated, AllowAny
import json

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
            "commentID": comment.commentID,
            "owner":comment.owner.username,
            "description":comment.description,
            "result_vote":comment.upvoted_users.all().count()-comment.downvoted_users.all().count(),
            "upvoted_users":list(comment.upvoted_users.all().values_list('username', flat=True)),
            "downvoted_users":list(comment.downvoted_users.all().values_list('username', flat=True)),
            "created_at":comment.created_at,
            "last_update_at":comment.last_update_at,
            "mentioned_users": list(comment.mentioned_users.all().values_list('username', flat=True)),
            "comments": []
        })
        ncomments = Comment.objects.filter(parent_comment= comment).order_by('created_at')
        insertComments(target_data[-1]["comments"], ncomments)


class SearchPost(APIView):

    def get(self, req):

        keywords = req.GET.getlist("keyword", None)
        labels = req.GET.getlist("label", None)

        if not keywords and not labels:
            return JsonResponse({"info":"search failed", "error": "no keyword or label provided"}, status=400)

        posts = Post.objects.all()

        if keywords:
            for keyword in keywords:
                posts = Post.objects.filter(description__icontains=keyword) | Post.objects.filter(title__icontains=keyword)
        
        if labels:
            for label in labels:
                posts = posts.filter(labels__labelName=label)

        data = {"posts" : []}
        for post in posts:
            data["posts"].append(post.as_dict())
        
        return JsonResponse(data, status=200)


class Labels(APIView):

    def get(self, req):

        labels = Label.objects.all()
        data = {"labels" : []}
        for label in labels:
            data["labels"].append(label.as_dict())
        return JsonResponse(data, status=200, safe=False)


# Inherited class for both comment and post voting systems
class Vote(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, req, _type):
        user = RegisteredUser.objects.get(username=req.user)
        try:
            modelID = int(req.GET.get("id", None))
        except:
            return JsonResponse({"info":f"{_type} vote failed", "error": "id is either not given or not an integer"}, status=400)

        try:
            if _type=="comment":
                model = Comment.objects.get(commentID=modelID)
            elif _type=="post":
                model = Post.objects.get(postID=modelID)
            else: raise
        except Exception as e:
            return JsonResponse({"info":"Fetch data failed", "error": str(e)}, status=400)

        if model.upvoted_users.filter(username=user.username).exists():
            return JsonResponse({"voted":"up"}, status=200)
        elif model.downvoted_users.filter(username=user.username).exists():
            return JsonResponse({"voted":"down"}, status=200)
        else:
            return JsonResponse({"voted":"false"}, status=200)

    def post(self, req, _type):
        user = RegisteredUser.objects.get(username=req.user)
        try:
            modelID = int(req.POST.get("id", None))
            vote = req.POST["vote"].strip().lower()
            if vote != "up" and vote != "down": raise
        except:
            return JsonResponse({"info":f"{_type} vote failed", "error": "Arguments are not correct or not given"}, status=400)
        try:
            if _type=="comment":
                model = Comment.objects.get(commentID=modelID)
            elif _type=="post":
                model = Post.objects.get(postID=modelID)
            else: raise
        except Exception as e:
            return JsonResponse({"info":"Fetch data failed", "error": str(e)}, status=400)

        # Set reputation point increase or decrease
        rep_point = 1 if vote=="up" else -1

        def vote_func(main_vote, side_vote, op_name, user, _type):
            if main_vote.filter(username=user.username).exists():
                try:
                    main_vote.remove(user)
                    model.owner.reputation-= rep_point
                    model.owner.save()
                    return JsonResponse({"info":f"{op_name} removed from {_type} for user"}, status=201)
                except Exception as e:
                    return JsonResponse({"info":f"{op_name} remove from {_type} failed", "error": str(e)}, status=400)
            else:
                try:
                    if side_vote.filter(username=user.username).exists():
                        side_vote.remove(user)
                        model.owner.reputation+= rep_point
                    main_vote.add(user)
                    model.owner.reputation+= rep_point
                    model.owner.save()
                    return JsonResponse({"info":f"{op_name} added to {_type} for user"}, status=201)
                except Exception as e:
                    return JsonResponse({"info":f"{op_name} add to {_type} failed", "error": str(e)}, status=400)

        if vote=="up":
            return vote_func(model.upvoted_users, model.downvoted_users, "Upvote", user, _type)
        else:
            return vote_func(model.downvoted_users, model.upvoted_users, "Downvote", user, _type)


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
        try:
            commentID = int(req.GET.get("id", None))
        except:
            return JsonResponse({"info":f"comment get failed", "error": "id is either not given or not an integer"}, status=400)
        # Only one comment as a query (Didn't used get for compability with function)
        try:
            comment = Comment.objects.get(commentID=commentID)
        except:
            return JsonResponse({"info":f"comment get failed", "error": "Comment does not exists with given id"}, status=404)
        data = []
        insertComments(data, [comment])
        # Return first one (Only one element will return)
        return JsonResponse(data[0], status=200)

    def put(self, req):
        user = RegisteredUser.objects.get(username=req.user)
        try:
            commentID = int(req.GET.get("id", None))
        except:
            return JsonResponse({"info":f"comment update failed", "error": "id is either not given or not an integer"}, status=400)
        
        try:
            comment = Comment.objects.get(commentID= commentID)
        except:
            return JsonResponse({"info":f"comment update failed", "error": "Comment does not exists with given id"}, status=404)

        if comment.owner != user:
            return JsonResponse({"info":f"comment update failed", "error": "not comment owner"}, status=403)

        try:
            req_put = json.loads(req.body)
            _mentioned_users = req_put.get("mentioned_users", [])
        except:
            req_put = req.POST
            _mentioned_users = req_put.getlist("mentioned_users", None)
        _description = req_put.get("description", None)

        # Parse all fields
        _mentioned_users = list(map(str.strip, _mentioned_users))
        comment.description = _description.strip() if _description is not None else comment.description
        comment.last_update_at = timezone.now()
        
        try:
            mentioned_users = [RegisteredUser.objects.get(username=_user) for _user in _mentioned_users]
            comment.mentioned_users.set(mentioned_users, clear=True)
            comment.save()
            return JsonResponse({"info": "comment update successful", "postID": comment.commentID}, status=201)
        except Exception as e:
            return JsonResponse({"info":"comment update failed", "error": str(e)}, status=400)

    # Create a comment
    def post(self, req):
        user = RegisteredUser.objects.get(username=req.user)

        # Check if all fields are present
        _parent_comment_id = req.POST.get("parent_comment_id", None)
        _parent_post_id = req.POST.get("parent_post_id", None)
        _mentioned_users = req.POST.getlist("mentioned_users", None)

        try:
            _description = req.POST["description"]
            # Only one of them should be set.
            if (_parent_comment_id is None) == (_parent_post_id is None):
                raise
        except:
            return JsonResponse({"info":"comment creation failed", "error": "{'form_data': ['Missing or wrong form data.']}"}, status=400)
        
        # Parse fields
        _description = _description.strip()
        _mentioned_users = list(map(str.strip, _mentioned_users))

        _parent_post = Post.objects.get(postID=_parent_post_id) if _parent_post_id is not None else None
        _parent_comment = Comment.objects.get(commentID=_parent_comment_id) if _parent_comment_id is not None else None
        new_comment = Comment(description=_description, owner=user, parent_post=_parent_post, parent_comment=_parent_comment)

        try:
            new_comment.save()
        except Exception as e:
            return JsonResponse({"info":"comment creation failed", "error": str(e)}, status=500)
        try:
            mentioned_users = [RegisteredUser.objects.get(username=_user) for _user in _mentioned_users]
        except:
            return JsonResponse({"info":"comment creation failed", "error": f"mentioned_users does not exists on database"}, status=400)

        try:
            new_comment.mentioned_users.set(mentioned_users, clear=True)
            new_comment.save()
            return JsonResponse({"info": "comment creation successful", "commentID": new_comment.commentID}, status=201)
        except Exception as e:
            return JsonResponse({"info":"users_mentioned initialization failed!", "error": str(e)}, status=500)


class PostView(APIView):
    permission_classes = (IsGetOrIsAuthenticated,)

    # Return post with all of its comments
    def get(self, req):
        try:
            postID = int(req.GET.get("id", None))
        except:
            return JsonResponse({"info":f"post get failed", "error": "id is either not given or not an integer"}, status=400)
        try:
            tpost = Post.objects.get(postID= postID)
        except:
            return JsonResponse({"info":f"post get failed", "error": "Post does not exists with given id"}, status=404)
        data = {
            "postID": postID,
            "owner":tpost.owner.username,
            "description":tpost.description,
            "result_vote":tpost.upvoted_users.all().count()-tpost.downvoted_users.all().count(),
            "upvoted_users":list(tpost.upvoted_users.all().values_list('username', flat=True)),
            "downvoted_users":list(tpost.downvoted_users.all().values_list('username', flat=True)),
            "created_at":tpost.created_at,
            "last_update_at":tpost.last_update_at,
            "mentioned_users": list(tpost.mentioned_users.all().values_list('username', flat=True)),
            "title":tpost.title,
            "type":tpost.type,
            "location":tpost.location,
            "imageURL":tpost.imageURL,
            "is_marked_nsfw":tpost.is_marked_nsfw,
            "labels" : [label.as_dict() for label in tpost.labels.all()],
            "comments": []
        }
        
        comments = Comment.objects.filter(parent_post= tpost).order_by('created_at')
        insertComments(data["comments"], comments)
        return JsonResponse(data, status=200)

    def put(self, req):
        user = RegisteredUser.objects.get(username=req.user)
        try:
            postID = int(req.GET.get("id", None))
        except:
            return JsonResponse({"info":f"post update failed", "error": "id is either not given or not an integer"}, status=400)
        
        try:
            tpost = Post.objects.get(postID= postID)
        except:
            return JsonResponse({"info":f"post update failed", "error": "Post does not exists with given id"}, status=404)

        if tpost.owner != user:
            return JsonResponse({"info":f"post update failed", "error": "not post owner"}, status=403)
        try:
            req_put = json.loads(req.body)
            _labels = req_put.get("label", [])
            _mentioned_users = req_put.get("mentioned_users", [])
        except:
            req_put = req.POST
            _labels = req_put.getlist("label", None)
            _mentioned_users = req_put.getlist("mentioned_users", None)
        _title = req_put.get("title", None)
        _type = req_put.get("type", None)
        _description = req_put.get("description", None)
        _location = req_put.get("location", None)
        _imageURL = req_put.get("imageURL", None)
        _is_marked_nsfw = req_put.get("is_marked_nsfw", None)

        # Parse all fields
        _labels = list(map(str.strip, _labels))
        _mentioned_users = list(map(str.strip, _mentioned_users))
        tpost.description = _description.strip() if _description is not None else tpost.description
        tpost.last_update_at = timezone.now()
        tpost.title = _title.title().strip() if _title is not None else tpost.title
        tpost.type = _type.strip().lower() if _type is not None else tpost.type
        tpost.location = _location.strip().lower() if _location is not None else tpost.location
        tpost.imageURL = _imageURL.strip() if _imageURL is not None else tpost.imageURL
        tpost.is_marked_nsfw = _is_marked_nsfw.strip().lower()=="true" if _is_marked_nsfw is not None else tpost.is_marked_nsfw

        try:
            labels = [Label.objects.get(labelID=_label) for _label in _labels]
            mentioned_users = [RegisteredUser.objects.get(username=_user) for _user in _mentioned_users]
            tpost.mentioned_users.set(mentioned_users, clear=True)
            tpost.labels.set(labels, clear=True)
            tpost.save()
            return JsonResponse({"info": "post update successful", "postID": tpost.postID}, status=201)
        except Exception as e:
            return JsonResponse({"info":"post update failed", "error": str(e)}, status=400)

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
        _labels = req.POST.getlist("label", None)
        _mentioned_users = req.POST.getlist("mentioned_users", None)

        # Parse all fields
        _title = _title.title().strip()
        _type = _type.strip().lower()
        _description = _description.strip()
        _location = _location.strip().lower() if _location is not None else None
        _imageURL = _imageURL.strip() if _imageURL is not None else None
        _is_marked_nsfw = _is_marked_nsfw.strip().lower()=="true" if _is_marked_nsfw is not None else False
        _labels = list(map(str.strip, _labels))
        _mentioned_users = list(map(str.strip, _mentioned_users))

        try:
            labels = [Label.objects.get(labelID=_label) for _label in _labels]
            mentioned_users = [RegisteredUser.objects.get(username=_user) for _user in _mentioned_users]
        except:
            return JsonResponse({"info":"post creation failed", "error": f"labels or mentioned_users does not exists on database"}, status=400)

        new_post = Post(title=_title, type=_type, location=_location, imageURL = _imageURL,
                        is_marked_nsfw=_is_marked_nsfw, owner=user, description=_description)
        try:
            new_post.save()
        except Exception as e:
            return JsonResponse({"info":"post creation failed", "error": str(e)}, status=500)
        
        try:
            new_post.mentioned_users.set(mentioned_users, clear=True)
            new_post.labels.set(labels, clear=True)
            new_post.save()
            return JsonResponse({"info": "post creation successful", "postID": new_post.postID}, status=201)
        except Exception as e:
            return JsonResponse({"info":"label or users_mentioned initialization failed!", "error": str(e)}, status=500)

class AllPostsView(APIView):

    permission_classes = (AllowAny,)

    def get(self, req):
        
        posts = Post.objects.all().order_by('-created_at')
        data = {"posts":[]}
        for post in posts:
            data["posts"].append(post.as_dict())

        return JsonResponse(data, status=200)
