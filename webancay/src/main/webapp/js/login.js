// login.js - Xử lý form đăng nhập Cây Xanh Việt (ĐÃ TÍCH HỢP ADMIN)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo form đăng nhập...');

    // Khởi tạo tất cả các chức năng
    initFormValidation();
    initFormSubmission();
    initPasswordToggle();
    initRememberMe();
    initForgotPassword();
});

// FORM VALIDATION
function initFormValidation() {
    const form = document.querySelector('form');

    if (!form) {
        console.error('Không tìm thấy form đăng nhập');
        return;
    }

    const inputs = form.querySelectorAll('input[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateField(field) {
    clearFieldError(field);

    let isValid = true;
    let errorMessage = '';

    switch(field.type) {
        case 'email':
            if (field.value.trim() === '') {
                isValid = false;
                errorMessage = 'Email là bắt buộc';
            } else if (!isValidEmail(field.value)) {
                isValid = false;
                errorMessage = 'Email không hợp lệ';
            }
            break;

        case 'password':
            if (field.value.trim() === '') {
                isValid = false;
                errorMessage = 'Mật khẩu là bắt buộc';
            }
            break;
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(field, message) {
    field.classList.add('error');

    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;

    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    field.classList.remove('error');

    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// PASSWORD TOGGLE
function initPasswordToggle() {
    const passwordInput = document.getElementById('password');

    if (!passwordInput) return;

    const passwordGroup = passwordInput.parentNode;

    // Tạo nút toggle password
    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'password-toggle';
    toggleButton.innerHTML = '<span class="material-symbols-outlined">visibility</span>';
    toggleButton.style.position = 'absolute';
    toggleButton.style.right = '10px';
    toggleButton.style.top = '50%';
    toggleButton.style.transform = 'translateY(-50%)';
    toggleButton.style.background = 'none';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.color = '#6b7280';
    toggleButton.style.padding = '5px';

    passwordGroup.style.position = 'relative';
    passwordGroup.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        this.innerHTML = isPassword ?
            '<span class="material-symbols-outlined">visibility_off</span>' :
            '<span class="material-symbols-outlined">visibility</span>';
    });
}

// REMEMBER ME
function initRememberMe() {
    // Kiểm tra nếu có thông tin đăng nhập đã lưu
    const savedEmail = localStorage.getItem('cayxanhviet_remember_email');
    const savedPassword = localStorage.getItem('cayxanhviet_remember_password');

    if (savedEmail && savedPassword) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('password').value = savedPassword;

        // Tạo checkbox remember me nếu chưa có
        createRememberMeCheckbox(true);
    } else {
        createRememberMeCheckbox(false);
    }
}

function createRememberMeCheckbox(checked = false) {
    const passwordGroup = document.getElementById('password').parentNode;

    // Kiểm tra xem đã có checkbox chưa
    if (!document.getElementById('remember-me')) {
        const rememberMeContainer = document.createElement('div');
        rememberMeContainer.style.marginTop = '0.5rem';
        rememberMeContainer.style.display = 'flex';
        rememberMeContainer.style.alignItems = 'center';
        rememberMeContainer.style.gap = '0.5rem';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'remember-me';
        checkbox.name = 'remember-me';
        checkbox.checked = checked;
        checkbox.style.accentColor = '#113222';

        const label = document.createElement('label');
        label.htmlFor = 'remember-me';
        label.textContent = 'Ghi nhớ đăng nhập';
        label.style.fontSize = '0.875rem';
        label.style.color = '#6b7280';
        label.style.cursor = 'pointer';

        rememberMeContainer.appendChild(checkbox);
        rememberMeContainer.appendChild(label);
        passwordGroup.appendChild(rememberMeContainer);
    }
}

// FORM SUBMISSION
function initFormSubmission() {
    const form = document.querySelector('form');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate tất cả các trường
        const isValid = validateForm();

        if (isValid) {
            void submitLoginForm();
        } else {
            showGeneralError('Vui lòng kiểm tra lại thông tin đã nhập');
        }
    });
}

function validateForm() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    // Validate từng trường
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

async function submitLoginForm() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('.submit-button');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me')?.checked || false;

    // Hiển thị trạng thái loading
    submitButton.disabled = true;
    submitButton.textContent = 'ĐANG XỬ LÝ...';
    submitButton.style.opacity = '0.7';

    try {
        // Giả lập kiểm tra đăng nhập
        const loginResult = await mockLoginAPI(email, password);

        if (loginResult.success) {
            // Lưu thông tin đăng nhập nếu chọn "Ghi nhớ"
            if (rememberMe) {
                localStorage.setItem('cayxanhviet_remember_email', email);
                localStorage.setItem('cayxanhviet_remember_password', password);
            } else {
                // Xóa thông tin đã lưu nếu không chọn
                localStorage.removeItem('cayxanhviet_remember_email');
                localStorage.removeItem('cayxanhviet_remember_password');
            }

            // Lưu thông tin user đã đăng nhập
            localStorage.setItem('cayxanhviet_current_user', JSON.stringify(loginResult.user));
            localStorage.setItem('cayxanhviet_is_logged_in', 'true');

            // Đồng bộ với hệ thống cũ
            localStorage.setItem('currentUser', JSON.stringify(loginResult.user));

            // Gọi hàm từ auth.js để cập nhật giao diện (nếu auth.js đã tải)
            if (typeof checkLoginStatus === 'function') {
                checkLoginStatus();
            }

            // Hiển thị thông báo thành công và chuyển hướng
            showLoginSuccess(loginResult.user);

        } else {
            showGeneralError(loginResult.message || 'Email hoặc mật khẩu không chính xác');
            submitButton.disabled = false;
            submitButton.textContent = 'ĐĂNG NHẬP';
            submitButton.style.opacity = '1';
        }

    } catch (error) {
        console.error('Login error:', error);
        showGeneralError('Có lỗi kết nối. Vui lòng thử lại sau.');
        submitButton.disabled = false;
        submitButton.textContent = 'ĐĂNG NHẬP';
        submitButton.style.opacity = '1';
    }
}

// Giả lập API đăng nhập - ĐÃ CẬP NHẬT
function mockLoginAPI(email, password) {
    return new Promise((resolve) => {
        // Hiển thị loading
        showLoadingIndicator();

        setTimeout(() => {
            hideLoadingIndicator();

            // Lấy danh sách user từ localStorage - KIỂM TRA CẢ 2 HỆ THỐNG
            let users = [];

            // Hệ thống mới (cayxanhviet_users)
            try {
                const usersData = localStorage.getItem('cayxanhviet_users');
                if (usersData) {
                    users = JSON.parse(usersData);
                }
            } catch (error) {
                users = [];
            }

            // Nếu không có trong hệ thống mới, thử hệ thống cũ (users)
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

            // Kiểm tra thông tin đăng nhập trong users đã đăng ký
            const user = users.find(user => {
                if (!user || !user.email || !user.password) {
                    return false;
                }
                // Cho phép đăng nhập bằng email hoặc username
                const isEmailMatch = user.email === email;
                const isUsernameMatch = user.username === email;
                return (isEmailMatch || isUsernameMatch) && user.password === password;
            });

            if (user) {
                resolve({
                    success: true,
                    user: user,
                    message: 'Đăng nhập thành công'
                });
                return;
            }

            // Kiểm tra với users mặc định (nếu không tìm thấy trong users đã đăng ký)
            const defaultUsers = [
                {
                    email: 'user@example.com',
                    username: 'user',
                    password: 'password123',
                    firstName: 'Người',
                    lastName: 'Dùng',
                    gender: 'male',
                    role: 'customer'
                },
                {
                    email: 'test@gmail.com',
                    username: 'test',
                    password: 'test123',
                    firstName: 'Test',
                    lastName: 'User',
                    gender: 'female',
                    role: 'customer'
                },
                {
                    email: 'admin@cayxanhviet.com',
                    username: 'admin',
                    password: 'admin123',
                    firstName: 'Quản',
                    lastName: 'Trị',
                    gender: 'male',
                    role: 'admin'
                }
            ];

            const defaultUser = defaultUsers.find(user => {
                // Kiểm tra cả email và username
                const isEmailMatch = user.email === email;
                const isUsernameMatch = user.username === email;
                return (isEmailMatch || isUsernameMatch) && user.password === password;
            });

            if (defaultUser) {
                // Lưu user mặc định vào hệ thống để lần sau không cần kiểm tra
                if (!users.some(u => u.email === defaultUser.email)) {
                    users.push(defaultUser);
                    localStorage.setItem('cayxanhviet_users', JSON.stringify(users));
                }

                resolve({
                    success: true,
                    user: defaultUser,
                    message: 'Đăng nhập thành công'
                });
            } else {
                resolve({
                    success: false,
                    message: 'Email hoặc mật khẩu không chính xác'
                });
            }
        }, 1500);
    });
}

function showLoadingIndicator() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loginLoadingOverlay';
    loadingOverlay.style.position = 'fixed';
    loadingOverlay.style.top = '0';
    loadingOverlay.style.left = '0';
    loadingOverlay.style.width = '100%';
    loadingOverlay.style.height = '100%';
    loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    loadingOverlay.style.display = 'flex';
    loadingOverlay.style.justifyContent = 'center';
    loadingOverlay.style.alignItems = 'center';
    loadingOverlay.style.zIndex = '9999';

    const spinner = document.createElement('div');
    spinner.style.width = '50px';
    spinner.style.height = '50px';
    spinner.style.border = '5px solid #f3f3f3';
    spinner.style.borderTop = '5px solid #113222';
    spinner.style.borderRadius = '50%';
    spinner.style.animation = 'spin 1s linear infinite';

    loadingOverlay.appendChild(spinner);
    document.body.appendChild(loadingOverlay);

    // Thêm animation CSS nếu chưa có
    if (!document.querySelector('#spin-animation')) {
        const style = document.createElement('style');
        style.id = 'spin-animation';
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

function hideLoadingIndicator() {
    const loadingOverlay = document.getElementById('loginLoadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.remove();
    }
}

function showGeneralError(message) {
    // Xóa thông báo lỗi cũ nếu có
    const existingError = document.querySelector('.general-error');
    if (existingError) {
        existingError.remove();
    }

    const errorElement = document.createElement('div');
    errorElement.className = 'general-error';
    errorElement.style.color = '#dc2626';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.textAlign = 'center';
    errorElement.style.marginTop = '1rem';
    errorElement.style.padding = '0.75rem';
    errorElement.style.backgroundColor = '#fef2f2';
    errorElement.style.borderRadius = '0.375rem';
    errorElement.style.border = '1px solid #fecaca';
    errorElement.textContent = message;

    const form = document.querySelector('form');
    form.appendChild(errorElement);

    // Tự động xóa sau 5 giây
    setTimeout(() => {
        if (errorElement.parentNode) {
            errorElement.remove();
        }
    }, 5000);
}

// SHOW LOGIN SUCCESS - ĐÃ CẬP NHẬT ĐỂ CHUYỂN HƯỚNG THEO ROLE
function showLoginSuccess(user) {
    // Tạo overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '10000';

    // Tạo modal thông báo
    const modal = document.createElement('div');
    modal.style.backgroundColor = 'white';
    modal.style.padding = '2rem';
    modal.style.borderRadius = '0.75rem';
    modal.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    modal.style.maxWidth = '400px';
    modal.style.width = '90%';
    modal.style.textAlign = 'center';
    modal.style.animation = 'modalAppear 0.3s ease-out';

    // Xác định redirect URL dựa trên role
    const isAdmin = user.role === 'admin';
    const redirectUrl = isAdmin ? 'admin/admin.jsp' : 'index.jsp';

    // Tên hiển thị
    const displayName = user.firstName ?
        `${user.firstName} ${user.lastName || ''}`.trim() :
        (user.fullname || user.email.split('@')[0]);

    const welcomeMessage = isAdmin ?
        `Chào mừng Admin ${displayName}!` :
        `Chào mừng ${displayName} quay trở lại!`;

    // Icon thành công với Material Icons
    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.textContent = 'check_circle';
    icon.style.fontSize = '64px';
    icon.style.color = isAdmin ? '#2563eb' : '#059669'; // Màu xanh khác cho admin
    icon.style.marginBottom = '1rem';

    // Tiêu đề
    const title = document.createElement('h2');
    title.textContent = 'Đăng nhập thành công!';
    title.style.marginTop = '0';
    title.style.marginBottom = '0.5rem';
    title.style.color = isAdmin ? '#2563eb' : '#059669';
    title.style.fontSize = '1.5rem';
    title.style.fontWeight = 'bold';

    // Nội dung
    const content = document.createElement('p');
    content.textContent = welcomeMessage + ' Đang chuyển hướng...';
    content.style.marginBottom = '1.5rem';
    content.style.color = '#6b7280';
    content.style.lineHeight = '1.5';

    // Thêm badge role nếu là admin
    if (isAdmin) {
        const roleBadge = document.createElement('div');
        roleBadge.textContent = 'QUYỀN QUẢN TRỊ VIÊN';
        roleBadge.style.display = 'inline-block';
        roleBadge.style.backgroundColor = '#2563eb';
        roleBadge.style.color = 'white';
        roleBadge.style.padding = '0.25rem 0.75rem';
        roleBadge.style.borderRadius = '0.25rem';
        roleBadge.style.fontSize = '0.75rem';
        roleBadge.style.fontWeight = 'bold';
        roleBadge.style.marginBottom = '1rem';
        content.insertBefore(roleBadge, content.firstChild);
    }

    // Progress bar
    const progressContainer = document.createElement('div');
    progressContainer.style.width = '100%';
    progressContainer.style.height = '4px';
    progressContainer.style.backgroundColor = '#e5e7eb';
    progressContainer.style.borderRadius = '2px';
    progressContainer.style.overflow = 'hidden';
    progressContainer.style.marginBottom = '1.5rem';

    const progressBar = document.createElement('div');
    progressBar.style.width = '100%';
    progressBar.style.height = '100%';
    progressBar.style.backgroundColor = isAdmin ? '#2563eb' : '#113222';
    progressBar.style.borderRadius = '2px';
    progressBar.style.animation = 'progress 2s linear forwards';

    progressContainer.appendChild(progressBar);

    // Thêm các phần tử vào modal
    modal.appendChild(icon);
    modal.appendChild(title);
    modal.appendChild(content);
    modal.appendChild(progressContainer);

    // Thêm modal vào overlay
    overlay.appendChild(modal);

    // Thêm overlay vào body
    document.body.appendChild(overlay);

    // Thêm animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalAppear {
            from {
                opacity: 0;
                transform: scale(0.9) translateY(-10px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        @keyframes progress {
            from { width: 100%; }
            to { width: 0%; }
        }
    `;
    document.head.appendChild(style);

    // Chuyển hướng sau 2 giây THEO ROLE
    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 2000);
}

// FORGOT PASSWORD
function initForgotPassword() {
    const forgotPasswordLink = document.querySelector('.forgot-password');

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            showForgotPasswordModal();
        });
    }
}

function showForgotPasswordModal() {
    // Tạo overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    // Tạo modal với giao diện mới
    const modal = document.createElement('div');
    modal.className = 'forgot-password-modal';

    modal.innerHTML = `
        <h2 class="forgot-password-title">Phục hồi mật khẩu</h2>
        <p class="forgot-password-content">Vui lòng nhập email của bạn để nhận liên kết đặt lại mật khẩu.</p>
        
        <form class="forgot-password-form">
            <input 
                type="email" 
                class="forgot-password-input" 
                placeholder="Email của bạn" 
                required
            >
            
            <p class="recaptcha-notice" style="margin-top: 1rem; margin-bottom: 1.5rem;">
                This site is protected by reCAPTCHA and the Google 
                <a href="#">Privacy Policy</a> and 
                <a href="#">Terms of Service</a> apply.
            </p>
            
            <div class="forgot-password-buttons">
                <button type="button" class="forgot-password-cancel">Hủy</button>
                <button type="submit" class="forgot-password-submit">GỬI</button>
            </div>
        </form>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Xử lý sự kiện
    const cancelButton = modal.querySelector('.forgot-password-cancel');
    const form = modal.querySelector('.forgot-password-form');
    const emailInput = modal.querySelector('.forgot-password-input');
    const submitButton = modal.querySelector('.forgot-password-submit');

    cancelButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleForgotPassword(emailInput.value, modal, submitButton);
    });

    // Đóng modal khi click outside
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

function handleForgotPassword(email, modal, submitButton) {
    if (!isValidEmail(email)) {
        showModalError('Vui lòng nhập email hợp lệ', modal);
        return;
    }

    // Hiển thị trạng thái loading
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Đang gửi...';

    // Giả lập gửi email reset password
    setTimeout(() => {
        modal.innerHTML = `
            <div style="text-align: center;">
                <span class="material-symbols-outlined" style="font-size: 64px; color: #059669; margin-bottom: 1rem;">check_circle</span>
                <h2 style="margin-bottom: 1rem; color: #059669; font-size: 1.5rem; font-weight: bold;">Thành công!</h2>
                <p style="margin-bottom: 1.5rem; color: #6b7280;">Liên kết đặt lại mật khẩu đã được gửi đến email của bạn.</p>
                <button class="forgot-password-submit" id="closeForgotPasswordModal">Đóng</button>
            </div>
        `;

        document.getElementById('closeForgotPasswordModal').addEventListener('click', function() {
            const overlay = document.querySelector('.modal-overlay');
            if (overlay) {
                document.body.removeChild(overlay);
            }
        });
    }, 1500);
}

function showModalError(message, modal) {
    const errorElement = document.createElement('div');
    errorElement.style.color = '#dc2626';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginBottom = '1rem';
    errorElement.style.padding = '0.5rem';
    errorElement.style.backgroundColor = '#fef2f2';
    errorElement.style.borderRadius = '0.375rem';
    errorElement.style.border = '1px solid #fecaca';
    errorElement.textContent = message;

    const form = modal.querySelector('form');
    form.insertBefore(errorElement, form.firstChild);

    setTimeout(() => {
        if (errorElement.parentNode) {
            errorElement.remove();
        }
    }, 3000);
}

//CSS STYLES
// Thêm các style cần thiết với Material Icons
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .field-error {
        color: #dc2626;
        font-size: 0.75rem;
        margin-top: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.375rem;
    }
    
    .field-error::before {
        content: "⚠";
        font-size: 0.875rem;
    }
    
    .form-input.error {
        border-color: #dc2626 !important;
        box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.1) !important;
    }
    
    .password-toggle:hover {
        color: #113222;
    }
    
    .general-error {
        animation: shake 0.5s ease-in-out;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    /* Responsive improvements */
    @media (max-width: 640px) {
        .form-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
        }
        
        .form-links {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .separator {
            display: none;
        }
    }
`;

document.head.appendChild(additionalStyles);

console.log('Form đăng nhập đã được khởi tạo thành công!');