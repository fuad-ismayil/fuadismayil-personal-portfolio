# Fuad Ismayil - Personal Portfolio

A modern, responsive personal portfolio website built with React and TypeScript. Features smooth animations, contact form integration, and a clean, professional design.

## Live Demo

<!-- Add your deployed URL here -->
[View Portfolio](https://fuadismayil.netlify.app/)

---

## Features

- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** — Powered by Framer Motion for engaging user experience
- **Contact Form** — Integrated with EmailJS and protected by Cloudflare Turnstile
- **Form Validation** — Client-side validation using Formik and Yup
- **Modern UI** — Clean, minimal design with Tailwind CSS
- **Type Safe** — Built with TypeScript for reliability and maintainability

---

## Tech Stack

### Core

| Technology | Description |
|:---:|:---|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" alt="React"/> | **React 19** — UI library for building component-based interfaces |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40" alt="TypeScript"/> | **TypeScript** — Static typing for JavaScript |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="40" height="40" alt="Vite"/> | **Vite** — Next-generation frontend build tool |

### Styling

| Technology | Description |
|:---:|:---|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="40" height="40" alt="Tailwind CSS"/> | **Tailwind CSS 4** — Utility-first CSS framework |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" width="40" height="40" alt="Framer Motion"/> | **Framer Motion** — Animation library for React |

### Libraries & Tools

| Technology | Description |
|:---:|:---|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg" width="40" height="40" alt="React Router"/> | **React Router** — Client-side routing |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/formik/formik-original.svg" width="40" height="40" alt="Formik"/> | **Formik + Yup** — Form handling and validation |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="40" height="40" alt="ESLint"/> | **ESLint** — Code linting and formatting |

### Services

| Service | Description |
|:---:|:---|
| <img src="https://www.emailjs.com/logo.png" width="40" height="40" alt="EmailJS"/> | **EmailJS** — Email sending service |
| <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cloudflare.svg" width="40" height="40" alt="Cloudflare"/> | **Cloudflare Turnstile** — Bot protection |

---

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   ├── Header.tsx     # Navigation header
│   ├── Footer.tsx     # Site footer
│   ├── Contact.tsx    # Contact form
│   └── ...
├── pages/             # Route pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── NotFound.tsx
├── lib/               # Utility functions
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/fuadismayil.git
cd fuadismayil
```

2. Install dependencies

```bash
npm install
```

3. Create environment variables

```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_TURNSTILE_SITE_KEY=your_turnstile_key
```

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

**Fuad Ismayil**

- Portfolio: [Your Website](#)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](#)
