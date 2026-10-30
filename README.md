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

De motivatie voor het maken van deze app was om zelfstandig kennis te maken met React en een nieuw project toe te kunnen voegen aan mijn portfolio. Door middel van een cursus had ik de fundamenten geleerd, en dit wilde ik dus in de praktijk toepassen. Mijn nieuwsgierigheid was voornamelijk gefocust op de vraag: "Wat maakt React makkelijker en beter dan vanilla JavaScript?" En ik kan met overtuiging zeggen dat ik daar het antwoord op heb ervaren. Allereerst zorgt de structuur in een React-app er van nature voor dat het overzicht veel makkelijker te bewaren is, zelfs zonder vooraf opgezette architectuur. De scope van een project kan hierdoor veel sneller en makkelijker groeien zonder dat de rode draad halverwege verloren raakt. In dat opzicht was dit project een 'eyeopener' voor me, en ik kon dan ook alleen maar terugkijken op mijn vorige projecten met statements als: "Als ik die nou met React gemaakt had dan...". Kortom, de toegevoegde waarde heeft zich kenbaar gemaakt. Geen opstapeling van event listeners meer, state en data die eenvoudig in sync gehouden worden, en een JSX-structuur waarmee je een project eenvoudig opsplitst in componenten. Het denken in HTML en JavaScript op dezelfde plek maakt het ook makkelijker om echt in componenten te denken, in plaats van dat het een over-en-weerspelletje wordt tussen de HTML-file en de JS-files.

Uiteraard zijn er aspecten aan deze app die beter kunnen. Ik heb het DRY-principe, zeker als het gaat om herbruikbare componenten, nog niet overal consequent toegepast. Ook namen van variabelen, classes enzovoort zijn niet overal consistent of goed van elkaar te onderscheiden. Dit kwam doordat ik van tevoren nog niet goed kon inzien wat wel en niet state moest zijn, welke onderdelen componenten moesten zijn, enzovoort. Daardoor zijn er gedurende het verloop van het project redelijk wat naamswijzigingen geweest. Het project is echter wat mij betreft afgerond. Ik heb de lessen geleerd die ik wilde leren en een project opgeleverd dat in mijn ogen tot nu toe mijn meest professionele project is.

### Wat zou ik de volgende keer anders doen?

De volgende keer wil ik in ieder geval een component tree maken voordat ik begin, om een idee te krijgen van wat mijn app moet worden. Daarnaast wil ik ook de state vroeger in kaart brengen. Uiteraard zal het volgende project, wat dat ook mag zijn, ook nieuwe lessen en doelen met zich meebrengen die nu nog helemaal niet aan de orde waren.

### Wat ik nog wil toevoegen in de toekomst / bugfixes:

Een potentieel doel is om mijn "map-country-game" in React te maken en deze vervolgens toe te voegen aan deze app. Daarnaast zou ik eventueel meer gamemodes kunnen toevoegen. Nu is het bijvoorbeeld: raad het land aan de hand van de hoofdstad. Dat kan natuurlijk ook andersom. Bugs zijn op dit moment niet bekend. Ik heb de quiz zelf uitgebreid gespeeld en blijf zoeken naar bugs en eventuele punten van verbetering. Tegelijkertijd zie ik dit project voor nu als afgerond, dus deze toekomstige plannen moeten in lijn liggen met toekomstige projecten als ik hier werk van wil maken.

## Development Process & Reflection | English version

### My motivation, Learning experiences, and Justification:

The motivation for creating this app was to learn React independently and add a new project to my portfolio. I had learned the fundamentals through a course, and wanted to apply them in practice. My curiosity was mainly focused on the question: "What makes React easier and better than vanilla JavaScript?" I can confidently say that I have experienced the answer to that question. First of all, the structure of a React app naturally makes it much easier to keep an overview, even without a predefined architecture. This allows a project to grow in scope more quickly and easily without losing track of its direction along the way. In that respect, this project was an eye-opener for me, and I could only look back at my previous projects and think things like: "If only I had made that one with React..." In short, I have seen its added value. No more piles of event listeners; state and data can be kept in sync easily; and JSX structure makes it easy to split a project into components. Thinking about HTML and JavaScript in the same place also makes it easier to think in terms of components, rather than having to go back and forth between the HTML and JS files.

Of course, there are aspects of this app that could be improved. I have not consistently applied the DRY principle everywhere, especially when it comes to reusable components. The names of variables, classes, and so on are also not always consistent or easy to distinguish from one another. This was because, at the beginning, I did not yet have a clear idea of what should and should not be state, which parts should be components, and so on. As a result, quite a few names were revised during the course of the project. However, I consider the project complete. I learned the lessons I wanted to learn and delivered a project that, in my view, is my most professional one so far.

### What would I do differently next time?

Next time, I would make a component tree before getting started, to get an idea of what my app should become. I would also map out the state earlier. Of course, whatever the next project may be, it will bring new lessons and goals that have not come up yet.

### What I still want to add in the future / bug fixes:

One possible goal is to rebuild my "map-country-game" in React and then add it to this app. I could also add more game modes. For example, the current mode asks you to guess the country based on its capital. It could also work the other way around. I am not aware of any bugs at the moment. I have played the quiz extensively and continue to look for bugs and possible improvements. At the same time, I consider this project complete for now, so I would only pursue these future plans if they fit in with future projects.
