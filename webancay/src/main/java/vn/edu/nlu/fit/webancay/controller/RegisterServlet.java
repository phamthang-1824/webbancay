package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.model.User;
import vn.edu.nlu.fit.webancay.services.AuthService;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
    private AuthService authService;

    @Override
    public void init() {
        authService = new AuthService();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Hiển thị trang đăng ký
        request.getRequestDispatcher("/register.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Set encoding UTF-8
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        // Lấy thông tin từ form (THÊM PHONE)
        String lastName = request.getParameter("last-name");
        String firstName = request.getParameter("first-name");
        String gender = request.getParameter("gender");
        String birthdate = request.getParameter("birthdate");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone"); // THÊM
        String password = request.getParameter("password");

        // Map để lưu thông báo lỗi cho từng trường
        Map<String, String> fieldErrors = new HashMap<>();
        boolean hasError = false;

        // Validate required fields
        if (lastName == null || lastName.trim().isEmpty()) {
            hasError = true;
            fieldErrors.put("lastName", "Họ không được để trống");
        }

        if (firstName == null || firstName.trim().isEmpty()) {
            hasError = true;
            fieldErrors.put("firstName", "Tên không được để trống");
        }

        if (gender == null || gender.trim().isEmpty()) {
            hasError = true;
            fieldErrors.put("gender", "Vui lòng chọn giới tính");
        }

        if (email == null || email.trim().isEmpty()) {
            hasError = true;
            fieldErrors.put("email", "Email không được để trống");
        } else if (!email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) {
            hasError = true;
            fieldErrors.put("email", "Email không hợp lệ");
        }

        // Validate phone (không bắt buộc)
        if (phone != null && !phone.trim().isEmpty() && !phone.matches("^(\\+84|0)[0-9]{9,10}$")) {
            hasError = true;
            fieldErrors.put("phone", "Số điện thoại không hợp lệ");
        }

        if (password == null || password.trim().isEmpty()) {
            hasError = true;
            fieldErrors.put("password", "Mật khẩu không được để trống");
        } else if (password.length() < 8) {
            hasError = true;
            fieldErrors.put("password", "Mật khẩu phải có ít nhất 8 ký tự");
        }

        // Kiểm tra email đã tồn tại chưa
        if (email != null && !email.trim().isEmpty() &&
                email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$") &&
                authService.checkEmailExists(email.trim())) {
            hasError = true;
            fieldErrors.put("email", "Email đã được sử dụng");
        }

        if (hasError) {
            // Giữ lại giá trị đã nhập
            request.setAttribute("fieldErrors", fieldErrors);
            request.setAttribute("lastName", lastName);
            request.setAttribute("firstName", firstName);
            request.setAttribute("email", email);
            request.setAttribute("phone", phone); // THÊM
            request.setAttribute("birthdate", birthdate);
            request.setAttribute("gender", gender);
            request.getRequestDispatcher("/register.jsp").forward(request, response);
            return;
        }

        // Đăng ký user
        User newUser = authService.register(lastName.trim(), firstName.trim(),
                gender, birthdate, email.trim(), phone, password); // THÊM phone

        if (newUser != null) {
            // Đăng ký thành công
            request.setAttribute("registerSuccess", true);
            request.setAttribute("successMessage", "Đăng ký thành công!");

            // Xóa các giá trị đã nhập
            request.removeAttribute("lastName");
            request.removeAttribute("firstName");
            request.removeAttribute("email");
            request.removeAttribute("phone"); // THÊM
            request.removeAttribute("birthdate");
            request.removeAttribute("gender");
            request.removeAttribute("fieldErrors");

            // Forward về lại trang đăng ký
            request.getRequestDispatcher("/register.jsp").forward(request, response);
        } else {
            // Đăng ký thất bại
            fieldErrors.put("general", "Đăng ký thất bại");
            request.setAttribute("fieldErrors", fieldErrors);
            request.setAttribute("lastName", lastName);
            request.setAttribute("firstName", firstName);
            request.setAttribute("email", email);
            request.setAttribute("phone", phone); // THÊM
            request.setAttribute("birthdate", birthdate);
            request.setAttribute("gender", gender);
            request.getRequestDispatcher("/register.jsp").forward(request, response);
        }
    }
}