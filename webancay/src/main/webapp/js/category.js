// category.js - JavaScript cho trang danh mục sản phẩm

document.addEventListener('DOMContentLoaded', function() {
    // ========== 1. XỬ LÝ THANH TRƯỢT GIÁ ==========
    const priceSlider = document.querySelector('.price-slider');
    const priceFill = document.querySelector('.price-slider-fill');
    const leftHandle = document.querySelector('.price-slider-handle.left');
    const rightHandle = document.querySelector('.price-slider-handle.right');
    const priceRangeText = document.querySelector('.price-range .font-semibold');
    const filterButton = document.querySelector('.filter-button');

    // Giá trị mặc định
    let minPrice = 100000;
    let maxPrice = 6250000;
    let leftPos = 0; // 0-100%
    let rightPos = 100; // 0-100%
    let isDraggingLeft = false;
    let isDraggingRight = false;

    // Khởi tạo thanh trượt
    function initPriceSlider() {
        if (!priceSlider) return;

        // Cập nhật vị trí ban đầu
        updateSliderUI();
        updatePriceText();

        // Sự kiện cho thanh trượt trái
        leftHandle.addEventListener('mousedown', startDragLeft);
        leftHandle.addEventListener('touchstart', startDragLeftTouch);

        // Sự kiện cho thanh trượt phải
        rightHandle.addEventListener('mousedown', startDragRight);
        rightHandle.addEventListener('touchstart', startDragRightTouch);

        // Sự kiện lọc giá
        if (filterButton) {
            filterButton.addEventListener('click', filterByPrice);
        }

        // Ngăn chặn chọn văn bản khi kéo
        document.addEventListener('selectstart', function(e) {
            if (isDraggingLeft || isDraggingRight) {
                e.preventDefault();
            }
        });
    }

    function startDragLeft(e) {
        e.preventDefault();
        isDraggingLeft = true;
        document.addEventListener('mousemove', dragLeft);
        document.addEventListener('mouseup', stopDragLeft);
    }

    function startDragLeftTouch(e) {
        e.preventDefault();
        isDraggingLeft = true;
        document.addEventListener('touchmove', dragLeftTouch);
        document.addEventListener('touchend', stopDragLeft);
    }

    function dragLeft(e) {
        if (!isDraggingLeft) return;
        const rect = priceSlider.getBoundingClientRect();
        let x = ((e.clientX - rect.left) / rect.width) * 100;
        x = Math.max(0, Math.min(x, rightPos - 5));
        leftPos = x;
        updateSliderUI();
        updatePriceText();
    }

    function dragLeftTouch(e) {
        if (!isDraggingLeft) return;
        const rect = priceSlider.getBoundingClientRect();
        let x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        x = Math.max(0, Math.min(x, rightPos - 5));
        leftPos = x;
        updateSliderUI();
        updatePriceText();
    }

    function stopDragLeft() {
        isDraggingLeft = false;
        document.removeEventListener('mousemove', dragLeft);
        document.removeEventListener('touchmove', dragLeftTouch);
        document.removeEventListener('mouseup', stopDragLeft);
        document.removeEventListener('touchend', stopDragLeft);
    }

    function startDragRight(e) {
        e.preventDefault();
        isDraggingRight = true;
        document.addEventListener('mousemove', dragRight);
        document.addEventListener('mouseup', stopDragRight);
    }

    function startDragRightTouch(e) {
        e.preventDefault();
        isDraggingRight = true;
        document.addEventListener('touchmove', dragRightTouch);
        document.addEventListener('touchend', stopDragRight);
    }

    function dragRight(e) {
        if (!isDraggingRight) return;
        const rect = priceSlider.getBoundingClientRect();
        let x = ((e.clientX - rect.left) / rect.width) * 100;
        x = Math.min(100, Math.max(x, leftPos + 5));
        rightPos = x;
        updateSliderUI();
        updatePriceText();
    }

    function dragRightTouch(e) {
        if (!isDraggingRight) return;
        const rect = priceSlider.getBoundingClientRect();
        let x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        x = Math.min(100, Math.max(x, leftPos + 5));
        rightPos = x;
        updateSliderUI();
        updatePriceText();
    }

    function stopDragRight() {
        isDraggingRight = false;
        document.removeEventListener('mousemove', dragRight);
        document.removeEventListener('touchmove', dragRightTouch);
        document.removeEventListener('mouseup', stopDragRight);
        document.removeEventListener('touchend', stopDragRight);
    }

    function updateSliderUI() {
        if (!priceFill || !leftHandle || !rightHandle) return;

        priceFill.style.left = leftPos + '%';
        priceFill.style.width = (rightPos - leftPos) + '%';
        leftHandle.style.left = leftPos + '%';
        rightHandle.style.left = rightPos + '%';
    }

    function updatePriceText() {
        if (!priceRangeText) return;

        const currentMin = Math.round(minPrice + (maxPrice - minPrice) * (leftPos / 100));
        const currentMax = Math.round(minPrice + (maxPrice - minPrice) * (rightPos / 100));

        priceRangeText.textContent = formatCurrency(currentMin) + ' — ' + formatCurrency(currentMax);
    }

    function filterByPrice() {
        const currentMin = Math.round(minPrice + (maxPrice - minPrice) * (leftPos / 100));
        const currentMax = Math.round(minPrice + (maxPrice - minPrice) * (rightPos / 100));

        const allProducts = document.querySelectorAll('.product-card');
        let visibleCount = 0;

        allProducts.forEach(product => {
            const priceText = product.querySelector('.product-price');
            if (!priceText) return;

            const price = extractPrice(priceText.textContent);

            if (price >= currentMin && price <= currentMax) {
                product.style.display = 'block';
                visibleCount++;
            } else {
                product.style.display = 'none';
            }
        });

        updateResultsCount();
        showNotification(`Đã lọc ${visibleCount} sản phẩm trong khoảng giá ${formatCurrency(currentMin)} - ${formatCurrency(currentMax)}`);
    }

    // ========== 2. XỬ LÝ TÌM KIẾM SẢN PHẨM ==========
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-box .search-button');

    function initSearch() {
        if (!searchInput || !searchButton) return;

        searchButton.addEventListener('click', performSearch);

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Xử lý xóa tìm kiếm
        searchInput.addEventListener('input', function() {
            if (this.value === '') {
                resetSearch();
            }
        });
    }

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (!searchTerm) {
            resetSearch();
            return;
        }

        const allProducts = document.querySelectorAll('.product-card');
        let foundCount = 0;

        allProducts.forEach(product => {
            const productName = product.querySelector('.product-name').textContent.toLowerCase();
            const productVariant = product.querySelector('.product-variant') ?
                product.querySelector('.product-variant').textContent.toLowerCase() : '';

            const fullText = productName + ' ' + productVariant;

            if (fullText.includes(searchTerm)) {
                product.style.display = 'block';
                foundCount++;
                highlightSearchTerm(product, searchTerm);
            } else {
                product.style.display = 'none';
                removeHighlight(product);
            }
        });

        updateResultsCount();

        if (foundCount > 0) {
            showNotification(`Tìm thấy ${foundCount} sản phẩm phù hợp với "${searchTerm}"`);
        } else {
            showNotification(`Không tìm thấy sản phẩm nào phù hợp với "${searchTerm}"`, 'warning');
            resetSearch();
        }
    }

    function highlightSearchTerm(product, searchTerm) {
        const productName = product.querySelector('.product-name');
        const nameText = productName.textContent;
        const regex = new RegExp(`(${searchTerm})`, 'gi');

        if (nameText.toLowerCase().includes(searchTerm)) {
            const highlighted = nameText.replace(regex, '<span class="search-highlight">$1</span>');
            productName.innerHTML = highlighted;
        }
    }

    function removeHighlight(product) {
        const productName = product.querySelector('.product-name');
        if (productName.innerHTML.includes('<span class="search-highlight">')) {
            productName.innerHTML = productName.textContent;
        }
    }

    function resetSearch() {
        const allProducts = document.querySelectorAll('.product-card');
        allProducts.forEach(product => {
            product.style.display = 'block';
            removeHighlight(product);
        });
        updateResultsCount();
    }

    // ========== 3. XỬ LÝ SẮP XẾP SẢN PHẨM ==========
    const sortSelect = document.querySelector('.sort-select');

    function initSorting() {
        if (!sortSelect) return;

        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }

    function sortProducts(sortBy) {
        const productsGrid = document.querySelector('.products-grid');
        const products = Array.from(document.querySelectorAll('.product-card'));

        const visibleProducts = products.filter(p => p.style.display !== 'none');

        if (visibleProducts.length === 0) return;

        visibleProducts.sort((a, b) => {
            const priceA = extractPrice(a.querySelector('.product-price').textContent);
            const priceB = extractPrice(b.querySelector('.product-price').textContent);

            switch(sortBy) {
                case 'popularity':
                    const discountA = a.querySelector('.discount-badge') ? parseInt(a.querySelector('.discount-badge').textContent.replace(/[^\d]/g, '')) : 0;
                    const discountB = b.querySelector('.discount-badge') ? parseInt(b.querySelector('.discount-badge').textContent.replace(/[^\d]/g, '')) : 0;
                    return discountB - discountA;

                case 'rating':
                    const hasVariantA = a.querySelector('.product-variant') ? 1 : 0;
                    const hasVariantB = b.querySelector('.product-variant') ? 1 : 0;
                    return hasVariantB - hasVariantA;

                case 'latest':
                    return 0;

                case 'price-low':
                    return priceA - priceB;

                case 'price-high':
                    return priceB - priceA;

                default:
                    return 0;
            }
        });

        visibleProducts.forEach(product => {
            productsGrid.appendChild(product);
        });

        showNotification(`Đã sắp xếp sản phẩm theo: ${getSortText(sortBy)}`);
    }

    function getSortText(sortValue) {
        switch(sortValue) {
            case 'popularity': return 'độ phổ biến';
            case 'rating': return 'đánh giá trung bình';
            case 'latest': return 'mới nhất';
            case 'price-low': return 'giá thấp đến cao';
            case 'price-high': return 'giá cao đến thấp';
            default: return sortValue;
        }
    }

    // ========== 4. XỬ LÝ THÊM VÀO GIỎ HÀNG ==========
    function initAddToCart() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();

                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('.product-name').textContent;
                const productPrice = productCard.querySelector('.product-price').textContent;
                const productImage = productCard.querySelector('.product-image').src;

                addToCart({
                    name: productName,
                    price: extractPrice(productPrice),
                    image: productImage,
                    quantity: 1
                });

                // Hiệu ứng thêm vào giỏ
                const originalText = this.textContent;
                this.textContent = 'Đã thêm!';
                this.style.backgroundColor = '#166534';
                this.style.color = 'white';

                // Hiệu ứng animation
                this.classList.add('added-animation');

                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = 'white';
                    this.style.color = '#113222';
                    this.classList.remove('added-animation');
                }, 1500);
            });
        });
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`Đã thêm "${product.name}" vào giỏ hàng`, 'success');
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        const cartButton = document.querySelector('.header-button .font-medium');
        if (cartButton) {
            cartButton.textContent = formatCurrency(totalAmount);
        }

        const favoriteCount = document.querySelector('.favorite-count');
        if (favoriteCount && totalItems > 0) {
            favoriteCount.textContent = totalItems;
            favoriteCount.style.display = 'flex';
        }
    }

    // ========== 5. XỬ LÝ DANH MỤC ==========
    const categoryToggle = document.querySelector('.category-toggle');
    const filtersSidebar = document.querySelector('.filters-sidebar');

    function initCategoryToggle() {
        if (!categoryToggle || !filtersSidebar) return;

        categoryToggle.addEventListener('click', function() {
            const isHidden = filtersSidebar.style.display === 'none';
            filtersSidebar.style.display = isHidden ? 'block' : 'none';

            const icon = this.querySelector('svg');
            if (isHidden) {
                icon.innerHTML = '<path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>';
                this.querySelector('span').textContent = 'ẨN DANH MỤC';
            } else {
                icon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>';
                this.querySelector('span').textContent = 'CHỌN DANH MỤC';
            }
        });

        // Responsive handling
        handleResponsiveSidebar();
        window.addEventListener('resize', handleResponsiveSidebar);

        // Xử lý click category items
        const categoryItems = document.querySelectorAll('.category-item a');
        categoryItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const categoryName = this.textContent.replace('expand_more', '').trim();
                filterByCategory(categoryName);
            });
        });
    }

    function handleResponsiveSidebar() {
        if (!categoryToggle || !filtersSidebar) return;

        if (window.innerWidth < 768) {
            filtersSidebar.style.display = 'none';
            const icon = categoryToggle.querySelector('svg');
            icon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>';
            categoryToggle.querySelector('span').textContent = 'CHỌN DANH MỤC';
        } else {
            filtersSidebar.style.display = 'block';
        }
    }

    function filterByCategory(categoryName) {
        const allProducts = document.querySelectorAll('.product-card');
        let foundCount = 0;

        // Logic lọc theo từ khóa trong tên sản phẩm
        allProducts.forEach(product => {
            const productName = product.querySelector('.product-name').textContent.toLowerCase();

            let shouldShow = false;

            if (categoryName === 'Tất cả' || categoryName === 'Uncategorized') {
                shouldShow = true;
            } else if (categoryName === 'Cây Ngoài Trời' && productName.includes('ngoài trời')) {
                shouldShow = true;
            } else if (categoryName === 'Cây Trong Nhà' && productName.includes('trong nhà')) {
                shouldShow = true;
            } else if (categoryName === 'Chậu Cây Cảnh' && productName.includes('chậu')) {
                shouldShow = true;
            } else if (categoryName === 'Dụng Cụ Làm Vườn' && (productName.includes('dụng cụ') || productName.includes('làm vườn'))) {
                shouldShow = true;
            } else if (categoryName === 'Phân Bón' && productName.includes('phân bón')) {
                shouldShow = true;
            } else if (categoryName === 'Phụ Kiện Trang Trí' && (productName.includes('phụ kiện') || productName.includes('trang trí'))) {
                shouldShow = true;
            } else if (categoryName === 'Đất Trồng Cây' && productName.includes('đất')) {
                shouldShow = true;
            } else {
                // Mặc định hiển thị tất cả
                shouldShow = true;
            }

            if (shouldShow) {
                product.style.display = 'block';
                foundCount++;
            } else {
                product.style.display = 'none';
            }
        });

        updateResultsCount();
        showNotification(`Đang hiển thị ${foundCount} sản phẩm trong danh mục: ${categoryName}`);

        // Cập nhật trạng thái active cho category
        updateActiveCategory(categoryName);
    }

    function updateActiveCategory(categoryName) {
        const categoryItems = document.querySelectorAll('.category-item a');
        categoryItems.forEach(item => {
            const itemText = item.textContent.replace('expand_more', '').trim();
            if (itemText === categoryName) {
                item.classList.add('active-category');
            } else {
                item.classList.remove('active-category');
            }
        });
    }

    // ========== 6. XỬ LÝ PHÂN TRANG ==========
    function initPagination() {
        const pageNumbers = document.querySelectorAll('.page-number:not(.material-symbols-outlined)');

        pageNumbers.forEach(page => {
            page.addEventListener('click', function(e) {
                e.preventDefault();

                pageNumbers.forEach(p => p.classList.remove('active'));
                this.classList.add('active');

                const pageNum = parseInt(this.textContent);
                showPage(pageNum);

                showNotification(`Đang hiển thị trang ${pageNum}`);
            });
        });
    }

    function showPage(pageNum) {
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });

        // Trong thực tế, đây sẽ là AJAX request để lấy dữ liệu trang mới
        console.log(`Đang tải trang ${pageNum}...`);
    }

    // ========== 7. CÁC HÀM TIỆN ÍCH ==========
    function extractPrice(priceString) {
        if (!priceString) return 0;
        const cleaned = priceString.replace(/[^\d]/g, '');
        return parseInt(cleaned) || 0;
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        }).format(amount).replace('₫', '') + '₫';
    }

    function updateResultsCount() {
        const visibleCount = getVisibleProductsCount();
        const totalCount = document.querySelectorAll('.product-card').length;
        const resultsInfo = document.querySelector('.results-info span');

        if (resultsInfo) {
            const start = 1;
            const end = visibleCount;
            resultsInfo.textContent = `Đang hiển thị ${start}–${end} trong tổng số ${totalCount} kết quả`;
        }
    }

    function getVisibleProductsCount() {
        const products = document.querySelectorAll('.product-card');
        let count = 0;
        products.forEach(p => {
            if (p.style.display !== 'none') count++;
        });
        return count;
    }

    function showNotification(message, type = 'info') {
        // Tạo thông báo tạm thời
        const notification = document.createElement('div');
        notification.className = 'custom-notification';
        notification.setAttribute('data-type', type);

        const icon = getNotificationIcon(type);
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${icon}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Hiển thị thông báo
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Tự động xóa sau 3 giây
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    function getNotificationIcon(type) {
        switch(type) {
            case 'success':
                return '<span class="material-symbols-outlined">check_circle</span>';
            case 'warning':
                return '<span class="material-symbols-outlined">error</span>';
            case 'info':
            default:
                return '<span class="material-symbols-outlined">info</span>';
        }
    }

    // ========== 8. KHỞI TẠO TẤT CẢ CHỨC NĂNG ==========
    function initAll() {
        // Thêm CSS styles
        addCustomStyles();

        // Khởi tạo các chức năng
        initPriceSlider();
        initSearch();
        initSorting();
        initAddToCart();
        initCategoryToggle();
        initPagination();
        updateCartCount();
        updateResultsCount();

        console.log('Category page JavaScript đã được khởi tạo!');
    }

    function addCustomStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Styles cho search highlight */
            .search-highlight {
                background-color: #FFEB3B;
                padding: 0 2px;
                border-radius: 2px;
                font-weight: bold;
            }
            
            /* Styles cho active category */
            .active-category {
                color: var(--primary-green) !important;
                font-weight: bold;
            }
            
            /* Styles cho notification */
            .custom-notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                color: #333;
                padding: 16px 24px;
                border-radius: 8px;
                z-index: 1000;
                font-size: 14px;
                box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                transform: translateX(120%);
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                max-width: 350px;
                border-left: 4px solid var(--primary-green);
            }
            
            .custom-notification[data-type="success"] {
                border-left-color: #166534;
            }
            
            .custom-notification[data-type="warning"] {
                border-left-color: #dc2626;
            }
            
            .custom-notification.show {
                transform: translateX(0);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification-icon .material-symbols-outlined {
                font-size: 20px;
            }
            
            .custom-notification[data-type="success"] .notification-icon {
                color: #166534;
            }
            
            .custom-notification[data-type="warning"] .notification-icon {
                color: #dc2626;
            }
            
            .custom-notification[data-type="info"] .notification-icon {
                color: var(--primary-green);
            }
            
            .notification-message {
                flex: 1;
            }
            
            /* Styles cho add to cart animation */
            .add-to-cart-btn.added-animation {
                animation: pulse 0.5s ease;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            
            /* Styles cho price slider */
            .price-slider-handle {
                transition: transform 0.2s, box-shadow 0.2s;
            }
            
            .price-slider-handle:hover {
                transform: scale(1.2);
                box-shadow: 0 0 0 2px rgba(102, 102, 102, 0.2);
            }
            
            .price-slider-handle:active {
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(style);
    }

    // Chạy khởi tạo
    initAll();
});