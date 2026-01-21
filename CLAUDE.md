# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DC Kirrberg e.V. darts club website built with Docusaurus 2.0.0-beta.9 (React-based static site generator). German language content.

## Commands

```bash
npm install          # Install dependencies
npm start            # Start dev server at localhost:3000 with hot reload
npm run build        # Build static site to /build directory
npm serve            # Serve built site locally
npm run typecheck    # Run TypeScript type checking
npm run clear        # Clear Docusaurus cache
```

No linting or test commands configured.

## Architecture

### Technology Stack

- Docusaurus 2.0.0-beta.9 with React 17
- TypeScript/JavaScript (mixed .tsx and .js files)
- CSS Modules + Infima CSS framework + styled-components
- Deployed via GitHub Actions to GitHub Pages (dckirrberg.de)

### Key Directories

- `src/pages/` - Page components (each file becomes a route)
- `src/components/` - Reusable React components
- `src/css/custom.css` - Global theme CSS and Infima variable overrides
- `src/team.json` - Board member data (name, title, email, image)
- `docs/` - MDX documentation pages
- `blog/` - Blog posts organized by date folders
- `static/img/` - Images and logos
- `static/dateien/` - PDFs and team photos

### Configuration

- `docusaurus.config.js` - Site config, navbar, footer, theme settings
- `sidebars.js` - Documentation sidebar structure

### Deployment

GitHub Actions workflow (`.github/workflows/gh-pages.yml`) automatically deploys on push to main branch.

### Brand

DC Kirrberg e.V. Brand Guidelines

@brand.md
