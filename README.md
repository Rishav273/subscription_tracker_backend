# Subscription Management API

A production-grade REST API for managing recurring subscriptions. The API provides secure authentication, subscription lifecycle management, request protection, and a scalable backend architecture suitable for real-world SaaS applications.

---

## Overview

Managing recurring subscriptions can quickly become difficult as the number of services grows. This project provides a centralized backend that allows users to securely track and manage all of their subscriptions in one place.

The API is designed using production-oriented practices, including authentication, middleware architecture, request validation, centralized error handling, database modeling, and security protections.

---

## Features

* User authentication using JWT
* Protected API endpoints
* Subscription CRUD operations
* Centralized error handling
* MongoDB data persistence
* Rate limiting and bot protection using Arcjet

---

## Tech Stack

| Technology    | Purpose                                   |
| ------------- | ----------------------------------------- |
| Node.js       | JavaScript runtime                        |
| Express.js    | REST API framework                        |
| MongoDB       | Database                                  |
| Mongoose      | MongoDB ODM                               |
| JWT           | Authentication                            |
| Arcjet        | Rate limiting & bot protection            |
| Upstash       | Cloud services and infrastructure support |
| Cookie Parser | Cookie handling                           |
| dotenv        | Environment configuration                 |

---

## Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

Navigate into the project

```bash
cd <repository-name>
```

Install dependencies

```bash
npm install
```

Create an environment file

```text
.env.development.local
```

Start the development server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env.development.local` file in the root directory.

> Replace all placeholder values with your own credentials.

---

## Future Improvements

* Email reminders before renewal
* Subscription analytics dashboard
* Payment provider integrations
* Search and filtering
* Pagination
* Admin dashboard
* Role-based authorization
* API documentation using Swagger/OpenAPI
* Docker support
* Unit and integration tests
* CI/CD pipeline
* Refresh token authentication
* Request logging
* Monitoring and observability

---

## Development

Run in development mode

```bash
npm run dev
```

Run in production

```bash
npm start
```

---

## Learning Objectives

This project demonstrates:

* REST API design
* Express middleware architecture
* Authentication & authorization
* MongoDB data modeling
* Request validation
* Production-grade error handling
* Security best practices
* Environment management
* Scalable backend project organization

---

## Author

Built as a backend project to explore production-grade API development using Node.js, Express, MongoDB, Arcjet, and Upstash.
