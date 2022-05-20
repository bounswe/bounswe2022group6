from django.urls import path
from . import views
from django.shortcuts import render
app_name= 'report'
urlpatterns = [
    path('',views.index),
    path('index-worker/',views.indexWorker),
]