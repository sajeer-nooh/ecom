from django.shortcuts import render
from order.models import Order
from rest_framework import status
from user.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import OrderSerializer
    
class GetAllOrdersByStore(APIView):
     def get(self, request):
        store = request.GET.get('store')
        orders = Order.objects.filter(store=store)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

class GetAllOrdersByCustomer(APIView):
     def get(self, request):
        customer = request.GET.get('customer')
        orders = Order.objects.filter(customer=customer)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

class OrderCreateView(APIView):
    def post(self, request):
        # Create view order here
        try:
            serializer = OrderSerializer(data=request.data)

            if serializer.is_valid():
                product = serializer.save()
                response_data = {
                    'id': product.id,
                }
                return Response(response_data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except (User.DoesNotExist):
            return Response({'error': 'Invalid user ID provided'}, status=status.HTTP_400_BAD_REQUEST)

        
class OrderUpdate(APIView):
    def put(self, request, pk):
        order = Order.objects.get(pk=pk)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    