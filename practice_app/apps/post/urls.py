
from django.urls import path, include
from . import views

app_name = 'post'
urlpatterns = [
    path("",views.index,name="index"),
    path("indexHome",views.index,name="indexHome"),
    path("getPost", views.getPost, name="getPost"),
    path("createPost", views.createPost, name="createPost"),
]
