document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successBox = document.getElementById("form-success");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset error messages
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorMessage.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    if (!name) {
      errorName.textContent = "Please enter your name.";
      isValid = false;
    }

    if (!email) {
      errorEmail.textContent = "Please enter your email.";
      isValid = false;
    }

    if (!message) {
      errorMessage.textContent = "Please enter your message.";
      isValid = false;
    }

    if (isValid) {
      successBox.classList.remove("d-none");
      form.reset(); // Clear the form
    } else {
      successBox.classList.add("d-none");
    }
  });
});
