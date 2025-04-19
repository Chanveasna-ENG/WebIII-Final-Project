
function validateForm() {
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");

  const phone = phoneInput.value.trim();
  const password = passwordInput.value;

  const phoneRegex = /^\d+$/;
  const passwordRegex = /^(?=.*\d).{8,}$/;

  let isValid = true;
  clearErrors();

  if (!phoneRegex.test(phone)) {
    showError(phoneInput, "Phone number must contain digits only.");
    isValid = false;
  }

  if (!passwordRegex.test(password)) {
    showError(passwordInput, "Password must be at least 8 characters long and contain at least one number.");
    isValid = false;
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


  