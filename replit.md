# Hijama Wellness Center Website

## Overview

This is a multi-language website for a traditional Hijama (cupping therapy) wellness center. The site supports Azerbaijani, Russian, and English languages and provides information about traditional healing services. It's built as a modern single-page application with a professional, responsive design focused on wellness and traditional medicine.

The website serves as a digital presence for a wellness center specializing in Hijama therapy, offering service information, practitioner details, benefits explanation, FAQ section, and contact functionality. The multi-language support caters to diverse communities interested in traditional healing practices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **UI Components**: Radix UI primitives providing accessible, unstyled components
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: React Query (TanStack Query) for server state management

### Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Architecture Pattern**: RESTful API design with modular route handlers
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Development Setup**: Hot module replacement and development middleware via Vite integration

### Multi-Language Implementation
- **Translation System**: Custom hook (`useLanguage`) with localStorage persistence
- **Content Storage**: Centralized translations object supporting English, Russian, and Azerbaijani
- **Language Switching**: Real-time language switching without page reload
- **Fallback Strategy**: Defaults to English if translation key is missing

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **User Management**: Basic user table with username/password authentication structure
- **Migration System**: Drizzle Kit for database schema migrations and management

### Styling and Design System
- **CSS Framework**: Tailwind CSS with custom design tokens
- **Component System**: shadcn/ui providing pre-built, customizable components
- **Typography**: Custom font stack with Inter and Lora for modern, readable design
- **Color Scheme**: Nature-inspired palette with primary green tones suitable for wellness branding
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive utilities

### Development and Build Process
- **Development Server**: Vite with Express integration for full-stack development
- **Type Checking**: Comprehensive TypeScript configuration across client, server, and shared code
- **Hot Reloading**: Client-side HMR with server restart capabilities
- **Production Build**: Optimized client bundle with server compilation for deployment

### Component Architecture
- **Page Structure**: Single-page layout with smooth scrolling navigation between sections
- **Component Organization**: Modular components for each section (Hero, About, Services, Benefits, FAQ, Contact)
- **Form Handling**: Contact form with validation and toast notifications
- **Interactive Elements**: Accordion FAQ, mobile-responsive navigation, language selector

## External Dependencies

### UI and Component Libraries
- **@radix-ui/***: Complete set of accessible, unstyled UI primitives for complex components
- **@tanstack/react-query**: Server state management and data fetching with caching
- **wouter**: Lightweight routing library for single-page application navigation
- **lucide-react**: Consistent icon library for UI elements
- **class-variance-authority**: Type-safe component variant management

### Database and ORM
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL support
- **drizzle-kit**: Database migration and schema management tools
- **@neondatabase/serverless**: Serverless PostgreSQL database connection for cloud deployment

### Build and Development Tools
- **vite**: Modern build tool with fast HMR and optimized production builds
- **@vitejs/plugin-react**: React support for Vite with JSX transformation
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **typescript**: Static type checking for enhanced developer experience

### Styling and CSS
- **tailwind-merge**: Intelligent Tailwind class merging for component composition
- **clsx**: Conditional className utility for dynamic styling
- **autoprefixer**: CSS vendor prefixing for browser compatibility

### Form and Validation
- **react-hook-form**: Performant form library with validation support
- **@hookform/resolvers**: Validation resolvers for form schema validation
- **zod**: Type-safe schema validation library

### Date and Utility Libraries
- **date-fns**: Modern date utility library for date manipulation and formatting
- **nanoid**: URL-safe unique ID generator for various application needs