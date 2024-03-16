from django.contrib import admin
from django.contrib.auth.hashers import make_password, check_password

from cart.models import Cart, CartItem

class CartItemAdmin(admin.ModelAdmin):
    list_display = ('id',)

class CartAdmin(admin.ModelAdmin):
    list_display = ('id',)


admin.site.register(CartItem, CartItemAdmin)
admin.site.register(Cart, CartAdmin)
