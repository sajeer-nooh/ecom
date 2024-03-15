from django.contrib import admin
from django.contrib.auth.hashers import make_password, check_password
from order.models import Order


class OrderAdmin(admin.ModelAdmin):
    list_display = ('id',)



admin.site.register(Order, OrderAdmin)
