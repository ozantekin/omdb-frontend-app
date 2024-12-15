# OMDb Frontend App

## Overview

The OMDb Frontend App is a single-page application built with React and Redux Toolkit. It allows users to search, filter, and view movie details using the OMDb API.

## Features

- **Movie Listing**: Display movies with key information.
- **Pagination**: Show 10 items per page.
- **Search**: Search movies by name.
- **Filtering**: Filter by year and type (Movies, TV Series, Episodes).
- **Detailed View**: View additional movie information.
- **Custom UI**: Built without external UI libraries.
- **URL-based State Management**: Shareable links with preserved state.

## Technical Requirements

- **React**: UI library.
- **Redux Toolkit**: State management.
- **TypeScript**: Optional but recommended.
- **SASS**: Styling.
- **Next.js**: Server-side rendering.
- **OMDb API**: Movie data.
- **lodash.debounce**: Optimized search.

## Setup

1. Clone the repository.

```bash
git clone https://github.com/yourusername/omdb-frontend-app.git
cd omdb-frontend-app
```

2. Install dependencies.

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build the project:

```bash
npm run build
```

5. Start the production server:

```bash
npm start
```

## Dependencies

- **Core**: React, Next.js, Redux Toolkit, React-Redux, lodash.debounce, OMDb API, Phosphor Icons.
- **Development**: TypeScript, SASS, ESLint, Prettier.

## Custom Features

- **Pagination & Table Design**: Custom-built components for flexibility.
- **Debounced Search**: Prevents excessive API calls.
- **Detailed Movie View**: Comprehensive movie information.

## Design Decisions

- **No UI Libraries**: Custom solutions for UI components.
- **Custom Components**: Ensures flexibility and reusability.
