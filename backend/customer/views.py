from django.shortcuts import render
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class GeCustomerAPIView(APIView):
    def get(self, request):
        return Response({
            'name': 'Customer: mena'
        })


class RegisterCustomerAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Get customer data from request
        username = request.data.get('username')
        password = request.data.get('password')

        # Create customer
        user = User.objects.create_user(username=username, email=username, password=password)

        # Generate token
        refresh = RefreshToken.for_user(user)
        token = str(refresh.access_token)

        # Return token and customer data in response
        return Response({
            'token': token,
            'customer': {
                'id': user.id,
                'email': user.email
            }
        }, status=status.HTTP_201_CREATED)