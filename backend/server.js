const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const clickCounts = {};  // This object will store email click counts

// Apply CORS middleware to allow connections from frontend
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Initialize OpenAI and Supabase clients
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Middleware to parse JSON bodies
app.use(express.json());

// Modify the generateChatResponse function to explicitly instruct the model to avoid spam-like content
async function generateChatResponse(messages) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                ...messages,
                { role: "system", content: "Generate the email ensuring it does not contain spam-like language such as 'free', 'guarantee', or 'risk-free'." }
            ]
        });
        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error calling the OpenAI Chat API:', error);
        return "Sorry, I encountered an error while processing your request.";
    }
}


// Setup nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Function to send emails
async function sendEmail(to, subject, htmlContent) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        html: htmlContent
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Failed to send email:', error);
        return false;
    }
}

// Generate a unique token for each user email
function generateToken() {
    return require('crypto').randomBytes(20).toString('hex');
}

// API endpoint for generating scam emails
app.post('/generate-scam-email', async (req, res) => {
    const { email } = req.body;  // Email to send the scam email to
    if (!email) {
        return res.status(400).send({ error: "Email not provided" });
    }

    const token = generateToken(); // Generate token for each email
    const verificationLink = `http://localhost:3000/scam-page?token=${token}`; // Append token to hyperlink

    // Randomly generate a bank name, customer service rep name, and subject
    const banks = ['DBS', 'OCBC', 'UOB', 'Standard Chartered', 'HSBC'];
    const subjects = ['Account Verification Required', 'Immediate Action Required: Verify Your Account', 'Security Alert: Verify Your Banking Details'];
    const bank = banks[Math.floor(Math.random() * banks.length)];
    const subject = subjects[Math.floor(Math.random() * subjects.length)];

    const scamEmailPrompt = {
        messages: [
            { role: "system", content: "Generate a professional scam email for account verification without predefined content." },
            { role: "user", content: `Craft a scam email from ${bank} Bank with the subject "${subject}" requesting urgent account verification to maintain service continuity. Exclude any contact numbers. Please include the phrase "Click here" within the email only once. The start of the email should not have the line "Subject:"` }
        ]
    };

    const scamEmailContent = await generateChatResponse(scamEmailPrompt.messages);

    const formattedEmailContent = `
        <html>
            <body>
                <p>${scamEmailContent.replace(/\n/g, '<br>').replace("click here", `<a href="${verificationLink}">click here</a>`)}</p>
            </body>
        </html>`;

    const emailSent = await sendEmail(email, subject, formattedEmailContent);
    if (emailSent) {
        // Store the token in the database associated with the user
        await supabase
            .from('family_members')
            .update({ token })
            .eq('email', email);

        res.send({ message: 'Scam email sent successfully!' });
    } else {
        res.status(500).send({ error: 'Failed to send scam email.' });
    }
});


app.post('/add-family-member', async (req, res) => {
    const { name, email, relationship_type } = req.body;
    try {
        const { data, error } = await supabase
            .from('family_members')
            .insert([{ name, email, relationship_type }]);
        if (error) throw error;
        res.send({ message: 'Family member added successfully!', data });
    } catch (error) {
        console.error('Error inserting into Supabase:', error.message);
        res.status(500).send({ error: error.message });
    }
});

// Track click endpoint
app.post('/track-click', async (req, res) => {
    const { token } = req.body;  // Receive token from the frontend

    try {
        const { data, error } = await supabase
            .from('family_members')
            .select('*')
            .eq('token', token);

        if (error) throw error;
        if (data.length === 0) {
            return res.status(404).send({ message: 'User not found.' });
        }

        const user = data[0];
        const updateData = {
            scam_success: (user.scam_success || 0) + 1  // Increment scam_success by 1 or initialize it if not present
        };

        const { error: updateError } = await supabase
            .from('family_members')
            .update(updateData)
            .eq('id', user.id);

        if (updateError) throw updateError;

        res.send({ message: 'Scam success count updated successfully!', count: updateData.scam_success });
    } catch (error) {
        console.error('Error tracking click:', error.message);
        res.status(500).send({ error: error.message });
    }
});

// API endpoint for translating text
app.post('/translate-text', async (req, res) => {
    const { text, targetLanguage } = req.body;
    if (!text || !targetLanguage) {
        return res.status(400).send({ error: "Text or target language not provided" });
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "Translate the following text." },
                { role: "user", content: text }
            ],
            max_tokens: 1024,
            stop: ["\n", "<|endoftext|>"]
        });
        let translatedText = completion.choices[0].message.content;
        res.send({ translatedText });
    } catch (error) {
        console.error('Failed to translate text:', error);
        res.status(500).send({ error: 'Failed to translate text.' });
    }
});

// API endpoint to handle form submissions
app.post('/submit-form', async (req, res) => {
    const {
        fullName, email, phoneNumber, age, gender, relationship, socialMedia,
        occupation, companyName, workEmail, workPhone, salaryRange,
        previousScamExperience, scammedPlatform, scammedAmount, protectionMeasures,
        onlineTransactionFrequency
    } = req.body;

    try {
        const { data, error } = await supabase
            .from('family_members')
            .insert([{
                full_name: fullName,
                email,
                phone_number: phoneNumber,
                age,
                gender,
                relationship,
                social_media: socialMedia,
                occupation,
                company_name: companyName,
                work_email: workEmail,
                work_phone: workPhone,
                salary_range: salaryRange,
                previous_scam_experience: previousScamExperience,
                scammed_platform: scammedPlatform,
                scammed_amount: scammedAmount,
                protection_measures: protectionMeasures,
                online_transaction_frequency: onlineTransactionFrequency
            }]);

        if (error) throw error;
        res.status(200).send({ message: 'Data inserted successfully', data });
    } catch (error) {
        console.error('Error inserting data into Supabase:', error.message);
        res.status(500).send({ error: 'Failed to insert data', message: error.message });
    }
});

// API endpoint to fetch all emails from the database
app.get('/get-all-emails', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('family_members')
            .select('email');

        if (error) {
            console.error('Failed to fetch emails:', error.message);
            return res.status(500).send({ error: 'Failed to retrieve emails from database', details: error.message });
        }

        // Return the list of emails
        res.send(data.map(user => user.email));
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).send({ error: 'Unexpected error occurred', details: error.message });
    }
});


// Root endpoint for basic server response
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
