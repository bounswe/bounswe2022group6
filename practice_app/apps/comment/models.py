import datetime

from django.db import models
from django.utils import timezone
from apps.user.models import User

class Comment(models.Model):
    text = models.CharField(max_length=500, default='')
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    pub_date = models.DateTimeField(verbose_name='date published', default=timezone.now())
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)
    parentID = models.IntegerField(default=0)
    isMarkedNSFW = models.BooleanField(default=True) #True if NSFW, False otherwise

    def __str__(self):
        return self.text

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
