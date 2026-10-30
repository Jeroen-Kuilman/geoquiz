# GeoQuiz

A mobile-first multiple-choice quiz app for learning country flags and capitals.

![Gameplay screenshot](/src/assets/screenshot.png)

## Live Demo

👉 [Play the game here](https://jeroen-kuilman.github.io/geoquiz/)

## Technical Overview

### Tech Stack

**React 19**

- Component-based UI built with function components and JSX
- React Hooks (`useState` and `useEffect`) for state and lifecycle behavior
- A custom countdown hook for question timers

**JavaScript (ES modules)**

- Async/await and `Promise.all` for fetching country data
- Array methods for filtering and preparing quiz questions
- Randomized question and answer selection

**CSS**

- Responsive layouts using CSS Grid and Flexbox
- CSS custom properties and `clamp()` for fluid typography
- Breakpoints for adapting the layout to different screen sizes

**CountriesNow REST API**

- Country names, flags, and capitals
- Population data, combined with country information to support difficulty levels
- A local SVG fallback for the Sao Tome and Principe flag

**React Icons**

- Icon components used throughout the quiz interface

**Vite**

- Local development server and production build tooling
- React integration through `@vitejs/plugin-react`

**ESLint**

- JavaScript and React Hooks linting

**GitHub Pages**

- Static hosting, deployed with the `gh-pages` package

### Gameplay and Features

GeoQuiz features two modes: guessing flags and guessing capitals. Both modes can be customized by difficulty, based on countries' populations, and by the number of questions. Once the quiz starts, the player has to choose one of four answers as quickly as they can, because speed matters. The faster you guess correctly, the more points you will receive at the end (5 points for a fast answer, 2 for an average answer, and 0 for a slow answer). Streaks also matter. The more answers you guess correctly in a row, the more points you get. At the time of writing, that is simply the value of a correct answer (10) × the highest streak achieved × 0.75 (a custom modifier set in the config). Once the quiz is finished, these points result in a final score.

### Architecture

I decided to keep the architecture simple from the start, considering this is my first React project. I wanted to learn the flow of data and where the bottlenecks would appear once the app grew. This ad hoc approach eventually evolved into a separation of screens: the start screen, the quiz screen, and the end screen.

### Key Challenges

- Learning how React differs from vanilla JavaScript in practice.
- Designing a project with a mobile-first approach, considering all my previous projects were made from a desktop-first approach.
- Learning the data-flow in a React app.
- Learning when something should be state, derived state, or no state at all.

## Ontwikkelproces & Reflectie | Nederlandse versie (ENGLISH VERSION BELOW)

### Mijn motivatie, Leerervaringen en Verantwoording:

### Wat zou ik de volgende keer anders doen?

### Wat ik nog wil toevoegen in de toekomst / bugfixes:

## Development Process & Reflection | English version

### My motivation, Learning experiences, and Justification:

### What would I do differently next time?

### What I still want to add in the future / bug fixes:
