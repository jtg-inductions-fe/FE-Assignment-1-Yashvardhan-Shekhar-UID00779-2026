# Travlog — Modern Travel & Special Deals Web Application

A responsive, feature-rich travel platform front-end built with modern SCSS (following BEM methodology and a 7-1 Sass architecture), modular JavaScript, Splide.js carousel integration, and an interactive "Spin & Win" promotional deals feature complete with custom physics, keyframe animations, and local state management.

---

## Directory Structure

```text
FE-ASSIGNMENT-1/
├── public/
│   └── assets/
│       ├── fonts/
│       ├── icons/
│       ├── images/
│       ├── logo/
│       └── .gitkeep
├── src/
│   ├── script/
│   │   ├── utils/
│   │   │   ├── specialDeals.js   # Spin & Win physics, wheel logic & deals management
│   │   │   └── startup.js        # Dynamic HTML injections (nav, stats, footer, testimonials)
│   │   ├── index.js              # Event listeners, hamburger toggle & accordion logic
│   │   └── splide.min.js         # Splide carousel core initialization
│   └── styles/
│       ├── abstract/             # Helper tools, mixins, variables & typography
│       │   ├── _functions.scss
│       │   ├── _mixins.scss
│       │   ├── _typography.scss
│       │   └── _variables.scss
│       ├── base/                 # Reset stylesheet and baseline HTML elements
│       │   ├── _base.scss
│       │   └── _reset.scss
│       ├── components/           # Reusable UI component modules
│       │   ├── _buttons.scss
│       │   ├── _card.scss
│       │   ├── _hamburger.scss
│       │   ├── _images.scss
│       │   └── _navlinks.scss
│       ├── layout/               # Section-specific page layouts
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   ├── _hero.scss
│       │   ├── _modal.scss       # Spin wheel & special deals modal styling
│       │   ├── _testimonials.scss
│       │   ├── _travel-point.scss
│       │   └── __travelPointSponsors.scss
│       ├── vendors/              # Third-party library overrides
│       │   └── _splide.scss
│       └── main.scss             # Primary Sass entry point
├── .coderabbit.yaml
├── .gitignore
├── .npmrc
├── .nvmrc
└── README.md

```

---

## Features & Functional Highlights

* **Header & Responsive Navigation**
* Fully responsive navigation with smooth mobile drawer toggling.
* Interactive hamburger menu with keyboard accessibility (`Escape` key close handling and button focus management).


* **Hero & Visual Layouts**
* Multi-column display section, CTA buttons, background gradient styling, and custom vector decorations across mobile, tablet, and desktop viewport.


* **Travel Point & Sponsor Showcase**
* Dynamic statistics card generation and partner company logo layouts.


* **Testimonials Carousel**
* Integrated `Splide.js` slider featuring dynamic star-rating SVG generation, custom avatars, and slider navigational arrows.


* **Footer Navigation & Accordions**
* Multi-column grid on desktop/tablet that gracefully transitions into interactive collapsible accordion panels on mobile.


* **"Spin & Win" Special Deals System**
* **Skeleton Loaders:** Custom skeleton UI states for initial load, offer listings, and winning screens.
* **Wheel Physics & Animation:** Rotational degree calculation and CSS keyframe physics for acceleration, deceleration, and winning slice deceleration.
* **Deals State Management:** Dynamic prize assignment, expiration timer logic, "Copy Code" clipboard feedback, and recycling of invalid/expired deals back into the pool.



---

## Work Breakdown Structure (WBS)

The development lifecycle was organized into seven distinct structural milestones:

### 1. Exploration & Architecture

* Configured CSS reset, SCSS 7-1 folder structure, dynamic `px-to-rem` functions, and responsive mixins.
* Implemented strict BEM conventions across all component and layout files.

### 2. Header Section

* Designed header layout, logo placement, navlinks, and action buttons for login/signup.
* Implemented hamburger open/close toggle functionality for mobile viewports.
* Styled mobile, tablet, and desktop layouts with background left-gradient accents.

### 3. Hero Section

* Constructed heading, subtext, and CTA buttons on the left column with image compositions on the right.
* Applied background decorative vector arrows and adjusted multi-breakpoint responsive layouts.

### 4. Travel Point Section

* Added company logo strip and hero stats card components.
* Responsive styling for stat cards and promotional discount badge elements on desktop.

### 5. Testimonials Section

* Explored Splide.js slider capabilities and built customized carousel card templates.
* Dynamically rendered card components (avatar, details, dynamic star ratings, comment body) and custom slide background imagery.

### 6. Footer Section

* Built left-column branding (logo, description, social links) and right-column navigation blocks.
* Implemented mobile accordion controls for expandable link lists.
* Refined multi-column grid responsiveness across tablet and desktop screens.

### 7. Special Deals Modal & Wheel Mechanics

* Designed and built Skeleton UI states for modal loading, offer page deals, and win state views.
* Rendered wheel slices, labels, prize icons, and the "Spin & Win" interaction trigger.
* Implemented wheel rotation physics, deceleration keyframe state handling, deal navigation buttons, copy-to-clipboard utility, state-driven expired deal recycling, and local storage hooks.

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your development machine.

### Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/jtg-inductions-fe/FE-Assignment-1-Yashvardhan-Shekhar-UID00779-2026/tree/develop
cd FE-Assignment-1-Yashvardhan-Shekhar-UID00779-2026

```


2. **Install project dependencies:**
```bash
npm install

```


3. **Compile SCSS / Run Development Server:**
```bash
npm run dev

```


4. **View in Browser:**
Launch `http://localhost:3000/`.