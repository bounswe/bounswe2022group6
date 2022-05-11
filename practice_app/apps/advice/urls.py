from django.urls import path
from .views import *

urlpatterns = [
    path('api', api.as_view(), name="api"),
]