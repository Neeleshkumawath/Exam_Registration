function validateEmail(email) {
    // Regular expression for a valid email address
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    var email = document.getElementById("email").value;
    var problem = document.getElementById("problem").value;

    var emailError = document.getElementById("emailError");
    var problemError = document.getElementById("problemError");

    // Clear previous error messages
    emailError.textContent = "";
    problemError.textContent = "";

    if (email === "") {
        emailError.textContent = "Please fill in the email.";
    } else if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
    }

    if (problem === "") {
        problemError.textContent = "Please fill in the problem description.";
    }

    if (email === "" || problem === "" || !validateEmail(email)) {
        // If there are errors, do not submit the form
        return;
    }

    // Hide the form
    document.getElementById("supportForm").style.display = "none";

    // Show the success message
    var successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");
}
