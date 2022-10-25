from django.db import models
from django.core.validators import RegexValidator, MinLengthValidator

class User(models.Model):
    userID = models.AutoField(primary_key=True)
    username = models.CharField(unique=True, max_length=16, validators=[RegexValidator(r'^[\w-]*$'), MinLengthValidator(3)])
    email = models.EmailField(unique=True, blank=False)
    password_hash = models.CharField(max_length=256)
    birth_date = models.DateField()
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', "Other"),
        ("D", "Do not want to specify")
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    def save(self, *args, **kwargs):
        self.full_clean()
        super(User, self).save(*args, **kwargs)
