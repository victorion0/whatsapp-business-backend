// UPDATED index.js - Works with Twilio v5+ (LeapCell uses latest)
const express = require('express');
const bodyParser = require('body-parser');
const { Twilio } = require('twilio'); // NEW WAY
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Fix for LeapCell: Use environment variables directly
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Check if secrets dey before create client
if (!accountSid || !authToken) {
    console.error("TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN missing! Check LeapCell Environment Variables");
    process.exit(1);
}

// NEW WAY to create Twilio client (v5+)
const client = new Twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('WhatsApp Business API Backend dey live! Send message make I reply!');
});

// Webhook route
app.post('/webhook', async (req, res) => {
    const incomingMsg = req.body.Body?.trim().toLowerCase() || '';
    const fromNumber = req.body.From;

    console.log(`Message from ${fromNumber}: ${incomingMsg}`);

    let reply = "I no understand wetin you talk\nType *menu* make I show you wetin I fit do!";

    if (['hi', 'hello', 'hey'].includes(incomingMsg)) {
        reply = `Hello boss!\nWelcome to our WhatsApp Business!\n\nType *menu* to see options`;
    }
    else if (incomingMsg === 'menu') {
        reply = `OUR MENU:\n\n1. Price list\n2. Location\n3. Hours\n4. Joke (free)\n\nJust type the number or word!`;
    }
    else if (incomingMsg.includes('1') || incomingMsg === 'price') {
        reply = `PRICE LIST:\nJollof Rice - ₦1500\nChicken - ₦2000\nSemo + Egusi - ₦1800\nPure bliss`;
    }
    else if (incomingMsg.includes('2') || incomingMsg === 'location') {
        reply = `We dey Lekki Phase 1, beside the big mall.\nGoogle Maps: https://goo.gl/maps/example`;
    }
    else if (incomingMsg.includes('3') || incomingMsg === 'hours') {
        reply = `We open 9AM - 10PM everyday!\nSunday we dey rest small`;
    }
    else if (incomingMsg.includes('4') || incomingMsg === 'joke') {
        reply = `Why programmers like dark mode?\nBecause light attracts bugs!\n\nYou don laugh? Send another joke!`;
    }
    else if (incomingMsg === 'bye') {
        reply = `Bye bye o! Come back anytime! We love you`;
    }

    try {
        await client.messages.create({
            from: process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886',
            to: fromNumber,
            body: reply
        });
        console.log('Reply sent successfully!');
    } catch (error) {
        console.error('Error sending message:', error.message);
    }

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server dey live for port ${port}`);
    console.log(`Webhook URL: https://whatsapp-business-backend-victorion014-66q6npnr.leapcell.dev/webhook`);
});