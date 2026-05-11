package vn.edu.nlu.fit.webancay.model;

import java.time.LocalDateTime;

public class PasswordResetToken {
    private int id;
    private int userId;
    private String token;
    private LocalDateTime expiryDate;
    private boolean used;
    private LocalDateTime createdAt;

    public PasswordResetToken() {}

    public PasswordResetToken(int userId, String token, LocalDateTime expiryDate) {
        this.userId = userId;
        this.token = token;
        this.expiryDate = expiryDate;
        this.used = false;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public LocalDateTime getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDateTime expiryDate) { this.expiryDate = expiryDate; }

    public boolean isUsed() { return used; }
    public void setUsed(boolean used) { this.used = used; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    // Kiểm tra token còn hiệu lực
    public boolean isValid() {
        return !used && expiryDate != null && LocalDateTime.now().isBefore(expiryDate);
    }

    // Kiểm tra token đã hết hạn
    public boolean isExpired() {
        return expiryDate != null && LocalDateTime.now().isAfter(expiryDate);
    }
}