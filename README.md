# Alex Smith — Portfolio

A dark-themed personal portfolio site built with React + Vite.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Portfolio.jsx        ← updated (modal support)
│   ├── PortfolioModal.jsx   ← new
│   ├── Resume.jsx
│   ├── Services.jsx
│   ├── Sidebar.jsx
│   ├── Skills.jsx
│   ├── Stats.jsx
│   └── Testimonials.jsx
├── data/
│   └── constants.js
├── App.jsx
├── main.jsx
└── index.css               ← includes portfolio modal styles
```

## Portfolio Modal

Click any portfolio card to open the detail modal. Features:
- Image slider with dots + thumbnails
- Project info panel (Category, Client, Date, URL)
- ‹ › buttons to navigate between projects
- Escape key to close
- Responsive (single column on mobile)

To customise project details, edit the `PORTFOLIO_DETAILS` object in `src/components/PortfolioModal.jsx`.
