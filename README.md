# MyFyntrx- Financial Solutions Landing Page

A modern, responsive landing page built with React, Vite, and Material-UI for financial services.

## Features

- 🎨 Modern and attractive design with Material-UI components
- 📱 Fully responsive layout
- 🚀 Fast development with Vite
- 💰 Financial services theme
- 📞 Contact section with social media icons (Facebook, Instagram, Twitter, LinkedIn)
- ⚡ Optimized performance

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Material-UI (MUI)** - React component library
- **Material Icons** - Icon set for social media and contact
- **Emotion** - CSS-in-JS styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd myfintrx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5175` (or the port shown in terminal)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
myfintrx/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Customization

### Social Media Links

Update the social media links in `src/App.jsx` in the footer section:

```jsx
<IconButton
  color="inherit"
  href="https://facebook.com/yourpage"  // Update this
  target="_blank"
>
  <Facebook />
</IconButton>
```

### Contact Information

Update contact details in the footer section of `src/App.jsx`:

```jsx
<Typography variant="body2">contact@yourcompany.com</Typography>
<Typography variant="body2">+1 (555) 123-4567</Typography>
<Typography variant="body2">Your Address Here</Typography>
```

### Branding

- Update the company name "MyFinTrx" throughout the application
- Modify colors in the theme configuration
- Replace placeholder content with your actual services

## Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

## Original Vite Template

This project was bootstrapped with Vite React template. The original plugins available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
