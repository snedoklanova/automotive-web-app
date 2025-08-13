# Automotive web app

An automotive web app for listing vehicles and showing vehicle details with finance calculator.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Description

This is the web app built with

- React+ TypeScript + Vite
- React Router
- [Tailwind CSS](https://tailwindcss.com/)
- Vitest

### Pages
- /
  - A index page to showing a list of vehicles with sorting and searching function on the top

- /{:vehicleId}
  - A page showing specific vehicle with finance calculator aside
  - Pay monthly result will change accordingly by selecting different terms
