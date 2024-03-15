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
        fields = ('email', 'password', 'currency', 'language', 'roles')

    def create(self, validated_data):
        return User.objects.create(
            email=validated_data['email'],
            password=validated_data['password'],
            roles=validated_data['roles'])
