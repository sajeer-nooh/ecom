from ast import Store
from django.shortcuts import get_object_or_404, render
from .serializers import CartSerializer, CartItemSerializer
from user.models import User
from cart.models import Cart, CartItem
from product.models import Product
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

class CreateCart(APIView):

     def post(self, request):
        print("request: ", request)
        serializer = CartSerializer(data=request.data)

        if serializer.is_valid():
            cart = serializer.save()
            response_data = {
                'id': cart.id,
                'cart': serializer.data
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class GetCart(APIView):
    def get(self, request):
        user = request.user
        cart_id = request.GET.get('cart_id')
        # if not user.is_authenticated:
        #     return render(request, "login.html")

        try:
            cart = Cart.objects.get(pk=cart_id)
            # get all cart items with related products details

            cart_items = cart.cartitem_set.prefetch_related("product").all().values('id', 'product__id', 'product__name', 'product__price', 'product__images', 'quantity')
            response_data = {
                "cart": cart.id,
                "cart_items": cart_items
            }
            print('res', response_data)
            return Response(response_data, status=status.HTTP_200_OK)
        except Cart.DoesNotExist:
            return Response({'error': 'Cart does not exist'}, status=status.HTTP_400_BAD_REQUEST)

            
    
class AddCartItem(APIView):
    def post(self, request):
        # Create cart here
        user = request.user
        serializer = CartItemSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=400)
        
        
        product_id=request.data.get('product')
        cart_id=request.data.get('cart')
        # Check if item already exists in cart
        existing_item = CartItem.objects.filter(product=product_id).first()

        if existing_item:
            existing_item.quantity += 1
            existing_item.save()
        else:
            # Create a new CartItem
            product = Product.objects.get(pk=product_id)
            cart = Cart.objects.get(pk=cart_id)
            CartItem.objects.create(cart=cart, product=product, quantity=1)

        return Response("Item addedd successfuly", status=204)
    
class RemoveCartItem(APIView):
    def delete(self, request, pk):
        user = request.user
        cart_item = get_object_or_404(CartItem, pk=pk)
        cart_item.delete()
        return Response(status=204)

class UpdateCartItem(APIView):
    def put(self, request, pk):
        user = request.user
        cart_item = CartItem.objects.get(pk=pk)
        serializer = CartItemSerializer(cart_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

       