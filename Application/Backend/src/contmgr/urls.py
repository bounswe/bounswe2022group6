from django.urls import path
from . import views

urlpatterns = [
    path('post', views.PostView.as_view(), name='post'),
    path('comment', views.CommentView.as_view(), name='comment'),
    path('post/', views.PostView.as_view(), name='post'),
    path('comment/', views.CommentView.as_view(), name='comment'),
    path('postvote', views.PostView.as_view(), name='post'),
    path('commentvote', views.CommentView.as_view(), name='comment'),
    path('postvote/', views.PostView.as_view(), name='post'),
    path('commentvote/', views.CommentView.as_view(), name='comment'),
]
