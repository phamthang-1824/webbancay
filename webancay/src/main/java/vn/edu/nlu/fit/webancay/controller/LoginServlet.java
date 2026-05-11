package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.model.User;
import vn.edu.nlu.fit.webancay.services.AuthService;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.util.*;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private AuthService authService;

    @Override
    public void init() {
        authService = new AuthService();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Check success parameter từ đăng ký
        String success = request.getParameter("success");
        if (success != null && success.equals("register")) {
            request.setAttribute("success", success);

            // Lấy thông tin họ tên từ register
            String firstName = request.getParameter("firstName");
            String lastName = request.getParameter("lastName");

            if (firstName != null && lastName != null) {
                request.setAttribute("registeredUserName", firstName + " " + lastName);
            }
        }

        request.getRequestDispatcher("/login.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        Map<String, String> fieldErrors = new HashMap<>();
        List<String> errors = new ArrayList<>();

        // Validate
        if (email == null || email.trim().isEmpty()) {
            fieldErrors.put("email", "Email không được để trống");
            errors.add("Email không được để trống");
        }

        if (password == null || password.trim().isEmpty()) {
            fieldErrors.put("password", "Mật khẩu không được để trống");
            errors.add("Mật khẩu không được để trống");
        }

        if (!fieldErrors.isEmpty()) {
            request.setAttribute("fieldErrors", fieldErrors);
            request.setAttribute("errors", errors);
            request.setAttribute("email", email);
            request.getRequestDispatcher("/login.jsp").forward(request, response);
            return;
        }

        // Đăng nhập
        User user = authService.login(email.trim(), password);

        if (user != null) {
            // Đăng nhập thành công
            HttpSession session = request.getSession();
            session.setAttribute("user", user);
            session.setAttribute("isLoggedIn", true);

            // Lưu role vào session
            session.setAttribute("role", user.getRole());

            String fullName = user.getFirstName() + " " + user.getLastName();
            session.setAttribute("userName", fullName);

            // Gửi thông tin thành công về login.jsp
            request.setAttribute("loginSuccess", true);
            request.setAttribute("userFullName", fullName);
            request.setAttribute("email", email); // Giữ lại email đã nhập

            //  Phân quyền chuyển hướng
            if ("admin".equals(user.getRole())) {
                // Nếu là ADMIN, chuyển đến trang admin
                response.sendRedirect(request.getContextPath() + "/admin.jsp");
                return;
            } else {
                // Nếu là USER, hiển thị thông báo trên trang login
                request.getRequestDispatcher("/login.jsp").forward(request, response);
            }

        } else {
            // Đăng nhập thất bại
            errors.add("Email hoặc mật khẩu không đúng");
            request.setAttribute("errors", errors);
            request.setAttribute("email", email);
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        }
    }
}