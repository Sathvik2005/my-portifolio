# Portfolio Website - Kanithi Satya Sathvik

## Overview
Professional portfolio website showcasing Machine Learning and AI projects for Kanithi Satya Sathvik, a Machine Learning Engineer specializing in NLP, AI, and Data Science.

## Current State
**Status**: ✅ MVP Complete and Fully Functional

**Last Updated**: November 16, 2025

## Features
### Implemented
- **Hero Section**: Animated gradient background with typing effect displaying "Machine Learning Engineer | NLP | AI | Data Science"
- **About Section**: Personal bio with 4 animated stat cards (Projects, Technologies, Specialization, Dedication)
- **Skills Section**: Grid showcase of 16 technical skills with categories (AI/ML, Programming, Frameworks, Data, Tools)
- **Projects Showcase**: 3 featured projects with descriptions and GitHub links:
  - AI Resume Screening System (NLP + Streamlit)
  - Heart Disease Prediction (ML Classification)
  - AQI Forecasting System (Time-Series ML)
- **Contact Form**: Fully functional form with validation, backend API integration, and success animations
- **Responsive Design**: Mobile-first design with smooth animations and hover effects
- **Dark Gradient Theme**: Modern cyan/purple gradient theme with glassmorphism effects

## Contact Information
- **Name**: Kanithi Satya Sathvik
- **Email**: kanithisathvik@gmail.com
- **Phone**: 9515136729
- **Location**: Anakapalle, Andhra Pradesh
- **GitHub**: https://github.com/Sathvik2005

## Project Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter (single-page application)
- **Styling**: Tailwind CSS with custom gradient theme
- **Animations**: Framer Motion for smooth transitions
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for API integration
- **UI Components**: Shadcn/ui component library

### Backend
- **Server**: Express.js
- **Storage**: In-memory storage (MemStorage) for contact messages
- **API Endpoints**:
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact` - Retrieve all contact messages (for future admin dashboard)
- **Validation**: Zod schemas for request validation

### Database Schema
```typescript
ContactMessage {
  id: string (UUID)
  name: string (min 2 chars)
  email: string (valid email)
  message: string (min 10 chars)
  timestamp: Date
}
```

## Design System
- **Color Palette**: 
  - Background: Dark gradient (slate-950 → purple-950 → slate-950)
  - Primary Accents: Cyan (#00d4ff), Purple (#7c3aed)
  - Text: White/Gray gradient for hierarchy
- **Typography**: Inter font family
- **Spacing**: Consistent 4/8/12/16/20/24 scale
- **Animations**: Fade-in on scroll, typing effect, gradient shift, hover elevation

## Recent Changes
### November 16, 2025
- ✅ Created complete data schema for contact messages
- ✅ Built all frontend components with exceptional visual polish
- ✅ Implemented backend API with validation
- ✅ Integrated contact form with TanStack Query mutations
- ✅ Added comprehensive data-testid attributes for all elements
- ✅ Completed end-to-end testing - all features working perfectly

## Testing
- **E2E Tests**: ✅ All features tested and verified
  - Hero section animations
  - All content sections display correctly
  - Contact form submission and validation
  - Success state animations
  - Smooth scrolling navigation
- **API Tests**: ✅ Contact form endpoint tested with successful 201 responses

## User Preferences
- Modern, professional design with dark gradient theme
- Smooth animations and transitions
- Mobile-responsive layout
- Single-page application architecture

## Future Enhancements (Next Phase)
- Admin dashboard to view and manage contact form submissions
- Downloadable resume/CV feature
- Project filtering and search functionality
- Blog section for technical articles
- Analytics dashboard for portfolio visits

## Running the Application
The application runs on port 5000 with:
- Backend: Express server with API routes
- Frontend: Vite dev server with hot module reload
- Command: `npm run dev` (managed by "Start application" workflow)

## Notes
- All contact form submissions are stored in memory
- Portfolio follows design_guidelines.md specifications
- Comprehensive test coverage with data-testid attributes on all interactive elements
