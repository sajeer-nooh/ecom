from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .serializers import UserRegistrationSerializer, UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

class CustomerRegistrationView(APIView):
    permission_classes = [AllowAny]


    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        print(serializer)
        # if serializer.is_valid():
            # serializer.save()
        # Create customer
        # user = User.objects.create_user(username=username, email=username, password=password)

        if serializer.is_valid():
            user = serializer.save()
            # Generate token
            refresh = RefreshToken.for_user(user)
            token = str(refresh.access_token)
            response_data = {
                'token': token,
                'refresh': str(refresh),
                'customer': {
                    'id': user.id,
                    'email': user.email
                }
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
