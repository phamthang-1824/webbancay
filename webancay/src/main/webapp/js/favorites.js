// favorites.js - Quản lý danh sách sản phẩm yêu thích

// Lưu trữ danh sách yêu thích trong localStorage
const FAVORITES_KEY = 'favorite_products';

class FavoritesSystem {
    constructor() {
        this.favorites = new Set();
        this.init();
    }

    async init() {
        // Tải danh sách yêu thích từ localStorage
        this.loadFavorites();

        // Cập nhật số lượng yêu thích trên header
        this.updateFavoriteCount();

        // Khởi tạo nút yêu thích trên trang chủ
        this.initializeFavoriteButtons();

        // Khởi tạo trang favorites.jsp nếu đang ở trang đó
        if (window.location.pathname.includes('favorites.jsp')) {
            this.initFavoritesPage();
        }
    }

    loadFavorites() {
        const savedFavorites = localStorage.getItem(FAVORITES_KEY);
        if (savedFavorites) {
            try {
                this.favorites = new Set(JSON.parse(savedFavorites));
            } catch (e) {
                this.favorites = new Set();
                console.error('Lỗi khi tải danh sách yêu thích:', e);
            }
        }
    }

    saveFavorites() {
        try {
            localStorage.setItem(FAVORITES_KEY, JSON.stringify([...this.favorites]));
        } catch (e) {
            console.error('Lỗi khi lưu danh sách yêu thích:', e);
        }
    }

    initializeFavoriteButtons() {
        // Khởi tạo tất cả nút yêu thích trên trang
        document.querySelectorAll('.favorite-button').forEach(button => {
            this.setupFavoriteButton(button);
        });
    }

    setupFavoriteButton(button) {
        // Nếu đã có sự kiện, bỏ qua
        if (button.dataset.favoriteInitialized === 'true') return;

        // Tìm productId từ các phần tử xung quanh
        const productItem = button.closest('.product-item');
        if (!productItem) return;

        // Tìm ID sản phẩm từ các nguồn khác nhau
        let productId = null;

        // Thử tìm từ link sản phẩm
        const productLink = productItem.querySelector('a[href*="product-detail.jsp?id="]');
        if (productLink && productLink.href) {
            const match = productLink.href.match(/id=([^&]+)/);
            if (match) productId = match[1];
        }

        // Thử tìm từ mã sản phẩm
        if (!productId) {
            const productCode = productItem.querySelector('.product-code');
            if (productCode) productId = productCode.textContent.trim();
        }

        // Thử tìm từ data attribute
        if (!productId) {
            productId = productItem.dataset.productId || button.dataset.productId;
        }

        if (!productId) return;

        // Lưu productId vào button
        button.dataset.productId = productId;
        button.dataset.favoriteInitialized = 'true';

        // Cập nhật trạng thái ban đầu
        this.updateFavoriteButtonState(button);

        // Thêm sự kiện click
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleFavorite(productId, button);
        });
    }

    updateFavoriteButtonState(button) {
        const productId = button.dataset.productId;
        if (!productId) return;

        if (this.favorites.has(productId)) {
            button.classList.add('active');
            const icon = button.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.fontVariationSettings = "'FILL' 1";
                icon.style.color = '#ef4444';
            }
        } else {
            button.classList.remove('active');
            const icon = button.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.fontVariationSettings = "'FILL' 0";
                icon.style.color = '';
            }
        }
    }

    toggleFavorite(productId, button = null) {
        if (this.favorites.has(productId)) {
            this.removeFromFavorites(productId, button);
        } else {
            this.addToFavorites(productId, button);
        }

        this.saveFavorites();
        this.updateFavoriteCount();

        // Cập nhật tất cả các nút cho cùng sản phẩm
        this.updateAllFavoriteButtonsForProduct(productId);

        // Nếu đang ở trang favorites, làm mới danh sách
        if (window.location.pathname.includes('favorites.jsp')) {
            this.displayFavorites();
        }
    }

    addToFavorites(productId, button = null) {
        this.favorites.add(productId);
        if (button) {
            button.classList.add('active');
            const icon = button.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.fontVariationSettings = "'FILL' 1";
                icon.style.color = '#ef4444';
            }
        }

        // Hiệu ứng thông báo
        this.showFavoriteNotification('Đã thêm vào yêu thích ❤️');
    }

    removeFromFavorites(productId, button = null) {
        this.favorites.delete(productId);
        if (button) {
            button.classList.remove('active');
            const icon = button.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.fontVariationSettings = "'FILL' 0";
                icon.style.color = '';
            }
        }

        // Hiệu ứng thông báo
        this.showFavoriteNotification('Đã xóa khỏi yêu thích 💔');
    }

    updateAllFavoriteButtonsForProduct(productId) {
        document.querySelectorAll(`.favorite-button[data-product-id="${productId}"]`).forEach(button => {
            this.updateFavoriteButtonState(button);
        });
    }

    updateFavoriteCount() {
        const favoriteCountElement = document.querySelector('.favorite-count');
        if (favoriteCountElement) {
            favoriteCountElement.textContent = this.favorites.size;

            // Ẩn số 0
            if (this.favorites.size === 0) {
                favoriteCountElement.style.display = 'none';
            } else {
                favoriteCountElement.style.display = 'flex';
            }
        }
    }

    showFavoriteNotification(message) {
        // Tạo thông báo tạm thời
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--primary-green);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
            max-width: 300px;
        `;

        notification.innerHTML = `
            <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1">
                favorite
            </span>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        // Tự động xóa sau 3 giây
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);

        // Thêm CSS animation nếu chưa có
        if (!document.querySelector('#favorite-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'favorite-notification-styles';
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
    }

    // Khởi tạo trang favorites.jsp
    initFavoritesPage() {
        // Cập nhật số lượng yêu thích
        this.updateFavoriteCount();

        // Hiển thị danh sách yêu thích
        this.displayFavorites();

        // Thiết lập sự kiện cho nút xóa tất cả
        const clearButton = document.getElementById('clear-favorites');
        if (clearButton) {
            clearButton.addEventListener('click', () => this.clearAllFavorites());
        }
    }

    // Hiển thị danh sách sản phẩm yêu thích trên trang favorites.jsp
    displayFavorites() {
        const favoritesGrid = document.getElementById('favorites-grid');
        const emptyState = document.getElementById('empty-favorites');

        if (!favoritesGrid || !emptyState) return;

        // Xóa nội dung hiện tại
        favoritesGrid.innerHTML = '';

        // Kiểm tra nếu không có sản phẩm yêu thích
        if (this.favorites.size === 0) {
            emptyState.style.display = 'block';
            favoritesGrid.style.display = 'none';
            return;
        }

        // Hiển thị sản phẩm yêu thích
        emptyState.style.display = 'none';
        favoritesGrid.style.display = 'grid';

        this.favorites.forEach(productCode => {
            const product = window.getProductByCode?.(productCode);

            if (product) {
                const favoriteItem = this.createFavoriteItemHTML(product);
                favoritesGrid.appendChild(favoriteItem);
            }
        });
    }

    // Tạo HTML cho một mục sản phẩm yêu thích
    createFavoriteItemHTML(product) {
        const div = document.createElement('div');
        div.className = 'favorites-item';
        div.dataset.productCode = product.code;

        // Tạo HTML cho sản phẩm
        let discountBadge = '';
        let originalPrice = '';

        if (product.hasDiscount && product.discountPercentage > 0) {
            discountBadge = `<div class="discount-badge">-${product.discountPercentage}%</div>`;
        }

        if (product.originalPrice && product.originalPrice !== '') {
            originalPrice = `<span class="original-price">${product.originalPrice}</span>`;
        }

        // Xác định đường dẫn hình ảnh - sử dụng hình ảnh chính hoặc hình đầu tiên trong thumbnailImages
        let productImage = product.image || 'images/products/default.jpg';
        if (product.thumbnailImages && product.thumbnailImages.length > 0) {
            productImage = product.thumbnailImages[0];
        }

        // Xác định link chi tiết sản phẩm
        const productDetailLink = `product-detail.html?id=${product.code}${product.section ? `&section=${product.section}` : ''}`;

        div.innerHTML = `
            <button class="favorite-remove" data-product-code="${product.code}">
                <span class="material-symbols-outlined">close</span>
            </button>
            
            <a href="${productDetailLink}" class="favorites-image-link">
                <div class="favorites-image-container">
                    ${discountBadge}
                    <img src="${productImage}" alt="${product.name}" class="favorites-image" loading="lazy">
                </div>
            </a>
            
            <div class="favorites-info">
                <a href="${productDetailLink}" class="favorites-name-link">
                    <h3 class="favorites-name">${product.name}</h3>
                </a>
                <div class="favorites-code">Mã: ${product.code}</div>
                
                <div class="price-container">
                    <span class="favorites-price">${product.price}</span>
                    ${originalPrice}
                </div>
                
                <div class="favorites-actions-row">
                    <button class="action-button add-to-cart" data-product-code="${product.code}">
                        <span class="material-symbols-outlined" style="margin-right: 4px;">shopping_cart</span>
                        Thêm vào giỏ
                    </button>
                    <a href="${productDetailLink}" class="action-button buy-now">
                        <span class="material-symbols-outlined" style="margin-right: 4px;">bolt</span>
                        Mua ngay
                    </a>
                </div>
            </div>
        `;

        // Thêm sự kiện cho nút xóa
        const removeButton = div.querySelector('.favorite-remove');
        if (removeButton) {
            removeButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.removeFromFavorites(product.code);
                this.saveFavorites();
                this.updateFavoriteCount();
                this.displayFavorites();
            });
        }

        // Thêm sự kiện cho nút thêm vào giỏ
        const addToCartButton = div.querySelector('.add-to-cart');
        if (addToCartButton) {
            addToCartButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                // Gọi hàm thêm vào giỏ hàng nếu có
                if (window.addToCart) {
                    window.addToCart(product.code, 1);
                } else {
                    console.log('Thêm vào giỏ hàng:', product.code);
                    this.showFavoriteNotification('Đã thêm vào giỏ hàng 🛒');
                }
            });
        }

        return div;
    }

    // Xóa tất cả sản phẩm yêu thích
    clearAllFavorites() {
        if (this.favorites.size === 0) {
            alert('Danh sách yêu thích của bạn đang trống!');
            return;
        }

        if (confirm('Bạn có chắc chắn muốn xóa tất cả sản phẩm yêu thích không?')) {
            this.favorites.clear();
            this.saveFavorites();
            this.updateFavoriteCount();
            this.displayFavorites();

            // Cập nhật tất cả nút yêu thích trên các trang khác
            document.querySelectorAll('.favorite-button').forEach(button => {
                this.updateFavoriteButtonState(button);
            });

            this.showFavoriteNotification('Đã xóa tất cả sản phẩm yêu thích 💔');
        }
    }

    // Hàm công khai để kiểm tra xem sản phẩm có trong yêu thích không
    isFavorite(productId) {
        return this.favorites.has(productId);
    }

    // Hàm công khai để thêm sản phẩm vào yêu thích
    addFavorite(productId) {
        this.addToFavorites(productId);
        this.saveFavorites();
        this.updateFavoriteCount();
        this.updateAllFavoriteButtonsForProduct(productId);
    }

    // Hàm công khai để xóa sản phẩm khỏi yêu thích
    removeFavorite(productId) {
        this.removeFromFavorites(productId);
        this.saveFavorites();
        this.updateFavoriteCount();
        this.updateAllFavoriteButtonsForProduct(productId);
    }
}

// Khởi tạo hệ thống yêu thích khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
    window.favoritesSystem = new FavoritesSystem();
});