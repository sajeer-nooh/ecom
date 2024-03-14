from django.urls import path
from .views import CustomerRegistrationView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('register/', CustomerRegistrationView.as_view(), name='register'),    
]