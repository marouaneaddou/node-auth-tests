# Node Auth Tests

A backend repository designed for experimenting with, implementing, and testing JSON Web Token (JWT) authentication mechanisms using Express, TypeScript, Prisma ORM, and robust input validation.

---

## Tech Stack

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

```

---

## API Documentation

This project uses **Swagger** (OpenAPI) to document all available endpoints, required payloads, and validation rules.

Once the application is running, you can explore and test the API directly from your browser:

👉 **Swagger UI:** `http://localhost:3000/api/docs`  
*(If you change the PORT in your `.env`, make sure to update the port in this URL).*

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
* [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/install/)
* [Node.js](https://nodejs.org/) *(If running locally without Docker)*

### 1. Clone the repository
```bash
git clone https://github.com/marouaneaddou/node-auth-tests.git
cd node-auth-tests
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add your configuration variables. Here is an example of what your `.env` file should look like:

```env
# Application
NODE_ENV=development
PORT=3000

# PostgreSQL
POSTGRES_USER="your_db_user"
POSTGRES_PASSWORD="your_db_password"
POSTGRES_DB="your_db_name"
POSTGRES_HOST="your_db_host" # e.g., db_auth_dev (for Docker) or localhost
POSTGRES_PORT="5432"

# Database URL (Must match the credentials above)
DATABASE_URL="postgresql://your_db_user:your_db_password@your_db_host:5432/your_db_name"

# JWT Secret
JWT_SECRET="your_super_secret_jwt_key_here"
```

---

## 🐳 Running with Docker (Recommended)

Docker Compose will spin up your Node.js application and your database automatically using the `.env` variables provided.

**1. Start the application and database:**
```bash
docker-compose up -d --build
```

**2. Apply Prisma migrations:**
```bash
docker-compose exec auth_dev npx prisma migrate deploy
```

**3. Stop the containers:**
```bash
docker-compose down
```

---

## Running Locally (Without Docker)

If you prefer to run the Express app directly on your machine (assuming your database is already running):

**1. Install dependencies:**
```bash
npm install
```

**2. Generate Prisma Client and apply migrations:**
```bash
npx prisma generate
npx prisma migrate dev
```

**3. Start the development server:**
```bash
npm run dev
```

---

## Running Tests

To run the test suite (Jest & Supertest) and verify JWT workflows and validations:

**Via Docker:**
```bash
docker-compose exec app_dev npm run test
```

**Locally:**
```bash
npm run test
```

---

## Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/marouaneaddou/node-auth-tests/issues).

---

##  License

This project is [MIT](LICENSE) licensed.
