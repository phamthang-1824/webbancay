package vn.edu.nlu.fit.webancay.dao;

import org.jdbi.v3.core.Jdbi;
import vn.edu.nlu.fit.webancay.model.PasswordResetToken;

public class PasswordResetTokenDao extends BaseDao {

    // Lưu token vào database
    public boolean saveToken(PasswordResetToken token) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle -> {
            int rows = handle.createUpdate(
                            "INSERT INTO password_reset (user_id, token, expiry_date, used) " +
                                    "VALUES (:userId, :token, :expiryDate, :used)")
                    .bind("userId", token.getUserId())
                    .bind("token", token.getToken())
                    .bind("expiryDate", token.getExpiryDate())
                    .bind("used", token.isUsed())
                    .execute();
            return rows > 0;
        });
    }

    // Tìm token bằng token string
    public PasswordResetToken findByToken(String token) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM password_reset WHERE token = :token")
                        .bind("token", token)
                        .mapToBean(PasswordResetToken.class)
                        .findFirst()
                        .orElse(null)
        );
    }

    // Tìm token còn hiệu lực cho user
    public PasswordResetToken findValidTokenByUserId(int userId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM password_reset " +
                                "WHERE user_id = :userId AND used = false AND expiry_date > NOW()")
                        .bind("userId", userId)
                        .mapToBean(PasswordResetToken.class)
                        .findFirst()
                        .orElse(null)
        );
    }

    // Đánh dấu token đã sử dụng
    public boolean markTokenAsUsed(String token) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createUpdate("UPDATE password_reset SET used = true WHERE token = :token")
                        .bind("token", token)
                        .execute() > 0
        );
    }

    // Xóa token cũ của user
    public boolean deleteOldTokens(int userId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createUpdate("DELETE FROM password_reset WHERE user_id = :userId")
                        .bind("userId", userId)
                        .execute() > 0
        );
    }

    // Kiểm tra token có tồn tại và còn hiệu lực không
    public boolean isValidToken(String token) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT COUNT(*) FROM password_reset " +
                                "WHERE token = :token AND used = false AND expiry_date > NOW()")
                        .bind("token", token)
                        .mapTo(Integer.class)
                        .one() > 0
        );
    }
}