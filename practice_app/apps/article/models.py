from django.db import models

# Create your models here.
class Article(models.Model):
    Article_title = models.CharField(max_length=100)
    Article_summary = models.TextField()
    Article_authors = models.CharField(max_length=200,default = "")
    Article_link = models.CharField(max_length=75,default = "")

    def __str__(self):
        return self.Article_title