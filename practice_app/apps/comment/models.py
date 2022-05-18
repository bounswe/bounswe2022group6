import datetime

from django.db import models
from django.utils import timezone
from apps.user.models import User
from apps.post.models import Post

class Comment(models.Model):
    text = models.CharField(max_length=500, default='')
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    pub_date = models.DateTimeField(verbose_name='date published', default=timezone.now)
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)
    parent = models.ForeignKey(Post, on_delete=models.CASCADE, null=True) # Parent Post
    isMarkedNSFW = models.BooleanField(default=False) #True if NSFW, False otherwise

    def __str__(self):
        return self.text

    def was_published_recently(self):
        return timezone.now() >= self.pub_date >= timezone.now() - datetime.timedelta(minutes=3)

    def is_not_published_yet(self):
        """True if pub_date is larger than timezone.now()"""
        return timezone.now() <= self.pub_date

    def published_how_long_ago(self):

        if self.is_not_published_yet():
            return "Not published yet!"

        elif self.was_published_recently():
            return "Published recently!"

        else:
            d = timezone.now() - self.pub_date
            days = d.days
            seconds = d.seconds

            time = {'year': days // 365, 'day': days % 365, 'hour': seconds // 3600, 'minute': (seconds // 60) % 60}
            string = ""

            for i in time:
                if time[i] > 0:
                    if time[i] == 1:
                        string += str(time[i]) + ' '+ str(i) + ' '
                    else:
                        string += str(time[i]) + ' ' + str(i) + 's' + ' '
                    if i == 'year' or i == 'day' or (i == 'hour' and time[i] >= 2):
                        break
            string += "ago"

            return string
