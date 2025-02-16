const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Chat API Route
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    // Replace with your actual AI API URL
    const aiResponse = await axios.post("https://api.openai.com/v1/completions", {
      model: "text-davinci-003",
      prompt: userMessage,
      max_tokens: 100,
    }, {
      headers: {
        "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
        "Content-Type": "application/json",
      },
    });

    res.json({ reply: aiResponse.data.choices[0].text.trim() });
  } catch (error) {
    console.error("AI API Error:", error);
    res.status(500).json({ reply: "Sorry, I couldn't process your request." });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));