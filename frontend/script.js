const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

async function sendMessage() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  const response = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage }),
  });

  const data = await response.json();
  alert("Amza Bot: " + data.reply); // Later replace with popup chat window
  input.value = "";
}

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
