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
  