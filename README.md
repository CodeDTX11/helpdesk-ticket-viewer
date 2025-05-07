# 🎫 Help Desk Ticket Viewer

A simple full-stack web application built with a **React (Vite)** frontend and a **Spring Boot** backend.  
No database required — ticket data is mocked in memory.

---

## 🚀 Features

- View help desk tickets by status (Open, In Progress, Closed)
- Click to view individual ticket details
- Dashboard summary of ticket counts
- Fully functional without a database

---

## 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node)
- [Java JDK 17](https://adoptium.net/)
- Maven (optional — included wrapper `mvnw` can be used)

---

## Setup & Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/helpdesk-ticket-viewer.git
cd helpdesk-ticket-viewer

cd helpdesk-backend
./mvnw spring-boot:run   # Mac/Linux
mvnw.cmd spring-boot:run # Windows

cd helpdesk-frontend
npm install
npm run dev