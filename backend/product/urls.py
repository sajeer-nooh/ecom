from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('list/', views.ProductList.as_view(), name='product_list'),
    path('create/', views.ProductCreateView.as_view(), name='product_create'),
    path('<str:pk>/', views.ProductDetail.as_view(), name='product_detail'),
    path('update/<str:pk>', views.ProductUpdate.as_view(), name='product_update'),
    path('delete/<str:pk>/', views.ProductDelete.as_view(), name='product_delete'),
]