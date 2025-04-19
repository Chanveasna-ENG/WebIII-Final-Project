function validateResetForm() {
    const phone = document.getElementById("phone").value.trim();
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    const phoneRegex = /^\d+$/;
    const passwordRegex = /^(?=.*\d).{8,}$/;
  
    if (!phoneRegex.test(phone)) {
      alert("Phone number must contain digits only.");
      return false;
    }
  
    if (!passwordRegex.test(newPassword)) {
      alert("New password must be at least 8 characters long and contain at least one number.");
      return false;
    }
  
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    alert("Password has been successfully reset.");
    return true;
  }
  