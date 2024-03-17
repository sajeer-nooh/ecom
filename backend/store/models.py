from django.db import models
from product.models import Product
from user.models import User
from django.db.models import UniqueConstraint
import uuid
from django.db import models


class Store(models.Model):
    """
    To identify user role either as Customer or Merchant with same(single) user model
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField(blank=True) 
    address = models.TextField(max_length=250, blank=True, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)  # Merchant type role user


class StoreProduct(models.Model):
    """
    This can be also achieved by using ManyToManyField inside store model. But added it here for better understanding and accessibility
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sku = models.CharField(max_length=100, unique=True)
    inventory_count = models.IntegerField(default=0)

    class Meta:
        constraints = [
            UniqueConstraint(fields=['store', 'product'], name='store_product_uniq_key')
        ]


