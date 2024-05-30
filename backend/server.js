// Import necessary modules using CommonJS syntax
const express = require('express');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize OpenAI and Supabase clients
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Middleware to parse JSON bodies
app.use(express.json());

// Define an async function to handle OpenAI chat completions
async function generateChatResponse(messages) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",  // Adjust model as needed
            messages: messages
        });
        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error calling the OpenAI Chat API:', error);
        return "Sorry, I encountered an error while processing your request.";
    }
}

// API endpoint for generating scam emails
app.post('/generate-scam-email', async (req, res) => {
    const topic = req.body.topic;  // Expect a topic for the scam email in the request body
    if (!topic) {
        return res.status(400).send({ error: "No topic provided" });
    }
    const scamEmailPrompt = {
        messages: [
            { role: "system", content: "You are a creative assistant." },
            { role: "user", content: `Create a fake scam email about ${topic}.` }
        ]
    };
    const responseText = await generateChatResponse(scamEmailPrompt.messages);
    res.send({ scamEmail: responseText });
});


// Root endpoint for basic server response
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
