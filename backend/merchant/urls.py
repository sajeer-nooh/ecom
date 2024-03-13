from django.urls import path
from merchant.views import GetMerchantAPIView

urlpatterns = [
    path('get-merchant', GetMerchantAPIView.as_view())
]
