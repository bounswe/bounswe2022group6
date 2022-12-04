from django.urls import path
from . import views

urlpatterns = [
    path('labels', views.Labels.as_view(), name="labels"),
    path('labels/', views.Labels.as_view(), name="labels/"),
    path('searchpost', views.SearchPost.as_view(), name="searchpost"),
    path('searchpost/', views.SearchPost.as_view(), name="searchpost/"),
    path('post', views.PostView.as_view(), name='post'),
    path('comment', views.CommentView.as_view(), name='comment'),
    path('post/', views.PostView.as_view(), name='post'),
    path('comment/', views.CommentView.as_view(), name='comment'),
    path('postvote', views.PostVote.as_view(), name='post'),
    path('commentvote', views.CommentVote.as_view(), name='comment'),
    path('postvote/', views.PostVote.as_view(), name='post'),
    path('commentvote/', views.CommentVote.as_view(), name='comment'),
]
