package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.dao.UserDao;
import vn.edu.nlu.fit.webancay.model.User;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.text.SimpleDateFormat;

@WebServlet("/account")
public class AccountServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Kiểm tra đăng nhập
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            response.sendRedirect("login.jsp");
            return;
        }

        User user = (User) session.getAttribute("user");

        // Format ngày sinh thành dd/MM/yyyy để hiển thị
        if (user.getBirthdate() != null) {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
            String formattedDate = sdf.format(user.getBirthdate());
            request.setAttribute("formattedBirthdate", formattedDate);
        }

        // Hiển thị thông báo nếu có
        String message = (String) session.getAttribute("message");
        String error = (String) session.getAttribute("error");

        if (message != null) {
            request.setAttribute("message", message);
            session.removeAttribute("message");
        }

        if (error != null) {
            request.setAttribute("error", error);
            session.removeAttribute("error");
        }

        request.getRequestDispatcher("account.jsp").forward(request, response);
    }
}