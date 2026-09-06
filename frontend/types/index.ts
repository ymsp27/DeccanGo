export type UserRole =
  | "CUSTOMER"
  | "BUSINESS"
  | "DRIVER"
  | "FLEET_OWNER"
  | "DISPATCHER"
  | "SUPPORT_AGENT"
  | "ADMIN"
  | "SUPER_ADMIN";

export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "DRIVER_ASSIGNED"
  | "DRIVER_ARRIVING"
  | "ARRIVED_AT_PICKUP"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "ARRIVING"
  | "DELIVERED"
  | "CANCELLED"
  | "FAILED"
  | "RETURNED";

export type VehicleCategory =
  | "bike"
  | "auto"
  | "erickshaw"
  | "tata_ace"
  | "1ton"
  | "2_5ton"
  | "refrigerated";

export interface VehicleSpec {
  id: VehicleCategory;
  name: string;
  tagline: string;
  capacity: string;
  dimensions: string;
  startingPrice: number;
  baseFare: number;
  perKmRate: number;
  minFare: number;
  etaMinutes: number;
  iconName: string;
  popular?: boolean;
  evAvailable?: boolean;
  description: string;
}

export interface HyderabadHub {
  id: string;
  name: string;
  zone: "West" | "Central" | "North" | "South" | "East";
  status: "Active" | "Limited" | "Coming Soon";
  coordinates: [number, number]; // [lat, lng]
  hubType: "Commercial" | "Industrial" | "Residential" | "Airport" | "Tech Park";
  activeDrivers: number;
}

export interface RouteStop {
  id: string;
  name: string;
  area: string;
  coordinates: [number, number];
  type: "pickup" | "drop";
  contactPerson?: string;
  contactPhone?: string;
  orderSequence: number;
  status: "pending" | "completed" | "in-transit";
  timeWindow?: string;
}

export interface MultiStopRoute {
  id: string;
  stops: RouteStop[];
  totalDistanceKm: number;
  estimatedDuration: string;
  optimized: boolean;
  estimatedCost: number;
}

export interface ShipmentOrder {
  id: string;
  trackingNumber: string;
  pickupLocation: string;
  dropLocation: string;
  packageType: string;
  weightKg: number;
  vehicleType: VehicleCategory;
  deliveryType: "express" | "standard" | "scheduled";
  status: OrderStatus;
  estimatedFare: number;
  driver?: {
    name: string;
    phone: string;
    rating: number;
    vehicleModel: string;
    vehiclePlate: string;
    currentLocation: string;
    avatarUrl?: string;
    etaMinutes: number;
  };
  timeline: {
    status: OrderStatus;
    title: string;
    timestamp: string;
    completed: boolean;
    active: boolean;
  }[];
  proofOfDelivery?: {
    deliveredAt: string;
    photoUrl: string;
    signatureUrl: string;
    gpsCoordinates: string;
    recipientName: string;
    otpVerified: boolean;
  };
  createdAt: string;
}

export interface FleetVehicle {
  id: string;
  plateNumber: string;
  vehicleType: string;
  driverName: string;
  status: "Available" | "Busy" | "Maintenance" | "Offline";
  todayTrips: number;
  batteryOrFuel: string;
  lastLocation: string;
}

export interface DriverJob {
  id: string;
  pickup: string;
  pickupTime: string;
  drop: string;
  distanceKm: number;
  earnings: number;
  status: "available" | "accepted" | "picked_up" | "delivered";
}

export interface BusinessAnalytics {
  todayOrders: number;
  deliveredOrders: number;
  inTransitOrders: number;
  failedOrders: number;
  totalDistanceKm: number;
  deliveryCost: number;
  codCollected: number;
  successRate: number;
  ordersTrend: {
    time: string;
    orders: number;
    delivered: number;
  }[];
  vehicleUtilization: {
    name: string;
    percentage: number;
    fill: string;
  }[];
}
