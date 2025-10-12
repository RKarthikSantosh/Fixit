FixIt-Service Booking Web Application

## Overview

FixIt is a full-stack service booking web application where customers can book home or professional services, and workers (employees) can accept and manage these bookings. The system provides separate dashboards for both customers and employees and stores booking information in a MongoDB database.

## Features

* **User Authentication** – Secure login and registration for both customers and employees.
* **Customer Dashboard** – Allows users to browse services, book appointments with date and time, and track booking status.
* **Employee Dashboard** – Enables workers to view and accept pending service requests.
* **Accepted Bookings Management** – When a worker accepts a booking, it’s stored in a dedicated 'AcceptedBookings' collection with date and time.
* **MongoDB Integration** – All data (users, services, bookings) are stored in MongoDB using Mongoose models.
* **Error Handling** – Comprehensive API-level validation ensures required fields like 'time' are always provided.

## Tech Stack

* **Frontend:** Next.js, React, Tailwind CSS
* **Backend:** Node.js, Next.js API Routes
* **Database:** MongoDB (via Mongoose)
* **Language:** JavaScript (ES6+)

## API Endpoints

### 1. '/api/booking'

* **Method:** POST
* **Purpose:** Store new booking requests.
* **Required Fields:** 'username', 'email', 'phone', 'service', 'date', 'time'

### 2. '/api/accepted-booking'

* **Method:** POST
* **Purpose:** Store accepted bookings with time confirmation.
* **Required Fields:** All booking fields + 'time'

## Example Data Flow

* Customer books a service (e.g., Pest Control Expert).
* Data (with date & time) is sent to '/api/booking'.
* Employee views pending bookings and accepts one.
* Accepted booking (with date & time) is stored in MongoDB under 'AcceptedBookings'.
