# HYDMove — Hyderabad Logistics & Delivery Platform

> **"Move Anything. Anywhere in Hyderabad."**  
> Modern city logistics operating system connecting Customers, Businesses, Drivers, and Fleet Owners across Hyderabad.

---

## 🏗️ Repository Architecture

This repository is organized as a full-stack monorepo:

```
HYDMove/
├── frontend/             # Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion
│   ├── app/              # App Router (Pages, API routes, Layouts)
│   ├── components/       # Booking, Live Tracking, Dashboards, Fleet, Maps
│   ├── lib/              # Pricing engine, Route optimization (TSP), Mock data
│   ├── prisma/           # PostgreSQL schema (Orders, Drivers, Vehicles, POD)
│   ├── public/           # 3D assets, Hyderabad landmark renders, and logos
│   └── types/            # TypeScript domain types
└── backend/              # (Reserved for Django backend services)
```

---

## 🚀 Frontend Getting Started

The frontend is located in the `frontend` directory.

### 1. Prerequisites
- **Node.js**: v18+ or v20+
- **npm**: v9+

### 2. Installation & Setup

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install --legacy-peer-deps

# Generate Prisma client (if using Prisma)
npx prisma generate
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the platform.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🌟 Key Features Implemented in `frontend/`

- **4-Tab Hyperlocal Booking Engine**: Instant pricing calculator for Bike, Auto, Tata Ace, and Trucks across 17+ Hyderabad hubs.
- **Real-Time 3D Live Tracking**: Dispatch milestones, live telemetry map (Kukatpally to Banjara Hills), and driver credentials.
- **Multi-Stop Route Optimizer**: TSP simulated nearest-neighbor algorithm for multi-drop delivery.
- **Dedicated Portals**:
  - `/business` — B2B dashboard with CSV bulk upload and COD reconciliation.
  - `/drivers` — Driver dispatch queue and earnings calculator.
  - `/fleet` — Fleet registry and deadhead return-trip optimizer.
  - `/admin` — Dispatch control tower and zone surge pricing.
  - `/pricing` — Transparent vehicle rate cards and enterprise tiers.
  - `/coverage` — Interactive 17-zone coverage hub map of Hyderabad.
- **Proof of Delivery (POD)**: Digital signature, GPS stamps, photo proof, and printable verification certificates.
- **Green Fleet Showcase**: Hyderabad EV transition metrics and electric commercial vehicles.

---

## 📄 License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
