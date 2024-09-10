document.addEventListener('DOMContentLoaded', () => {
    // Draggable Windows
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => {
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        const header = window.querySelector('.window-header');
        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - window.getBoundingClientRect().left;
            offsetY = e.clientY - window.getBoundingClientRect().top;
            window.style.zIndex = 1000;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                window.style.left = `${e.clientX - offsetX}px`;
                window.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    });

    // Close button functionality
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const window = e.target.closest('.window');
            window.style.display = 'none';
        });
    });

    // Auto-typing effect for Lain chatbox
    const chatbox = document.getElementById('chatbox-text');
    const messages = [
        "Connection Status: Wired",
        "User: Johnny Nguyen",
        "AI Research: Exploring Ethics in AI",
        "Machine Learning Project: AI Identity",
        "Connected to Lain...",
        "What is reality? How do we define it?",
        "Lain: I know everything.",
        "You are here because you seek the Wired."
    ];

    let messageIndex = 0;
    let charIndex = 0;

    function typeMessage() {
        if (charIndex < messages[messageIndex].length) {
            chatbox.innerHTML += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 50); // Adjust typing speed here
        } else {
            charIndex = 0;
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(() => {
                chatbox.innerHTML = ''; // Clear chatbox before typing the next message
                typeMessage();
            }, 2000); // Pause between messages
        }
    }

    typeMessage(); // Start the typing effect
});
