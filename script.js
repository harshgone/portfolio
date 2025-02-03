document.getElementById("contactForm").addEventListener("submit", function(event) {
    let valid = true;

    // Name validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email validation
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Message validation
    let message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").innerText = "Message cannot be empty";
        valid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    if (!valid) {
        event.preventDefault();
    }
});
