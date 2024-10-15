// document.getElementById('get-started').addEventListener('click', function() {
//     document.querySelector('.container').classList.add('hidden');
//     document.getElementById('user-interface').classList.remove('hidden');
// });

// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('user-name').value;
//     const email = document.getElementById('contact-email').value;
    
//     // Set user initial and user info
//     const userInitial = name.charAt(0).toUpperCase();
//     document.getElementById('user-initial').innerText = userInitial;

//     // Store user info
//     document.getElementById('user-fullname').innerText = name;
//     document.getElementById('user-email').innerText = email;

//     // Hide user interface and show dashboard
//     document.getElementById('user-interface').classList.add('hidden');
//     document.getElementById('dashboard').classList.remove('hidden');
// });

// // Change avatar functionality
// document.getElementById('change-avatar').addEventListener('click', function() {
//     const input = document.createElement('input');
//     input.type = 'file';
//     input.accept = 'image/*';
//     input.onchange = e => {
//         const reader = new FileReader();
//         reader.readAsDataURL(e.target.files[0]);
//         reader.onload = readerEvent => {
//             const imageSrc = readerEvent.target.result;
//             document.getElementById('user-avatar').src = imageSrc; // Set avatar image
//         }
//     }
//     input.click();
// });

// // Handle theme toggle (optional)
// document.getElementById('toggle-theme').addEventListener('click', function() {
//     document.body.classList.toggle('dark-theme');
// });






// document.getElementById('search-button').addEventListener('click', function() {
//     const query = document.getElementById('search-query').value;
//     if (query) {
//         // Show user's query in chat log
//         const userMessage = document.createElement('div');
//         userMessage.innerText = `You: ${query}`;
//         document.getElementById('chat-log').appendChild(userMessage);

//         // Simulate getting a response from ChatGPT (Replace with actual API call in real implementation)
//         getChatGPTResponse(query);
        
//         // Clear the search bar
//         document.getElementById('search-query').value = '';
//     }
// });

// // Simulate a function that gets a response from ChatGPT
// function getChatGPTResponse(query) {
//     // Simulate response delay
//     setTimeout(() => {
//         const botMessage = document.createElement('div');
//         botMessage.innerText = `Bot: This is a response to your query "${query}".`;
//         document.getElementById('chat-log').appendChild(botMessage);
        
//         // Scroll to the bottom of the chat log
//         const chatLog = document.getElementById('chat-log');
//         chatLog.scrollTop = chatLog.scrollHeight;
//     }, 1000);
// }


// // Display user's name on chat page
// window.onload = function() {
//     const userName = localStorage.getItem('userName');
//     const userEmail = localStorage.getItem('userEmail');

//     if (userName) {
//         const welcomeMessage = document.createElement('div');
//         welcomeMessage.innerText = `Welcome, ${userName}!`;
//         document.body.prepend(welcomeMessage); // Welcome message ko body ke upar display karna
//     }
// };






// // User login form submission
// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Form ke default behavior ko roke
//     const name = document.getElementById('user-name').value; // User ka naam
//     const email = document.getElementById('contact-email').value; // User ka email
//     const about = document.getElementById('about').value; // User ka about section

//     // Local storage mein user info store karna
//     localStorage.setItem('userName', name);
//     localStorage.setItem('userEmail', email);
//     localStorage.setItem('userAbout', about); // User ka about section store karna

//     // Redirect to chat.html
//     window.location.href = 'chat.html'; // User ko chat page par redirect karna
// });








// Show user interface on clicking the "Get Started" button
document.getElementById('get-started').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('user-interface').classList.remove('hidden');
});

// Handle user login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Form ke default behavior ko roke
    const name = document.getElementById('user-name').value; // User ka naam
    const email = document.getElementById('contact-email').value; // User ka email

    // Store user info in local storage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);

    // Set user initial and show it on the dashboard
    const userInitial = name.charAt(0).toUpperCase();
    document.getElementById('user-initial').innerText = userInitial;

    // Display user info on the dashboard
    document.getElementById('user-fullname').innerText = name;
    document.getElementById('user-email').innerText = email;

    // Hide user interface and show dashboard
    document.getElementById('user-interface').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
});

// Change avatar functionality
document.getElementById('change-avatar').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = readerEvent => {
            const imageSrc = readerEvent.target.result;
            document.getElementById('user-avatar').src = imageSrc; // Set avatar image
        }
    }
    input.click();
});

// Handle theme toggle (optional)
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Handle search button click in chat page
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-query').value;
    if (query) {
        // Show user's query in chat log
        const userMessage = document.createElement('div');
        userMessage.innerText = `You: ${query}`;
        document.getElementById('chat-log').appendChild(userMessage);

        // Simulate getting a response from ChatGPT
        getChatGPTResponse(query);
        
        // Clear the search bar
        document.getElementById('search-query').value = '';
    }
});

// Simulate a function that gets a response from ChatGPT
function getChatGPTResponse(query) {
    // Simulate response delay
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.innerText = `Bot: This is a response to your query "${query}".`;
        document.getElementById('chat-log').appendChild(botMessage);
        
        // Scroll to the bottom of the chat log
        const chatLog = document.getElementById('chat-log');
        chatLog.scrollTop = chatLog.scrollHeight;
    }, 1000);
}

// Display user's name on chat page
window.onload = function() {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    if (userName) {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.innerText = `Welcome, ${userName}!`;
        document.body.prepend(welcomeMessage); // Welcome message ko body ke upar display karna
    }
};



// User login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Form ke default behavior ko roke
    const name = document.getElementById('user-name').value; // User ka naam
    const email = document.getElementById('contact-email').value; // User ka email
    const about = document.getElementById('about').value; // User ka about section

    // Local storage mein user info store karna
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userAbout', about); // User ka about section store karna

    // Redirect to chat.html
    window.location.href = 'chat.html'; // User ko chat page par redirect karna
});
