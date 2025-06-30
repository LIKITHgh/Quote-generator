const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// API endpoint to get quotes
app.get('/api/quote', async (req, res) => {
    try {
        const fetch = (await import('node-fetch')).default;
        
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            headers: {
                'X-Api-Key': process.env.API_NINJAS_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data || data.length === 0) {
            throw new Error('No quotes received');
        }

        const quote = data[0];
        
        res.json({
            quote: quote.quote,
            author: quote.author,
            category: quote.category || 'Inspiration'
        });

    } catch (error) {
        console.error('Quote API Error:', error);
        
        // Fallback quotes
        const fallbackQuotes = [
            { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Work" },
            { quote: "Life is what happens to you while you're busy making other plans.", author: "John Lennon", category: "Life" },
            { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Dreams" },
            { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "Success" }
        ];
        
        const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        res.json(randomQuote);
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});