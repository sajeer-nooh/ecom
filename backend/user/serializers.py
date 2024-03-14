from rest_framework import serializers
from user.models import Role, User
from rest_framework import status
from rest_framework.response import Response

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password']

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('email', 'password', 'currency', 'language')

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        customer_role_id = Role.objects.get(name="CUSTOMER").id
        customer_role = Role.objects.get(id=customer_role_id) 
        if not customer_role:
            return Response({'error': 'Customer role does not exist. Please create it first.'}, status=status.HTTP_400_BAD_REQUEST)

        user.roles = customer_role
        return user