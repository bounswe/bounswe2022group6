from django.db import models
from django.utils import timezone
from src.accmgr.models import *

class Content(models.Model):

    owner = models.ForeignKey(RegisteredUser, on_delete=models.CASCADE, blank=False, null=False)
    description = models.CharField(max_length=10000, blank=False, null=False)
    vote_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now())
    mentioned_users = models.ManyToManyField(RegisteredUser, related_name='mentioned_by_%(class)s', blank=True)

    class Meta:
        abstract = True

class Comment(Content):

    commentID = models.AutoField(primary_key=True)
    # only one of the following two fields will be set
    parent_comment = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True, related_name='children_comments')
    parent_post = models.ForeignKey("Post", on_delete=models.CASCADE, blank=True, null=True, related_name='children_comments')