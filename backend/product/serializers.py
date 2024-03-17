from user.models import User
from rest_framework import serializers
from .models import Product

class ProductReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        
class ProductSerializer(serializers.ModelSerializer):
    created_by = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    def create(self, validated_data):
        return Product.objects.create(
            created_by=validated_data['created_by'],
            name=validated_data['name'],
            name_ar=validated_data['name_ar'],
            description=validated_data['description'],
            description_ar=validated_data['description_ar'],
            stock=validated_data['stock'],
            price=validated_data['price'],
            images=validated_data['images'])


    class Meta:
        model = Product
        fields = '__all__'
 

