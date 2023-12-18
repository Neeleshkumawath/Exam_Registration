function submitForm() {

    // Clear previous error messages
    clearErrorMessages();
    // Get form inputs
    var name = document.getElementById("name").value;
    var rollNo = document.getElementById("rollNo").value;
    var mobileNo = document.getElementById("mobileNo").value;

     // Check if required fields are filled
     if (!name) {
        displayErrorMessage("nameError", "Please enter the Name.");
        return;
    }

    if (!rollNo) {
        displayErrorMessage("rollNoError", "Please enter your Roll No.");
        return;
    }

    if (!mobileNo) {
        displayErrorMessage("mobileNoError", "Please enter your Mobile No.");
        return;
    }

    // Get selected subjects
    var selectedSubjects = [];
    var checkboxes = document.getElementsByName("subject");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedSubjects.push(checkbox.value);
        }
    });

    // Create the message to display in the dialog box
    var message = "Name: " + name + "\n" +
                  "Roll No: " + rollNo + "\n" +
                  "Mobile No: " + mobileNo + "\n" +
                  "Selected Subjects: " + selectedSubjects.join(", ");

    // Display the confirmation dialog box if the form is valid
    if (document.getElementById("registrationForm").checkValidity()) {
        var isConfirmed = window.confirm(message);

        // Check if the user clicked OK
        if (isConfirmed) {
            // Reset the form values
            document.getElementById("registrationForm").reset();
            // Display a centered message
            document.body.innerHTML = '<div class="centered-message"><h2>The form is submitted</h2></div>';
        } else {
            // User clicked Cancel, do nothing or reset the form
            document.getElementById("output").innerHTML = "Form not submitted!";
            // You can add further actions as needed
        }
    }
}

function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrorMessages() {
    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function (element) {
        element.textContent = "";
    });
}