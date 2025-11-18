// Import all our weapons
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// This one help us read JSON from WhatsApp
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Twilio client ready to fight
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// HOME ROUTE - just to know say server dey alive
app.get('/', (req, res) => {
    res.send('WhatsApp Business API Backend dey live! 🚀 Send message make I reply!');
});

// INCOMING MESSAGE FROM WHATSAPP (This na the main tin!)
app.post('/webhook', (req, res) => {
    const incomingMsg = req.body.Body?.trim().toLowerCase();
    const fromNumber = req.body.From; // Person wey send message
    const toNumber = req.body.To;     // Our Twilio number

    console.log(`Message from ${fromNumber}: ${incomingMsg}`);

    let reply = "I no understand wetin you talk 😭\nType *menu* make I show you wetin I fit do!";

    // Simple auto-reply system (like customer care bot)
    if (incomingMsg === 'hi' || incomingMsg === 'hello' || incomingMsg === 'hey') {
        reply = `Hello boss! 🌟\nWelcome to our WhatsApp Business!\n\nType *menu* to see options`;
    }
    else if (incomingMsg === 'menu') {
        reply = `🍔 OUR MENU:\n\n1. Price list\n2. Location\n3. Hours\n4. Joke (free 😂)\n\nJust type the number or word!`;
    }
    else if (incomingMsg.includes('1') || incomingMsg === 'price') {
        reply = `💰 PRICE LIST:\nJollof Rice - ₦1500\nChicken - ₦2000\nSemo + Egusi - ₦1800\nPure bliss 🤤`;
    }
    else if (incomingMsg.includes('2') || incomingMsg === 'location') {
        reply = `📍 We dey Lekki Phase 1, beside the big mall.\nGoogle Maps: https://goo.gl/maps/example`;
    }
    else if (incomingMsg.includes('3') || incomingMsg === 'hours') {
        reply = `⏰ We open 9AM - 10PM everyday!\nSunday we dey rest small 😴`;
    }
    else if (incomingMsg.includes('4') || incomingMsg === 'joke') {
        reply = `Why programmers like dark mode? 🌙\nBecause light attracts bugs! 🐛\n\nYou don laugh? Send another joke! 😂`;
    }
    else if (incomingMsg === 'bye') {
        reply = `Bye bye o! 👋 Come back anytime! We love you ❤️`;
    }

    // Send reply back to WhatsApp
    client.messages.create({
        from: process.env.TWILIO_WHATSAPP_NUMBER,
        to: fromNumber,
        body: reply
    })
    .then(message => {
        console.log('Reply sent: ' + message.sid);
    })
    .catch(err => {
        console.error('Error sending message:', err);
    });

    // Tell Twilio say we don receive the message
    res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
    console.log(`Server dey run for http://localhost:${port}`);
    console.log(`WebHook URL go be: YOUR_LEAPCELL_URL/webhook`);
    console.log(`Join Twilio sandbox by sending "join blue-sky" to +14155238886`);
});