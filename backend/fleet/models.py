from django.conf import settings
from django.db import models


class Fleet(models.Model):
    name = models.CharField(max_length=150)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="fleets",
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class DriverProfile(models.Model):

    class Status(models.TextChoices):
        AVAILABLE = "AVAILABLE", "Available"
        ON_TRIP = "ON_TRIP", "On Trip"
        OFFLINE = "OFFLINE", "Offline"

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="driver_profile",
    )

    license_number = models.CharField(
        max_length=50,
        unique=True,
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.OFFLINE,
    )

    rating = models.DecimalField(
        max_digits=3,
        decimal_places=2,
        default=0.00,
    )

    current_latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
    )

    current_longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.user.username


class Vehicle(models.Model):

    class VehicleType(models.TextChoices):
        BIKE = "BIKE", "Bike"
        THREE_WHEELER = "THREE_WHEELER", "Three Wheeler"
        MINI_TRUCK = "MINI_TRUCK", "Mini Truck"
        TRUCK = "TRUCK", "Truck"

    class Status(models.TextChoices):
        AVAILABLE = "AVAILABLE", "Available"
        ON_TRIP = "ON_TRIP", "On Trip"
        MAINTENANCE = "MAINTENANCE", "Maintenance"
        INACTIVE = "INACTIVE", "Inactive"

    fleet = models.ForeignKey(
        Fleet,
        on_delete=models.CASCADE,
        related_name="vehicles",
    )

    vehicle_number = models.CharField(
        max_length=30,
        unique=True,
    )

    vehicle_type = models.CharField(
        max_length=30,
        choices=VehicleType.choices,
    )

    capacity_kg = models.DecimalField(
        max_digits=8,
        decimal_places=2,
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.AVAILABLE,
    )

    current_latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
    )

    current_longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.vehicle_number