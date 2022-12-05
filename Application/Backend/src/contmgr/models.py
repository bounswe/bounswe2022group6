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
    labels = models.ManyToManyField("Label", related_name='labelled_posts', blank=True)

    def as_dict(self):
        return {
            "postID" : self.postID,
            "owner" : {"userID": self.owner.userID, "username": self.owner.username},
            "description" : self.description,
            "vote_count" : len(self.voted_users.all()),
            "voted_users" : [{"userID": user.userID, "username": user.username} for user in self.voted_users.all()],
            "created_at_date" : self.created_at.strftime("%d.%m.%Y"),
            "created_at_time" : self.created_at.strftime("%H.%M.%S"),
            "title" : self.title,
            "type" : self.type,
            "location" : self.location,
            "imageURL" : self.imageURL,
            "is_marked_nsfw" : self.is_marked_nsfw,
            "labels" : [label.as_dict() for label in self.labels.all()],
            "mentioned_users" : [{"userID": user.userID, "username": user.username} for user in self.mentioned_users.all()]
        }

class Label(models.Model):

    labelID = models.AutoField(primary_key=True)
    labelName = models.CharField(max_length=32, blank=False, null=False)
    labelType = models.CharField(max_length=1, blank=False, null=False, choices=(("c", "content"), ("f", "field")))
    labelColor = models.CharField(max_length=16, blank=False, null=False, validators=[RegexValidator(r'^#(?:[0-9a-fA-F]{3}){1,2}$')])
    parentLabel = models.ForeignKey("self", on_delete=models.SET_NULL, blank=True, null=True, related_name='children_labels')

    def as_dict(self):
        return {
            "labelID": self.labelID,
            "labelName": self.labelName,
            "labelType": self.labelType,
            "labelColor": self.labelColor,
            "parentLabel": self.parentLabel.labelID if self.parentLabel else None
        }
