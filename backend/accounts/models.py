from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):

    class Role(models.TextChoices):
        CUSTOMER = 'CUSTOMER', 'Customer'
        BUSINESS = 'BUSINESS', 'Business'
        DRIVER = 'DRIVER', 'Driver'
        FLEET_OWNER = 'FLEET OWNER', 'Fleet Owner'
        DISPATCHER = 'DISPATCHER', 'Dispatcher'
        SUPPORT_AGENT = 'SUPPORT AGENT', 'Support Agent'
        ADMIN = 'ADMIN', 'Admin'

    role = models.CharField(
        max_length= 30,
        choices= Role.choices,
        default= Role.CUSTOMER
    )

    phone = models.CharField(
        max_length= 15,
        blank= True
    )

    def __str__(self):
        return f'{self.username} - {self.role}'