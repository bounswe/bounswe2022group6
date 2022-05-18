from django.urls import path
from .views import *

urlpatterns = [
    path('api', advice_api.as_view(), name="advice_api"),
    path('', advice_home.as_view(), name="advice_home"),
]