// cart-and-view.js

// ==================== KHỞI TẠO ====================

// Khởi tạo khi DOM được load
document.addEventListener('DOMContentLoaded', function() {
    initializeInteractions();
    setupInteractionListeners();

    // Khởi tạo giỏ hàng từ localStorage
    loadCartFromLocalStorage();

    // Khởi tạo số lượng yêu thích
    initializeFavorites();
});

// Khởi tạo các biến
function initializeInteractions() {
    // Các biến toàn cục
    window.cartItems = [];
    window.cartTotal = 0;
    window.favoriteCount = 0;
}

// Thiết lập event listeners
function setupInteractionListeners() {
    // Sử dụng event delegation cho các nút được tải động
    document.addEventListener('click', handleInteractionClick);

    // Thiết lập cho các nút view more hiện có
    setupViewMoreButtons();

    // Thiết lập infinite scroll
    setupInfiniteScroll();
}

// Xử lý click cho các tương tác
function handleInteractionClick(e) {
    // Xử lý nút "Thêm vào giỏ"
    if (e.target.classList.contains('add-to-cart')) {
        e.preventDefault();
        handleAddToCart(e.target);
    }

    // Xử lý nút "Xem nhanh"
    if (e.target.classList.contains('quick-view')) {
        e.preventDefault();
        handleQuickView(e.target);
    }

    // Xử lý nút "Yêu thích"
    if (e.target.classList.contains('favorite-button')) {
        e.preventDefault();
        handleFavorite(e.target);
    }

    // Xử lý nút "Xem thêm"
    if (e.target.classList.contains('view-more-button') ||
        (e.target.id && e.target.id.startsWith('view-more-'))) {
        e.preventDefault();
        handleViewMore(e.target);
    }
}

// ==================== CHỨC NĂNG THÊM VÀO GIỎ (PHẦN QUAN TRỌNG) ====================

function handleAddToCart(button) {
    const productItem = button.closest('.product-item');
    const productData = getProductDataFromDOM(productItem);

    if (productData) {
        // SỬA: Dùng hàm mới để thêm vào giỏ (đồng bộ với cart.js)
        addProductToCartNew(productData);
        showNotification(`Đã thêm "${productData.name}" vào giỏ hàng - ${productData.price}`);
    }
}

function getProductDataFromDOM(productItem) {
    if (!productItem) return null;

    const name = productItem.querySelector('.product-name')?.textContent || '';
    const code = productItem.querySelector('.product-code')?.textContent || '';

    // Lấy giá từ DOM (giữ nguyên chuỗi VND)
    let priceElement = productItem.querySelector('.product-price');
    let priceText = priceElement?.textContent || '';

    // Lấy ảnh
    const imageElement = productItem.querySelector('.product-image');
    const image = imageElement?.src || '';

    // Lấy thông tin giảm giá nếu có
    let hasDiscount = false;
    let discountPercentage = 0;
    const discountBadge = productItem.querySelector('.discount-badge');
    if (discountBadge && discountBadge.textContent) {
        const discountMatch = discountBadge.textContent.match(/-(\d+)%/);
        if (discountMatch) {
            discountPercentage = parseInt(discountMatch[1]);
            hasDiscount = true;
        }
    }

    // Lấy giá gốc nếu có
    let originalPrice = '';
    const originalPriceElement = productItem.querySelector('.original-price');
    if (originalPriceElement) {
        originalPrice = originalPriceElement.textContent.trim();
    }

    // Trả về đúng định dạng để đồng bộ với cart.js
    return {
        id: code || generateProductId(),
        code: code,
        name: name,
        price: priceText, // GIỮ NGUYÊN CHUỖI VND
        image: image,
        variant: '', // Trang chủ không có variant
        quantity: 1,
        hasDiscount: hasDiscount,
        discountPercentage: discountPercentage,
        originalPrice: originalPrice
    };
}

function generateProductId() {
    return 'prod_' + Math.random().toString(36).substr(2, 9);
}

// SỬA: Hàm mới để thêm vào giỏ hàng (đồng bộ với cart.js)
function addProductToCartNew(productData) {
    try {
        // Lấy giỏ hàng hiện tại từ localStorage (dùng key 'cart' giống cart.js)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Kiểm tra sản phẩm đã có trong giỏ chưa (dùng code để kiểm tra)
        const existingItemIndex = cart.findIndex(item => item.code === productData.code);

        if (existingItemIndex > -1) {
            // Tăng số lượng nếu đã có
            cart[existingItemIndex].quantity += 1;
        } else {
            // Thêm mới với đúng định dạng
            cart.push({
                id: productData.id,
                code: productData.code,
                name: productData.name,
                price: productData.price, // Chuỗi VND
                image: productData.image,
                variant: productData.variant || '',
                quantity: 1,
                hasDiscount: productData.hasDiscount || false,
                discountPercentage: productData.discountPercentage || 0,
                originalPrice: productData.originalPrice || ''
            });
        }

        // Lưu vào localStorage với key 'cart' (giống cart.js)
        localStorage.setItem('cart', JSON.stringify(cart));

        // Cập nhật hiển thị giỏ hàng
        updateCartDisplayNew();

        // Hiệu ứng visual
        const productItem = document.querySelector(`[data-product-code="${productData.code}"]`) ||
            document.querySelector('.product-item');
        if (productItem) {
            productItem.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                productItem.style.animation = '';
            }, 500);
        }

        console.log('Product added to cart (new method):', productData);
        console.log('Current cart:', cart);

        return true;

    } catch (error) {
        console.error('Error adding to cart:', error);
        showNotification('Có lỗi xảy ra khi thêm vào giỏ hàng', 'error');
        return false;
    }
}

// Hàm mới để cập nhật hiển thị giỏ hàng
function updateCartDisplayNew() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Tính tổng số lượng
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

        // Tính tổng tiền
        let totalAmount = 0;
        cart.forEach(item => {
            if (item.price) {
                // Chuyển đổi chuỗi VND sang số
                const priceMatch = item.price.match(/([\d.,]+)/);
                if (priceMatch) {
                    const priceStr = priceMatch[1].replace(/\./g, '');
                    const price = parseFloat(priceStr) || 0;
                    totalAmount += price * (item.quantity || 1);
                }
            }
        });

        // Cập nhật số lượng trong badge
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
            cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
        }

        // Cập nhật tổng tiền trong header
        const cartTotalElement = document.getElementById('cart-total');
        if (cartTotalElement) {
            cartTotalElement.textContent = formatPriceNew(totalAmount);
        }

        // Cập nhật nút giỏ hàng
        const cartButton = document.getElementById('cart-button');
        if (cartButton) {
            const spanElements = cartButton.querySelectorAll('span');
            if (spanElements.length >= 2) {
                // Cập nhật tổng tiền (phần tử đầu tiên)
                spanElements[0].textContent = formatPriceNew(totalAmount);
            }
        }

    } catch (error) {
        console.error('Error updating cart display:', error);
    }
}

// SỬA: Hàm định dạng giá mới
function formatPriceNew(price) {
    return new Intl.NumberFormat('vi-VN', {
        minimumFractionDigits: 0
    }).format(price) + 'đ';
}

// SỬA: Hàm tải giỏ hàng từ localStorage (dùng cho trang chủ)
function loadCartFromLocalStorage() {
    try {
        updateCartDisplayNew();
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
    }
}

// ==================== CHỨC NĂNG XEM NHANH ====================

function handleQuickView(button) {
    const productItem = button.closest('.product-item');
    const productData = getProductDataFromDOM(productItem);

    if (productData) {
        showQuickViewModal(productData);
    }
}

function showQuickViewModal(productData) {
    // Kiểm tra modal đã tồn tại chưa
    const existingModal = document.getElementById('quick-view-modal');
    if (existingModal) {
        document.body.removeChild(existingModal);
    }

    // Tạo modal
    const modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 0.75rem; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; font-family: 'Plus Jakarta Sans', sans-serif;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--primary-green);">Xem Nhanh</h3>
                <button id="close-quick-view-modal" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;">×</button>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <img src="${productData.image}" alt="${productData.name}" style="width: 100%; border-radius: 0.5rem; max-height: 250px; object-fit: cover; background-color: #f3f4f6;">
                </div>
                <div>
                    <h4 style="font-size: 1rem; font-weight: 500; margin-bottom: 0.5rem;">${productData.name}</h4>
                    <p style="color: var(--price-green); font-weight: bold; font-size: 1.25rem; margin-bottom: 1rem;">${productData.price}</p>
                    ${productData.code ? `<p style="color: var(--gray-500); font-size: 0.875rem; margin-bottom: 1rem;">Mã: ${productData.code}</p>` : ''}
                    ${productData.hasDiscount ? `<p style="color: #666; font-size: 0.875rem; margin-bottom: 0.5rem;">Giảm: ${productData.discountPercentage}%</p>` : ''}
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button class="modal-add-to-cart" style="flex: 1; background: var(--primary-green); color: white; border: none; padding: 0.75rem; border-radius: 0.375rem; cursor: pointer; font-family: inherit;">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Xử lý nút đóng modal
    document.getElementById('close-quick-view-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    // Xử lý nút thêm vào giỏ trong modal
    modal.querySelector('.modal-add-to-cart').addEventListener('click', () => {
        addProductToCartNew(productData);
        showNotification(`Đã thêm "${productData.name}" vào giỏ hàng - ${productData.price}`);
        document.body.removeChild(modal);
    });

    // Đóng modal khi click bên ngoài
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// ==================== CHỨC NĂNG YÊU THÍCH ====================

function handleFavorite(button) {
    const isActive = button.classList.contains('active');
    const productItem = button.closest('.product-item');
    const productName = productItem.querySelector('.product-name')?.textContent || '';

    if (isActive) {
        button.classList.remove('active');
        favoriteCount--;
        showNotification(`Đã xóa "${productName}" khỏi danh sách yêu thích`);
    } else {
        button.classList.add('active');
        favoriteCount++;
        showNotification(`Đã thêm "${productName}" vào danh sách yêu thích`);
    }

    updateFavoriteCount();

    // Lưu vào localStorage
    saveFavoritesToLocalStorage();
}

function updateFavoriteCount() {
    const favoriteCountElement = document.querySelector('.favorite-count');
    if (favoriteCountElement) {
        favoriteCountElement.textContent = favoriteCount;
    }
}

function saveFavoritesToLocalStorage() {
    try {
        // Lấy tất cả sản phẩm yêu thích
        const favoriteProducts = [];
        document.querySelectorAll('.favorite-button.active').forEach(button => {
            const productItem = button.closest('.product-item');
            const productData = getProductDataFromDOM(productItem);
            if (productData) {
                favoriteProducts.push(productData);
            }
        });

        localStorage.setItem('favorites', JSON.stringify(favoriteProducts));
    } catch (error) {
        console.error('Error saving favorites:', error);
    }
}

function loadFavoritesFromLocalStorage() {
    try {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favoriteCount = savedFavorites.length;
        updateFavoriteCount();
    } catch (error) {
        console.error('Error loading favorites:', error);
    }
}

function initializeFavorites() {
    loadFavoritesFromLocalStorage();

    // Khởi tạo số lượng yêu thích từ các nút đang active
    const activeFavorites = document.querySelectorAll('.favorite-button.active');
    favoriteCount = activeFavorites.length;
    updateFavoriteCount();
}

// ==================== CHỨC NĂNG XEM THÊM ====================

function setupViewMoreButtons() {
    const viewMoreButtons = {
        'new': document.getElementById('view-more-new'),
        'desktop': document.getElementById('view-more-desktop'),
        'office': document.getElementById('view-more-office'),
        'cement': document.getElementById('view-more-cement'),
        'ceramic': document.getElementById('view-more-ceramic')
    };

    Object.keys(viewMoreButtons).forEach(category => {
        const button = viewMoreButtons[category];
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                loadMoreProducts(category, button);
            });
        }
    });
}

function handleViewMore(button) {
    let category = '';

    if (button.classList.contains('view-more-button')) {
        category = button.dataset.category;
    } else if (button.id && button.id.startsWith('view-more-')) {
        category = button.id.replace('view-more-', '');
    }

    if (category) {
        loadMoreProducts(category, button);
    }
}

let isLoading = false;

function loadMoreProducts(category, button) {
    if (isLoading) return;

    isLoading = true;

    const loadingId = `loading-${category}`;
    const loading = document.getElementById(loadingId);

    // Hiển thị loading
    if (loading) loading.style.display = 'block';
    if (button) button.style.display = 'none';

    // Giả lập API call
    setTimeout(() => {
        const section = button ? button.closest('.section') : document.querySelector(`#${category}-section`);
        const hiddenProducts = section ? section.querySelector('.hidden-products') : null;

        if (hiddenProducts) {
            hiddenProducts.style.display = 'block';

            // Ẩn nút nếu không còn sản phẩm
            if (button) {
                button.style.display = 'none';
            }

            showNotification('Đã tải thêm sản phẩm');
        }

        // Ẩn loading
        if (loading) loading.style.display = 'none';
        isLoading = false;
    }, 1000);
}

// ==================== INFINITE SCROLL ====================

function setupInfiniteScroll() {
    window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
    if (isLoading) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // Tải thêm khi cách đáy 20%
    if (scrollPosition > pageHeight * 0.8) {
        const categories = ['new', 'desktop', 'office', 'cement', 'ceramic'];

        for (const category of categories) {
            const button = document.getElementById(`view-more-${category}`);
            if (button && button.style.display !== 'none') {
                isLoading = true;
                loadMoreProducts(category, button);
                break;
            }
        }
    }
}

// ==================== THÔNG BÁO ====================

function showNotification(message, type = 'success') {
    // Kiểm tra notification đã tồn tại chưa
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
        document.body.removeChild(existingNotification);
    }

    // Tạo notification
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.textContent = message;

    // Thiết lập style dựa trên type
    let bgColor = 'var(--primary-green)';
    if (type === 'error') bgColor = '#ef4444';
    if (type === 'warning') bgColor = '#f59e0b';

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${bgColor};
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: transform 0.3s, opacity 0.3s;
        transform: translateX(100%);
        opacity: 0;
        max-width: 300px;
        word-wrap: break-word;
        font-size: 14px;
        font-family: 'Plus Jakarta Sans', sans-serif;
    `;

    document.body.appendChild(notification);

    // Hiển thị
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 10);

    // Tự động ẩn sau 3 giây
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';

        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ==================== THÊM STYLE TỰ ĐỘNG ====================

// Tự động thêm style khi trang load
(function addCartAndViewStyles() {
    if (document.querySelector('#cart-view-styles')) return;

    const style = document.createElement('style');
    style.id = 'cart-view-styles';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
        
        @keyframes modalFadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Style cho biểu tượng giỏ hàng */
        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: #dc2626;
            color: white;
            font-size: 0.75rem;
            font-weight: bold;
            min-width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px;
        }
        
        /* Hiệu ứng cho nút thêm vào giỏ */
        .add-to-cart {
            transition: all 0.3s ease;
        }
        
        .add-to-cart:hover {
            background-color: var(--hover-green) !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        /* Style cho modal xem nhanh */
        #quick-view-modal {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        #quick-view-modal > div {
            animation: modalFadeIn 0.3s ease-out;
        }
        
        /* Hiệu ứng cho nút yêu thích */
        .favorite-button {
            transition: all 0.3s ease;
        }
        
        .favorite-button.active {
            color: #ef4444;
        }
        
        .favorite-button.active .material-symbols-outlined {
            font-variation-settings: 'FILL' 1;
        }
    `;
    document.head.appendChild(style);
})();

// ==================== KHỞI ĐỘNG TOÀN BỘ ====================

console.log('Cart and view system initialized successfully');