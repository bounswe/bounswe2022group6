from django.urls import path
from . views import *


urlpatterns = [
    path('', IndexView.as_view(), name='home'),
    path('api/get/<city>/', getHospitals.as_view(), name='get_city'),
    path('api/post/', getHospitals.as_view(), name='post_hospital'),
    path('thanks/', Thanks.as_view()),
    path('error/', Error.as_view()),
]