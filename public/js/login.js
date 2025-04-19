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

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters long and contain at least one number");
    return false;
  }

  return true;
}