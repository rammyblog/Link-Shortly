from django.urls import path
from .views import LinkViewSet, retrieve_and_redirect
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'short', LinkViewSet, basename='short_url')
urlpatterns = [
    
 ]
 

urlpatterns += router.urls
