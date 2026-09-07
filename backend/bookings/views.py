import uuid

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Booking
from .serializers import BookingSerializer


class BookingListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            Booking.objects
            .filter(customer=self.request.user)
            .select_related("customer", "driver", "vehicle")
            .order_by("-created_at")
        )

    def perform_create(self, serializer):
        tracking_number = f"HYD{uuid.uuid4().hex[:8].upper()}"

        serializer.save(
            customer=self.request.user,
            tracking_number=tracking_number,
        )
