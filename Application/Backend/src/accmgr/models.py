from datetime import date
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator, MinLengthValidator

class RegisteredUser(AbstractUser):

    userID = models.AutoField(primary_key=True)

    # Enforced fields for registration

    username = models.CharField(unique=True, max_length=16, validators=[RegexValidator(r'^[\w-]*$'), MinLengthValidator(3)])
    email = models.EmailField(unique=True, blank=False, null=True)
    password = models.CharField(blank=False, max_length=256)
    birth_date = models.DateField(blank=False, null=True, default=date(1970, 1, 1))
    GENDER_CHOICES = (
            ('M', 'Male'),
            ('F', 'Female'),
            ('O', "Other"),
            ("D", "Do not want to specify")
        )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default="D")

    # Option fields

    is_messaging_allowed = models.BooleanField(default=True)
    is_notification_allowed = models.BooleanField(default=True)

    # unnecessary inherited fields

    first_name = None
    last_name = None
    groups = None

    def save(self, *args, **kwargs):
        self.full_clean()
        super(RegisteredUser, self).save(*args, **kwargs)

class Account(models.Model):

    owner = models.OneToOneField(RegisteredUser, on_delete=models.CASCADE, blank=True, null=True, default=None)

    first_name = models.CharField(max_length=32, blank=True, null=True, default=None)
    last_name = models.CharField(max_length=32, blank=True, null=True, default=None)
    phone_number = models.CharField(max_length=15, blank=True, null=True, validators=[RegexValidator(regex='^\+?1?\d{9,15}$')], default=None)
    verified_as_doctor = models.BooleanField(default=False)
    profile_picture = models.CharField(max_length=256, blank=True, null=True, default=None)
    profession = models.CharField(max_length=32, blank=True, null=True, default=None)
    location = models.CharField(max_length=128, blank=True, null=True, default=None)
    diplomaID = models.CharField(max_length=32, blank=True, null=True, default=None)
