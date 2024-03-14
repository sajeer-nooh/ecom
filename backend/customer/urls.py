from django.urls import path
from customer.views import GeCustomerAPIView, RegisterCustomerAPIView

urlpatterns = [
    path('get-customer', GeCustomerAPIView.as_view()),
    path('create-customer', RegisterCustomerAPIView.as_view())
]
