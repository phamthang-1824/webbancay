package vn.edu.nlu.fit.webancay.model;

import java.util.Date;

public class User {
    private int id;
    private String lastName;
    private String firstName;
    private String gender;
    private Date birthdate;
    private String email;
    private String phone;
    private String password;
    private String avatar;
    private String role;
    private Date createdAt;
    private Date updatedAt;

    // Constructors
    public User() {}

    public User(String lastName, String firstName, String gender, Date birthdate, String email, String password) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.gender = gender;
        this.birthdate = birthdate;
        this.email = email;
        this.password = password;
        this.role = "user";
        this.phone = null;
        this.avatar = null;
    }

    // Constructor mới đầy đủ
    public User(String lastName, String firstName, String gender, Date birthdate,
                String email, String phone, String password) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.gender = gender;
        this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.role = "user";
        this.avatar = null;
    }

    // Constructor đầy đủ tất cả trường
    public User(int id, String lastName, String firstName, String gender, Date birthdate,
                String email, String phone, String password, String avatar,
                String role, Date createdAt, Date updatedAt) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.gender = gender;
        this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.avatar = avatar;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public Date getBirthdate() { return birthdate; }
    public void setBirthdate(Date birthdate) { this.birthdate = birthdate; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    // Thêm getter/setter cho phone
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    // Thêm getter/setter cho avatar
    public String getAvatar() { return avatar; }
    public void setAvatar(String avatar) { this.avatar = avatar; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public Date getCreatedAt() { return createdAt; }
    public void setCreatedAt(Date createdAt) { this.createdAt = createdAt; }

    // Thêm getter/setter cho updatedAt
    public Date getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Date updatedAt) { this.updatedAt = updatedAt; }

    // Kiểm tra có phải là admin
    public boolean isAdmin() {
        return "admin".equals(this.role);
    }

    // Thêm phương thức mới
    public String getFullName() {
        return (lastName + " " + firstName).trim();
    }

    public boolean hasAvatar() {
        return avatar != null && !avatar.trim().isEmpty();
    }

    public String getAvatarPath() {
        if (hasAvatar()) {
            return "/uploads/avatars/" + avatar;
        }
        return "/images/default-avatar.png";
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", lastName='" + lastName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", gender='" + gender + '\'' +
                ", birthdate=" + birthdate +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                ", avatar='" + avatar + '\'' +
                ", role='" + role + '\'' +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}