from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('list', views.ProductList.as_view(), name='product_list'),
    path('create/', views.ProductCreateView.as_view(), name='product_create'),
    path('<int:pk>/', views.ProductDetail.as_view(), name='product_detail'),
    path('<int:pk>/update/', views.ProductUpdate.as_view(), name='product_update'),
    path('<int:pk>/delete/', views.ProductDelete.as_view(), name='product_delete'),
]