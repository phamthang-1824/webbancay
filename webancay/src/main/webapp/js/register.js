// register.js - Xử lý form đăng ký Cây Xanh Việt
document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo form đăng ký...');

    // Khởi tạo tất cả các chức năng
    initDatePicker();
    initFormValidation();
    initPasswordStrength();
    initEmailChecking();
    initFormSubmission();
    initGenderSelection();
});

// UTILITY FUNCTIONS
function createElementWithStyles(tag, styles = {}, attributes = {}) {
    const element = document.createElement(tag);
    Object.assign(element.style, styles);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    return element;
}

function showNotification(message, type = 'error', parent = null) {
    const existingNotification = document.querySelector('.general-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const styles = {
        color: type === 'error' ? '#dc2626' : '#059669',
        fontSize: '0.875rem',
        textAlign: 'center',
        marginTop: '1rem',
        padding: '0.75rem',
        backgroundColor: type === 'error' ? '#fef2f2' : '#f0fdf4',
        borderRadius: '0.375rem',
        border: `1px solid ${type === 'error' ? '#fecaca' : '#bbf7d0'}`,
        animation: 'shake 0.5s ease-in-out'
    };

    const notification = createElementWithStyles('div', styles, {
        'class': 'general-notification'
    });
    notification.textContent = message;

    const targetParent = parent || document.getElementById('registerForm');
    if (targetParent) {
        targetParent.appendChild(notification);
    }

    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);

    return notification;
}

function createLoadingOverlay() {
    const loadingOverlay = createElementWithStyles('div', {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '9999'
    }, {
        id: 'loadingOverlay'
    });

    const spinner = createElementWithStyles('div', {
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid #113222',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
    });

    loadingOverlay.appendChild(spinner);
    document.body.appendChild(loadingOverlay);

    // Thêm animation CSS nếu chưa có
    if (!document.querySelector('#spin-animation')) {
        const style = createElementWithStyles('style', {}, { id: 'spin-animation' });
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    return loadingOverlay;
}

function removeLoadingOverlay() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.remove();
    }
}

function updateButtonState(button, disabled, text = null) {
    button.disabled = disabled;
    button.style.opacity = disabled ? '0.7' : '1';
    if (text) {
        button.textContent = text;
    }
}

// ==================== DATE PICKER ====================
function initDatePicker() {
    const birthdateInput = document.getElementById('birthdate');

    if (!birthdateInput) {
        console.error('Không tìm thấy trường ngày sinh');
        return;
    }

    birthdateInput.addEventListener('focus', function() {
        this.type = 'date';
        this.max = new Date().toISOString().split('T')[0];
    });

    birthdateInput.addEventListener('blur', function() {
        if (!this.value) {
            setTimeout(() => {
                this.type = 'text';
            }, 100);
        }
    });

    birthdateInput.addEventListener('input', function() {
        if (this.type === 'text') {
            formatDateInput(this);
        }
    });

    birthdateInput.addEventListener('change', function() {
        if (!this.value && this.type === 'date') {
            this.type = 'text';
        }
    });
}

function formatDateInput(input) {
    let value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
        if (value.length <= 2) {
            input.value = value;
        } else if (value.length <= 4) {
            input.value = value.substring(0, 2) + '/' + value.substring(2);
        } else {
            input.value = value.substring(0, 2) + '/' + value.substring(2, 4) + '/' + value.substring(4, 8);
        }
    }
}

// FORM VALIDATION
function initFormValidation() {
    const form = document.getElementById('registerForm');

    if (!form) {
        console.error('Không tìm thấy form đăng ký');
        return;
    }

    const inputs = form.querySelectorAll('input[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            clearFieldError(this);
            if (this.id === 'email') {
                clearEmailStatus();
                this.removeAttribute('data-email-exists');
            }
        });
    });
}

function validateField(field) {
    clearFieldError(field);

    let isValid = true;
    let errorMessage = '';

    switch(field.type) {
        case 'text':
            if (field.value.trim() === '') {
                isValid = false;
                errorMessage = 'Trường này là bắt buộc';
            } else if ((field.id === 'last-name' || field.id === 'first-name') && !isValidName(field.value)) {
                isValid = false;
                errorMessage = 'Tên chỉ được chứa chữ cái và khoảng trắng';
            }
            break;

        case 'email':
            if (field.value.trim() === '') {
                isValid = false;
                errorMessage = 'Email là bắt buộc';
            } else if (!isValidEmail(field.value)) {
                isValid = false;
                errorMessage = 'Email không hợp lệ';
            } else if (field.getAttribute('data-email-exists') === 'true') {
                isValid = false;
                errorMessage = 'Email đã được sử dụng';
            }
            break;

        case 'password':
            if (field.value.trim() === '') {
                isValid = false;
                errorMessage = 'Mật khẩu là bắt buộc';
            } else if (field.value.length < 8) {
                isValid = false;
                errorMessage = 'Mật khẩu phải có ít nhất 8 ký tự';
            }
            break;
    }

    if (field.id === 'birthdate' && field.value.trim() !== '' && !isValidDate(field.value)) {
        isValid = false;
        errorMessage = 'Ngày sinh không hợp lệ (định dạng: dd/mm/yyyy)';
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function isValidName(name) {
    const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
    return nameRegex.test(name);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidDate(dateString) {
    const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    const match = dateString.match(dateRegex);

    if (!match) return false;

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) return false;

    if (month < 1 || month > 12) return false;

    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) return false;

    const inputDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return inputDate <= today;
}

function showFieldError(field, message) {
    field.classList.add('error');

    const errorElement = createElementWithStyles('div', {
        color: '#dc2626',
        fontSize: '0.75rem',
        marginTop: '0.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.375rem'
    }, {
        class: 'field-error'
    });
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

// PASSWORD STRENGTH
function initPasswordStrength() {
    const passwordInput = document.getElementById('password');

    if (!passwordInput) return;

    const strengthContainer = createElementWithStyles('div', {
        marginTop: '0.5rem',
        fontSize: '0.75rem'
    }, {
        class: 'password-strength'
    });

    passwordInput.parentNode.appendChild(strengthContainer);

    passwordInput.addEventListener('input', function() {
        const strength = checkPasswordStrength(this.value);
        updatePasswordStrengthDisplay(strengthContainer, strength);
    });

    passwordInput.addEventListener('blur', function() {
        if (!this.value) {
            strengthContainer.innerHTML = '';
        }
    });
}

function checkPasswordStrength(password) {
    if (!password) {
        return { level: 0, text: '', color: '', width: '0%' };
    }

    let score = 0;
    const requirements = [];

    if (password.length >= 8) {
        score += 1;
        requirements.push('✓ Đủ 8 ký tự');
    } else {
        requirements.push('✗ Ít nhất 8 ký tự');
    }

    if (password.length >= 12) score += 1;

    if (/[A-Z]/.test(password)) {
        score += 1;
        requirements.push('✓ Có chữ hoa');
    } else {
        requirements.push('✗ Cần chữ hoa');
    }

    if (/[a-z]/.test(password)) {
        score += 1;
        requirements.push('✓ Có chữ thường');
    } else {
        requirements.push('✗ Cần chữ thường');
    }

    if (/[0-9]/.test(password)) {
        score += 1;
        requirements.push('✓ Có số');
    } else {
        requirements.push('✗ Cần số');
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score += 1;
        requirements.push('✓ Có ký tự đặc biệt');
    } else {
        requirements.push('✗ Cần ký tự đặc biệt');
    }

    let result;
    if (score <= 2) {
        result = { level: 1, text: 'Mật khẩu yếu', color: '#dc2626', width: '25%', requirements };
    } else if (score <= 3) {
        result = { level: 2, text: 'Mật khẩu trung bình', color: '#f59e0b', width: '50%', requirements };
    } else if (score <= 4) {
        result = { level: 3, text: 'Mật khẩu mạnh', color: '#10b981', width: '75%', requirements };
    } else {
        result = { level: 4, text: 'Mật khẩu rất mạnh', color: '#059669', width: '100%', requirements };
    }

    return result;
}

function updatePasswordStrengthDisplay(container, strength) {
    container.innerHTML = '';

    if (strength.level === 0) return;

    const barContainer = createElementWithStyles('div', {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.5rem'
    });

    const barWrapper = createElementWithStyles('div', {
        flex: '1',
        height: '6px',
        backgroundColor: '#e5e7eb',
        borderRadius: '3px',
        overflow: 'hidden'
    });

    const bar = createElementWithStyles('div', {
        height: '100%',
        width: strength.width,
        backgroundColor: strength.color,
        transition: 'width 0.3s ease, background-color 0.3s ease',
        borderRadius: '3px'
    });

    const strengthText = createElementWithStyles('div', {
        color: strength.color,
        fontWeight: '600',
        fontSize: '0.7rem'
    });
    strengthText.textContent = strength.text;

    barWrapper.appendChild(bar);
    barContainer.appendChild(barWrapper);
    barContainer.appendChild(strengthText);

    const requirementsList = createElementWithStyles('div', {
        fontSize: '0.7rem',
        color: '#6b7280'
    });

    strength.requirements.forEach(req => {
        const reqItem = createElementWithStyles('div', {
            marginBottom: '0.125rem'
        });
        reqItem.textContent = req;
        requirementsList.appendChild(reqItem);
    });

    container.appendChild(barContainer);
    container.appendChild(requirementsList);
}

//  EMAIL CHECKING
function initEmailChecking() {
    const emailInput = document.getElementById('email');

    if (!emailInput) return;

    let checkTimeout;

    emailInput.addEventListener('input', function() {
        clearTimeout(checkTimeout);
        clearEmailStatus();
        this.removeAttribute('data-email-exists');

        if (this.value.length >= 5 && isValidEmail(this.value)) {
            showEmailStatus('Đang kiểm tra email...', 'loading');
            checkTimeout = setTimeout(() => {
                void checkEmailExists(this.value);
            }, 1000);
        }
    });

    emailInput.addEventListener('blur', function() {
        if (this.value && isValidEmail(this.value)) {
            void checkEmailExists(this.value);
        }
    });
}

async function checkEmailExists(email) {
    const emailInput = document.getElementById('email');

    try {
        const exists = await checkEmailInDatabase(email);

        if (exists) {
            showEmailStatus('Email đã được sử dụng. Vui lòng chọn email khác.', 'error');
            emailInput.setAttribute('data-email-exists', 'true');
        } else {
            showEmailStatus('Email có thể sử dụng', 'success');
            emailInput.setAttribute('data-email-exists', 'false');
        }
    } catch (error) {
        showEmailStatus('Lỗi kiểm tra email. Vui lòng thử lại.', 'error');
        console.error('Email check error:', error);
    }
}

function checkEmailInDatabase(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('cayxanhviet_users') || '[]');
            const emailExists = users.some(user =>
                user.email && user.email.toLowerCase() === email.toLowerCase()
            );

            const defaultExistingEmails = [
                'user@example.com',
                'test@gmail.com',
                'admin@cayxanhviet.com',
                'khachhang@email.com'
            ];

            const inDefaultList = defaultExistingEmails.includes(email.toLowerCase());
            resolve(emailExists || inDefaultList);
        }, 800);
    });
}

function showEmailStatus(message, type) {
    clearEmailStatus();

    const emailInput = document.getElementById('email');
    const statusElement = createElementWithStyles('div', {
        fontSize: '0.75rem',
        marginTop: '0.25rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.375rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    }, {
        class: `email-status email-status-${type}`
    });

    const iconSpan = createElementWithStyles('span', {
        fontSize: '1rem !important',
        width: '16px',
        height: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }, {
        class: 'material-symbols-outlined email-status-icon'
    });

    switch(type) {
        case 'loading':
            iconSpan.textContent = 'hourglass_empty';
            break;
        case 'error':
            iconSpan.textContent = 'error';
            break;
        case 'success':
            iconSpan.textContent = 'check_circle';
            break;
    }

    const textSpan = document.createElement('span');
    textSpan.textContent = message;

    statusElement.appendChild(iconSpan);
    statusElement.appendChild(textSpan);
    emailInput.parentNode.appendChild(statusElement);

    emailInput.classList.remove('email-error', 'email-success', 'email-loading');
    emailInput.classList.add(`email-${type}`);
}

function clearEmailStatus() {
    const emailInput = document.getElementById('email');
    const existingStatus = emailInput.parentNode.querySelector('.email-status');

    if (existingStatus) {
        existingStatus.remove();
    }

    emailInput.classList.remove('email-error', 'email-success', 'email-loading');
}

// GENDER SELECTION
function initGenderSelection() {
    const genderInputs = document.querySelectorAll('input[name="gender"]');

    genderInputs.forEach(input => {
        input.addEventListener('change', function() {
            clearGenderError();
        });
    });
}

function clearGenderError() {
    const existingError = document.querySelector('.gender-error');
    if (existingError) {
        existingError.remove();
    }
}

function validateGender() {
    const genderSelected = document.querySelector('input[name="gender"]:checked');

    if (!genderSelected) {
        const genderGroup = document.querySelector('.form-group:nth-child(2)');
        const errorElement = createElementWithStyles('div', {
            marginTop: '0.5rem'
        }, {
            class: 'field-error gender-error'
        });
        errorElement.textContent = 'Vui lòng chọn giới tính';

        genderGroup.appendChild(errorElement);
        return false;
    }

    return true;
}

// FORM SUBMISSION
function initFormSubmission() {
    const form = document.getElementById('registerForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted, bắt đầu validate...');

        const isValid = validateForm();

        if (isValid) {
            void submitForm();
        } else {
            showGeneralError('Vui lòng kiểm tra lại thông tin đã nhập');
        }
    });
}

function validateForm() {
    const form = document.getElementById('registerForm');
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    const emailInput = document.getElementById('email');
    if (emailInput.getAttribute('data-email-exists') === 'true') {
        isValid = false;
        if (!emailInput.parentNode.querySelector('.field-error')) {
            showFieldError(emailInput, 'Email đã được sử dụng');
        }
    }

    if (!validateGender()) {
        isValid = false;
    }

    return isValid;
}

async function submitForm() {
    const form = document.getElementById('registerForm');
    const submitButton = form.querySelector('.submit-button');

    updateButtonState(submitButton, true, 'ĐANG XỬ LÝ...');

    try {
        const email = document.getElementById('email').value;
        const emailExists = await checkEmailInDatabase(email);

        if (emailExists) {
            showFieldError(document.getElementById('email'), 'Email đã được sử dụng. Vui lòng chọn email khác.');
            updateButtonState(submitButton, false, 'ĐĂNG KÝ');
            return;
        }

        const success = await mockSubmitFormAPI();

        if (success) {
            showSuccessMessage();

            setTimeout(() => {
                form.reset();
                clearEmailStatus();
                document.getElementById('email').removeAttribute('data-email-exists');

                const strengthContainer = document.querySelector('.password-strength');
                if (strengthContainer) {
                    strengthContainer.innerHTML = '';
                }
            }, 2000);
        } else {
            showGeneralError('Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại sau.');
        }

    } catch (error) {
        console.error('Form submission error:', error);
        showGeneralError('Có lỗi kết nối. Vui lòng thử lại sau.');
    } finally {
        setTimeout(() => {
            updateButtonState(submitButton, false, 'ĐĂNG KÝ');
        }, 2000);
    }
}

function mockSubmitFormAPI() {
    return new Promise((resolve, reject) => {
        createLoadingOverlay();

        setTimeout(() => {
            removeLoadingOverlay();

            const success = Math.random() < 0.9;

            if (success) {
                const userData = {
                    firstName: document.getElementById('first-name').value,
                    lastName: document.getElementById('last-name').value,
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value,
                    gender: document.querySelector('input[name="gender"]:checked')?.value,
                    birthdate: document.getElementById('birthdate').value,
                    registeredAt: new Date().toISOString()
                };

                const users = JSON.parse(localStorage.getItem('cayxanhviet_users') || '[]');
                users.push(userData);
                localStorage.setItem('cayxanhviet_users', JSON.stringify(users));

                console.log('Đã lưu user:', userData);
                console.log('Tất cả users:', users);

                resolve(true);
            } else {
                reject(new Error('Server error'));
            }
        }, 2000);
    });
}

function showGeneralError(message) {
    showNotification(message, 'error');
}

function showSuccessMessage() {
    const overlay = createElementWithStyles('div', {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '10000'
    });

    const modal = createElementWithStyles('div', {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.75rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'center',
        animation: 'modalAppear 0.3s ease-out'
    });

    const icon = createElementWithStyles('span', {
        fontSize: '64px',
        color: '#059669',
        marginBottom: '1rem'
    }, {
        class: 'material-symbols-outlined'
    });
    icon.textContent = 'check_circle';

    const title = createElementWithStyles('h2', {
        marginTop: '0',
        marginBottom: '0.5rem',
        color: '#059669',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    });
    title.textContent = 'Đăng ký thành công!';

    const content = createElementWithStyles('p', {
        marginBottom: '1.5rem',
        color: '#6b7280',
        lineHeight: '1.5'
    });
    content.textContent = 'Tài khoản của bạn đã được tạo thành công. Vui lòng kiểm tra email để xác nhận tài khoản.';

    const closeButton = createElementWithStyles('button', {
        backgroundColor: '#113222',
        color: 'white',
        border: 'none',
        padding: '0.75rem 2rem',
        borderRadius: '0.375rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: '1rem'
    });
    closeButton.textContent = 'Đóng';

    closeButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#0d2517';
        this.style.transform = 'translateY(-1px)';
    });

    closeButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#113222';
        this.style.transform = 'translateY(0)';
    });

    closeButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
        setTimeout(() => {
            window.location.href = 'login.jsp';
        }, 1000);
    });

    modal.appendChild(icon);
    modal.appendChild(title);
    modal.appendChild(content);
    modal.appendChild(closeButton);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    if (!document.querySelector('#modal-animation')) {
        const style = createElementWithStyles('style', {}, { id: 'modal-animation' });
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
        `;
        document.head.appendChild(style);
    }
}

// ==================== CSS STYLES ====================
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .password-strength {
        transition: all 0.3s ease;
    }
    
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
    
    .email-status {
        font-size: 0.75rem;
        margin-top: 0.25rem;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .email-status-icon {
        font-size: 1rem !important;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .email-status-loading {
        color: #f59e0b;
        background-color: #fffbeb;
        border: 1px solid #fef3c7;
    }
    
    .email-status-loading .email-status-icon {
        color: #f59e0b;
        animation: spin 1s linear infinite;
    }
    
    .email-status-error {
        color: #dc2626;
        background-color: #fef2f2;
        border: 1px solid #fecaca;
    }
    
    .email-status-error .email-status-icon {
        color: #dc2626;
    }
    
    .email-status-success {
        color: #059669;
        background-color: #f0fdf4;
        border: 1px solid #bbf7d0;
    }
    
    .email-status-success .email-status-icon {
        color: #059669;
    }
    
    .email-error {
        border-color: #dc2626 !important;
        box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.1) !important;
    }
    
    .email-success {
        border-color: #059669 !important;
        box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.1) !important;
    }
    
    .email-loading {
        border-color: #f59e0b !important;
        box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.1) !important;
    }
    
    .general-notification {
        animation: shake 0.5s ease-in-out;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @media (max-width: 640px) {
        .form-row {
            grid-template-columns: 1fr;
            gap: 0;
        }
        
        .email-status {
            padding: 0.375rem 0.5rem;
            font-size: 0.7rem;
        }
        
        .email-status-icon {
            font-size: 0.875rem !important;
        }
    }
`;

document.head.appendChild(additionalStyles);

console.log('Form đăng ký đã được khởi tạo thành công!');