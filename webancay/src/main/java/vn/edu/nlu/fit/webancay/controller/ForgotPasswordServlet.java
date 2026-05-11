package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.services.PasswordResetService;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/forgot-password")
public class ForgotPasswordServlet extends HttpServlet {
    private PasswordResetService passwordResetService;

    @Override
    public void init() {
        passwordResetService = new PasswordResetService();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Hiển thị trang forgot-password.jsp
        request.getRequestDispatcher("/forgot-password.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        String email = request.getParameter("email");
        String error = null;
        String success = null;

        // Validate email
        if (email == null || email.trim().isEmpty()) {
            error = "Vui lòng nhập địa chỉ email";
        } else if (!email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) {
            error = "Email không hợp lệ";
        } else {
            // Xử lý yêu cầu reset password
            boolean emailSent = passwordResetService.requestPasswordReset(email.trim(), request);

            if (emailSent) {
                // Hiển thị thông báo thành công (không tiết lộ email có tồn tại không)
                success = "Liên kết đặt lại mật khẩu đã được gửi đến email của bạn.<br>" +
                        "Vui lòng kiểm tra hộp thư đến và thư mục spam.";
            } else {
                // Hiển thị thông báo chung (bảo mật)
                success = "Nếu email tồn tại trong hệ thống, liên kết đặt lại mật khẩu sẽ được gửi.";
            }
        }

        // Gửi thông báo về JSP
        if (error != null) {
            request.setAttribute("error", error);
            request.setAttribute("email", email);
        } else {
            request.setAttribute("success", success);
        }

        request.getRequestDispatcher("/forgot-password.jsp").forward(request, response);
    }
}