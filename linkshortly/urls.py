from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from api.views import retrieve_and_redirect
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('l/<short_url>/', retrieve_and_redirect, name='retrieve' ),
    re_path('.*', TemplateView.as_view(template_name="index.html") )
    
]



