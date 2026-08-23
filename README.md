# Node Auth Tests

A backend repository designed for experimenting with, implementing, and testing JSON Web Token (JWT) authentication mechanisms using Express, TypeScript, Prisma ORM, and robust input validation.

---

## 🛠️ Tech Stack

* **Language:** TypeScript
* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Authentication:** JWT (JSON Web Tokens) & `bcrypt` for password hashing
* **Validation:** [Zod](https://zod.dev/) (Type-safe schema validation)
* **API Documentation:** Swagger / OpenAPI
* **Containerization:** [Docker](https://www.docker.com/) & Docker Compose
* **Testing:** Jest / Supertest

---

## Features

* **User Authentication:** Registration, Login, and secure Password Hashing.
* **Protected Routes:** JWT-based Authentication middleware.
* **Input Validation:** Strict and type-safe payload validation using Zod.
* **Interactive Docs:** Auto-generated OpenAPI/Swagger documentation UI.
* **Database Management:** Modeling and migrations via Prisma ORM.
* **Container Ready:** Fully containerized environment using Docker Compose.
* **Test Coverage:** Unit and Integration Tests covering authentication flows.

---

## Project Structure

```text
.
├── prisma/
│   ├── migrations/      # Prisma migration history
│   └── schema.prisma    # Prisma database schema and models
│
├── src/
│   ├── config/          # Environment configuration
│   ├── controllers/     # Route logic (auth.controller.ts)
│   ├── db/              # Database connection setup
│   ├── docs/            # Swagger/OpenAPI documentation definitions
│   ├── middlewares/     # Error handling, validation, and async wrappers
│   ├── routers/         # Express route definitions (auth.route.ts)
│   ├── schemas/         # Zod validation schemas
│   ├── services/        # Business logic (auth.service.ts)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Helper functions & custom AppError
│   ├── app.ts           # Express application setup
│   └── index.ts         # Application entry point
│
├── tests/               # Jest test suites (auth.spec.ts)
├── docker-compose.yml   # Docker services configuration
├── dockerfile           # Docker image instructions
├── jest.config.ts       # Jest testing configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
