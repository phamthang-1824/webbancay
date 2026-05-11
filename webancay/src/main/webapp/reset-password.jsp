<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đặt lại mật khẩu - Cây Xanh Việt</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    <link rel="stylesheet" href="fonts/style.css">
    <link rel="stylesheet" href="fonts/reset-password.css">
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
                    <a class="login-link" href="login.jsp">Đăng nhập</a>
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

    <!-- MAIN CONTENT -->
    <main class="main-content">
        <div class="container">
            <c:choose>
                <%-- Trường hợp token không hợp lệ hoặc hết hạn --%>
                <c:when test="${not empty error}">
                    <div class="reset-password-container">
                        <div class="error-message-reset">
                            <span class="material-symbols-outlined">error</span>
                            <span>${error}</span>
                        </div>
                        <div style="text-align: center;">
                            <a href="forgot-password.jsp" class="btn-submit-reset" style="text-decoration: none; display: inline-block;">
                                <span class="material-symbols-outlined">arrow_back</span>
                                Quay lại trang quên mật khẩu
                            </a>
                        </div>
                    </div>
                </c:when>

                <%-- Trường hợp reset thành công --%>
                <c:when test="${not empty success}">
                    <div class="success-message-reset">
                        <span class="material-symbols-outlined success-icon-reset">check_circle</span>
                        <h2>Mật khẩu đã được đặt lại!</h2>
                        <p>Mật khẩu của bạn đã được thay đổi thành công.</p>
                        <p>Bây giờ bạn có thể đăng nhập bằng mật khẩu mới.</p>
                        <a href="login.jsp" class="btn-submit-reset" style="text-decoration: none; margin-top: 1.5rem;">
                            Đăng nhập ngay
                        </a>
                    </div>
                </c:when>

                <%-- Trường hợp hiển thị form reset --%>
                <c:otherwise>
                    <div class="reset-password-container">
                        <h1 class="reset-password-title">Đặt lại mật khẩu</h1>

                        <p class="reset-password-description">
                            Vui lòng nhập mật khẩu mới cho tài khoản của bạn.
                        </p>

                            <%-- Hiển thị thông tin token --%>
                        <c:if test="${not empty token}">
                            <div class="token-info">
                                <span class="material-symbols-outlined">info</span>
                                Liên kết đặt lại mật khẩu hợp lệ. Vui lòng đặt mật khẩu mới.
                            </div>
                        </c:if>

                            <%-- Hiển thị lỗi từ server --%>
                        <c:if test="${not empty errors}">
                            <div class="error-message-reset">
                                <span class="material-symbols-outlined">error</span>
                                <c:forEach var="err" items="${errors}">
                                    <div>${err}</div>
                                </c:forEach>
                            </div>
                        </c:if>

                            <%-- Form đặt lại mật khẩu --%>
                        <form class="reset-password-form" action="reset-password" method="POST">
                            <input type="hidden" name="token" value="${token}">

                            <div class="form-group">
                                <label class="form-label" for="newPassword">Mật khẩu mới</label>
                                <input
                                        type="password"
                                        id="newPassword"
                                        name="newPassword"
                                        class="form-input"
                                        placeholder="Nhập mật khẩu mới"
                                        required
                                        minlength="6"
                                >
                                <div class="password-strength">
                                    <div class="strength-bar">
                                        <div class="strength-fill" id="strength-fill"></div>
                                    </div>
                                    <div class="strength-text" id="strength-text">Mật khẩu yếu</div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="confirmPassword">Xác nhận mật khẩu</label>
                                <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        class="form-input"
                                        placeholder="Nhập lại mật khẩu mới"
                                        required
                                >
                            </div>

                                <%-- Yêu cầu mật khẩu --%>
                            <div class="password-requirements">
                                <div class="requirements-title">Yêu cầu mật khẩu:</div>
                                <div class="requirement-item" id="req-length">
                                    <span class="requirement-icon">•</span>
                                    Ít nhất 6 ký tự
                                </div>
                                <div class="requirement-item" id="req-match">
                                    <span class="requirement-icon">•</span>
                                    Mật khẩu khớp nhau
                                </div>
                            </div>

                            <div class="reset-password-buttons">
                                <a href="login.jsp" class="btn-cancel-reset">Hủy</a>
                                <button type="submit" class="btn-submit-reset" id="submit-btn">ĐẶT LẠI MẬT KHẨU</button>
                            </div>
                        </form>
                    </div>
                </c:otherwise>
            </c:choose>
        </div>
    </main>

    <!-- FOOTER (giống các trang khác) -->
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