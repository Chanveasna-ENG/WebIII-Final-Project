// Toggle description for clicked item
function toggleDescription(event) {
    // Get the clicked item
    const item = event.currentTarget;

    // Get the description element inside the clicked item
    const description = item.querySelector('.description');

    // Check if the description is already visible
    const isVisible = description.style.display === 'block';

    // Hide all descriptions
    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach(desc => {
        desc.style.display = 'none';
    });

    // If the clicked item's description is not visible, show it
    if (!isVisible) {
        description.style.display = 'block';
    }
}

    // Add click event listeners to all items
    document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', toggleDescription);
});

// Display meal sections

function displayDishes(mealType, dishes) {
    const mealElement = document.getElementById(mealType);
    mealElement.style.display = 'block';

    createFilterSection(mealType, dishes); // Add filter section

    // Create mealList container dynamically each time
    let mealList = document.getElementById('mealItems');
    if (!mealList) {
        mealList = document.createElement('div');
        mealList.id = 'mealItems';
        mealElement.appendChild(mealList);
    }

    // Clear previous dishes
    mealList.innerHTML = '';

    dishes.forEach((dish) => {
        const dishElement = document.createElement('div');
        dishElement.className = 'item';
        dishElement.dataset.name = dish.name;
        dishElement.dataset.price = dish.price;
        dishElement.innerHTML = `
            <img src=${dish.img} alt=${dish.alt}>
            <h3>${dish.name}</h3>
            <p class="description" style="display: none;">
                <em>${dish.description}</em>
                <em style="color: red;">${dish.price}</em>
                <a class="show-less" onclick="toggleDescription(event)">Show Less</a>
            </p>
        `;

        // Add click listener for toggling description
        dishElement.addEventListener('click', toggleDescription);
        mealList.appendChild(dishElement);
    });
}

// Go back to the main menu
function goBack(event) {
    event.preventDefault();

    // Hide all sections
    const sections = ['breakfast', 'lunch', 'dinner', 'mealItems', 'goBack'];
    sections.forEach((id) => {
        document.getElementById(id).style.display = 'none';
    });

    // Remove the dynamically created mealList
    const mealList = document.getElementById('mealItems');
    if (mealList) {
        mealList.remove(); // This removes the entire mealList div
    }

    // Show the main menu
    document.getElementById('meals').style.display = 'flex';
}



function display(event, type) {
    event.preventDefault();

    
    document.getElementById('meals').style.display = 'none';
    
    const breakfastDishes = [
        { 
            name: 'Steamed Rice with Pork', 
            img: 'https://images.deliveryhero.io/image/fd-kh/Products/2384350.jpg?width=%s', 
            alt: 'steamed rice with pork',
            type: 'breakfast',
            price: '4000៛',
            description: 'Perfectly cooked steamed rice with grilled pork and omelette, complemented by fresh cucumber and tomato, tangy pickles and savory dipping sauce.'
        },
        { 
            name: 'Chicken with Steamed Rice', 
            img: "https://images.deliveryhero.io/image/fd-kh/Products/843231.jpg?width=%s", 
            alt: "Chicken with Steamed Rice",
            type: 'breakfast',
            price: '5000៛',
            description: "Juicy grilled chicken served over fragrant steamed rice, with a side of fresh cucumber and tomato, tangy pickles and savory dipping sauce."
        },
        { 
            name: 'Nom Banh Jok', 
            img: "https://www.desidakaar.com/wp-content/uploads/2019/11/kinh-nghiem-du-lich-campuchia-tu-a-den-z-29-768x637.jpg", 
            alt: "Nom Banh Jok",
            type: 'breakfast',
            price: '7000៛',
            description: "A traditional rice noodle dish served with a flavorful fish-based curry and an assortment of fresh herbs and vegetables."
        },
        { 
            name: 'Fish Porridge', 
            img: "https://images.deliveryhero.io/image/fd-kh/Products/476548.jpg?width=%s", 
            alt: "Fish Porridge",
            type: 'breakfast',
            price: '6000៛',
            description: "Warm and comforting rice porridge simmered with delicate fish and seasoned to perfection."
        },
        { 
            name: 'Chicken Porridge', 
            img: "https://images.deliveryhero.io/image/fd-kh/Products/476572.jpg?width=%s", 
            alt: "Chicken Porridge",
            type: 'breakfast',
            price: '6000៛',
            description: "A soothing bowl of seasoned rice porridge infused with tender chicken and fragrant spices"
        },
        { 
            name: 'Kuy Teav Phnom Penh', 
            img: "https://khema.thalias.com.kh/wp-content/uploads/2022/03/Kuy-Teav-Phnom-Penh.jpg", 
            alt: "Kuy Teav Phnom Penh",
            type: 'breakfast',
            price: '8000៛',
            description: "A classic Cambodian noodle soup featuring silky rice noodles, aromatic broth, and an assortment of savory toppings including pork, beef, or seafood."
        },
        { 
            name: 'Braised Beef Stew with Noodle', 
            img: "https://images.deliveryhero.io/image/fd-kh/Products/325617.jpg?width=%s", 
            alt: "Mee Khaw Ko",
            type: 'breakfast',
            price: '8000៛',
            description: "A flavorful Cambodian braised beef stew with tender beef, aromatic spices, and a rich, slightly sweet broth. Served over noodles and topped with fresh herbs, it’s a comforting and hearty dish."
        },
        { 
            name: 'Banh Chev', 
            img: "BanhChew.jpg", 
            alt: "Banh Chev",
            type: 'breakfast',
            price: '5000៛',
            description: "A Cambodian savory crepe made from rice flour, turmeric, and coconut milk, filled with minced pork, shrimp, and bean sprouts. Served with fresh herbs and a tangy dipping sauce, it’s a crisp and flavorful favorite."
        },
        { 
            name: 'Pâté Bread', 
            img: "https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.6435-9/120757480_197013691809061_7850225911760248768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uREpYlLfRZ8Q7kNvgHyLXcU&_nc_zt=23&_nc_ht=scontent.fpnh1-1.fna&_nc_gid=AY6dCO88Qfyrrf5X7XqMHnY&oh=00_AYCvMm-5Z611YVU5e5Ipx-KLWb133eekMxsjn0uIrLpV8Q&oe=677B95F0", 
            alt: "Pâté Bread",
            type: 'breakfast',
            price: '6000៛',
            description: "a popular Cambodian sandwich made with a crusty baguette filled with savory pâté, meats (such as pork or chicken), pickled vegetables, fresh herbs, and a touch of mayonnaise or chili sauce."
        },
        
    ];
    const lunchDishes = [
        
        { 
            name: 'Fish Amok', 
            img: "https://foodfuntravel.com/wp-content/uploads/2020/09/Trey-Amok-Fish-Amok-Cambodia.jpg", 
            alt: "Fish Amok",
            type: 'lunch',
            price: '12000៛',
            description: "Nation dish of Cambodian, a creamy and fragrant fish curry made with coconut milk, eggs, and a blend of spices, steamed in banana leaves for added aroma and flavor."
        },
        { 
            name: 'Beef Lok Lak', 
            img: "https://spicygelato.kitchen/wp-content/uploads/2022/03/BeefLokLak-scaled.jpg", 
            alt: "Beef Lok Lak",
            type: 'lunch',
            price: '8000៛',
            description: "A popular stir-fried beef dish served with a savory sauce made from soy sauce, garlic, and lime. It’s often accompanied by rice and a fried egg on top, adding richness to the meal."
        },
        { 
            name: 'Stir-Fried Ginger with Pork Ribs', 
            img: "https://pppkhmer.sgp1.digitaloceanspaces.com/image/main/field/image/150519_22a.jpg", 
            alt: "Stir-fried ginger with pork ribs",
            type: 'lunch',
            price: '7000៛',
            description: "Tender pork ribs stir-fried with fresh ginger, garlic, and spices. The dish is fragrant, slightly spicy, and offers a savory, flavorful combination."
        },
        {
            name: 'Stir-Fried Chicken with Lemongrass Paste', 
            img: "https://grantourismotravels.com/wp-content/uploads/2020/10/Cambodian-Lemongrass-Chicken-Stir-Fry-Recipe-Copyright-2022-Terence-Carter-Grantourismo-T.jpg", 
            alt: "Stir-Fried Chicken with Lemongrass Paste",
            type: 'lunch',
            price: '7000៛',
            description: " Chicken pieces stir-fried with a fragrant lemongrass paste, garlic, and chili, creating a flavorful, aromatic dish with a balance of spice and citrus."
        },
        { 
            name: 'Samlor Korko', 
            img: "https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.6435-9/62426679_2476016892421942_131246546934038528_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=9eae26&_nc_ohc=J6fLYa32-HUQ7kNvgFPO8LF&_nc_zt=23&_nc_ht=scontent.fpnh1-2.fna&_nc_gid=AaMhFiArCbZCzh0CtK_q-GX&oh=00_AYDaO2bcqMR3ezND9Dr48IOZli-pdOxVK5GllwAKMYkVsw&oe=677BAA26", 
            alt: "Korko",
            type: 'lunch',
            price: '7000៛',
            description: "A traditional Khmer vegetable stew made with roasted rice powder, fish or meat, and a variety of vegetables, creating a hearty, savory dish."
        },
        { 
            name: 'Samlor Machu Youn', 
            img: "https://instalacarte.com/media/cache/mobile_image/product/4756/63733/05156d7c4d4a69b5dd700bd543ca6f28.jpg", 
            alt: "Machu Youn",
            type: 'lunch',
            price: '6000៛',
            description: "A sour Cambodian soup made with beef or pork, tamarind, and various herbs, offering a tangy and refreshing flavor."
        },
        { 
            name: 'Dried Fish Rice with Watermelon', 
            img: "https://i0.wp.com/flavourfullygood.com/wp-content/uploads/2022/07/Dried-Fish-Rice-1-Flavourfully-Good.jpg?fit=1600%2C1067&ssl=1", 
            alt: "Dried Fish Rice with Watermelon",
            type: 'lunch',
            price: '6000៛',
            description: "A unique Cambodian dish featuring dried fish served with rice and refreshing watermelon, balancing savory and sweet flavors."
        },
        { 
            name: 'Grilled Honeycomb', 
            img: "https://scontent.fpnh1-1.fna.fbcdn.net/v/t39.30808-6/344574534_239858155379681_2049163131654562066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UwKXxD9HEA0Q7kNvgHka7YA&_nc_zt=23&_nc_ht=scontent.fpnh1-1.fna&_nc_gid=A-Rg2ecQBcigsg8IQHloKll&oh=00_AYCYyIWTmJx-M61XSQ-xN3lduLkD1QUmZDrUeZ7V7e1yPg&oe=6759FE01", 
            alt: "Grilled Honeycomb",
            type: 'lunch',
            price: '10000៛',
            description: "A simple yet delicious Cambodian treat, honeycomb is grilled for a caramelized, crispy texture, often enjoyed as a snack or dessert."
        },
        
    ];

    const dinnerDishes = [
        { 
            name: 'Lort Cha', 
            img: "https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/255003540_1512955925768906_8358177607275221682_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=038tMM8e5iUQ7kNvgHwBcSi&_nc_zt=23&_nc_ht=scontent.fpnh1-2.fna&_nc_gid=AlyweYze9AdaMYoLCM_zGmw&oh=00_AYAn4jNMrq2kEOfZLTL05F-jcE7N64bMzNJJX_iqn_-pJw&oe=675A432D", 
            alt: "Lort Cha",
            type: 'dinner',
            price: '6000៛',
            description: "A Cambodian stir-fry made with thick rice noodles, typically sautéed with beef, pork, or chicken, along with vegetables and a savory sauce, offering a satisfying, flavorful dish."
        },
        { 
            name: 'Grilled Beef', 
            img: "Beef.jpg", 
            alt: "Grilled Beef",
            type: 'dinner',
            price: '15000៛',
            description: "Tender grilled beef served with tek prahok (fermented fish paste), which adds a strong umami flavor and pairs well with the smoky beef."
        },
        { 
            name: 'Grilled Chicken', 
            img: "Chicken.jpg", 
            alt: "Grilled Chicken",
            type: 'dinner',
            price: '15000៛',
            description: "Cambodian-style grilled chicken marinated with a mixture of spices, herbs, and sometimes coconut milk, creating a flavorful, crispy exterior and juicy interior."
        },
        { 
            name: 'Braised Pork Belly', 
            img: "https://i.ytimg.com/vi/QTWVqKeYhJs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGvrDH3hgIrVGXp5B-JlQ7HkMxdA", 
            alt: "Braised Pork Belly",
            type: 'dinner',
            price: '5000៛',
            description: "Pork belly slow-cooked in a rich, savory sauce made with soy sauce, sugar, and spices, resulting in tender, flavorful meat with a caramelized glaze."
        },
        { 
            name: 'Fried Rice', 
            img: "https://images.deliveryhero.io/image/fd-kh/Products/2380953.jpg?width=%s", 
            alt: "Fried Rice",
            type: 'dinner',
            price: '6000៛',
            description: "Cambodian-style fried rice made with vegetables, meat (such as chicken or shrimp), and eggs, all stir-fried together with a touch of soy sauce for a savory meal."
        },
        { 
            name: 'Stir-fried Noodle', 
            img: "https://images.deliveryhero.io/image/fd-kh/Products/111481.jpg?width=%s", 
            alt: "stir-fried noodle",
            type: 'dinner',
            price: '6000៛',
            description: "Stir-fried noodles with vegetables, meat, or seafood, seasoned with soy sauce, garlic, and spices, creating a savory, well-balanced dish."
        },
        { 
            name: 'Tom Yum', 
            img: "https://images.deliveryhero.io/image/fd-kh/Products/86510.jpg?width=%s", 
            alt: "Tom Yum",
            type: 'dinner',
            price: '6000៛',
            description: "Stir-fried noodles with vegetables, meat, or seafood, seasoned with soy sauce, garlic, and spices, creating a savory, well-balanced dish."
        },
        { 
            name: 'Machu Ktiss', 
            img: "https://i.ytimg.com/vi/Mx9txlDtAWQ/sddefault.jpg", 
            alt: "Machu Ktiss",
            type: 'dinner',
            price: '6000៛',
            description: "A fragrant and spicy Thai-inspired soup made with shrimp, herbs like lemongrass and kaffir lime leaves, chili, and a tangy broth, offering a bold, sour, and spicy flavor."
        },
        { 
            name: 'Cha Kdav Morn', 
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQHyIqx7OVgcU7-f5PTPSm22PaCx8mV7zuxN9wNyYGwW8jTsTr_P0K18Y5YFYQJfLVFVebNxsk00iq7iaoH0cVRhJbDrfJf7nwQUARJXlUYwa8ZvFnZOMCZEJtTu47kXiOXwHc02kUG0Ff/s1600/17523360_715923851901546_2171140692656135111_n.jpg", 
            alt: "Cha Kdav Morn",
            type: 'dinner',
            price: '6000៛',
            description: "a spicy stir-fried chicken dish, typically made with fresh herbs like basil or lemongrass. The chicken is cooked with a flavorful, aromatic sauce that balances heat and savory notes, creating a fragrant and spicy meal."
        },
    ];
    if (type == 'breakfast') {
        displayDishes(type, breakfastDishes);
        
    } else if (type == 'lunch') {
        displayDishes(type, lunchDishes);
        
    } else {
        displayDishes(type, dinnerDishes);

    }
    document.getElementById('goBack').style.display = 'block';

}

window.onload = function () {
    window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
};


function createFilterSection(mealType) {
    const filterElement = document.getElementById(`filter-${mealType}`);
    
    // Create the filter form
    filterElement.innerHTML = `
        <h3>Filter Items: </h3>
        <input type="text" id="search-${mealType}" placeholder="Search by name" oninput="filterDishes('${mealType}')">
        <label for="minPrice-${mealType}">Min Price (Riels):</label>
        <input type="number" id="minPrice-${mealType}" oninput="filterDishes('${mealType}')">
        <label for="maxPrice-${mealType}">Max Price (Riels):</label>
        <input type="number" id="maxPrice-${mealType}" oninput="filterDishes('${mealType}')">
    `;
}

function filterDishes(mealType) {
    const searchQuery = document.getElementById(`search-${mealType}`).value.toLowerCase();
    const minPrice = parseInt(document.getElementById(`minPrice-${mealType}`).value, 10) || 0;
    const maxPrice = parseInt(document.getElementById(`maxPrice-${mealType}`).value, 10) || Infinity;

    const mealList = document.getElementById('mealItems');
    if (mealList) {
        Array.from(mealList.children).forEach(item => {
            const name = item.dataset.name.toLowerCase();
            const price = parseInt(item.dataset.price.replace(/[^\d]/g, ''), 10);
            
            if (name.includes(searchQuery) && price >= minPrice && price <= maxPrice) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}
