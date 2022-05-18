from django.urls import path
from . import views

app_name = 'user'

urlpatterns = [
    path('', views.index ,name="user-home"),
    path('user-list/', views.userList,name="user-list"),
    path('user-detail/', views.userDetail ,name="user-detail"),
    path('user-detail-worker', views.userDetailWorker, name="user-detail-worker"),
    path('user-create/', views.userCreate ,name="user-create"),
    path('user-create-worker', views.userCreateWorker, name="user-create-worker"),
    path('api-overview/', views.apiOverview, name="api-overview"),
    path('api-user-list/', views.userListApi, name="api-user-list"),
    path('api-user-detail/<str:pk>', views.userDetailApi, name="api-user-detail"),
    path('api-user-create/', views.userCreateApi, name="api-user-create"),
]
