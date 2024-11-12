// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Contact Form Submission with Confirmation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission with a message
    document.getElementById("formResponse").textContent = `Thank you, ${name}! Your message has been sent.`;

    // Clear form fields
    document.getElementById("contactForm").reset();
});
