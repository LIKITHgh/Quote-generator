# 🌟 Simple Quote Generator

A clean and simple inspirational quote generator built with vanilla HTML, CSS, JavaScript, and Node.js/Express.

## 🚀 Quick Start

### 1. Setup Project
```bash
mkdir quote-generator
cd quote-generator
```

### 2. Create Files
Create these files in your project folder:
- `server.js` (backend)
- `package.json` (dependencies)
- `vercel.json` (deployment config)
- `.env` (API key)
- `public/index.html` (frontend)

### 3. Install Dependencies
```bash
npm install
```

### 4. Get API Key
- Go to [API Ninjas](https://api.api-ninjas.com)
- Sign up for free
- Get your API key
- Add to `.env` file:
```
API_NINJAS_KEY=your_actual_api_key_here
```

### 5. Run Locally
```bash
npm start
```
Visit `http://localhost:3000`

## 📁 Project Structure
```
quote-generator/
├── public/
│   └── index.html          # Frontend (HTML/CSS/JS)
├── server.js               # Backend (Node.js/Express)
├── package.json            # Dependencies
├── vercel.json             # Vercel deployment config
├── .env                    # API key (don't commit this)
└── README.md               # This file
```

## ✨ Features
- **Get New Quote**: Fetch random inspirational quotes
- **Copy Quote**: Copy quote to clipboard
- **Tweet Quote**: Share quote on Twitter
- **Responsive Design**: Works on mobile and desktop
- **Loading Animation**: Shows loading while fetching
- **Fallback Quotes**: Works even if API fails

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variable `API_NINJAS_KEY` in Vercel dashboard
4. Deploy automatically

## 🛠 Tech Stack
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js, Express
- **API**: API Ninjas Quotes
- **Deployment**: Vercel

## 📱 Mobile Responsive
The app automatically adapts to different screen sizes with responsive CSS.

## 🔧 How It Works
1. Frontend sends request to `/api/quote`
2. Backend calls API Ninjas with your API key
3. Returns clean JSON with quote, author, and category
4. Frontend displays the quote with smooth animations
5. Users can copy or share the quote

## 🎯 Key Learning Points
- **Full-stack development** with separation of frontend/backend
- **API integration** with error handling
- **Responsive web design** with CSS
- **Modern JavaScript** (async/await, fetch API)
- **Deployment** to production environment

This simple version is perfect for learning the fundamentals without complexity!