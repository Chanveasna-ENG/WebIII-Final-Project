function validateForm() {
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
  
    const phoneRegex = /^\d+$/; // only digits
    const passwordRegex = /^(?=.*\d).{8,}$/; // min 8 characters, at least one number
  
    if (!phoneRegex.test(phone)) {
      alert("Phone number must contain digits only.");
      return false;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and contain at least one number.");
      return false;
    }
  
    return true;
  }
  