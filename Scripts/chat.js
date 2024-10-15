document.addEventListener("DOMContentLoaded", () => {
    const chatLog = document.getElementById("chat-log");
    const sendButton = document.getElementById("send-button");
    const searchQuery = document.getElementById("search-query");

    sendButton.addEventListener("click", () => {
        sendMessage();
    });

    searchQuery.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = searchQuery.value.trim();
        if (message !== "") {
            addMessage("user", message);
            searchQuery.value = "";

            // // Simulate bot response
            // setTimeout(() => {
            //     addMessage("bot", "I'm here to help! What information do you need?");
            // }, 1000);
        }
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);

        // Scroll to the bottom
        chatLog.scrollTop = chatLog.scrollHeight;
    }
});

