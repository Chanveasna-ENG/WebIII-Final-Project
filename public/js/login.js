document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic client-side validation
  if (!validateForm(email, password)) return;

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include' // This is crucial for cookies
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = '/home.html'; // Redirect to home
    } else {
      alert(data.error || 'Login failed');
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
  }
});

function validateForm(email, password) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d).{8,}$/;
  let isValid = true
  clearErrors();
  if (!emailRegex.test(email)) {
    showError(email, "Please enter a valid email address.");
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
  