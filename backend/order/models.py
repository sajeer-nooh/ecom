from django.db import models
from product.models import Product
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
    order_no = models.CharField(max_length=10, unique=True, default="")
    customer = models.ForeignKey(User, on_delete=models.CASCADE)  # Customer role user
    order_amount = models.DecimalField(max_digits=10, decimal_places=2)
    order_items_count = models.IntegerField()
    created_at = models.DateTimeField()
    delivery_address = models.CharField(max_length=100, null=True, default='')
    order_type = models.CharField(max_length=20, choices=ORDER_TYPE_CHOICES, default='delivery')
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    order_status = models.CharField(max_length=20, choices=ORDER_STATUS_CHOICES, default='delivery')
    products = models.ManyToManyField(Product)
