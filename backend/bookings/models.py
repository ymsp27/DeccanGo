from django.conf import settings
from django.db import models

from fleet.models import DriverProfile, Vehicle


class Booking(models.Model):

    class Status(models.TextChoices):
        PENDING = "PENDING", "Pending"
        CONFIRMED = "CONFIRMED", "Confirmed"
        DRIVER_ASSIGNED = "DRIVER_ASSIGNED", "Driver Assigned"
        DRIVER_ARRIVING = "DRIVER_ARRIVING", "Driver Arriving"
        ARRIVED_AT_PICKUP = "ARRIVED_AT_PICKUP", "Arrived at Pickup"
        PICKED_UP = "PICKED_UP", "Picked Up"
        IN_TRANSIT = "IN_TRANSIT", "In Transit"
        ARRIVING = "ARRIVING", "Arriving"
        DELIVERED = "DELIVERED", "Delivered"
        CANCELLED = "CANCELLED", "Cancelled"
        FAILED = "FAILED", "Failed"
        RETURNED = "RETURNED", "Returned"

    class DeliveryType(models.TextChoices):
        STANDARD = "STANDARD", "Standard"
        EXPRESS = "EXPRESS", "Express"
        SCHEDULED = "SCHEDULED", "Scheduled"

    tracking_number = models.CharField(
        max_length=30,
        unique=True,
        blank=True,
    )


    customer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="bookings",
    )

    driver = models.ForeignKey(
        DriverProfile,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="bookings",
    )

    vehicle = models.ForeignKey(
        Vehicle,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="bookings",
    )

    # Pickup
    pickup_address = models.TextField()

    pickup_latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
    )

    pickup_longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
    )

    # Delivery
    delivery_address = models.TextField()

    delivery_latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
    )

    delivery_longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
    )

    # Package
    package_type = models.CharField(
        max_length=100,
    )

    weight_kg = models.DecimalField(
        max_digits=8,
        decimal_places=2,
    )

    quantity = models.PositiveIntegerField(
        default=1,
    )

    # Delivery
    delivery_type = models.CharField(
        max_length=20,
        choices=DeliveryType.choices,
        default=DeliveryType.STANDARD,
    )

    status = models.CharField(
        max_length=30,
        choices=Status.choices,
        default=Status.PENDING,
    )

    # Pricing
    estimated_fare = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
    )

    final_fare = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
    )

    # Timestamps
    scheduled_pickup = models.DateTimeField(
        null=True,
        blank=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    def save(self, *args, **kwargs):
        if not self.tracking_number:
            last_booking = (
                Booking.objects
                .filter(tracking_number__startswith="HYD")
                .order_by("-id")
                .first()
            )

            if last_booking and last_booking.tracking_number:
                try:
                    last_number = int(
                        last_booking.tracking_number.replace("HYD", "")
                    )
                except ValueError:
                    last_number = 100000
            else:
                last_number = 100000

            self.tracking_number = f"HYD{last_number + 1}"

        super().save(*args, **kwargs)

    def __str__(self):
        return self.tracking_number