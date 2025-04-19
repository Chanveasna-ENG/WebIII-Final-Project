
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".reservation-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      const name = document.getElementById("name").value;
      alert(`Thank you, ${name}! Your reservation has been submitted.`);
      form.reset(); // Optional: reset the form after submission
    }
  });

  function validateForm() {
    let isValid = true;
    const phonePattern = /^\+?\d{1,4}[\s-]?\d{2,4}[\s-]?\d{3}[\s-]?\d{3}$/;
    const phone = document.getElementById("phone");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const today = new Date().toISOString().split("T")[0];

    clearErrors();

    // Phone validation
    if (!phonePattern.test(phone.value.trim())) {
      showError(phone, "Please enter a valid phone number.");
      isValid = false;
    }

    // Date validation
    if (date.value < today) {
      showError(date, "Reservation date cannot be in the past.");
      isValid = false;
    }

    // Time validation
    if (!time.value) {
      showError(time, "Please select a valid time.");
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
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach(input => input.style.borderColor = "");
  }
});

