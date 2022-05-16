
from django.urls import path, include
from . import views

urlpatterns = [
    path("",views.postindex,name="postindex"),
    path("indexHome",views.postindex,name="indexHome"),
    path("getPost", views.getPost, name="getPost"),
    path("createPost", views.createPost, name="createPost"),
]
