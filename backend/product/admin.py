from django.contrib import admin
from django.contrib.auth.hashers import make_password, check_password
from product.models import *


class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')



admin.site.register(Product, ProductAdmin)
