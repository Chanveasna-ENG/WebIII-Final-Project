document.addEventListener('DOMContentLoaded', async () => {
    let cart = await getCart();
    renderCart(cart);

    document.getElementById('checkout-btn').addEventListener('click', async () => {
        try {
            const response = await fetch('/api/auth/check', { credentials: 'include' });
            
            if (!response.ok) {
                window.location.href = '/login.html?redirect=cart';
                return;
            }

            const orderData = {
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: parseFloat(item.price.replace(/[^0-9.]/g, '')),
                    quantity: item.quantity,
                    preferences: item.preferences
                })),
                total: calculateTotal(cart)
            };

            const orderResponse = await fetch('/api/orders/submit', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                },
                body: JSON.stringify(orderData)
            });

            if (orderResponse.ok) {
                clearCart();
                alert('Order placed successfully! Check your email for confirmation.');
                window.location.href = '/home.html';
            }
        } catch (error) {
            alert('Order failed: ' + error.message);
        }
    });
});

// Cart helper functions
async function getCart() {
    try {
        const response = await fetch('/api/orders/cart', { credentials: 'include' });
        return await response.json();
    } catch {
        return [];
    }
}

function renderCart(cart) {
    const container = document.getElementById('cart-items');
    container.innerHTML = '';
    
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.price} x ${item.quantity}</p>
                ${item.preferences ? `<p>Notes: ${item.preferences}</p>` : ''}
            </div>
            <div class="item-controls">
                <input type="number" min="1" value="${item.quantity}" 
                       data-index="${index}" class="quantity-input">
                <button data-index="${index}" class="remove-btn">×</button>
            </div>
        `;
        container.appendChild(itemDiv);
    });

    // Add event listeners
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateQuantity);
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', removeItem);
    });

    updateTotal(cart);
}

async function updateQuantity(e) {
    const index = e.target.dataset.index;
    const cart = await getCart();
    cart[index].quantity = parseInt(e.target.value);
    await saveCart(cart);
    renderCart(cart);
}

async function removeItem(e) {
    const index = e.target.dataset.index;
    const cart = await getCart();
    cart.splice(index, 1);
    await saveCart(cart);
    renderCart(cart);
}

async function saveCart(cart) {
    await fetch('/api/orders/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart })
    });
}

function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return total + (price * item.quantity);
    }, 0);
}

function updateTotal(cart) {
    document.getElementById('cart-total').textContent = 
        `${calculateTotal(cart).toLocaleString()}៛`;
}

function getToken() {
    return document.cookie.split('; ')
        .find(row => row.startsWith('jwt='))
        ?.split('=')[1];
}

function clearCart() {
    document.cookie = 'cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}