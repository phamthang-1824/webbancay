<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html class="light" lang="vi">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Cây Xanh Việt - Cửa hàng cây cảnh</title>
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/fonts/style.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/fonts/main.css">
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

    <section class="hero">
        <div class="hero-bg" style="background-image: url('images/hero/hero-background.jpg');">
            <div class="hero-content">
                <h1 class="hero-title">Tận hưởng không gian sống xanh</h1>
                <p class="hero-description">Bổ sung thêm cây xanh là một cách đơn giản nhất để tạo ra sự thoải mái cho không gian sống của bạn, giúp mang lại hiệu quả công việc và thư giãn mỗi khi trở về.</p>
                <div class="hero-buttons">
                    <a href="#" class="hero-button">LIÊN HỆ</a>
                    <a href="#" class="hero-button primary">MUA NGAY</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-bg-beige">
        <div class="container">
            <h2 class="section-title">DANH MỤC SẢN PHẨM</h2>
            <div class="category-grid">
                <!-- Cây dễ chăm -->
                <a class="category-item" href="#">
                    <div class="category-image-container">
                        <img alt="Cây dễ chăm" class="category-image" src="images/categories/cay-de-cham.jpg"/>
                    </div>
                    <div class="category-label">
                        <div class="category-label-text">
                            <p class="category-name">CÂY DỄ CHĂM</p>
                        </div>
                    </div>
                </a>

                <!-- Cây văn phòng -->
                <a class="category-item" href="#">
                    <div class="category-image-container">
                        <img alt="Cây văn phòng" class="category-image" src="images/categories/cay-van-phong.jpg"/>
                    </div>
                    <div class="category-label">
                        <div class="category-label-text">
                            <p class="category-name">CÂY VĂN PHÒNG</p>
                        </div>
                    </div>
                </a>

                <!-- Cây phong thủy -->
                <a class="category-item" href="#">
                    <div class="category-image-container">
                        <img alt="Cây phong thủy" class="category-image" src="images/categories/cay-phong-thuy.jpg"/>
                    </div>
                    <div class="category-label">
                        <div class="category-label-text">
                            <p class="category-name">CÂY PHONG THỦY</p>
                        </div>
                    </div>
                </a>

                <!-- Cây để bàn -->
                <a class="category-item" href="#">
                    <div class="category-image-container">
                        <img alt="Cây để bàn" class="category-image" src="images/categories/cay-de-ban.jpg"/>
                    </div>
                    <div class="category-label">
                        <div class="category-label-text">
                            <p class="category-name">CÂY ĐỂ BÀN</p>
                        </div>
                    </div>
                </a>

                <!-- Cây trồng nước -->
                <a class="category-item" href="#">
                    <div class="category-image-container">
                        <img alt="Cây trồng nước" class="category-image" src="images/categories/cay-trong-nuoc.jpg"/>
                    </div>
                    <div class="category-label">
                        <div class="category-label-text">
                            <p class="category-name">CÂY TRỒNG NƯỚC</p>
                        </div>
                    </div>
                </a>

                <!-- Cây cao cấp -->
                <a class="category-item" href="#">
                    <div class="category-image-container">
                        <img alt="Cây cao cấp" class="category-image" src="images/categories/cay-cao-cap.jpg"/>
                    </div>
                    <div class="category-label">
                        <div class="category-label-text">
                            <p class="category-name">CÂY CAO CẤP</p>
                        </div>
                    </div>
                </a>

                <!-- Chậu đất nung -->
                <a class="category-item" href="#">
                    <div class="category-image-container">
                        <img alt="Chậu đất nung" class="category-image" src="images/categories/chau-dat-nung.jpg"/>
                    </div>
                    <div class="category-label">
                        <div class="category-label-text">
                            <p class="category-name">CHẬU ĐẤT NUNG</p>
                        </div>
                    </div>
                </a>

                <!-- Chậu xi măng -->
                <a class="category-item" href="#">
                    <div class="category-image-container">
                        <img alt="Chậu xi măng" class="category-image" src="images/categories/chau-xi-mang.jpg"/>
                    </div>
                    <div class="category-label">
                        <div class="category-label-text">
                            <p class="category-name">CHẬU XI MĂNG</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</div>

    <!-- SẢN PHẨM MỚI Section -->
    <section class="section section-bg-light">
        <div class="container">
            <h2 class="section-title">SẢN PHẨM MỚI</h2>
            <div class="product-scrolls">
                <!-- Row 1 -->
                <div class="product-scroll-container">
                    <!-- Product 1 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=TUBO005" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây tùng bồng lai tiểu cảnh chậu sứ thổ cẩm" class="product-image" src="images/products/new/cay-tung-bong-lai-tubo005.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=TUBO005" class="product-name-link">
                                <h3 class="product-name">Cây tùng bồng lai tiểu cảnh chậu sứ thổ cẩm</h3>
                            </a>
                            <p class="product-code">TUBO005</p>
                            <p class="product-price">500.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=TUBO005" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 2 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=CPTK001" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây phát tài bộ 5 – Cây thiết mộc lan" class="product-image" src="images/products/new/cay-phat-tai-bo-5.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=CPTK001" class="product-name-link">
                                <h3 class="product-name">Cây phát tài bộ 5 – Cây thiết mộc lan</h3>
                            </a>
                            <p class="product-code">CPTK001</p>
                            <p class="product-price">750.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=CPTK001" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 3 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=LONI040" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây kim ngân toa thỏn để bàn chậu sứ gấu BearBrick" class="product-image" src="images/products/new/cay-kim-ngan.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=LONI040" class="product-name-link">
                                <h3 class="product-name">Cây kim ngân toa thỏn để bàn chậu sứ gấu BearBrick</h3>
                            </a>
                            <p class="product-code">LONI040</p>
                            <p class="product-price">280.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=LONI040" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 4 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=PHIG006" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây trầu bà đế vương xanh chậu mặt cool 'Imperial Green'" class="product-image" src="images/products/new/cay-trau-ba-de-vuong.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=PHIG006" class="product-name-link">
                                <h3 class="product-name">Cây trầu bà đế vương xanh chậu mặt cool 'Imperial Green'</h3>
                            </a>
                            <p class="product-code">PHIG006</p>
                            <p class="product-price">120.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=PHIG006" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 5 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=SANS002" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây Lưỡi Hổ Vàng Miền Châu" class="product-image" src="images/products/new/cay-luoi-ho-vang.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=SANS002" class="product-name-link">
                                <h3 class="product-name">Cây Lưỡi Hổ Vàng Miền Châu</h3>
                            </a>
                            <p class="product-code">SANS002</p>
                            <p class="product-price">120.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=SANS002" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Row 2 -->
                <div class="product-scroll-container">
                    <!-- Product 6 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=ANTH010" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây hồng môn cỡ nhỏ chậu sứ trắng" class="product-image" src="images/products/new/cay-hong-mon.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=ANTH010" class="product-name-link">
                                <h3 class="product-name">Cây hồng môn cỡ nhỏ chậu sứ trắng ANTH010</h3>
                            </a>
                            <p class="product-code">ANTH010</p>
                            <p class="product-price">240.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=ANTH010" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 7 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=SCHE020" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây ngũ gia bì cẩm thạch nhỏ chậu ươm" class="product-image" src="images/products/new/cay-ngu-gia-bi.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=SCHE020" class="product-name-link">
                                <h3 class="product-name">Cây ngũ gia bì cẩm thạch nhỏ chậu ươm SCHE020</h3>
                            </a>
                            <p class="product-code">SCHE020</p>
                            <p class="product-price">100.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=SCHE020" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 8 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=LONI039" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây kim ngân một thân để bàn chậu sứ" class="product-image" src="images/products/new/cay-kim-ngan-mot-than.jpg"/>
                                <div class="discount-badge">-6%</div>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=LONI039" class="product-name-link">
                                <h3 class="product-name">Cây kim ngân một thân để bàn chậu sứ LONI039</h3>
                            </a>
                            <p class="product-code">LONI039</p>
                            <div class="price-container">
                                <p class="product-price">450.000đ</p>
                                <p class="original-price">480.000đ</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=LONI039" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 9 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=LIVI005" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây cọ lùn xòe mini để bàn chậu sứ hoa văn" class="product-image" src="images/products/new/cay-co-lun-xoe.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=LIVI005" class="product-name-link">
                                <h3 class="product-name">Cây cọ lùn xòe mini để bàn chậu sứ hoa văn LIVI005</h3>
                            </a>
                            <p class="product-code">LIVI005</p>
                            <p class="product-price">160.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=LIVI005" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 10 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=RADE032" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây hạnh phúc để sàn 2 tầng chậu sứ hoa văn" class="product-image" src="images/products/new/cay-hanh-phuc.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=RADE032" class="product-name-link">
                                <h3 class="product-name">Cây hạnh phúc để sàn 2 tầng chậu sứ hoa văn RADE032</h3>
                            </a>
                            <p class="product-code">RADE032</p>
                            <p class="product-price">900.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=RADE032" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hidden products for "Xem thêm" -->
                <div class="hidden-products">
                    <!-- Row 3 -->
                    <div class="product-scroll-container">
                        <!-- Product 11 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=RADE031" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây hạnh phúc để sàn chậu sứ" class="product-image" src="images/products/new/cay-hanh-phuc-de-san.jpg"/>
                                    <div class="discount-badge">-8%</div>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=RADE031" class="product-name-link">
                                    <h3 class="product-name">Cây hạnh phúc để sàn chậu sứ RADE031</h3>
                                </a>
                                <p class="product-code">RADE031</p>
                                <div class="price-container">
                                    <p class="product-price">550.000đ</p>
                                    <p class="original-price">600.000đ</p>
                                </div>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=RADE031" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 12 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=LONI038" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây kim ngân để bàn thân bính tiểu cảnh" class="product-image" src="images/products/new/cay-kim-ngan-de-ban.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=LONI038" class="product-name-link">
                                    <h3 class="product-name">Cây kim ngân để bàn thân bính tiểu cảnh chậu sứ LONI038</h3>
                                </a>
                                <p class="product-code">LONI038</p>
                                <p class="product-price">380.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=LONI038" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 13 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=SHBG005" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây lưỡi hổ xanh để bàn mini 'Block Gold'" class="product-image" src="images/products/new/cay-luoi-ho.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=SHBG005" class="product-name-link">
                                    <h3 class="product-name">Cây lưỡi hổ xanh để bàn mini 'Block Gold' chậu sứ SHBG005</h3>
                                </a>
                                <p class="product-code">SHBG005</p>
                                <p class="product-price">120.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=SHBG005" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 14 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=PEAC005" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây Lan ý chậu cỡ lớn để bàn chậu sứ trắng" class="product-image" src="images/products/new/cay-lan-y.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=PEAC005" class="product-name-link">
                                    <h3 class="product-name">Cây Lan ý chậu cỡ lớn để bàn chậu sứ trắng PEAC005</h3>
                                </a>
                                <p class="product-code">PEAC005</p>
                                <p class="product-price">240.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=PEAC005" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 15 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=AGLA104" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây phú quý chậu sứ thổ cẩm để bàn" class="product-image" src="images/products/new/cay-phu-quy.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=AGLA104" class="product-name-link">
                                    <h3 class="product-name">Cây phú quý chậu sứ thổ cẩm để bàn AGLA104</h3>
                                </a>
                                <p class="product-code">AGLA104</p>
                                <p class="product-price">320.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=AGLA104" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Row 4 -->
                    <div class="product-scroll-container">
                        <!-- Product 16 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=SPI004" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây cỏ lan chi để bàn chậu sứ mặt cười" class="product-image" src="images/products/new/cay-co-lan-chi.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=SPI004" class="product-name-link">
                                    <h3 class="product-name">Cây cỏ lan chi để bàn chậu sứ mặt cười</h3>
                                </a>
                                <p class="product-code">SPI004</p>
                                <p class="product-price">120.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=SPI004" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 17 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=PHIR008" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây trầu bà đế vương đỏ để bàn 'Red Rojo'" class="product-image" src="images/products/new/cay-trau-ba-do.jpg"/>
                                    <div class="discount-badge">-9%</div>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=PHIR008" class="product-name-link">
                                    <h3 class="product-name">Cây trầu bà đế vương đỏ để bàn 'Red Rojo' chậu sứ</h3>
                                </a>
                                <p class="product-code">PHIR008</p>
                                <div class="price-container">
                                    <p class="product-price">320.000đ</p>
                                    <p class="original-price">350.000đ</p>
                                </div>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=PHIR008" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 18 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=STBS001" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây lưỡi hổ Bental Sensation chậu ươm" class="product-image" src="images/products/new/cay-luoi-ho-ben.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=STBS001" class="product-name-link">
                                    <h3 class="product-name">Cây lưỡi hổ Bental Sensation chậu ươm</h3>
                                </a>
                                <p class="product-code">STBS001</p>
                                <p class="product-price">160.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=STBS001" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 19 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=RADE033" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây hạnh phúc để sàn 2 tầng lớn chậu đá mài" class="product-image" src="images/products/new/cay-hanh-phuc-de-2.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=RADE033" class="product-name-link">
                                    <h3 class="product-name">Cây hạnh phúc để sàn 2 tầng lớn chậu đá mài</h3>
                                </a>
                                <p class="product-code">RADE033</p>
                                <p class="product-price">1.200.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=RADE033" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 20 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=CTBC007" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây trầu bà cột chậu xi măng trụ vuông" class="product-image" src="images/products/new/cay-trau-ba.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=CTBC007" class="product-name-link">
                                    <h3 class="product-name">Cây trầu bà cột chậu xi măng trụ vuông</h3>
                                </a>
                                <p class="product-code">CTBC007</p>
                                <p class="product-price">1.100.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=CTBC007" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loading-indicator" id="loading-new">
                Đang tải thêm sản phẩm...
            </div>
            <button class="view-more-button" id="view-more-new">
                <span>Xem thêm</span>
            </button>
        </div>
    </section>

    <!-- CÂY CẢNH ĐỂ BÀN Section -->
    <section class="section section-bg-light">
        <div class="container">
            <h2 class="section-title">CÂY CẢNH ĐỂ BÀN</h2>
            <div class="product-scrolls">
                <!-- Row 1 -->
                <div class="product-scroll-container">
                    <!-- Product 1 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=TUBO005" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây tùng bồng lai tiểu cảnh chậu sứ thổ cẩm TUBO005" class="product-image" src="images/products/desktop/cay-tung-bonglai-tieu.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=TUBO005" class="product-name-link">
                                <h3 class="product-name">Cây tùng bồng lai tiểu cảnh chậu sứ thổ cẩm TUBO005</h3>
                            </a>
                            <p class="product-price">500.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=TUBO005" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 2 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=LONI040" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây kim ngân bọ thỏn để bàn chậu sứ gấu BearBrick LONI040" class="product-image" src="images/products/desktop/cay-kim-ngan-bo.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=LONI040" class="product-name-link">
                                <h3 class="product-name">Cây kim ngân bọ thỏn để bàn chậu sứ gấu BearBrick LONI040</h3>
                            </a>
                            <p class="product-price">280.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=LONI040" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 3 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=PHIG006" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây trầu bà đế vương xanh chậu mặt cool 'Imperial Green' chậu sứ PHIG006" class="product-image" src="images/products/desktop/cay-trau-ba-de-xanh.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=PHIG006" class="product-name-link">
                                <h3 class="product-name">Cây trầu bà đế vương xanh chậu mặt cool 'Imperial Green' chậu sứ PHIG006</h3>
                            </a>
                            <p class="product-price">120.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=PHIG006" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 4 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=SANS002" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây Lưỡi Hổ Vàng Miền Châu để bàn Sonsevireria Cylindrico SANS002" class="product-image" src="images/products/desktop/cay-luoiho-vang.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=SANS002" class="product-name-link">
                                <h3 class="product-name">Cây Lưỡi Hổ Vàng Miền Châu để bàn Sonsevireria Cylindrico SANS002</h3>
                            </a>
                            <p class="product-price">120.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=SANS002" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 5 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=SPI004" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây cỏ lan chi để bàn chậu sứ mặt cười SPI004" class="product-image" src="images/products/desktop/cay-co-lan-cuoi.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=SPI004" class="product-name-link">
                                <h3 class="product-name">Cây cỏ lan chi để bàn chậu sứ mặt cười SPI004</h3>
                            </a>
                            <p class="product-price">120.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=SPI004" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hidden products for "Xem thêm" -->
                <div class="hidden-products">
                    <!-- Row 2 -->
                    <div class="product-scroll-container">
                        <!-- Product 6 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=PHIR008" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây trầu bà đế vương đỏ để bàn 'Red Rojo' chậu sứ PHIR008" class="product-image" src="images/products/desktop/cay-trau-do.jpg"/>
                                    <div class="discount-badge">-9%</div>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=PHIR008" class="product-name-link">
                                    <h3 class="product-name">Cây trầu bà đế vương đỏ để bàn 'Red Rojo' chậu sứ PHIR008</h3>
                                </a>
                                <p class="product-code">PHIR008</p>
                                <div class="price-container">
                                    <p class="product-price">320.000đ</p>
                                    <p class="original-price">350.000đ</p>
                                </div>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=PHIR008" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 7 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=STBS001" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây lưỡi hổ Bental Sensation chậu ươm STBS001" class="product-image" src="images/products/desktop/cay-luoi-ho-uom.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=STBS001" class="product-name-link">
                                    <h3 class="product-name">Cây lưỡi hổ Bental Sensation chậu ươm STBS001</h3>
                                </a>
                                <p class="product-code">STBS001</p>
                                <p class="product-price">160.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=STBS001" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 8 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=ANTH010" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây hồng môn cỡ nhỏ chậu sứ trắng ANTH010" class="product-image" src="images/products/desktop/cay-hong-mon-nho.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=ANTH010" class="product-name-link">
                                    <h3 class="product-name">Cây hồng môn cỡ nhỏ chậu sứ trắng ANTH010</h3>
                                </a>
                                <p class="product-code">ANTH010</p>
                                <p class="product-price">240.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=ANTH010" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 9 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=SCHE020" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây ngũ gia bì cẩm thạch nhỏ chậu ươm SCHE020" class="product-image" src="images/products/desktop/cay-ngu-gia.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=SCHE020" class="product-name-link">
                                    <h3 class="product-name">Cây ngũ gia bì cẩm thạch nhỏ chậu ươm SCHE020</h3>
                                </a>
                                <p class="product-code">SCHE020</p>
                                <p class="product-price">100.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=SCHE020" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 10 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=LONI039" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây kim ngân một thân để bàn chậu sứ LONI039" class="product-image" src="images/products/desktop/cay-kim-ngan-ban.jpg"/>
                                    <div class="discount-badge">-6%</div>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=LONI039" class="product-name-link">
                                    <h3 class="product-name">Cây kim ngân một thân để bàn chậu sứ LONI039</h3>
                                </a>
                                <p class="product-code">LONI039</p>
                                <div class="price-container">
                                    <p class="product-price">450.000đ</p>
                                    <p class="original-price">480.000đ</p>
                                </div>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=LONI039" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loading-indicator" id="loading-desktop">
                Đang tải thêm sản phẩm...
            </div>
            <button class="view-more-button" id="view-more-desktop">
                <span>Xem thêm</span>
            </button>
        </div>
    </section>

    <!-- CÂY CẢNH VĂN PHÒNG Section -->
    <section class="section section-bg-light">
        <div class="container">
            <h2 class="section-title">CÂY CẢNH VĂN PHÒNG</h2>
            <div class="product-scrolls">
                <!-- Row 1 -->
                <div class="product-scroll-container">
                    <!-- Product 1 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=RADE031" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây hạnh phúc để sàn chậu sứ RADE031" class="product-image" src="images/products/office/cay-hanh-phuc-nho.jpg"/>
                                <div class="discount-badge">-8%</div>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=RADE031" class="product-name-link">
                                <h3 class="product-name">Cây hạnh phúc để sàn chậu sứ RADE031</h3>
                            </a>
                            <p class="product-code">RADE031</p>
                            <div class="price-container">
                                <p class="product-price">550.000đ</p>
                                <p class="original-price">600.000đ</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=RADE031" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 2 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=BUBV007" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây bàng Đài Loan cẩm thạch chậu sứ BUBV007" class="product-image" src="images/products/office/cay-bang-dl.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=BUBV007" class="product-name-link">
                                <h3 class="product-name">Cây bàng Đài Loan cẩm thạch chậu sứ BUBV007</h3>
                            </a>
                            <p class="product-price">1.200.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=BUBV007" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 3 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=CPTN013" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây phát tài núi 2 tầng chậu đá mài CPTN013" class="product-image" src="images/products/office/cay-phat-tai.jpg"/>
                                <div class="discount-badge">-8%</div>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=CPTN013" class="product-name-link">
                                <h3 class="product-name">Cây phát tài núi 2 tầng chậu đá mài CPTN013</h3>
                            </a>
                            <div class="price-container">
                                <p class="product-price">1.750.000đ</p>
                                <p class="original-price">1.900.000đ</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=CPTN013" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 4 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=RADE024" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây hạnh phúc một thân cao 1m6 chậu đất nung RADE024" class="product-image" src="images/products/office/cay-hp-cao.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=RADE024" class="product-name-link">
                                <h3 class="product-name">Cây hạnh phúc một thân cao 1m6 chậu đất nung RADE024</h3>
                            </a>
                            <p class="product-price">900.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=RADE024" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 5 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=SCHE017" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Cây ngũ gia bì để sàn chậu trụ tròn đỏ mận SCHE017" class="product-image" src="images/products/office/cay-ngu-gia-do.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=SCHE017" class="product-name-link">
                                <h3 class="product-name">Cây ngũ gia bì để sàn chậu trụ tròn đỏ mận SCHE017</h3>
                            </a>
                            <p class="product-price">750.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=SCHE017" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hidden products for "Xem thêm" -->
                <div class="hidden-products">
                    <!-- Row 2 -->
                    <div class="product-scroll-container">
                        <!-- Product 6 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=CHRY009" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây cau vàng Nhật Bản cỡ trung chậu đá mài CHRY009" class="product-image" src="images/products/office/cay-cau.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=CHRY009" class="product-name-link">
                                    <h3 class="product-name">Cây cau vàng Nhật Bản cỡ trung chậu đá mài CHRY009</h3>
                                </a>
                                <p class="product-price">740.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=CHRY009" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 7 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=RADE009" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây hạnh phúc 2 tầng chậu sứ trắng RADE009" class="product-image" src="images/products/office/cay-hanh-phuc-su.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=RADE009" class="product-name-link">
                                    <h3 class="product-name">Cây hạnh phúc 2 tầng chậu sứ trắng RADE009</h3>
                                </a>
                                <p class="product-price">990.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=RADE009" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 8 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=LYRA023" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây bàng Singapore cao 2m dáng tree chậu sứ LYRA023" class="product-image" src="images/products/office/cay-bang-2m.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=LYRA023" class="product-name-link">
                                    <h3 class="product-name">Cây bàng Singapore cao 2m dáng tree chậu sứ LYRA023</h3>
                                </a>
                                <p class="product-price">2.200.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=LYRA023" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 9 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=LONI017" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây kim ngân thắt bính kích thước lớn LONI017" class="product-image" src="images/products/office/cay-kim-ngan-binh.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=LONI017" class="product-name-link">
                                    <h3 class="product-name">Cây kim ngân thắt bính kích thước lớn LONI017</h3>
                                </a>
                                <p class="product-price">1.200.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=LONI017" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 10 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=CPTN012" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Cây phát tài núi 2 tầng chậu sứ CPTN012" class="product-image" src="images/products/office/cay-kim-ngan-nui.jpg"/>
                                    <div class="discount-badge">-8%</div>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=CPTN012" class="product-name-link">
                                    <h3 class="product-name">Cây phát tài núi 2 tầng chậu sứ CPTN012</h3>
                                </a>
                                <div class="price-container">
                                    <p class="product-price">1.750.000đ</p>
                                    <p class="original-price">1.900.000đ</p>
                                </div>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=CPTN012" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loading-indicator" id="loading-office">
                Đang tải thêm sản phẩm...
            </div>
            <button class="view-more-button" id="view-more-office">
                <span>Xem thêm</span>
            </button>
        </div>
    </section>

    <!-- CHẬU XI MĂNG ĐÁ MÀI Section -->
    <section class="section section-bg-light">
        <div class="container">
            <h2 class="section-title">CHẬU XI MĂNG ĐÁ MÀI</h2>
            <div class="product-scrolls">
                <!-- Row 1 -->
                <div class="product-scroll-container">
                    <!-- Product 1 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=XMDM018" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu đá mài Granito dáng trụ vót màu trắng" class="product-image" src="images/products/cement/chau-da-mai.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=XMDM018" class="product-name-link">
                                <h3 class="product-name">Chậu đá mài Granito dáng trụ vót màu trắng XMDM018</h3>
                            </a>
                            <p class="product-code">XMDM018</p>
                            <p class="product-price">340.000đ - 420.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=XMDM018" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 2 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=XMDM017" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu xi măng hình trụ vuông vằn sọc ngang màu đen" class="product-image" src="images/products/cement/chau-vuong.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=XMDM017" class="product-name-link">
                                <h3 class="product-name">Chậu xi măng hình trụ vuông vằn sọc ngang màu đen XMDM017</h3>
                            </a>
                            <p class="product-code">XMDM017</p>
                            <p class="product-price">500.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=XMDM017" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 3 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=XMDM015" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu đá mài Granito cao cấp dáng Remy màu trắng" class="product-image" src="images/products/cement/chau-da.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=XMDM015" class="product-name-link">
                                <h3 class="product-name">Chậu đá mài Granito cao cấp dáng Remy màu trắng XMDM015</h3>
                            </a>
                            <p class="product-code">XMDM015</p>
                            <p class="product-price">360.000đ - 560.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=XMDM015" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 4 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=XMDM014" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu xi măng nhẹ hình trụ vát đáy vằn quấn rối" class="product-image" src="images/products/cement/chau-quan.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=XMDM014" class="product-name-link">
                                <h3 class="product-name">Chậu xi măng nhẹ hình trụ vát đáy vằn quấn rối XMDM014</h3>
                            </a>
                            <p class="product-code">XMDM014</p>
                            <p class="product-price">220.000đ - 350.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=XMDM014" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 5 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=XMDM013" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu xi măng đá mài trụ tròn vẽ zigzag" class="product-image" src="images/products/cement/chau-zig.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=XMDM013" class="product-name-link">
                                <h3 class="product-name">Chậu xi măng đá mài trụ tròn vẽ zigzag XMDM013</h3>
                            </a>
                            <p class="product-code">XMDM013</p>
                            <p class="product-price">320.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=XMDM013" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hidden products for "Xem thêm" -->
                <div class="hidden-products">
                    <!-- Row 2 -->
                    <div class="product-scroll-container">
                        <!-- Product 6 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=XMDM012" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu xi măng đá mài trụ tròn dáng thấp" class="product-image" src="images/products/cement/chau-tron.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=XMDM012" class="product-name-link">
                                    <h3 class="product-name">Chậu xi măng đá mài trụ tròn dáng thấp XMDM012</h3>
                                </a>
                                <p class="product-code">XMDM012</p>
                                <p class="product-price">80.000đ - 150.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=XMDM012" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 7 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=XMDM011" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu xi măng hình giọt nước sơn decor" class="product-image" src="images/products/cement/chau-son.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=XMDM011" class="product-name-link">
                                    <h3 class="product-name">Chậu xi măng hình giọt nước sơn decor 32x52cm XMDM011</h3>
                                </a>
                                <p class="product-code">XMDM011</p>
                                <p class="product-price">440.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=XMDM011" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 8 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=XMDM010" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu xi măng hình giọt nước sơn decor" class="product-image" src="images/products/cement/chau-nuoc.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=XMDM010" class="product-name-link">
                                    <h3 class="product-name">Chậu xi măng hình giọt nước sơn decor 32x52cm XMDM010</h3>
                                </a>
                                <p class="product-code">XMDM010</p>
                                <p class="product-price">480.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=XMDM010" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 9 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=XMDM009" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu xi măng hình giọt nước" class="product-image" src="images/products/cement/chau-giot.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=XMDM009" class="product-name-link">
                                    <h3 class="product-name">Chậu xi măng hình giọt nước 32x52cm XMDM009</h3>
                                </a>
                                <p class="product-code">XMDM009</p>
                                <p class="product-price">340.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=XMDM009" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 10 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=XMDM008" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu xi măng hình trụ sơn họa tiết" class="product-image" src="images/products/cement/chau-tru.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=XMDM008" class="product-name-link">
                                    <h3 class="product-name">Chậu xi măng hình trụ sơn họa tiết 40x40cm XMDM008</h3>
                                </a>
                                <p class="product-code">XMDM008</p>
                                <p class="product-price">520.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=XMDM008" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loading-indicator" id="loading-cement">
                Đang tải thêm sản phẩm...
            </div>
            <button class="view-more-button" id="view-more-cement">
                <span>Xem thêm</span>
            </button>
        </div>
    </section>

    <!-- CHẬU GỐM SỨ Section -->
    <section class="section section-bg-light">
        <div class="container">
            <h2 class="section-title">CHẬU GỐM SỨ</h2>
            <div class="product-scrolls">
                <!-- Row 1 -->
                <div class="product-scroll-container">
                    <!-- Product 1 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=GOSU059" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu gốm sứ hình trụ hoa tiết Geometric" class="product-image" src="images/products/ceramic/chau-gom-su.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=GOSU059" class="product-name-link">
                                <h3 class="product-name">Chậu gốm sứ hình trụ hoa tiết Geometric GOSU059</h3>
                            </a>
                            <p class="product-code">GOSU059</p>
                            <p class="product-price">80.000đ - 180.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=GOSU059" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 2 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=GOSU057" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu gốm sứ họa tiết lá Monstera có dĩa" class="product-image" src="images/products/ceramic/chau-gom-la.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=GOSU057" class="product-name-link">
                                <h3 class="product-name">Chậu gốm sứ họa tiết lá Monstera có dĩa GOSU057</h3>
                            </a>
                            <p class="product-code">GOSU057</p>
                            <p class="product-price">20.000đ - 60.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=GOSU057" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 3 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=GOSU056" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu gốm sứ họa tiết hoa màu trắng có dĩa" class="product-image" src="images/products/ceramic/chau-hoa-trang.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=GOSU056" class="product-name-link">
                                <h3 class="product-name">Chậu gốm sứ họa tiết hoa màu trắng có dĩa GOSU056</h3>
                            </a>
                            <p class="product-code">GOSU056</p>
                            <p class="product-price">20.000đ - 60.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=GOSU056" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 4 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=GOSU055" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu gốm sứ viền hoa cúc có dĩa màu trắng" class="product-image" src="images/products/ceramic/chau-cuc-trang.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=GOSU055" class="product-name-link">
                                <h3 class="product-name">Chậu gốm sứ viền hoa cúc có dĩa màu trắng GOSU055</h3>
                            </a>
                            <p class="product-code">GOSU055</p>
                            <p class="product-price">20.000đ - 60.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=GOSU055" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 5 -->
                    <div class="product-item">
                        <a href="product-detail.jsp?id=GOSU054" class="product-image-link">
                            <div class="product-image-container">
                                <img alt="Chậu gốm sứ hình trụ trơn màu trắng" class="product-image" src="images/products/ceramic/chau-tru-tron.jpg"/>
                            </div>
                        </a>
                        <div class="product-info">
                            <a href="product-detail.jsp?id=GOSU054" class="product-name-link">
                                <h3 class="product-name">Chậu gốm sứ hình trụ trơn màu trắng GOSU054</h3>
                            </a>
                            <p class="product-code">GOSU054</p>
                            <p class="product-price">80.000đ - 180.000đ</p>
                            <div class="product-actions">
                                <button class="action-button quick-view">Xem Nhanh</button>
                                <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                <a href="product-detail.jsp?id=GOSU054" class="action-button buy-now">Mua ngay</a>
                                <button class="action-button favorite-button">
                                    <span class="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hidden products for "Xem thêm" -->
                <div class="hidden-products">
                    <!-- Row 2 -->
                    <div class="product-scroll-container">
                        <!-- Product 6 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=GOSU053" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu gốm sứ hình khối vân gợn sóng màu trắng" class="product-image" src="images/products/ceramic/chau-van-tron.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=GOSU053" class="product-name-link">
                                    <h3 class="product-name">Chậu gốm sứ hình khối vân gợn sóng màu trắng GOSU053</h3>
                                </a>
                                <p class="product-code">GOSU053</p>
                                <p class="product-price">80.000đ - 150.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=GOSU053" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 7 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=GOSU052" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu gốm sứ trụ trơn họa tiết kẻ sọc màu trắng" class="product-image" src="images/products/ceramic/chau-ke-trang.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=GOSU052" class="product-name-link">
                                    <h3 class="product-name">Chậu gốm sứ trụ trơn họa tiết kẻ sọc màu trắng GOSU052</h3>
                                </a>
                                <p class="product-code">GOSU052</p>
                                <p class="product-price">100.000đ - 230.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=GOSU052" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 8 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=GOSU051" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu gốm sứ họa tiết tam giác màu trắng" class="product-image" src="images/products/ceramic/chau-tam.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=GOSU051" class="product-name-link">
                                    <h3 class="product-name">Chậu gốm sứ họa tiết tam giác màu trắng GOSU051</h3>
                                </a>
                                <p class="product-code">GOSU051</p>
                                <p class="product-price">100.000đ - 230.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=GOSU051" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 9 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=GOSU050" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu gốm sứ họa tiết ô vuông màu trắng" class="product-image" src="images/products/ceramic/chau-o.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=GOSU050" class="product-name-link">
                                    <h3 class="product-name">Chậu gốm sứ họa tiết ô vuông màu trắng GOSU050</h3>
                                </a>
                                <p class="product-code">GOSU050</p>
                                <p class="product-price">100.000đ - 230.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=GOSU050" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product 10 -->
                        <div class="product-item">
                            <a href="product-detail.jsp?id=GOSU049" class="product-image-link">
                                <div class="product-image-container">
                                    <img alt="Chậu gốm sứ họa tiết đan mây màu đen" class="product-image" src="images/products/ceramic/chau-may-den.jpg"/>
                                </div>
                            </a>
                            <div class="product-info">
                                <a href="product-detail.jsp?id=GOSU049" class="product-name-link">
                                    <h3 class="product-name">Chậu gốm sứ họa tiết đan mây màu đen GOSU049</h3>
                                </a>
                                <p class="product-code">GOSU049</p>
                                <p class="product-price">160.000đ - 250.000đ</p>
                                <div class="product-actions">
                                    <button class="action-button quick-view">Xem Nhanh</button>
                                    <button class="action-button add-to-cart">Thêm vào giỏ</button>
                                    <a href="product-detail.jsp?id=GOSU049" class="action-button buy-now">Mua ngay</a>
                                    <button class="action-button favorite-button">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loading-indicator" id="loading-ceramic">
                Đang tải thêm sản phẩm...
            </div>
            <button class="view-more-button" id="view-more-ceramic">
                <span>Xem thêm</span>
            </button>
        </div>
    </section>

        <!-- Blog Section -->
        <section class="section section-bg-light">
            <div class="container">
                <h2 class="section-title">Thông tin &amp; Blog</h2>
                <div class="blog-grid">
                    <!-- Blog 1 -->
                    <div class="blog-item">
                        <div class="blog-image-container">
                            <img alt="Interior with snake plant" class="blog-image" src="images/products/blog/cay-phong-thuy.jpg"/>
                        </div>
                        <div class="blog-content">
                            <p class="blog-category">PHONG THỦY</p>
                            <h3 class="blog-title">Top 10 cây phong thủy hợp mệnh Kim giúp kích hoạt vượng khí và mang lại may mắn.</h3>
                            <p class="blog-excerpt">Trong phong thủy, mỗi người đều có một mệnh theo ngày sinh và mỗi mệnh...</p>
                        </div>
                    </div>

                    <!-- Blog 2 -->
                    <div class="blog-item">
                        <div class="blog-image-container">
                            <img alt="Living room with various plants" class="blog-image" src="images/products/blog/cay-p-thuy.jpg"/>
                        </div>
                        <div class="blog-content">
                            <p class="blog-category">PHONG THỦY</p>
                            <h3 class="blog-title">Hướng dẫn lựa chọn cây phong thủy trong nhà để tăng vượng khí</h3>
                            <p class="blog-excerpt">Theo quan niệm phong thủy, vượng khí là yếu tố quan trọng giúp cho ngôi...</p>
                        </div>
                    </div>

                    <!-- Blog 3 -->
                    <div class="blog-item">
                        <div class="blog-image-container">
                            <img alt="Radermachera sinica plant" class="blog-image" src="images/products/blog/cay-h-phuc.jpg"/>
                        </div>
                        <div class="blog-content">
                            <p class="blog-category">KIẾN THỨC VÀ CÁCH CHĂM SÓC, THÔNG TIN VỀ CÂY</p>
                            <h3 class="blog-title">Cây hạnh phúc là cây gì? Hướng dẫn cách chăm sóc cây hạnh phúc trong nhà</h3>
                            <p class="blog-excerpt">Có một loại cây cảnh trong nhà mà tên gọi của nó chính là điều...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
</body>
</html>