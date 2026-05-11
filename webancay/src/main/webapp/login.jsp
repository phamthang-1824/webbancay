<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập - Cây Xanh Việt</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    <link rel="stylesheet" href="fonts/style.css">
    <link rel="stylesheet" href="fonts/login.css">
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

                    <a class="login-link" href="login.jsp" id="login-link">
                        Đăng nhập
                    </a>

                    <div class="user-menu" id="user-menu" style="display: none;">
                        <div class="user-info">
                            <div class="user-avatar" id="user-avatar">V</div>
                            <span class="user-name" id="user-name">van van</span>
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
                            <a href="#" class="user-dropdown-item" id="logout-btn">
                                <span class="material-symbols-outlined">logout</span>
                                <span>Đăng xuất</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="container header-main-content">
                <div class="logo-container">
                    <a class="logo" href="index.html">
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

    <main class="main-content">
        <div class="container">
            <div class="login-container">
                <h1 class="login-title">ĐĂNG NHẬP TÀI KHOẢN</h1>

                <c:if test="${not empty errors}">
                    <div class="error-message">
                        <c:forEach var="error" items="${errors}">
                            <div class="error-item">✗ ${error}</div>
                        </c:forEach>
                    </div>
                </c:if>

                <c:if test="${not empty param.success and param.success == 'register'}">
                    <div class="success-message">
                        <h3>Đăng ký thành công!</h3>
                        <p>
                            <c:choose>
                                <c:when test="${not empty registeredUserName}">
                                    Chào mừng <strong>${registeredUserName}</strong> đến với Cây Xanh Việt!
                                </c:when>
                                <c:otherwise>
                                    Tài khoản của bạn đã được tạo thành công!
                                </c:otherwise>
                            </c:choose>
                            <br>
                            <small>Vui lòng đăng nhập để tiếp tục.</small>
                        </p>
                    </div>
                </c:if>

                <form id="loginForm" action="login" method="POST">
                    <div class="form-group">
                        <label class="form-label" for="login-email">Email</label>
                        <input class="form-input" autocomplete="email" id="login-email" name="email"
                               placeholder="Email" required type="email"
                               value="${not empty email ? email : ''}">
                        <c:if test="${not empty fieldErrors.email}">
                            <div class="field-error">${fieldErrors.email}</div>
                        </c:if>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="login-password">Mật khẩu</label>
                        <input class="form-input" autocomplete="current-password" id="login-password"
                               name="password" placeholder="Mật khẩu" required type="password">
                        <c:if test="${not empty fieldErrors.password}">
                            <div class="field-error">${fieldErrors.password}</div>
                        </c:if>
                    </div>

                    <div class="form-group remember-me">
                        <input type="checkbox" id="remember-me" name="remember-me">
                        <label for="remember-me">Ghi nhớ đăng nhập</label>
                    </div>

                    <div class="recaptcha-notice">
                        This site is protected by reCAPTCHA and the Google
                        <a href="#">Privacy Policy</a> and
                        <a href="#">Terms of Service</a> apply.
                    </div>

                    <div class="form-footer">
                        <button class="submit-button" type="submit">
                            ĐĂNG NHẬP
                        </button>
                        <div class="form-links">
                            <a class="forgot-password" href="forgot-password.jsp">Quên mật khẩu?</a>
                            <span class="separator">hoặc</span>
                            <a class="register-link" href="register.jsp">Đăng ký</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container footer-main">
            <div class="footer-grid">
                <div class="footer-column">
                    <a class="footer-logo" href="index.html">
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

<!-- POPUP ĐĂNG NHẬP THÀNH CÔNG - GIỐNG NHƯ REGISTER -->
<div class="success-popup
<c:if test='${not empty loginSuccess and loginSuccess}'>show
</c:if>" id="successPopup">
    <div class="success-popup-content">
        <h3 class="success-popup-title">Đăng nhập thành công!</h3>
        <p class="success-popup-message">
            Chào mừng <strong><c:out value="${userFullName}" default="bạn" /></strong> quay trở lại!<br>
            Đang chuyển hướng...
        </p>
        <a href="index.jsp" class="success-popup-button">Đóng</a>
    </div>
</div>

<!-- TỰ ĐỘNG CHUYỂN HƯỚNG SAU 3 GIÂY - ĐẶT SAU POPUP -->
<c:if test="${not empty loginSuccess and loginSuccess}">
    <meta http-equiv="refresh" content="3;url=index.jsp">
</c:if>

</body>
</html>