from django.urls import path
from . import views

urlpatterns = [
    path("", views.news_home, name="newsHome"),
    path("home", views.news_home, name="news_home"),
    path("newsWithQuery", views.news_with_query, name="newsWithQuery"),
    path("newsWithoutQuery", views.news_without_query, name="newsWithoutQuery")
]