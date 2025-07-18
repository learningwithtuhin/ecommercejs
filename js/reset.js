document.addEventListener("DOMContentLoaded", function () {
  const resetForm = document.getElementById("resetPasswordForm");

  if (!resetForm) return;

  resetForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newPassword = document.getElementById("newPassword");
    const confirmNewPassword = document.getElementById("confirmNewPassword");
    const newPasswordError = document.getElementById("newPasswordError");
    const confirmNewPasswordError = document.getElementById("confirmNewPasswordError");

    let isValid = true;

    // Reset errors
    newPasswordError.style.display = "none";
    confirmNewPasswordError.style.display = "none";

    // Password strength check
    if (newPassword.value.trim().length < 6) {
      newPasswordError.style.display = "block";
      isValid = false;
    }

    // Confirm password match
    if (newPassword.value.trim() !== confirmNewPassword.value.trim()) {
      confirmNewPasswordError.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (registeredUser) {
        registeredUser.password = newPassword.value.trim();
        localStorage.setItem("registeredUser", JSON.stringify(registeredUser));

        // ✅ Show Toast
        const toastElement = document.getElementById("resetToast");
        const toast = new bootstrap.Toast(toastElement);
        toast.show();

        // Redirect to login after a short delay
        setTimeout(() => {
          window.location.href = "login.html";
        }, 2500);
      } else {
        alert("User not found. Please register first.");
        window.location.href = "register.html";
      }
    }
  });
});
