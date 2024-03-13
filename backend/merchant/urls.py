from django.urls import path
from merchant.views import GetMerchentAPIView

urlpatterns = [
    path('get-merchent', GetMerchentAPIView.as_view())
]
