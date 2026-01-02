# 🎨 Hackathon Frontend --- Orders Dashboard (Angular + Material)

A modern, clean, and production‑ready **Angular frontend** for managing
orders.

It connects to the backend API and provides:

-   ✔️ Order listing
-   ✔️ Pagination
-   ✔️ Create order dialog (toast-style modal)
-   ✔️ Status management (Pay / Cancel)
-   ✔️ Loading spinners + notifications
-   ✔️ Clean architecture with reusable services

This project focuses on **clarity, UX, and maintainability**.

------------------------------------------------------------------------

## 🏗️ Architecture Overview

The app uses **Angular Standalone Components** (no heavy modules).

    src/app
     ├── core/
     │    └── services/
     │         └── order.ts      # HTTP API layer
     │
     ├── orders/
     │    ├── create-order/      # Dialog used to create orders
     │    └── orders-list/       # Main dashboard list
     │
     ├── material/               # Centralized Angular Material imports
     └── app.routes.ts           # Routing configuration

### Key Concepts

Layer                        Responsibility
  ---------------------------- -------------------------
**Service (OrderService)**   Encapsulates API calls
**UI Components**            Display and interaction
**Dialogs**                  Creation workflow
**Material Theme**           Consistent UI
**Standalone Components**    Lightweight & modular

------------------------------------------------------------------------

## 🚀 Installation & Run

### 1️⃣ Install dependencies

    npm install

### 2️⃣ Configure API Endpoint

Edit:

    src/environments/environment.ts

Example:

``` ts
export const environment = {
  apiUrl: 'http://localhost:8080'
};
```

### 3️⃣ Run the app

    npm start

The app runs at:

👉 http://localhost:4200

------------------------------------------------------------------------

## 🌍 Features Walkthrough

### ✔ View Orders

The dashboard loads orders with:

-   Pagination
-   Loading indicator
-   Auto-refresh after actions

### ✔ Create Order

Click **Create Order** → dialog opens

-   Add multiple items dynamically
-   Submit order
-   Toast confirms success

### ✔ Change Status

Inside the table:

-   **Pay** --- sets status to PAID
-   **Cancel** --- sets status to CANCELLED
-   Buttons disable based on state

------------------------------------------------------------------------

## 🧪 Testing

### Unit Tests

    ng test

### E2E (if configured)

    ng e2e

Recommended tools:

-   Cypress (UI flow testing)
-   Jasmine/Karma (unit)

------------------------------------------------------------------------

## 🎨 UI & Libraries

We use:

-   **Angular Material**
-   **Reactive Forms**
-   **MatDialog (modals)**
-   **MatSnackBar (notifications)**
-   **MatPaginator (pagination)**

Design principles:

✔ minimal\
✔ consistent spacing\
✔ responsive layout

------------------------------------------------------------------------

## 🔌 API Contract

The app expects the backend to expose:

    GET /orders
    POST /orders
    PATCH /orders/{id}/status

Payload example:

``` json
{
  "customerName": "John",
  "items": [
    { "productId": "p1", "quantity": 2 }
  ]
}
```

------------------------------------------------------------------------
