from django.db import models


class Countries(models.Model):
    country = models.CharField(max_length=20)

class States(models.Model):
    country = models.ForeignKey(Countries, on_delete=models.CASCADE)
    state = models.CharField(max_length=20)

class Cities(models.Model):
    state = models.ForeignKey(States, on_delete=models.CASCADE)
    city = models.CharField(max_length=20)

class UserLocation(models.Model):
    username = models.CharField(primary_key=True, max_length=50)
    country = models.ForeignKey(Countries, on_delete=models.PROTECT)
    state = models.ForeignKey(States, on_delete=models.PROTECT)
    city = models.ForeignKey(Cities, on_delete=models.PROTECT)
# Create your models here.
