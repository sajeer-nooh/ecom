from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from rest_framework.views import APIView
from user.models import User
from .models import Store

class UpdateStoreApiView(APIView):
    def put(self, request):
        data = request.data
        store = get_object_or_404(Store, id=data.store_id)
        store.currency = data.get('currenct')
        store.language = data.get('language')
        store.save(update_fields=['currency', 'language'])


