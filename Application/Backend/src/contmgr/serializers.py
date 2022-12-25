from rest_framework import serializers
from .models import *
from ..accmgr.serializers import RegisteredUserSerializer

class PostSerializer(serializers.ModelSerializer):

    owner = RegisteredUserSerializer(read_only=True)
    mentioned_users = RegisteredUserSerializer(read_only=True, many=True)
    upvoted_users = RegisteredUserSerializer(read_only=True, many=True)
    downvoted_users = RegisteredUserSerializer(read_only=True, many=True)
    class Meta:
        model = Post
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['comments'] = [CommentSerializer(comment).data for comment in instance.children_comments.all()]

        data['result_vote'] = len(instance.upvoted_users.all()) - len(instance.downvoted_users.all())

        data['imageURL'] = instance.image.url if instance.image else None

        text_annotations = TextAnnotation.objects.using("annotation").filter(content_id= instance.postID, content_type= "p")
        data["text_annotations"] = [text_annotation.jsonld for text_annotation in text_annotations]

        image_annotations = ImageAnnotation.objects.using("annotation").filter(content_id=instance.postID)
        data["image_annotations"] = [image_annotation.jsonld for image_annotation in image_annotations]
        
        return data

class CommentSerializer(serializers.ModelSerializer):

    owner = RegisteredUserSerializer(read_only=True)
    mentioned_users = RegisteredUserSerializer(read_only=True, many=True)
    upvoted_users = RegisteredUserSerializer(read_only=True, many=True)
    downvoted_users = RegisteredUserSerializer(read_only=True, many=True)
    class Meta:
        model = Comment
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['comments'] = [CommentSerializer(comment).data for comment in instance.children_comments.all()]
        data['result_vote'] = len(instance.upvoted_users.all()) - len(instance.downvoted_users.all())

        text_annotations = TextAnnotation.objects.using("annotation").filter(content_id = instance.commentID, content_type = "c")
        data["text_annotations"] = [text_annotation.jsonld for text_annotation in text_annotations]

        return data

class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = '__all__'