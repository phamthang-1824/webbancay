package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.services.PasswordResetService;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/reset-password")
public class ResetPasswordServlet extends HttpServlet {
    private PasswordResetService passwordResetService;

    @Override
    public void init() {
        passwordResetService = new PasswordResetService();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String token = request.getParameter("token");

        if (token == null || token.trim().isEmpty()) {
            response.sendRedirect(request.getContextPath() + "/forgot-password");
            return;
        }

        // Kiểm tra token có hợp lệ không
        if (!passwordResetService.isValidToken(token)) {
            request.setAttribute("error", "Liên kết đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.");
            request.setAttribute("showForgotPasswordLink", true);
            request.getRequestDispatcher("/reset-password.jsp").forward(request, response); // SỬA: .css → .jsp
            return;
        }

        // Token hợp lệ, hiển thị form nhập mật khẩu mới
        request.setAttribute("token", token);
        request.getRequestDispatcher("/reset-password.jsp").forward(request, response); // SỬA: .css → .jsp
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        String token = request.getParameter("token");
        String newPassword = request.getParameter("newPassword");
        String confirmPassword = request.getParameter("confirmPassword");
        String error = null;
        String success = null;

        // Validate
        if (token == null || token.trim().isEmpty()) {
            error = "Token không hợp lệ";
        } else if (newPassword == null || newPassword.trim().isEmpty()) {
            error = "Vui lòng nhập mật khẩu mới";
        } else if (newPassword.length() < 6) { // Sửa từ 8 thành 6 để phù hợp với form
            error = "Mật khẩu phải có ít nhất 6 ký tự";
        } else if (!newPassword.equals(confirmPassword)) {
            error = "Mật khẩu xác nhận không khớp";
        } else {
            // Reset password
            boolean resetSuccess = passwordResetService.resetPassword(token, newPassword);

            if (resetSuccess) {
                success = "Mật khẩu đã được đặt lại thành công.<br>" +
                        "Vui lòng đăng nhập bằng mật khẩu mới.";
                request.setAttribute("showLoginLink", true);
            } else {
                error = "Đặt lại mật khẩu thất bại. Liên kết có thể đã hết hạn.";
                request.setAttribute("showForgotPasswordLink", true);
            }
        }

        // Gửi thông báo về JSP
        if (error != null) {
            request.setAttribute("error", error);
            request.setAttribute("token", token);
        } else {
            request.setAttribute("success", success);
        }

        request.getRequestDispatcher("/reset-password.jsp").forward(request, response);
    }
}