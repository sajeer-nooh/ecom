from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from store.serializers import StoreSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from user.models import User
from .models import Store

class GetAuthenticatedStore(APIView):
    def get(self, request):
        user_id = request.GET.get('user_id')
        res = Store.objects.get(owner=user_id)
        serializer = StoreSerializer(res)
        return Response(serializer.data)
        


