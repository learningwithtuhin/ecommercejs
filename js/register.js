document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  if (!registerForm) return;

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("registerEmail");
    const password = document.getElementById("registerPassword");
    const confirmPassword = document.getElementById("confirmPassword");

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");

    let isValid = true;

    // Reset error states
    emailError.style.display = "none";
    passwordError.style.display = "none";
    confirmError.style.display = "none";

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "" || !emailPattern.test(email.value)) {
      emailError.textContent = "Please enter a valid email.";
      emailError.style.display = "block";
      isValid = false;
    }

    // Password validation
    if (password.value.trim() === "" || password.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      passwordError.style.display = "block";
      isValid = false;
    }

    // Confirm password validation
    if (confirmPassword.value !== password.value) {
      confirmError.textContent = "Passwords do not match.";
      confirmError.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      // Store user in localStorage
      const userData = {
        email: email.value.trim(),
        password: password.value.trim()
      };

      localStorage.setItem("registeredUser", JSON.stringify(userData));

      // Show toast
      const toastElement = document.getElementById("registerToast");
      const toast = new bootstrap.Toast(toastElement);
      toast.show();

      // Redirect after delay
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2500);
    }
  });
});
