from datetime import date
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator, MinLengthValidator

class RegisteredUser(AbstractUser):

    # backend required fields
    userID = models.AutoField(primary_key=True)
    username = models.CharField(unique=True, max_length=16, validators=[RegexValidator(r'^[\w-]*$'), MinLengthValidator(3)])
    email = models.EmailField(unique=True, blank=False)
    password = models.CharField(max_length=256)
    birth_date = models.DateField(default=date(1970, 1, 1))
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', "Other"),
        ("D", "Do not want to specify")
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default="D")

    ## more fields will be added

    # unnecessary inherited fields

    first_name = None
    last_name = None
    groups = None

    def save(self, *args, **kwargs):
        self.full_clean()
        super(RegisteredUser, self).save(*args, **kwargs)
