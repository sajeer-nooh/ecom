from django.contrib import admin
from django.contrib.auth.hashers import make_password, check_password
from store.models import *


class StoreAdmin(admin.ModelAdmin):
    list_display = ('id',)



admin.site.register(Store, StoreAdmin)
