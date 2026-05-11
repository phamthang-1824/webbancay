// let users = JSON.parse(localStorage.getItem("users")) || [];
let users = JSON.parse(localStorage.getItem('cayxanhviet_users') || '[]');
let editIndex = null;

document.getElementById("btnAddCustomer").addEventListener("click", function () {
    document.getElementById("addCustomerForm").classList.remove("hidden");
});

document.getElementById("cancelCustomer").addEventListener("click", function () {
    document.getElementById("addCustomerForm").classList.add("hidden");
});

document.getElementById("customerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
        userName: document.getElementById("userName").value.trim(),
        email: document.getElementById("email").value.trim()
    };

    const isExist = users.some((u, index) =>
        index !== editIndex &&
        (u.userName === user.userName || u.email === user.email)
    );

    if (isExist) {
        alert("Tài khoản hoặc email đã tồn tại!");
        return;
    }

    const userNew = {
        id: editIndex === null ? Date.now() : users[editIndex].id,
        userName: user.userName,
        email: user.email,
        password: document.getElementById("password").value.trim(),
        fullName: document.getElementById("fullName").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim(),
        role: document.getElementById("role").value.trim(),
        status: document.getElementById("status").value.trim(),
        createdAt: editIndex === null
            ? new Date().toISOString()
            : users[editIndex].createdAt
    };

    if (editIndex === null) {
        users.push(userNew);
    } else {
        users[editIndex] = userNew;
        editIndex = null;
    }

    localStorage.setItem("users", JSON.stringify(users));
    renderUsers();

    document.getElementById("addCustomerForm").classList.add("hidden");
    this.reset();
});


function renderUsers() {
    const tbody = document.getElementById("userList");
    tbody.innerHTML = "";

    users.forEach((u, index) => {
        const row = `
            <tr>
                <td>${u.id}</td>
                <td>${u.userName}</td>
                <td>${u.email}</td>
                <td>${u.role}</td>
                <td>${u.status}</td>
                <td>
                    <button onclick="viewUser(${index})">Xem</button>
                    <button onclick="editUser(${index})">Sửa</button>
                    <button onclick="deleteUser(${index})">Xóa</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// TỰ ĐỘNG CHẠY KHI VÀO ADMIN
document.addEventListener("DOMContentLoaded", renderUsers);

//xem
function viewUser(index) {
    const u = users[index];
    alert(
        `Id: ${u.id}\n` +
        `Tên: ${u.userName}\n` +
        `Email: ${u.email}\n` +
        `Mật khẩu: ${u.password}\n` +
        `Quyền: ${u.role}\n` +
        `Full name: ${u.fullName}\n` +
        `Số điện thoại: ${u.phone}\n` +
        `Địa chỉ: ${u.address}\n` +
        `Trạng thái: ${u.status}\n` +
        `Ngày tạo tài khoản: ${u.createdAt}\n`
    );
}

// sửa
function editUser(index) {
    const u = users[index];
    editIndex = index;

    document.getElementById("userName").value = u.userName;
    document.getElementById("email").value = u.email;
    document.getElementById("password").value = u.password;
    document.getElementById("fullName").value = u.fullName;
    document.getElementById("phone").value = u.phone;
    document.getElementById("address").value = u.address;
    document.getElementById("role").value = u.role;
    document.getElementById("status").value = u.status;

    document.getElementById("addCustomerForm").classList.remove("hidden");
}


//xóa
function deleteUser(index){
    if (confirm("Bạn có chắc muốn xóa người dùng này?")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers();
    }
}