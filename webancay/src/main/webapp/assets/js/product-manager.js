let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = null; //biền đcj dùng để lưu index sản phẩm đang sửa

// Hiện form khi bấm "Thêm sản phẩm"
document.getElementById("btnAddProduct").addEventListener("click", function () {
    document.getElementById("addProductForm").classList.remove("hidden");
});

// Ẩn form khi bấm "Hủy"
document.getElementById("cancelProduct").addEventListener("click", function () {
    document.getElementById("addProductForm").classList.add("hidden");
});

// Submit form
document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // TODO: xử lý lưu sản phẩm sau này
    // 1. Lấy dữ liệu từ form
    const product = {
        // Thông tin cơ bản
        productID: document.getElementById("productID").value.trim(),
        productName: document.getElementById("productName").value.trim(),
        productCategory: document.getElementById("productCategory").value,

        productPrice: Number(document.getElementById("productPrice").value),
        productSalePrice: Number(document.getElementById("productSalePrice").value) || null,
        productQuantity: Number(document.getElementById("productQuantity").value),

        productStatus: document.getElementById("productStatus").value,

        // Thông tin chi tiết cây
        productHeight: document.getElementById("productHeight").value.trim(),
        productDescription: document.getElementById("productDescription").value.trim(),
        productAge: document.getElementById("productAge").value,

        // Hình ảnh (lưu tên file – frontend only)
        productThumbnail: document.getElementById("productThumbnail").files[0]?.name || "",
        productGallery: Array.from(
            document.getElementById("productGallery").files
        ).map(file => file.name),

        // Thời gian tạo (tốt cho quản lý)
        createdAt: new Date().toISOString()
    };

    if (editIndex === null) {
        // THÊM MỚI
        products.push(product);
    } else {
        // CẬP NHẬT
        products[editIndex] = product;
        editIndex = null; // reset sau khi sửa
    }

    // 3. (Tuỳ chọn) lưu vào localStorage
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();

    document.getElementById("addProductForm").classList.add("hidden");
    this.reset();
});

//hiện thị sản phẩm lên bảng
function renderProducts() {
    const tbody = document.getElementById("productList");
    tbody.innerHTML = ""; // xóa bảng cũ

    products.forEach((p, index) => {
        const row = `
            <tr>
                <td>${p.productID}</td>
                <td>${p.productName}</td>
                <td>${p.productCategory}</td>
                <td>${p.productPrice.toLocaleString()} đ</td>
                <td>${p.productQuantity}</td>
                <td>${p.productStatus}</td>
                <td>
                    <button onclick="viewProduct(${index})">Xem</button>
                    <button onclick="editProduct(${index})">Sửa</button>
                    <button onclick="deleteProduct(${index})">Xóa</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

document.addEventListener("DOMContentLoaded", renderProducts);

//xem sản phẩm
function viewProduct(index) {
    const p = products[index];
    alert(
        `Tên: ${p.productName}\n` +
        `Danh mục: ${p.productCategory}\n` +
        `Giá: ${p.productPrice.toLocaleString()} đ`
    );
}

//xóa sản phẩm
function deleteProduct(index) {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
    }
}

//sưa thông tin sản phẩm
function editProduct(index) {
    const p = products[index];
    editIndex = index; // lưu vị trí đang sửa

    // Đổ dữ liệu vào form
    document.getElementById("productID").value = p.productID;
    document.getElementById("productName").value = p.productName;
    document.getElementById("productCategory").value = p.productCategory;
    document.getElementById("productPrice").value = p.productPrice;
    document.getElementById("productSalePrice").value = p.productSalePrice || "";
    document.getElementById("productQuantity").value = p.productQuantity;
    document.getElementById("productStatus").value = p.productStatus;
    document.getElementById("productHeight").value = p.productHeight;
    document.getElementById("productDescription").value = p.productDescription;
    document.getElementById("productAge").value = p.productAge;

    // Hiện form
    document.getElementById("addProductForm").classList.remove("hidden");
}
