from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response


class GetMerchentAPIView(APIView):
    def get(self, request):
        return Response({
            'name': 'mena'
        })
    