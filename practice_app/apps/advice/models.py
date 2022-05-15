from django.db import models

# Create your models here.

class AdviceUser(models.Model):
    age = models.IntegerField()
    sex = models.CharField(max_length=10, choices=[("male", "male"), ("female", "female")])
    tobaccoUse = models.BooleanField()
    sexuallyActive = models.BooleanField()