from django.contrib import admin

from .models import Fleet, DriverProfile, Vehicle


@admin.register(Fleet)
class FleetAdmin(admin.ModelAdmin):
    list_display = ("name", "owner", "created_at")


@admin.register(DriverProfile)
class DriverProfileAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "license_number",
        "status",
        "rating",
    )

    list_filter = ("status",)


@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = (
        "vehicle_number",
        "vehicle_type",
        "fleet",
        "capacity_kg",
        "status",
    )

    list_filter = (
        "vehicle_type",
        "status",
    )