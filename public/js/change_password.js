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

  // Validation
  if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
  }

  if (!/(?=.*\d).{8,}/.test(newPassword)) {
      alert('Password must be 8+ chars with at least 1 number');
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