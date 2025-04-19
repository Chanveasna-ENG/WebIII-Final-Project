function validateRegisterForm() {
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    const phoneRegex = /^\d+$/; 
    const passwordRegex = /^(?=.*\d).{8,}$/; 
  
    if (!phoneRegex.test(phone)) {
      alert("Phone number must contain digits only.");
      return false;
    }
  
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and contain at least one number.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    alert("You have registered successfully.");
    return true;
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