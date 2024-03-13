from customer.models import Customer, Cart, Order, Payment
from rest_framework import serializers


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = "__all__"

class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = "__all__"

class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = "__all__"

class PaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Payment
        fields = "__all__"
