from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
import uuid

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(email=email)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password=password)
        user.is_superuser = True
        user.save(using=self._db)
        return user

class Role(models.Model):
    """
    To identify user role either as Customer or Merchant with same(single) user model
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True)  # Customer or Merchant
    def __str__(self):
        return self.name


class User(AbstractBaseUser):
    """
    User model user model implementation
    """
    email = models.EmailField(unique=True)
    language = models.CharField(max_length=5, default='AR', blank=True, null=True)
    currency = models.CharField(max_length=5, default='KWD', blank=True, null=True)
    roles = models.ForeignKey(Role, on_delete=models.CASCADE, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'

    objects = UserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin



class Customer(models.Model):
    """
    Customer user model implementation
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name="customer", blank=True)



class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='address')
    address = models.TextField()
