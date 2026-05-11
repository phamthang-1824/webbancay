package vn.edu.nlu.fit.webancay.dao;

import org.jdbi.v3.core.Jdbi;
import vn.edu.nlu.fit.webancay.model.Message;

import java.util.List;

public class MessageDao extends BaseDao {

    /**
     * Lấy toàn bộ lịch sử chat của một user (sắp xếp cũ -> mới)
     */
    public List<Message> getMessagesByUserId(int userId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery(
                                "SELECT id, user_id, sender, content, created_at, is_read " +
                                        "FROM messages WHERE user_id = :userId ORDER BY created_at ASC"
                        )
                        .bind("userId", userId)
                        .mapToBean(Message.class)
                        .list()
        );
    }

    /**
     * Lưu một tin nhắn mới
     */
    public boolean saveMessage(int userId, String sender, String content) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createUpdate(
                                "INSERT INTO messages (user_id, sender, content, created_at) " +
                                        "VALUES (:userId, :sender, :content, NOW())"
                        )
                        .bind("userId", userId)
                        .bind("sender", sender)
                        .bind("content", content)
                        .execute() > 0
        );
    }

    /**
     * Đánh dấu tất cả tin nhắn từ shop là đã đọc (khi user mở chat)
     */
    public void markShopMessagesAsRead(int userId) {
        Jdbi jdbi = get();
        jdbi.withHandle(handle ->
                handle.createUpdate(
                                "UPDATE messages SET is_read = 1 " +
                                        "WHERE user_id = :userId AND sender = 'shop' AND is_read = 0"
                        )
                        .bind("userId", userId)
                        .execute()
        );
    }

    /**
     * Đếm số tin nhắn chưa đọc từ shop (dùng cho badge thông báo)
     */
    public int countUnreadFromShop(int userId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery(
                                "SELECT COUNT(*) FROM messages " +
                                        "WHERE user_id = :userId AND sender = 'shop' AND is_read = 0"
                        )
                        .bind("userId", userId)
                        .mapTo(Integer.class)
                        .one()
        );
    }
}