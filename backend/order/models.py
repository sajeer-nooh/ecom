from django.db import models
from cart.models import Checkout
from user.models import User
from store.models import Store, StoreProduct

ORDER_STATUS_CHOICES = [
    ('pending', 'Pending'),
    ('processing', 'Processing'),
    ('completed', 'Completed'),
    ('cancelled', 'Cancelled'),
]

REFUND_STATUS_CHOICES = [
    ('initiated', 'initiated'),
    ('completed', 'Completed'),
]

ORDER_TYPE_CHOICES = [
    ('delivery', 'Delivery'),
    ('pickup', 'Pickup'),
]

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Customer role user
    order_amount = models.DecimalField(max_digits=10, decimal_places=2)
    order_items_count = models.IntegerField()
    created_at = models.DateTimeField()
    checkout = models.OneToOneField(Checkout, on_delete=models.CASCADE)
    delivery_address = models.CharField(max_length=100, null=True, default='')
    order_type = models.CharField(max_length=20, choices=ORDER_TYPE_CHOICES, default='delivery')
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    order_type = models.CharField(max_length=20, choices=ORDER_TYPE_CHOICES, default='delivery')

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(StoreProduct, on_delete=models.CASCADE)
    item_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_delivered = models.BooleanField()
    status = models.CharField(max_length=20, choices=ORDER_STATUS_CHOICES, default='pending') 


class CanceledOrder(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=REFUND_STATUS_CHOICES, default='initiated')
    refund_amount = models.DateTimeField()
    refund_initiated_at = models.DateTimeField()
    refund_completed_at = models.DateTimeField()
