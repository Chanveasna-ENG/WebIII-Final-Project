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
        
    ];

    const dinnerDishes = [
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
            plusBtn.textContent = '+';
            plusBtn.classList.add('customize-btn');
            plusBtn.addEventListener('click', () => {
                // Send dish info via URL parameters
                const params = new URLSearchParams({
                    name: dish.name,
                    img: dish.img,
                    price: dish.price,
                    description: dish.description
                });
                window.location.href = `customize.html?${params.toString()}`;
            });
    
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
    
      
      
      
      
      function displayMenu() {
        const menu = document.getElementById('menu');
        if (breakfastDishes.length) menu.appendChild(createMealSection('Breakfast', breakfastDishes));
        if (lunchDishes.length) menu.appendChild(createMealSection('Lunch', lunchDishes));
        if (dinnerDishes.length) menu.appendChild(createMealSection('Dinner', dinnerDishes));
      }
      
      displayMenu();