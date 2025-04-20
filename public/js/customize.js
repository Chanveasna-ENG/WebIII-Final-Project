// Load query params
const params = new URLSearchParams(window.location.search);
document.getElementById('dish-name').textContent = params.get('name');
document.getElementById('dish-price').textContent = `Price: ${params.get('price')}`;
document.getElementById('dish-description').textContent = params.get('description');
document.getElementById('dish-img').src = params.get('img');

function addToCart() {
    const qty = document.getElementById('quantity').value;
    const prefs = document.getElementById('preferences').value || 'None';
    const name = params.get('name');
    const price = params.get('price');

    alert(`🛒 Added to Cart:
Dish: ${name}
Quantity: ${qty}
Preferences: ${prefs}
Price per item: ${price}`);
}

function goHome() {
    window.location.href = 'home.html'; // Change to your actual home page file
}