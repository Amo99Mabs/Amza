const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const recruiterIntro = [
  "Hello, I’m Amza Bot, your guide to Amogelang Mabonela’s portfolio.",
  "Amogelang is an aspiring AI Engineer and Software Developer, with strong experience in sales and customer service.",
  "She works with HTML, CSS, JavaScript, Python, React, and Machine Learning.",
  "Recent work includes the Uzuri Boutique app, polished with recruiter-ready documentation and UI/UX improvements.",
  "Right now, she’s refining her portfolio apps and building a LinkedIn content plan to strengthen her AI engineering brand.",
  "Her short-term goals include showcasing polished recruiter-facing projects and positioning for both AI engineering and customer service roles.",
];

let recruiterStep = 0;

app.post("/chat", (req, res) => {
  const userMessage = req.body.message?.toLowerCase() || "";

  let botReply = "I'm Amza Bot, here to help!";

  if (userMessage.includes("hello")) {
    botReply = recruiterIntro[0];
    recruiterStep = 1;
  } else if (
    userMessage.includes("next") &&
    recruiterStep < recruiterIntro.length
  ) {
    botReply = recruiterIntro[recruiterStep];
    recruiterStep++;
  } else if (userMessage.includes("help")) {
    botReply =
      "Sure! I can tell you about Amogelang’s skills, projects, and goals. Type 'next' to continue.";
  } else if (userMessage.includes("bye")) {
    botReply = "Goodbye! Thanks for visiting Amogelang’s portfolio.";
    recruiterStep = 0;
  } else {
    botReply =
      "Type 'hello' to start Amogelang’s introduction, or 'next' to continue.";
  }
  res.json({ reply: botReply });
});

app.listen(PORT, () => {
  console.log(`Amza Bot is running on port ${PORT}`);
});
