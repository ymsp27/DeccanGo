import { RouteStop } from "@/types";

// Approximate Haversine distance between two coordinates in kilometers
export function calculateHaversineDistance(
  coord1: [number, number],
  coord2: [number, number]
): number {
  const [lat1, lon1] = coord1;
  const [lat2, lon2] = coord2;
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const roadWindingFactor = 1.35; // City road network routing coefficient
  return Math.round(R * c * roadWindingFactor * 10) / 10;
}

// Simulated Traveling Salesperson Problem (TSP) Nearest-Neighbor Heuristic for Hyderabad Routes
export function optimizeStopsSequence(stops: RouteStop[]): {
  optimizedStops: RouteStop[];
  totalDistanceKm: number;
  estimatedMinutes: number;
} {
  if (stops.length <= 2) {
    return {
      optimizedStops: stops,
      totalDistanceKm: 14,
      estimatedMinutes: 45,
    };
  }

  // First stop is always the origin / warehouse pickup
  const origin = stops[0];
  const remaining = stops.slice(1);
  const ordered: RouteStop[] = [origin];

  let currentCoord = origin.coordinates;
  while (remaining.length > 0) {
    let nearestIndex = 0;
    let minDistance = calculateHaversineDistance(currentCoord, remaining[0].coordinates);

    for (let i = 1; i < remaining.length; i++) {
      const dist = calculateHaversineDistance(currentCoord, remaining[i].coordinates);
      if (dist < minDistance) {
        minDistance = dist;
        nearestIndex = i;
      }
    }

    const nextStop = remaining.splice(nearestIndex, 1)[0];
    ordered.push(nextStop);
    currentCoord = nextStop.coordinates;
  }

  // Recalculate sequences
  const result = ordered.map((s, idx) => ({
    ...s,
    orderSequence: idx + 1,
  }));

  // Calculate total route distance
  let totalDist = 0;
  for (let i = 0; i < result.length - 1; i++) {
    totalDist += calculateHaversineDistance(
      result[i].coordinates,
      result[i + 1].coordinates
    );
  }

  const estimatedMinutes = Math.round(totalDist * 3.2 + result.length * 12);

  return {
    optimizedStops: result,
    totalDistanceKm: Math.max(15, Math.round(totalDist)),
    estimatedMinutes,
  };
}
