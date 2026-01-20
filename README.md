# 📚 Book Library Web Application

## Project Description
Book Library is a modern web application built with **Next.js** for the frontend and **Express.js** for the backend. It allows users to browse books, view book details, and manage items with a simple authentication system. The application features a clean and responsive UI with interactive elements, including toast notifications and dynamic routing.

---

## Setup & Installation

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or cloud) for database

### Backend Setup
1. Navigate to the backend folder:
```bash
cd backend

Install dependencies:

npm install


Start the backend server:

npm run dev


Backend API will be available at:

http://localhost:3001/api

Frontend Setup

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Create a .env.local file and add:

NEXT_PUBLIC_API_URL=http://localhost:3001/api


Start the development server:

npm run dev


Frontend will be available at:

http://localhost:3000

## Route Summary
| Page                 | Route            | Access         |
| -------------------- | ---------------- | -------------- |
| Landing Page         | `/`              | Public         |
| Login Page           | `/login`         | Public         |
| Items / Lists        | `/allbooks`      | Public         |
| Item Details         | `/allbooks/[id]` | Public         |
| Add Item (Protected) | `/add-books`     | Requires Login |
| About                | `/about`         | Public         |
| Contact              | `/contact`       | Public         |
| Privacy              | `/privacy`       | Public         |


Implemented Features
1. Landing Page

Contains 7 sections (e.g., Highlights, Features, Testimonials, Newsletter, Statistics, Call-to-Action, FAQ)

Navbar links to Login and Items/Lists pages

Fully responsive design

Interactive buttons with hover effects

2. Authentication

Mock login with hardcoded email & password

Credentials stored in cookies

Protected routes for unauthenticated users

On successful login, redirects to Items/Lists page

Optional: Social login (Google) using NextAuth.js (recommended)

3. Item List Page

Publicly accessible

Fetches items from Express.js API

Displays items in cards with image, title, author, price, and category

"View Details" button for each item

4. Item Details Page

Publicly accessible

Displays full details of selected item

Includes image, description, price, category, and author

"Add to Cart" button with toast notification

5. Add Item Page (Protected)

Accessible only for logged-in users

Form to add new books

Sends data to Express.js backend

Shows toast notification on successful item creation

Redirects unauthenticated users to login page

6. Additional Enhancements

Toast notifications for login, logout, and item actions

Cursor pointer and hover effects for interactive elements

Responsive Navbar & Footer

Remote images properly handled with Next.js Image Optimization

Dark/light mode ready (if implemented)

Tech Stack

Frontend: Next.js 16, React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (optional)

Notifications: react-hot-toast

Authentication: Cookies / Optional NextAuth.js

Deployment: Vercel (frontend), Vercel/Other host (backend)
