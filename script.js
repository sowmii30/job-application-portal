// function togglePassword() {
//     var passwordField = document.getElementById("password");
//     var toggleButton = document.getElementById("toggleBtn");

//     if (passwordField.type === "password") {
//         passwordField.type = "text";
//         toggleButton.textContent = "Hide";
//     } else {
//         passwordField.type = "password";
//         toggleButton.textContent = "Show";
//     }
// }
document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const experience = parseInt(document.getElementById('experience').value.trim(), 10);
    const qualification = document.getElementById('qualification').value;
    
    // Validation logic
    if (experience < 2 || qualification !== 'bachelor' && qualification !== 'master' && qualification !== 'phd') {
        alert('Sorry, you do not meet our job requirements.');
    } else {
        alert('Congratulations! Your application has been submitted.');
        // Here you can submit the form data to a backend or perform further actions
        // For simplicity, we'll just reset the form
        document.getElementById('jobApplicationForm').reset();
    }
});


