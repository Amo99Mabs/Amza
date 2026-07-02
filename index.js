function showChatBox() {
  document.getElementById('chatBox').style.display = 'block';
}
 
// Welcome message
window.onload = function() {
  const chatBox = document.getElementById('chatBox');
  chatBox.style.display = 'block'; 
  chatBox.innerHTML = `<p><strong>Amza:</strong> Hi, I'm Amza 👋 Ask me about Amo or her projects!</p>`;
  
  const input = document.getElementById('userInput');
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // stop form submission / page reload
      sendMessage();
    }
  });
};
 
async function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value;
  if (!message) return;

  showChatBox();

  const chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += `<div class="userMsg">${message}</div>`;

try {
  const res = await fetch('/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  const data = await res.json();

  chatBox.innerHTML += `<div class="botMsg"><strong>Amza:</strong> ${data.reply}</div>`;
  } catch (err) {
    chatBox.innerHTML += `<div class="botMsg"><strong>Amza:</strong> Sorry, something went wrong.</div>`;
  }

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}
