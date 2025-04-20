async function proceedToCheckout() {
    try {
        // Check authentication
        const authCheck = await fetch('/api/auth/check');
        if (!authCheck.ok) {
            if (confirm('You need to login to continue. Go to login page?')) {
                window.location.href = '/login.html';
            }
            return;
        }

        // Get final cart
        const cartResponse = await fetch('/api/orders/cart');
        const cart = await cartResponse.json();

        // Calculate total
        const total = cart.reduce((sum, item) =>
            sum + (parsePrice(item.price) * item.quantity, 0), 0);

        // Submit order
        const orderResponse = await fetch('/api/orders/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ items: cart, total })
        });

        if (orderResponse.ok) {
            alert('Order placed successfully! Delivery in ~30 minutes');
            localStorage.removeItem('cart');
            window.location.reload();
        }
    } catch (error) {
        console.error('Checkout error:', error);
    }
}