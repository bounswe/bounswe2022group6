from django.urls import path
from . import views

urlpatterns = [
    path('labels', views.Labels.as_view(), name="labels"),
    path('labels/', views.Labels.as_view(), name="labels/"),
]
