
function validateResetForm() {
  const phoneInput = document.getElementById("phone");
  const newPasswordInput = document.getElementById("new-password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const phone = phoneInput.value.trim();
  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  const phoneRegex = /^\d+$/;
  const passwordRegex = /^(?=.*\d).{8,}$/;

  let isValid = true;
  clearErrors();

  if (!phoneRegex.test(phone)) {
    showError(phoneInput, "Phone number must contain digits only.");
    isValid = false;
  }

  if (!passwordRegex.test(newPassword)) {
    showError(newPasswordInput, "New password must be at least 8 characters long and contain at least one number.");
    isValid = false;
  }

  if (newPassword !== confirmPassword) {
    showError(confirmPasswordInput, "Passwords do not match.");
    isValid = false;
  }

  if (isValid) {
    alert("Password has been successfully reset.");
  }

  return isValid;
}

function showError(input, message) {
  const error = document.createElement("span");
  error.className = "error-message";
  error.style.color = "red";
  error.style.fontSize = "0.9em";
  error.innerText = message;
  input.parentNode.insertBefore(error, input.nextSibling);
  input.style.borderColor = "red";
}

function clearErrors() {
  const errors = document.querySelectorAll(".error-message");
  errors.forEach(error => error.remove());
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => input.style.borderColor = "");
}

