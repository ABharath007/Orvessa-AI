# Orvessa AI - Backend Software Design Document (SDD)

Version: 1.0

Author: Bharath & Kiran

Backend Stack:
- FastAPI
- PostgreSQL
- SQLAlchemy 2.x
- Pydantic v2
- Alembic
- JWT Authentication

Frontend Stack:
- Next.js
- TypeScript
- Tailwind CSS
- React Query
- Zustand
- Axios

---

# 1. Project Overview

Project Name:
Orvessa AI

Purpose:

Orvessa AI is an AI-powered Interior Design platform where users upload a room image, select room preferences, and receive AI-generated interior design suggestions.

Features include:

- Authentication
- AI Interior Design Generation
- Room Upload
- Furniture Recommendation
- Color Palette Recommendation
- Cost Estimation
- Project History
- Favorites
- User Profile
- Designer Marketplace (Future)

---

# 2. Current Project Status

Frontend:
Approximately 70% complete.

Backend:
Project architecture completed.
Actual business logic has not started.

Completed:

✅ FastAPI setup

✅ PostgreSQL configured

✅ SQLAlchemy configured

✅ Pydantic Settings

✅ Git workflow

✅ Folder architecture

Pending:

⬜ Database Models

⬜ Alembic

⬜ JWT

⬜ CRUD

⬜ Services

⬜ Repositories

⬜ APIs

---

# 3. Git Workflow

Repository:

Orvessa-AI

Branches:

main

develop

backend-dev

frontend-dev

Rules:

Backend work only inside backend-dev

Frontend work only inside frontend-dev

Shared changes go through develop

Stable releases merge into main

---

# 4. Backend Folder Structure

backend/

app/

api/

core/

middleware/

models/

repositories/

schemas/

services/

tests/

utils/

main.py

---

# 5. Architecture

Client

↓

Router

↓

Service

↓

Repository

↓

Database

↓

Response

Business logic NEVER belongs inside routers.

Repositories communicate with the database.

Services contain application logic.

Schemas validate requests and responses.

Models represent database tables.

---

# 6. Database Design

Planned Tables

users

user_settings

projects

room_images

designs

favorites

color_palettes

furniture_items

design_furniture_recommendations

cost_estimates

ai_generation_jobs

refresh_tokens

Future:

designer_profiles

consultations

reviews

---

# 7. API Structure

Base URL

/api/v1

Authentication

POST /auth/register

POST /auth/login

GET /auth/profile

POST /auth/logout

Dashboard

GET /dashboard/stats

Uploads

POST /uploads/room

POST /uploads/generate

Projects

GET /projects

GET /projects/{id}

DELETE /projects/{id}

Gallery

GET /gallery/designs

Furniture

GET /furniture/recommendations

Palettes

GET /palettes/colors

Favorites

GET /favorites

POST /favorites/{id}

DELETE /favorites/{id}

Profile

GET /profile

PUT /profile

Settings

PUT /settings

PUT /settings/password

DELETE /settings/account

---

# 8. Development Order

We build one module completely before moving to the next.

Each module follows:

Model

↓

Schema

↓

Repository

↓

Service

↓

Router

↓

Swagger Testing

↓

Frontend Integration

---

# 9. Current Sprint

Sprint 1

Database Foundation

Tasks

[ ] User Model

[ ] User Schema

[ ] User Repository

[ ] Auth Service

[ ] JWT

[ ] Alembic Migration

[ ] Register API

[ ] Login API

[ ] Profile API

[ ] Logout API

---

# 10. Coding Standards

Use SQLAlchemy 2.x Typed ORM.

Use UUID primary keys.

Use Pydantic v2.

Use Repository Pattern.

Use Service Layer.

Use Dependency Injection.

Never write SQL inside routers.

Never put business logic in routers.

Every endpoint must return a consistent JSON response.

---

# 11. Environment Variables

APP_NAME

APP_VERSION

DEBUG

HOST

PORT

DATABASE_URL

SECRET_KEY

ALGORITHM

ACCESS_TOKEN_EXPIRE_MINUTES

---

# 12. Frontend Integration

Frontend is already prepared.

Authentication pages exist.

Dashboard exists.

Projects exist.

Gallery exists.

Furniture exists.

Upload flow exists.

Profile exists.

Settings exists.

The backend should follow the API contract already defined by the frontend.

---

# 13. Resume Point

Current Status

Infrastructure completed.

Business logic not started.

Next task:

Implement User Model.

After that:

User Schema

↓

Repository

↓

Service

↓

Authentication

↓

JWT

↓

Alembic

↓

Frontend Login Integration

---

# 14. Decision Log

Decision 1

Backend Framework:
FastAPI

Reason:

Excellent AI ecosystem and clean integration with Python ML libraries.

Decision 2

Database:
PostgreSQL

Reason:

Reliable relational database with strong SQLAlchemy support.

Decision 3

Architecture:

Router

↓

Service

↓

Repository

↓

Database

Reason:

Maintainability and scalability.

Decision 4

Authentication:

JWT

Reason:

Stateless authentication suitable for REST APIs.

---

# 15. Future Roadmap

Phase 1

Authentication

Phase 2

Projects

Phase 3

Room Upload

Phase 4

AI Generation

Phase 5

Gallery

Phase 6

Furniture Recommendation

Phase 7

Cost Estimation

Phase 8

Favorites

Phase 9

Profile & Settings

Phase 10

Designer Marketplace

---

END OF DOCUMENT