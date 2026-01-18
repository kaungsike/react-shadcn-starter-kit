# React + Shadcn UI Starter Kit 🚀

A modern, production-ready starter kit for building React applications with TypeScript, Shadcn UI, Vite, and a complete authentication/authorization system.

## ✨ Features

### 🏗️ Core Architecture
- **React 19** with TypeScript
- **Vite** for lightning-fast builds
- **Shadcn UI** for beautiful, accessible components
- **Tailwind CSS** with dark mode support

### 🔐 Authentication & Authorization
- Complete auth system (Login, Register, Logout)
- Role-based routing (Admin/Customer/Public routes)
- Bearer token management with Axios interceptors
- Password change functionality
- Zustand state management for user data

### 🎨 UI/UX Components
- Multiple layout templates (Main, Dashboard, Auth)
- Responsive sidebar navigation
- Theme toggle (Light/Dark/System)
- Toast notifications with Sonner
- Form validation with Zod schemas
- Custom hooks for API operations

### 📱 Layout System
- **MainLayout** - Public website layout
- **DashboardLayout** - Admin dashboard with sidebar
- **AuthLayout** - Authentication pages layout
- **Responsive** design for all screen sizes

### 🛣️ Routing System
- Protected routes based on authentication
- Role-based routing (Admin/Customer)
- Nested routing support
- Scroll restoration
- Dynamic breadcrumbs

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/           # Layout components
│   │   ├── AuthLayout.tsx
│   │   ├── DashboardLayout.tsx
│   │   └── MainLayout.tsx
│   ├── shadcn-studio/    # UI components
│   │   ├── app-sidebar.tsx
│   │   ├── mode-toggle.tsx
│   │   ├── dropdown-profile.tsx
│   │   └── dropdown-language.tsx
│   └── ui/              # Shadcn UI components
├── hooks/               # Custom React hooks
│   ├── useLogin.tsx
│   ├── useLogout.tsx
│   ├── useRegister.tsx
│   └── useChangePassword.tsx
├── router/              # Routing configuration
│   ├── router.tsx
│   ├── protectedRoute.tsx
│   ├── roleRoute.tsx
│   └── ...
├── store/               # Zustand state management
│   └── useUserStore.tsx
├── schema/              # Zod validation schemas
├── lib/                 # Utilities & configurations
├── types/               # TypeScript type definitions
└── data/                # Static data & constants
```

## Quick Start

Clone the project

```bash
git clone git clone https://github.com/kaungsike/react-shadcn-starter-kit.git
```

Go to the project directory

```bash
cd react-shadcn-starter-kit
```

Install dependencies

```bash
npm install
```



Environment Setup

```bash
cp .env.example .env
```
Configure your API endpoints
```bash
VITE_API_URL=your api url
```

Start the server

```bash
npm run dev
```
##### I hope this will help you and save your time


