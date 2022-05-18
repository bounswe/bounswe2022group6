from django.urls import path
from . import views


urlpatterns = [
    path('api', views.api, name="coronavirus_api"),
    path('', views.home, name="coronavirus_home"),
]