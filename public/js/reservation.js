document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".reservation-form");

  form.addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log("Form submitted"); // Debug log

      if (!validateForm()) {
          console.log("Validation failed");
          return;
      }

      const formData = {
          name: document.getElementById("name").value.trim(),
          phone: document.getElementById("phone").value.trim(),
          date: document.getElementById("date").value,
          time: document.getElementById("time").value,
          people: parseInt(document.getElementById("people").value),
          table: document.getElementById("table").value,
          requests: document.getElementById("requests").value.trim()
      };

      try {
          console.log("Sending request:", formData); // Debug log
          const response = await fetch('/api/reservation', {
              method: 'POST',
              headers: { 
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData)
          });

          const data = await response.json();
          console.log("Response received:", data); // Debug log

          if (!response.ok) {
              throw new Error(data.error || 'Reservation failed');
          }

          alert(`Reservation #${data.reservationId} confirmed!\nCheck your email for details.`);
          form.reset();
          
      } catch (error) {
          console.error("Submission error:", error);
          alert(error.message || 'Could not submit reservation. Please try again.');
      }
  });

  // Validation functions
  function validateForm() {
      let isValid = true;
      const phonePattern = /^\+?[0-9\s-]{9,15}$/;
      const phone = document.getElementById("phone");
      const date = document.getElementById("date");
      const time = document.getElementById("time");
      const today = new Date().toISOString().split('T')[0];

      clearErrors();

      // Phone validation
      if (!phonePattern.test(phone.value.trim())) {
          showError(phone, "Please enter a valid phone number (e.g., +855 12 345 678)");
          isValid = false;
      }

      // Date validation
      if (date.value < today) {
          showError(date, "Reservation date cannot be in the past");
          isValid = false;
      }

      // Time validation
      if (!time.value) {
          showError(time, "Please select a valid time");
          isValid = false;
      }

      return isValid;
  }

  function showError(input, message) {
      const error = document.createElement("span");
      error.className = "error-message";
      error.style.color = "red";
      error.style.fontSize = "0.9em";
      error.textContent = message;
      input.parentNode.insertBefore(error, input.nextSibling);
      input.style.borderColor = "red";
  }

  function clearErrors() {
      document.querySelectorAll(".error-message").forEach(el => el.remove());
      document.querySelectorAll("input, select, textarea").forEach(el => {
          el.style.borderColor = "";
      });
  }
});