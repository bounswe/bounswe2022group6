from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=500)
    description = models.CharField(max_length=2000)
    post_type_label = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title