package vn.edu.nlu.fit.webancay.filter;

import vn.edu.nlu.fit.webancay.model.User;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(urlPatterns = {"/admin.jsp", "/admin/*"})
public class AdminFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        HttpSession session = req.getSession(false);

        // Kiểm tra xem có session không
        if (session == null || session.getAttribute("user") == null) {
            // Chưa đăng nhập, chuyển đến trang login
            res.sendRedirect(req.getContextPath() + "/login.jsp");
            return;
        }

        // Lấy user từ session
        User user = (User) session.getAttribute("user");

        // Kiểm tra role
        if (user == null || !"admin".equals(user.getRole())) {
            // Không phải admin, chuyển về trang chủ
            res.sendRedirect(req.getContextPath() + "/index.jsp");
            return;
        }

        // Cho phép truy cập
        chain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Khởi tạo filter
    }

    @Override
    public void destroy() {
        // Hủy filter
    }
}