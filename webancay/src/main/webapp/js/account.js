// account.js - Xử lý form hồ sơ và upload ảnh

document.addEventListener('DOMContentLoaded', function() {
    console.log('Account page loaded');

    // ========== XỬ LÝ FORM HỒ SƠ ==========
    initProfileForm();

    // ========== XỬ LÝ TẢI ẢNH ĐẠI DIỆN ==========
    initAvatarUpload();

    // ========== KHỞI TẠO DỮ LIỆU MẶC ĐỊNH ==========
    initDefaultData();
});

// ========== KHỞI TẠO DỮ LIỆU MẶC ĐỊNH ==========
function initDefaultData() {
    // Dữ liệu mặc định
    const defaultData = {
        username: 'ututut1234',
        name: 'Nguyễn Văn A',
        email: 'ut123456@gmail.com',
        phone: '0987654321',
        gender: 'male',
        birthday: {
            day: '15',
            month: 'Tháng 8',
            year: '2000'
        }
    };

    // Kiểm tra nếu chưa có dữ liệu thì lưu mặc định
    if (!localStorage.getItem('profileData')) {
        localStorage.setItem('profileData', JSON.stringify(defaultData));
        console.log('Đã lưu dữ liệu mặc định');
    }

    // Luôn lưu email và phone thật để sử dụng
    localStorage.setItem('realEmail', defaultData.email);
    localStorage.setItem('realPhone', defaultData.phone);
}

// ========== HÀM XỬ LÝ FORM HỒ SƠ ==========
function initProfileForm() {
    const profileForm = document.getElementById('profile-form');

    if (!profileForm) {
        console.error('Không tìm thấy form hồ sơ');
        return;
    }

    // Tải dữ liệu đã lưu
    loadSavedData();

    // Xử lý khi submit form
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Đang lưu thông tin...');

        // Lấy dữ liệu từ form
        const formData = getFormData();

        // Kiểm tra dữ liệu
        if (validateForm(formData)) {
            // Lưu dữ liệu
            saveProfileData(formData);

            // Hiển thị thông báo
            showMessage('Thông tin đã được lưu thành công!', 'success');
        }
    });

    // Xử lý nút "Thay Đổi" email
    const emailChangeLink = document.querySelectorAll('.form-link')[0];
    if (emailChangeLink) {
        emailChangeLink.addEventListener('click', function(event) {
            event.preventDefault();
            showChangeEmailDialog();
        });
    }

    // Xử lý nút "Thay Đổi" số điện thoại
    const phoneChangeLink = document.querySelectorAll('.form-link')[1];
    if (phoneChangeLink) {
        phoneChangeLink.addEventListener('click', function(event) {
            event.preventDefault();
            showChangePhoneDialog();
        });
    }
}

// ========== HÀM LẤY DỮ LIỆU TỪ FORM ==========
function getFormData() {
    const name = document.getElementById('name').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    // Lấy email và phone thật từ localStorage
    const realEmail = localStorage.getItem('realEmail') || 'ut123456@gmail.com';
    const realPhone = localStorage.getItem('realPhone') || '0987654321';

    return {
        username: 'ututut1234',
        name: name,
        email: realEmail,
        phone: realPhone,
        gender: gender,
        birthday: {
            day: day,
            month: month,
            year: year
        }
    };
}

// ========== HÀM KIỂM TRA DỮ LIỆU ==========
function validateForm(data) {
    // Kiểm tra tên
    if (!data.name) {
        showMessage('Vui lòng nhập tên của bạn', 'error');
        document.getElementById('name').focus();
        return false;
    }

    if (data.name.length < 2) {
        showMessage('Tên phải có ít nhất 2 ký tự', 'error');
        document.getElementById('name').focus();
        return false;
    }

    // Kiểm tra ngày sinh
    if (!data.birthday.day || !data.birthday.month || !data.birthday.year) {
        showMessage('Vui lòng chọn đầy đủ ngày, tháng, năm sinh', 'warning');
        return false;
    }

    return true;
}

// ========== HÀM LƯU DỮ LIỆU ==========
function saveProfileData(data) {
    // Lưu vào localStorage
    localStorage.setItem('profileData', JSON.stringify(data));

    // Lưu email và phone riêng
    localStorage.setItem('realEmail', data.email);
    localStorage.setItem('realPhone', data.phone);

    // Cập nhật tên trên header nếu có
    updateHeaderInfo(data.name);

    // Hiển thị lại dữ liệu (để cập nhật email/phone mask)
    displayData(data);
}

// ========== HÀM TẢI VÀ HIỂN THỊ DỮ LIỆU ==========
function loadSavedData() {
    const savedData = localStorage.getItem('profileData');
    let data;

    if (savedData) {
        data = JSON.parse(savedData);
    } else {
        // Dữ liệu mặc định
        data = {
            username: 'ututut1234',
            name: 'Nguyễn Văn A',
            email: localStorage.getItem('realEmail') || 'ut123456@gmail.com',
            phone: localStorage.getItem('realPhone') || '0987654321',
            gender: 'male',
            birthday: {
                day: '15',
                month: 'Tháng 8',
                year: '2000'
            }
        };
    }

    // Hiển thị dữ liệu
    displayData(data);
}

// ========== HÀM HIỂN THỊ DỮ LIỆU LÊN FORM ==========
function displayData(data) {
    // Tên đăng nhập
    const usernameElement = document.querySelector('.form-value');
    if (usernameElement && data.username) {
        usernameElement.textContent = data.username;
    }

    // Tên
    document.getElementById('name').value = data.name || '';

    // Email (hiển thị dạng mask)
    const emailDisplay = document.querySelectorAll('.form-value')[1];
    if (emailDisplay && data.email) {
        const maskedEmail = maskEmail(data.email);
        emailDisplay.textContent = maskedEmail;
    }

    // Số điện thoại (hiển thị dạng mask)
    const phoneDisplay = document.querySelectorAll('.form-value')[2];
    if (phoneDisplay && data.phone) {
        const maskedPhone = maskPhone(data.phone);
        phoneDisplay.textContent = maskedPhone;
    }

    // Giới tính
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.checked = (radio.value === data.gender);
    });

    // Ngày sinh
    if (data.birthday) {
        document.getElementById('day').value = data.birthday.day || '';
        document.getElementById('month').value = data.birthday.month || '';
        document.getElementById('year').value = data.birthday.year || '';
    }
}

// ========== HÀM MASK EMAIL ==========
function maskEmail(email) {
    if (!email) return '********@gmail.com';

    const [localPart, domain] = email.split('@');
    if (!localPart || !domain) return '********@gmail.com';

    // Giữ 2 ký tự đầu và mask phần còn lại
    const visiblePart = localPart.substring(0, 2);
    const maskedPart = '*'.repeat(Math.max(0, localPart.length - 2));

    return `${visiblePart}${maskedPart}@${domain}`;
}

// ========== HÀM MASK PHONE ==========
function maskPhone(phone) {
    if (!phone) return '**********';

    // Giữ 2 số cuối và mask phần còn lại
    const lastTwo = phone.slice(-2);
    const maskedPart = '*'.repeat(Math.max(0, phone.length - 2));

    return `${maskedPart}${lastTwo}`;
}

// ========== HÀM CẬP NHẬT THÔNG TIN TRÊN HEADER ==========
function updateHeaderInfo(name) {
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        userNameElement.textContent = name;
    }

    // Cập nhật avatar text
    const userAvatar = document.getElementById('user-avatar');
    if (userAvatar && name) {
        userAvatar.textContent = name.charAt(0).toUpperCase();
    }
}

// ========== HÀM XỬ LÝ TẢI ẢNH ĐẠI DIỆN ==========
function initAvatarUpload() {
    const uploadButton = document.querySelector('.avatar-upload-button');
    const avatarContainer = document.querySelector('.avatar-container');

    if (!uploadButton || !avatarContainer) {
        console.error('Không tìm thấy nút upload ảnh');
        return;
    }

    // Tải ảnh đã lưu nếu có
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
        displayAvatar(savedAvatar);
    }

    uploadButton.addEventListener('click', function() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/jpeg, image/png, image/jpg';

        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                handleImageUpload(file);
            }
        });

        fileInput.click();
    });

    function handleImageUpload(file) {
        // Kiểm tra kích thước file
        if (file.size > 1024 * 1024) {
            showMessage('File quá lớn! Dung lượng tối đa là 1MB.', 'error');
            return;
        }

        // Kiểm tra định dạng file
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!validTypes.includes(file.type)) {
            showMessage('Chỉ chấp nhận file JPEG hoặc PNG!', 'error');
            return;
        }

        // Hiển thị loading
        uploadButton.textContent = 'Đang tải...';
        uploadButton.disabled = true;

        // Đọc file
        const reader = new FileReader();

        reader.onload = function(event) {
            // Lưu ảnh
            localStorage.setItem('userAvatar', event.target.result);

            // Hiển thị ảnh
            displayAvatar(event.target.result);

            // Cập nhật avatar trên header
            updateHeaderAvatar(event.target.result);

            // Khôi phục nút
            uploadButton.textContent = 'Chọn Ảnh';
            uploadButton.disabled = false;

            // Hiển thị thông báo
            showMessage('Ảnh đại diện đã được cập nhật!', 'success');
        };

        reader.onerror = function() {
            showMessage('Có lỗi xảy ra khi đọc file!', 'error');
            uploadButton.textContent = 'Chọn Ảnh';
            uploadButton.disabled = false;
        };

        reader.readAsDataURL(file);
    }

    function displayAvatar(imageData) {
        // Xóa icon cũ
        const avatarIcon = avatarContainer.querySelector('.avatar-icon');
        if (avatarIcon) {
            avatarIcon.remove();
        }

        // Tạo hoặc cập nhật ảnh
        let img = avatarContainer.querySelector('.avatar-image');
        if (!img) {
            img = document.createElement('img');
            img.className = 'avatar-image';
            avatarContainer.appendChild(img);
        }
        img.src = imageData;
        img.alt = 'Ảnh đại diện';
    }

    function updateHeaderAvatar(imageData) {
        const headerAvatar = document.querySelector('.user-avatar');
        if (headerAvatar) {
            headerAvatar.textContent = '';
            headerAvatar.style.backgroundImage = `url(${imageData})`;
            headerAvatar.style.backgroundSize = 'cover';
            headerAvatar.style.backgroundPosition = 'center';
        }

        const sidebarAvatar = document.querySelector('.sidebar-user-avatar');
        if (sidebarAvatar) {
            const icon = sidebarAvatar.querySelector('.material-icons');
            if (icon) icon.remove();

            const img = document.createElement('img');
            img.src = imageData;
            img.alt = 'Ảnh đại diện';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            sidebarAvatar.appendChild(img);
        }
    }
}

// ========== HÀM HIỂN THỊ DIALOG THAY ĐỔI EMAIL ==========
function showChangeEmailDialog() {
    // Lấy email hiện tại
    const currentEmail = localStorage.getItem('realEmail') || 'ut123456@gmail.com';

    const dialogHTML = `
        <div class="change-dialog-overlay">
            <div class="change-dialog">
                <div class="dialog-header">
                    <h3>Thay đổi Email</h3>
                    <button class="dialog-close">&times;</button>
                </div>
                <div class="dialog-body">
                    <div class="form-group">
                        <label>Email hiện tại</label>
                        <input type="text" class="dialog-input" value="${currentEmail}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Email mới</label>
                        <input type="email" class="dialog-input" id="new-email" placeholder="Nhập email mới">
                    </div>
                    <div class="form-group">
                        <label>Xác nhận email mới</label>
                        <input type="email" class="dialog-input" id="confirm-email" placeholder="Nhập lại email mới">
                    </div>
                </div>
                <div class="dialog-footer">
                    <button class="dialog-btn cancel">Hủy</button>
                    <button class="dialog-btn confirm">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    `;

    showDialog(dialogHTML, 'email');
}

// ========== HÀM HIỂN THỊ DIALOG THAY ĐỔI SỐ ĐIỆN THOẠI ==========
function showChangePhoneDialog() {
    // Lấy số điện thoại hiện tại
    const currentPhone = localStorage.getItem('realPhone') || '0987654321';

    const dialogHTML = `
        <div class="change-dialog-overlay">
            <div class="change-dialog">
                <div class="dialog-header">
                    <h3>Thay đổi Số điện thoại</h3>
                    <button class="dialog-close">&times;</button>
                </div>
                <div class="dialog-body">
                    <div class="form-group">
                        <label>Số điện thoại hiện tại</label>
                        <input type="text" class="dialog-input" value="${currentPhone}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Số điện thoại mới</label>
                        <input type="tel" class="dialog-input" id="new-phone" placeholder="Nhập số điện thoại mới">
                    </div>
                    <div class="form-group">
                        <label>Mã xác thực OTP</label>
                        <div class="otp-container">
                            <input type="text" class="dialog-input" id="otp-code" placeholder="Nhập mã OTP" maxlength="6">
                            <button class="otp-btn" id="send-otp">Gửi mã</button>
                        </div>
                    </div>
                </div>
                <div class="dialog-footer">
                    <button class="dialog-btn cancel">Hủy</button>
                    <button class="dialog-btn confirm">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    `;

    showDialog(dialogHTML, 'phone');
}

// ========== HÀM HIỂN THỊ DIALOG CHUNG ==========
function showDialog(dialogHTML, type) {
    // Thêm dialog vào DOM
    const dialogContainer = document.createElement('div');
    dialogContainer.innerHTML = dialogHTML;
    document.body.appendChild(dialogContainer.firstElementChild);

    // Thêm CSS cho dialog
    addDialogStyles();

    // Xử lý sự kiện
    const overlay = document.querySelector('.change-dialog-overlay');
    const closeBtn = overlay.querySelector('.dialog-close');
    const cancelBtn = overlay.querySelector('.cancel');
    const confirmBtn = overlay.querySelector('.confirm');

    function closeDialog() {
        overlay.remove();
    }

    closeBtn.addEventListener('click', closeDialog);
    cancelBtn.addEventListener('click', closeDialog);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeDialog();
        }
    });

    confirmBtn.addEventListener('click', function() {
        if (type === 'email') {
            handleEmailChange(overlay);
        } else if (type === 'phone') {
            handlePhoneChange(overlay);
        }
    });

    // Xử lý gửi OTP cho số điện thoại
    if (type === 'phone') {
        const sendOtpBtn = overlay.querySelector('#send-otp');
        const phoneInput = overlay.querySelector('#new-phone');

        sendOtpBtn.addEventListener('click', function() {
            const phoneNumber = phoneInput.value.trim();

            if (!phoneNumber) {
                showMessage('Vui lòng nhập số điện thoại mới', 'error');
                return;
            }

            if (!isValidPhone(phoneNumber)) {
                showMessage('Số điện thoại không hợp lệ (10-11 số)', 'error');
                return;
            }

            // Mô phỏng gửi OTP
            sendOtpBtn.textContent = 'Đang gửi...';
            sendOtpBtn.disabled = true;

            setTimeout(() => {
                // Tạo mã OTP ngẫu nhiên 6 số
                const otp = Math.floor(100000 + Math.random() * 900000);
                localStorage.setItem('lastOtp', otp.toString());

                showMessage(`Mã OTP: ${otp} (SMS - Của bạn)`, 'info');
                sendOtpBtn.textContent = 'Gửi lại';
                sendOtpBtn.disabled = false;

                // Tự động điền mã OTP (cho mục đích demo)
                const otpInput = overlay.querySelector('#otp-code');
                otpInput.value = otp;

            }, 1500);
        });
    }

    // Focus vào input đầu tiên
    setTimeout(() => {
        const firstInput = overlay.querySelector('.dialog-input:not([readonly])');
        if (firstInput) firstInput.focus();
    }, 100);
}

// ========== HÀM XỬ LÝ THAY ĐỔI EMAIL ==========
function handleEmailChange(overlay) {
    const newEmail = overlay.querySelector('#new-email').value.trim();
    const confirmEmail = overlay.querySelector('#confirm-email').value.trim();

    // Kiểm tra dữ liệu
    if (!newEmail || !confirmEmail) {
        showMessage('Vui lòng điền đầy đủ thông tin', 'error');
        return;
    }

    if (newEmail !== confirmEmail) {
        showMessage('Email xác nhận không khớp', 'error');
        return;
    }

    if (!isValidEmail(newEmail)) {
        showMessage('Email không hợp lệ', 'error');
        return;
    }

    // Lưu email mới
    localStorage.setItem('realEmail', newEmail);

    // Cập nhật dữ liệu profile
    const profileData = JSON.parse(localStorage.getItem('profileData') || '{}');
    profileData.email = newEmail;
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Cập nhật hiển thị
    const emailDisplay = document.querySelectorAll('.form-value')[1];
    if (emailDisplay) {
        const maskedEmail = maskEmail(newEmail);
        emailDisplay.textContent = maskedEmail;
    }

    // Hiển thị thông báo
    showMessage('Email đã được cập nhật thành công!', 'success');

    // Đóng dialog
    overlay.remove();
}

// ========== HÀM XỬ LÝ THAY ĐỔI SỐ ĐIỆN THOẠI ==========
function handlePhoneChange(overlay) {
    const newPhone = overlay.querySelector('#new-phone').value.trim();
    const otpCode = overlay.querySelector('#otp-code').value.trim();

    // Kiểm tra dữ liệu
    if (!newPhone) {
        showMessage('Vui lòng nhập số điện thoại mới', 'error');
        return;
    }

    if (!isValidPhone(newPhone)) {
        showMessage('Số điện thoại không hợp lệ (10-11 số)', 'error');
        return;
    }

    if (!otpCode || otpCode.length !== 6) {
        showMessage('Vui lòng nhập mã OTP hợp lệ (6 chữ số)', 'error');
        return;
    }

    // Kiểm tra OTP (trong demo, kiểm tra với mã lưu trong localStorage)
    const lastOtp = localStorage.getItem('lastOtp');
    if (otpCode !== lastOtp) {
        showMessage('Mã OTP không chính xác', 'error');
        return;
    }

    // Lưu số điện thoại mới
    localStorage.setItem('realPhone', newPhone);

    // Cập nhật dữ liệu profile
    const profileData = JSON.parse(localStorage.getItem('profileData') || '{}');
    profileData.phone = newPhone;
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Cập nhật hiển thị
    const phoneDisplay = document.querySelectorAll('.form-value')[2];
    if (phoneDisplay) {
        const maskedPhone = maskPhone(newPhone);
        phoneDisplay.textContent = maskedPhone;
    }

    // Hiển thị thông báo
    showMessage('Số điện thoại đã được cập nhật thành công!', 'success');

    // Xóa OTP đã sử dụng
    localStorage.removeItem('lastOtp');

    // Đóng dialog
    overlay.remove();
}

// ========== HÀM KIỂM TRA EMAIL ==========
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ========== HÀM KIỂM TRA SỐ ĐIỆN THOẠI ==========
function isValidPhone(phone) {
    const phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(phone);
}

// ========== HÀM HIỂN THỊ THÔNG BÁO ==========
function showMessage(text, type) {
    // Xóa thông báo cũ nếu có
    const oldMessage = document.querySelector('.alert-message');
    if (oldMessage) {
        oldMessage.remove();
    }

    // Tạo thông báo mới
    const message = document.createElement('div');
    message.className = `alert-message ${type}`;
    message.textContent = text;

    // Thêm vào DOM
    document.body.appendChild(message);

    // Tự động xóa sau 3 giây
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 3000);
}

// ========== THÊM CSS CHO DIALOG ==========
function addDialogStyles() {
    if (!document.querySelector('#dialog-styles')) {
        const styles = document.createElement('style');
        styles.id = 'dialog-styles';
        styles.textContent = `
            .change-dialog-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
            }
            .change-dialog {
                background: white;
                border-radius: 8px;
                width: 90%;
                max-width: 450px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            .dialog-header {
                padding: 16px 20px;
                border-bottom: 1px solid #e5e7eb;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .dialog-header h3 {
                margin: 0;
                font-size: 16px;
                font-weight: 600;
                color: #113222;
            }
            .dialog-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #6b7280;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
            }
            .dialog-close:hover {
                background-color: #f3f4f6;
            }
            .dialog-body {
                padding: 20px;
            }
            .form-group {
                margin-bottom: 16px;
            }
            .form-group label {
                display: block;
                margin-bottom: 6px;
                font-weight: 500;
                color: #374151;
                font-size: 14px;
            }
            .dialog-input {
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                font-size: 14px;
                box-sizing: border-box;
            }
            .dialog-input:focus {
                outline: none;
                border-color: #113222;
                box-shadow: 0 0 0 3px rgba(17, 50, 34, 0.1);
            }
            .dialog-input[readonly] {
                background-color: #f9fafb;
                color: #6b7280;
                cursor: not-allowed;
            }
            .otp-container {
                display: flex;
                gap: 10px;
            }
            .otp-container .dialog-input {
                flex: 1;
            }
            .otp-btn {
                padding: 10px 16px;
                background-color: #113222;
                color: white;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                cursor: pointer;
                white-space: nowrap;
            }
            .otp-btn:hover {
                background-color: #2e7d32;
            }
            .otp-btn:disabled {
                background-color: #9ca3af;
                cursor: not-allowed;
            }
            .dialog-footer {
                padding: 16px 20px;
                border-top: 1px solid #e5e7eb;
                display: flex;
                justify-content: flex-end;
                gap: 10px;
            }
            .dialog-btn {
                padding: 10px 20px;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                border: none;
                transition: all 0.2s;
            }
            .dialog-btn.cancel {
                background-color: #f3f4f6;
                color: #374151;
            }
            .dialog-btn.cancel:hover {
                background-color: #e5e7eb;
            }
            .dialog-btn.confirm {
                background-color: #113222;
                color: white;
            }
            .dialog-btn.confirm:hover {
                background-color: #2e7d32;
            }
            .alert-message {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 24px;
                border-radius: 6px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                animation: slideIn 0.3s ease;
            }
            .alert-message.success {
                background-color: #10b981;
            }
            .alert-message.error {
                background-color: #ef4444;
            }
            .alert-message.warning {
                background-color: #f59e0b;
            }
            .alert-message.info {
                background-color: #3b82f6;
            }
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

console.log('Account.js đã được tải và khởi tạo');