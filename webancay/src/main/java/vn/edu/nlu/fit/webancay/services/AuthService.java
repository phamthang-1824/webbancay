package vn.edu.nlu.fit.webancay.services;

import vn.edu.nlu.fit.webancay.dao.UserDao;
import vn.edu.nlu.fit.webancay.model.User;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class AuthService {
    private UserDao userDao = new UserDao();

    public AuthService() {}

    public User login(String email, String password) {
        User u = userDao.getUserByEmail(email);
        if (u == null) return null;
        if (u.getPassword().equals(password)) {
            u.setPassword(null); // Xóa password trước khi trả về

            // ĐẢM BẢO ROLE KHÔNG NULL
            if (u.getRole() == null) {
                u.setRole("user"); // Mặc định nếu null
            }

            return u;
        }
        return null;
    }

    // Phương thức đăng ký mới (CÓ THÊM PHONE)
    public User register(String lastName, String firstName, String gender,
                         String birthdateStr, String email, String phone, String password) {

        // Kiểm tra email đã tồn tại
        if (userDao.checkEmailExists(email)) {
            return null;
        }

        // Chuyển đổi ngày sinh
        Date birthdate = null;
        if (birthdateStr != null && !birthdateStr.trim().isEmpty()) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                java.util.Date utilDate = sdf.parse(birthdateStr);
                birthdate = new Date(utilDate.getTime());
            } catch (ParseException e) {
                // Nếu parse lỗi, để null
                birthdate = null;
            }
        }

        // Tạo user mới (CÓ PHONE)
        if (phone != null && !phone.trim().isEmpty()) {
            return userDao.registerUserWithPhone(lastName, firstName, gender,
                    birthdate, email, phone.trim(), password);
        } else {
            return userDao.registerUser(lastName, firstName, gender,
                    birthdate, email, password);
        }
    }

    // Kiểm tra email tồn tại
    public boolean checkEmailExists(String email) {
        return userDao.checkEmailExists(email);
    }
}