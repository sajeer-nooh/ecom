from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        if not username:
            raise ValueError('Users must have a username')
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            username=username,
            email=email,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

class Merchant(AbstractBaseUser):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    store_name = models.CharField(max_length=255)
    address = models.TextField(blank=True) 
    opening_hour = models.TimeField(blank=True, null=True)
    closing_hour = models.TimeField(blank=True, null=True)


    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    def __str__(self):
        return self.username

class Category(models.Model):
    name = models.CharField(max_length=50)
    nameAr = models.CharField(max_length=50)


class Product(models.Model):
    title = models.CharField(max_length=100)
    titleAr = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    descriptionAr = models.CharField(max_length=200)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    merchant = models.ForeignKey(Merchant, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=0)
    media = ArrayField(models.CharField(blank=True),size=10),
#     def get_image_filename(instance, filename):
#         title = instance.product.title
#         return "product_images/%s-%s" % (title, filename)  

# class Image(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
#     image = models.ImageField(upload_to='product_images/', verbose_name='Image')
