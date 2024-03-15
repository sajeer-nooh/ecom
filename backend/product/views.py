from django.shortcuts import render
from rest_framework import status
from category.models import Category
from user.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class GetAllProducts(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
class ProductList(APIView):
    def get(self, request):
        created_by = request.GET.get('created_by')
        products = Product.objects.filter(created_by=created_by)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductCreateView(APIView):
    def post(self, request):
        try:
            serializer = ProductSerializer(data=request.data)

            if serializer.is_valid():
                product = serializer.save()
                response_data = {
                    'id': product.id,
                    'product': serializer.data
                }
                return Response(response_data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except (User.DoesNotExist, Category.DoesNotExist):
            return Response({'error': 'Invalid user or category ID provided'}, status=status.HTTP_400_BAD_REQUEST)

    
class ProductDetail(APIView):
    def get(self, request, pk):
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    
class ProductUpdate(APIView):
    def put(self, request, pk):
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
class ProductDelete(APIView):
    def delete(self, request, pk):
        product = Product.objects.get(pk=pk)
        product.delete()
        return Response(status=204)
    