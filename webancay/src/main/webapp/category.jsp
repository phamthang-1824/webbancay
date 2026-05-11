<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cây Xanh Việt - ${categoryName}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/fonts/style.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/fonts/category.css">
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
                    <div class="nav-item">
                        <a class="nav-link" href="${pageContext.request.contextPath}/category?slug=cay-trong-nha">
                            Cây trong nhà <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="${pageContext.request.contextPath}/category?slug=cay-canh-mini" class="dropdown-item">Cây Cảnh Mini</a>
                            <a href="${pageContext.request.contextPath}/category?slug=cay-cao-lon" class="dropdown-item">Cây Cao & Lớn</a>
                            <a href="${pageContext.request.contextPath}/category?slug=cay-canh-de-ban" class="dropdown-item">Cây Cảnh Để Bàn</a>
                            <a href="${pageContext.request.contextPath}/category?slug=cay-de-trong" class="dropdown-item">Cây Dễ Trồng</a>
                        </div>
                    </div>
                    <div class="nav-item">
                        <a class="nav-link" href="${pageContext.request.contextPath}/category?slug=cay-ngoai-troi">
                            Cây ngoài trời <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="${pageContext.request.contextPath}/category?slug=cay-leo-dan" class="dropdown-item">Cây Leo Dàn</a>
                            <a href="${pageContext.request.contextPath}/category?slug=cay-bong-mat" class="dropdown-item">Cây Bóng Mát</a>
                            <a href="${pageContext.request.contextPath}/category?slug=cay-co-hoa" class="dropdown-item">Cây Có Hoa</a>
                            <a href="${pageContext.request.contextPath}/category?slug=cay-an-qua" class="dropdown-item">Cây Ăn Quả</a>
                        </div>
                    </div>
                    <div class="nav-item">
                        <a class="nav-link" href="${pageContext.request.contextPath}/category?slug=chau-cay">
                            Chậu cây <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="${pageContext.request.contextPath}/category?slug=chau-nhua" class="dropdown-item">Chậu Nhựa</a>
                            <a href="${pageContext.request.contextPath}/category?slug=chau-xi-mang" class="dropdown-item">Chậu Xi Măng</a>
                            <a href="${pageContext.request.contextPath}/category?slug=chau-dat-nung" class="dropdown-item">Chậu Đất Nung</a>
                            <a href="${pageContext.request.contextPath}/category?slug=chau-gom-su" class="dropdown-item">Chậu Gốm Sứ</a>
                            <a href="${pageContext.request.contextPath}/category?slug=chau-co-lon" class="dropdown-item">Chậu Cỡ Lớn</a>
                        </div>
                    </div>
                    <div class="nav-item">
                        <a class="nav-link" href="${pageContext.request.contextPath}/category?slug=phu-kien">
                            Phụ kiện <span class="material-symbols-outlined">expand_more</span>
                        </a>
                        <div class="dropdown-menu">
                            <a href="${pageContext.request.contextPath}/category?slug=phan-bon" class="dropdown-item">Phân Bón</a>
                            <a href="${pageContext.request.contextPath}/category?slug=dung-cu-lam-vuon" class="dropdown-item">Dụng Cụ Làm Vườn</a>
                            <a href="${pageContext.request.contextPath}/category?slug=dat-trong-cay" class="dropdown-item">Đất Trồng Cây</a>
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

    <!-- Hero Banner -->
    <div class="hero-banner" style="background-image: url('${pageContext.request.contextPath}/images/hero/hero-background.jpg')">
        <div class="container hero-content">
            <div>
                <h1 class="hero-title">${categoryName}</h1>
                <p class="hero-description">Nếu muốn tạo hiệu ứng không gian trải rộng hãy thử đặt một chậu cây cảnh cao và lớn tại góc tường. Với chiều cao của mình, cây cảnh sẽ thu hút mọi nhìn vào đường thẳng kiến trúc.</p>
            </div>
        </div>
    </div>

    <!-- Products Page Content -->
    <main class="products-page">
        <div class="container">
            <div class="page-layout">
                <!-- Filters Sidebar -->
                <aside class="filters-sidebar">
                    <!-- Price Filter with Slider -->
                    <div class="filter-section">
                        <h3 class="filter-title">LỌC THEO GIÁ</h3>
                        <div class="title-underline"></div>

                        <form action="${pageContext.request.contextPath}/category" method="get" class="price-filter-form" id="price-filter-form">
                            <input type="hidden" name="action" value="filter">
                            <input type="hidden" name="categoryId" value="${categoryId}">

                            <!-- Price Range Slider -->
                            <div class="price-range-container">
                                <div class="price-slider">
                                    <div class="price-slider-track"></div>
                                    <div class="price-slider-range" id="slider-range"></div>
                                    <input type="range" class="price-slider-handle left" id="min-price-range"
                                           min="0" max="10000000" step="100000"
                                           value="${param.minPrice != null ? param.minPrice : 100000}">
                                    <input type="range" class="price-slider-handle right" id="max-price-range"
                                           min="0" max="10000000" step="100000"
                                           value="${param.maxPrice != null ? param.maxPrice : 6250000}">
                                </div>

                                <!-- Price display -->
                                <div class="price-values">
                                    <span class="min-price-value" id="min-price-display">
                                        <fmt:formatNumber value="${param.minPrice != null ? param.minPrice : 100000}" pattern="#,###"/>đ
                                    </span>
                                    <span>—</span>
                                    <span class="max-price-value" id="max-price-display">
                                        <fmt:formatNumber value="${param.maxPrice != null ? param.maxPrice : 6250000}" pattern="#,###"/>đ
                                    </span>
                                </div>

                                <!-- Hidden inputs for form submission -->
                                <input type="hidden" name="minPrice" id="min-price-input" value="${param.minPrice != null ? param.minPrice : 100000}">
                                <input type="hidden" name="maxPrice" id="max-price-input" value="${param.maxPrice != null ? param.maxPrice : 6250000}">
                            </div>

                            <!-- Filter Actions -->
                            <div class="filter-actions">
                                <button type="submit" class="filter-button">ÁP DỤNG</button>
                                <a href="${pageContext.request.contextPath}/category?id=${categoryId}" class="reset-button">ĐẶT LẠI</a>
                            </div>
                        </form>
                    </div>

                    <!-- Categories Filter -->
                    <div class="filter-section">
                        <h3 class="filter-title">DANH MỤC</h3>
                        <div class="title-underline"></div>
                        <ul class="category-list">
                            <c:forEach items="${categories}" var="cat">
                                <li class="category-item">
                                    <a href="${pageContext.request.contextPath}/category?id=${cat.id}"
                                       <c:if test="${cat.id == categoryId}">style="color: var(--primary-green); font-weight: bold;"</c:if>>
                                            ${cat.name}
                                    </a>
                                </li>
                            </c:forEach>
                        </ul>
                    </div>
                </aside>

                <!-- Products Main Content -->
                <div class="products-main">
                    <div class="page-header">
                        <div class="header-left">
                            <div class="breadcrumb">
                                <span>Trang chủ » </span><span>${categoryName}</span>
                            </div>
                            <a href="${pageContext.request.contextPath}/category" class="category-toggle">
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                </svg>
                                <span>CHỌN DANH MỤC</span>
                            </a>
                        </div>
                        <div class="results-info">
                            <span>
                                <c:choose>
                                    <c:when test="${totalRecords > 0}">
                                        Đang hiển thị
                                        <c:choose>
                                            <c:when test="${totalRecords < 12}">
                                                1–${totalRecords}
                                            </c:when>
                                            <c:otherwise>
                                                1–12
                                            </c:otherwise>
                                        </c:choose>
                                        trong tổng số ${totalRecords} kết quả
                                    </c:when>
                                    <c:otherwise>
                                        Đang hiển thị 0 trong tổng số 0 kết quả
                                    </c:otherwise>
                                </c:choose>
                            </span>
                            <form action="${pageContext.request.contextPath}/category" method="get">
                                <input type="hidden" name="action" value="sort">
                                <input type="hidden" name="categoryId" value="${categoryId}">
                                <label for="sort-select" class="sr-only">Sắp xếp theo</label>
                                <select id="sort-select" name="sortBy" class="sort-select">
                                    <option value="latest" ${sortBy == 'latest' ? 'selected' : ''}>Sắp xếp theo mới nhất</option>
                                    <option value="popularity" ${sortBy == 'popularity' ? 'selected' : ''}>Sắp xếp theo độ phổ biến</option>
                                    <option value="rating" ${sortBy == 'rating' ? 'selected' : ''}>Sắp xếp theo đánh giá</option>
                                    <option value="price-low" ${sortBy == 'price-low' ? 'selected' : ''}>Sắp xếp theo giá: thấp đến cao</option>
                                    <option value="price-high" ${sortBy == 'price-high' ? 'selected' : ''}>Sắp xếp theo giá: cao đến thấp</option>
                                </select>
                                <noscript><button type="submit">Áp dụng</button></noscript>
                            </form>
                        </div>
                    </div>

                    <div class="products-grid">
                        <c:forEach items="${products}" var="p">
                            <div class="product-card">
                                <div class="product-image-container">
                                    <a href="${pageContext.request.contextPath}/product?id=${p.id}">
                                        <img src="${pageContext.request.contextPath}/${p.image}" alt="${p.name}" class="product-image">
                                    </a>
                                    <c:if test="${p.hasDiscount}">
                                        <div class="discount-badge">-${p.discountPercentage}%</div>
                                    </c:if>
                                    <div class="product-hover">
                                        <!-- FORM THÊM VÀO GIỎ HÀNG ĐÃ SỬA -->
                                        <form action="${pageContext.request.contextPath}/cart/add" method="post">
                                            <input type="hidden" name="productId" value="${p.id}">
                                            <input type="hidden" name="productName" value="${p.name}">
                                            <input type="hidden" name="price" value="${p.price}">
                                            <input type="hidden" name="quantity" value="1">
                                            <input type="hidden" name="image" value="${p.image}">
                                            <input type="hidden" name="variant" value="${p.size}">
                                            <button type="submit" class="add-to-cart-btn">Thêm vào giỏ</button>
                                        </form>
                                    </div>
                                </div>
                                <div class="product-info">
                                    <h4 class="product-name"><a href="${pageContext.request.contextPath}/product?id=${p.id}">${p.name}</a></h4>
                                    <div class="price-comparison">
                                        <p class="product-price">
                                            <fmt:formatNumber value="${p.price}" pattern="#,###"/>đ
                                        </p>
                                        <c:if test="${p.hasDiscount && p.originalPrice != null && p.originalPrice > 0}">
                                            <p class="original-price">
                                                <fmt:formatNumber value="${p.originalPrice}" pattern="#,###"/>đ
                                            </p>
                                        </c:if>
                                    </div>
                                </div>
                            </div>
                        </c:forEach>

                        <c:if test="${empty products}">
                            <div class="no-products">
                                <h3>Không tìm thấy sản phẩm nào</h3>
                            </div>
                        </c:if>
                    </div>

                    <c:if test="${totalPages > 1}">
                        <div class="pagination">
                            <c:forEach begin="1" end="${totalPages}" var="i">
                                <c:choose>
                                    <c:when test="${i == currentPage}">
                                        <span class="page-number active">${i}</span>
                                    </c:when>
                                    <c:otherwise>
                                        <a href="${pageContext.request.contextPath}/category?action=list&page=${i}&id=${categoryId}&sortBy=${sortBy}" class="page-number">${i}</a>
                                    </c:otherwise>
                                </c:choose>
                            </c:forEach>
                        </div>
                    </c:if>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container footer-main">
            <div class="footer-grid">
                <div class="footer-column">
                    <a class="footer-logo" href="${pageContext.request.contextPath}/">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                            <path d="M12 15a7.99 7.99 0 0 1-8-8c0-2.21.9-4.21 2.35-5.65A8.003 8.003 0 0 1 12 2a8.003 8.003 0 0 1 5.65 2.35C19.1 5.79 20 7.79 20 10a7.99 7.99 0 0 1-8 5z"></path>
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
                    <ul class="footer-links">
                        <li class="footer-link-item">Hotline 1: 09 6688 9393</li>
                        <li class="footer-link-item">Hotline 2: 0838 369 639</li>
                        <li class="footer-link-item">Hotline 3: 097 753 7494</li>
                        <li class="footer-link-item">Email: hotro@vuoncayviet.com</li>
                        <li class="footer-link-item">Địa chỉ: 256 - 258 Bình Thành, BHH B, Q. Bình Tân, Tp.HCM</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">MẠNG XÃ HỘI</h4>
                    <div class="footer-social">
                        <a class="social-link" href="#" aria-label="Facebook">
                            <img alt="Facebook" class="social-icon" src="${pageContext.request.contextPath}/images/social/fb.jpg"/>
                        </a>
                        <a class="social-link" href="#" aria-label="Twitter">
                            <img alt="Twitter" class="social-icon" src="${pageContext.request.contextPath}/images/social/twitter.jpg"/>
                        </a>
                        <a class="social-link" href="#" aria-label="Instagram">
                            <img alt="Instagram" class="social-icon" src="${pageContext.request.contextPath}/images/social/ig.jpg"/>
                        </a>
                        <a class="social-link" href="#" aria-label="YouTube">
                            <img alt="YouTube" class="social-icon" src="${pageContext.request.contextPath}/images/social/yt.jpg"/>
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