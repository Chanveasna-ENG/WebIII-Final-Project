const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

// Redirect to forgot-password.html if no token is present
if (!token) {
    window.location.href = '/forgot_password.html';
}

document.getElementById('resetForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  const passwordRegex = /^(?=.*\d).{8,}$/;
  let isValid = true;
  clearErrors();

  // Validation  
  if (!passwordRegex.test(newPassword)) {
    showError(newPasswordInput, "New password must be at least 8 characters long and contain at least one number.");
    isValid = false;
  }  
  if (newPassword !== confirmPassword) {
    showError(confirmPasswordInput, "Passwords do not match.");
    isValid = false;
  }
  if (!isValid) {
    return;
  }

  try {
      const endpoint = `/api/auth/reset-password/${token}`

      const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(token ? { password: newPassword } : { 
              email: document.getElementById('email').value 
          })
      });

      const data = await response.json();
      alert(data.message || 'Password reset initiated');
      if (token) window.location.href = '/login.html';
  } catch (error) {
      alert(error.message || 'Reset failed');
  }
});
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