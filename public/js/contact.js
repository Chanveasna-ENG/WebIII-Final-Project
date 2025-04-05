
// Get modal elements
const popupBox = document.getElementById('popupBox');
const popupMessage = document.getElementById('popupMessage');
const closePopup = document.getElementById('closePopup');

// Function to show the pop-up box
function showPopup(message) {
    popupMessage.textContent = message;
    popupBox.style.display = 'flex';
}

// Event listener to close the pop-up
closePopup.addEventListener('click', () => {
    popupBox.style.display = 'none';
});

// Function to check if time is within allowed operating hours
function isWithinOperatingHours(date, time) {
    const day = new Date(date).getDay(); // 0 = Sunday, ..., 6 = Saturday
    if (!time) return false; // Prevent error on missing time input

    const [hours, minutes] = time.split(':').map(Number);
    const bookingTime = hours * 60 + minutes; // Convert time to minutes

    // Define operating hours in minutes
    const weekdaysStart = 6 * 60 + 30; // 6:30 AM
    const weekdaysEnd = 21 * 60 + 30;  // 9:30 PM
    const weekendsStart = 7 * 60 + 30; // 7:30 AM
    const weekendsEnd = 22 * 60 + 30;  // 10:30 PM

    // Check hours based on day
    if (day >= 1 && day <= 5) {
        return bookingTime >= weekdaysStart && bookingTime <= weekdaysEnd;
    } else {
        return bookingTime >= weekendsStart && bookingTime <= weekendsEnd;
    }
}

// Function to check if booking date and time are valid
function isDateAndTimeValid(date, time) {
    const currentTime = new Date();
    const selectedDate = new Date(date);

    // Create today's midnight time for proper comparison
    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0);

    if (selectedDate < todayMidnight) {
        return { valid: false, reason: 'pastDate' };
    }

    // Handle today’s date and time validation
    if (selectedDate.toDateString() === currentTime.toDateString()) {
        const [selectedHours, selectedMinutes] = time.split(':').map(Number);
        const selectedTime = new Date();
        selectedTime.setHours(selectedHours, selectedMinutes, 0, 0);

        if (selectedTime <= currentTime) {
            return { valid: false, reason: 'pastTime' };
        }
    }

    return { valid: true };
}

// Booking Form Validation
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (!name || !phone || !date || !time || !guests) {
        showPopup('Please fill out all fields in the Booking Form.');
        return;
    }

    // Validate operating hours
    if (!isWithinOperatingHours(date, time)) {
        showPopup('Sorry 😕, our restaurant operates:\n' +
            'Mon-Fri: 6:30 AM - 9:30 PM\n' +
            'Sat-Sun: 7:30 AM - 10:30 PM.\nPlease choose a valid time.');
        return;
    }

    // Validate date and time
    const dateAndTimeCheck = isDateAndTimeValid(date, time);
    if (!dateAndTimeCheck.valid) {
        if (dateAndTimeCheck.reason === 'pastDate') {
            showPopup('Sorry 😕, you cannot book a table for a past date. Please choose a future date.');
        } else if (dateAndTimeCheck.reason === 'pastTime') {
            showPopup('Sorry 😕, the selected time has already passed today. Please choose a valid time.');
        }
        return;
    }

    // Successful booking
    showPopup(`Thank you 🙏, ${name}! Your table for ${guests} guests has been booked on ${date} at ${time}.`);
    this.reset();
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        showPopup('Please fill out all fields in the Contact Form.');
        return;
    }

    showPopup(`Thank you 🙏, ${name}! Your message has been sent.`);
    this.reset();
});

