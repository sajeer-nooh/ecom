from merchant.models import Merchant, Product, Category
from rest_framework import serializers


class MerchantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Merchant
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Merchant
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Merchant
        fields = "__all__"
