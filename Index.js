const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve static files

app.post("/chat", (req, res) => {
  const userMessage = req.body.message?.toLowerCase() || "";
  let reply = "I'm not sure how to respond to that.";

  if (userMessage.includes("sad") || userMessage.includes("depressed")) {
    reply = "I'm sorry you're feeling sad 💙. Try writing down your thoughts or going for a walk — it helps!";
  } else if (userMessage.includes("happy") || userMessage.includes("great")) {
    reply = "That's awesome! 😄 Wanna hear a joke? Why don't skeletons fight each other? They don't have the guts!";
  } else if (userMessage.includes("stressed")) {
    reply = "Take a deep breath 😌 — Inhale for 4 sec, hold for 7, exhale for 8. You’ve got this!";
  } else if (userMessage.includes("thank")) {
    reply = "You're most welcome 😊 I'm always here for you!";
  } else if (
    userMessage.includes("hello") ||
    userMessage.includes("hi") ||
    userMessage.includes("hey")
  ) {
    reply = "Hello! I'm ChillMate 🤖 How are you feeling today?";
  }

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`✅ ChillMate server running at http://localhost:${PORT}`);
});
