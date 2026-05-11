package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.dao.UserDao;
import vn.edu.nlu.fit.webancay.model.User;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.sql.Date;
import java.text.SimpleDateFormat;

@WebServlet("/UpdateProfileServlet")
public class UpdateProfileServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        request.setCharacterEncoding("UTF-8");

        // Kiểm tra đăng nhập
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            response.sendRedirect("login.jsp");
            return;
        }

        User currentUser = (User) session.getAttribute("user");

        try {
            // Lấy dữ liệu từ form
            String lastName = request.getParameter("last_name");
            String firstName = request.getParameter("first_name");
            String gender = request.getParameter("gender");
            String birthdateStr = request.getParameter("birthdate");
            String phone = request.getParameter("phone");

            // Xử lý ngày sinh
            Date birthdate = parseBirthdate(birthdateStr, currentUser.getBirthdate());

            // Cập nhật thông tin
            UserDao userDao = new UserDao();
            boolean success = userDao.updateUserProfile(currentUser.getId(),
                    lastName != null ? lastName : currentUser.getLastName(),
                    firstName != null ? firstName : currentUser.getFirstName(),
                    gender != null ? gender : currentUser.getGender(),
                    birthdate,
                    phone != null ? phone : currentUser.getPhone());

            if (success) {
                // Lấy user mới từ database
                User updatedUser = userDao.getUserById(currentUser.getId());
                session.setAttribute("user", updatedUser);
                session.setAttribute("message", "Cập nhật thông tin thành công!");
            } else {
                session.setAttribute("error", "Cập nhật thất bại!");
            }

        } catch (Exception e) {
            session.setAttribute("error", "Lỗi: " + e.getMessage());
        }

        response.sendRedirect("account");
    }

    // Phương thức helper để parse ngày sinh
    private Date parseBirthdate(String birthdateStr, java.util.Date currentBirthdate) {
        if (birthdateStr != null && !birthdateStr.trim().isEmpty()) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                java.util.Date utilDate = sdf.parse(birthdateStr);
                return new Date(utilDate.getTime());
            } catch (Exception e) {
                // Nếu parse lỗi, giữ nguyên ngày sinh cũ
            }
        }
        return currentBirthdate != null ? new Date(currentBirthdate.getTime()) : null;
    }
}