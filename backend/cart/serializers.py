from product.serializers import ProductReadSerializer
from rest_framework import serializers
from cart.models import Cart, CartItem

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'

class CartItemsReadSerializer(serializers.ModelSerializer):
    product = ProductReadSerializer()

    class Meta:
        model = CartItem
        fields = '__all__'


class CartReadSerializer(serializers.ModelSerializer):
    cart_items = CartItemsReadSerializer(many=True)

    class Meta:
        model = Cart
        fields = '__all__'