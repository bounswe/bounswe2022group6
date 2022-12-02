from django.urls import path
from . import views

urlpatterns = [
    path('labels', views.Labels.as_view(), name="labels"),
    path('labels/', views.Labels.as_view(), name="labels/"),
    path('searchpost', views.SearchPost.as_view(), name="searchpost"),
]
