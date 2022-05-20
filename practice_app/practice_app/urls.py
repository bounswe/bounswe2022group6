"""practice_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('apps.home.urls')),
    path('location_mgr/', include('apps.location_mgr.urls')),
    path('advice/', include('apps.advice.urls')),
    path('article/', include('apps.article.urls')),
    path('news/', include('apps.news.urls')),
    path('user/', include('apps.user.urls')),
    path('post/', include('apps.post.urls')),
    path('coronavirus/', include('apps.coronavirus.urls')),
    path('drug-side-effects/', include('apps.drug_side_effects.urls')),
    path('comment/', include('apps.comment.urls')),
<<<<<<< Updated upstream
    path('Hospi/', include('apps.Hospi.urls')),
=======
    path('hospital/', include('apps.hospital.urls')),
>>>>>>> Stashed changes
]
