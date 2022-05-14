from django.db import models

class User(models.Model):
    username = models.CharField(max_length=50, unique = True)
    password = models.CharField(max_length=50)
    mail = models.CharField(max_length=50)

    def __str__(self):
        return self.username