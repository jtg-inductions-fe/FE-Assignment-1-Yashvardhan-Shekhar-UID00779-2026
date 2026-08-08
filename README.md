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

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your development machine.
### Installation & Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```bash
   # Clone the specific development branch and Navigate into the project directory
   git clonetps://github.com/tg-inductions-fe/FE-Assignment-1-Yashvardhan-Shekhar-UID00779-2026.git
   cd FE-Assignment-1-Yashvardhan-Shekhar-UID00779-2026
   
   ```

2. **Set up the correct Node.js version:**
   This project uses an `.nvmrc` file to enforce the required Node.js environment. Run the following commands to switch versions:
   ```bash
   # Detect and switch to the project's required Node version
   nvm use
   # Note: If the version isn't installed locally, run 'nvm install' first, then 'nvm use'.
   ```

3. **Install project dependencies:**
   The `.npmrc` file ensures strict, consistent dependency resolution. Do not delete or modify it. Simply run:
   ```bash
   npm install
   ```

4. **Compile SCSS & Run Development Server:**
   ```bash
   npm run dev
   ```

5. **View in Browser:**
   Open your browser and navigate to [http://localhost:3000/](http://localhost:3000/).
