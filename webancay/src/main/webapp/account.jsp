<%@ page import="vn.edu.nlu.fit.webancay.model.User" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
    // ========== KIỂM TRA ĐĂNG NHẬP TRỰC TIẾP ==========
    HttpSession currentSession = request.getSession(false);

    if (currentSession == null || currentSession.getAttribute("user") == null) {
        // Chưa đăng nhập -> về trang login
        response.sendRedirect("login.jsp");
        return; // Dừng xử lý tiếp
    }

    // Lấy user từ session
    User userObj = (User) currentSession.getAttribute("user");

    // Format ngày sinh nếu có
    String formattedBirthdate = null;
    if (userObj.getBirthdate() != null) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        formattedBirthdate = sdf.format(userObj.getBirthdate());
    }

    // Đưa vào các scope để dùng
    pageContext.setAttribute("user", userObj);
    pageContext.setAttribute("formattedBirthdate", formattedBirthdate);
    pageContext.setAttribute("birthdateValue", formattedBirthdate != null ? formattedBirthdate : "");
%>

<!DOCTYPE html>
<html class="light" lang="vi">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Cây Xanh Việt - Hồ Sơ Của Tôi</title>
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="fonts/style.css">
    <link rel="stylesheet" href="fonts/account.css">
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
                        <c:when test="${not empty user}">
                            <!-- Đã đăng nhập -->
                            <div class="user-menu" id="user-menu">
                                <div class="user-info">
                                    <div class="user-avatar" id="user-avatar">
                                            ${user.firstName.charAt(0)}
                                    </div>
                                    <span class="user-name" id="user-name">
                                        ${user.lastName} ${user.firstName}
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

    <!-- PHẦN NỘI DUNG CHÍNH - FORM PROFILE -->
    <main class="profile-section">
        <div class="container">
            <div class="profile-header">
                <h1 class="profile-title">Hồ Sơ Của Tôi</h1>
                <p class="profile-subtitle">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            <!-- Hiển thị thông báo -->
            <c:if test="${not empty sessionScope.message}">
                <div class="alert alert-success">${sessionScope.message}</div>
                <c:remove var="message" scope="session"/>
            </c:if>

            <c:if test="${not empty sessionScope.error}">
                <div class="alert alert-error">${sessionScope.error}</div>
                <c:remove var="error" scope="session"/>
            </c:if>

            <div class="order-container">
                <!-- Sidebar (đã đơn giản hóa) -->
                <aside class="order-sidebar">
                    <nav class="sidebar-nav">
                        <!-- Chỉ giữ lại 2 mục chính -->
                        <a class="nav-item active" href="account.jsp">
                            <div class="nav-icon">
                                <span class="material-icons blue">person_outline</span>
                            </div>
                            <span>Tài Khoản Của Tôi</span>
                        </a>
                        <a class="nav-item" href="orders.jsp">
                            <div class="nav-icon">
                                <span class="material-icons red">receipt_long</span>
                            </div>
                            <span>Đơn Mua</span>
                        </a>
                    </nav>
                </aside>

                <!-- Main Content -->
                <div class="order-main">
                    <div class="profile-card">
                        <div class="profile-content">
                            <div class="profile-form">
                                <form id="profile-form" method="post" action="${pageContext.request.contextPath}/UpdateProfileServlet">
                                    <!-- Tên đăng nhập (email) -->
                                    <div class="form-row">
                                        <label class="form-label">Tên đăng nhập</label>
                                        <div class="form-value">${user.email}</div>
                                    </div>

                                    <!-- HỌ (khớp với CSDL: last_name) -->
                                    <div class="form-row">
                                        <label class="form-label" for="last_name">Họ</label>
                                        <input type="text" id="last_name" name="last_name" class="form-input"
                                               value="${user.lastName}" placeholder="Nhập họ của bạn">
                                    </div>

                                    <!-- TÊN (khớp với CSDL: first_name) -->
                                    <div class="form-row">
                                        <label class="form-label" for="first_name">Tên</label>
                                        <input type="text" id="first_name" name="first_name" class="form-input"
                                               value="${user.firstName}" placeholder="Nhập tên của bạn">
                                    </div>

                                    <!-- Email (không thể thay đổi) -->
                                    <div class="form-row">
                                        <label class="form-label">Email</label>
                                        <div>
                                            <span class="form-value">${user.email}</span>
                                            <small class="form-hint">Email không thể thay đổi</small>
                                        </div>
                                    </div>

                                    <!-- Số điện thoại -->
                                    <div class="form-row">
                                        <label class="form-label" for="phone">Số điện thoại</label>
                                        <div>
                                            <input type="tel" id="phone" name="phone" class="form-input"
                                                   value="${user.phone}" placeholder="Nhập số điện thoại">
                                            <c:if test="${empty user.phone}">
                                                <small class="form-hint">Chưa có số điện thoại</small>
                                            </c:if>
                                        </div>
                                    </div>

                                    <!-- Giới tính -->
                                    <div class="form-row">
                                        <label class="form-label">Giới tính</label>
                                        <div class="gender-options">
                                            <label class="gender-option">
                                                <input type="radio" name="gender" value="male"
                                                ${user.gender == 'male' ? 'checked' : ''}>
                                                <span>Nam</span>
                                            </label>
                                            <label class="gender-option">
                                                <input type="radio" name="gender" value="female"
                                                ${user.gender == 'female' ? 'checked' : ''}>
                                                <span>Nữ</span>
                                            </label>
                                        </div>
                                    </div>

                                    <!-- Ngày sinh (input text như form đăng ký) -->
                                    <div class="form-row">
                                        <label class="form-label" for="birthdate">Ngày sinh</label>
                                        <div>
                                            <input type="text" id="birthdate" name="birthdate" class="form-input"
                                                   value="${birthdateValue}" placeholder="dd/mm/yyyy">
                                            <small class="form-hint">Ví dụ: 15/08/2000</small>
                                        </div>
                                    </div>

                                    <!-- Mật khẩu (chỉ có link đổi) -->
                                    <div class="form-row">
                                        <label class="form-label">Mật khẩu</label>
                                        <div>
                                            <a href="change-password.jsp" class="change-password-link">Đổi mật khẩu</a>
                                        </div>
                                    </div>

                                    <div class="form-actions">
                                        <button type="submit" class="save-button">Lưu thay đổi</button>
                                    </div>
                                </form>
                            </div>

                            <div class="profile-sidebar">
                                <!-- Avatar upload -->
                                <div class="avatar-container">
                                    <c:choose>
                                        <c:when test="${not empty user.avatar}">
                                            <!-- ĐÃ XÓA alt="Avatar" để fix lỗi chữ bị lệch -->
                                            <img src="${pageContext.request.contextPath}/uploads/avatars/${user.avatar}"
                                                 id="avatar-preview" class="avatar-preview">
                                        </c:when>
                                        <c:otherwise>
                                            <span class="material-symbols-outlined avatar-icon" id="avatar-default">person</span>
                                        </c:otherwise>
                                    </c:choose>
                                </div>
                                <!-- Form upload avatar riêng -->
                                <form id="avatar-form" enctype="multipart/form-data" method="post" action="${pageContext.request.contextPath}/UploadAvatarServlet">
                                    <div class="avatar-upload-controls">
                                        <input type="file" id="avatar-input" name="avatar"
                                               accept="image/jpeg,image/png" style="width:350px" class="avatar-input" required>
                                        <button type="submit" class="avatar-upload-button">
                                            Tải ảnh lên
                                        </button>
                                    </div>
                                </form>
                                <div class="avatar-requirements">
                                    <p>Dung lượng file tối đa 1 MB</p>
                                    <p>Định dạng: .JPEG, .PNG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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