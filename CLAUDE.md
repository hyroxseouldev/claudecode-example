# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project using React 19 with TypeScript, designed to create an animated landing page. The project uses modern web technologies including Tailwind CSS 4 and shadcn/ui components.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (available at http://localhost:3000)
- `pnpm build` - Build production version
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture & Structure

### Core Technologies

- **Next.js 15** with App Router (`src/app/` directory)
- **React 19** with modern hooks
- **TypeScript** with strict configuration
- **Tailwind CSS 4** with CSS variables and custom theming
- **shadcn/ui** components (New York style with Lucide icons)
- **tw-animate-css** for enhanced animations

### Path Aliases

- `@/*` maps to `./src/*`
- Components: `@/components`
- UI components: `@/components/ui`
- Utilities: `@/lib/utils`
- Hooks: `@/hooks`

### Styling System

- Uses Tailwind CSS 4 with CSS variables for theming
- Built-in dark/light mode support via CSS custom properties
- OKLCH color space for better color management
- Custom radius system (sm, md, lg, xl variants)
- shadcn/ui component system with consistent styling

### Project Requirements

The main goal is to build a 5-section animated landing page with:

1. Hero section with dynamic gradient/video background
2. Timeline section with 4 milestones
3. Interactive 3-step process section
4. Partners section with infinite scroll logos
5. Customer testimonials section with slider

All sections require smooth scroll animations, hover effects, and responsive design.

### UI Components Available

The project includes pre-configured shadcn/ui components:

- Accordion, Avatar, Badge, Button, Card, Dialog
- Input, Label, Separator, Textarea
- All components follow New York style variant

### Development Notes

- Uses `--turbopack` flag for faster development builds
- TypeScript paths configured for `@/*` imports
- CSS variables system allows for easy theming
- Both light and dark themes pre-configured
