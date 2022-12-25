from rest_framework import serializers
from .models import *
class RegisteredUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisteredUser
        exclude = ('password', )

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['first_name'] = instance.account.first_name
        data['last_name'] = instance.account.last_name
        data['phone_number'] = instance.account.phone_number
        data['verified_as_doctor'] = instance.account.verified_as_doctor
        data['profile_picture'] = instance.account.profile_picture
        data['profession'] = instance.account.profession
        data['location'] = instance.account.location
        data['diplomaID'] = instance.account.diplomaID
        data['profile_picture'] = instance.account.image.url
        return data