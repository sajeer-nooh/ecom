import uuid
from django.db import models
from user.models import User, Address
from store.models import StoreProduct

PAYMENT_METHOD_CHOICES = [
    ('cash', 'Cash'),
    ('online', 'Online'),
]

PAYMENT_STATUS_CHOICES = [
    ('success', 'success'),
    ('fail', 'fail'),
]

class Cart(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Customer role user
    cart_amount = models.DecimalField(max_digits=10, decimal_places=2)
    cart_items_count = models.IntegerField()
    cart_added_date = models.DateTimeField()
    cart_last_updated_date = models.DateTimeField()


class CartItems(models.Model):
    cart = models.ForeignKey(Cart,  on_delete=models.CASCADE)
    product = models.ForeignKey(StoreProduct,  on_delete=models.CASCADE)
    initial_price = models.DecimalField(max_digits=10, decimal_places=2)
    current_price = models.DecimalField(max_digits=10, decimal_places=2)

class Payment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    invoice_id = models.CharField(max_length=250)
    payment_amount = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES, default='cash')
    status = models.CharField(max_length=20, choices=PAYMENT_STATUS_CHOICES, default='initiated')  # Add choice


class Checkout(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cart = models.OneToOneField(Cart, on_delete=models.CASCADE)
    address = models.ForeignKey(Address,  on_delete=models.CASCADE)
    discount = models.DecimalField(max_digits=10, decimal_places=2)
    items_total = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_fee = models.DecimalField(max_digits=10, decimal_places=2)
    net_amunt_to_pay = models.DecimalField(max_digits=10, decimal_places=2)
    payment = models.OneToOneField(Payment, null=True, blank=True, on_delete=models.CASCADE)
