from django.urls import path
from .views import GetAuthenticatedStore


urlpatterns = [
    path('info/', GetAuthenticatedStore.as_view(), name='get_store'),    
]