# 🎯 ReactJS Frontend Developer Assignments  

This repository contains two ReactJS implementations — one **Basic** and one **Advanced** — built for the **Frontend Developer position at Samplyfi Softech**. It demonstrates both **core React fundamentals** and **advanced UI/UX patterns** with modern libraries.

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Snehalatha-23/samplyfi-softech-user-profile.git
cd samplyfi-softech-user-profile

# Install dependencies
npm install

# Run the development server
npm run dev
👉 Toggle assignments in src/index.tsx:

ts
Copy code
const SHOW_ADVANCED = false; // Assignment 1
const SHOW_ADVANCED = true;  // Assignment 2
📋 Assignments Overview
🟢 Assignment 1 – Basic
Fetch users from JSONPlaceholder API

Display profiles with DiceBear avatars

Bootstrap 5 responsive card layout

Loading spinner + error handling with retry

Smooth hover animations

Tech Stack: React 18 • TypeScript • Bootstrap 5 • Font Awesome

🔵 Assignment 2 – Advanced
All features of Assignment 1

Ant Design 5 modern UI components

Fully responsive (mobile, tablet, desktop)

Edit, Delete, Like/Unlike profiles

Modal forms with validation

State lifting & advanced state management

Tech Stack: React 18 • TypeScript • Ant Design 5

🏗️ Project Structure
bash
Copy code
src/
├── components/
│   ├── UserCard.tsx              # Basic card
│   ├── UserCardAdvanced.tsx      # Advanced card
│   ├── LoadingSpinner.tsx        # Basic spinner
│   ├── LoadingSpinnerAdvanced.tsx# Advanced spinner
│   ├── EditUserModal.tsx         # Edit modal
│   └── LoadingSpinner.css        # Animations
├── types/User.ts                  # TypeScript interfaces
├── App.tsx                        # Assignment 1 entry
├── App-Advanced.tsx               # Assignment 2 entry
├── App.css                        # Global styles
└── index.tsx                      # Assignment toggle
🎨 UI & Design
Assignment 1: Clean Bootstrap cards, retry button, hover animations

Assignment 2: Ant Design components, CRUD actions, responsive grid

📱 Breakpoints:

Mobile: <768px

Tablet: 768–1024px

Desktop: >1024px

🔗 APIs
Users API: https://jsonplaceholder.typicode.com/users

Avatars API:

bash
Copy code
https://avatars.dicebear.com/v2/avataaars/{username}.svg?options[mood][]=happy
✅ Skills Demonstrated
Assignment 1
React setup, components, props, state, hooks

API fetching & error handling

Conditional rendering, list rendering

Bootstrap responsive styling

Assignment 2
Ant Design integration

State lifting & complex updates

Modal management & form validation

CRUD operations (edit/delete)

Like/unlike feature

Mobile-first responsive design

🚀 Deployment
bash
Copy code
npm run build
Recommended: Vercel

bash
Copy code
npm install -g vercel
cd build
vercel --prod
Also works with Netlify, GitHub Pages, Firebase Hosting.

📊 Optimizations
Lazy-loaded images

Error boundaries for resilience

Efficient re-renders with keys

Optimized state updates

🧪 Testing Checklist
✅ Responsive layouts (mobile/tablet/desktop)

✅ Loading & error states

✅ CRUD operations (Assignment 2)

✅ Modal form validation

✅ Like/unlike functionality
Snehalatha
Frontend Developer | React Enthusiast 🚀
