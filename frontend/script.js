const products = [
    // Original products (1-12)
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 2499,
        category: "electronics",
        image: "🎧",
        badge: "Popular"
    },
    {
        id: 2,
        title: "Smart Watch Pro",
        description: "Advanced fitness tracking and smart notifications",
        price: 8999,
        category: "electronics",
        image: "⌚",
        badge: "New"
    },
    {
        id: 3,
        title: "Cotton T-Shirt",
        description: "Comfortable premium cotton t-shirt in various colors",
        price: 799,
        category: "clothing",
        image: "👕",
        badge: "Sale"
    },
    {
        id: 4,
        title: "Running Shoes",
        description: "Lightweight running shoes with excellent cushioning",
        price: 3499,
        category: "sports",
        image: "👟",
        badge: "Popular"
    },
    {
        id: 5,
        title: "Coffee Maker",
        description: "Automatic coffee maker with programmable timer",
        price: 4999,
        category: "home",
        image: "☕",
        badge: "New"
    },
    {
        id: 6,
        title: "Laptop Computer",
        description: "High-performance laptop for work and gaming",
        price: 45999,
        category: "electronics",
        image: "💻",
        badge: "Popular"
    },
    {
        id: 7,
        title: "Denim Jeans",
        description: "Classic fit denim jeans with stretch comfort",
        price: 1999,
        category: "clothing",
        image: "👖",
        badge: "Sale"
    },
    {
        id: 8,
        title: "Yoga Mat",
        description: "Non-slip exercise mat perfect for yoga and workouts",
        price: 1299,
        category: "sports",
        image: "🧘",
        badge: "New"
    },
    {
        id: 9,
        title: "Plant Pot Set",
        description: "Decorative ceramic pots perfect for indoor plants",
        price: 1799,
        category: "home",
        image: "🪴",
        badge: "Popular"
    },
    {
        id: 10,
        title: "Smartphone",
        description: "Latest smartphone with advanced camera system",
        price: 24999,
        category: "electronics",
        image: "📱",
        badge: "New"
    },
    {
        id: 11,
        title: "Winter Jacket",
        description: "Warm waterproof jacket for outdoor activities",
        price: 4499,
        category: "clothing",
        image: "🧥",
        badge: "Sale"
    },
    {
        id: 12,
        title: "Dumbbells Set",
        description: "Adjustable dumbbells for home fitness workouts",
        price: 5999,
        category: "sports",
        image: "🏋️",
        badge: "Popular"
    },
    // New products (13-62)
    {
        id: 13,
        title: "4K Gaming Monitor",
        description: "32-inch 4K gaming monitor with 144Hz refresh rate",
        price: 18999,
        category: "electronics",
        image: "🖥️",
        badge: "New"
    },
    {
        id: 14,
        title: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with blue switches",
        price: 3299,
        category: "electronics",
        image: "⌨️",
        badge: "Popular"
    },
    {
        id: 15,
        title: "Gaming Mouse",
        description: "High-precision gaming mouse with programmable buttons",
        price: 1899,
        category: "electronics",
        image: "🖱️",
        badge: "Sale"
    },
    {
        id: 16,
        title: "Wireless Charger",
        description: "Fast wireless charging pad for smartphones",
        price: 1199,
        category: "electronics",
        image: "🔌",
        badge: "New"
    },
    {
        id: 17,
        title: "Bluetooth Speaker",
        description: "Portable waterproof Bluetooth speaker",
        price: 2299,
        category: "electronics",
        image: "🔊",
        badge: "Popular"
    },
    {
        id: 18,
        title: "Hoodie Sweatshirt",
        description: "Comfortable cotton blend hoodie with front pocket",
        price: 1599,
        category: "clothing",
        image: "👘",
        badge: "New"
    },
    {
        id: 19,
        title: "Leather Boots",
        description: "Genuine leather ankle boots for all seasons",
        price: 4299,
        category: "clothing",
        image: "👢",
        badge: "Popular"
    },
    {
        id: 20,
        title: "Summer Dress",
        description: "Flowy summer dress perfect for casual occasions",
        price: 1299,
        category: "clothing",
        image: "👗",
        badge: "Sale"
    },
    {
        id: 21,
        title: "Baseball Cap",
        description: "Adjustable baseball cap with embroidered logo",
        price: 599,
        category: "clothing",
        image: "🧢",
        badge: "New"
    },
    {
        id: 22,
        title: "Casual Sneakers",
        description: "Comfortable daily wear sneakers in multiple colors",
        price: 2599,
        category: "clothing",
        image: "👟",
        badge: "Popular"
    },
    {
        id: 23,
        title: "Tennis Racket",
        description: "Professional tennis racket with graphite frame",
        price: 5999,
        category: "sports",
        image: "🎾",
        badge: "New"
    },
    {
        id: 24,
        title: "Basketball",
        description: "Official size basketball with premium grip",
        price: 899,
        category: "sports",
        image: "🏀",
        badge: "Popular"
    },
    {
        id: 25,
        title: "Swimming Goggles",
        description: "Anti-fog swimming goggles with UV protection",
        price: 499,
        category: "sports",
        image: "🥽",
        badge: "Sale"
    },
    {
        id: 26,
        title: "Resistance Bands",
        description: "Set of 5 resistance bands for strength training",
        price: 699,
        category: "sports",
        image: "🎯",
        badge: "New"
    },
    {
        id: 27,
        title: "Cycling Helmet",
        description: "Lightweight cycling helmet with adjustable fit",
        price: 1499,
        category: "sports",
        image: "🚴",
        badge: "Popular"
    },
    {
        id: 28,
        title: "Dining Table Set",
        description: "4-seater wooden dining table with chairs",
        price: 12999,
        category: "home",
        image: "🪑",
        badge: "New"
    },
    {
        id: 29,
        title: "Floor Lamp",
        description: "Modern floor lamp with adjustable brightness",
        price: 2999,
        category: "home",
        image: "💡",
        badge: "Popular"
    },
    {
        id: 30,
        title: "Throw Pillows",
        description: "Set of 2 decorative throw pillows",
        price: 999,
        category: "home",
        image: "🛏️",
        badge: "Sale"
    },
    {
        id: 31,
        title: "Wall Clock",
        description: "Silent wall clock with modern design",
        price: 1299,
        category: "home",
        image: "🕐",
        badge: "New"
    },
    {
        id: 32,
        title: "Kitchen Knife Set",
        description: "Professional chef knife set with wooden block",
        price: 3299,
        category: "home",
        image: "🔪",
        badge: "Popular"
    },
    {
        id: 33,
        title: "Fantasy Novel",
        description: "Bestselling fantasy adventure novel",
        price: 399,
        category: "books",
        image: "📚",
        badge: "New"
    },
    {
        id: 34,
        title: "Cookbook Collection",
        description: "Collection of healthy recipe cookbooks",
        price: 899,
        category: "books",
        image: "📖",
        badge: "Popular"
    },
    {
        id: 35,
        title: "Self-Help Guide",
        description: "Motivational self-improvement guide",
        price: 499,
        category: "books",
        image: "📘",
        badge: "Sale"
    },
    {
        id: 36,
        title: "Art Sketch Book",
        description: "High-quality sketch book for artists",
        price: 299,
        category: "books",
        image: "📝",
        badge: "New"
    },
    {
        id: 37,
        title: "Science Encyclopedia",
        description: "Comprehensive science reference book",
        price: 1799,
        category: "books",
        image: "📗",
        badge: "Popular"
    },
    {
        id: 38,
        title: "Face Moisturizer",
        description: "Hydrating face moisturizer for all skin types",
        price: 799,
        category: "beauty",
        image: "🧴",
        badge: "New"
    },
    {
        id: 39,
        title: "Lipstick Set",
        description: "Long-lasting lipstick set in 6 shades",
        price: 1299,
        category: "beauty",
        image: "💄",
        badge: "Popular"
    },
    {
        id: 40,
        title: "Hair Dryer",
        description: "Professional ionic hair dryer with multiple settings",
        price: 2599,
        category: "beauty",
        image: "💨",
        badge: "Sale"
    },
    {
        id: 41,
        title: "Perfume Spray",
        description: "Long-lasting floral perfume spray",
        price: 1999,
        category: "beauty",
        image: "🌸",
        badge: "New"
    },
    {
        id: 42,
        title: "Makeup Brushes",
        description: "Professional makeup brush set with case",
        price: 1499,
        category: "beauty",
        image: "🖌️",
        badge: "Popular"
    },
    {
        id: 43,
        title: "Car Phone Mount",
        description: "Adjustable car phone mount for dashboard",
        price: 699,
        category: "automotive",
        image: "🚗",
        badge: "New"
    },
    {
        id: 44,
        title: "Car Air Freshener",
        description: "Long-lasting car air freshener in vanilla scent",
        price: 199,
        category: "automotive",
        image: "🌿",
        badge: "Popular"
    },
    {
        id: 45,
        title: "Tire Pressure Gauge",
        description: "Digital tire pressure gauge with LED display",
        price: 899,
        category: "automotive",
        image: "⚙️",
        badge: "Sale"
    },
    {
        id: 46,
        title: "Car Seat Covers",
        description: "Universal car seat covers set of 2",
        price: 1899,
        category: "automotive",
        image: "🪑",
        badge: "New"
    },
    {
        id: 47,
        title: "Jump Starter Kit",
        description: "Portable car jump starter with USB ports",
        price: 2999,
        category: "automotive",
        image: "🔋",
        badge: "Popular"
    },
    {
        id: 48,
        title: "Building Blocks Set",
        description: "Creative building blocks set for kids",
        price: 1099,
        category: "toys",
        image: "🧱",
        badge: "New"
    },
    {
        id: 49,
        title: "Remote Control Car",
        description: "Fast RC car with remote control",
        price: 1699,
        category: "toys",
        image: "🚙",
        badge: "Popular"
    },
    {
        id: 50,
        title: "Puzzle Game",
        description: "1000-piece landscape puzzle for adults",
        price: 599,
        category: "toys",
        image: "🧩",
        badge: "Sale"
    },
    {
        id: 51,
        title: "Action Figure",
        description: "Collectible superhero action figure",
        price: 699,
        category: "toys",
        image: "🦸",
        badge: "New"
    },
    {
        id: 52,
        title: "Board Game",
        description: "Strategy board game for family fun",
        price: 1299,
        category: "toys",
        image: "🎲",
        badge: "Popular"
    },
    {
        id: 53,
        title: "Tablet Case",
        description: "Protective tablet case with stand feature",
        price: 899,
        category: "electronics",
        image: "📱",
        badge: "New"
    },
    {
        id: 54,
        title: "Power Bank",
        description: "20000mAh portable power bank with fast charging",
        price: 1499,
        category: "electronics",
        image: "🔋",
        badge: "Popular"
    },
    {
        id: 55,
        title: "Silk Scarf",
        description: "Elegant silk scarf with floral pattern",
        price: 1099,
        category: "clothing",
        image: "🧣",
        badge: "Sale"
    },
    {
        id: 56,
        title: "Leather Wallet",
        description: "Genuine leather wallet with RFID protection",
        price: 1499,
        category: "clothing",
        image: "💳",
        badge: "New"
    },
    {
        id: 57,
        title: "Fitness Tracker",
        description: "Basic fitness tracker with heart rate monitor",
        price: 2199,
        category: "sports",
        image: "⌚",
        badge: "Popular"
    },
    {
        id: 58,
        title: "Water Bottle",
        description: "Insulated stainless steel water bottle",
        price: 699,
        category: "sports",
        image: "🍶",
        badge: "Sale"
    },
    {
        id: 59,
        title: "Candle Set",
        description: "Aromatherapy candle set with relaxing scents",
        price: 1199,
        category: "home",
        image: "🕯️",
        badge: "New"
    },
    {
        id: 60,
        title: "Picture Frame",
        description: "Wooden picture frame for 8x10 photos",
        price: 549,
        category: "home",
        image: "🖼️",
        badge: "Popular"
    },
    {
        id: 61,
        title: "Travel Journal",
        description: "Leather-bound travel journal with world map",
        price: 799,
        category: "books",
        image: "✈️",
        badge: "New"
    },
    {
        id: 62,
        title: "Sunglasses",
        description: "UV protection sunglasses with polarized lenses",
        price: 1899,
        category: "beauty",
        image: "🕶️",
        badge: "Popular"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const navMenu = document.getElementById('navMenu');

// Format price with rupee symbol
function formatPrice(price) {
    return `₹${price.toFixed(2)}`;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    updateCartUI();
    setupEventListeners();
    setupSmoothScrolling();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', filterProducts);
    
    // Filter functionality
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            categoryFilter.value = category;
            filterProducts();
            scrollToProducts();
        });
    });

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Setup smooth scrolling for navigation
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Render products
function renderProducts(productsToRender) {
    if (!productsGrid) return;
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666;">No products found</h3>
                <p style="color: #999;">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card fade-in">
            <div class="product-image">
                ${product.image}
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, this)">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="btn btn-secondary" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye"></i> View
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;

    let filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        
        let matchesPrice = true;
        if (selectedPriceRange !== 'all') {
            const price = product.price;
            switch (selectedPriceRange) {
                case '100-500':
                    matchesPrice = price >= 100 && price < 500;
                    break;
                case '500-2000':
                    matchesPrice = price >= 500 && price < 2000;
                    break;
                case '2000-8000':
                    matchesPrice = price >= 2000 && price < 8000;
                    break;
                case '8000+':
                    matchesPrice = price >= 8000;
                    break;
            }
        }
        
        return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts(filteredProducts);
}

// Add to cart
function addToCart(productId, buttonElement) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCart();
    showNotification(`${product.title} added to cart!`);
    
    if (buttonElement) {
        addToCartAnimation(buttonElement);
    }
    
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Update cart UI
function updateCartUI() {
    if (!cartCount || !cartTotal || !cartItems) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.image}</div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
        saveCart();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
    showNotification('Item removed from cart', 'error');
}

// Toggle cart
function toggleCart() {
    const isActive = cartSidebar.classList.contains('active');
    
    if (isActive) {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    } else {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Toggle mobile menu
function toggleMenu() {
    navMenu.classList.toggle('active');
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// View product (placeholder)
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`Viewing ${product.title}`, 'info');
    }
}

// Checkout functionality
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");

    if (!name || !email) {
        showNotification('Name and email are required!', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Send order to backend
    fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            cartItems: cart,
            totalAmount: total
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.orderId) {
            alert(`Order placed! Your Order ID is ${data.orderId}`);
            showNotification('Order stored in database!', 'success');
        } else {
            showNotification('Order submission failed!', 'error');
        }
    })
    .catch(err => {
        console.error('Checkout error:', err);
        showNotification('Failed to connect to server', 'error');
    });

    // Reset cart after checkout
    cart = [];
    updateCartUI();
    saveCart();
    toggleCart();
}


// Show notification
function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Scroll to products section
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

// Close cart when clicking outside
document.addEventListener('click', function(e) {
    if (!cartSidebar.contains(e.target) && !e.target.closest('.cart-icon')) {
        if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
        toggleCart();
    }
    
    if (e.key === 'c' && !e.target.matches('input, textarea')) {
        toggleCart();
    }
    
    if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add loading animation for dynamic content
function showLoading(element) {
    element.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

// Simulate API loading for demonstration
function simulateLoading() {
    showLoading(productsGrid);
    setTimeout(() => {
        renderProducts(products);
    }, 1000);
}

// Initialize intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.category-card, .product-card, .feature');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add product hover effects
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.product-card')) {
        const card = e.target.closest('.product-card');
        card.style.transform = 'translateY(-5px) scale(1.02)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.product-card')) {
        const card = e.target.closest('.product-card');
        card.style.transform = 'translateY(0) scale(1)';
    }
});

// Add to cart animation
function addToCartAnimation(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Added!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 1000);
    }, 500);
}

// Auto-save cart periodically
setInterval(saveCart, 30000);

// Clear search on escape
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        this.value = '';
        filterProducts();
    }
});

// Add product comparison feature (placeholder)
let compareList = [];

function addToCompare(productId) {
    if (compareList.length >= 3) {
        showNotification('You can only compare up to 3 products', 'error');
        return;
    }
    
    if (!compareList.includes(productId)) {
        compareList.push(productId);
        showNotification('Product added to comparison', 'info');
    }
}

// Add wishlist feature (placeholder)
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist', 'info');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Analytics tracking (placeholder)
function trackEvent(action, category, label) {
    console.log(`Analytics: ${action} - ${category} - ${label}`);
}

// Track product views
function trackProductView(productId) {
    trackEvent('view', 'product', productId);
}

// Track add to cart events
const originalAddToCartTracking = addToCart;
addToCart = function(productId, buttonElement) {
    trackEvent('add_to_cart', 'ecommerce', productId);
    originalAddToCartTracking(productId, buttonElement);
};

// Performance optimization: Lazy load product images
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

console.log('ShopHub E-commerce Store Loaded Successfully! 🛍️');