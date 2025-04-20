async function getCart() {
    const response = await fetch('/api/orders/cart');
    return await response.json();
}

async function saveCart(cart) {
    await fetch('/api/orders/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart })
    });
}

function createMealSection(title, dishes) {
    const section = document.createElement('div');
    section.classList.add('menu-section');

    const heading = document.createElement('h2');
    heading.textContent = title;
    section.appendChild(heading);

    const dishList = document.createElement('div');
    dishList.classList.add('dish-list');

    dishes.forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');

        const img = document.createElement('img');
        img.src = dish.img;
        img.alt = dish.alt;

        const details = document.createElement('div');
        details.classList.add('dish-details');

        const name = document.createElement('h3');
        name.textContent = dish.name;

        const price = document.createElement('p');
        price.innerHTML = `<strong>Price:</strong> ${dish.price}`;

        const desc = document.createElement('p');
        desc.textContent = dish.description;

        // Existing inputs & confirm button (optional: you can keep or remove this part)

        // New "+" button to go to additional customization page
        const plusBtn = document.createElement('button');
        plusBtn.textContent = 'Order';
        plusBtn.classList.add('customize-btn');
        // plusBtn.addEventListener('click', () => {
        //     // Send dish info via URL parameters
        //     const params = new URLSearchParams({
        //         name: dish.name,
        //         img: dish.img,
        //         price: dish.price,
        //         description: dish.description
        //     });
        //     window.location.href = `customize.html?${params.toString()}`;
        // });
        plusBtn.addEventListener('click', () => showCustomizeModal(dish));

        // Append elements
        details.appendChild(name);
        details.appendChild(price);
        details.appendChild(desc);
        details.appendChild(plusBtn); // new + button added here

        dishDiv.appendChild(img);
        dishDiv.appendChild(details);
        dishList.appendChild(dishDiv);
    });

    section.appendChild(dishList);
    return section;
}

async function displayMenu() {
    try {
        const response = await fetch('/api/menu');
        if (!response.ok) throw new Error('Menu loading failed');
        
        const { categories } = await response.json();
        const menuContainer = document.getElementById('menu');

        categories.forEach(category => {
            const section = createMealSection(category.name, category.dishes);
            menuContainer.appendChild(section);
        });

    } catch (error) {
        console.error('Error loading menu:', error);
        alert('Failed to load menu. Please try again later.');
    }
}

function showCustomizeModal(dish) {
    const modal = document.createElement('div');
    modal.className = 'customize-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img src="${dish.img}" alt="${dish.name}">
            <h2>${dish.name}</h2>
            <p>${dish.price}</p>
            
            <div class="customize-form">
                <label>Quantity:
                    <input type="number" min="1" value="1" id="modal-qty">
                </label>
                
                <label>Special Requests:
                    <textarea id="modal-notes"></textarea>
                </label>
                
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;

    modal.querySelector('.close-btn').addEventListener('click', () => 
        document.body.removeChild(modal));
        
    modal.querySelector('.add-to-cart').addEventListener('click', async () => {
        const cartItem = {
            ...dish,
            quantity: parseInt(modal.querySelector('#modal-qty').value),
            preferences: modal.querySelector('#modal-notes').value
        };
        
        const currentCart = await getCart();
        await saveCart([...currentCart, cartItem]);
        document.body.removeChild(modal);
        alert('Item added to cart!');
    });

    document.body.appendChild(modal);
}

displayMenu();