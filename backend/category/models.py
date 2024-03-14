from django.db import models
import uuid

class Category(models.Model):
    """
    Product category. Single priduct can have only many categories
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True)
