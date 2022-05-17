from django.urls import path
from . import views

app_name = 'user'
urlpatterns = [
    path('api-overview/', views.apiOverview, name="api-overview"),
    path('api-user-list/', views.userList, name="api-user-list"),
    path('api-user-detail/<str:pk>', views.userDetail, name="api-user-detail"),
    path('api-user-create/', views.userCreate, name="api-user-create"),
    path('', views.index ,name="user-home"),
    path('user-list/', views.listAll,name="user-list"),
    path('user-detail/', views.listOne ,name="user-detail"),
    path('user-detail-worker', views.listOneWorker, name="user-detail-worker"),
    path('user-create/', views.addNew ,name="user-create"),
    path('user-create-worker', views.addNewWorker, name="user-create-worker"),
]
