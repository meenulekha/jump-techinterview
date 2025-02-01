# Frontend Test - Implementation Choices

## Overview

This project is a React-based frontend application that fetches and displays data from an external API and includes a contact form with validation. The app consists of two main pages:

- A search page that allows users to query an external API and view results.
- A contact form with validation that logs the submitted data to the console.

## Tech Stack

- **Framework**: React with Next.js (for SSR support)
- **State Management**: Tanstack Query (React Query)
- **Styling**: TailwindCSS
- **Form Handling & Validation**: React Hook Form with Zod
- **Type Safety**: TypeScript
- **API**: Open Library API

## Implementation Details

### 1. Search Page

- Uses Open Library's API to fetch search results.
- Implemented with React Query for efficient data fetching and caching.
- Includes a search input field.
- Displays a message when no search term is entered.
- Shows the first 10 results of a search query.
- Implemented with server-side rendering (SSR) using Next.js for better performance.

### 2. Contact Form

- Built using React Hook Form for easy state management.
- Uses Zod for form validation (ensuring valid email, required fields, etc.).
- Displays validation errors when the form is submitted incorrectly.
- On submission, logs the JSON data to the console.

### 3. Bonus Features

- **SSR Support**: Next.js enables server-side rendering for SEO and performance improvements.
- **Animations**: Used Framer Motion for smooth transitions.
- **Responsive Design**: TailwindCSS ensures mobile-friendly layouts.
- **Detail Page**: Implemented a detailed view of a selected book using Open Library's detail API.

## How to Run the Project

1. Clone the repository:

   git clone <repo-url>
   cd <repo-folder>
   
2. Install dependencies:

   npm install

3. Start the development server:

   npm run dev

4. Open http://localhost:3000 in your browser.

## Time Spent
Approximately 8 hours were spent on this implementation.
