from django.db import models
from django.forms import CharField

# Create your models here.

class Report(models.Model):
    report_reasons = [
        ("false","False Information"),
        ("spam","Spam"),
        ("advertisement","Blatant Advertisement"),
        ("harrassment","Harrasment"),
        ("falseTags", "Incorrectly Tagged"),
        ("other","Other")        
    ]
    report_types=[
        ("user","User"),
        ("post","Post"),
        ("comment","Comment")
    ]
    report_reason=models.CharField(max_length=18,choices=report_reasons, default= "other")
    report_type=models.CharField(max_length=7,choices=report_types,default="user")
    proof_link=models.CharField(max_length=500)
    report_description=models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.reason 