from rest_framework import serializers
from .models import *

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('first_name', 'last_name', 'phone_number', 'verified_as_doctor', 'profile_picture', 'profession', 'location', 'diplomaID')

class RegisteredUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisteredUser
        fields = ('userID', 'username', 'email', 'is_active', 'is_admin', 'is_staff', 'is_superuser', 'last_login', 'date_joined', 'birth_date', 'gender', 'is_messaging_allowed', 'is_notification_allowed')