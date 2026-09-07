# DeccanGO — Hyderabad Logistics & Delivery Platform

> **"Move Anything. Anywhere in Hyderabad."**
> Modern city logistics operating system connecting Customers, Businesses, Drivers, and Fleet Owners across Hyderabad.

---

## 🏗️ Repository Architecture

This repository is organized as a full-stack monorepo:

```text
DeccanGO/
│
├── frontend/                         # Next.js frontend
│   ├── app/                          # App Router, Pages, API routes, Layouts
│   ├── components/                   # Booking, Live Tracking, Dashboards, Fleet, Maps
│   ├── lib/                          # Pricing engine, Route optimization, Mock data
│   ├── prisma/                       # PostgreSQL schema
│   ├── public/                       # 3D assets, Hyderabad landmarks, logos
│   └── types/                        # TypeScript domain types
│
├── backend/                          # Django REST API backend
│   ├── manage.py                     # Django management utility
│   ├── config/                       # Main Django project configuration
│   │   ├── settings.py               # Project settings
│   │   ├── urls.py                   # Root URL configuration
│   │   ├── asgi.py                   # ASGI configuration
│   │   └── wsgi.py                   # WSGI configuration
│   │
│   ├── users/                        # Authentication and user management
│   ├── shipments/                    # Shipment/order management
│   ├── vehicles/                     # Vehicle and fleet management
│   ├── warehouses/                   # Warehouse management
│   ├── tracking/                     # Shipment tracking and status events
│   │
│   ├── requirements.txt              # Python dependencies
│   └── .env                          # Environment variables (not committed)
│
├── .gitignore
├── LICENSE
└── README.md
```

---

# 🚀 Frontend Getting Started

The frontend is located in the `frontend` directory.

## 1. Prerequisites

* **Node.js**: v18+ or v20+
* **npm**: v9+

## 2. Installation & Setup

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install --legacy-peer-deps

# Generate Prisma client
npx prisma generate
```

## 3. Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

in your browser to view the platform.

## 4. Build for Production

```bash
npm run build
npm run start
```

---

# 🐍 Backend — Django REST API

The backend is built using **Python and Django** and provides the core business logic and REST APIs for the HYDMove logistics platform.

## Backend Technology Stack

| Technology            | Purpose                        |
| --------------------- | ------------------------------ |
| Python                | Backend programming language   |
| Django                | Web framework                  |
| Django REST Framework | REST API development           |
| PostgreSQL            | Relational database            |
| Django ORM            | Database interaction           |
| CORS Headers          | Frontend-backend communication |
| Git                   | Version control                |

---

## 📁 Backend Structure

```text
backend/
│
├── manage.py
│
├── config/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── users/
│   ├── migrations/
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
├── shipments/
│   ├── migrations/
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
├── vehicles/
│   ├── migrations/
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
├── warehouses/
│   ├── migrations/
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
├── tracking/
│   ├── migrations/
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
└── requirements.txt
```

---

# ⚙️ Backend Setup

## 1. Prerequisites

Make sure you have:

* **Python 3.11+**
* **pip**
* **PostgreSQL**
* **Git**

Verify Python:

```bash
python --version
```

Verify pip:

```bash
python -m pip --version
```

---

## 2. Navigate to Backend

From the project root:

```bash
cd backend
```

---

## 3. Create Virtual Environment

Windows:

```bash
python -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 4. Install Dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` has not been generated yet:

```bash
pip install django djangorestframework django-cors-headers psycopg
```

Then generate it:

```bash
pip freeze > requirements.txt
```

---

# 🔐 Environment Variables

Backend configuration should use environment variables instead of committing credentials to Git.

Create:

```text
backend/.env
```

Example:

```env
DEBUG=True

SECRET_KEY=your-secret-key

DB_NAME=hydmove
DB_USER=postgres
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432
```

> **Never commit `.env` to GitHub.**

Make sure `.gitignore` contains:

```gitignore
.env
venv/
__pycache__/
*.pyc
*.sqlite3
```

---

# 🗄️ Database Setup

After configuring PostgreSQL and the Django database settings, run:

```bash
python manage.py makemigrations
```

Then:

```bash
python manage.py migrate
```

Create an admin account:

```bash
python manage.py createsuperuser
```

---

# ▶️ Run the Backend

From the `backend` directory:

```bash
python manage.py runserver
```

The backend will be available at:

```text
http://127.0.0.1:8000/
```

Django Admin:

```text
http://127.0.0.1:8000/admin/
```

---

# 🔌 Backend API Architecture

The Django backend is designed around separate business domains.

```text
Client / Frontend
       │
       ▼
Django REST API
       │
       ├── Authentication
       │
       ├── Users
       │
       ├── Shipments
       │
       ├── Vehicles
       │
       ├── Warehouses
       │
       └── Tracking
              │
              ▼
          PostgreSQL
```

---

# 👤 Users

The `users` application handles users and authentication.

Responsibilities include:

* User registration
* Login
* User profiles
* User roles
* Customer management
* Driver management
* Fleet owner management

Potential roles:

```text
CUSTOMER
DRIVER
FLEET_OWNER
BUSINESS
ADMIN
```

---

# 📦 Shipments

The `shipments` application manages logistics orders.

A shipment can contain:

* Tracking number
* Customer
* Pickup location
* Delivery location
* Package type
* Package weight
* Shipment status
* Estimated delivery time
* Assigned driver
* Assigned vehicle
* Creation timestamp

Example shipment lifecycle:

```text
CREATED
   ↓
CONFIRMED
   ↓
PICKED_UP
   ↓
IN_TRANSIT
   ↓
OUT_FOR_DELIVERY
   ↓
DELIVERED
```

---

# 🚚 Vehicles

The `vehicles` application manages fleet information.

Vehicle information can include:

* Vehicle number
* Vehicle type
* Capacity
* Driver assignment
* Availability
* Vehicle status

Supported vehicle categories can include:

```text
BIKE
AUTO
TATA_ACE
TRUCK
```

---

# 🏭 Warehouses

The `warehouses` application manages logistics hubs and warehouse locations.

Potential information includes:

* Warehouse name
* Location
* Address
* Storage capacity
* Current utilization
* Operating status

---

# 📍 Tracking

The `tracking` application manages shipment movement and tracking events.

A tracking event can contain:

* Shipment
* Current location
* Status
* Timestamp
* Remarks

Example:

```text
Shipment HYD12345

Kukatpally
    ↓
Miyapur
    ↓
Hitech City
    ↓
Banjara Hills
    ↓
Delivered
```

---

# 🌐 API Endpoints

The API will follow RESTful conventions.

### Authentication

```text
POST /api/auth/register/
POST /api/auth/login/
POST /api/auth/logout/
```

### Shipments

```text
GET    /api/shipments/
POST   /api/shipments/
GET    /api/shipments/<id>/
PUT    /api/shipments/<id>/
DELETE /api/shipments/<id>/
```

### Vehicles

```text
GET  /api/vehicles/
POST /api/vehicles/
GET  /api/vehicles/<id>/
PUT  /api/vehicles/<id>/
```

### Tracking

```text
GET /api/tracking/<tracking_number>/
POST /api/tracking/
```

### Warehouses

```text
GET  /api/warehouses/
POST /api/warehouses/
GET  /api/warehouses/<id>/
```

---

# 🔗 Frontend + Backend

The frontend and backend run independently during development.

```text
Frontend
Next.js
localhost:3000
       │
       │ REST API
       ▼
Backend
Django REST Framework
localhost:8000
       │
       ▼
PostgreSQL
```

The frontend communicates with Django through REST APIs.

Example:

```text
Frontend
   │
   │ POST /api/shipments/
   ▼
Django REST Framework
   │
   ▼
Shipment Serializer
   │
   ▼
Shipment Model
   │
   ▼
PostgreSQL
```

---

# 🌟 Key Features Implemented in `frontend/`

* **4-Tab Hyperlocal Booking Engine**: Instant pricing calculator for Bike, Auto, Tata Ace, and Trucks across 17+ Hyderabad hubs.
* **Real-Time 3D Live Tracking**: Dispatch milestones, live telemetry map, and driver credentials.
* **Multi-Stop Route Optimizer**: TSP simulated nearest-neighbor algorithm for multi-drop delivery.
* **Dedicated Portals**:

  * `/business` — B2B dashboard with CSV bulk upload and COD reconciliation.
  * `/drivers` — Driver dispatch queue and earnings calculator.
  * `/fleet` — Fleet registry and deadhead return-trip optimizer.
  * `/admin` — Dispatch control tower and zone surge pricing.
  * `/pricing` — Transparent vehicle rate cards and enterprise tiers.
  * `/coverage` — Interactive 17-zone coverage hub map of Hyderabad.
* **Proof of Delivery (POD)**: Digital signature, GPS stamps, photo proof, and printable verification certificates.
* **Green Fleet Showcase**: Hyderabad EV transition metrics and electric commercial vehicles.

---

# 🧪 Backend Development Workflow

For backend development, use the following workflow:

```bash
# Activate environment
venv\Scripts\activate

# Navigate to backend
cd backend

# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Run tests
python manage.py test

# Start development server
python manage.py runserver
```

---

# 🌿 Git Workflow

Create a feature branch before working on a new backend feature:

```bash
git checkout -b feature/backend-shipments
```

After completing the work:

```bash
git add backend/
git commit -m "Add shipment management API"
git push origin feature/backend-shipments
```

---

# 📌 Development Roadmap

### Phase 1 — Backend Foundation

* [x] Django project setup
* [x] Backend folder structure
* [x] Django REST Framework setup
* [ ] PostgreSQL configuration
* [ ] Environment configuration

### Phase 2 — Authentication

* [ ] User registration
* [ ] Login
* [ ] Authentication
* [ ] Role-based permissions
* [ ] User profiles

### Phase 3 — Logistics Management

* [ ] Shipment model
* [ ] Shipment APIs
* [ ] Vehicle management
* [ ] Driver management
* [ ] Warehouse management

### Phase 4 — Tracking

* [ ] Shipment status tracking
* [ ] Tracking events
* [ ] Location updates
* [ ] Delivery confirmation
* [ ] Proof of Delivery

### Phase 5 — Frontend Integration

* [ ] Connect Next.js frontend to Django APIs
* [ ] Replace mock data with backend APIs
* [ ] Authentication integration
* [ ] Shipment booking integration
* [ ] Live tracking integration

---

# 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
