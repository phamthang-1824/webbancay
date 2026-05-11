// orders.js - Xử lý trang Đơn Mua (Đơn hàng của tôi)

document.addEventListener('DOMContentLoaded', function() {
    console.log('Orders page initialized');

    // Tải danh sách đơn hàng từ localStorage
    loadUserOrders();

    // Thiết lập sự kiện
    setupOrdersEvents();

    // Khởi tạo modal chi tiết đơn hàng
    initializeOrderModal();
});

// Khởi tạo modal chi tiết đơn hàng
function initializeOrderModal() {
    // Xử lý sự kiện đóng modal
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('orderModal');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // Thêm phím ESC để đóng modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }
}

// Hiển thị modal chi tiết đơn hàng
function showOrderDetailModal(order) {
    const modal = document.getElementById('orderModal');
    const modalBody = document.getElementById('orderModalBody');
    const modalTitle = document.querySelector('.modal-title');

    if (!modal || !modalBody) return;

    // Lấy thông tin đơn hàng
    const orderInfo = order.orderInfo || {};
    const customerInfo = order.customerInfo || {};
    const paymentInfo = order.paymentInfo || {};

    // Cập nhật tiêu đề
    modalTitle.textContent = `Chi Tiết Đơn Hàng #${order.id || 'DH' + new Date(orderInfo.timestamp || Date.now()).getTime().toString().slice(-8)}`;

    // Format ngày tháng
    const orderDate = orderInfo.timestamp ? new Date(orderInfo.timestamp) : new Date();
    const formattedOrderDate = orderDate.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Tạo nội dung modal
    const modalContent = `
        <!-- Customer Information -->
        <div class="order-info-section">
            <h4 class="section-title">
                <span class="material-icons">person</span>
                Thông Tin Khách Hàng
            </h4>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Họ và tên:</span>
                    <span class="info-value">${customerInfo.name || 'Khách hàng'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Số điện thoại:</span>
                    <span class="info-value">${customerInfo.phone || 'Chưa có thông tin'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Email:</span>
                    <span class="info-value">${customerInfo.email || 'Chưa có thông tin'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Địa chỉ nhận hàng:</span>
                    <span class="info-value">${customerInfo.address?.fullAddress || customerInfo.address || 'Chưa có thông tin'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Phương thức thanh toán:</span>
                    <span class="info-value">${paymentInfo.method || 'Thanh toán khi nhận hàng (COD)'}</span>
                </div>
                ${customerInfo.note ? `
                <div class="info-item">
                    <span class="info-label">Ghi chú:</span>
                    <span class="info-value">${customerInfo.note}</span>
                </div>
                ` : ''}
                <div class="info-item">
                    <span class="info-label">Ngày đặt hàng:</span>
                    <span class="info-value">${formattedOrderDate}</span>
                </div>
            </div>
        </div>

        <!-- Shipping Information -->
        <div class="order-info-section">
            <h4 class="section-title">
                <span class="material-icons">local_shipping</span>
                Thông Tin Vận Chuyển
            </h4>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Trạng thái đơn hàng:</span>
                    <span class="info-value">
                        <span class="status-success" style="color: ${getStatusInfo(orderInfo.status || 'Chờ xác nhận').color || '#10b981'}">
                            <span class="material-icons" style="font-size: 16px;">${getStatusInfo(orderInfo.status || 'Chờ xác nhận').icon}</span>
                            ${getStatusInfo(orderInfo.status || 'Chờ xác nhận').text}
                        </span>
                    </span>
                </div>
                <div class="info-item">
                    <span class="info-label">Đơn vị vận chuyển:</span>
                    <span class="info-value">${orderInfo.shipping?.carrier || 'Giao Hàng Nhanh (GHN)'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Mã vận đơn:</span>
                    <span class="info-value">${orderInfo.shipping?.trackingNumber || 'GHN' + Date.now().toString().slice(-10)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Phương thức vận chuyển:</span>
                    <span class="info-value">${orderInfo.shipping?.method || 'Tiêu chuẩn'}</span>
                </div>
                ${orderInfo.shipping?.estimatedDelivery ? `
                <div class="info-item">
                    <span class="info-label">Dự kiến giao hàng:</span>
                    <span class="info-value">${orderInfo.shipping.estimatedDelivery}</span>
                </div>
                ` : ''}
            </div>
        </div>

        <!-- Order Items -->
        <div class="order-info-section">
            <h4 class="section-title">
                <span class="material-icons">shopping_bag</span>
                Sản Phẩm Đã Đặt
            </h4>
            <ul class="modal-product-list">
                ${createModalProductListHTML(orderInfo.items)}
            </ul>
        </div>

        <!-- Payment Summary -->
        <div class="order-info-section">
            <h4 class="section-title">
                <span class="material-icons">receipt</span>
                Thông Tin Thanh Toán
            </h4>
            <div class="payment-summary">
                <div class="summary-item">
                    <span class="summary-label">Tạm tính:</span>
                    <span class="summary-value">${orderInfo.formattedSubtotal || formatPrice(orderInfo.subtotal || 0)}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Phí vận chuyển:</span>
                    <span class="summary-value">${orderInfo.formattedShipping || formatPrice(orderInfo.shippingFee || 30000)}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Giảm giá:</span>
                    <span class="summary-value" style="color: #10b981;">-${orderInfo.formattedDiscount || formatPrice(orderInfo.discount || 0)}</span>
                </div>
                <div class="summary-item summary-total">
                    <span class="summary-label">Tổng cộng:</span>
                    <span class="summary-value">${orderInfo.formattedTotal || formatPrice(orderInfo.total || 0)}</span>
                </div>
            </div>
        </div>
    `;

    // Đặt nội dung vào modal
    modalBody.innerHTML = modalContent;

    // Hiển thị modal
    modal.classList.add('active');
}

// Tạo HTML cho danh sách sản phẩm trong modal
function createModalProductListHTML(items) {
    if (!items || items.length === 0) return '<li class="modal-product-item">Không có sản phẩm</li>';

    let html = '';

    items.forEach((item, index) => {
        const isGift = item.name.includes('[Quà tặng') || item.isGift;

        html += `
            <li class="modal-product-item">
                <div class="modal-product-image">
                    <img src="${item.image || 'https://via.placeholder.com/80x80?text=Sản+phẩm'}" alt="${item.name}">
                </div>
                <div class="modal-product-details">
                    <h4 class="modal-product-name">
                        ${isGift ? '<span style="color: var(--primary-orange); font-size: 0.75rem;">[Quà tặng] </span>' : ''}
                        ${item.name}
                    </h4>
                    <div class="modal-product-price">${isGift ? 'Miễn phí' : (item.formattedPrice || formatPrice(item.price || 0))}</div>
                    <div class="modal-product-quantity">Số lượng: ${item.quantity || 1}</div>
                    ${item.originalPrice && !isGift ? `
                    <div class="modal-product-quantity" style="color: var(--gray-500); text-decoration: line-through;">
                        Giá gốc: ${item.formattedOriginalPrice || formatPrice(item.originalPrice)}
                    </div>
                    ` : ''}
                    ${item.variant ? `
                    <div class="modal-product-quantity">Phân loại: ${item.variant}</div>
                    ` : ''}
                </div>
            </li>
        `;
    });

    return html;
}

// Tải danh sách đơn hàng
function loadUserOrders() {
    try {
        // Lấy danh sách đơn hàng từ localStorage
        const orders = JSON.parse(localStorage.getItem('userOrders')) || [];

        console.log('Loaded orders:', orders.length);

        if (orders.length === 0) {
            // Hiển thị thông báo không có đơn hàng
            showNoOrdersMessage();
            return;
        }

        // Hiển thị đơn hàng
        displayOrders(orders);

        // Cập nhật thông tin người dùng (nếu có)
        updateUserInfo();

        // Lọc đơn hàng theo tab đang chọn
        filterOrdersByTab('all');

    } catch (error) {
        console.error('Error loading orders:', error);
        showNoOrdersMessage();
    }
}

// Hiển thị danh sách đơn hàng
function displayOrders(orders) {
    const orderMain = document.querySelector('.order-main');
    if (!orderMain) return;

    // Xóa các order card cũ (giữ lại tabs và search box)
    const orderCards = orderMain.querySelectorAll('.order-card');
    orderCards.forEach(card => card.remove());

    // Lưu orders vào biến toàn cục để sử dụng sau
    window.userOrders = orders;

    // Thêm các đơn hàng mới
    orders.forEach((order, index) => {
        const orderCard = createOrderCard(order, index);
        orderMain.appendChild(orderCard);
    });
}

// Tạo thẻ đơn hàng (ĐÃ CẬP NHẬT để có thể click)
function createOrderCard(order, index) {
    const card = document.createElement('div');
    card.className = 'order-card clickable';
    card.dataset.orderId = order.id || `order_${index}`;
    card.dataset.status = order.orderInfo?.status || 'pending';
    card.dataset.orderIndex = index;

    // Thêm sự kiện click để mở modal
    card.addEventListener('click', function(e) {
        // Ngăn chặn sự kiện click lan ra các nút bên trong
        if (!e.target.closest('.shop-button') &&
            !e.target.closest('.action-button') &&
            !e.target.closest('a') &&
            !e.target.closest('.edit-profile')) {
            showOrderDetailModal(order);
        }
    });

    // Lấy thông tin đơn hàng
    const orderInfo = order.orderInfo || {};
    const customerInfo = order.customerInfo || {};

    // Xác định trạng thái và màu sắc
    const statusInfo = getStatusInfo(orderInfo.status || 'Chờ xác nhận');

    // Tạo HTML cho đơn hàng
    card.innerHTML = `
        <!-- Order Header -->
        <div class="order-header">
            <div class="shop-info">
                <span class="shop-badge" style="background-color: ${statusInfo.badgeColor || '#dc2626'}">${statusInfo.badge || 'Mall'}</span>
                <span class="shop-name">Cây Xanh Việt</span>
                <div class="shop-actions">
                    <button class="shop-button chat-button" onclick="event.stopPropagation(); contactSeller('${order.id}')">
                        <span class="material-icons" style="font-size: 14px;">chat_bubble_outline</span>
                        Chat
                    </button>
                    <button class="shop-button view-shop-button" onclick="event.stopPropagation(); viewShop()">
                        <span class="material-icons" style="font-size: 14px;">storefront</span>
                        Xem Shop
                    </button>
                </div>
            </div>
            <div class="order-status">
                <span class="status-success" style="color: ${statusInfo.color || '#16a34a'}">
                    <span class="material-icons" style="font-size: 16px;">${statusInfo.icon}</span>
                    ${statusInfo.text}
                </span>
                <span class="status-divider">|</span>
                <span class="status-completed" style="color: ${statusInfo.color || 'var(--primary-orange)'}">${orderInfo.status || 'Chờ xác nhận'}</span>
            </div>
        </div>

        <!-- Order Items -->
        <div class="order-items-container">
            ${createOrderItemsHTML(orderInfo.items)}
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
            <span class="summary-label">Thành tiền:</span>
            <span class="summary-total">${orderInfo.formattedTotal || formatPrice(orderInfo.total || 0)}</span>
        </div>

        <!-- Order Actions -->
        <div class="order-actions">
            <p class="review-notice">Đánh giá trước ${getReviewDate(orderInfo.timestamp)} để nhận 200 xu</p>
            <button class="action-button buy-again-button" onclick="event.stopPropagation(); buyAgain('${order.id}')">Mua Lại</button>
            <button class="action-button contact-button" onclick="event.stopPropagation(); contactSeller('${order.id}')">Liên Hệ Người Bán</button>
            <button class="action-button review-button" onclick="event.stopPropagation(); viewShopReviews('${order.id}')">Xem Đánh Giá Shop</button>
        </div>
    `;

    return card;
}

// Tạo HTML cho danh sách sản phẩm
function createOrderItemsHTML(items) {
    if (!items || items.length === 0) return '';

    let html = '';

    items.forEach((item, index) => {
        const isGift = item.name.includes('[Quà tặng') || item.isGift;

        if (isGift) {
            html += `
                <!-- Gift Item -->
                <div class="gift-item">
                    <div class="gift-image">
                        <img src="${item.image || 'https://via.placeholder.com/64x64?text=Quà+tặng'}" alt="${item.name}">
                    </div>
                    <div class="gift-details">
                        <div>
                            <h3 class="gift-name">
                                <span class="gift-badge">Quà Tặng</span>
                                ${item.name}
                            </h3>
                            <div class="product-quantity">x${item.quantity || 1}</div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            html += `
                <!-- Main Product -->
                <div class="order-item">
                    <div class="product-image">
                        <img src="${item.image || 'https://via.placeholder.com/80x80?text=Sản+phẩm'}" alt="${item.name}">
                    </div>
                    <div class="product-details">
                        <div class="product-header">
                            <h3 class="product-name">${item.name}</h3>
                            <div class="product-price">
                                ${item.originalPrice ? `<span class="original-price">${item.formattedOriginalPrice || formatPrice(item.originalPrice)}</span>` : ''}
                                <span class="current-price">${item.formattedPrice || formatPrice(item.price)}</span>
                            </div>
                        </div>
                        ${item.variant ? `<div class="product-variant">Phân loại hàng: ${item.variant}</div>` : ''}
                        <div class="product-quantity">x${item.quantity || 1}</div>
                        <div>
                            <span class="return-policy">7 ngày trả hàng</span>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    return html;
}

// Lấy thông tin trạng thái
function getStatusInfo(status) {
    const statusMap = {
        'Chờ xác nhận': {
            text: 'Đang chờ xác nhận',
            icon: 'schedule',
            color: '#f59e0b',
            badge: 'Chờ XN',
            badgeColor: '#f59e0b'
        },
        'Vận chuyển': {
            text: 'Đang vận chuyển',
            icon: 'local_shipping',
            color: '#3b82f6',
            badge: 'VC',
            badgeColor: '#3b82f6'
        },
        'Chờ giao hàng': {
            text: 'Chờ giao hàng',
            icon: 'package',
            color: '#8b5cf6',
            badge: 'Chờ GH',
            badgeColor: '#8b5cf6'
        },
        'Hoàn thành': {
            text: 'Giao hàng thành công',
            icon: 'check_circle',
            color: '#10b981',
            badge: 'HT',
            badgeColor: '#10b981'
        },
        'Đã hủy': {
            text: 'Đơn hàng đã hủy',
            icon: 'cancel',
            color: '#ef4444',
            badge: 'Hủy',
            badgeColor: '#ef4444'
        },
        'Trả hàng/Hoàn tiền': {
            text: 'Đang xử lý trả hàng',
            icon: 'assignment_return',
            color: '#ec4899',
            badge: 'Trả hàng',
            badgeColor: '#ec4899'
        }
    };

    return statusMap[status] || {
        text: 'Đang xử lý',
        icon: 'pending',
        color: '#6b7280',
        badge: 'Mall',
        badgeColor: '#dc2626'
    };
}

// Lấy ngày đánh giá (7 ngày sau ngày đặt)
function getReviewDate(orderTimestamp) {
    const orderDate = orderTimestamp ? new Date(orderTimestamp) : new Date();
    const reviewDate = new Date(orderDate);
    reviewDate.setDate(orderDate.getDate() + 7);

    return reviewDate.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// Hiển thị thông báo khi không có đơn hàng
function showNoOrdersMessage() {
    const orderMain = document.querySelector('.order-main');
    if (!orderMain) return;

    // Xóa các order card cũ
    const orderCards = orderMain.querySelectorAll('.order-card');
    orderCards.forEach(card => card.remove());

    // Thêm message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'no-orders-message';
    messageDiv.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; background-color: var(--card-light); border-radius: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <span class="material-icons" style="font-size: 64px; color: var(--gray-400); margin-bottom: 1rem; display: block;">
                shopping_bag
            </span>
            <h2 style="color: var(--text-light); margin-bottom: 1rem; font-size: 1.25rem;">Chưa có đơn hàng</h2>
            <p style="color: var(--gray-600); margin-bottom: 2rem; font-size: 0.875rem;">Bạn chưa có đơn hàng nào. Hãy bắt đầu mua sắm nhé!</p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <a href="index.html" style="padding: 0.75rem 1.5rem; background-color: var(--primary-green); color: white; text-decoration: none; border-radius: 0.25rem; font-weight: 500; font-size: 0.875rem;">
                    Mua sắm ngay
                </a>
            </div>
        </div>
    `;

    orderMain.appendChild(messageDiv);
}

// Cập nhật thông tin người dùng
function updateUserInfo() {
    try {
        // Lấy thông tin người dùng từ localStorage (nếu có)
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));

        // Cập nhật username nếu có
        const usernameElement = document.querySelector('.username');
        if (usernameElement && userData.username) {
            usernameElement.textContent = userData.username;
        }

        // Cập nhật thông tin từ lastOrder nếu cần
        if (lastOrder && lastOrder.customerInfo) {
            const editProfileLink = document.querySelector('.edit-profile');
            if (editProfileLink) {
                editProfileLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    showEditProfileModal(lastOrder.customerInfo);
                });
            }
        }

    } catch (error) {
        console.error('Error updating user info:', error);
    }
}

// Thiết lập sự kiện
function setupOrdersEvents() {
    // Sự kiện click tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // Xóa active class từ tất cả tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Thêm active class cho tab được click
            this.classList.add('active');

            // Lọc đơn hàng theo tab
            const tabText = this.textContent.trim();
            filterOrdersByTab(tabText);
        });
    });

    // Sự kiện tìm kiếm
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchOrders(this.value.trim());
        });
    }

    // Sự kiện nút "Sửa Hồ Sơ"
    const editProfileLink = document.querySelector('.edit-profile');
    if (editProfileLink) {
        editProfileLink.addEventListener('click', function(e) {
            e.preventDefault();
            showEditProfileModal();
        });
    }

    // Sự kiện logo click
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.jsp';
        });
    }
}

// Lọc đơn hàng theo tab
function filterOrdersByTab(tab) {
    const orderCards = document.querySelectorAll('.order-card');
    const tabMap = {
        'Tất cả': 'all',
        'Chờ xác nhận': 'Chờ xác nhận',
        'Vận chuyển': 'Vận chuyển',
        'Chờ giao hàng': 'Chờ giao hàng',
        'Hoàn thành': 'Hoàn thành',
        'Đã hủy': 'Đã hủy',
        'Trả hàng/Hoàn tiền': 'Trả hàng/Hoàn tiền'
    };

    const filterStatus = tabMap[tab] || 'all';

    orderCards.forEach(card => {
        if (filterStatus === 'all') {
            card.style.display = 'block';
        } else {
            const status = card.dataset.status;
            if (status === filterStatus) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });

    // Kiểm tra xem có đơn hàng nào hiển thị không
    const visibleCards = Array.from(orderCards).filter(card => card.style.display !== 'none');
    if (visibleCards.length === 0 && orderCards.length > 0) {
        showNoOrdersForTabMessage(tab);
    } else {
        removeTabMessage();
    }
}

// Tìm kiếm đơn hàng
function searchOrders(keyword) {
    const orderCards = document.querySelectorAll('.order-card');
    const lowerKeyword = keyword.toLowerCase();

    orderCards.forEach(card => {
        const orderId = card.dataset.orderId || '';
        const shopName = card.querySelector('.shop-name')?.textContent || '';
        const productNames = Array.from(card.querySelectorAll('.product-name, .gift-name'))
            .map(el => el.textContent)
            .join(' ');

        const searchText = (orderId + ' ' + shopName + ' ' + productNames).toLowerCase();

        if (searchText.includes(lowerKeyword) || keyword === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Kiểm tra xem có đơn hàng nào hiển thị không
    const visibleCards = Array.from(orderCards).filter(card => card.style.display !== 'none');
    if (visibleCards.length === 0 && keyword !== '') {
        showNoSearchResultsMessage(keyword);
    } else {
        removeTabMessage();
    }
}

// Hiển thị thông báo không có đơn hàng cho tab
function showNoOrdersForTabMessage(tab) {
    removeTabMessage();

    const orderMain = document.querySelector('.order-main');
    if (!orderMain) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'tab-no-orders-message';
    messageDiv.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--gray-600);">
            <span class="material-icons" style="font-size: 48px; margin-bottom: 1rem; display: block; color: var(--gray-400);">
                ${getTabIcon(tab)}
            </span>
            <p>Không có đơn hàng "${tab}"</p>
        </div>
    `;

    orderMain.appendChild(messageDiv);
}

// Hiển thị thông báo không có kết quả tìm kiếm
function showNoSearchResultsMessage(keyword) {
    removeTabMessage();

    const orderMain = document.querySelector('.order-main');
    if (!orderMain) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'no-search-results-message';
    messageDiv.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--gray-600);">
            <span class="material-icons" style="font-size: 48px; margin-bottom: 1rem; display: block; color: var(--gray-400);">
                search_off
            </span>
            <p>Không tìm thấy đơn hàng cho "${keyword}"</p>
        </div>
    `;

    orderMain.appendChild(messageDiv);
}

// Xóa thông báo tab
function removeTabMessage() {
    const tabMessage = document.querySelector('.tab-no-orders-message');
    const searchMessage = document.querySelector('.no-search-results-message');

    if (tabMessage) tabMessage.remove();
    if (searchMessage) searchMessage.remove();
}

// Lấy icon cho tab
function getTabIcon(tab) {
    const iconMap = {
        'Tất cả': 'all_inbox',
        'Chờ xác nhận': 'schedule',
        'Vận chuyển': 'local_shipping',
        'Chờ giao hàng': 'package',
        'Hoàn thành': 'check_circle',
        'Đã hủy': 'cancel',
        'Trả hàng/Hoàn tiền': 'assignment_return'
    };

    return iconMap[tab] || 'all_inbox';
}

// ========== CÁC HÀM CHỨC NĂNG ==========

// Mua lại
function buyAgain(orderId) {
    try {
        const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
        const order = orders.find(o => o.id === orderId);

        if (order && order.orderInfo && order.orderInfo.items) {
            // Tạo giỏ hàng mới từ đơn hàng cũ
            const cartItems = order.orderInfo.items.map(item => ({
                ...item,
                quantity: item.quantity || 1
            }));

            // Lưu vào localStorage để chuyển sang trang cart
            localStorage.setItem('buyAgainItems', JSON.stringify(cartItems));

            // Hiển thị thông báo
            showNotification('Đã thêm sản phẩm vào giỏ hàng. Đang chuyển hướng...', 'success');

            // Chuyển hướng sang trang cart sau 1 giây
            setTimeout(() => {
                window.location.href = 'cart.jsp';
            }, 1000);
        }
    } catch (error) {
        console.error('Error in buyAgain:', error);
        showNotification('Có lỗi xảy ra khi mua lại', 'error');
    }
}

// Liên hệ người bán
function contactSeller(orderId) {
    showNotification(`Đang mở chat với Cây Xanh Việt cho đơn hàng ${orderId}`, 'info');
    // Ở đây có thể thêm logic mở chat thực tế
}

// Xem shop
function viewShop() {
    showNotification('Đang chuyển đến trang Cây Xanh Việt', 'info');
    window.open('#', '_blank');
}

// Xem đánh giá shop
function viewShopReviews(orderId) {
    showNotification(`Đang mở đánh giá của Cây Xanh Việt`, 'info');
    window.open('#', '_blank');
}

// Hiển thị modal chỉnh sửa hồ sơ
function showEditProfileModal(customerInfo = null) {
    const modalHTML = `
        <div class="edit-profile-modal-overlay">
            <div class="edit-profile-modal">
                <div class="edit-profile-modal-header">
                    <h3>Chỉnh sửa hồ sơ</h3>
                    <button class="close-edit-modal-btn">
                        <span class="material-icons">close</span>
                    </button>
                </div>
                <div class="edit-profile-modal-content">
                    <form id="editProfileForm">
                        <div class="form-group">
                            <label class="form-label" for="edit-name">Họ và tên</label>
                            <input class="form-input" id="edit-name" type="text" value="${customerInfo?.name || 'ututut1234'}">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="edit-email">Email</label>
                            <input class="form-input" id="edit-email" type="email" value="${customerInfo?.email || ''}">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="edit-phone">Số điện thoại</label>
                            <input class="form-input" id="edit-phone" type="tel" value="${customerInfo?.phone?.replace('+84 ', '') || ''}">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="edit-address">Địa chỉ</label>
                            <textarea class="form-input" id="edit-address" rows="3">${customerInfo?.address?.fullAddress || ''}</textarea>
                        </div>
                    </form>
                </div>
                <div class="edit-profile-modal-footer">
                    <button class="cancel-edit-btn">Hủy</button>
                    <button class="save-profile-btn">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Thêm CSS cho modal
    addModalStyles();

    // Xử lý sự kiện modal
    setupEditProfileModal();
}

// Thêm CSS cho modal
function addModalStyles() {
    if (document.getElementById('modal-styles')) return;

    const styles = `
        <style id="modal-styles">
            .edit-profile-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            
            .edit-profile-modal {
                background: white;
                border-radius: 12px;
                width: 90%;
                max-width: 500px;
                max-height: 80vh;
                overflow: hidden;
                animation: slideUp 0.3s ease;
            }
            
            .edit-profile-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid #e5e7eb;
            }
            
            .edit-profile-modal-header h3 {
                margin: 0;
                font-size: 18px;
                font-weight: 600;
                color: #1f2937;
            }
            
            .close-edit-modal-btn {
                background: none;
                border: none;
                cursor: pointer;
                color: #6b7280;
                padding: 4px;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .edit-profile-modal-content {
                padding: 20px;
                max-height: 50vh;
                overflow-y: auto;
            }
            
            .edit-profile-modal-footer {
                display: flex;
                justify-content: flex-end;
                gap: 12px;
                padding: 20px;
                border-top: 1px solid #e5e7eb;
            }
            
            .cancel-edit-btn,
            .save-profile-btn {
                padding: 10px 20px;
                border-radius: 6px;
                font-weight: 500;
                cursor: pointer;
                border: none;
                transition: all 0.2s;
            }
            
            .cancel-edit-btn {
                background: #f3f4f6;
                color: #374151;
            }
            
            .cancel-edit-btn:hover {
                background: #e5e7eb;
            }
            
            .save-profile-btn {
                background: var(--primary-green);
                color: white;
            }
            
            .save-profile-btn:hover {
                background: #0d2516;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from {
                    transform: translateY(20px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', styles);
}

// Thiết lập sự kiện cho modal
function setupEditProfileModal() {
    const closeBtn = document.querySelector('.close-edit-modal-btn');
    const cancelBtn = document.querySelector('.cancel-edit-btn');
    const saveBtn = document.querySelector('.save-profile-btn');
    const overlay = document.querySelector('.edit-profile-modal-overlay');

    // Đóng modal
    function closeModal() {
        if (overlay) {
            overlay.remove();
        }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    // Lưu thông tin
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const name = document.getElementById('edit-name').value;
            const email = document.getElementById('edit-email').value;
            const phone = document.getElementById('edit-phone').value;
            const address = document.getElementById('edit-address').value;

            // Cập nhật username hiển thị
            const usernameElement = document.querySelector('.username');
            if (usernameElement) {
                usernameElement.textContent = name || 'ututut1234';
            }

            // Lưu vào localStorage
            try {
                const userData = {
                    username: name || 'ututut1234',
                    email: email,
                    phone: phone,
                    address: address,
                    updatedAt: new Date().toISOString()
                };
                localStorage.setItem('userData', JSON.stringify(userData));
            } catch (error) {
                console.error('Error saving user data:', error);
            }

            showNotification('Đã cập nhật thông tin hồ sơ', 'success');
            closeModal();
        });
    }

    // Đóng khi click ra ngoài
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
}

// Định dạng giá
function formatPrice(price) {
    if (typeof price === 'string') {
        // Nếu đã là chuỗi định dạng, trả về nguyên bản
        return price;
    }
    return new Intl.NumberFormat('vi-VN', {
        minimumFractionDigits: 0
    }).format(price) + '₫';
}

// Hiển thị thông báo
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