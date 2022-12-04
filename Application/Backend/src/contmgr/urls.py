from django.urls import path
from . import views

urlpatterns = [
    path('post', views.PostView.as_view(), name='post'),
]
