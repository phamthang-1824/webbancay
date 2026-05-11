package vn.edu.nlu.fit.webancay.services;

import vn.edu.nlu.fit.webancay.dao.PasswordResetTokenDao;
import vn.edu.nlu.fit.webancay.dao.UserDao;
import vn.edu.nlu.fit.webancay.model.PasswordResetToken;
import vn.edu.nlu.fit.webancay.model.User;
import jakarta.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.UUID;

public class PasswordResetService {
    private final PasswordResetTokenDao tokenDao;
    private final UserDao userDao;
    private final EmailService emailService;

    public PasswordResetService() {
        this.tokenDao = new PasswordResetTokenDao();
        this.userDao = new UserDao();
        this.emailService = new EmailService();
    }

    // Yêu cầu reset password
    public boolean requestPasswordReset(String email, HttpServletRequest request) {
        User user = userDao.getUserByEmail(email);
        if (user == null) {
            return false;
        }

        tokenDao.deleteOldTokens(user.getId());

        String token = generateToken();
        LocalDateTime expiryDate = calculateExpiryDate();
        PasswordResetToken resetToken = new PasswordResetToken(user.getId(), token, expiryDate);

        if (!tokenDao.saveToken(resetToken)) {
            return false;
        }

        String resetLink = emailService.generateResetLink(request, token);
        String userName = user.getFirstName() + " " + user.getLastName();

        return emailService.sendPasswordResetEmail(user.getEmail(), userName, resetLink);
    }

    // Reset password
    public boolean resetPassword(String token, String newPassword) {
        PasswordResetToken resetToken = tokenDao.findByToken(token);
        if (resetToken == null || !resetToken.isValid()) {
            return false;
        }

        User user = userDao.getUserById(resetToken.getUserId());
        if (user == null) {
            return false;
        }

        boolean updated = userDao.updatePassword(user.getId(), newPassword);
        if (!updated) {
            return false;
        }

        tokenDao.markTokenAsUsed(token);
        return true;
    }

    // Kiểm tra token có hợp lệ không
    public boolean isValidToken(String token) {
        return tokenDao.isValidToken(token);
    }

    // Lấy user từ token
    public User getUserByToken(String token) {
        PasswordResetToken resetToken = tokenDao.findByToken(token);
        if (resetToken == null || !resetToken.isValid()) {
            return null;
        }
        return userDao.getUserById(resetToken.getUserId());
    }

    // ========== PRIVATE METHODS ==========
    private String generateToken() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    private LocalDateTime calculateExpiryDate() {
        return LocalDateTime.now().plusMinutes(15);
    }
}