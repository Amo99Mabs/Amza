const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  let botReply = "I'm Amza Bot, here to help!";
  if (userMessage.toLowerCase().includes("hello")) {{
    botReply = "Hello! How can I assist you today?";
 }  else if (userMessage.toLowerCase().includes("help")) {
    botReply = "Sure! What do you need help with?";
 }  else if (userMessage.toLowerCase().includes("bye")) {
    botReply = "Goodbye! Have a great day!";
    }
    res.json({ reply: botReply });
  });

  app.listen(PORT, () => {
    console.log(`Amza Bot is running on port ${PORT}`);
  });