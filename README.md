# Suraj Kumar - Professional Portfolio

Welcome to the source code for my professional portfolio website! This project is a modern, high-performance, single-page application built to showcase my software engineering capabilities, projects, and skills.

## Features & Highlights

- **Dynamic, Scroll-Driven UI:** Smooth scrolling powered by `@studio-freight/react-lenis`.
- **Micro-Animations:** Fluid, interactive component entry animations and hover effects using `framer-motion`.
- **Component-Driven Architecture:** A clean, modular React component tree using `React.lazy` and `Suspense` for performance optimization.
- **Responsive Layout:** Adaptive horizontal scroll tracks for both Projects and Skills sections, utilizing `requestAnimationFrame` for buttery-smooth performance.
- **Aesthetic Design:** A strictly curated color palette (Dark Green, Lime, White) focusing on high contrast, readability, and modern minimalism.

## Technology Stack

- **Framework:** React 19 + Vite
- **Styling:** Vanilla CSS with scoped CSS variables for the core design system
- **Animation:** Framer Motion (for entry/hover interactions)
- **Scrolling:** Lenis (`@studio-freight/react-lenis`) for momentum scrolling
- **Icons:** Lucide React

## Project Structure

```
├── public/                 # Static assets (images, profile pictures)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── sections/       # Primary page sections (Hero, Projects, Skills, Contact)
│   │   ├── Curtain.jsx     # Loading transition overlay
│   │   ├── Footer.jsx      # Footer component
│   │   └── Nav.jsx         # Navigation bar with sticky scrolling logic
│   ├── App.jsx             # Main application entry, lazy-loading setup
│   ├── main.jsx            # React DOM rendering
│   └── styles.css          # Global styles, variables, typography
├── .gitignore              # Ignored files and directories
├── netlify.toml            # Netlify deployment configuration
├── package.json            # Project metadata and scripts
└── vite.config.js          # Vite bundler configuration
```

## Running Locally

To set up and run this project locally, ensure you have Node.js installed.

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *The site will be available at `http://localhost:5173`.*

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Deployment

This repository is optimized for deployment on **Netlify**. 
A `netlify.toml` file is included in the root directory to handle proper build commands, output directories (`dist/`), and automatic routing fallbacks for SPAs.

1. Connect your GitHub repository to Netlify.
2. Netlify will automatically detect the configuration in `netlify.toml`.
3. Deploy!

## Customization

- **Profile Image:** Replace `public/assets/profile.jpg` with your own photo.
- **Project Images:** Replace or add images to `public/assets/lando/` and update `src/components/sections/HelmetGrid.jsx`.
- **Skills/Projects Data:** Edit the inline data arrays found at the top of `Skills.jsx` and `HelmetGrid.jsx`.
- **Colors:** Modify the `--color--` variables located in `src/styles.css` to instantly update the site's overall theme.
