<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi Tiết Đơn Hàng - Cây Xanh Việt</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="fonts/style.css">
    <link rel="stylesheet" href="fonts/order-detail.css">
</head>
<body class="light">
<div class="layout-container">
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
                    <a class="favorite-link" href="favorites.jsp">
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
                                    <a href="account.jsp" class="user-dropdown-item">
                                        <span class="material-symbols-outlined">person</span>
                                        <span>Tài khoản của tôi</span>
                                    </a>
                                    <a href="orders.jsp" class="user-dropdown-item">
                                        <span class="material-symbols-outlined">shopping_bag</span>
                                        <span>Đơn mua</span>
                                    </a>
                                    <a href="addresses.html" class="user-dropdown-item">
                                        <span class="material-symbols-outlined">location_on</span>
                                        <span>Danh sách địa chỉ</span>
                                    </a>
                                    <a href="logout" class="user-dropdown-item" id="logout-btn">
                                        <span class="material-symbols-outlined">logout</span>
                                        <span>Đăng xuất</span>
                                    </a>
                                </div>
                            </div>
                        </c:when>
                        <c:otherwise>
                            <!-- Chưa đăng nhập -->
                            <a class="login-link" href="login.jsp" id="login-link">
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
                    <a class="logo" href="index.jsp">
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                            <path d="M12 15a7.99 7.99 0 0 1-8-8c0-2.21.9-4.21 2.35-5.65A8.003 8.003 0 0 1 12 2a8.003 8.003 0 0 1 5.65 2.35C19.1 5.79 20 7.79 20 10a7.99 7.99 0 0 1-8 5zm-3.5-2.5a5.5 5.5 0 0 0 7-4.76"></path>
                        </svg>
                        <span class="logo-text">Cây Xanh Việt</span>
                    </a>
                </div>
                <nav class="nav">
                    <!-- Các mục menu như cũ -->
                    <div class="nav-item">
                        <a class="nav-link" href="#">
                            Cây trong nhà <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Cây Cảnh Mini</a>
                            <a href="category.jsp?category=cay-cao-lon" class="dropdown-item">Cây Cao & Lớn</a>
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
                    <a class="header-button" id="cart-button" href="cart.jsp">
                        <span id="cart-total">0đ</span>
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </a>

                    <div class="search-container">
                        <form id="search-form" class="search-form active">
                            <input type="text" id="search-input" class="search-input" placeholder="Tìm kiếm sản phẩm...">
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

    <!-- Các phần modal giữ nguyên -->
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
            <form id="login-form">
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-input" type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="password">Mật khẩu</label>
                    <input class="form-input" type="password" id="password" required>
                </div>
                <button class="modal-button" type="submit">Đăng nhập</button>
            </form>
        </div>
    </div>

    <main class="main-content">
        <div class="container">
            <div class="order-detail-wrapper">
                <a href="${pageContext.request.contextPath}/orders" class="back-link">
                    <span class="material-icons">arrow_back</span> Quay lại đơn mua
                </a>

                <c:if test="${empty order}">
                    <div class="not-found">
                        <span class="material-icons not-found-icon">error_outline</span>
                        <h2 class="not-found-title">Không tìm thấy đơn hàng</h2>
                        <a href="${pageContext.request.contextPath}/orders" class="btn-primary">Xem đơn mua</a>
                    </div>
                </c:if>

                <c:if test="${not empty order}">
                    <div class="order-detail-card">
                        <!-- Header đơn hàng -->
                        <div class="detail-header">
                            <div class="order-info">
                                <div class="order-number">Mã đơn: ${order.orderNumber}</div>
                                <div class="order-date">Ngày đặt: ${order.formattedOrderDate}</div>
                            </div>
                            <div class="order-status-badge
                                <c:choose>
                                    <c:when test="${order.status eq 'Hoàn thành'}">status-Hoan-thanh</c:when>
                                    <c:when test="${order.status eq 'Đã hủy'}">status-Da-huy</c:when>
                                    <c:when test="${order.status eq 'Chờ xác nhận'}">status-Cho-xac-nhan</c:when>
                                    <c:when test="${order.status eq 'Vận chuyển'}">status-Van-chuyen</c:when>
                                    <c:when test="${order.status eq 'Chờ giao hàng'}">status-Cho-giao-hang</c:when>
                                    <c:when test="${order.status eq 'Trả hàng/Hoàn tiền'}">status-Tra-hang-Hoan-tien</c:when>
                                    <c:otherwise>status-pending</c:otherwise>
                                </c:choose>">
                                <span class="material-icons">
                                    <c:choose>
                                        <c:when test="${order.status eq 'Hoàn thành'}">check_circle</c:when>
                                        <c:when test="${order.status eq 'Đã hủy'}">cancel</c:when>
                                        <c:when test="${order.status eq 'Chờ xác nhận'}">schedule</c:when>
                                        <c:when test="${order.status eq 'Vận chuyển'}">local_shipping</c:when>
                                        <c:when test="${order.status eq 'Chờ giao hàng'}">package</c:when>
                                        <c:when test="${order.status eq 'Trả hàng/Hoàn tiền'}">assignment_return</c:when>
                                        <c:otherwise>pending</c:otherwise>
                                    </c:choose>
                                </span>
                                <span>${order.status}</span>
                            </div>
                        </div>

                        <!-- Thông tin khách hàng -->
                        <div class="info-section">
                            <h3 class="section-title">
                                <span class="material-icons">person</span>
                                Thông tin nhận hàng
                            </h3>
                            <div class="info-grid">
                                <div class="info-item">
                                    <span class="info-label">Người nhận:</span>
                                    <span class="info-value">${order.customerName}</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Số điện thoại:</span>
                                    <span class="info-value">${order.customerPhone}</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Email:</span>
                                    <span class="info-value">${order.customerEmail}</span>
                                </div>
                                <div class="info-item full-width">
                                    <span class="info-label">Địa chỉ:</span>
                                    <span class="info-value">${order.streetAddress}, ${order.ward}, ${order.district}, ${order.province}</span>
                                </div>
                                <c:if test="${not empty order.notes}">
                                    <div class="info-item full-width">
                                        <span class="info-label">Ghi chú:</span>
                                        <span class="info-value">${order.notes}</span>
                                    </div>
                                </c:if>
                            </div>
                        </div>

                        <!-- Danh sách sản phẩm -->
                        <div class="info-section">
                            <h3 class="section-title">
                                <span class="material-icons">shopping_bag</span>
                                Sản phẩm đã đặt
                            </h3>
                            <div class="product-list">
                                <c:forEach var="item" items="${order.items}">
                                    <div class="product-item">
                                        <div class="product-image">
                                            <img src="${pageContext.request.contextPath}/${item.productImage}"
                                                 alt="${item.productName}"
                                                 onerror="this.src='${pageContext.request.contextPath}/images/no-image.jpg'">
                                        </div>
                                        <div class="product-info">
                                            <h4 class="product-name">${item.productName}</h4>
                                            <c:if test="${not empty item.variant}">
                                                <div class="product-variant">${item.variant}</div>
                                            </c:if>
                                            <div class="product-meta">
                                                <span class="product-price">
                                                    <fmt:formatNumber value="${item.price}" pattern="#,###" />₫
                                                </span>
                                                <span class="product-quantity">x${item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                </c:forEach>
                            </div>
                        </div>

                        <!-- Thông tin thanh toán -->
                        <div class="info-section">
                            <h3 class="section-title">
                                <span class="material-icons">receipt</span>
                                Thông tin thanh toán
                            </h3>
                            <div class="payment-summary">
                                <div class="summary-row">
                                    <span class="summary-label">Tạm tính:</span>
                                    <span class="summary-value"><fmt:formatNumber value="${order.subtotal}" pattern="#,###" />₫</span>
                                </div>
                                <div class="summary-row">
                                    <span class="summary-label">Phí vận chuyển:</span>
                                    <span class="summary-value"><fmt:formatNumber value="${order.shippingFee}" pattern="#,###" />₫</span>
                                </div>
                                <c:if test="${order.discount > 0}">
                                    <div class="summary-row">
                                        <span class="summary-label">Giảm giá:</span>
                                        <span class="summary-value discount">-<fmt:formatNumber value="${order.discount}" pattern="#,###" />₫</span>
                                    </div>
                                </c:if>
                                <div class="summary-row total">
                                    <span class="summary-label">Tổng cộng:</span>
                                    <span class="summary-value total-amount"><fmt:formatNumber value="${order.total}" pattern="#,###" />₫</span>
                                </div>
                                <div class="payment-method-info">
                                    <span class="method-label">Phương thức thanh toán:</span>
                                    <span class="method-value">${order.paymentMethod}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Nút hành động -->
                        <div class="action-buttons">
                            <a href="${pageContext.request.contextPath}/cart?buyAgain=${order.id}" class="btn-primary">Mua lại</a>
                            <a href="${pageContext.request.contextPath}/contact?order=${order.id}" class="btn-secondary">Liên hệ người bán</a>
                            <a href="${pageContext.request.contextPath}/reviews?order=${order.id}" class="btn-secondary">Đánh giá</a>
                        </div>
                    </div>
                </c:if>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container footer-main">
            <div class="footer-grid">
                <div class="footer-column">
                    <a class="footer-logo" href="index.jsp">
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
                        <li class="footer-contact-item">Email: hotro@vuoncayviet.com</li>
                        <li class="footer-contact-item">Địa chỉ: 256 - 258 Bình Thành, BHH B, Q. Bình Tân, Tp.HCM</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">MẠNG XÃ HỘI</h4>
                    <div class="footer-social">
                        <a class="social-link" href="#">
                            <img alt="Facebook icon" class="social-icon" src="images/social/fb.jpg"/>
                        </a>
                        <a class="social-link" href="#">
                            <img alt="Twitter icon" class="social-icon" src="images/social/twitter.jpg"/>
                        </a>
                        <a class="social-link" href="#">
                            <img alt="Instagram icon" class="social-icon" src="images/social/ig.jpg"/>
                        </a>
                        <a class="social-link" href="#">
                            <img alt="YouTube icon" class="social-icon" src="images/social/yt.jpg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container footer-bottom-content">
                <p>Copyright 2025 © MOWGARDEN</p>
            </div>
        </div>
    </footer>
</div>
</body>
</html>