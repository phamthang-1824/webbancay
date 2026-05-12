package vn.edu.nlu.fit.webancay.controller;

import com.google.gson.Gson;
import vn.edu.nlu.fit.webancay.dao.UserDao;
import vn.edu.nlu.fit.webancay.model.User;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

@WebServlet("/UpdateProfileServlet")
public class UpdateProfileServlet extends HttpServlet {

    private final Gson gson = new Gson();

    // Regex kiểm tra số điện thoại Việt Nam
    private static final Pattern PHONE_PATTERN =
            Pattern.compile("^(0|\\+84)(3[2-9]|5[6-9]|7[0|6-9]|8[0-9]|9[0-9])[0-9]{7}$");

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=UTF-8");

        // Kiểm tra đăng nhập
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            sendJson(response, false, "Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
            return;
        }

        User currentUser = (User) session.getAttribute("user");

        try {
            // ── Lấy dữ liệu từ form ──────────────────────────────────────────────
            String lastName  = trim(request.getParameter("last_name"));
            String firstName = trim(request.getParameter("first_name"));
            String gender    = trim(request.getParameter("gender"));
            String phone     = trim(request.getParameter("phone"));
            String birthdateStr = trim(request.getParameter("birthdate"));

            // ── Validate ─────────────────────────────────────────────────────────
            if (lastName.isEmpty()) {
                sendJson(response, false, "Họ không được để trống.");
                return;
            }
            if (firstName.isEmpty()) {
                sendJson(response, false, "Tên không được để trống.");
                return;
            }
            if (lastName.length() > 50 || firstName.length() > 50) {
                sendJson(response, false, "Họ và tên không được vượt quá 50 ký tự.");
                return;
            }
            if (!gender.equals("male") && !gender.equals("female")) {
                sendJson(response, false, "Giới tính không hợp lệ.");
                return;
            }
            if (!phone.isEmpty() && !PHONE_PATTERN.matcher(phone).matches()) {
                sendJson(response, false, "Số điện thoại không hợp lệ. Ví dụ: 0901234567");
                return;
            }

            // Parse ngày sinh
            Date birthdate = parseBirthdate(birthdateStr, currentUser.getBirthdate());

            // ── Cập nhật DB ───────────────────────────────────────────────────────
            UserDao userDao = new UserDao();
            boolean success = userDao.updateUserProfile(
                    currentUser.getId(),
                    lastName,
                    firstName,
                    gender,
                    birthdate,
                    phone.isEmpty() ? null : phone
            );

            if (success) {
                // Lấy lại user mới nhất từ DB và cập nhật session
                User updatedUser = userDao.getUserById(currentUser.getId());
                session.setAttribute("user", updatedUser);

                // Trả về thông tin mới để JS cập nhật UI ngay (không cần reload)
                Map<String, Object> data = new HashMap<>();
                data.put("fullName", updatedUser.getLastName() + " " + updatedUser.getFirstName());
                data.put("lastName",  updatedUser.getLastName());
                data.put("firstName", updatedUser.getFirstName());
                data.put("phone",    updatedUser.getPhone() != null ? updatedUser.getPhone() : "");
                data.put("gender",   updatedUser.getGender());

                if (updatedUser.getBirthdate() != null) {
                    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                    data.put("birthdate", sdf.format(updatedUser.getBirthdate()));
                }

                sendJsonWithData(response, true, "Cập nhật thông tin thành công!", data);
            } else {
                sendJson(response, false, "Cập nhật thất bại! Vui lòng thử lại.");
            }

        } catch (Exception e) {
            e.printStackTrace();
            sendJson(response, false, "Lỗi server: " + e.getMessage());
        }
    }

    // ─── Helpers ─────────────────────────────────────────────────────────────────

    private String trim(String s) {
        return s != null ? s.trim() : "";
    }

    private Date parseBirthdate(String birthdateStr, java.util.Date current) {
        if (birthdateStr != null && !birthdateStr.trim().isEmpty()) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                sdf.setLenient(false); // Không chấp nhận ngày ảo (vd: 32/13/2000)
                java.util.Date utilDate = sdf.parse(birthdateStr.trim());
                return new Date(utilDate.getTime());
            } catch (Exception ignored) {
                // Ngày không hợp lệ -> giữ nguyên
            }
        }
        return current != null ? new Date(current.getTime()) : null;
    }

    private void sendJson(HttpServletResponse response, boolean success, String message)
            throws IOException {
        Map<String, Object> map = new HashMap<>();
        map.put("success", success);
        map.put("message", message);
        PrintWriter out = response.getWriter();
        out.print(gson.toJson(map));
        out.flush();
    }

    private void sendJsonWithData(HttpServletResponse response, boolean success,
                                  String message, Object data) throws IOException {
        Map<String, Object> map = new HashMap<>();
        map.put("success", success);
        map.put("message", message);
        map.put("data", data);
        PrintWriter out = response.getWriter();
        out.print(gson.toJson(map));
        out.flush();
    }
}