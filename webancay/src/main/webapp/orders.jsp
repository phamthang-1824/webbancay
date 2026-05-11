<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đơn Mua - Cây Xanh Việt</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="fonts/style.css">
    <link rel="stylesheet" href="fonts/order.css">

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
            <div class="order-container">
                <!-- Sidebar -->
                <aside class="order-sidebar">
                    <nav class="sidebar-nav">
                        <a class="nav-item" href="account.jsp">
                            <div class="nav-icon">
                                <span class="material-icons blue">person_outline</span>
                            </div>
                            <span>Tài Khoản Của Tôi</span>
                        </a>
                        <a class="nav-item active" href="${pageContext.request.contextPath}/orders">
                            <div class="nav-icon">
                                <span class="material-icons red">receipt_long</span>
                            </div>
                            <span>Đơn Mua</span>
                        </a>
                    </nav>
                </aside>

                <!-- Main Content -->
                <div class="order-main">
                    <!-- Order Tabs -->
                    <div class="order-tabs">
                        <div class="tabs-container no-scrollbar">
                            <a class="tab ${empty param.status or param.status eq 'all' ? 'active' : ''}" href="${pageContext.request.contextPath}/orders?status=all">Tất cả</a>
                            <a class="tab ${param.status eq 'Chờ xác nhận' ? 'active' : ''}" href="${pageContext.request.contextPath}/orders?status=Ch%E1%BB%9D%20x%C3%A1c%20nh%E1%BA%ADn">Chờ xác nhận</a>
                            <a class="tab ${param.status eq 'Vận chuyển' ? 'active' : ''}" href="${pageContext.request.contextPath}/orders?status=V%E1%BA%ADn%20chuy%E1%BB%83n">Vận chuyển</a>
                            <a class="tab ${param.status eq 'Chờ giao hàng' ? 'active' : ''}" href="${pageContext.request.contextPath}/orders?status=Ch%E1%BB%9D%20giao%20h%C3%A0ng">Chờ giao hàng</a>
                            <a class="tab ${param.status eq 'Hoàn thành' ? 'active' : ''}" href="${pageContext.request.contextPath}/orders?status=Ho%C3%A0n%20th%C3%A0nh">Hoàn thành</a>
                            <a class="tab ${param.status eq 'Đã hủy' ? 'active' : ''}" href="${pageContext.request.contextPath}/orders?status=%C4%90%C3%A3%20h%E1%BB%A7y">Đã hủy</a>
                            <a class="tab ${param.status eq 'Trả hàng/Hoàn tiền' ? 'active' : ''}" href="${pageContext.request.contextPath}/orders?status=Tr%E1%BA%A3%20h%C3%A0ng%2FHo%C3%A0n%20ti%E1%BB%81n">Trả hàng/Hoàn tiền</a>
                        </div>
                    </div>

                    <!-- Search Box -->
                    <div class="search-box">
                        <span class="material-icons search-icon">search</span>
                        <input class="search-input" type="text" placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm">
                    </div>

                    <!-- Kiểm tra nếu không có đơn hàng -->
                    <c:if test="${empty orders}">
                        <div class="no-orders-container">
                            <div class="empty-state">
                                <span class="material-icons empty-icon">shopping_bag</span>
                                <h2 class="empty-title">Chưa có đơn hàng</h2>
                                <p class="empty-message">Bạn chưa có đơn hàng nào. Hãy bắt đầu mua sắm nhé!</p>
                                <a href="${pageContext.request.contextPath}/index.jsp" class="shop-now-btn">Mua sắm ngay</a>
                            </div>
                        </div>
                    </c:if>

                    <!-- Hiển thị danh sách đơn hàng nếu có - ĐÃ THÊM LINK -->
                    <c:if test="${not empty orders}">
                        <c:forEach var="order" items="${orders}" varStatus="status">
                            <a href="${pageContext.request.contextPath}/order-detail?id=${order.id}" class="order-card-link">
                                <div class="order-card" data-order-id="${order.id}" data-status="${order.status}">
                                    <!-- Order Header -->
                                    <div class="order-header">
                                        <div class="shop-info">
                                            <span class="shop-badge">Mall</span>
                                            <span class="shop-name">Cây Xanh Việt</span>
                                            <div class="shop-actions">
                                                <a href="${pageContext.request.contextPath}/chat?order=${order.id}" class="shop-button chat-button" onclick="event.stopPropagation();">
                                                    <span class="material-icons">chat_bubble_outline</span>
                                                    Chat
                                                </a>
                                                <a href="${pageContext.request.contextPath}/shop" class="shop-button view-shop-button" onclick="event.stopPropagation();">
                                                    <span class="material-icons">storefront</span>
                                                    Xem Shop
                                                </a>
                                            </div>
                                        </div>
                                        <div class="order-status">
                                            <span class="status-success">
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
                                                <c:choose>
                                                    <c:when test="${order.status eq 'Hoàn thành'}">Giao hàng thành công</c:when>
                                                    <c:when test="${order.status eq 'Đã hủy'}">Đơn hàng đã hủy</c:when>
                                                    <c:when test="${order.status eq 'Chờ xác nhận'}">Đang chờ xác nhận</c:when>
                                                    <c:when test="${order.status eq 'Vận chuyển'}">Đang vận chuyển</c:when>
                                                    <c:when test="${order.status eq 'Chờ giao hàng'}">Chờ giao hàng</c:when>
                                                    <c:when test="${order.status eq 'Trả hàng/Hoàn tiền'}">Đang xử lý trả hàng</c:when>
                                                    <c:otherwise>${order.status}</c:otherwise>
                                                </c:choose>
                                            </span>
                                            <span class="status-divider">|</span>
                                            <span class="status-completed">${order.status}</span>
                                        </div>
                                    </div>

                                    <!-- Order Items -->
                                    <div class="order-items-container">
                                        <c:forEach var="item" items="${order.items}">
                                            <div class="order-item">
                                                <div class="product-image">
                                                    <img src="${pageContext.request.contextPath}/${item.productImage}"
                                                         alt="${item.productName}"
                                                         onerror="this.src='${pageContext.request.contextPath}/images/no-image.jpg'">
                                                </div>
                                                <div class="product-details">
                                                    <div class="product-header">
                                                        <h3 class="product-name">${item.productName}</h3>
                                                        <div class="product-price">
                                                            <span class="current-price"><fmt:formatNumber value="${item.price}" pattern="#,###" />₫</span>
                                                        </div>
                                                    </div>
                                                    <c:if test="${not empty item.variant}">
                                                        <div class="product-variant">Phân loại hàng: ${item.variant}</div>
                                                    </c:if>
                                                    <div class="product-quantity">x${item.quantity}</div>
                                                    <div>
                                                        <span class="return-policy">7 ngày trả hàng</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </c:forEach>
                                    </div>

                                    <!-- Order Summary -->
                                    <div class="order-summary">
                                        <span class="summary-label">Thành tiền:</span>
                                        <span class="summary-total"><fmt:formatNumber value="${order.total}" pattern="#,###" />₫</span>
                                    </div>

                                    <!-- Order Actions -->
                                    <div class="order-actions">
                                        <a href="${pageContext.request.contextPath}/cart?buyAgain=${order.id}" class="action-button buy-again-button" onclick="event.stopPropagation();">Mua Lại</a>
                                        <a href="${pageContext.request.contextPath}/contact?order=${order.id}" class="action-button contact-button" onclick="event.stopPropagation();">Liên Hệ Người Bán</a>
                                        <a href="${pageContext.request.contextPath}/reviews?shop=cayxanhviet" class="action-button review-button" onclick="event.stopPropagation();">Xem Đánh Giá Shop</a>
                                    </div>
                                </div>
                            </a>
                        </c:forEach>
                    </c:if>
                </div>
            </div>
        </div>
    </main>

    <!-- Order Detail Modal -->
    <div class="order-modal" id="orderModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Chi Tiết Đơn Hàng</h3>
                <a href="#" class="close-button" id="closeModal">
                    <span class="material-icons">close</span>
                </a>
            </div>
            <div class="modal-body" id="orderModalBody">
                <!-- Nội dung sẽ được thêm bằng JavaScript -->
            </div>
        </div>
    </div>

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