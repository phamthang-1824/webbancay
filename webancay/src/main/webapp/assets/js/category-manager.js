let categorys = JSON.parse(localStorage.getItem("categorys")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = null;

document.getElementById("btnAddCategory").addEventListener("click", function () {
    document.getElementById("addCategoryForm").classList.remove("hidden");
});

document.getElementById("cancelCategory").addEventListener("click", function () {
    document.getElementById("addCategoryForm").classList.add("hidden");
});

document.getElementById("categoryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const category = {
        categoryId: document.getElementById("categoryId").value.trim(),
        categoryName: document.getElementById("categoryName").value.trim(),
        categoryDescription: document.getElementById("categoryDescription").value.trim(),
        createdAt: new Date().toISOString()
    };
    if (editIndex === null) {
        // THÊM MỚI
        categorys.push(category);
    } else {
        // CẬP NHẬT
        categorys[editIndex] = category;
        editIndex = null; // reset sau khi sửa
    }
    localStorage.setItem("categorys", JSON.stringify(categorys));
    renderCategorys();

    document.getElementById("addCategoryForm").classList.add("hidden");
    this.reset();
});

//đếm số sản phẩm thuô danh mục
function countProductsByCategory(categoryName) {
    return products.filter(p => p.productCategory === categoryName).length;
}

//hiện thị danh mục sản phẩm
function renderCategorys() {
    const tbody = document.getElementById("categoryList");
    tbody.innerHTML = ""; // xóa bảng cũ

    categorys.forEach((c, index) => {
        const count = countProductsByCategory(c.categoryName);
        const row = `
            <tr>
                <td>${c.categoryId}</td>
                <td>${c.categoryName}</td>
                <td>${c.categoryDescription}</td>
                <td>${count}</td>
                <td>
                    <button onclick="viewCategory(${index})">Xem</button>
                    <button onclick="editCategory(${index})">Sửa</button>
                    <button onclick="deleteCategory(${index})">Xóa</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}
document.addEventListener("DOMContentLoaded", renderCategorys);

//xem sản phẩm
function viewCategory(index) {
    const c = categorys[index];
    const count = countProductsByCategory(c.categoryName);
    alert(
        `Mã Danh mục: ${c.categoryId}\n` +
        `Tên Danh mục: ${c.categoryName}\n` +
        `Mô tả: ${c.categoryDescription}\n` +
        `Số lượng sản phẩm: ${count}\n`
    );
}

//xóa sản phẩm
function deleteCategory (index) {
    if (confirm("Bạn có chắc muốn xóa danh mục sản phẩm này?")) {
        categorys.splice(index, 1);
        localStorage.setItem("categorys", JSON.stringify(categorys));
        renderCategorys();
    }
}

//sưa thông tin sản phẩm
function  editCategory (index) {
    const c = categorys[index];
    editIndex = index; // lưu vị trí đang sửa

    // Đổ dữ liệu vào form
    document.getElementById("categoryId").value = c.categoryId;
    document.getElementById("categoryName").value = c.categoryName;
    document.getElementById("categoryDescription").value = c.categoryDescription;

    // Hiện form
    document.getElementById("addCategoryForm").classList.remove("hidden");
}