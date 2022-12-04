from django.db import models
from django.utils import timezone
from src.accmgr.models import *

class Content(models.Model):

    owner = models.ForeignKey(RegisteredUser, on_delete=models.CASCADE, blank=False, null=False)
    description = models.CharField(max_length=10000, blank=False, null=False)
    voted_users = models.ManyToManyField(RegisteredUser, blank=True, related_name='vote_%(class)s')
    created_at = models.DateTimeField(default=timezone.now())
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
    imageURL = models.CharField(max_length=256, blank=True, null=True, default=None)
    is_marked_nsfw = models.BooleanField(default=False)
    # content_labels = models.ManyToManyField(ContentLabel, related_name='content_labels', blank=True)
    # field_labels = models.ManyToManyField(FieldLabel, related_name='field_labels', blank=True)