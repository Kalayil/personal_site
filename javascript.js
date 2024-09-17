// JavaScript to handle form submission and redirection

// Select the form and submit button
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

// Add an event listener for form submission
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission behavior

        submitButton.disabled = true; // Disable the submit button to prevent multiple submissions

        // Redirect to the success page
        window.location.href = window.location.origin + '/personal_site/success.html'; // Corrected path
    });

}

// Handle redirection logic on success.html (optional, if needed)
if (window.location.pathname === '/personal_site/success.html') {
    setTimeout(() => {
        window.location.href = window.location.origin; // Redirect back to the homepage after 5 seconds
    }, 5000); // 5 seconds delay
}

