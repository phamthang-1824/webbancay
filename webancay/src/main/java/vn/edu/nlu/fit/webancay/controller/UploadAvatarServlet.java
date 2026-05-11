package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.dao.UserDao;
import vn.edu.nlu.fit.webancay.model.User;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@WebServlet("/UploadAvatarServlet")
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024, // 1MB
        maxFileSize = 1024 * 1024 * 5,   // 5MB
        maxRequestSize = 1024 * 1024 * 10 // 10MB
)
public class UploadAvatarServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        request.setCharacterEncoding("UTF-8");

        // Kiểm tra đăng nhập
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            response.sendRedirect(request.getContextPath() + "/login.jsp");
            return;
        }

        User currentUser = (User) session.getAttribute("user");

        try {
            Part filePart = request.getPart("avatar");

            if (filePart == null || filePart.getSize() == 0) {
                session.setAttribute("error", "Vui lòng chọn ảnh!");
                response.sendRedirect(request.getContextPath() + "/account");
                return;
            }

            // Validate file type
            String contentType = filePart.getContentType();
            if (!contentType.startsWith("image/")) {
                session.setAttribute("error", "Chỉ chấp nhận file ảnh (JPEG, PNG)");
                response.sendRedirect(request.getContextPath() + "/account");
                return;
            }

            // Validate file size (max 1MB)
            if (filePart.getSize() > 1024 * 1024) {
                session.setAttribute("error", "Kích thước file không được vượt quá 1MB");
                response.sendRedirect(request.getContextPath() + "/account");
                return;
            }

            // Lấy tên file gốc và extension
            String submittedFileName = filePart.getSubmittedFileName();
            String originalFileName = Paths.get(submittedFileName).getFileName().toString();
            String fileExtension;

            int lastDotIndex = originalFileName.lastIndexOf(".");
            if (lastDotIndex > 0) {
                fileExtension = originalFileName.substring(lastDotIndex);
            } else {
                fileExtension = ".jpg"; // Mặc định nếu không có extension
            }

            // Tạo tên file mới
            String fileName = "avatar_" + currentUser.getId() + "_" +
                    System.currentTimeMillis() + fileExtension;

            // Tạo thư mục lưu ảnh
            String uploadPath = getServletContext().getRealPath("/uploads/avatars");
            File uploadDir = new File(uploadPath);
            if (!uploadDir.exists()) {
                boolean dirCreated = uploadDir.mkdirs();
                if (!dirCreated) {
                    session.setAttribute("error", "Không thể tạo thư mục lưu ảnh");
                    response.sendRedirect(request.getContextPath() + "/account");
                    return;
                }
            }

            // Lưu file
            Path filePath = Paths.get(uploadPath + File.separator + fileName);
            try (InputStream inputStream = filePart.getInputStream()) {
                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
            }

            // Cập nhật database
            UserDao userDao = new UserDao();
            boolean success = userDao.updateAvatar(currentUser.getId(), fileName);

            if (success) {
                // Cập nhật session
                User updatedUser = userDao.getUserById(currentUser.getId());
                session.setAttribute("user", updatedUser);
                session.setAttribute("message", "Upload ảnh đại diện thành công!");
            } else {
                session.setAttribute("error", "Cập nhật ảnh thất bại");
            }

        } catch (Exception e) {
            System.err.println("Lỗi upload ảnh: " + e.getMessage());
            e.printStackTrace();
            session.setAttribute("error", "Lỗi upload ảnh: " + e.getMessage());
        }

        response.sendRedirect(request.getContextPath() + "/account");
    }
}