from django.urls import path

from . import views

app_name = 'comment'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    # ex: /comment/5/
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    # /comment/insert/
    path('insert/', views.insert, name='insert'),
]
