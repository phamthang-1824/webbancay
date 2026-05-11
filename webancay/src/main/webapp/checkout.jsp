<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thanh toán - Cây Xanh Việt</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    <!-- DataTables CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/fonts/style.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/fonts/checkout.css">
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
                        <span id="cart-total">
                            <fmt:formatNumber value="${sessionScope.cartTotal != null ? sessionScope.cartTotal : 0}" pattern="#,###" />₫
                        </span>
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
            <div class="payment-grid">
                <div class="payment-info">
                    <h1 class="payment-title">Thông tin thanh toán</h1>

                    <!-- Hiển thị lỗi nếu có -->
                    <c:if test="${not empty errors}">
                        <div class="alert alert-danger">
                            <ul>
                                <c:forEach var="error" items="${errors}">
                                    <li>${error}</li>
                                </c:forEach>
                            </ul>
                        </div>
                    </c:if>

                    <c:if test="${not empty error}">
                        <div class="alert alert-danger">
                            <p>${error}</p>
                        </div>
                    </c:if>

                    <form id="paymentForm" action="${pageContext.request.contextPath}/checkout" method="POST">
                        <input type="hidden" name="action" value="placeOrder">

                        <div class="form-group">
                            <label class="form-label" for="name">Họ và tên *</label>
                            <input class="form-input" id="name" name="name"
                                   value="${not empty name ? name : (not empty sessionScope.user ? sessionScope.user.lastName.concat(' ').concat(sessionScope.user.firstName) : '')}"
                                   placeholder="Nguyễn Văn A" required type="text"/>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="phone">Số điện thoại *</label>
                            <div class="phone-input-group">
                                <div class="country-select" id="country-select">
                                    <img class="country-flag" id="selected-flag" src="https://flagcdn.com/w40/vn.png" alt="Vietnam flag">
                                    <span id="selected-code">+84</span>
                                    <span class="material-symbols-outlined" style="margin-left: auto; font-size: 16px;">expand_more</span>
                                </div>
                                <div class="country-dropdown" id="country-dropdown">
                                    <!-- Quốc gia sẽ được tạo bằng JavaScript -->
                                </div>
                                <input class="form-input phone-input" id="phone" name="phone"
                                       value="${phone}" placeholder="090 xxx xxxx" required type="tel"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="email">Địa chỉ email *</label>
                            <input class="form-input" id="email" name="email"
                                   value="${not empty email ? email : (not empty sessionScope.user ? sessionScope.user.email : '')}"
                                   placeholder="email@example.com" required type="email"/>
                        </div>

                        <!-- Tỉnh/Thành phố -->
                        <div class="form-group">
                            <label class="form-label" for="province">Tỉnh/Thành phố *</label>
                            <select class="form-select" id="province" name="province" required>
                                <option value="">Chọn Tỉnh/Thành phố</option>
                                <c:forEach var="province" items="${provinces}">
                                    <option value="${province}">${province}</option>
                                </c:forEach>
                            </select>
                        </div>

                        <!-- Quận/Huyện -->
                        <div class="form-group">
                            <label class="form-label" for="district">Quận/Huyện *</label>
                            <select class="form-select" id="district" name="district" required disabled>
                                <option value="">Chọn Quận/Huyện</option>
                            </select>
                        </div>

                        <!-- Xã/Phường -->
                        <div class="form-group">
                            <label class="form-label" for="ward">Xã/Phường *</label>
                            <select class="form-select" id="ward" name="ward" required disabled>
                                <option value="">Chọn Xã/Phường</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="address">Địa chỉ cụ thể *</label>
                            <input class="form-input" id="address" name="address"
                                   value="${address}" placeholder="Số nhà, tên đường" required type="text"/>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="notes">Ghi chú</label>
                            <input class="form-input" id="notes" name="notes"
                                   value="${notes}" placeholder="Lưu ý cho Người bán..." type="text"/>
                        </div>
                    </form>
                </div>
                <div class="order-summary">
                    <h2 class="order-title">Sản phẩm</h2>
                    <div class="product-grid">
                        <div class="product-header">
                            <div>Sản phẩm</div>
                            <div class="text-center">Đơn giá</div>
                            <div class="text-center">Số lượng</div>
                            <div class="text-right">Thành tiền</div>
                        </div>

                        <!-- Danh sách sản phẩm từ giỏ hàng -->
                        <c:forEach var="item" items="${cartItems}">
                            <div class="product-item">
                                <div class="product-info">
                                    <img alt="${item.productName}" class="product-image"
                                         src="${pageContext.request.contextPath}/${item.imageUrl}"
                                         onerror="this.src='${pageContext.request.contextPath}/images/no-image.jpg'"/>
                                    <div>
                                        <p class="product-name">${item.productName}</p>
                                        <c:if test="${not empty item.variant}">
                                            <p class="product-category">Phân loại: ${item.variant}</p>
                                        </c:if>
                                        <c:if test="${empty item.variant}">
                                            <p class="product-category">Mã SP: ${item.productCode}</p>
                                        </c:if>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <fmt:formatNumber value="${item.price}" pattern="#,###" />₫
                                </div>
                                <div class="product-quantity">${item.quantity}</div>
                                <div class="product-total">
                                    <fmt:formatNumber value="${item.price * item.quantity}" pattern="#,###" />₫
                                </div>
                            </div>
                        </c:forEach>

                        <c:if test="${empty cartItems}">
                            <div class="product-item">
                                <div class="product-info" style="text-align: center; width: 100%;">
                                    <p>Giỏ hàng trống</p>
                                </div>
                            </div>
                        </c:if>
                    </div>

                    <div class="notes-section">
                        <label class="notes-label" for="notes">Lời nhắn:</label>
                        <input class="form-input" id="notes" name="notes" placeholder="Lưu ý cho Người bán..." type="text"/>
                    </div>

                    <div class="shipping-info">
                        <div class="shipping-method">
                            <span>Phương thức vận chuyển:</span>
                            <span>Giao hàng tiêu chuẩn</span>
                        </div>
                        <div>
                            <span class="shipping-price">
                                <fmt:formatNumber value="${shippingFee}" pattern="#,###" />₫
                            </span>
                            <p class="shipping-note">Nhận hàng từ 3-7 ngày</p>
                        </div>
                    </div>

                    <div class="total-section">
                        <span class="total-label">Tổng số tiền (<c:out value="${fn:length(cartItems)}" /> sản phẩm):</span>
                        <span class="total-amount">
                            <fmt:formatNumber value="${total}" pattern="#,###" />₫
                        </span>
                    </div>

                    <div class="payment-method">
                        <div class="payment-header">
                            <h3 class="payment-title-small">Phương thức thanh toán</h3>
                            <div>
                                <span>Thanh toán khi nhận hàng</span>
                            </div>
                        </div>
                        <div class="payment-details">
                            <div class="payment-row">
                                <span>Tổng tiền hàng</span>
                                <span>
                                    <fmt:formatNumber value="${subtotal}" pattern="#,###" />₫
                                </span>
                            </div>
                            <div class="payment-row">
                                <span>Tổng tiền phí vận chuyển</span>
                                <span>
                                    <fmt:formatNumber value="${shippingFee}" pattern="#,###" />₫
                                </span>
                            </div>
                            <div class="payment-total">
                                <span>Tổng thanh toán</span>
                                <span class="payment-total-amount">
                                    <fmt:formatNumber value="${total}" pattern="#,###" />₫
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="order-button-container">
                        <p class="terms-text">Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo <a class="terms-link" href="#">Điều khoản Cây Xanh Việt</a></p>
                        <button class="order-button" type="submit" form="paymentForm"
                                <c:if test="${empty cartItems}">disabled</c:if>>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container footer-main">
            <div class="footer-grid">
                <div class="footer-column">
                    <a class="footer-logo" href="#">
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

<!-- jQuery và DataTables -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

<!-- AJAX for location selection -->
<script>
    $(document).ready(function() {

        // Khi chọn tỉnh/thành phố
        $('#province').change(function() {
            var province = $(this).val();
            var districtSelect = $('#district');
            var wardSelect = $('#ward');

            // Reset và disable ward
            wardSelect.empty().append('<option value="">Chọn Xã/Phường</option>').prop('disabled', true);

            if (province) {
                $.ajax({
                    url: '${pageContext.request.contextPath}/checkout',
                    type: 'POST',
                    data: {
                        action: 'getDistricts',
                        province: province
                    },
                    dataType: 'json',
                    success: function(data) {
                        districtSelect.empty().append('<option value="">Chọn Quận/Huyện</option>');

                        $.each(data.districtList, function(index, district) {
                            districtSelect.append('<option value="' + district + '">' + district + '</option>');
                        });

                        districtSelect.prop('disabled', false);
                    },
                    error: function() {
                        alert('Có lỗi xảy ra khi tải danh sách quận/huyện');
                    }
                });
            } else {
                districtSelect.empty().append('<option value="">Chọn Quận/Huyện</option>').prop('disabled', true);
            }
        });

        // Khi chọn quận/huyện
        $('#district').change(function() {
            var province = $('#province').val();
            var district = $(this).val();
            var wardSelect = $('#ward');

            if (province && district) {
                $.ajax({
                    url: '${pageContext.request.contextPath}/checkout',
                    type: 'POST',
                    data: {
                        action: 'getWards',
                        province: province,
                        district: district
                    },
                    dataType: 'json',
                    success: function(data) {
                        wardSelect.empty().append('<option value="">Chọn Xã/Phường</option>');

                        $.each(data.wards, function(index, ward) {
                            wardSelect.append('<option value="' + ward + '">' + ward + '</option>');
                        });

                        wardSelect.prop('disabled', false);
                    },
                    error: function() {
                        alert('Có lỗi xảy ra khi tải danh sách xã/phường');
                    }
                });
            } else {
                wardSelect.empty().append('<option value="">Chọn Xã/Phường</option>').prop('disabled', true);
            }
        });

    });
</script>

</body>
</html>