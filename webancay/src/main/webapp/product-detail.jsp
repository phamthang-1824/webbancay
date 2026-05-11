<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html class="light" lang="vi">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Cây Xanh Việt - ${product.name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/fonts/style.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/fonts/product-detail.css">
</head>
<body class="light">
<div class="layout-container">
    <!-- ========== HEADER ========== -->
    <header class="sticky-header">
        <div class="header-top">
            <div class="container header-top-content">
                <div class="header-info">
                    <div class="header-info-item">
                        <span class="material-symbols-outlined">schedule</span>
                        <span>08:30 - 22:00</span>
                    </div>
                    <div class="header-info-item hidden-sm">
                        <span class="material-symbols-outlined">call</span>
                        <span>0838 369 639 - 09 6688 9393</span>
                    </div>
                </div>
                <div class="header-actions">
                    <a class="favorite-link" href="${pageContext.request.contextPath}/favorites.jsp">
                        <span class="material-symbols-outlined">favorite</span>
                        <div class="favorite-count">0</div>
                    </a>

                    <!-- Phần này thay đổi theo trạng thái đăng nhập -->
                    <c:choose>
                        <c:when test="${not empty sessionScope.user}">
                            <!-- Đã đăng nhập -->
                            <div class="user-menu" id="user-menu">
                                <div class="user-info">
                                    <div class="user-avatar" id="user-avatar">
                                            ${sessionScope.user.firstName.charAt(0)}
                                    </div>
                                    <span class="user-name" id="user-name">
                                        ${sessionScope.user.lastName} ${sessionScope.user.firstName}
                                    </span>
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                                <div class="user-dropdown">
                                    <a href="${pageContext.request.contextPath}/account.jsp" class="user-dropdown-item">
                                        <span class="material-symbols-outlined">person</span>
                                        <span>Tài khoản của tôi</span>
                                    </a>
                                    <a href="${pageContext.request.contextPath}/orders.jsp" class="user-dropdown-item">
                                        <span class="material-symbols-outlined">shopping_bag</span>
                                        <span>Đơn mua</span>
                                    </a>
                                    <a href="${pageContext.request.contextPath}/addresses.html" class="user-dropdown-item">
                                        <span class="material-symbols-outlined">location_on</span>
                                        <span>Danh sách địa chỉ</span>
                                    </a>
                                    <a href="${pageContext.request.contextPath}/logout" class="user-dropdown-item" id="logout-btn">
                                        <span class="material-symbols-outlined">logout</span>
                                        <span>Đăng xuất</span>
                                    </a>
                                </div>
                            </div>
                        </c:when>
                        <c:otherwise>
                            <!-- Chưa đăng nhập -->
                            <a class="login-link" href="${pageContext.request.contextPath}/login.jsp" id="login-link">
                                Đăng nhập
                            </a>
                        </c:otherwise>
                    </c:choose>
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="container header-main-content">
                <div class="logo-container">
                    <a class="logo" href="${pageContext.request.contextPath}/index.jsp">
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                            <path d="M12 15a7.99 7.99 0 0 1-8-8c0-2.21.9-4.21 2.35-5.65A8.003 8.003 0 0 1 12 2a8.003 8.003 0 0 1 5.65 2.35C19.1 5.79 20 7.79 20 10a7.99 7.99 0 0 1-8 5zm-3.5-2.5a5.5 5.5 0 0 0 7-4.76"></path>
                        </svg>
                        <span class="logo-text">Cây Xanh Việt</span>
                    </a>
                </div>
                <nav class="nav">
                    <!-- Các mục menu -->
                    <div class="nav-item">
                        <a class="nav-link" href="#">
                            Cây trong nhà <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Cây Cảnh Mini</a>
                            <a href="${pageContext.request.contextPath}/category.jsp?category=cay-cao-lon" class="dropdown-item">Cây Cao & Lớn</a>
                            <a href="#" class="dropdown-item">Cây Cảnh Để Bàn</a>
                            <a href="#" class="dropdown-item">Cây Dễ Trồng</a>
                        </div>
                    </div>

                    <div class="nav-item">
                        <a class="nav-link" href="#">
                            Cây ngoài trời <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Cây Leo Dàn</a>
                            <a href="#" class="dropdown-item">Cây Bóng Mát</a>
                            <a href="#" class="dropdown-item">Cây Có Hoa</a>
                            <a href="#" class="dropdown-item">Cây Ăn Quả</a>
                        </div>
                    </div>

                    <div class="nav-item">
                        <a class="nav-link" href="#">
                            Chậu cây <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Chậu Nhựa</a>
                            <a href="#" class="dropdown-item">Chậu Xi Măng</a>
                            <a href="#" class="dropdown-item">Chậu Đất Nung</a>
                            <a href="#" class="dropdown-item">Chậu Gốm Sứ</a>
                            <a href="#" class="dropdown-item">Chậu Cỡ Lớn</a>
                        </div>
                    </div>

                    <div class="nav-item">
                        <a class="nav-link" href="#">
                            Phụ kiện <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Phân Bón</a>
                            <a href="#" class="dropdown-item">Dụng Cụ Làm Vườn</a>
                            <a href="#" class="dropdown-item">Đất Trồng Cây</a>
                        </div>
                    </div>

                    <div class="nav-item">
                        <a class="nav-link" href="#">
                            Hướng dẫn <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">THÔNG TIN VỀ CÂY</a>
                            <a href="#" class="dropdown-item">KIẾN THỨC & CÁCH CHĂM SÓC</a>
                            <a href="#" class="dropdown-item">CẢM HỨNG & Ý TƯỞNG</a>
                            <a href="#" class="dropdown-item">MOW GARDEN 360°</a>
                        </div>
                    </div>
                </nav>
                <div class="header-buttons">
                    <a class="header-button" id="cart-button" href="${pageContext.request.contextPath}/cart">
                        <span id="cart-total">
                            <c:choose>
                                <c:when test="${not empty sessionScope.cart}">
                                    <c:set var="cartTotal" value="0" />
                                    <c:forEach var="item" items="${sessionScope.cart}">
                                        <c:set var="cartTotal" value="${cartTotal + item.price * item.quantity}" />
                                    </c:forEach>
                                    <fmt:formatNumber value="${cartTotal}" pattern="#,###"/>đ
                                </c:when>
                                <c:otherwise>0đ</c:otherwise>
                            </c:choose>
                        </span>
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </a>

                    <div class="search-container">
                        <form id="search-form" class="search-form active" action="${pageContext.request.contextPath}/search" method="get">
                            <input type="text" id="search-input" name="keyword" class="search-input" placeholder="Tìm kiếm sản phẩm...">
                            <button type="submit" class="search-button">
                                <span class="material-symbols-outlined">search</span>
                            </button>
                        </form>
                        <div id="search-results" class="search-results"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Các phần modal -->
    <div class="search-modal" id="search-modal">
        <div class="search-modal-content">
            <button class="search-modal-close" id="search-modal-close">&times;</button>
            <input type="text" id="search-modal-input" class="search-modal-input" placeholder="Tìm kiếm sản phẩm...">
            <div id="search-modal-results" class="search-modal-results"></div>
        </div>
    </div>

    <div class="modal" id="login-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Đăng nhập</h2>
                <button class="modal-close" id="close-modal">&times;</button>
            </div>
            <form id="login-form" action="${pageContext.request.contextPath}/login" method="post">
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-input" type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="password">Mật khẩu</label>
                    <input class="form-input" type="password" id="password" name="password" required>
                </div>
                <button class="modal-button" type="submit">Đăng nhập</button>
            </form>
        </div>
    </div>

    <!-- ========== MAIN CONTENT - PRODUCT DETAIL ========== -->
    <main class="bg-white dark:bg-gray-900">
        <div class="container">
            <!-- Kiểm tra nếu có sản phẩm -->
            <c:if test="${empty product}">
                <div class="error-message" style="text-align: center; padding: 50px;">
                    <h2>Không tìm thấy sản phẩm</h2>
                    <a href="${pageContext.request.contextPath}/" class="back-home">Quay lại trang chủ</a>
                </div>
            </c:if>

            <c:if test="${not empty product}">
                <!-- Breadcrumb -->
                <nav aria-label="Breadcrumb" class="breadcrumb">
                    <ol>
                        <li><a href="${pageContext.request.contextPath}/">Trang chủ</a></li>
                        <li><span class="material-symbols-outlined">chevron_right</span></li>
                        <li><a href="${pageContext.request.contextPath}/category?id=${product.categoryId}">
                            <c:choose>
                                <c:when test="${not empty category}">${category.name}</c:when>
                                <c:otherwise>Danh mục</c:otherwise>
                            </c:choose>
                        </a></li>
                        <li><span class="material-symbols-outlined">chevron_right</span></li>
                        <li aria-current="page">${product.name}</li>
                    </ol>
                </nav>

                <div class="product-grid">
                    <div class="product-main">
                        <div class="product-image-section">
                            <div class="zoom-container" id="zoom-container">
                                <img alt="${product.name}" class="product-image" id="main-product-image"
                                     src="${pageContext.request.contextPath}/${product.image}"/>

                                <!-- Nhãn giảm giá -->
                                <c:if test="${product.hasDiscount && product.discountPercentage > 0}">
                                    <div class="product-detail-discount">-${product.discountPercentage}%</div>
                                </c:if>

                                <div class="zoom-lens" id="zoom-lens"></div>
                                <div class="zoom-result" id="zoom-result"></div>

                                <!-- Navigation buttons -->
                                <button class="nav-button prev" id="prev-button">
                                    <span class="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button class="nav-button next" id="next-button">
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>

                                <!-- Favorite button -->
                                <div class="favorite-overlay">
                                    <button class="favorite-btn" id="product-favorite-btn" title="Yêu thích">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>

                            <!-- THUMBNAILS - Hiển thị 3 ảnh nhỏ (1 ảnh chính + 2 ảnh phụ từ database) -->
                            <div class="thumbnail-container">
                                <div class="product-thumbnails" id="thumbnail-container">
                                    <!-- Ảnh chính làm thumbnail đầu tiên -->
                                    <img alt="${product.name} - ảnh chính"
                                         class="product-thumbnail active"
                                         src="${pageContext.request.contextPath}/${product.image}"/>

                                    <!-- 2 ảnh phụ từ database -->
                                    <c:forEach items="${productImages}" var="img" varStatus="status">
                                        <c:if test="${status.index < 2}">
                                            <img alt="${product.name} - ảnh ${status.index + 2}"
                                                 class="product-thumbnail"
                                                 src="${pageContext.request.contextPath}/${img}"/>
                                        </c:if>
                                    </c:forEach>

                                    <!-- Nếu có ít hơn 2 ảnh phụ, thêm ảnh mặc định cho đủ 3 thumbnail -->
                                    <c:set var="totalThumbnails" value="${1 + (empty productImages ? 0 : (productImages.size() > 2 ? 2 : productImages.size()))}"/>
                                    <c:if test="${totalThumbnails < 3}">
                                        <c:forEach begin="${totalThumbnails}" end="2" var="i">
                                            <img alt="${product.name} - ảnh mặc định"
                                                 class="product-thumbnail"
                                                 src="${pageContext.request.contextPath}/images/placeholder.jpg"/>
                                        </c:forEach>
                                    </c:if>
                                </div>
                            </div>
                        </div>

                        <!-- Product Info -->
                        <div class="product-info"
                             data-product-id="${product.id}"
                             data-product-name="${product.name}"
                             data-product-price="${product.price}">
                            <h1 class="product-title">${product.name}</h1>

                            <div class="product-price-detail">
                                <span class="current-price">
                                    <fmt:formatNumber value="${product.price}" pattern="#,###"/>đ
                                </span>
                                <c:if test="${product.hasDiscount && product.originalPrice != null && product.originalPrice > 0}">
                                    <span class="original-price">
                                        <fmt:formatNumber value="${product.originalPrice}" pattern="#,###"/>đ
                                    </span>
                                    <span class="price-discount-badge">-${product.discountPercentage}%</span>
                                </c:if>
                            </div>

                            <p class="product-description">${product.description}</p>

                            <div class="product-details">
                                <c:if test="${not empty product.scientificName}">
                                    <div class="detail-row">
                                        <span class="detail-label">TÊN KHOA HỌC</span>
                                        <span class="detail-value">${product.scientificName}</span>
                                    </div>
                                </c:if>

                                <c:if test="${not empty product.otherNames}">
                                    <div class="detail-row">
                                        <span class="detail-label">TÊN GỌI KHÁC</span>
                                        <span class="detail-value">${product.otherNames}</span>
                                    </div>
                                </c:if>

                                <c:if test="${not empty product.size}">
                                    <div class="detail-row">
                                        <span class="detail-label">QUY CÁCH SẢN PHẨM</span>
                                        <span class="detail-value">${product.size}</span>
                                    </div>
                                </c:if>

                                <c:if test="${not empty product.difficulty}">
                                    <div class="detail-row">
                                        <span class="detail-label">ĐỘ KHÓ</span>
                                        <span class="detail-value">${product.difficulty}</span>
                                    </div>
                                </c:if>

                                <c:if test="${not empty product.light}">
                                    <div class="detail-row">
                                        <span class="detail-label">YÊU CẦU ÁNH SÁNG</span>
                                        <span class="detail-value">${product.light}</span>
                                    </div>
                                </c:if>

                                <c:if test="${not empty product.water}">
                                    <div class="detail-row">
                                        <span class="detail-label">NHU CẦU NƯỚC</span>
                                        <span class="detail-value">${product.water}</span>
                                    </div>
                                </c:if>
                            </div>

                            <!-- PHẦN SỐ LƯỢNG -->
                            <form action="${pageContext.request.contextPath}/product" method="get">
                                <input type="hidden" name="id" value="${product.id}">
                                <div class="quantity-selector">
                                    <span class="quantity-label">Số lượng:</span>
                                    <div class="quantity-controls">
                                        <button type="submit" name="quantity" value="${param.quantity - 1}"
                                                class="quantity-btn"
                                                <c:if test="${param.quantity <= 1}">disabled</c:if>>-</button>
                                        <span class="quantity-display" id="quantity-display">
                                            <c:choose>
                                                <c:when test="${not empty param.quantity}">${param.quantity}</c:when>
                                                <c:otherwise>1</c:otherwise>
                                            </c:choose>
                                        </span>
                                        <button type="submit" name="quantity" value="${param.quantity + 1}" class="quantity-btn">+</button>
                                    </div>
                                </div>
                            </form>

                            <!-- PHẦN NÚT ĐÃ SỬA - Thêm vào giỏ hàng -->
                            <div class="product-actions">
                                <!-- FORM THÊM VÀO GIỎ HÀNG - ĐÃ SỬA -->
                                <form action="${pageContext.request.contextPath}/cart/add" method="post">
                                    <input type="hidden" name="productId" value="${product.id}">
                                    <input type="hidden" name="productName" value="${product.name}">
                                    <input type="hidden" name="price" value="${product.price}">
                                    <input type="hidden" name="quantity" value="<c:choose><c:when test="${not empty param.quantity}">${param.quantity}</c:when><c:otherwise>1</c:otherwise></c:choose>">
                                    <input type="hidden" name="image" value="${product.image}">
                                    <input type="hidden" name="variant" value="${product.size}">
                                    <button type="submit" class="add-to-cart-btn">
                                        <span class="material-symbols-outlined">shopping_cart</span>
                                        Thêm Vào Giỏ Hàng
                                    </button>
                                </form>

                                <!-- FORM MUA NGAY -->
                                <form action="${pageContext.request.contextPath}/checkout" method="get">
                                    <input type="hidden" name="productId" value="${product.id}">
                                    <input type="hidden" name="quantity" value="<c:choose><c:when test="${not empty param.quantity}">${param.quantity}</c:when><c:otherwise>1</c:otherwise></c:choose>">
                                    <button type="submit" class="buy-now-btn">
                                        <span class="material-symbols-outlined">bolt</span>
                                        Mua Ngay
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar">
                        <h3 class="sidebar-title">
                            <span class="material-symbols-outlined">phone_in_talk</span>
                            Đặt hàng nhanh qua Hotline (8h - 21h)
                        </h3>
                        <ul class="sidebar-list">
                            <li>Hotline 1: 0838 369 639 (Call/Zalo)</li>
                            <li>Hotline 2: 09 6688 9393 (Call/Zalo)</li>
                            <li>Hotline 3: 097 753 7494 (Zalo)</li>
                        </ul>

                        <div>
                            <h3 class="sidebar-title">
                                <span class="material-symbols-outlined">local_shipping</span>
                                Thông tin giao hàng
                            </h3>
                            <ul class="sidebar-list">
                                <c:choose>
                                    <c:when test="${not empty product.shippingTime}">
                                        <li>Thời gian giao hàng: ${product.shippingTime}</li>
                                    </c:when>
                                    <c:otherwise>
                                        <li>Thời gian giao hàng dự kiến từ 1 - 7 ngày</li>
                                    </c:otherwise>
                                </c:choose>

                                <c:choose>
                                    <c:when test="${not empty product.shippingLocation}">
                                        <li>Khu vực giao hàng: ${product.shippingLocation}</li>
                                    </c:when>
                                    <c:otherwise>
                                        <li>Các sản phẩm cây gồm chậu: Chỉ giao hàng tại Tp.HCM</li>
                                    </c:otherwise>
                                </c:choose>

                                <c:if test="${product.freeShipping}">
                                    <li>Miễn phí giao hàng</li>
                                </c:if>
                            </ul>
                        </div>

                        <div>
                            <div class="sidebar-feature">
                                <span class="material-symbols-outlined">security</span>
                                <span>Chính sách bảo mật</span>
                            </div>
                            <div class="sidebar-feature">
                                <span class="material-symbols-outlined">credit_card</span>
                                <span>Phương thức thanh toán</span>
                            </div>
                            <p class="sidebar-note">Cây Xanh Việt hiểu rằng, tâm lý e ngại khi mua hàng Online, do đó chúng tôi sẽ gửi ảnh thực tế trước khi giao hàng. Khi có sự đồng ý từ quý khách mới giao hàng. Nhằm đảm chất lượng dịch vụ và quyền lợi của khách hàng.</p>
                        </div>
                    </div>
                </div>

                <!-- Reviews Section -->
                <div class="reviews-section">
                    <h2 class="section-title">Đánh giá sản phẩm</h2>

                    <div class="reviews-header">
                        <div class="rating-summary">
                            <p class="rating-score">4.9</p>
                            <p>trên 5</p>
                            <div class="rating-stars">
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star_half</span>
                            </div>
                            <p class="rating-count">(15 đánh giá)</p>
                        </div>

                        <div class="rating-filters">
                            <button class="rating-filter active">Tất cả</button>
                            <button class="rating-filter">5 Sao (13)</button>
                            <button class="rating-filter">4 Sao (2)</button>
                            <button class="rating-filter">3 Sao (0)</button>
                            <button class="rating-filter">2 Sao (0)</button>
                            <button class="rating-filter">1 Sao (0)</button>
                            <button class="rating-filter">Có Bình luận (10)</button>
                            <button class="rating-filter">Có Hình ảnh/Video (5)</button>
                        </div>
                    </div>

                    <div class="reviews-list">
                        <!-- Review mẫu -->
                        <div class="review-item">
                            <div class="review-avatar">A</div>
                            <div class="review-content">
                                <div class="review-header">
                                    <div>
                                        <h4 class="reviewer-name">Nguyễn Văn An</h4>
                                        <p class="review-date">2024-04-20 10:30</p>
                                    </div>
                                    <div class="rating-stars">
                                        <span class="material-symbols-outlined">star</span>
                                        <span class="material-symbols-outlined">star</span>
                                        <span class="material-symbols-outlined">star</span>
                                        <span class="material-symbols-outlined">star</span>
                                        <span class="material-symbols-outlined">star</span>
                                    </div>
                                </div>
                                <p class="review-text">Shop tư vấn nhiệt tình, cây nhận được y hình, xanh tốt. Giao hàng cũng rất nhanh chóng. Sẽ ủng hộ shop lần sau.</p>
                                <div class="review-actions">
                                    <button class="helpful-btn">
                                        <span class="material-symbols-outlined">thumb_up</span>
                                        <span>Hữu ích? (5)</span>
                                    </button>
                                    <button class="report-btn">Báo cáo</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="write-review">
                        <p class="write-review-text">Bạn đã mua sản phẩm này? Hãy chia sẻ cảm nhận của bạn.</p>
                        <button class="write-review-btn" onclick="location.href='${pageContext.request.contextPath}/add-review?productId=${product.id}'">
                            <span class="material-symbols-outlined">rate_review</span>
                            Viết đánh giá
                        </button>
                    </div>
                </div>

                <!-- Recently Viewed Products -->
                <c:if test="${not empty recentlyViewed}">
                    <div class="products-section">
                        <h2 class="section-title">SẢN PHẨM VỪA XEM</h2>
                        <div class="product-scroll-container">
                            <c:forEach items="${recentlyViewed}" var="rv">
                                <a class="product-item" href="${pageContext.request.contextPath}/product?id=${rv.id}">
                                    <div class="product-image-container">
                                        <img alt="${rv.name}" class="product-item-image"
                                             src="${pageContext.request.contextPath}/${rv.image}"/>
                                    </div>
                                    <h3 class="product-name">${rv.name}</h3>
                                    <div class="product-price-wrapper">
                                        <span class="product-item-price">
                                            <fmt:formatNumber value="${rv.price}" pattern="#,###"/>đ
                                        </span>
                                    </div>
                                </a>
                            </c:forEach>
                        </div>
                    </div>
                </c:if>

                <!-- Related Products -->
                <c:if test="${not empty relatedProducts}">
                    <div class="products-section">
                        <h2 class="section-title">SẢN PHẨM LIÊN QUAN</h2>
                        <div class="product-scroll-container">
                            <c:forEach items="${relatedProducts}" var="rp">
                                <a class="product-item" href="${pageContext.request.contextPath}/product?id=${rp.id}">
                                    <div class="product-image-container">
                                        <img alt="${rp.name}" class="product-item-image"
                                             src="${pageContext.request.contextPath}/${rp.image}"/>
                                    </div>
                                    <h3 class="product-name">${rp.name}</h3>
                                    <div class="product-price-wrapper">
                                        <span class="product-item-price">
                                            <fmt:formatNumber value="${rp.price}" pattern="#,###"/>đ
                                        </span>
                                    </div>
                                </a>
                            </c:forEach>
                        </div>
                    </div>
                </c:if>

                <!-- Promotional Products -->
                <c:if test="${not empty discountedProducts}">
                    <div class="products-section">
                        <h2 class="section-title">SẢN PHẨM KHUYẾN MÃI</h2>
                        <div class="product-scroll-container">
                            <c:forEach items="${discountedProducts}" var="dp">
                                <a class="product-item" href="${pageContext.request.contextPath}/product?id=${dp.id}">
                                    <div class="product-image-container">
                                        <c:if test="${dp.hasDiscount && dp.discountPercentage > 0}">
                                            <span class="home-discount-badge">-${dp.discountPercentage}%</span>
                                        </c:if>
                                        <img alt="${dp.name}" class="product-item-image"
                                             src="${pageContext.request.contextPath}/${dp.image}"/>
                                    </div>
                                    <h3 class="product-name">${dp.name}</h3>
                                    <div class="product-price-wrapper">
                                        <c:if test="${dp.hasDiscount && dp.originalPrice != null && dp.originalPrice > 0}">
                                            <span class="product-item-original-price">
                                                <fmt:formatNumber value="${dp.originalPrice}" pattern="#,###"/>đ
                                            </span>
                                        </c:if>
                                        <span class="product-item-price">
                                            <fmt:formatNumber value="${dp.price}" pattern="#,###"/>đ
                                        </span>
                                    </div>
                                </a>
                            </c:forEach>
                        </div>
                    </div>
                </c:if>

                <!-- New Products -->
                <c:if test="${not empty newProducts}">
                    <div class="products-section">
                        <h2 class="section-title">SẢN PHẨM MỚI</h2>
                        <div class="product-scroll-container">
                            <c:forEach items="${newProducts}" var="np">
                                <a class="product-item" href="${pageContext.request.contextPath}/product?id=${np.id}">
                                    <div class="product-image-container">
                                        <img alt="${np.name}" class="product-item-image"
                                             src="${pageContext.request.contextPath}/${np.image}"/>
                                    </div>
                                    <h3 class="product-name">${np.name}</h3>
                                    <div class="product-price-wrapper">
                                        <span class="product-item-price">
                                            <fmt:formatNumber value="${np.price}" pattern="#,###"/>đ
                                        </span>
                                    </div>
                                </a>
                            </c:forEach>
                        </div>
                    </div>
                </c:if>
            </c:if>

            <!-- Policy section -->
            <div class="policy-section">
                <h2 class="section-title">CHÍNH SÁCH ĐỔI TRẢ</h2>
                <div class="policy-details">
                    <p>Cây Xanh Việt muốn mang đến trải nghiệm mua sắm tuyệt vời nhất tới khách hàng của mình. Chính vì vậy mà tất cả các sản phẩm được mua tại Cây Xanh Việt đều sẽ được đảm bảo chất lượng trước khi tới tay khách hàng. Hy vọng rằng bạn sẽ không chỉ hài lòng về sản phẩm mà về chất lượng phục vụ. Nếu có bất kì vấn đề nào gặp phải, bạn hãy liên hệ ngay với Cây Xanh Việt để được giải quyết nhé.</p>
                </div>
                <div class="policy-grid">
                    <div class="policy-item">
                        <h3 class="policy-title">Sản phẩm không phải là cây</h3>
                        <p class="policy-description">Đối với các mặt hàng không phải là cây xanh, quý khách hoàn toàn có thể đổi trả trong vòng 30 ngày kể từ ngày nhận được hàng, nếu như sản phẩm gặp phải vấn đề lỗi từ nhà sản xuất.</p>
                    </div>
                    <div class="policy-item">
                        <h3 class="policy-title">Đối với cây có kích thước nhỏ</h3>
                        <p class="policy-description">Tất cả những loại cây xanh có kích thước nhỏ (dưới 100cm) sẽ được Cây Xanh Việt bảo hành trong vòng 30 ngày. Nếu như cây mà bạn nhận được gặp phải vấn đề suy yếu không thể hồi phục thì hay liên hệ ngay để được đổi cây mới.</p>
                    </div>
                    <div class="policy-item">
                        <h3 class="policy-title">Đối với cây lớn trên 100cm</h3>
                        <p class="policy-description">Đối với những loại cây xanh có kích thước lớn trên 100cm, khi được giao tới mà bị các vấn đề hư hại, héo rũ hoặc suy yếu, quý khách vui lòng liên hệ ngay với Cây Xanh Việt để được đổi cây mới trong vòng 7 ngày.</p>
                    </div>
                </div>
                <div class="policy-details">
                    <p>Để thực hiện đổi trả, quý khách có thể liên hệ với Cây Xanh Việt thông qua số hotline (0838 369 639 hoặc 09 6688 9393), fanpage hoặc gửi email tới hotro@cayxanhviet.com và cung cấp đầy đủ thông tin qua form sau:</p>
                    <ul>
                        <li>Mã đơn hàng:</li>
                        <li>Thông tin khách hàng:</li>
                        <li>Vấn đề gặp phải:</li>
                    </ul>
                </div>
            </div>

            <!-- Newsletter section -->
            <div class="newsletter-section">
                <h2 class="section-title">ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI</h2>
                <form class="newsletter-form" action="${pageContext.request.contextPath}/newsletter" method="post">
                    <div class="form-group">
                        <label class="form-label" for="name">Họ và tên</label>
                        <input class="form-input" id="name" name="name" placeholder="Nhập họ và tên" type="text"/>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="dob">Ngày sinh</label>
                        <div class="input-with-icon">
                            <input class="form-input" id="dob" name="dob" placeholder="dd/mm/yyyy" type="text"/>
                            <span class="material-symbols-outlined input-icon">calendar_today</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="email">Địa chỉ email</label>
                        <input class="form-input" id="email" name="email" placeholder="exam@gmail.com" type="email"/>
                    </div>
                    <button class="newsletter-btn" type="submit">
                        <span class="material-symbols-outlined">send</span>
                        ĐĂNG KÝ
                    </button>
                </form>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container footer-main">
            <div class="footer-grid">
                <div class="footer-column">
                    <a class="footer-logo" href="${pageContext.request.contextPath}/">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                            <path d="M12 15a7.99 7.99 0 0 1-8-8c0-2.21.9-4.21 2.35-5.65A8.003 8.003 0 0 1 12 2a8.003 8.003 0 0 1 5.65 2.35C19.1 5.79 20 7.79 20 10a7.99 7.99 0 0 1-8 5z"></path>
                            <path d="M8.5 12.5a5.5 5.5 0 0 1 7-4.76"></path>
                        </svg>
                        <span>Cây Xanh Việt</span>
                    </a>
                    <p class="footer-description">Chúng tôi mong muốn mang đến không gian sống xanh, như là một cách để khơi nguồn cảm hứng, cải thiện chất lượng tinh thần và mang lại tính thẩm mỹ cho không gian nội thất.</p>
                    <p class="footer-company">Công ty TNHH Cây Xanh Việt</p>
                    <p class="footer-tax">MST: 031770935</p>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">VỀ CHÚNG TÔI</h4>
                    <ul class="footer-links">
                        <li class="footer-link-item"><a class="footer-link" href="#">Giới thiệu</a></li>
                        <li class="footer-link-item"><a class="footer-link" href="#">Liên hệ</a></li>
                        <li class="footer-link-item"><a class="footer-link" href="#">Chính sách bảo mật</a></li>
                        <li class="footer-link-item"><a class="footer-link" href="#">Chính sách bảo hành</a></li>
                        <li class="footer-link-item"><a class="footer-link" href="#">Phương thức thanh toán</a></li>
                        <li class="footer-link-item"><a class="footer-link" href="#">Phương thức vận chuyển</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">LIÊN HỆ</h4>
                    <ul class="footer-contact">
                        <li class="footer-contact-item">Hotline 1: 09 6688 9393</li>
                        <li class="footer-contact-item">Hotline 2: 0838 369 639</li>
                        <li class="footer-contact-item">Hotline 3: 097 753 7494</li>
                        <li class="footer-contact-item">Email: hotro@cayxanhviet.com</li>
                        <li class="footer-contact-item">Địa chỉ: 256 - 258 Bình Thành, BHH B, Q. Bình Tân, Tp.HCM</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">MẠNG XÃ HỘI</h4>
                    <div class="footer-social">
                        <a class="social-link" href="#">
                            <img alt="Facebook icon" class="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"/>
                        </a>
                        <a class="social-link" href="#">
                            <img alt="Twitter icon" class="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"/>
                        </a>
                        <a class="social-link" href="#">
                            <img alt="Instagram icon" class="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"/>
                        </a>
                        <a class="social-link" href="#">
                            <img alt="YouTube icon" class="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container footer-bottom-content">
                <p>Copyright 2025 © Cây Xanh Việt</p>
            </div>
        </div>
    </footer>
</div>

</body>
</html>