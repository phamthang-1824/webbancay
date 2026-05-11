// checkout.js - Xử lý thanh toán cho Cây Xanh Việt - TÍCH HỢP VỚI GIỎ HÀNG VÀ LƯU ĐƠN HÀNG

// Dữ liệu quốc gia
const countries = [
    { code: "+84", name: "Việt Nam", flag: "https://flagcdn.com/w40/vn.png" },
    { code: "+1", name: "USA", flag: "https://flagcdn.com/w40/us.png" },
    { code: "+44", name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "+86", name: "China", flag: "https://flagcdn.com/w40/cn.png" },
    { code: "+81", name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
    { code: "+82", name: "South Korea", flag: "https://flagcdn.com/w40/kr.png" },
    { code: "+33", name: "France", flag: "https://flagcdn.com/w40/fr.png" },
    { code: "+49", name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
    { code: "+7", name: "Russia", flag: "https://flagcdn.com/w40/ru.png" },
    { code: "+91", name: "India", flag: "https://flagcdn.com/w40/in.png" },
    { code: "+61", name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
    { code: "+55", name: "Brazil", flag: "https://flagcdn.com/w40/br.png" }
];

// Dữ liệu tỉnh/thành phố, quận/huyện, xã/phường (63 tỉnh thành)
const vietnamProvincesData = {
    "hanoi": { name: "Hà Nội", districts: { "badinh": { name: "Ba Đình", wards: ["Điện Biên", "Đội Cấn", "Giảng Võ", "Kim Mã", "Liễu Giai", "Ngọc Hà", "Ngọc Khánh", "Nguyễn Trung Trực", "Phúc Xá", "Quán Thánh", "Thành Công", "Trúc Bạch", "Vĩnh Phúc"] } } },
    "hochiminh": { name: "Hồ Chí Minh", districts: { "quan1": { name: "Quận 1", wards: ["Bến Nghé", "Bến Thành", "Cầu Ông Lãnh", "Cầu Kho", "Cô Giang", "Đa Kao", "Nguyễn Cư Trinh", "Nguyễn Thái Bình", "Phạm Ngũ Lão", "Tân Định"] } } },
    "binhthuan": { name: "Bình Thuận", districts: { "phanthiet": { name: "Phan Thiết", wards: ["Bình Hưng", "Đức Long", "Đức Nghĩa", "Đức Thắng", "Hàm Tiến", "Hưng Long", "Lạc Đạo", "Mũi Né", "Phú Hài", "Phú Tài", "Phú Thủy", "Phú Trinh", "Thanh Hải", "Xuân An"] } } },
    "danang": { name: "Đà Nẵng", districts: { "haichau": { name: "Hải Châu", wards: ["Bình Hiên", "Bình Thuận", "Hải Châu I", "Hải Châu II", "Hòa Cường Bắc", "Hòa Cường Nam", "Hòa Thuận Đông", "Hòa Thuận Tây", "Nam Dương", "Phước Ninh", "Thạch Thang", "Thanh Bình", "Thuận Phước"] } } },
    "haiphong": { name: "Hải Phòng", districts: { "hongbang": { name: "Hồng Bàng", wards: ["Hoàng Văn Thụ", "Hùng Vương", "Minh Khai", "Phan Bội Châu", "Quán Toan", "Sở Dầu", "Thượng Lý", "Trại Chuối"] } } }
};

// Danh sách đầy đủ 63 tỉnh thành
const provinces = [
    { id: "hanoi", name: "Hà Nội" },
    { id: "hochiminh", name: "Hồ Chí Minh" },
    { id: "binhthuan", name: "Bình Thuận" },
    { id: "danang", name: "Đà Nẵng" },
    { id: "haiphong", name: "Hải Phòng" },
    { id: "angiang", name: "An Giang" },
    { id: "bariavungtau", name: "Bà Rịa - Vũng Tàu" },
    { id: "baclieu", name: "Bạc Liêu" },
    { id: "bacgiang", name: "Bắc Giang" },
    { id: "backan", name: "Bắc Kạn" },
    { id: "bacninh", name: "Bắc Ninh" },
    { id: "bentre", name: "Bến Tre" },
    { id: "binhdinh", name: "Bình Định" },
    { id: "binhduong", name: "Bình Dương" },
    { id: "binhphuoc", name: "Bình Phước" },
    { id: "cantho", name: "Cần Thơ" },
    { id: "camau", name: "Cà Mau" },
    { id: "caobang", name: "Cao Bằng" },
    { id: "daklak", name: "Đắk Lắk" },
    { id: "daknong", name: "Đắk Nông" },
    { id: "dienbien", name: "Điện Biên" },
    { id: "dongnai", name: "Đồng Nai" },
    { id: "dongthap", name: "Đồng Tháp" },
    { id: "gialai", name: "Gia Lai" },
    { id: "hagiang", name: "Hà Giang" },
    { id: "hanam", name: "Hà Nam" },
    { id: "hatinh", name: "Hà Tĩnh" },
    { id: "haiduong", name: "Hải Dương" },
    { id: "haugiang", name: "Hậu Giang" },
    { id: "hoabinh", name: "Hòa Bình" },
    { id: "hungyen", name: "Hưng Yên" },
    { id: "khanhhoa", name: "Khánh Hòa" },
    { id: "kiengiang", name: "Kiên Giang" },
    { id: "kontum", name: "Kon Tum" },
    { id: "laichau", name: "Lai Châu" },
    { id: "lamdong", name: "Lâm Đồng" },
    { id: "langson", name: "Lạng Sơn" },
    { id: "laocai", name: "Lào Cai" },
    { id: "longan", name: "Long An" },
    { id: "namdinh", name: "Nam Định" },
    { id: "nghean", name: "Nghệ An" },
    { id: "ninhbinh", name: "Ninh Bình" },
    { id: "ninhthuan", name: "Ninh Thuận" },
    { id: "phutho", name: "Phú Thọ" },
    { id: "phuyen", name: "Phú Yên" },
    { id: "quangbinh", name: "Quảng Bình" },
    { id: "quangnam", name: "Quảng Nam" },
    { id: "quangngai", name: "Quảng Ngãi" },
    { id: "quangninh", name: "Quảng Ninh" },
    { id: "quangtri", name: "Quảng Trị" },
    { id: "soctrang", name: "Sóc Trăng" },
    { id: "sonla", name: "Sơn La" },
    { id: "tayninh", name: "Tây Ninh" },
    { id: "thaibinh", name: "Thái Bình" },
    { id: "thainguyen", name: "Thái Nguyên" },
    { id: "thanhhoa", name: "Thanh Hóa" },
    { id: "thuathienhue", name: "Thừa Thiên Huế" },
    { id: "tiengiang", name: "Tiền Giang" },
    { id: "travinh", name: "Trà Vinh" },
    { id: "tuyenquang", name: "Tuyên Quang" },
    { id: "vinhlong", name: "Vĩnh Long" },
    { id: "vinhphuc", name: "Vĩnh Phúc" },
    { id: "yenbai", name: "Yên Bái" }
];

// Biến lưu trữ dữ liệu checkout
let checkoutData = null;
let orderItems = [];

// Khởi tạo trang thanh toán
$(document).ready(function() {
    console.log('Checkout page initialized - INTEGRATED WITH CART');

    // Tải dữ liệu từ giỏ hàng
    loadCheckoutData();

    // Khởi tạo dropdown quốc gia
    initCountryDropdown();

    // Khởi tạo dropdown tỉnh thành
    initProvinceDropdown();

    // Thiết lập sự kiện
    setupCheckoutEvents();

    // Tự động chọn Bình Thuận (theo ảnh mẫu)
    setTimeout(() => {
        $('#city').val('binhthuan').trigger('change');
        setTimeout(() => {
            $('#district').val('phanthiet').trigger('change');
        }, 100);
    }, 500);
});

// Tải dữ liệu checkout từ localStorage
function loadCheckoutData() {
    try {
        const savedCheckoutData = localStorage.getItem('checkoutData');

        if (savedCheckoutData) {
            checkoutData = JSON.parse(savedCheckoutData);
            orderItems = checkoutData.cartItems || [];

            console.log('Checkout data loaded:', checkoutData);

            // Hiển thị sản phẩm
            displayOrderItems();

            // Cập nhật tổng tiền
            updateOrderSummary();

            // Hiển thị mã đơn hàng
            displayOrderInfo();
        } else {
            console.log('No checkout data found');
            showNoCartDataMessage();
        }
    } catch (error) {
        console.error('Error loading checkout data:', error);
        showNoCartDataMessage();
    }
}

// Hiển thị sản phẩm trong đơn hàng
function displayOrderItems() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    // Xóa các sản phẩm cũ (giữ lại header)
    const header = productGrid.querySelector('.product-header');
    const oldItems = productGrid.querySelectorAll('.product-item');
    oldItems.forEach(item => item.remove());

    if (orderItems.length === 0) {
        showNoProductsMessage();
        return;
    }

    // Thêm sản phẩm mới
    orderItems.forEach((item, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <div class="product-info">
                <img class="product-image" src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80?text=Sản+phẩm'">
                <div>
                    <p class="product-name">${item.name}</p>
                    ${item.variant ? `<p class="product-category">${item.variant}</p>` : ''}
                </div>
            </div>
            <div class="product-price">${item.formattedPrice}</div>
            <div class="product-quantity">${item.quantity}</div>
            <div class="product-total">${item.formattedTotalPrice}</div>
        `;

        // Chèn sau header
        if (header) {
            header.insertAdjacentElement('afterend', productItem);
        } else {
            productGrid.appendChild(productItem);
        }
    });
}

// Cập nhật tổng tiền đơn hàng
function updateOrderSummary() {
    if (!checkoutData || !checkoutData.paymentInfo) return;

    const paymentInfo = checkoutData.paymentInfo;

    // Cập nhật trong phần tóm tắt
    const subtotalElement = document.querySelector('.payment-row:nth-child(1) span:last-child');
    const shippingElement = document.querySelector('.payment-row:nth-child(2) span:last-child');
    const totalElement = document.querySelector('.payment-total-amount');

    if (subtotalElement) subtotalElement.textContent = paymentInfo.formattedSubtotal;
    if (shippingElement) shippingElement.textContent = paymentInfo.formattedShippingFee;
    if (totalElement) totalElement.textContent = paymentInfo.formattedFinalTotal;

    // Cập nhật tổng số tiền ở phần trên
    const totalAmountElement = document.querySelector('.total-amount');
    if (totalAmountElement) totalAmountElement.textContent = paymentInfo.formattedFinalTotal;

    // Cập nhật số sản phẩm
    const productCountElement = document.querySelector('.total-label');
    if (productCountElement && orderItems.length > 0) {
        productCountElement.textContent = `Tổng số tiền (${orderItems.length} sản phẩm):`;
    }
}

// Hiển thị thông tin đơn hàng
function displayOrderInfo() {
    if (!checkoutData) return;

    // Hiển thị mã đơn hàng nếu cần
    const orderNumber = checkoutData.orderNumber || ('ORD-' + Date.now());
    console.log('Order number:', orderNumber);
}

// Hiển thị thông báo khi không có dữ liệu giỏ hàng
function showNoCartDataMessage() {
    const orderSummary = document.querySelector('.order-summary');
    if (!orderSummary) return;

    orderSummary.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
            <span class="material-symbols-outlined" style="font-size: 64px; color: #d1d5db; margin-bottom: 1rem;">
                shopping_cart_off
            </span>
            <h2 style="color: #4b5563; margin-bottom: 1rem;">Không có sản phẩm trong giỏ hàng</h2>
            <p style="color: #6b7280; margin-bottom: 2rem;">Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán</p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <a href="cart.html" style="padding: 0.75rem 1.5rem; background-color: #166534; color: white; text-decoration: none; border-radius: 0.25rem; font-weight: 500;">
                    Đến giỏ hàng
                </a>
                <a href="index.html" style="padding: 0.75rem 1.5rem; background-color: #e5e7eb; color: #374151; text-decoration: none; border-radius: 0.25rem; font-weight: 500;">
                    Tiếp tục mua sắm
                </a>
            </div>
        </div>
    `;
}

// Hiển thị thông báo khi không có sản phẩm
function showNoProductsMessage() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'empty-cart-message';
    emptyMessage.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--gray-500);">
            <span class="material-symbols-outlined" style="font-size: 48px; margin-bottom: 1rem; display: block;">
                shopping_cart
            </span>
            <p>Không có sản phẩm nào trong giỏ hàng</p>
        </div>
    `;

    // Tìm header và thêm message sau đó
    const header = productGrid.querySelector('.product-header');
    if (header) {
        header.insertAdjacentElement('afterend', emptyMessage);
    } else {
        productGrid.appendChild(emptyMessage);
    }
}

// ==== CÁC HÀM XỬ LÝ DROPDOWN ====

// Khởi tạo dropdown quốc gia
function initCountryDropdown() {
    const dropdown = $('#country-dropdown');
    if (!dropdown.length) return;

    dropdown.html('<table id="country-table" class="display" style="width:100%"><thead><tr><th>Quốc gia</th><th>Mã</th></tr></thead><tbody></tbody></table>');

    const table = $('#country-table').DataTable({
        data: countries.map(c => [c.name, c.code]),
        columns: [
            {
                title: "Quốc gia",
                render: function(data, type, row, meta) {
                    const country = countries[meta.row];
                    return `<div style="display: flex; align-items: center; gap: 10px; padding: 8px 0;">
                        <img src="${country.flag}" style="width: 24px; height: 18px; border: 1px solid #ddd; border-radius: 2px;">
                        <span>${country.name}</span>
                    </div>`;
                }
            },
            { title: "Mã", width: "80px" }
        ],
        pageLength: 5,
        lengthMenu: [[5, 10, 20], [5, 10, 20]],
        language: {
            search: "Tìm kiếm quốc gia:",
            lengthMenu: "Hiển thị _MENU_ quốc gia",
            zeroRecords: "Không tìm thấy quốc gia phù hợp",
            info: "Hiển thị _START_ đến _END_ của _TOTAL_ quốc gia",
            infoEmpty: "Hiển thị 0 đến 0 của 0 quốc gia",
            infoFiltered: "(lọc từ _MAX_ quốc gia)",
            paginate: {
                first: "Đầu",
                last: "Cuối",
                next: "Tiếp",
                previous: "Trước"
            }
        },
        dom: '<"top"f>rt<"bottom"lip><"clear">',
        searching: true,
        paging: true,
        info: true,
        ordering: false,
        responsive: true
    });

    // Xử lý chọn quốc gia
    $('#country-table tbody').on('click', 'tr', function() {
        const data = table.row(this).data();
        const country = countries.find(c => c.name === data[0]);

        if (country) {
            $('#selected-flag').attr('src', country.flag).attr('alt', country.name + ' flag');
            $('#selected-code').text(country.code);
            dropdown.hide();
            $('#phone').focus();
        }
    });
}

// Khởi tạo dropdown tỉnh thành
function initProvinceDropdown() {
    const citySelect = $('#city');
    if (!citySelect.length) return;

    // Thêm option mặc định
    citySelect.append(new Option("Chọn Tỉnh/Thành phố", ""));

    // Thêm các tỉnh thành
    provinces.forEach(province => {
        citySelect.append(new Option(province.name, province.id));
    });
}

// Xử lý thay đổi tỉnh thành
function handleCityChange() {
    const cityId = $(this).val();
    const districtSelect = $('#district');
    const wardSelect = $('#ward');

    // Reset
    districtSelect.empty().append('<option value="">Chọn Quận/Huyện</option>').prop('disabled', true);
    wardSelect.empty().append('<option value="">Chọn Xã/Phường</option>').prop('disabled', true);

    if (cityId && vietnamProvincesData[cityId]) {
        districtSelect.prop('disabled', false);
        const districts = vietnamProvincesData[cityId].districts;

        for (const districtId in districts) {
            districtSelect.append(new Option(districts[districtId].name, districtId));
        }
    } else if (cityId) {
        districtSelect.prop('disabled', false);
        districtSelect.append(new Option("Quận/Huyện mặc định", "default"));
        wardSelect.prop('disabled', false);
        wardSelect.append(new Option("Xã/Phường mặc định", "default"));
    }
}

// Xử lý thay đổi quận huyện
function handleDistrictChange() {
    const cityId = $('#city').val();
    const districtId = $(this).val();
    const wardSelect = $('#ward');

    wardSelect.empty().append('<option value="">Chọn Xã/Phường</option>').prop('disabled', true);

    if (cityId && districtId && vietnamProvincesData[cityId] && vietnamProvincesData[cityId].districts[districtId]) {
        wardSelect.prop('disabled', false);
        const wards = vietnamProvincesData[cityId].districts[districtId].wards;

        wards.forEach(ward => {
            const wardId = generateId(ward);
            wardSelect.append(new Option(ward, wardId));
        });
    } else if (districtId === "default") {
        wardSelect.prop('disabled', false);
        wardSelect.append(new Option("Xã/Phường mặc định", "default"));
    }
}

// Hàm tạo ID từ tên
function generateId(name) {
    return name.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9]/g, "")
        .replace(/\s+/g, '');
}

// ==== CÁC HÀM XỬ LÝ FORM ====

// Thiết lập sự kiện cho trang checkout
function setupCheckoutEvents() {
    // Dropdown events
    $('#city').change(handleCityChange);
    $('#district').change(handleDistrictChange);
    $('#country-select').click(toggleCountryDropdown);
    $(document).click(closeCountryDropdown);
    $(document).keyup(closeCountryDropdownOnEsc);

    // Form submit event
    $('#paymentForm').submit(handleFormSubmit);

    // Button events
    $('.shipping-info .change-button').click(openShippingMethodPopup);
    $('.voucher-button').click(openVoucherPopup);
    $('.payment-header .change-button').click(openPaymentMethodPopup);

    // Logo click event
    $('.logo, .footer-logo').click(function(e) {
        e.preventDefault();
        window.location.href = 'index.jsp';
    });

    // Tự động chọn Việt Nam làm mặc định
    const defaultCountry = countries[0];
    $('#selected-flag').attr('src', defaultCountry.flag).attr('alt', defaultCountry.name + ' flag');
    $('#selected-code').text(defaultCountry.code);
}

// Hiển thị/ẩn dropdown quốc gia
function toggleCountryDropdown(e) {
    e.stopPropagation();
    const dropdown = $('#country-dropdown');
    dropdown.toggle();

    if (dropdown.is(':visible')) {
        setTimeout(() => {
            $('#country-table_filter input').focus();
        }, 100);
    }
}

// Đóng dropdown khi click ra ngoài
function closeCountryDropdown(e) {
    if (!$(e.target).closest('.phone-input-group').length) {
        $('#country-dropdown').hide();
    }
}

// Đóng dropdown khi nhấn Esc
function closeCountryDropdownOnEsc(e) {
    if (e.key === "Escape") {
        $('#country-dropdown').hide();
    }
}

// Xử lý submit form
function handleFormSubmit(e) {
    e.preventDefault();

    // Kiểm tra dữ liệu
    const name = $('#name').val();
    const phone = $('#phone').val();
    const email = $('#email').val();
    const city = $('#city').val();
    const district = $('#district').val();
    const ward = $('#ward').val();
    const address = $('#address').val();
    const notes = $('#notes').val();

    // Kiểm tra dữ liệu bắt buộc
    let errorMessages = [];

    if (!name) errorMessages.push("Họ và tên");
    if (!phone) errorMessages.push("Số điện thoại");
    if (!email) errorMessages.push("Email");
    if (!city || city === "") errorMessages.push("Tỉnh/Thành phố");
    if (!district || district === "") errorMessages.push("Quận/Huyện");
    if (!ward || ward === "") errorMessages.push("Xã/Phường");
    if (!address) errorMessages.push("Địa chỉ cụ thể");

    if (errorMessages.length > 0) {
        showNotification('Vui lòng điền đầy đủ thông tin bắt buộc:\n' + errorMessages.join('\n'), 'error');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Email không hợp lệ!', 'error');
        return;
    }

    // Validate phone
    const phoneRegex = /^\d{9,15}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
        showNotification('Số điện thoại không hợp lệ! Vui lòng nhập 9-15 chữ số.', 'error');
        return;
    }

    // Kiểm tra xem có sản phẩm trong giỏ hàng không
    if (!checkoutData || orderItems.length === 0) {
        showNotification('Giỏ hàng của bạn đang trống!', 'error');
        return;
    }

    // Lấy thông tin từ form
    const countryCode = $('#selected-code').text();
    const cityName = $('#city option:selected').text();
    const districtName = $('#district option:selected').text();
    const wardName = $('#ward option:selected').text();
    const paymentInfo = checkoutData.paymentInfo;

    // Lấy thông tin phương thức thanh toán và vận chuyển hiện tại
    const paymentMethod = $('.payment-header span:first-child').text() || 'Thanh toán khi nhận hàng';
    const shippingMethod = $('.shipping-info .shipping-method span:nth-child(2)').text() || 'Hàng Cồng Kềnh';

    // Tạo đối tượng đơn hàng hoàn chỉnh
    const completeOrder = {
        // Thông tin khách hàng
        customerInfo: {
            name: name,
            phone: countryCode + ' ' + phone,
            email: email,
            address: {
                street: address,
                ward: wardName,
                district: districtName,
                city: cityName,
                fullAddress: `${address}, ${wardName}, ${districtName}, ${cityName}`
            },
            notes: notes
        },

        // Thông tin đơn hàng
        orderInfo: {
            orderNumber: checkoutData.orderNumber || ('ORD-' + Date.now()),
            timestamp: new Date().toISOString(),
            formattedDate: new Date().toLocaleString('vi-VN'),
            items: orderItems,
            subtotal: paymentInfo.subtotal,
            discount: paymentInfo.discountAmount || 0,
            shippingFee: paymentInfo.shippingFee,
            total: paymentInfo.finalTotal,
            paymentMethod: paymentMethod,
            shippingMethod: shippingMethod,
            status: "Chờ xác nhận", // Trạng thái mặc định
            formattedSubtotal: paymentInfo.formattedSubtotal,
            formattedShippingFee: paymentInfo.formattedShippingFee,
            formattedTotal: paymentInfo.formattedFinalTotal
        },

        // ID đơn hàng để dễ quản lý
        id: 'order_' + Date.now()
    };

    // Hiển thị xác nhận đơn hàng
    showOrderConfirmation(completeOrder);
}

// Hiển thị xác nhận đơn hàng
function showOrderConfirmation(order) {
    const confirmation = `
        XÁC NHẬN ĐƠN HÀNG THÀNH CÔNG!
        
        =====================================
        MÃ ĐƠN HÀNG: ${order.orderInfo.orderNumber}
        Ngày đặt: ${order.orderInfo.formattedDate}
        =====================================
        
        THÔNG TIN KHÁCH HÀNG:
        - Họ tên: ${order.customerInfo.name}
        - SĐT: ${order.customerInfo.phone}
        - Email: ${order.customerInfo.email}
        - Địa chỉ: ${order.customerInfo.address.fullAddress}
        ${order.customerInfo.notes ? `- Ghi chú: ${order.customerInfo.notes}` : ''}
        
        =====================================
        CHI TIẾT ĐƠN HÀNG:
        ${order.orderInfo.items.map((item, index) =>
        `${index + 1}. ${item.name} (${item.quantity} x ${formatPrice(item.price)}) = ${item.formattedTotalPrice}`
    ).join('\n')}
        
        =====================================
        THANH TOÁN:
        - Tạm tính: ${formatPrice(order.orderInfo.subtotal)}
        - Giảm giá: ${formatPrice(order.orderInfo.discount)}
        - Phí vận chuyển: ${formatPrice(order.orderInfo.shippingFee)}
        - Tổng cộng: ${formatPrice(order.orderInfo.total)}
        - Phương thức thanh toán: ${order.orderInfo.paymentMethod}
        - Phương thức vận chuyển: ${order.orderInfo.shippingMethod}
        =====================================
        
        Cảm ơn bạn đã đặt hàng tại Cây Xanh Việt!
        Nhân viên sẽ liên hệ với bạn trong thời gian sớm nhất.
    `;

    if (confirm(confirmation + '\n\nBạn có chắc chắn muốn đặt hàng?')) {
        // Lưu đơn hàng vào lịch sử đơn hàng
        saveOrderToHistory(order);

        // Xóa dữ liệu giỏ hàng và checkout sau khi đặt hàng thành công
        clearCartAfterOrder();

        // Hiển thị thông báo thành công
        showNotification('Đơn hàng đã được đặt thành công! Chuyển hướng về trang chủ...', 'success');

        // Chuyển hướng về trang chủ sau 2 giây
        setTimeout(() => {
            window.location.href = 'index.jsp';
        }, 2000);
    }
}

// Lưu đơn hàng vào lịch sử
function saveOrderToHistory(order) {
    try {
        // Lấy danh sách orders hiện có
        let orders = JSON.parse(localStorage.getItem('userOrders')) || [];

        // Thêm đơn hàng mới vào đầu danh sách
        orders.unshift(order);

        // Giới hạn chỉ lưu 50 đơn hàng gần nhất
        if (orders.length > 50) {
            orders = orders.slice(0, 50);
        }

        // Lưu lại
        localStorage.setItem('userOrders', JSON.stringify(orders));

        // Vẫn lưu lastOrder để tiện sử dụng nếu cần
        localStorage.setItem('lastOrder', JSON.stringify(order));

        console.log('Đơn hàng đã được lưu vào lịch sử. Tổng số đơn:', orders.length);
    } catch (error) {
        console.error('Lỗi khi lưu đơn hàng:', error);
    }
}

// Xóa giỏ hàng sau khi đặt hàng thành công
function clearCartAfterOrder() {
    try {
        localStorage.removeItem('cart');
        localStorage.removeItem('cartData');
        localStorage.removeItem('checkoutData');
        console.log('Cart cleared after successful order');
    } catch (error) {
        console.error('Error clearing cart:', error);
    }
}

// Định dạng số sang chuỗi VND
function formatPrice(price) {
    if (typeof price === 'string') {
        // Nếu đã là chuỗi định dạng, trả về nguyên bản
        return price;
    }
    return new Intl.NumberFormat('vi-VN', {
        minimumFractionDigits: 0
    }).format(price) + '₫';
}

// ========== CÁC HÀM CHO POPUP ==========

// Mở popup phương thức vận chuyển
function openShippingMethodPopup() {
    // Tạo nội dung popup
    const popupHTML = `
        <div class="shipping-popup-overlay">
            <div class="shipping-popup">
                <div class="shipping-popup-header">
                    <h3>Chọn phương thức vận chuyển</h3>
                    <button class="close-popup-btn">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div class="shipping-popup-content">
                    <div class="shipping-method-list">
                        <div class="shipping-method-item selected">
                            <div class="shipping-method-info">
                                <div class="shipping-method-name">Hàng Cồng Kềnh</div>
                                <div class="shipping-method-desc">Giao hàng tiêu chuẩn cho hàng lớn</div>
                                <div class="shipping-method-time">Nhận hàng từ T11 - 1 Th12</div>
                            </div>
                            <div class="shipping-method-price">1.082.900₫</div>
                            <div class="shipping-method-check">
                                <span class="material-symbols-outlined">check_circle</span>
                            </div>
                        </div>
                        
                        <div class="shipping-method-item">
                            <div class="shipping-method-info">
                                <div class="shipping-method-name">Giao Hàng Nhanh</div>
                                <div class="shipping-method-desc">Giao hàng trong 2-3 ngày làm việc</div>
                                <div class="shipping-method-time">Nhận hàng trong 3 ngày</div>
                            </div>
                            <div class="shipping-method-price">1.350.000₫</div>
                            <div class="shipping-method-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                        
                        <div class="shipping-method-item">
                            <div class="shipping-method-info">
                                <div class="shipping-method-name">Giao Hàng Tiết Kiệm</div>
                                <div class="shipping-method-desc">Tiết kiệm chi phí, thời gian lâu hơn</div>
                                <div class="shipping-method-time">Nhận hàng từ 5-7 ngày</div>
                            </div>
                            <div class="shipping-method-price">850.000₫</div>
                            <div class="shipping-method-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                        
                        <div class="shipping-method-item">
                            <div class="shipping-method-info">
                                <div class="shipping-method-name">Giao Hàng Siêu Tốc</div>
                                <div class="shipping-method-desc">Giao hàng trong 24h</div>
                                <div class="shipping-method-time">Nhận hàng trong ngày</div>
                            </div>
                            <div class="shipping-method-price">2.000.000₫</div>
                            <div class="shipping-method-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shipping-popup-footer">
                    <button class="cancel-shipping-btn">Hủy</button>
                    <button class="confirm-shipping-btn">Xác nhận</button>
                </div>
            </div>
        </div>
    `;

    // Thêm popup vào body
    $('body').append(popupHTML);

    // Thêm CSS cho popup nếu chưa có
    if (!$('#shipping-popup-styles').length) {
        const styles = `
            <style id="shipping-popup-styles">
                .shipping-popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }
                
                .shipping-popup {
                    background: white;
                    border-radius: 12px;
                    width: 90%;
                    max-width: 500px;
                    max-height: 80vh;
                    overflow: hidden;
                    animation: slideUp 0.3s ease;
                }
                
                .shipping-popup-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    border-bottom: 1px solid #e5e7eb;
                }
                
                .shipping-popup-header h3 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                }
                
                .close-popup-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #6b7280;
                    padding: 4px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .close-popup-btn:hover {
                    background: #f3f4f6;
                }
                
                .shipping-popup-content {
                    padding: 20px;
                    max-height: 50vh;
                    overflow-y: auto;
                }
                
                .shipping-method-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                
                .shipping-method-item {
                    display: flex;
                    align-items: center;
                    padding: 16px;
                    border: 2px solid #e5e7eb;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                    position: relative;
                }
                
                .shipping-method-item:hover {
                    border-color: #9ca3af;
                }
                
                .shipping-method-item.selected {
                    border-color: #10b981;
                    background-color: #f0fdf4;
                }
                
                .shipping-method-info {
                    flex: 1;
                    margin-right: 16px;
                }
                
                .shipping-method-name {
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 4px;
                }
                
                .shipping-method-desc {
                    font-size: 14px;
                    color: #6b7280;
                    margin-bottom: 4px;
                }
                
                .shipping-method-time {
                    font-size: 14px;
                    color: #10b981;
                    font-weight: 500;
                }
                
                .shipping-method-price {
                    font-weight: 600;
                    color: #1f2937;
                    margin-right: 16px;
                }
                
                .shipping-method-check {
                    color: #10b981;
                }
                
                .shipping-method-check .material-symbols-outlined {
                    font-size: 20px;
                }
                
                .shipping-popup-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                    padding: 20px;
                    border-top: 1px solid #e5e7eb;
                }
                
                .cancel-shipping-btn,
                .confirm-shipping-btn {
                    padding: 10px 20px;
                    border-radius: 6px;
                    font-weight: 500;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s;
                }
                
                .cancel-shipping-btn {
                    background: #f3f4f6;
                    color: #374151;
                }
                
                .cancel-shipping-btn:hover {
                    background: #e5e7eb;
                }
                
                .confirm-shipping-btn {
                    background: #10b981;
                    color: white;
                }
                
                .confirm-shipping-btn:hover {
                    background: #059669;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            </style>
        `;
        $('head').append(styles);
    }

    // Xử lý sự kiện chọn phương thức vận chuyển
    $('.shipping-method-item').click(function() {
        $('.shipping-method-item').removeClass('selected');
        $(this).addClass('selected');
        $('.shipping-method-item .material-symbols-outlined').text('circle');
        $(this).find('.material-symbols-outlined').text('check_circle');
    });

    // Xử lý sự kiện đóng popup
    $('.close-popup-btn, .cancel-shipping-btn').click(function() {
        $('.shipping-popup-overlay').remove();
    });

    // Xử lý xác nhận phương thức vận chuyển
    $('.confirm-shipping-btn').click(function() {
        const selectedItem = $('.shipping-method-item.selected');
        const methodName = selectedItem.find('.shipping-method-name').text();
        const methodPrice = selectedItem.find('.shipping-method-price').text();
        const methodTime = selectedItem.find('.shipping-method-time').text();

        // Cập nhật giao diện
        $('.shipping-info .shipping-method span:nth-child(2)').text(methodName);
        $('.shipping-info .shipping-price').text(methodPrice);
        $('.shipping-info .shipping-note').text(methodTime);

        // Cập nhật phí vận chuyển trong phần thanh toán
        $('.payment-row:nth-child(2) span:last-child').text(methodPrice);

        // Cập nhật dữ liệu checkout
        if (checkoutData && checkoutData.paymentInfo) {
            // Cập nhật phí vận chuyển
            const parsePrice = (priceStr) => parseInt(priceStr.replace(/\./g, '').replace('₫', ''));
            const newShippingFee = parsePrice(methodPrice);
            const newTotal = checkoutData.paymentInfo.subtotal + newShippingFee - (checkoutData.paymentInfo.discountAmount || 0);

            checkoutData.paymentInfo.shippingFee = newShippingFee;
            checkoutData.paymentInfo.finalTotal = newTotal;
            checkoutData.paymentInfo.formattedShippingFee = methodPrice;
            checkoutData.paymentInfo.formattedFinalTotal = formatPrice(newTotal);

            // Lưu lại
            localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

            // Cập nhật tổng tiền hiển thị
            updateOrderSummary();
        }

        // Đóng popup
        $('.shipping-popup-overlay').remove();

        showNotification(`Đã chọn phương thức vận chuyển: ${methodName}`, 'success');
    });

    // Ngăn click vào popup đóng overlay
    $('.shipping-popup').click(function(e) {
        e.stopPropagation();
    });

    // Đóng popup khi click ra ngoài
    $('.shipping-popup-overlay').click(function() {
        $(this).remove();
    });
}

// Mở popup voucher
function openVoucherPopup() {
    // Tạo nội dung popup
    const popupHTML = `
        <div class="voucher-popup-overlay">
            <div class="voucher-popup">
                <div class="voucher-popup-header">
                    <h3>Chọn Voucher</h3>
                    <button class="close-voucher-btn">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div class="voucher-popup-content">
                    <div class="voucher-search">
                        <input type="text" placeholder="Tìm kiếm voucher..." class="voucher-search-input">
                        <button class="voucher-search-btn">
                            <span class="material-symbols-outlined">search</span>
                        </button>
                    </div>
                    
                    <div class="voucher-categories">
                        <button class="voucher-category-btn active">Tất cả</button>
                        <button class="voucher-category-btn">Miễn phí vận chuyển</button>
                        <button class="voucher-category-btn">Giảm giá</button>
                        <button class="voucher-category-btn">Đặc quyền</button>
                    </div>
                    
                    <div class="voucher-list">
                        <div class="voucher-item">
                            <div class="voucher-info">
                                <div class="voucher-brand">Cây Xanh Việt</div>
                                <div class="voucher-title">Giảm 100k cho đơn từ 1.000.000đ</div>
                                <div class="voucher-code">Mã: XANHVIET100</div>
                                <div class="voucher-expiry">HSD: 31/12/2024</div>
                            </div>
                            <div class="voucher-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                        
                        <div class="voucher-item">
                            <div class="voucher-info">
                                <div class="voucher-brand">Cây Xanh Việt</div>
                                <div class="voucher-title">Miễn phí vận chuyển</div>
                                <div class="voucher-code">Mã: FREESHIPXANH</div>
                                <div class="voucher-expiry">HSD: 30/11/2024</div>
                            </div>
                            <div class="voucher-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                        
                        <div class="voucher-item">
                            <div class="voucher-info">
                                <div class="voucher-brand">Cây Xanh Việt</div>
                                <div class="voucher-title">Giảm 10% cho cây cảnh</div>
                                <div class="voucher-code">Mã: CAYVIP10</div>
                                <div class="voucher-expiry">HSD: 15/12/2024</div>
                            </div>
                            <div class="voucher-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                        
                        <div class="voucher-item">
                            <div class="voucher-info">
                                <div class="voucher-brand">Cây Xanh Việt</div>
                                <div class="voucher-title">Giảm 50k cho đơn từ 500k</div>
                                <div class="voucher-code">Mã: XANHVIET50</div>
                                <div class="voucher-expiry">HSD: 20/12/2024</div>
                            </div>
                            <div class="voucher-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                        
                        <div class="voucher-item">
                            <div class="voucher-info">
                                <div class="voucher-brand">Cây Xanh Việt</div>
                                <div class="voucher-title">Giảm 200k cho đơn từ 2.000.000đ</div>
                                <div class="voucher-code">Mã: XANHVIET200</div>
                                <div class="voucher-expiry">HSD: 31/12/2024</div>
                            </div>
                            <div class="voucher-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="voucher-popup-footer">
                    <button class="cancel-voucher-btn">Hủy</button>
                    <button class="apply-voucher-btn">Áp dụng</button>
                </div>
            </div>
        </div>
    `;

    // Thêm popup vào body
    $('body').append(popupHTML);

    // Thêm CSS cho popup nếu chưa có
    if (!$('#voucher-popup-styles').length) {
        const styles = `
            <style id="voucher-popup-styles">
                .voucher-popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }
                
                .voucher-popup {
                    background: white;
                    border-radius: 12px;
                    width: 90%;
                    max-width: 500px;
                    max-height: 80vh;
                    overflow: hidden;
                    animation: slideUp 0.3s ease;
                }
                
                .voucher-popup-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    border-bottom: 1px solid #e5e7eb;
                }
                
                .voucher-popup-header h3 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                }
                
                .close-voucher-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #6b7280;
                    padding: 4px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .close-voucher-btn:hover {
                    background: #f3f4f6;
                }
                
                .voucher-popup-content {
                    padding: 20px;
                    max-height: 50vh;
                    overflow-y: auto;
                }
                
                .voucher-search {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 20px;
                }
                
                .voucher-search-input {
                    flex: 1;
                    padding: 10px 14px;
                    border: 1px solid #e5e7eb;
                    border-radius: 6px;
                    font-size: 14px;
                }
                
                .voucher-search-btn {
                    background: #10b981;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    padding: 10px 16px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .voucher-search-btn:hover {
                    background: #059669;
                }
                
                .voucher-categories {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 20px;
                    flex-wrap: wrap;
                }
                
                .voucher-category-btn {
                    padding: 6px 12px;
                    background: #f3f4f6;
                    border: 1px solid #e5e7eb;
                    border-radius: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    color: #4b5563;
                }
                
                .voucher-category-btn.active {
                    background: #10b981;
                    color: white;
                    border-color: #10b981;
                }
                
                .voucher-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                
                .voucher-item {
                    display: flex;
                    align-items: center;
                    padding: 16px;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .voucher-item:hover {
                    border-color: #9ca3af;
                }
                
                .voucher-item.selected {
                    border-color: #10b981;
                    background-color: #f0fdf4;
                }
                
                .voucher-info {
                    flex: 1;
                    margin-right: 16px;
                }
                
                .voucher-brand {
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 4px;
                    font-size: 14px;
                }
                
                .voucher-title {
                    font-size: 14px;
                    color: #1f2937;
                    margin-bottom: 4px;
                }
                
                .voucher-code {
                    font-size: 13px;
                    color: #10b981;
                    margin-bottom: 2px;
                }
                
                .voucher-expiry {
                    font-size: 12px;
                    color: #6b7280;
                }
                
                .voucher-check {
                    color: #10b981;
                }
                
                .voucher-check .material-symbols-outlined {
                    font-size: 20px;
                }
                
                .voucher-popup-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                    padding: 20px;
                    border-top: 1px solid #e5e7eb;
                }
                
                .cancel-voucher-btn,
                .apply-voucher-btn {
                    padding: 10px 20px;
                    border-radius: 6px;
                    font-weight: 500;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s;
                }
                
                .cancel-voucher-btn {
                    background: #f3f4f6;
                    color: #374151;
                }
                
                .cancel-voucher-btn:hover {
                    background: #e5e7eb;
                }
                
                .apply-voucher-btn {
                    background: #10b981;
                    color: white;
                }
                
                .apply-voucher-btn:hover {
                    background: #059669;
                }
            </style>
        `;
        $('head').append(styles);
    }

    // Xử lý sự kiện chọn voucher
    $('.voucher-item').click(function() {
        $('.voucher-item').removeClass('selected');
        $(this).addClass('selected');
        $('.voucher-item .material-symbols-outlined').text('circle');
        $(this).find('.material-symbols-outlined').text('check_circle');
    });

    // Xử lý sự kiện danh mục voucher
    $('.voucher-category-btn').click(function() {
        $('.voucher-category-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Xử lý sự kiện đóng popup
    $('.close-voucher-btn, .cancel-voucher-btn').click(function() {
        $('.voucher-popup-overlay').remove();
    });

    // Xử lý áp dụng voucher
    $('.apply-voucher-btn').click(function() {
        const selectedItem = $('.voucher-item.selected');

        if (selectedItem.length === 0) {
            showNotification('Vui lòng chọn voucher để áp dụng!', 'error');
            return;
        }

        const voucherTitle = selectedItem.find('.voucher-title').text();
        const voucherCode = selectedItem.find('.voucher-code').text();

        // Cập nhật giao diện hiển thị voucher đã chọn
        updateSelectedVoucher(voucherTitle, voucherCode);

        // Tính toán và cập nhật giảm giá
        applyVoucherDiscount(voucherTitle);

        // Đóng popup
        $('.voucher-popup-overlay').remove();

        showNotification(`Đã áp dụng voucher: ${voucherTitle}`, 'success');
    });

    // Ngăn click vào popup đóng overlay
    $('.voucher-popup').click(function(e) {
        e.stopPropagation();
    });

    // Đóng popup khi click ra ngoài
    $('.voucher-popup-overlay').click(function() {
        $(this).remove();
    });
}

// Mở popup phương thức thanh toán
function openPaymentMethodPopup() {
    // Tạo nội dung popup
    const popupHTML = `
        <div class="payment-method-popup-overlay">
            <div class="payment-method-popup">
                <div class="payment-method-popup-header">
                    <h3>Chọn phương thức thanh toán</h3>
                    <button class="close-payment-popup-btn">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div class="payment-method-popup-content">
                    <div class="payment-method-list">
                        <div class="payment-method-item selected">
                            <div class="payment-method-icon">
                                <span class="material-symbols-outlined">payments</span>
                            </div>
                            <div class="payment-method-info">
                                <div class="payment-method-name">Thanh toán khi nhận hàng</div>
                                <div class="payment-method-desc">Thanh toán bằng tiền mặt hoặc quẹt thẻ khi nhận hàng</div>
                            </div>
                            <div class="payment-method-check">
                                <span class="material-symbols-outlined">check_circle</span>
                            </div>
                        </div>
                        
                        <div class="payment-method-item">
                            <div class="payment-method-icon">
                                <span class="material-symbols-outlined">credit_card</span>
                            </div>
                            <div class="payment-method-info">
                                <div class="payment-method-name">Thẻ tín dụng/Ghi nợ</div>
                                <div class="payment-method-desc">Thanh toán qua thẻ Visa, Mastercard</div>
                            </div>
                            <div class="payment-method-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                        
                        <div class="payment-method-item">
                            <div class="payment-method-icon">
                                <span class="material-symbols-outlined">account_balance</span>
                            </div>
                            <div class="payment-method-info">
                                <div class="payment-method-name">Chuyển khoản ngân hàng</div>
                                <div class="payment-method-desc">Chuyển khoản trực tiếp đến tài khoản ngân hàng</div>
                            </div>
                            <div class="payment-method-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                        
                        <div class="payment-method-item">
                            <div class="payment-method-icon">
                                <span class="material-symbols-outlined">smartphone</span>
                            </div>
                            <div class="payment-method-info">
                                <div class="payment-method-name">Ví điện tử</div>
                                <div class="payment-method-desc">Thanh toán qua MoMo, ZaloPay, VNPay</div>
                            </div>
                            <div class="payment-method-check">
                                <span class="material-symbols-outlined">circle</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payment-method-popup-footer">
                    <button class="cancel-payment-btn">Hủy</button>
                    <button class="confirm-payment-btn">Xác nhận</button>
                </div>
            </div>
        </div>
    `;

    // Thêm popup vào body
    $('body').append(popupHTML);

    // Thêm CSS cho popup nếu chưa có
    if (!$('#payment-method-popup-styles').length) {
        const styles = `
            <style id="payment-method-popup-styles">
                .payment-method-popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }
                
                .payment-method-popup {
                    background: white;
                    border-radius: 12px;
                    width: 90%;
                    max-width: 500px;
                    max-height: 80vh;
                    overflow: hidden;
                    animation: slideUp 0.3s ease;
                }
                
                .payment-method-popup-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    border-bottom: 1px solid #e5e7eb;
                }
                
                .payment-method-popup-header h3 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                }
                
                .close-payment-popup-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #6b7280;
                    padding: 4px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .close-payment-popup-btn:hover {
                    background: #f3f4f6;
                }
                
                .payment-method-popup-content {
                    padding: 20px;
                    max-height: 50vh;
                    overflow-y: auto;
                }
                
                .payment-method-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                
                .payment-method-item {
                    display: flex;
                    align-items: center;
                    padding: 16px;
                    border: 2px solid #e5e7eb;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .payment-method-item:hover {
                    border-color: #9ca3af;
                }
                
                .payment-method-item.selected {
                    border-color: #10b981;
                    background-color: #f0fdf4;
                }
                
                .payment-method-icon {
                    margin-right: 16px;
                    color: #6b7280;
                }
                
                .payment-method-icon .material-symbols-outlined {
                    font-size: 24px;
                }
                
                .payment-method-info {
                    flex: 1;
                    margin-right: 16px;
                }
                
                .payment-method-name {
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 4px;
                }
                
                .payment-method-desc {
                    font-size: 14px;
                    color: #6b7280;
                }
                
                .payment-method-check {
                    color: #10b981;
                }
                
                .payment-method-check .material-symbols-outlined {
                    font-size: 20px;
                }
                
                .payment-method-popup-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                    padding: 20px;
                    border-top: 1px solid #e5e7eb;
                }
                
                .cancel-payment-btn,
                .confirm-payment-btn {
                    padding: 10px 20px;
                    border-radius: 6px;
                    font-weight: 500;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s;
                }
                
                .cancel-payment-btn {
                    background: #f3f4f6;
                    color: #374151;
                }
                
                .cancel-payment-btn:hover {
                    background: #e5e7eb;
                }
                
                .confirm-payment-btn {
                    background: #10b981;
                    color: white;
                }
                
                .confirm-payment-btn:hover {
                    background: #059669;
                }
            </style>
        `;
        $('head').append(styles);
    }

    // Xử lý sự kiện chọn phương thức thanh toán
    $('.payment-method-item').click(function() {
        $('.payment-method-item').removeClass('selected');
        $(this).addClass('selected');
        $('.payment-method-item .material-symbols-outlined').text('circle');
        $(this).find('.material-symbols-outlined').text('check_circle');
    });

    // Xử lý sự kiện đóng popup
    $('.close-payment-popup-btn, .cancel-payment-btn').click(function() {
        $('.payment-method-popup-overlay').remove();
    });

    // Xử lý xác nhận phương thức thanh toán
    $('.confirm-payment-btn').click(function() {
        const selectedItem = $('.payment-method-item.selected');
        const methodName = selectedItem.find('.payment-method-name').text();

        // Cập nhật giao diện
        $('.payment-header span:first-child').text(methodName);

        // Đóng popup
        $('.payment-method-popup-overlay').remove();

        showNotification(`Đã chọn phương thức thanh toán: ${methodName}`, 'success');
    });

    // Ngăn click vào popup đóng overlay
    $('.payment-method-popup').click(function(e) {
        e.stopPropagation();
    });

    // Đóng popup khi click ra ngoài
    $('.payment-method-popup-overlay').click(function() {
        $(this).remove();
    });
}

// Cập nhật voucher đã chọn
function updateSelectedVoucher(voucherTitle, voucherCode) {
    // Thay đổi text của nút voucher
    $('.voucher-button').text('Đổi voucher');

    // Thêm thông tin voucher đã chọn
    if (!$('.selected-voucher-info').length) {
        $('.voucher-section').append(`
            <div class="selected-voucher-info" style="margin-top: 8px; padding: 8px; background: #f0fdf4; border-radius: 4px; font-size: 13px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${voucherTitle}</span>
                    <button class="remove-voucher-btn" style="background: none; border: none; color: #dc2626; cursor: pointer; font-size: 12px;">
                        Xóa
                    </button>
                </div>
                <div style="color: #10b981; font-size: 12px;">${voucherCode}</div>
            </div>
        `);

        // Thêm sự kiện xóa voucher
        $('.remove-voucher-btn').click(function() {
            removeVoucher();
        });
    } else {
        $('.selected-voucher-info').html(`
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>${voucherTitle}</span>
                <button class="remove-voucher-btn" style="background: none; border: none; color: #dc2626; cursor: pointer; font-size: 12px;">
                    Xóa
                </button>
            </div>
            <div style="color: #10b981; font-size: 12px;">${voucherCode}</div>
        `);
    }
}

// Áp dụng giảm giá voucher
function applyVoucherDiscount(voucherTitle) {
    if (!checkoutData || !checkoutData.paymentInfo) return;

    // Xác định loại voucher và tính toán giảm giá
    let discountAmount = 0;
    let discountText = '';

    if (voucherTitle.includes('100k')) {
        discountAmount = 100000;
        discountText = '100.000₫';
    } else if (voucherTitle.includes('50k')) {
        discountAmount = 50000;
        discountText = '50.000₫';
    } else if (voucherTitle.includes('200k')) {
        discountAmount = 200000;
        discountText = '200.000₫';
    } else if (voucherTitle.includes('Miễn phí vận chuyển')) {
        // Miễn phí vận chuyển
        const freeShipping = '0₫';
        $('.shipping-info .shipping-price').text(freeShipping);
        $('.payment-row:nth-child(2) span:last-child').text(freeShipping);

        // Cập nhật dữ liệu checkout
        checkoutData.paymentInfo.shippingFee = 0;
        checkoutData.paymentInfo.formattedShippingFee = freeShipping;
        checkoutData.paymentInfo.finalTotal = checkoutData.paymentInfo.subtotal - checkoutData.paymentInfo.discountAmount;
        checkoutData.paymentInfo.formattedFinalTotal = formatPrice(checkoutData.paymentInfo.finalTotal);

        // Lưu lại
        localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

        // Cập nhật tổng tiền
        updateOrderSummary();

        showNotification('Đã áp dụng miễn phí vận chuyển!', 'success');
        return;
    } else if (voucherTitle.includes('10%')) {
        // Tính 10% từ tổng tiền hàng
        const subtotal = checkoutData.paymentInfo.subtotal;
        discountAmount = Math.round(subtotal * 0.1);
        discountText = formatPrice(discountAmount);
    }

    // Thêm dòng giảm giá vào phần thanh toán nếu chưa có
    if (discountAmount > 0) {
        // Cập nhật dữ liệu checkout
        checkoutData.paymentInfo.discountAmount = discountAmount;
        checkoutData.paymentInfo.finalTotal = checkoutData.paymentInfo.subtotal + checkoutData.paymentInfo.shippingFee - discountAmount;
        checkoutData.paymentInfo.formattedFinalTotal = formatPrice(checkoutData.paymentInfo.finalTotal);

        // Lưu lại
        localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

        // Cập nhật giao diện
        if ($('.payment-row.discount-row').length === 0) {
            $('.payment-details .payment-row:nth-child(2)').after(`
                <div class="payment-row discount-row">
                    <span style="color: #10b981;">Giảm giá voucher</span>
                    <span style="color: #10b981;">-${discountText}</span>
                </div>
            `);
        } else {
            $('.payment-row.discount-row span:last-child').text(`-${discountText}`);
        }

        // Cập nhật tổng tiền
        updateOrderSummary();

        showNotification(`Đã áp dụng giảm giá ${discountText}!`, 'success');
    }
}

// Xóa voucher
function removeVoucher() {
    if (!checkoutData || !checkoutData.paymentInfo) return;

    // Khôi phục nút voucher
    $('.voucher-button').text('Chọn Voucher');

    // Xóa thông tin voucher
    $('.selected-voucher-info').remove();

    // Xóa dòng giảm giá
    $('.payment-row.discount-row').remove();

    // Khôi phục dữ liệu checkout
    checkoutData.paymentInfo.discountAmount = 0;
    checkoutData.paymentInfo.finalTotal = checkoutData.paymentInfo.subtotal + checkoutData.paymentInfo.shippingFee;
    checkoutData.paymentInfo.formattedFinalTotal = formatPrice(checkoutData.paymentInfo.finalTotal);

    // Lưu lại
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

    // Cập nhật tổng tiền
    updateOrderSummary();

    showNotification('Đã xóa voucher!', 'info');
}

// Hiển thị thông báo
function showNotification(message, type = 'success') {
    const oldNotification = document.querySelector('.custom-notification');
    if (oldNotification) {
        oldNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;

    let icon = 'check_circle';
    if (type === 'error') icon = 'error';
    if (type === 'info') icon = 'info';

    notification.innerHTML = `
        <span class="material-symbols-outlined">${icon}</span>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-family: 'Plus Jakarta Sans', sans-serif;
    `;

    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
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
            @keyframes slideOut {
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

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}