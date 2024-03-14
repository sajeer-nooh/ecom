from django.db import models
import uuid
from category.models import Category
from user.models import User

class Brand(models.Model):
    """
    Product brancd. Single priduct can have only one brand
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True)


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True)
    name_ar = models.CharField(max_length=100, unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=200)
    description_ar = models.CharField(max_length=200)    
    stock = models.PositiveIntegerField(default=0)
    merchant = models.ForeignKey(User, on_delete=models.CASCADE)  # Merchant type role user
    images = models.JSONField(default=list)
    color = models.CharField(max_length=100)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    categories = models.ManyToManyField(Category)  # One product can come under multiple categories


