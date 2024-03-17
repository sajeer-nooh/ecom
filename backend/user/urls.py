from django.urls import path
from .views import CustomerRegistrationView, GetUserRoles, MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('register/', CustomerRegistrationView.as_view(), name='register'), 
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), 
    path('roles/', GetUserRoles.as_view(), name='get_roles'),   
]