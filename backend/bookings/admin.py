from django.contrib import admin

from .models import Booking


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = (
        "tracking_number",
        "customer",
        "status",
        "driver",
        "vehicle",
        "estimated_fare",
        "created_at",
    )

    list_filter = (
        "status",
        "delivery_type",
        "created_at",
    )

    search_fields = (
        "tracking_number",
        "customer__username",
        "customer__email",
        "vehicle__vehicle_number",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )