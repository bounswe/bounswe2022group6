from django.urls import path
from . import views

urlpatterns = [
    path('post', views.Post.as_view(), name='post'),
]
