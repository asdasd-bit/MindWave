const chatBox = document.getElementById("chat");
const input = document.getElementById("userInput");

function appendMessage(sender, message) {
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("You", userMessage);
  input.value = "";

  fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userMessage })
  })
    .then((res) => res.json())
    .then((data) => {
      appendMessage("ChillMate", data.reply);
    })
    .catch((err) => {
      appendMessage("ChillMate", "⚠️ Sorry, something went wrong.");
      console.error(err);
    });
}

// Listen for button click
document.querySelector("button").addEventListener("click", sendMessage);

// Listen for Enter key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
