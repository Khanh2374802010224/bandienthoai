// Khởi tạo các sản phẩm và giỏ hàng
let cart = [];
let products = {
    'iphone13': {
        name: 'iPhone 13 128GB',
        price: 18990000,
        image: 'iphone13.jpg',
        description: 'Điện thoại iPhone 13 với màn hình OLED 6.1 inch, chip A15 Bionic mạnh mẽ.'
    },
    'samsungS23': {
        name: 'Samsung Galaxy S23',
        price: 20490000,
        image: 'samsunggalaxys23.jpg',
        description: 'Điện thoại Samsung Galaxy S23 với màn hình Dynamic AMOLED 2X, chip Snapdragon 8 Gen 2.'
    },
    'xiaomi11': {
        name: 'Xiaomi 11',
        price: 15990000,
        image: 'xiaomi11.jpg',
        description: 'Xiaomi 11 với màn hình AMOLED 6.81 inch, Snapdragon 888.'
    },
    'oneplus9': {
        name: 'OnePlus 9',
        price: 10490000,
        image: 'oneplus9.jpg',
        description: 'OnePlus 9 với màn hình Fluid AMOLED 6.55 inch, Snapdragon 888.'
    },
    'samsung galaxy s21': {
        name: 'Samsung Galaxy S21',
        price: 8990000,
        image: 'galaxys21.jpg',
        description: 'Samsung Galaxy S21 với màn hình Dynamic AMOLED 2X, chip Exynos 2100.'
    }
};

// Hàm hiển thị giỏ hàng
function showCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Giỏ hàng của bạn trống.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>Giá: ${item.price.toLocaleString()}đ</p>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    document.getElementById('cart').classList.remove('hidden');
}

// Hàm đóng giỏ hàng
function closeCart() {
    document.getElementById('cart').classList.add('hidden');
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(event, productId) {
    event.stopPropagation(); // Ngừng sự kiện click tiếp tục propagating
    const product = products[productId];
    cart.push(product);
    alert(`${product.name} đã được thêm vào giỏ hàng.`);
    updateCartDisplay(); // Cập nhật lại giao diện giỏ hàng
}

// Hàm hiển thị giỏ hàng trên giao diện
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length; // Hiển thị số lượng sản phẩm trong giỏ hàng
}

// Hàm hiển thị chi tiết sản phẩm
function showDetails(productId) {
    const product = products[productId];
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p><strong>Giá: ${product.price.toLocaleString()}đ</strong></p>
        <button onclick="addToCart(event, '${productId}')">Thêm vào giỏ</button>
    `;
    document.getElementById('product-details').classList.remove('hidden');
}

// Hàm đóng chi tiết sản phẩm
function closeDetails() {
    document.getElementById('product-details').classList.add('hidden');
}

// Hàm hiển thị modal đăng nhập
function showLoginForm() {
    document.getElementById('login-modal').classList.remove('hidden');
}

// Hàm đóng modal đăng nhập
function closeLoginForm() {
    document.getElementById('login-modal').classList.add('hidden');
}

// Hàm đăng nhập
function login(event) {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    // Kiểm tra thông tin đăng nhập
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Đăng nhập thành công!');
    updateUI();
    closeLoginForm();
}

// Hàm hiển thị modal đăng ký
function showRegisterForm() {
    document.getElementById('register-modal').classList.remove('hidden');
}

// Hàm đóng modal đăng ký
function closeRegisterForm() {
    document.getElementById('register-modal').classList.add('hidden');
}

// Hàm đăng ký
function register(event) {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp.');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Đăng ký thành công!');
    closeRegisterForm();
}

// Cập nhật giao diện sau khi đăng nhập
function updateUI() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username-display').textContent = username;
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('auth-buttons').classList.add('hidden');
    }
}

// Đăng xuất
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    alert('Đăng xuất thành công!');
    updateUI();
}

// Xóa dữ liệu localStorage
function clearLocalStorage() {
    localStorage.clear();
    alert('Dữ liệu đã được xóa.');
    updateUI();
}
// Hàm hiển thị chi tiết sản phẩm
function showDetails(productId) {
    const product = products[productId];
    const detailsContent = document.getElementById('product-details');

    // Cập nhật thông tin chi tiết
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `Giá: ${product.price.toLocaleString()}đ`;

    // Hiển thị modal
    detailsContent.classList.remove('hidden');
}

// Hàm đóng chi tiết sản phẩm
function closeDetails() {
    document.getElementById('product-details').classList.add('hidden');
}

// Khi trang được tải lại, kiểm tra thông tin người dùng
document.addEventListener('DOMContentLoaded', updateUI);
