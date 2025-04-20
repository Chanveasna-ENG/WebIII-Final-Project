document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields');
        return;
    }

    try {
        console.log('Sending contact form data:', { name, email, message });
        // Validate email format
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Message sent successfully! We will get back to you soon!');
            document.getElementById('contactForm').reset();
        } else {
            alert(data.error || 'Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});