const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Serve frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Knowledge base
const responses = {
  about: "Amogelang Mabonela is an aspiring AI engineer from Johannesburg, South Africa. With a strong background in sales and customer service, Amogelang is now transitioning into tech, driven by a passion for gadgets, innovation, and problem-solving.",

  skills: "Amogelang has experience in sales, client engagement, and customer service, combined with growing expertise in software engineering. Technical skills include Python, JavaScript, React, Express, CSS, and cloud deployment platforms such as Azure, Render, and Netlify. She also works with CRMs like Salesforce, HubSpot, Zendesk, and Zoho.",

  technologies: "Amogelang has used technologies like Node.js, Express, React, REST APIs, and modern frontend styling. She deploys projects on Render and Netlify, integrates cloud services, and focuses on usability, scalability, and clean documentation. Explore her GitHub to see these technologies in action: https://github.com/Amo99Mabs",

  projects: "Amogelang has built several projects: Resolvet (a ticket management system with a neon black-grey-pink theme), DialMetrics (a call productivity dashboard with real-time stats), ProdigySearch (a product search tool with results in Rands), and Amza Bot (an AI chatbot showcasing her portfolio).",

  portfolio: "Check out Amogelang’s portfolio on GitHub: https://github.com/Amo99Mabs. Each project includes professional README files, live demo links, and recruiter-ready documentation.",

  goals: "Amogelang’s short-term goal is to secure a tech role while continuing to build and deploy projects. Her long-term goal is to become an AI engineer this year, documenting her learning journey publicly and sharing progress with authenticity and resilience.",

  career: "Amogelang is actively applying for tech, customer service, and sales-related roles while refining her CV and preparing for interviews. She is committed to transitioning into a full-time tech career and building a strong foundation in AI engineering."
};

// Chat endpoint
app.post('/chat', (req, res) => {
  const msg = req.body.message.toLowerCase();
  let reply = "I'm Amza, Amo’s AI bot. Ask me about Amo or her projects!";

  if (msg.includes("amo")) reply = responses.about;
  if (msg.includes("resolvet")) reply = responses.resolvet;
  if (msg.includes("dialmetrics")) reply = responses.dialmetrics;
  if (msg.includes("prodigysearch")) reply = responses.prodigysearch;
  if (msg.includes("portfolio") || msg.includes("github")) reply = responses.portfolio;
  if (msg.includes("goal") || msg.includes("career")) reply = responses.goals;

  res.json({ reply });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Amza running on port ${PORT}`));
