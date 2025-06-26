# Replit Development Guide

## Overview
This is a modern full-stack web application built with React frontend and Express.js backend. The application appears to be a Korean business website template with company information, about page, and contact/directions functionality. It uses TypeScript throughout and implements a clean, modular architecture with shared schemas between client and server.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight routing library)
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20 (ESM modules)
- **Database ORM**: Drizzle ORM
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: Hot reload with tsx

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Shared TypeScript schemas between client and server
- **Migrations**: Drizzle Kit for database migrations
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Shared Schema (`shared/schema.ts`)
- Defines database tables using Drizzle ORM
- Provides TypeScript types for data validation
- Currently includes user management schema
- Uses Zod for runtime validation

### Storage Layer (`server/storage.ts`)
- Interface-based design for data access
- In-memory implementation for development
- Easily swappable for production database
- CRUD operations for user management

### UI Component System
- Complete shadcn/ui component library
- Consistent design system with CSS variables
- Responsive design with mobile-first approach
- Accessible components using Radix UI primitives

### Routing Structure
- `/` - Home page with hero section and company overview
- `/about` - Company introduction and team information
- `/directions` - Contact information and location details
- Responsive navigation with mobile menu

## Data Flow

### Client-Server Communication
1. Frontend makes API requests to `/api/*` endpoints
2. Express middleware handles request/response logging
3. Storage interface abstracts data persistence
4. React Query manages client-side caching and synchronization

### State Management
- Server state managed by TanStack Query
- Local component state using React hooks
- Form handling with proper validation
- Toast notifications for user feedback

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database connectivity (configured for PostgreSQL)
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React routing
- **@radix-ui/***: Accessible UI component primitives

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server
- **tailwindcss**: Utility-first CSS framework

### UI and Styling
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **tailwind-merge**: Tailwind class merging
- **lucide-react**: Icon library

## Deployment Strategy

### Development Environment
- Uses Replit's development server on port 5000
- Hot module replacement for both client and server
- Automatic PostgreSQL database provisioning
- Environment variable management for database connection

### Production Build
- Vite builds optimized client bundle to `dist/public`
- esbuild bundles server to `dist/index.js`
- Single deployment artifact with static file serving
- Autoscale deployment target configured

### Database Configuration
- PostgreSQL 16 module enabled in Replit
- Drizzle migrations in `./migrations` directory
- Database URL from environment variables
- Connection pooling through Neon serverless driver

## Changelog
- June 26, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.