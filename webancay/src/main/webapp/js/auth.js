// auth.js - Quản lý trạng thái đăng nhập và hiển thị user menu (ĐÃ TÍCH HỢP ADMIN)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo quản lý đăng nhập...');

    // Khởi tạo admin account nếu chưa có
    initAdminAccount();

    // Kiểm tra trạng thái đăng nhập
    checkLoginStatus();

    // Khởi tạo các chức năng
    initLogout();
    updateCartDisplay();

    // Bảo vệ trang admin nếu đang ở trang admin
    if (window.location.pathname.includes('admin/')) {
        protectAdminPage();
    }
});

// ========== KHỞI TẠO TÀI KHOẢN ADMIN ==========
function initAdminAccount() {
    // Tài khoản admin mặc định
    const adminUser = {
        id: "admin_001",
        username: "admin",
        email: "admin@cayxanhviet.com",
        password: "admin123",
        role: "admin",
        fullname: "Quản trị viên",
        firstName: "Quản",
        lastName: "Trị",
        phone: "0000000000",
        address: "Hệ thống",
        createdAt: new Date().toISOString()
    };

    // Kiểm tra xem đã có tài khoản admin trong cayxanhviet_users chưa
    let users = [];
    try {
        const usersData = localStorage.getItem('cayxanhviet_users');
        if (usersData) {
            users = JSON.parse(usersData);
        }
    } catch (error) {
        users = [];
    }

    // Kiểm tra admin đã tồn tại chưa
    const adminExists = users.some(user => user.role === 'admin');

    if (!adminExists) {
        users.push(adminUser);
        localStorage.setItem('cayxanhviet_users', JSON.stringify(users));
        console.log('Đã tạo tài khoản admin mặc định');
    }

    // Đồng bộ với hệ thống cũ (tương thích ngược)
    const oldUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const oldAdminExists = oldUsers.some(user => user.role === 'admin');
    if (!oldAdminExists) {
        oldUsers.push(adminUser);
        localStorage.setItem('users', JSON.stringify(oldUsers));
    }
}

// ========== KIỂM TRA TRẠNG THÁI ĐĂNG NHẬP ==========
function checkLoginStatus() {
    // Kiểm tra cả 2 hệ thống để tương thích
    let isLoggedIn = localStorage.getItem('cayxanhviet_is_logged_in') === 'true';
    let currentUser = JSON.parse(localStorage.getItem('cayxanhviet_current_user') || 'null');

    // Nếu không có trong hệ thống mới, kiểm tra hệ thống cũ
    if (!currentUser) {
        const oldUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        if (oldUser) {
            currentUser = oldUser;
            isLoggedIn = true;
            // Chuyển sang hệ thống mới
            localStorage.setItem('cayxanhviet_current_user', JSON.stringify(oldUser));
            localStorage.setItem('cayxanhviet_is_logged_in', 'true');
        }
    }

    const loginLink = document.getElementById('login-link');
    const userMenu = document.getElementById('user-menu');
    const userName = document.getElementById('user-name');
    const userAvatar = document.getElementById('user-avatar');

    if (isLoggedIn && currentUser) {
        // Ẩn nút đăng nhập, hiện user menu
        if (loginLink) loginLink.style.display = 'none';
        if (userMenu) userMenu.style.display = 'block';

        // Cập nhật thông tin user
        if (userName) {
            const displayName = currentUser.firstName ?
                `${currentUser.firstName} ${currentUser.lastName || ''}`.trim() :
                (currentUser.fullname || currentUser.email.split('@')[0]);
            userName.textContent = displayName;

            // Thêm badge admin nếu là admin
            if (currentUser.role === 'admin') {
                const adminBadge = document.createElement('span');
                adminBadge.textContent = ' (Admin)';
                adminBadge.style.color = '#dc2626';
                adminBadge.style.fontSize = '0.75rem';
                adminBadge.style.marginLeft = '0.25rem';
                adminBadge.style.fontWeight = 'bold';
                userName.appendChild(adminBadge);
            }
        }

        if (userAvatar) {
            const firstLetter = currentUser.firstName ?
                currentUser.firstName.charAt(0).toUpperCase() :
                (currentUser.fullname ? currentUser.fullname.charAt(0).toUpperCase() :
                    currentUser.email.charAt(0).toUpperCase());
            userAvatar.textContent = firstLetter;

            // Đổi màu avatar nếu là admin
            if (currentUser.role === 'admin') {
                userAvatar.style.backgroundColor = '#dc2626';
            }
        }

        // Thêm link admin vào dropdown nếu là admin
        if (currentUser.role === 'admin') {
            addAdminLinkToDropdown();
        }
    } else {
        // Hiện nút đăng nhập, ẩn user menu
        if (loginLink) loginLink.style.display = 'block';
        if (userMenu) userMenu.style.display = 'none';
    }
}

// ========== THÊM LINK ADMIN VÀO DROPDOWN ==========
function addAdminLinkToDropdown() {
    const userDropdown = document.querySelector('.user-dropdown');
    if (!userDropdown) return;

    // Kiểm tra xem đã có link admin chưa
    if (userDropdown.querySelector('.admin-link')) return;

    const adminLink = document.createElement('a');
    adminLink.href = 'admin/admin.jsp';
    adminLink.className = 'admin-link';
    adminLink.innerHTML = `
        <span class="material-symbols-outlined" style="vertical-align: middle; margin-right: 8px;">admin_panel_settings</span>
        Trang Quản Trị
    `;
    adminLink.style.display = 'block';
    adminLink.style.padding = '0.5rem 1rem';
    adminLink.style.color = '#dc2626';
    adminLink.style.textDecoration = 'none';
    adminLink.style.borderTop = '1px solid #e5e7eb';
    adminLink.style.marginTop = '0.5rem';
    adminLink.style.fontWeight = 'bold';

    // Chèn vào trước nút đăng xuất
    const logoutBtn = userDropdown.querySelector('#logout-btn');
    if (logoutBtn && logoutBtn.parentNode) {
        logoutBtn.parentNode.insertBefore(adminLink, logoutBtn);
    } else {
        userDropdown.appendChild(adminLink);
    }
}

// ========== BẢO VỆ TRANG ADMIN ==========
function protectAdminPage() {
    // Chỉ chạy trên các trang admin
    const currentUser = getCurrentUser();
    const isLoggedIn = localStorage.getItem('cayxanhviet_is_logged_in') === 'true' ||
        localStorage.getItem('currentUser') !== null;

    // Nếu chưa đăng nhập hoặc không phải admin -> chuyển về trang login
    if (!isLoggedIn || !currentUser || currentUser.role !== 'admin') {
        alert('Bạn không có quyền truy cập trang quản trị! Vui lòng đăng nhập với tài khoản admin.');
        window.location.href = '../login.html';
    }
}

// ========== HÀM ĐĂNG NHẬP CHO ADMIN (tương thích với form cũ) ==========
function login(event) {
    if (event) event.preventDefault(); // Ngăn reload trang

    // Lấy giá trị từ form
    const username = document.getElementById("loginUser") ? document.getElementById("loginUser").value.trim() : '';
    const password = document.getElementById("loginPass") ? document.getElementById("loginPass").value.trim() : '';

    // Kiểm tra trong cả 2 hệ thống users
    let users = [];

    // Hệ thống mới
    try {
        const usersData = localStorage.getItem('cayxanhviet_users');
        if (usersData) {
            users = JSON.parse(usersData);
        }
    } catch (error) {
        users = [];
    }

    // Hệ thống cũ
    if (users.length === 0) {
        try {
            const oldUsersData = localStorage.getItem('users');
            if (oldUsersData) {
                users = JSON.parse(oldUsersData);
            }
        } catch (error) {
            users = [];
        }
    }

    // Kiểm tra đăng nhập
    const user = users.find(u => (
        (u.email === username || u.username === username) &&
        u.password === password
    ));

    if (user) {
        console.log("Đăng nhập thành công: ", user.role);

        // Lưu thông tin đăng nhập vào cả 2 hệ thống
        localStorage.setItem('cayxanhviet_current_user', JSON.stringify(user));
        localStorage.setItem('cayxanhviet_is_logged_in', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Cập nhật giao diện
        checkLoginStatus();

        // Chuyển hướng theo role
        if (user.role === "admin") {
            window.location.href = "../admin/admin.html";
        } else {
            window.location.href = "index.jsp";
        }
    } else {
        alert("Sai thông tin đăng nhập.");
    }
}

// ========== XỬ LÝ ĐĂNG XUẤT ==========
function initLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logoutUser();
        });
    }
}

function logoutUser() {
    // Xóa thông tin đăng nhập khỏi tất cả hệ thống
    localStorage.removeItem('cayxanhviet_current_user');
    localStorage.removeItem('cayxanhviet_is_logged_in');
    localStorage.removeItem('currentUser');

    // Hiển thị thông báo đăng xuất thành công
    showLogoutNotification();

    // Nếu đang ở trang admin, chuyển về trang chủ
    if (window.location.pathname.includes('admin/')) {
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    } else {
        // Cập nhật giao diện
        setTimeout(() => {
            checkLoginStatus();
        }, 1000);
    }
}

// ========== CÁC HÀM TIỆN ÍCH ==========
function getCurrentUser() {
    // Ưu tiên lấy từ hệ thống mới
    let user = JSON.parse(localStorage.getItem('cayxanhviet_current_user') || 'null');

    // Nếu không có, thử lấy từ hệ thống cũ
    if (!user) {
        user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    }

    return user;
}

function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === 'admin';
}

// ========== CÁC HÀM GIỮ NGUYÊN ==========
function showLogoutNotification() {
    // Tạo thông báo đăng xuất
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#059669';
    notification.style.color = 'white';
    notification.style.padding = '1rem 1.5rem';
    notification.style.borderRadius = '0.5rem';
    notification.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    notification.style.zIndex = '9999';
    notification.style.display = 'flex';
    notification.style.alignItems = 'center';
    notification.style.gap = '0.5rem';
    notification.style.animation = 'slideInRight 0.3s ease-out';

    notification.innerHTML = `
        <span class="material-symbols-outlined">check_circle</span>
        <span>Đã đăng xuất thành công</span>
    `;

    document.body.appendChild(notification);

    // Tự động xóa sau 3 giây
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);

    // Thêm animation CSS nếu chưa có
    if (!document.querySelector('#notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
    // Lấy thông tin giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem('cayxanhviet_cart') || '[]');
    const cartCount = document.getElementById('cart-count');

    if (cartCount) {
        if (cart.length > 0) {
            // Tính tổng tiền
            const total = cart.reduce((sum, item) => {
                return sum + (item.price * item.quantity);
            }, 0);

            // Định dạng số tiền
            const formattedTotal = new Intl.NumberFormat('vi-VN').format(total);
            cartCount.textContent = `${formattedTotal}đ`;
        } else {
            cartCount.textContent = '0đ';
        }
    }
}

// Thêm sự kiện click để đóng dropdown khi click ra ngoài
document.addEventListener('click', function(e) {
    const userMenu = document.getElementById('user-menu');
    const userDropdown = userMenu?.querySelector('.user-dropdown');

    if (userMenu && userDropdown && !userMenu.contains(e.target)) {
        // Chỉ ẩn dropdown nếu click ra ngoài
        userDropdown.style.display = 'none';
    }
});

// Tạo hiệu ứng toggle cho dropdown khi click vào user info
const userInfo = document.querySelector('.user-info');
if (userInfo) {
    userInfo.addEventListener('click', function(e) {
        e.stopPropagation();
        const userDropdown = document.querySelector('.user-dropdown');
        if (userDropdown) {
            const isVisible = userDropdown.style.display === 'block';
            userDropdown.style.display = isVisible ? 'none' : 'block';
        }
    });
}