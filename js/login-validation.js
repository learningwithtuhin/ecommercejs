document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let valid = true;

    // Reset error messages
    emailError.style.display = "none";
    passwordError.style.display = "none";

    // Email validation
    if (email.value.trim() === "") {
      emailError.textContent = "Please enter your email.";
      emailError.style.display = "block";
      valid = false;
    }

    // Password validation
    if (password.value.trim() === "") {
      passwordError.textContent = "Please enter your password.";
      passwordError.style.display = "block";
      valid = false;
    }

    if (valid) {
      const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (!registeredUser) {
        passwordError.textContent = "Please register first to login.";
        passwordError.style.display = "block";
        return;
      }

      const enteredEmail = email.value.trim();
      const enteredPassword = password.value.trim();

      // Check if email matches registered email
      if (enteredEmail !== registeredUser.email) {
        passwordError.textContent = "No account found with this email. Please register.";
        passwordError.style.display = "block";
        return;
      }

      // Email matched but password didn't
      if (enteredPassword !== registeredUser.password) {
        passwordError.textContent = "Invalid password. Please try again.";
        passwordError.style.display = "block";
        return;
      }

      // Login success
      localStorage.setItem("user", JSON.stringify({ email: enteredEmail }));
      window.location.href = "index.html";
    }
  });
});
