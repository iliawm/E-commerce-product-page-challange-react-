# 🛒 E-Commerce Product Page (React + SCSS)

A fully functional product page solution for a Frontend Mentor challenge. This project features a lightbox gallery, shopping cart management, and a heavy focus on modular SCSS architecture.

## ✨ Core Functionality

- **🖼️ Image Gallery**: Custom lightbox component with thumbnail navigation.
- **🛍️ Cart Management**: Add items, adjust quantities, and view cart summary (State managed via React Context/Reducer).
- **📦 Mock API Integration**: Product data is fetched from a local JSON file inside the `/api` directory to simulate a real backend.
- **🎨 Advanced SCSS**: Over 62% of the codebase is SCSS, utilizing mixins, variables, and nested rules for a scalable design system.

## 🛠️ Tech Stack

- **Library**: React 18
- **Build Tool**: Vite
- **Styling**: SCSS (Sass Modules)
- **State Management**: React Context API / useReducer
- **Deployment**: GitHub Pages (Automated via Actions)

## 📁 Project Structure
src/
├── api/ # Mock data (products.json)
├── components/ # React Components (Cart, Gallery, Lightbox)
├── styles/ # SCSS Modules & Global Styles
│ ├── _variables.scss # Color palette and breakpoints
│ └── _mixins.scss # Reusable style functions
├── App.jsx
└── main.jsx
