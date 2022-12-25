from rest_framework import serializers
from .models import *
from ..accmgr.serializers import RegisteredUserSerializer

class PostSerializer(serializers.ModelSerializer):

    owner = RegisteredUserSerializer(read_only=True)
    class Meta:
        model = Post
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['comments'] = [CommentSerializer(comment).data for comment in instance.children_comments.all()]
        data['result_vote'] = len(instance.upvoted_users.all()) - len(instance.downvoted_users.all())
        return data

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['comments'] = [CommentSerializer(comment).data for comment in instance.children_comments.all()]
        data['result_vote'] = len(instance.upvoted_users.all()) - len(instance.downvoted_users.all())
        return data

class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = '__all__'