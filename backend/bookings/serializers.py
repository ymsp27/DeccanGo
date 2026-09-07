from rest_framework import serializers

from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(
        read_only=True
    )

    class Meta:
        model = Booking
        fields = [
            "id",
            "tracking_number",
            "customer",
            "driver",
            "vehicle",
            "pickup_address",
            "pickup_latitude",
            "pickup_longitude",
            "delivery_address",
            "delivery_latitude",
            "delivery_longitude",
            "package_type",
            "weight_kg",
            "quantity",
            "delivery_type",
            "status",
            "estimated_fare",
            "final_fare",
            "scheduled_pickup",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "tracking_number",
            "customer",
            "status",
            "estimated_fare",
            "final_fare",
            "created_at",
            "updated_at",
        ]

