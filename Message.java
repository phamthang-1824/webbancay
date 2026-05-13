package vn.edu.nlu.fit.webancay.model;

import java.util.Date;

public class Message {
    private int id;
    private int userId;       // map từ user_id AS userId
    private String sender;    // "user" hoặc "shop"
    private String content;
    private Date createdAt;   // map từ created_at AS createdAt
    private int isRead;       // map từ is_read AS isRead

    public Message() {}

    public Message(int userId, String sender, String content) {
        this.userId = userId;
        this.sender = sender;
        this.content = content;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getSender() { return sender; }
    public void setSender(String sender) { this.sender = sender; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public Date getCreatedAt() { return createdAt; }
    public void setCreatedAt(Date createdAt) { this.createdAt = createdAt; }

    public int getIsRead() { return isRead; }
    public void setIsRead(int isRead) { this.isRead = isRead; }
}
