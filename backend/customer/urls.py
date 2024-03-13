from django.urls import path
from merchant.views import GetMerchantAPIView

urlpatterns = [
    path('get-customer', GetMerchantAPIView.as_view())
]
