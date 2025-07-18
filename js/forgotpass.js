document.addEventListener("DOMContentLoaded", function () {
  const forgotForm = document.getElementById("forgotPasswordForm");

  if (!forgotForm) return;

  forgotForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("forgotEmail");
    const error = document.getElementById("forgotEmailError");

    error.style.display = "none";

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    // Check if the email matches the registered email
    if (!registeredUser || registeredUser.email !== email.value.trim()) {
      error.textContent = "This email is not registered.";
      error.style.display = "block";
      return;
    }

    // ✅ Simulated redirect to reset password page
    // You can pass the email via URL if needed
    window.location.href = `reset-password.html?email=${encodeURIComponent(email.value.trim())}`;
  });
});
