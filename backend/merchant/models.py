
from django.db import models
from django.db import models

class Merchant(models.Model):
    store_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    address = models.TextField(blank=True) 
    opening_hour = models.TimeField(blank=True, null=True)
    closing_hour = models.TimeField(blank=True, null=True)
    currency = models.CharField(max_length=10, default='KWD')

    def __str__(self):
        return self.name

class ProductCategory(models.Model):
    name = models.CharField(max_length=100)
    merchant = models.ForeignKey(Merchant, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    nameAr = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=200)
    descriptionAr = models.CharField(max_length=200)    
    stock = models.PositiveIntegerField(default=0)
    merchant = models.ForeignKey(Merchant, on_delete=models.CASCADE)
    images = models.JSONField(default=list)
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
