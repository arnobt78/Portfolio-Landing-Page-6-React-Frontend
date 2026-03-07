# Portfolio Landing Page 6 - React, Vite, JavaScript, TailwindCSS Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.5-green)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-blueviolet)](https://tailwindcss.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-orange)](https://www.emailjs.com/)
[![Lucide React](https://img.shields.io/badge/Lucide%20React-0.556-888)](https://lucide.dev/)

A modern, single-page portfolio template built with **React 19**, **Vite**, **JavaScript**, and **Tailwind CSS 4**. It features a dark theme with glassmorphism, smooth scroll navigation, a contact form powered by **EmailJS**, and reusable UI components. Use it as a learning resource, a starter for your own portfolio, or as a reference for React patterns and Tailwind theming.

**Live Demo:** [https://portfolio-ui-6.vercel.app/](https://portfolio-ui-6.vercel.app/)

![Screenshot 2026-03-07 at 11 46 37](https://github.com/user-attachments/assets/2f05f2d2-9232-47bb-a711-6645eff4a954)
![Screenshot 2026-03-07 at 11 46 51](https://github.com/user-attachments/assets/aaa4bba7-3c13-4431-88bc-448ded3ecd5e)
![Screenshot 2026-03-07 at 11 47 03](https://github.com/user-attachments/assets/a784e656-48d3-4652-a70c-af34f1f47bbc)
![Screenshot 2026-03-07 at 11 47 19](https://github.com/user-attachments/assets/c98034f6-e0f8-4c6a-80bb-49fcfed1b94d)
![Screenshot 2026-03-07 at 11 47 36](https://github.com/user-attachments/assets/ad0bb327-9b69-448b-b0d8-91ce866959ef)
![Screenshot 2026-03-07 at 11 47 54](https://github.com/user-attachments/assets/260a2ccc-33d8-482b-95ec-af737091199f)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [How to Run & Use](#how-to-run--use)
- [Project Walkthrough](#project-walkthrough)
- [Components & Reusability](#components--reusability)
- [Sections & Functionality](#sections--functionality)
- [Styling & Theme](#styling--theme)
- [API & Backend](#api--backend)
- [Routes & Navigation](#routes--navigation)
- [Code Snippets & Examples](#code-snippets--examples)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Features

- **Single-page layout** with anchor-based navigation (About, Projects, Experience, Testimonials, Contact).
- **Responsive design** with mobile menu and desktop pill navigation.
- **Dark theme** with custom CSS variables (primary teal `#20b2a6`, background `#0f1418`).
- **Glassmorphism UI** (`.glass`, `.glass-strong`) with backdrop blur and borders.
- **Animated elements**: fade-in on scroll, floating badges, marquee skills strip, animated border buttons.
- **Contact form** sending emails via **EmailJS** (no backend required).
- **Testimonials carousel** with previous/next and dot indicators.
- **Experience timeline** with alternating layout and “current” highlight.
- **SEO meta tags** (title, description, author, Open Graph, Twitter Card, canonical URL).
- **ESLint** configured for React (hooks, refresh) and clean code.

---

## Tech Stack

| Category  | Technology             |
| --------- | ---------------------- |
| Framework | React 19               |
| Build     | Vite (Rolldown)        |
| Styling   | Tailwind CSS 4         |
| Icons     | Lucide React           |
| Email     | EmailJS (client-side)  |
| Linting   | ESLint 9 (flat config) |

There is **no separate backend**; the app is a static frontend with EmailJS for the contact form.

---

## Project Structure

```bash
portfolio-ui-6/
├── index.html              # Entry HTML, SEO meta tags
├── package.json            # Dependencies & scripts
├── vite.config.js         # Vite + React + Tailwind + @ alias
├── eslint.config.js       # ESLint flat config
├── src/
│   ├── main.jsx           # React root (createRoot, StrictMode)
│   ├── App.jsx            # Main layout: Navbar, sections, Footer
│   ├── index.css          # Tailwind + @theme + custom utilities
│   ├── layout/
│   │   ├── Navbar.jsx     # Fixed header, scroll state, mobile menu
│   │   └── Footer.jsx     # Links, social, copyright
│   ├── sections/
│   │   ├── Hero.jsx       # Hero, CTA, skills marquee
│   │   ├── About.jsx      # About text + highlight cards
│   │   ├── Projects.jsx   # Project grid with images & tags
│   │   ├── Experience.jsx # Timeline of roles
│   │   ├── Testimonials.jsx # Carousel of quotes
│   │   └── Contact.jsx    # Form + EmailJS + contact info
│   └── components/
│       ├── Button.jsx            # Primary CTA button (sizes: sm, default, lg)
│       └── AnimatedBorderButton.jsx # Outlined button with SVG border animation
├── public/
│   └── vite.svg           # Favicon / default OG image
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** (or yarn/pnpm)

### Install

```bash
git clone <your-repo-url>
cd portfolio-ui-6
npm install
```

### Optional: Contact form (EmailJS)

To enable the contact form, create a `.env` file in the project root (see [Environment Variables](#environment-variables)). Without it, the form will show a configuration error when submitted.

---

## Environment Variables

The project uses **Vite**'s env system. Only variables prefixed with `VITE_` are exposed to the client.

### Required for contact form (EmailJS)

Create a file named `.env` in the **root** of the project (same level as `package.json`):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### How to get these values

1. Sign up at [EmailJS](https://www.emailjs.com/).
2. **Email Service**: Add an email service (e.g. Gmail) and note the **Service ID**.
3. **Email Template**: Create a template with variables such as `{{name}}`, `{{email}}`, `{{message}}` (matching the form fields in `Contact.jsx`). Note the **Template ID**.
4. **Account**: In the dashboard, find your **Public Key** (or create an API key).
5. Put these three values into `.env` as above.

### Security notes

- Do **not** commit `.env` to version control (it should be in `.gitignore`).
- For production (e.g. Vercel), set the same variables in the hosting dashboard as environment variables.
- Never put server-side secrets in `VITE_*` variables; they are visible in the client bundle.

### Example `.env.example` (optional)

You can add a `.env.example` file (without real values) so others know what to set:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## How to Run & Use

| Command           | Description                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start dev server (e.g. <http://localhost:5173>) |
| `npm run build`   | Production build → `dist/`                      |
| `npm run preview` | Serve `dist/` locally to test production build  |
| `npm run lint`    | Run ESLint on the project                       |

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`). Edit files; the app will hot-reload.

### Production build

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

### Linting

```bash
npm run lint
```

Fixes are manual; the config lives in `eslint.config.js`.

---

## Project Walkthrough

1. **Entry**: `index.html` loads `/src/main.jsx`. `main.jsx` mounts `<App />` into `#root`.
2. **Layout**: `App.jsx` composes the page: fixed `Navbar`, then `Hero` → `About` → `Projects` → `Experience` → `Testimonials` → `Contact`, then `Footer`.
3. **Navigation**: Navbar and Footer use `#about`, `#projects`, etc. Browser smooth-scroll (via `scroll-behavior: smooth` in CSS) scrolls to each section.
4. **Contact**: User fills the form in `Contact.jsx`; on submit, `emailjs.send()` is called with `VITE_*` env vars. Success/error state is shown below the form.
5. **Data**: Section content (skills, projects, experience, testimonials, contact info) is defined inside each section file as constants—no API or CMS. Replace with your own data or later connect to a backend/CMS.

---

## Components & Reusability

### Button (`src/components/Button.jsx`)

Primary CTA button with size variants and optional custom class.

**Props:** `className`, `size` (`"sm"` | `"default"` | `"lg"`), `children`, plus any standard button props (`onClick`, `type`, `disabled`, etc.).

**Usage in another project:**

```jsx
import { Button } from "@/components/Button";

<Button size="lg" onClick={() => alert("Clicked")}>
  Click me
</Button>
<Button size="sm" type="submit">Submit</Button>
```

Uses Tailwind and CSS variable `--color-primary`; ensure your app defines it or adjust classes.

---

### AnimatedBorderButton (`src/components/AnimatedBorderButton.jsx`)

Outlined button with an animated SVG border on hover.

**Props:** `children` (label or icon + text).

**Usage:**

```jsx
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

<AnimatedBorderButton>Download CV</AnimatedBorderButton>;
```

Reusable in any React + Tailwind project; the animation uses `var(--color-primary)` and classes like `animated-border`, `animated-border-path` (defined in `index.css`). Copy the component and the related keyframes/classes if you move it to another project.

---

### Layout: Navbar & Footer

- **Navbar**: Fixed header, scroll-dependent style (e.g. glass when scrolled), desktop links in a pill, mobile hamburger menu. Replace `navLinks` and logo href with your own.
- **Footer**: Logo, section links, social links, dynamic year. Replace `footerLinks`, `socialLinks`, and copy with your data.

Both are presentational; they read link config from arrays at the top of each file. Easy to reuse by copying the component and the `glass` / `glass-strong` styles from `index.css`.

---

## Sections & Functionality

| Section      | File               | Purpose                                                                              |
| ------------ | ------------------ | ------------------------------------------------------------------------------------ |
| Hero         | `Hero.jsx`         | Full-height intro, headline, CTA buttons, social links, skills marquee, scroll hint. |
| About        | `About.jsx`        | “About me” copy + 4 highlight cards (e.g. Clean Code, Performance).                  |
| Projects     | `Projects.jsx`     | Grid of project cards (image, title, description, tags, link/GitHub).                |
| Experience   | `Experience.jsx`   | Vertical timeline of jobs (period, role, company, description, tech tags).           |
| Testimonials | `Testimonials.jsx` | Carousel (state `activeIdx`), prev/next and dots, quote + author + avatar.           |
| Contact      | `Contact.jsx`      | Form (name, email, message) + EmailJS + contact info cards.                          |

Each section is a React component that exports a single component. Data is in constants at the top of the file—replace them to customize content without changing structure.

---

## Styling & Theme

- **Tailwind**: Imported in `src/index.css` with `@import "tailwindcss"`.
- **Theme**: `@theme { ... }` in `index.css` defines CSS variables:
  - `--color-background`, `--color-foreground`, `--color-primary`, `--color-surface`, `--color-muted-foreground`, `--color-border`, `--color-highlight`, `--radius`, etc.
- **Components**: `.glass`, `.glass-strong`, `.glow-text`, `.glow-border` in `@layer components`.
- **Utilities**: `.animate-fade-in`, `.animation-delay-*`, `.animate-float`, `.animate-marquee`, `.timeline-glow`, and keyframes for the animated border.

To reuse in another project: copy `index.css` (or the `@theme` block and the layers you need) and ensure Tailwind 4 is set up. The `@` path alias is set in `vite.config.js` (`"@": path.resolve(__dirname, "./src")`).

---

## API & Backend

- **No custom backend.** The app is a static SPA.
- **EmailJS**: The only “API” used is EmailJS’s client SDK. `Contact.jsx` calls `emailjs.send(serviceId, templateId, templateParams, publicKey)`. All credentials come from `import.meta.env.VITE_*`.
- **Assets**: Images (e.g. `/hero-bg.jpg`, `/profile-photo.jpg`, `/projects/project1.png`) are expected in `public/` or deployed alongside the app. Testimonials use external Unsplash URLs.

---

## Routes & Navigation

- **No React Router.** Single HTML page; “routes” are section IDs.
- **Anchors**: `#about`, `#projects`, `#experience`, `#testimonials`, `#contact`.
- **Smooth scroll**: Enabled globally in `index.css` with `html { scroll-behavior: smooth; }`.
- **Navbar**: “Contact Me” can point to `#contact`; you can change the href in `Navbar.jsx` and in the Hero CTA to `#contact` if desired.

---

## Code Snippets & Examples

### Using the Button with an icon

```jsx
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

<Button size="lg">
  Contact Me <ArrowRight className="w-5 h-5" />
</Button>;
```

### Contact form submit (EmailJS)

```jsx
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

await emailjs.send(
  serviceId,
  templateId,
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
  publicKey,
);
```

### Adding a new section

In `App.jsx`:

```jsx
import { MySection } from "@/sections/MySection";

// Inside the <main>:
<MySection />;
```

Create `src/sections/MySection.jsx` and use the same layout patterns (e.g. `section`, `container`, `animate-fade-in`, `glass`).

### Changing theme colors

In `src/index.css`, inside `@theme`:

```css
--color-primary: #20b2a6; /* Teal – change to your brand color */
--color-background: #0f1418; /* Dark background */
--color-surface: #1a2329; /* Cards, inputs */
```

---

## Keywords

Portfolio, React, Vite, Tailwind CSS, single-page application, SPA, frontend, developer portfolio, glassmorphism, dark theme, EmailJS, contact form, responsive design, component-based UI, Lucide icons, ESLint, Vercel, static site, open source, learning project, template, starter.

---

## Conclusion

This repo is a **portfolio template and learning resource**. You get a full React + Vite + Tailwind setup, reusable components (Button, AnimatedBorderButton), layout (Navbar, Footer), and section patterns (Hero, About, Projects, Experience, Testimonials, Contact). Configure EmailJS via `.env` to enable the contact form, then replace copy and assets with your own. Use the structure and code snippets above to extend the project or reuse pieces in other apps.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
