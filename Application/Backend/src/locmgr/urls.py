from django.urls import path
from . import views

urlpatterns = [
    path('info', views.Info.as_view(), name='info'),
    path('info/', views.Info.as_view(), name='info'),
]
