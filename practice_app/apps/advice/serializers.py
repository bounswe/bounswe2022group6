from rest_framework import serializers
from .models import AdviceUser

class AdviceUserSerializer(serializers.Serializer):

    age = serializers.IntegerField(max_value=120, min_value=0)
    sex = serializers.ChoiceField([("male", "male"), ("female", "female")])
    tobaccoUse = serializers.IntegerField(max_value=1, min_value=0)
    sexuallyActive = serializers.IntegerField(max_value=1, min_value=0)