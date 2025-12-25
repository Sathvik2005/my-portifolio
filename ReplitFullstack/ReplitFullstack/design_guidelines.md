# Design Guidelines: Portfolio Website for Kanithi Satya Sathvik

## Design Approach: Reference-Based (Drawing from modern developer portfolio trends - Vercel, Linear, GitHub profiles)

**Rationale**: Portfolio website for a Machine Learning Engineer requires clean, technical aesthetic that balances professionalism with personality while showcasing technical projects effectively.

---

## Core Design Elements

### Typography
- **Primary Font**: Inter or Manrope (Google Fonts) - modern, technical feel
- **Headings**: 
  - H1 (Hero name): text-5xl md:text-7xl, font-bold
  - H2 (Section titles): text-3xl md:text-4xl, font-semibold
  - H3 (Project titles): text-xl md:text-2xl, font-medium
- **Body Text**: text-base md:text-lg, leading-relaxed
- **Code/Technical**: Monospace for GitHub links and technical details

### Layout System
- **Container**: max-w-6xl mx-auto with px-4 md:px-8
- **Spacing Units**: Consistently use 4, 8, 12, 16, 20, 24 (p-4, mb-8, gap-12, py-16, my-20, space-y-24)
- **Section Padding**: py-16 md:py-24 for vertical rhythm
- **Grid Systems**: 
  - Skills: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
  - Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

---

## Component Library

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Gradient background overlay with subtle animated particles/mesh pattern
- Centered layout featuring:
  - Name with gradient text effect
  - Title/Role subtitle with typing animation effect
  - Location and contact info (email, phone) with icons
  - GitHub link with prominent button
  - Scroll indicator at bottom

### About Section
- Two-column layout on desktop: left side with profile info, right side with detailed description
- Professional headshot placeholder (circular, border with subtle glow)
- Focus on ML/NLP/Data Science expertise
- Stats badges: Projects completed, Technologies mastered, etc.

### Skills Section
- Grid of skill cards with icons (use Heroicons for technology representations)
- Each card: icon + skill name + proficiency indication (optional subtle progress bar)
- Categorize: ML/AI, Programming Languages, Frameworks/Tools, Data Science
- Hover effect: subtle lift and glow

### Projects Showcase
- Card-based layout with hover elevation effects
- Each project card includes:
  - Project thumbnail/icon (use tech-related abstract graphics)
  - Project title and short description
  - Tech stack badges (small pills with technology names)
  - GitHub repository link button
  - Hover: card lifts, subtle shadow increase, GitHub button highlights
- Projects: AI Resume Screening, Heart Disease Prediction, AQI Forecasting

### Contact Form
- Centered form with glass-morphism effect
- Fields: Name, Email, Message (textarea)
- Submit button with loading state
- Success message: Animated checkmark with "Message sent successfully!" text
- Form validation with error states

### Footer
- Simple, compact footer with social links, copyright, "Built with [tech stack]"

---

## Visual Treatment

### Dark Gradient Theme
- Base: Deep dark blue/purple gradient (from-slate-900 via-purple-900 to-slate-900)
- Accents: Cyan/blue highlights (#00d4ff, #7c3aed)
- Cards: rgba background with backdrop-blur (glass-morphism)
- Text: white/gray-100 for primary, gray-400 for secondary

### Interactive Elements
- **Buttons**: Gradient backgrounds, rounded-lg, px-6 py-3, hover: brightness increase + scale(1.05)
- **Links**: Underline on hover, smooth transition
- **Cards**: transform translateY(-4px) on hover, shadow-lg to shadow-2xl transition
- **Form inputs**: border-2 with focus:border-cyan-500, ring effect

### Animations
- Smooth scroll behavior (scroll-behavior: smooth)
- Fade-in on scroll for sections (intersection observer)
- Hero typing animation for title
- Floating/pulsing particles in background (subtle)
- Form submit: button loading spinner, success checkmark animation

---

## Accessibility
- Semantic HTML5 elements (nav, section, article, footer)
- ARIA labels for icon-only buttons
- Form labels visible and associated
- Focus states clearly visible with ring-2 ring-cyan-500
- Keyboard navigation support

---

## Images

**Hero Section**: No large hero image - uses gradient background with animated mesh/particle effect instead

**About Section**: Professional headshot placeholder - circular, approximately 200x200px, centered or left-aligned

**Project Cards**: Abstract tech-themed thumbnails or gradient placeholders (400x250px aspect ratio) representing each project's domain (AI/ML themed graphics)

---

## Mobile Responsiveness
- Stack all multi-column layouts to single column on mobile
- Hamburger menu for navigation (if nav is added)
- Touch-friendly button sizes (min h-12)
- Increased spacing on mobile for readability
- Hero text scales down appropriately (text-4xl to text-5xl on mobile)