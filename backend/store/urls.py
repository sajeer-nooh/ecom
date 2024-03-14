from django.urls import path
from .views import GetAuthenticatedStore


urlpatterns = [
    path('store/', GetAuthenticatedStore.as_view(), name='get_store'),    
]