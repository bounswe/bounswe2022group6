from django.urls import path
from . import views

urlpatterns = [
    path("",views.index,name="index"),
    path("search", views.search,name="search"),
    path("api",views.api,name="api"),
    path("list",views.list,name="list"),
    path("deleteHistory",views.deleteHistory,name="deleteHistory"),
]