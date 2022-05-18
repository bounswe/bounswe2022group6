from django.urls import path
from . import views

urlpatterns = [
    path("",views.index,name="article-index"),
    path("search", views.search,name="article-search"),
    path("api",views.api,name="article-api"),
    path("list",views.list,name="article-list"),
    path("deleteHistory",views.deleteHistory,name="article-deleteHistory"),
]