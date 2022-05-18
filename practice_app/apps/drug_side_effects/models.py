from django.db import models

# Create your models here.
class drugs(models.Model):
    drug_name = models.CharField(max_length=50)
    side_effects = models.CharField(max_length=5000)
