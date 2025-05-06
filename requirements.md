# Help Desk Ticket Viewer - Design Document

## Overview
The goal is to build a simple but real-world full-stack web application using a **React Single Page Application (SPA)** frontend and a **Spring Boot backend API**. There is **no database required**. The project is intentionally scoped to assess core frontend/backend development, integration, and basic DevOps concepts.

---

## Objectives

### Core Requirements

#### React SPA Frontend
- Uses React Router for navigation.
- Displays a help desk ticket viewer interface.
- Routes: `Dashboard`, `Tickets`, `About`.
- Fetches ticket data via REST APIs.
- Filters tickets by status (`Open`, `In Progress`, `Closed`).
- Displays ticket detail on click.

#### Spring Boot Backend
- Provides REST API endpoints for the frontend.
- Uses in-memory mock data (no database).
- Exposes endpoints:
    - `GET /api/tickets` - List all tickets
    - `GET /api/tickets?status=Open` - Filtered by status
    - `GET /api/tickets/{id}` - Get ticket by ID
    - `GET /api/summary` - Count of tickets per status

#### Integration
- React frontend fetches data using **Axios** or **Fetch**.
- Backend must support **CORS** for dev server access.

---

## Bonus Efforts

### Bonus #1: Podman Containerization
- Containerize the Spring Boot API using **Podman**.
- Ensure React app (running in dev mode) can connect to it via HTTP on `localhost:8080`.

### Bonus #2: Kubernetes Deployment with Kind
- Install **Kind** and create a local Kubernetes cluster.
- Deploy the Spring Boot API as a pod using a Deployment and Service manifest.
- Use `kubectl port-forward` to allow local access from the React app.

---

## Architecture Diagram
*(See next page)*

---

## Technical Stack

### Frontend
- React (Create React App or Vite)
- React Router
- Axios
- Optional: Bootstrap or basic CSS

### Backend
- Java 17+
- Spring Boot 3.x
- Spring Web
- CORS configuration

### DevOps Tools
- Podman
- Kind (Kubernetes in Docker)
- `kubectl` CLI

---

## Deliverables

1. React app source code (`helpdesk-ui/`)
2. Spring Boot source code (`helpdesk-api/`)
3. `README` file including:
    - Setup instructions
    - How to run frontend & backend locally
    - Bonus instructions (if completed)
    - Screenshots
4. *(Optional)* Kubernetes YAMLs for Bonus #2

---

## Evaluation Criteria

| Area                           | Weight |
|--------------------------------|--------|
| React SPA functionality        | 25%    |
| Spring Boot API implementation | 25%    |
| Frontend-backend integration   | 20%    |
| Code quality and structure     | 10%    |
| Bonus 1: Containerization      | +10%   |
| Bonus 2: Kubernetes (Kind)     | +10%   |

---

## Notes
- Keep it simple and clean. Focus on working features.
- Treat this like a real-world mini-project you'd demo to a team.
- Feel free to use Postman or browser tools to test APIs.

**Good luck!**
