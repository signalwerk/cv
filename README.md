# Stefan Huber · Curriculum Vitae

[![Build Status](https://github.com/signalwerk/cv/actions/workflows/deploy.yml/badge.svg)](https://github.com/signalwerk/cv/actions/workflows/deploy.yml)

Curriculum Vitae of [→ Stefan Huber](https://cv.signalwerk.ch). Source code on [GitHub repository](https://github.com/signalwerk/cv).

This project uses [Node.js](https://nodejs.org/) + [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) with **static site generation (SSG)** using React's server-side rendering.

## Features

- ✨ **Static HTML Generation**: All pages pre-rendered with full content visible to search engines
- ⚡ **Fast Dev Server**: Vite's instant HMR for rapid development
- 📦 **TypeScript**: Full type safety across the entire codebase
- 🎨 **MDX Support**: Write content in Markdown with React components
- 🔄 **Hydration**: Client-side React hydrates the static HTML for interactivity

## Development

```bash
npm install   # Install dependencies
npm run dev   # Start dev server
npm run build # Build for production (static HTML + client bundle)
```

## Static Site Generation

The build creates fully static HTML pages using React's `renderToString` (no Puppeteer/headless browsers):

1. Client bundle is built with Vite
2. Server bundle is built for SSR
3. Each route is rendered to static HTML
4. Client bundle hydrates the static content
