from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('location', views.Location.as_view(), name='location'),
    path('info', views.Info.as_view(), name='info'),
]
