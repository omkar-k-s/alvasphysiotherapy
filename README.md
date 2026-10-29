# Alva’s College of Physiotherapy and Research Centre

A modern, fast, responsive web application for **Alva’s College of Physiotherapy and Research Centre**, Moodbidri (affiliated to Rajiv Gandhi University of Health Sciences, Karnataka; approved by Government of Karnataka).

---

## 🛠️ Technologies Used

- **Framework:** [React 19](https://react.dev/)
- **Bundler / Build Tool:** [Vite 8](https://vite.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linter:** [oxlint](https://oxc.rs/docs/guide/usage/linter.html)
- **Styling:** Modular CSS3 with native CSS Custom Properties (Design Tokens), Flexbox, CSS Grid, and responsive breakpoints
- **Typography:** Outfit & Plus Jakarta Sans via Google Fonts

---

## 📁 Project Architecture & Folder Structure

```text
alvas-physiotherapy/
├── public/
│   ├── images/
│   │   ├── logo/             # Official college emblem and logos
│   │   ├── campus/           # Campus architecture and grounds photos
│   │   ├── hero/             # Hero banner collage imagery
│   │   ├── courses/          # Degree programs and academic images
│   │   ├── facilities/       # Laboratories, electrotherapy, library photos
│   │   ├── faculty/          # Approved faculty photographs
│   │   ├── student-life/     # Sports, cultural events, convocation photos
│   │   └── events/           # Academic conferences and health camp images
│   ├── icons/                # Static SVG icon assets
│   ├── alvas-logo.png        # College emblem fallback
│   ├── favicon.svg           # Scalable browser favicon
│   └── icons.svg             # Sprites / system icons
│
├── src/
│   ├── assets/
│   │   ├── fonts/            # Local webfonts (if applicable)
│   │   ├── icons/            # SVG vector icons
│   │   └── images/           # Frontend bundled images
│   │
│   ├── components/
│   │   ├── common/           # Reusable generic UI components
│   │   │   ├── Button.jsx          # Configurable button / link component
│   │   │   ├── SectionHeading.jsx  # Reusable section heading with eyebrow
│   │   │   ├── Container.jsx       # Standard max-width container wrapper
│   │   │   ├── ImageCard.jsx       # Image card with overlay & badge
│   │   │   └── index.js            # Common components barrel export
│   │   │
│   │   ├── layout/           # Global structural layout components
│   │   │   ├── Header/             # Institutional top bar & navigation
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Header.css
│   │   │   │   └── navigationData.js
│   │   │   ├── Footer/             # Multi-column footer & contact info
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.css
│   │   │   └── index.js
│   │   │
│   │   └── home/             # Homepage section modules (JSX + CSS paired)
│   │       ├── HeroSection/
│   │       │   ├── HeroSection.jsx
│   │       │   └── HeroSection.css
│   │       ├── StatisticsSection/
│   │       │   ├── StatisticsSection.jsx
│   │       │   └── StatisticsSection.css
│   │       ├── AboutSection/
│   │       │   ├── AboutSection.jsx
│   │       │   └── AboutSection.css
│   │       ├── CoursesSection/
│   │       │   ├── CoursesSection.jsx
│   │       │   └── CoursesSection.css
│   │       ├── FacilitiesSection/
│   │       │   ├── FacilitiesSection.jsx
│   │       │   └── FacilitiesSection.css
│   │       ├── FacultySection/
│   │       │   ├── FacultySection.jsx
│   │       │   └── FacultySection.css
│   │       ├── StudentLifeSection/
│   │       │   ├── StudentLifeSection.jsx
│   │       │   └── StudentLifeSection.css
│   │       ├── AdmissionsBanner/
│   │       │   ├── AdmissionsBanner.jsx
│   │       │   └── AdmissionsBanner.css
│   │       ├── NewsSection/
│   │       │   ├── NewsSection.jsx
│   │       │   └── NewsSection.css
│   │       └── index.js
│   │
│   ├── pages/
│   │   └── Home.jsx          # Homepage section composer
│   │
│   ├── data/                 # Centralized content repositories
│   │   ├── collegeInfo.js    # Official college code, phones, emails & address
│   │   ├── navigationData.js # Main navbar links and dropdown menus
│   │   ├── coursesData.js    # BPT, MPT, and PhD program data
│   │   ├── facilitiesData.js # Laboratories, gymnasiums, and library data
│   │   ├── facultyData.js    # Faculty members, qualifications & experience
│   │   └── eventsData.js     # Academic conferences and community camps
│   │
│   ├── styles/               # Centralized design tokens & global CSS
│   │   ├── variables.css     # CSS custom properties / theme color tokens
│   │   ├── typography.css    # Font definitions & heading styles
│   │   ├── global.css        # CSS reset, body defaults & accessibility focus
│   │   └── responsive.css    # Grid containers & breakpoint rules
│   │
│   ├── hooks/
│   │   └── useMediaQuery.js  # React 19 external store media query hook
│   │
│   ├── utils/
│   │   └── helpers.js        # String formatters and class name helpers
│   │
│   ├── App.jsx               # Application root layout (Header + Page + Footer)
│   ├── App.css               # App root viewport styling
│   ├── index.css             # Stylesheet import pipeline
│   └── main.jsx              # React DOM entry point
│
├── .env.example              # Sample environment variables
├── .gitignore                # Git exclusions
├── index.html                # HTML document template
├── package.json              # NPM dependencies and scripts
├── package-lock.json         # Pinned dependency tree
├── README.md                 # Project documentation
└── vite.config.js            # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

```bash
# Clone the repository and navigate into the project directory
cd alvasphysiotherapy

# Install all dependencies
npm install
```

### Running the Development Server

To launch the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173/` (or the port specified by Vite).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The production assets will be compiled into the `dist/` directory.

### Previewing the Production Build

To preview the built production app locally:

```bash
npm run preview
```

### Running the Code Linter

```bash
npm run lint
```

---

## 🧭 Developer Maintenance Guide

Where to go to update or modify each feature of the website:

### 1. Header & Navigation Menu
- **Navigation items & dropdown submenus:** Edit `src/data/navigationData.js`. Add, rename, or reorder menu items or submenus here without touching JSX.
- **Top institutional bar (College Code, Phone, Email, Affiliations):** Edit `src/data/collegeInfo.js`.
- **Header component & mobile drawer logic:** Edit `src/components/layout/Header/Header.jsx` and `Header.css`.

### 2. Homepage Sections Composition
- **Page layout and order of sections:** Edit `src/pages/Home.jsx`. The sections are imported and ordered cleanly here.
- **Each homepage section:**
  | Section | Component File | Stylesheet |
  |---|---|---|
  | Hero Banner | `src/components/home/HeroSection/HeroSection.jsx` | `HeroSection.css` |
  | Key Statistics | `src/components/home/StatisticsSection/StatisticsSection.jsx` | `StatisticsSection.css` |
  | About College | `src/components/home/AboutSection/AboutSection.jsx` | `AboutSection.css` |
  | Courses Offered | `src/components/home/CoursesSection/CoursesSection.jsx` | `CoursesSection.css` |
  | Facilities | `src/components/home/FacilitiesSection/FacilitiesSection.jsx` | `FacilitiesSection.css` |
  | Faculty Profiles | `src/components/home/FacultySection/FacultySection.jsx` | `FacultySection.css` |
  | Life @ Alva's | `src/components/home/StudentLifeSection/StudentLifeSection.jsx` | `StudentLifeSection.css` |
  | Admissions Banner | `src/components/home/AdmissionsBanner/AdmissionsBanner.jsx` | `AdmissionsBanner.css` |
  | News & Events | `src/components/home/NewsSection/NewsSection.jsx` | `NewsSection.css` |

### 3. Institutional Content & Reusable Data
- **Courses (BPT, MPT, Ph.D):** Edit `src/data/coursesData.js` to change eligibility, duration, or highlights.
- **Facilities & Labs:** Edit `src/data/facilitiesData.js`.
- **Faculty Profiles:** Edit `src/data/facultyData.js` to update professors, designations, or qualifications.
- **News, Camps & Conferences:** Edit `src/data/eventsData.js`.

### 4. College Logo & Media Assets
All static imagery is organized under `public/images/`:
- **College Emblem & Logos:** `public/images/logo/` (`alvas-logo.png`)
- **Campus Buildings & Grounds:** `public/images/campus/`
- **Hero Banner Imagery:** `public/images/hero/`
- **Course & Academic Photos:** `public/images/courses/`
- **Laboratories & Infrastructure:** `public/images/facilities/`
- **Faculty Photographs:** `public/images/faculty/`
- **Campus Life & Sports:** `public/images/student-life/`
- **Event & News Photos:** `public/images/events/`

### 5. Website Theme Colors & Design Tokens
All global color palettes, shadows, border radii, and transitions are centralized in:
👉 `src/styles/variables.css`

```css
:root {
  --color-primary: #48AAAD;       /* Primary Teal */
  --color-deep-teal: #075B60;     /* Deep Botanical Teal */
  --color-header-teal: #168F95;   /* Navbar Header Teal */
  --color-navy: #082B50;          /* Dark Navy Text / Headings */
  --color-light-aqua: #EAF8F8;    /* Soft Aqua Accent Background */
  --color-background: #F7FCFC;    /* Page Background */
  --color-white: #FFFFFF;         /* Pure White */
  --color-orange: #FF7900;        /* Action Orange Accent */
  --color-border: #DCEBEC;        /* Subtle Border Stroke */
}
```

Updating these variables applies consistently across all components.

---

## 🔒 Code Quality Standards

- **Component Structure:** Every homepage section is self-contained with its JSX and CSS in a dedicated folder.
- **Centralized Data:** Content (courses, facilities, faculty, news) is separated from presentation logic.
- **Purity & React 19:** Functional components avoid impure side-effects during render; hooks use `useSyncExternalStore` for external event listeners.
- **Zero Broken Links:** All navigation anchor destinations, tel links, email addresses, and map links are preserved and active.
