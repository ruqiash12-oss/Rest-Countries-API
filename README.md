# 🌍 REST Countries API Explorer (React & Zustand)

A dynamic, fully responsive web application that allows users to explore comprehensive data about countries worldwide. This project is built using **React**, **Tailwind CSS**, and **Zustand** for state management, sourcing its data from the public **REST Countries API**.

## 🔗 Live Demo
👉 **[View Live Site]( https://rest-countries-api-4qt4.vercel.app/ )** 

## 🚀 Features
- **Global Directory:** Displays a complete list of countries with essential summaries (flag, name, population, region, and capital).
- **Deep-Dive Details:** Dedicated dynamic routing for single country details, showcasing languages, native names, currencies, top-level domains, and subregions.
- **Smart Border Navigation:** Dynamically lists neighboring countries as interactive buttons, fetching their full common names and routing users directly to their profile.
- **Optimized State Management:** Implements `Zustand` to manage application states and control asynchronous API lifecycle hooks seamlessly.
- **Crash-Proof Safe Guarding:** Utilizes conditional rendering and optional chaining to prevent application crashes when encountering island countries (no borders) or empty fields.
- **Responsive Architecture:** Built with `Tailwind CSS Grid` to provide a pixel-perfect user experience across mobile, tablet, and desktop viewports.

## 🛠️ Tech Stack
- **Framework:** React.js (Hooks: `useEffect`, `useState`, `useParams`)
- **Routing:** React Router DOM (v6)
- **State Management:** Zustand
- **Styling:** Tailwind CSS (Mobile-first Grid system)
- **Icons:** React Icons (Heroicons family)
- **Data Source:** REST Countries API (v3.1)

## 📦 Local Installation & Setup

To get a local copy up and running on your machine, follow these simple steps:

1. Clone the repository:
```bash
git clone https://github.com/ruqiash12-oss/Rest-Countries-API
```

2. Navigate into the project directory:
```bash
cd Rest Countries API
```

3. Install the dependencies:
```bash
npm install
```

4. Start the local development server:
```bash
npm run dev
```

## 📝 Key Technical Insights
- **API Performance Fix:** Solved the REST Countries API restriction limits by dynamically splitting fetch loads into generalized lighter components and detailed single-country fetches (`/alpha/:id`).
- **Dynamic Key Mapping:** Extracted deeply-nested locale attributes from the API (such as currencies and native names) safely via dynamic JavaScript `Object.values()` parsing.
