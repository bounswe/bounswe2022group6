from django.urls import path
from . import views

urlpatterns = [
    path('register', views.RegisterUser.as_view(), name="register"),
    path('register/', views.RegisterUser.as_view(), name="register/"),
    path('login', views.LoginUser.as_view(), name="login"),
    path('login/', views.LoginUser.as_view(), name="login/"),
    path('logout', views.LogoutUser.as_view(), name="logout"),
    path('logout/', views.LogoutUser.as_view(), name="logout/"),
    path('profile', views.Profile.as_view(), name="profile"),
    path('profile/', views.Profile.as_view(), name="profile/"),
    path('uploadprofpic', views.UploadProfPic.as_view(), name="uploadprofpic"),
    path('uploadprofpic/', views.UploadProfPic.as_view(), name="uploadprofpic/"),
    path('viewprofile', views.ViewProfile.as_view(), name="viewprofile"),
    path('viewprofile/', views.ViewProfile.as_view(), name="viewprofile/"),
]
