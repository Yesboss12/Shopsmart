const products = [
    { id: 1, name: "Premium T-Shirt", price: 25, category: "Clothing", image: "https://cdn-images.farfetch-contents.com/33/04/89/26/33048926_63739315_1000.jpg" },
    { id: 2, name: "Stylist Black Minimalist Watch", price: 150, category: "Accessories", image: "https://ng.jumia.is/3C35PnHs-ezUbG3H-XMwqgmwGEI=/fit-in/500x500/filters:fill(white)/product/06/7994414/1.jpg?7088" },
    { id: 3, name: "Leather Backpack", price: 90.23, category: "Accessories", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/5893904/1.jpg?8124" },
    { id: 4, name: "Wireless Earbuds", price: 129.99, category: "Electronics", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/3040914/1.jpg?1273" },
    { id: 5, name: "Men Sneakers", price: 60, category: "Shoes", image: "https://img.kwcdn.com/product/fancy/69f2ccd2-5d63-4aa8-a03f-2c6329ef5942.jpg?imageView2/2/w/800/q/70/format/avif" },
    { id: 6, name: "Stainless Steel Cookware", price: 22, category: "Kitchen Utensils", image: "https://img.kwcdn.com/product/open/9603462a7df94cfb912e01b1642febc7-goods.jpeg?imageView2/2/w/800/q/70/format/avif" },
    { id: 7, name: "Men Jeans", price: 79.60, category: "Clothing", image: "https://img.kwcdn.com/product/fancy/0a0726f9-0aec-4782-96b9-cf5a13428bce.jpg?imageView2/2/w/800/q/70/format/avif" },
    { id: 8, name: "Apple Watch Ultra 3 GPS + Cellular 49mm", price: 1043.02, category: "Accessories", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/3568814/1.jpg?0728" },
    { id: 9, name: "Summer Top", price: 35.70, category: "Clothing", image: "https://img.kwcdn.com/product/fancy/4d57e720-2559-499f-a3a5-a994fbcee694.jpg?imageView2/2/w/800/q/70/format/avif" },
    { id: 10, name: "Luxury Watch: Hublot Big Bang White", price: 550, category: "Accessories", image: "https://image.icebox.com/unsafe/400x0/filters:format(webp)/icebox-jewelry.s3.amazonaws.com/products/0c48d09152591f5ce212f46ce909dfbd.jpg" },
    { id: 11, name: "Apple iPhone 16", price: 999, category: "Gadgets", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/6507904/1.jpg?6668" },
    { id: 12, name: "Apple MacBook Air M2", price: 1203.50, category: "Gadgets", image: "https://m.media-amazon.com/images/I/71d0pZm9l9L.jpg" },
    { id: 13, name: "Samsung Galaxy S24 Ultra", price: 990.45, category: "Gadgets", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/0509104/1.jpg?4967" },
    { id: 14, name: "Dell XPS 15", price: 1599.99, category: "Gadgets", image: "https://pictures-nigeria.jijistatic.net/188664278_MzAwLTQwMC00MWQ0NWNmODYz.webp" },
    { id: 15, name: "Samsung 65 inches smart TV", price: 1290, category: "Electronics", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/1990914/1.jpg?1422" },
    { id: 16, name: "JBL Bar 800 pro. 7.1", price: 789.95, category: "Electronics", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/9150914/1.jpg?5984" },
    { id: 17, name: "PlayStation 5", price: 780.65, category: "Electronics", image: "https://pictures-nigeria.jijistatic.net/187039957_MzAwLTI5OS1hZTkyM2I4ZTJh.webp" },
    { id: 18, name: "Luxury Women Shoulder Bag", price: 85, category: "Accessories", image: "https://img.kwcdn.com/product/fancy/1e92bcca-e220-4b2d-b08b-9465b40940cd.jpg?imageView2/2/w/800/q/70/format/avif" }
];

let cart = [];
let currentUser = null;

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    if (sectionId === 'cart') renderCart();
    
}

function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}" class="product-img">
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="product-price">$${p.price}</p>
                <button class="btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`Yo Fam!, ${product.name} added to cart!`);
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function renderCart() {
    const content = document.getElementById('cart-content');
    const summary = document.getElementById('cart-summary');
    
    if (cart.length === 0) {
        content.innerHTML = '<p>Your cart is empty fam!.</p>';
        summary.classList.add('hidden');
        return;
    }
    
    summary.classList.remove('hidden');
    content.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <p>$${item.price}</p>
            </div>
            <button onclick="removeFromCart(${index})" style="background:none;border:none;color:red;cursor:pointer">Remove</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

function handleCheckout(e) {
    e.preventDefault();
    alert('Thank you for your purchase! Your order has been placed.');
    cart = [];
    updateCartCount();
    showSection('home');
    e.target.reset();
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    currentUser = { email };
    alert(`Logged in as ${email}`);
    updateAuthUI();
    showSection('home');
}

function handleSignup(e) {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    currentUser = { email };
    alert(`Signed up with ${email}`);
    updateAuthUI();
    showSection('home');
}

function logout() {
    currentUser = null;
    alert('Logged out');
    updateAuthUI();
    showSection('home');
}

function updateAuthUI() {
    const authLinks = document.getElementById('auth-links');
    if (currentUser) {
        authLinks.innerHTML = `
            <li><a href="#" onclick="showSection('home')">Home</a></li>
            <li><a href="#" onclick="showSection('shop')">Shop</a></li>
            <li><a href="#" onclick="showSection('cart')">Cart (<span id="cart-count">${cart.length}</span>)</a></li>
            <li><a href="#" onclick="logout()">Logout</a></li>
        `;
    } else {
        authLinks.innerHTML = `
            <li><a href="#" onclick="showSection('home')">Home</a></li>
            <li><a href="#" onclick="showSection('shop')">Shop</a></li>
            <li><a href="#" onclick="showSection('cart')">Cart (<span id="cart-count">${cart.length}</span>)</a></li>
            <li><a href="#" onclick="showSection('login')">Login</a></li>
            <li><a href="#" onclick="showSection('signup')">Sign Up</a></li>
        `;
    }
}


renderProducts();
updateAuthUI();
