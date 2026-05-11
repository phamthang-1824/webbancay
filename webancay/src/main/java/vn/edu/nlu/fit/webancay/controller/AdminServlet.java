package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.dao.UserDao;
import vn.edu.nlu.fit.webancay.model.User;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@WebServlet("/admin/manage")
public class AdminServlet extends HttpServlet {
    private final UserDao userDao = new UserDao();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        if (isAdminAuthenticated(request, response)) {
            // Lấy danh sách tất cả user
            List<User> users = userDao.getAllUsers();
            request.setAttribute("users", users);

            // Chuyển đến trang admin.jsp
            try {
                request.getRequestDispatcher("/admin.jsp").forward(request, response);
            } catch (ServletException e) {
                throw new IOException("Servlet exception during forwarding", e);
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        if (isAdminAuthenticated(request, response)) {
            String action = request.getParameter("action");
            String userIdStr = request.getParameter("userId");

            if ("updateRole".equals(action) && userIdStr != null) {
                try {
                    int userId = Integer.parseInt(userIdStr);
                    String newRole = request.getParameter("role");

                    if ("admin".equals(newRole) || "user".equals(newRole)) {
                        userDao.updateUserRole(userId, newRole);
                    }
                } catch (NumberFormatException e) {
                    // Không làm gì nếu ID không hợp lệ
                }
            }

            // Quay lại trang admin
            response.sendRedirect(request.getContextPath() + "/admin/manage");
        }
    }

    /**
     * Kiểm tra xem người dùng đã đăng nhập và có quyền admin không
     * Trả về true nếu là admin hợp lệ, false nếu không
     */
    private boolean isAdminAuthenticated(HttpServletRequest request,
                                         HttpServletResponse response)
            throws IOException {

        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            response.sendRedirect(request.getContextPath() + "/login.jsp");
            return false;
        }

        User currentUser = (User) session.getAttribute("user");
        if (!"admin".equals(currentUser.getRole())) {
            response.sendRedirect(request.getContextPath() + "/index.jsp");
            return false;
        }

        return true;
    }
}