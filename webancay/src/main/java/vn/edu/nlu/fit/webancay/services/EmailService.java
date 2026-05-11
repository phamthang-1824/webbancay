package vn.edu.nlu.fit.webancay.services;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Properties;
import java.util.logging.Logger;
import javax.mail.*;
import javax.mail.internet.*;

public class EmailService {
    // Cấu hình SMTP - ĐÃ CẬP NHẬT PASSWORD MỚI
    private static final String SMTP_HOST = "smtp.gmail.com";
    private static final String SMTP_PORT = "587";
    private static final String SMTP_USERNAME = "hn516613@gmail.com";      // GMAIL
    private static final String SMTP_PASSWORD = "qpnc seiv wqtn ohsr";     // APP PASSWORD MỚI

    private static final Logger logger = Logger.getLogger(EmailService.class.getName());

    public boolean sendPasswordResetEmail(String toEmail, String userName, String resetLink) {
        try {
            // 1. Cấu hình properties
            Properties props = new Properties();
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.host", SMTP_HOST);
            props.put("mail.smtp.port", SMTP_PORT);

            // 2. Tạo session
            Session session = Session.getInstance(props,
                    new javax.mail.Authenticator() {
                        @Override
                        protected PasswordAuthentication getPasswordAuthentication() {
                            return new PasswordAuthentication(SMTP_USERNAME, SMTP_PASSWORD);
                        }
                    });

            // 3. Tạo message
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(SMTP_USERNAME));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse(toEmail));
            message.setSubject("Đặt lại mật khẩu - Cây Xanh Việt");

            // 4. Nội dung email đơn giản
            String content = "Xin chào " + userName + ",\n\n" +
                    "Nhấp vào link sau để đặt lại mật khẩu:\n" +
                    resetLink + "\n\n" +
                    "Link có hiệu lực trong 15 phút.\n\n" +
                    "Trân trọng,\nCây Xanh Việt";

            message.setText(content);

            // 5. Gửi email
            Transport.send(message);

            logger.info("Email đã gửi thành công đến: " + toEmail);
            return true;

        } catch (MessagingException e) {
            logger.severe("Lỗi gửi email đến " + toEmail + ": " + e.getMessage());
            return false;
        }
    }

    public String generateResetLink(HttpServletRequest request, String token) {
        String baseUrl = request.getScheme() + "://" +
                request.getServerName() + ":" +
                request.getServerPort() +
                request.getContextPath();
        return baseUrl + "/reset-password?token=" + token;
    }
}