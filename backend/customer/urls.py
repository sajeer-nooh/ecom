from django.urls import path
from customer.views import GeCustomerAPIView

urlpatterns = [
    path('get-customer', GeCustomerAPIView.as_view())
]
