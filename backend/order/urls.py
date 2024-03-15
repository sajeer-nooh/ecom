from django.urls import path
from . import views

app_name = 'orders'

urlpatterns = [
    path('customer/list/', views.GetAllOrdersByCustomer.as_view(), name='_customer_orders_list'),
    path('store/list/', views.GetAllOrdersByStore.as_view(), name='store_orders_list'),
    path('create/', views.OrderCreateView.as_view(), name='order_create'),
    path('update/<str:pk>', views.OrderUpdate.as_view(), name='order_update'),
]