<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard Admin</title>
    <link rel="stylesheet" href="assets/css/admin.css">
    <link rel="stylesheet" href="assets/css/sidebar-admin.css">

</head>
<body>
    <!-- SIDEBAR -->
    <div class="sidebar">
        <!-- HEADER -->
        <header>Admin Dashboard</header>
        <a href="admin.jsp" class="menu-item">Dashboard</a>
        <a href="product-manager.html" class="menu-item">Quản lý sản phẩm</a>
        <a href="category-manager.html" class="menu-item">Quản lý danh mục</a>
        <a href="order-manager.html" class="menu-item">Quản lý đơn hàng</a>
        <a href="user-manager.html" class="menu-item">Khách hàng</a>
        <a href="home-settings.html" class="menu-item">Banner / Trang chủ</a>
        <a href="contact-manager.html" class="menu-item">Liên hệ</a>
    </div>

    <!-- MAIN CONTENT -->
    <!--    DASHBOARD       -->
    <div class="main page">

        <!-- OVERVIEW CARDS -->
        <div class="cards">
            <div class="card">
                <h3>Doanh thu</h3>
                <p>12,500,000đ</p>
            </div>
            <div class="card">
                <h3>Đơn hàng mới</h3>
                <p>32</p>
            </div>
            <div class="card">
                <h3>Sản phẩm còn lại</h3>
                <p>186</p>
            </div>
            <div class="card">
                <h3>Khách hàng</h3>
                <p>450</p>
            </div>
        </div>

        <!-- CHART + ORDERS -->
        <div class="content-row">
            <div class="box">
                <h3>Biểu đồ thống kê</h3>
                <div style="width:100%; height:250px; background:#ecf0f1; border-radius:6px; display:flex; justify-content:center; align-items:center; color:#777;">
                    (Biểu đồ sẽ đặt tại đây)
                </div>
            </div>
            <div class="box">
                <h3>Đơn hàng mới</h3>
                <table>
                    <tr>
                        <th>Mã</th>
                        <th>Khách hàng</th>
                        <th>Tổng</th>
                    </tr>
                    <tr><td>#001</td><td>Nguyễn A</td><td>450,000đ</td></tr>
                    <tr><td>#002</td><td>Trần B</td><td>300,000đ</td></tr>
                    <tr><td>#003</td><td>Lê C</td><td>520,000đ</td></tr>
                </table>
            </div>
        </div>

        <!-- LOW STOCK PRODUCTS -->
        <div class="box" style="margin-top:25px;">
            <h3>Sản phẩm sắp hết hàng</h3>
            <table>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Tồn kho</th>
                </tr>
                <tr><td>Cây lưỡi hổ</td><td>3</td></tr>
                <tr><td>Cây kim ngân</td><td>5</td></tr>
                <tr><td>Cây trầu bà</td><td>2</td></tr>
            </table>
        </div>

        <!-- ACTIVITY LOG -->
        <div class="box" style="margin-top:25px;">
            <h3>Hoạt động gần đây</h3>
            <ul>
                <li>Admin cập nhật sản phẩm lúc 10:20</li>
                <li>Khách hàng mới đăng ký lúc 09:15</li>
                <li>Cập nhật banner trang chủ lúc 08:50</li>
            </ul>
        </div>

        <!-- FOOTER -->
        <footer>
            &copy; 2025 - Hệ thống quản lý cây cảnh
        </footer>
    </div>
    <script src="../js/auth.js"></script>
</body>
</html>