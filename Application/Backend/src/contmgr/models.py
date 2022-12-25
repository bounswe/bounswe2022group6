from django.db import models
from django.utils import timezone
from src.accmgr.models import *
from ..common import OverwriteStorage

def img_path_post(instance, filename):
    return f"postpics/{instance.postID}.{filename.split('.')[-1]}"

class Content(models.Model):

    owner = models.ForeignKey(RegisteredUser, on_delete=models.CASCADE, blank=False, null=False)
    description = models.CharField(max_length=10000, blank=False, null=False)
    upvoted_users = models.ManyToManyField(RegisteredUser, blank=True, related_name='upvote_%(class)s')
    downvoted_users = models.ManyToManyField(RegisteredUser, blank=True, related_name='downvote_%(class)s')
    created_at = models.DateTimeField(default=timezone.now)
    last_update_at = models.DateTimeField(default=timezone.now)
    mentioned_users = models.ManyToManyField(RegisteredUser, related_name='mentioned_by_%(class)s', blank=True)

    class Meta:
        abstract = True

class Comment(Content):

    commentID = models.AutoField(primary_key=True)
    # only one of the following two fields will be set
    parent_comment = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True, related_name='children_comments')
    parent_post = models.ForeignKey("Post", on_delete=models.CASCADE, blank=True, null=True, related_name='children_comments')

class Post(Content):

    postID = models.AutoField(primary_key=True)

    POST_TYPES = (
        ("i", "information"),
        ("q", "question"),
        ("a", "advice"),
        ("e", "experience")
    )
    
    title = models.CharField(max_length=256, blank=False, null=False)
    type = models.CharField(max_length=1, choices=POST_TYPES, default="e")
    location = models.CharField(max_length=128, blank=True, null=True, default=None)
    image = models.ImageField(upload_to=img_path_post, storage=OverwriteStorage(), blank=True, null=True, default=None)
    is_marked_nsfw = models.BooleanField(default=False)
    labels = models.ManyToManyField("Label", related_name='labelled_posts', blank=True)

class Label(models.Model):

    labelID = models.AutoField(primary_key=True)
    labelName = models.CharField(max_length=32, blank=False, null=False)
    labelType = models.CharField(max_length=1, blank=False, null=False, choices=(("c", "content"), ("f", "field")))
    labelColor = models.CharField(max_length=16, blank=False, null=False, validators=[RegexValidator(r'^#(?:[0-9a-fA-F]{3}){1,2}$')])
    parentLabel = models.ForeignKey("self", on_delete=models.SET_NULL, blank=True, null=True, related_name='children_labels')
    
class TextAnnotation(models.Model):

    id = models.CharField(max_length=64, primary_key=True)
    author_id = models.IntegerField(blank=False, null=False)
    content_type = models.CharField(max_length=1, choices=(("p", "post"), ("c", "comment")), blank=False, null=False)
    content_id = models.IntegerField(blank=False, null=False)
    jsonld = models.JSONField(blank=False, null=False)

class ImageAnnotation(models.Model):

    id = models.CharField(max_length=64, primary_key=True)
    author_id = models.IntegerField(blank=False, null=False)
    content_id = models.IntegerField(blank=False, null=False)
    jsonld = models.JSONField(blank=False, null=False)
