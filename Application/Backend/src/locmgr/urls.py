from django.urls import path
from . import views

urlpatterns = [
    path('info', views.Info.as_view(), name='info'),
    path('info/', views.Info.as_view(), name='info'),
    path('location', views.Location.as_view(), name='location'),
    path('location/', views.Location.as_view(), name='location'),
]
