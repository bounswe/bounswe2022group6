from django.urls import path

from . import views

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('iplocation', views.getIpLocation, name='iplocation'),
    path('places', views.places, name='places'),
    path('user', views.userLocation, name='user'),
    path('near', views.nearLocation, name='near'),
]
