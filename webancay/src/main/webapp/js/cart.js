// cart.js - Xử lý giỏ hàng cho Cây Xanh Việt (VERSION MỚI - GIỎ HÀNG TRỐNG MẶC ĐỊNH)

// Khởi tạo biến toàn cục
let cartItems = [];
let discountCode = null;
let discountPercentage = 0;

// Đợi DOM load xong
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cart page initialized - EMPTY CART VERSION');

    // ==== QUAN TRỌNG: Khởi tạo giỏ hàng trống ====
    initializeEmptyCart();

    // Tải giỏ hàng từ localStorage (nếu có sản phẩm từ trang khác thêm vào)
    loadCartFromLocalStorage();

    // Cập nhật UI
    updateCartDisplay();

    // Cập nhật tổng tiền
    updateCartSummary();

    // Thiết lập event listeners
    setupEventListeners();

    // Cập nhật số lượng giỏ hàng trong header
    updateCartCountInHeader();

    // Thêm styles nếu cần
    addCartStyles();
});

// ==== HÀM MỚI: Khởi tạo giỏ hàng trống ====
function initializeEmptyCart() {
    console.log('Initializing empty cart...');

    // Xóa tất cả sản phẩm mặc định từ HTML
    const tbody = document.querySelector('.cart-table tbody');
    if (tbody) {
        tbody.innerHTML = '';
    }

    // Đảm bảo cartItems rỗng
    cartItems = [];

    // Hiển thị thông báo giỏ hàng trống
    showEmptyCartMessage();

    // Cập nhật tổng tiền về 0
    updateCartSummaryToZero();
}

// ==== HÀM MỚI: Cập nhật tổng tiền về 0 ====
function updateCartSummaryToZero() {
    const subtotalElement = document.querySelector('.summary-row:nth-child(1) span:last-child');
    const discountElement = document.querySelector('.summary-row:nth-child(2) span:last-child');
    const totalElement = document.querySelector('.summary-total span:last-child');
    const headerCartButton = document.querySelector('.header-button .font-medium');

    if (subtotalElement) subtotalElement.textContent = '0₫';
    if (discountElement) discountElement.textContent = '-0₫';
    if (totalElement) totalElement.textContent = '0₫';
    if (headerCartButton) headerCartButton.textContent = '0đ';
}

// ==== HÀM MỚI: Tải giỏ hàng từ localStorage ====
function loadCartFromLocalStorage() {
    try {
        const savedCart = localStorage.getItem('cart');

        if (savedCart) {
            const cartData = JSON.parse(savedCart);
            console.log('Cart loaded from localStorage:', cartData);

            // Chuyển đổi dữ liệu từ localStorage sang định dạng cartItems
            cartItems = cartData.map((item, index) => ({
                id: index + 1,
                code: item.code || 'ITEM_' + (index + 1),
                name: item.name || 'Sản phẩm',
                variant: item.variant || createVariantFromProductInfo(item, index),
                price: parsePriceFromVNDString(item.price),
                quantity: item.quantity || 1,
                image: item.image || 'https://via.placeholder.com/80x80?text=Sản+phẩm',
                totalPrice: 0,
                hasDiscount: item.hasDiscount || false,
                discountPercentage: item.discountPercentage || 0,
                originalPrice: item.originalPrice || '',
                category: item.category || ''
            }));

            // Tính lại totalPrice
            cartItems.forEach(item => {
                item.totalPrice = item.price * item.quantity;
            });

            console.log('Loaded', cartItems.length, 'items from localStorage');
        } else {
            console.log('No cart data in localStorage - keeping empty cart');
        }
    } catch (error) {
        console.error('Lỗi khi tải giỏ hàng từ localStorage:', error);
    }
}

// ==== HÀM MỚI: Tạo variant khi không có trong dữ liệu ====
function createVariantFromProductInfo(item, index) {
    if (item.variant && item.variant.trim() !== '') {
        return item.variant;
    }

    if (item.name) {
        const nameParts = item.name.split(' ');

        if (nameParts.length > 3) {
            const possibleVariant = nameParts.slice(-2).join(' ');
            if (possibleVariant.length > 5 && !possibleVariant.includes('Cây')) {
                return possibleVariant;
            }
        }

        if (item.code) {
            return `Mã sản phẩm: ${item.code}`;
        }

        if (item.category) {
            return `Loại: ${item.category}`;
        }
    }

    return `Sản phẩm ${index + 1}`;
}

// ==== HÀM MỚI: Chuyển đổi giá từ chuỗi VND ====
function parsePriceFromVNDString(priceString) {
    if (!priceString) return 0;
    const cleanText = priceString.replace(/[₫.,\s]/g, '');
    return parseInt(cleanText) || 0;
}

// ==== HÀM MỚI: Cập nhật hiển thị giỏ hàng ====
function updateCartDisplay() {
    const cartTable = document.getElementById('cart-table');
    const cartEmpty = document.getElementById('cart-empty');
    const tbody = document.querySelector('.cart-table tbody');

    if (!cartTable || !cartEmpty || !tbody) return;

    if (cartItems.length === 0) {
        // Hiển thị giỏ hàng trống
        cartTable.style.display = 'none';
        cartEmpty.style.display = 'block';
        return;
    }

    // Hiển thị bảng giỏ hàng
    cartEmpty.style.display = 'none';
    cartTable.style.display = 'table';

    // Xóa nội dung cũ
    tbody.innerHTML = '';

    // Thêm các sản phẩm vào bảng
    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.setAttribute('data-id', item.id.toString());
        row.setAttribute('data-code', item.code || '');

        row.innerHTML = `
            <td colspan="2">
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80?text=Sản+phẩm'">
                    </div>
                    <div class="cart-item-details">
                        <p class="cart-item-name">${item.name}</p>
                        <p class="cart-item-variant">${item.variant || 'Đang cập nhật thông tin...'}</p>
                    </div>
                </div>
            </td>
            <td class="cart-item-price">${formatPrice(item.price)}</td>
            <td>
                <div class="quantity-control">
                    <button class="quantity-btn decrease-btn">-</button>
                    <span class="quantity-input">${item.quantity}</span>
                    <button class="quantity-btn increase-btn">+</button>
                </div>
            </td>
            <td class="cart-item-price">${formatPrice(item.totalPrice)}</td>
            <td>
                <button class="delete-btn">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </td>
        `;

        tbody.appendChild(row);
    });

    console.log('Cart displayed:', cartItems.length, 'items');
}

// ==== HÀM MỚI: Hiển thị thông báo giỏ hàng trống ====
function showEmptyCartMessage() {
    const cartItemsContainer = document.querySelector('.cart-items');
    if (!cartItemsContainer) return;

    // Kiểm tra nếu đã có thông báo thì không thêm nữa
    if (document.querySelector('.cart-empty')) return;

    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'cart-empty';
    emptyDiv.id = 'cart-empty';
    emptyDiv.innerHTML = `
        <div class="cart-empty-icon">
            <span class="material-symbols-outlined">shopping_cart</span>
        </div>
        <h3 class="cart-empty-title">Giỏ hàng của bạn đang trống</h3>
        <p class="cart-empty-message">Hãy thêm sản phẩm từ cửa hàng để bắt đầu mua sắm</p>
        <a href="index.html" class="empty-cart-btn">
            Tiếp tục mua sắm
        </a>
    `;

    // Thêm vào container
    cartItemsContainer.prepend(emptyDiv);
}

// ==== HÀM XÓA SẢN PHẨM ====
function deleteCartItem(itemId) {
    const index = cartItems.findIndex(item => item.id === itemId);

    if (index !== -1) {
        const productCode = cartItems[index].code;

        // Xóa khỏi mảng
        cartItems.splice(index, 1);

        // Xóa khỏi DOM
        const row = document.querySelector(`tr[data-id="${itemId}"]`);
        if (row) {
            row.remove();
        }

        // Xóa khỏi localStorage
        removeFromLocalStorage(productCode);

        // Cập nhật lại data-id cho các row còn lại
        updateRowIds();

        // Cập nhật tổng tiền
        updateCartSummary();

        // Cập nhật số lượng trong header
        updateCartCountInHeader();

        // Hiển thị thông báo
        showNotification('Đã xóa sản phẩm khỏi giỏ hàng');

        // Nếu giỏ hàng trống, hiển thị thông báo
        if (cartItems.length === 0) {
            showEmptyCartMessage();
            // Ẩn bảng, hiển thị thông báo trống
            const cartTable = document.getElementById('cart-table');
            const cartEmpty = document.getElementById('cart-empty');
            if (cartTable) cartTable.style.display = 'none';
            if (cartEmpty) cartEmpty.style.display = 'block';
        }
    }
}

// ==== HÀM XÓA SẢN PHẨM KHỎI LOCALSTORAGE ====
function removeFromLocalStorage(productCode) {
    try {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart = cart.filter(item => item.code !== productCode);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Đã xóa sản phẩm khỏi localStorage:', productCode);
        return true;
    } catch (error) {
        console.error('Lỗi khi xóa khỏi localStorage:', error);
        return false;
    }
}

// ==== HÀM GIẢM SỐ LƯỢNG ====
function decreaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.price * item.quantity;

        updateItemQuantityInDOM(itemId, item.quantity);
        updateCartSummary();
        saveCartToLocalStorage();
        updateCartItemInLocalStorage(item.code, item.quantity);
        updateCartCountInHeader();

        showNotification('Đã giảm số lượng sản phẩm');
    } else if (item && item.quantity === 1) {
        if (confirm('Số lượng đang là 1. Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?')) {
            deleteCartItem(itemId);
        }
    }
}

// ==== HÀM TĂNG SỐ LƯỢNG ====
function increaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);

    if (item) {
        item.quantity += 1;
        item.totalPrice = item.price * item.quantity;

        updateItemQuantityInDOM(itemId, item.quantity);
        updateCartSummary();
        saveCartToLocalStorage();
        updateCartItemInLocalStorage(item.code, item.quantity);
        updateCartCountInHeader();

        showNotification('Đã tăng số lượng sản phẩm');
    }
}

// ==== HÀM CẬP NHẬT SỐ LƯỢNG TRONG LOCALSTORAGE ====
function updateCartItemInLocalStorage(productCode, newQuantity) {
    try {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const itemIndex = cart.findIndex(item => item.code === productCode);

        if (itemIndex !== -1) {
            if (newQuantity <= 0) {
                cart.splice(itemIndex, 1);
            } else {
                cart[itemIndex].quantity = newQuantity;
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Đã cập nhật số lượng trong localStorage:', productCode, '->', newQuantity);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Lỗi khi cập nhật localStorage:', error);
        return false;
    }
}

// ==== HÀM CẬP NHẬT SỐ LƯỢNG GIỎ HÀNG TRONG HEADER ====
function updateCartCountInHeader() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

        // Tính tổng giá trị
        const totalPrice = cart.reduce((sum, item) => {
            if (item.price) {
                const priceMatch = item.price.match(/(\d+(?:\.\d+)*)/);
                if (priceMatch) {
                    const priceNumber = parseFloat(priceMatch[0].replace(/\./g, ''));
                    return sum + (priceNumber * (item.quantity || 1));
                }
            }
            return sum;
        }, 0);

        // Cập nhật trong header
        const cartButton = document.querySelector('.header-button');
        if (cartButton) {
            const priceSpan = cartButton.querySelector('.font-medium');
            if (priceSpan) {
                priceSpan.textContent = `${totalPrice.toLocaleString('vi-VN')}đ`;
            }
        }
    } catch (error) {
        console.error('Lỗi khi cập nhật giỏ hàng trong header:', error);
    }
}

// ==== HÀM LƯU GIỎ HÀNG VÀO LOCALSTORAGE ====
function saveCartToLocalStorage() {
    try {
        // Chuyển cartItems sang định dạng giống product-detail
        const cartDataForStorage = cartItems.map(item => ({
            code: item.code || 'CART_' + item.id,
            name: item.name,
            price: formatPrice(item.price),
            image: item.image,
            quantity: item.quantity,
            variant: item.variant || '',
            hasDiscount: item.hasDiscount || false,
            discountPercentage: item.discountPercentage || 0,
            originalPrice: item.originalPrice || '',
            category: item.category || ''
        }));

        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cartDataForStorage));

        console.log('Cart saved to localStorage:', cartDataForStorage.length, 'items');
    } catch (error) {
        console.error('Lỗi khi lưu giỏ hàng:', error);
    }
}

// ==== HÀM LƯU DỮ LIỆU CHECKOUT ====
function saveCheckoutData() {
    try {
        // Tính toán lại tổng tiền
        const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discountAmount = discountPercentage > 0 ? subtotal * (discountPercentage / 100) : 0;
        const total = subtotal - discountAmount;

        // Tạo đối tượng checkout data
        const checkoutData = {
            cartItems: cartItems.map(item => ({
                id: item.id,
                code: item.code,
                name: item.name,
                variant: item.variant || '',
                price: item.price,
                formattedPrice: formatPrice(item.price),
                quantity: item.quantity,
                image: item.image,
                totalPrice: item.totalPrice,
                formattedTotalPrice: formatPrice(item.totalPrice),
                hasDiscount: item.hasDiscount || false,
                discountPercentage: item.discountPercentage || 0,
                originalPrice: item.originalPrice || ''
            })),

            paymentInfo: {
                subtotal: subtotal,
                formattedSubtotal: formatPrice(subtotal),
                discountCode: discountCode,
                discountPercentage: discountPercentage,
                discountAmount: discountAmount,
                formattedDiscountAmount: formatPrice(discountAmount),
                total: total,
                formattedTotal: formatPrice(total),
                shippingFee: 0,
                formattedShippingFee: formatPrice(0),
                finalTotal: total,
                formattedFinalTotal: formatPrice(total)
            },

            timestamp: new Date().toISOString(),
            orderNumber: 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000)
        };

        // Lưu vào localStorage với key riêng cho checkout
        localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

        console.log('Checkout data saved:', checkoutData);
        return true;
    } catch (error) {
        console.error('Lỗi khi lưu dữ liệu checkout:', error);
        return false;
    }
}

// ==== CÁC HÀM HỖ TRỢ ====
function parsePrice(priceText) {
    const cleanText = priceText.replace(/[₫.,\s]/g, '');
    return parseInt(cleanText) || 0;
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        minimumFractionDigits: 0
    }).format(price) + '₫';
}

function setupEventListeners() {
    // Sự kiện cho bảng giỏ hàng (delegation)
    document.addEventListener('click', function(event) {
        const target = event.target;

        // Xóa sản phẩm
        if (target.closest('.delete-btn')) {
            const row = target.closest('tr');
            const itemId = parseInt(row.getAttribute('data-id'));
            if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
                deleteCartItem(itemId);
            }
            event.preventDefault();
        }

        // Giảm số lượng
        if (target.closest('.decrease-btn')) {
            const row = target.closest('tr');
            const itemId = parseInt(row.getAttribute('data-id'));
            decreaseQuantity(itemId);
            event.preventDefault();
        }

        // Tăng số lượng
        if (target.closest('.increase-btn')) {
            const row = target.closest('tr');
            const itemId = parseInt(row.getAttribute('data-id'));
            increaseQuantity(itemId);
            event.preventDefault();
        }
    });

    // Áp dụng mã giảm giá
    const couponBtn = document.querySelector('.coupon-btn');
    if (couponBtn) {
        couponBtn.addEventListener('click', applyCouponHandler);
    }

    const couponInput = document.querySelector('.coupon-input');
    if (couponInput) {
        couponInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyCouponHandler();
            }
        });
    }

    // Thanh toán
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkoutHandler);
    }

    // Tiếp tục mua sắm
    const continueShoppingBtn = document.querySelector('.continue-shopping');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.jsp';
        });
    }

    // Nút tiếp tục mua sắm trong giỏ hàng trống
    document.addEventListener('click', function(e) {
        if (e.target.closest('.empty-cart-btn')) {
            e.preventDefault();
            window.location.href = 'index.jsp';
        }
    });
}

function updateRowIds() {
    const rows = document.querySelectorAll('.cart-table tbody tr');
    rows.forEach((row, index) => {
        row.setAttribute('data-id', (index + 1).toString());

        if (cartItems[index]) {
            cartItems[index].id = index + 1;
        }
    });
}

function updateItemQuantityInDOM(itemId, newQuantity) {
    const row = document.querySelector(`tr[data-id="${itemId}"]`);
    if (!row) return;

    const quantitySpan = row.querySelector('.quantity-input');
    if (quantitySpan) {
        quantitySpan.textContent = newQuantity;
    }

    const item = cartItems.find(item => item.id === itemId);
    if (item) {
        const totalPriceCell = row.querySelectorAll('.cart-item-price')[1];
        if (totalPriceCell) {
            totalPriceCell.textContent = formatPrice(item.totalPrice);
        }
    }
}

function updateCartSummary() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = discountPercentage > 0 ? subtotal * (discountPercentage / 100) : 0;
    const total = subtotal - discountAmount;

    const subtotalElement = document.querySelector('.summary-row:nth-child(1) span:last-child');
    const discountElement = document.querySelector('.summary-row:nth-child(2) span:last-child');
    const totalElement = document.querySelector('.summary-total span:last-child');
    const headerCartButton = document.querySelector('.header-button .font-medium');

    if (subtotalElement) subtotalElement.textContent = formatPrice(subtotal);
    if (discountElement) discountElement.textContent = `-${formatPrice(discountAmount)}`;
    if (totalElement) totalElement.textContent = formatPrice(total);
    if (headerCartButton) headerCartButton.textContent = formatPrice(total);

    console.log('Cart updated - Subtotal:', subtotal, 'Total:', total);
}

function applyCouponHandler() {
    const couponInput = document.querySelector('.coupon-input');
    if (!couponInput) return;

    const code = couponInput.value.trim().toUpperCase();

    if (!code) {
        showNotification('Vui lòng nhập mã giảm giá', 'error');
        return;
    }

    const validCoupons = {
        'SAVE10': 10,
        'SAVE20': 20,
        'XANHVIET15': 15,
        'WELCOME5': 5,
        'GREENDAY': 12
    };

    if (validCoupons[code]) {
        discountCode = code;
        discountPercentage = validCoupons[code];
        updateCartSummary();
        showNotification(`Đã áp dụng mã ${code} - Giảm ${discountPercentage}%`, 'success');
        saveCartToLocalStorage();
    } else {
        showNotification('Mã giảm giá không hợp lệ hoặc đã hết hạn', 'error');
        discountCode = null;
        discountPercentage = 0;
        updateCartSummary();
    }
}

function checkoutHandler() {
    if (cartItems.length === 0) {
        showNotification('Giỏ hàng của bạn đang trống', 'error');
        return;
    }

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = discountPercentage > 0 ? subtotal * (discountPercentage / 100) : 0;
    const finalTotal = subtotal - discountAmount;

    const orderDetails = `
        TÓM TẮT ĐƠN HÀNG:
        
        Số sản phẩm: ${cartItems.length}
        Tạm tính: ${formatPrice(subtotal)}
        Giảm giá: ${formatPrice(discountAmount)}
        Tổng cộng: ${formatPrice(finalTotal)}
        
        Bạn có muốn tiếp tục thanh toán?
    `;

    if (confirm(orderDetails)) {
        const saved = saveCheckoutData();

        if (saved) {
            showNotification('Đang chuyển hướng đến trang thanh toán...', 'info');

            setTimeout(() => {
                window.location.href = 'checkout.jsp';
            }, 1000);
        } else {
            showNotification('Có lỗi xảy ra khi lưu dữ liệu thanh toán!', 'error');
        }
    }
}

function showNotification(message, type = 'success') {
    const oldNotification = document.querySelector('.custom-notification');
    if (oldNotification) {
        oldNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;

    let icon = 'check_circle';
    if (type === 'error') icon = 'error';
    if (type === 'info') icon = 'info';

    notification.innerHTML = `
        <span class="material-symbols-outlined">${icon}</span>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-family: 'Plus Jakarta Sans', sans-serif;
    `;

    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

function addCartStyles() {
    if (document.querySelector('#cart-dynamic-styles')) return;

    const style = document.createElement('style');
    style.id = 'cart-dynamic-styles';
    style.textContent = `
        .quantity-btn {
            cursor: pointer;
            transition: background-color 0.2s;
            min-width: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .quantity-btn:hover {
            background-color: #e5e7eb;
        }
        
        .delete-btn {
            cursor: pointer;
            transition: color 0.2s;
            background: none;
            border: none;
            padding: 4px;
            border-radius: 4px;
        }
        
        .delete-btn:hover {
            color: #dc2626 !important;
            background-color: #fee2e2;
        }
        
        .coupon-btn {
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .coupon-btn:hover {
            background-color: #166534 !important;
            color: white !important;
        }
        
        .checkout-btn {
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
        }
        
        .checkout-btn:hover {
            background-color: #113222 !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .quantity-input {
            min-width: 40px;
            font-weight: 500;
            user-select: none;
        }
        
        .continue-shopping, .empty-cart-btn {
            transition: all 0.3s;
        }
        
        .continue-shopping:hover {
            color: #113222 !important;
        }
        
        .empty-cart-btn:hover {
            background-color: #113222 !important;
        }
        
        .custom-notification {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
    `;
    document.head.appendChild(style);
}

// ===== HÀM THÊM VÀO ĐỂ TEST (có thể xóa sau) =====
// Hàm này để test thêm sản phẩm vào giỏ từ console
window.addTestProduct = function() {
    const testProduct = {
        id: cartItems.length + 1,
        code: 'TEST_' + Date.now(),
        name: 'Cây kim ngân ba thân',
        variant: 'chậu sứ gấu BearBrick LONI040',
        price: 280000,
        quantity: 1,
        image: 'https://via.placeholder.com/80x80?text=Test+SP',
        totalPrice: 280000,
        hasDiscount: false
    };

    cartItems.push(testProduct);
    updateCartDisplay();
    updateCartSummary();
    saveCartToLocalStorage();
    updateCartCountInHeader();

    console.log('Đã thêm sản phẩm test vào giỏ hàng');
    showNotification('Đã thêm sản phẩm test vào giỏ hàng');
};

// Hàm xem trạng thái giỏ hàng
window.viewCartStatus = function() {
    console.log('Cart items:', cartItems);
    console.log('LocalStorage cart:', JSON.parse(localStorage.getItem('cart') || '[]'));
    console.log('Total items:', cartItems.length);
};