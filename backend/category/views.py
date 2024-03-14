from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category
from .serializers import CategorySerializer

class CreateCategory(APIView):
    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class CategoryList(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    
class CategoryUpdate(APIView):
    def put(self, request, pk):
        product = Category.objects.get(pk=pk)
        serializer = CategorySerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
class CategoryDelete(APIView):
    def delete(self, request, pk):
        product = Category.objects.get(pk=pk)
        product.delete()
        return Response(status=204)
    