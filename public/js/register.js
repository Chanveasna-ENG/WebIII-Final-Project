
function validateRegisterForm() {
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const phone = phoneInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  const phoneRegex = /^\d+$/;
  const passwordRegex = /^(?=.*\d).{8,}$/;

  let isValid = true;
  clearErrors();

  // Validate phone number
  if (!phoneRegex.test(phone)) {
    showError(phoneInput, "Phone number must contain digits only.");
    isValid = false;
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    showError(passwordInput, "Password must be at least 8 characters long and contain at least one number.");
    isValid = false;
  }

  // Check password match
  if (password !== confirmPassword) {
    showError(confirmPasswordInput, "Passwords do not match.");
    isValid = false;
  }

  if (isValid) {
    alert("You have registered successfully.");
    return true;
  }
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

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!validateRegisterForm())
    return false;

  const formData = {
    fullname: document.getElementById('fullname').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    password: document.getElementById('password').value,
    confirmPassword: document.getElementById('confirm-password').value
  };

  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok) {
      alert('Registration successful! Please login.');
      window.location.href = '/login.html';
    } else {
      alert(data.error || 'Registration failed');
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
  }
});