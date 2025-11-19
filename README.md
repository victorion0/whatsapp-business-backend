# WhatsApp Business API Backend 

A complete **WhatsApp Business Bot** built from scratch using **Node.js + Twilio + Express**, deployed on **LeapCell.io** (100% free tier).

Customers send message → Bot replies automatically 24/7  
No staff needed for common questions → Save time & money!

**LIVE DEMO**: Send "hi" to **+1 (415) 523-8886** (Twilio Sandbox)  
Or test webhook directly:  
https://whatsapp-business-backend-victorion014-66q6npnr.leapcell.dev

## Features
- Auto-reply bot (menu, prices, location, hours, jokes 😂)
- Real-time message handling via Twilio Webhook
- Clean & commented code (perfect for beginners)
- Fully deployed & working 24/7
- One-click Postman testing
- Ready for production upgrade

## Tech Stack
![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Express](https://img.shields.io/badge/Express-4.19-blue)
![Twilio](https://img.shields.io/badge/Twilio-WhatsApp-red)
![LeapCell](https://img.shields.io/badge/Deployed%20on-LeapCell-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

- Node.js + Express
- Twilio WhatsApp API (Sandbox → Production ready)
- LeapCell.io (Free hosting + auto-deploy from GitHub)
- dotenv for secrets

## Quick Start (Clone & Run Locally)

```bash
git clone https://github.com/victorion0/whatsapp-business-backend.git
cd whatsapp-business-backend
npm install

Create .env file:env

TWILIO_ACCOUNT_SID=your_sid_here
TWILIO_AUTH_TOKEN=your_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
PORT=3000

Run:bash

npm run dev

Join sandbox: Send join blue-sky to +1 (415) 523-8886 from your WhatsAppLive Webhook Endpoint

POST https://whatsapp-business-backend-victorion014-66q6npnr.leapcell.dev/webhook

Test with Postman (x-www-form-urlencoded):Key
Value
From
whatsapp:+2349157725542
To
whatsapp:+14155238886
Body
hi / menu / joke


Bot CommandsMessage

Reply
hi / hello
Greeting + menu prompt
menu
Full business menu
1 / price
Price list
2 / location
Shop address + map link
3 / hours
Opening hours
4 / joke
Free laugh 
bye
Sweet goodbye


Deploy Your Own (Free!)Fork this repo

Sign up at leapcell.io
Connect GitHub → Deploy
Add your Twilio secrets in LeapCell → Environment Variables
Set webhook in Twilio Console


Next Level Upgrades

Add MongoDB to save customer chats
Add image/media support
Add order system + Paystack payment
Use official WhatsApp Business API (your own number)

Author
Victor – Full-Stack Developer | WhatsApp Automation Expert
GitHub: @victorion0

