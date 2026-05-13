package vn.edu.nlu.fit.webancay.dao;

import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.mapper.reflect.BeanMapper;
import vn.edu.nlu.fit.webancay.model.Message;

import java.util.List;

public class MessageDao extends BaseDao {

    // ── Lấy lịch sử chat của 1 user (cũ -> mới) ──────────────────────────────
    public List<Message> getMessagesByUserId(int userId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle -> {
            handle.registerRowMapper(BeanMapper.factory(Message.class));
            return handle.createQuery(
                            "SELECT id, user_id AS userId, sender, content, " +
                                    "created_at AS createdAt, is_read AS isRead " +
                                    "FROM messages WHERE user_id = :userId ORDER BY created_at ASC"
                    )
                    .bind("userId", userId)
                    .mapTo(Message.class)
                    .list();
        });
    }

    // ── Lấy danh sách user đã nhắn tin (dùng cho admin) ──────────────────────
    public List<Integer> getUserIdsWithMessages() {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery(
                                "SELECT DISTINCT user_id FROM messages ORDER BY " +
                                        "(SELECT MAX(created_at) FROM messages m2 WHERE m2.user_id = messages.user_id) DESC"
                        )
                        .mapTo(Integer.class)
                        .list()
        );
    }

    // ── Đếm tin nhắn chưa đọc từ user (admin chưa đọc) ──────────────────────
    public int countUnreadFromUser(int userId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery(
                                "SELECT COUNT(*) FROM messages " +
                                        "WHERE user_id = :userId AND sender = 'user' AND is_read = 0"
                        )
                        .bind("userId", userId)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    // ── Lưu tin nhắn mới ─────────────────────────────────────────────────────
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

    // ── Đánh dấu tin nhắn từ shop đã đọc (user mở chat) ─────────────────────
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

    // ── Đánh dấu tin nhắn từ user đã đọc (admin mở chat) ────────────────────
    public void markUserMessagesAsRead(int userId) {
        Jdbi jdbi = get();
        jdbi.withHandle(handle ->
                handle.createUpdate(
                                "UPDATE messages SET is_read = 1 " +
                                        "WHERE user_id = :userId AND sender = 'user' AND is_read = 0"
                        )
                        .bind("userId", userId)
                        .execute()
        );
    }

    // ── Đếm tin nhắn chưa đọc từ shop (user chưa đọc) ───────────────────────
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
