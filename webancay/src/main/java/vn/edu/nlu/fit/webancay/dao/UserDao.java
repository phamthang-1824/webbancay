package vn.edu.nlu.fit.webancay.dao;

import org.jdbi.v3.core.Jdbi;
import vn.edu.nlu.fit.webancay.model.User;

import java.util.List;

public class UserDao extends BaseDao {

    public User getUserByEmail(String email) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM users WHERE email = :email")
                        .bind("email", email)
                        .mapToBean(User.class)
                        .findFirst()
                        .orElse(null)
        );
    }

    // Kiểm tra email đã tồn tại chưa
    public boolean checkEmailExists(String email) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT COUNT(*) FROM users WHERE email = :email")
                        .bind("email", email)
                        .mapTo(Integer.class)
                        .one() > 0
        );
    }

    // Thêm người dùng mới
    public boolean addUser(User user) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle -> {
            int rows = handle.createUpdate(
                            "INSERT INTO users (last_name, first_name, gender, birthdate, email, phone, password, role) " +
                                    "VALUES (:lastName, :firstName, :gender, :birthdate, :email, :phone, :password, :role)")
                    .bindBean(user)
                    .execute();
            return rows > 0;
        });
    }

    // Đăng ký người dùng mới (role mặc định là 'user')
    public User registerUser(String lastName, String firstName, String gender,
                             java.sql.Date birthdate, String email, String password) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle -> {
            // Kiểm tra email đã tồn tại chưa
            if (checkEmailExists(email)) {
                return null;
            }

            // Thêm vào database với role mặc định 'user' (phone để NULL)
            int id = handle.createUpdate(
                            "INSERT INTO users (last_name, first_name, gender, birthdate, email, password, role) " +
                                    "VALUES (:lastName, :firstName, :gender, :birthdate, :email, :password, 'user')")
                    .bind("lastName", lastName)
                    .bind("firstName", firstName)
                    .bind("gender", gender)
                    .bind("birthdate", birthdate)
                    .bind("email", email)
                    .bind("password", password)
                    .executeAndReturnGeneratedKeys("id")
                    .mapTo(Integer.class)
                    .one();

            // Lấy user vừa tạo
            User user = new User();
            user.setId(id);
            user.setLastName(lastName);
            user.setFirstName(firstName);
            user.setGender(gender);
            user.setBirthdate(birthdate);
            user.setEmail(email);
            user.setPassword(password);
            user.setRole("user");  // ← SET ROLE MẶC ĐỊNH
            user.setPhone(null);   // ← PHONE MẶC ĐỊNH NULL
            user.setAvatar(null);  // ← AVATAR MẶC ĐỊNH NULL

            return user;
        });
    }

    // Đăng ký người dùng mới có phone
    public User registerUserWithPhone(String lastName, String firstName, String gender,
                                      java.sql.Date birthdate, String email,
                                      String phone, String password) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle -> {
            // Kiểm tra email đã tồn tại chưa
            if (checkEmailExists(email)) {
                return null;
            }

            // Thêm vào database với đầy đủ thông tin
            int id = handle.createUpdate(
                            "INSERT INTO users (last_name, first_name, gender, birthdate, email, phone, password, role) " +
                                    "VALUES (:lastName, :firstName, :gender, :birthdate, :email, :phone, :password, 'user')")
                    .bind("lastName", lastName)
                    .bind("firstName", firstName)
                    .bind("gender", gender)
                    .bind("birthdate", birthdate)
                    .bind("email", email)
                    .bind("phone", phone)
                    .bind("password", password)
                    .executeAndReturnGeneratedKeys("id")
                    .mapTo(Integer.class)
                    .one();

            // Lấy user vừa tạo
            User user = new User();
            user.setId(id);
            user.setLastName(lastName);
            user.setFirstName(firstName);
            user.setGender(gender);
            user.setBirthdate(birthdate);
            user.setEmail(email);
            user.setPhone(phone);
            user.setPassword(password);
            user.setRole("user");
            user.setAvatar(null);

            return user;
        });
    }

    // Lấy tất cả users (dành cho admin)
    public List<User> getAllUsers() {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM users ORDER BY id DESC")
                        .mapToBean(User.class)
                        .list()
        );
    }

    // Cập nhật role của user (dành cho admin)
    public boolean updateUserRole(int userId, String role) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createUpdate("UPDATE users SET role = :role WHERE id = :id")
                        .bind("role", role)
                        .bind("id", userId)
                        .execute() > 0
        );
    }

    // Lấy user by ID
    public User getUserById(int userId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM users WHERE id = :id")
                        .bind("id", userId)
                        .mapToBean(User.class)
                        .findFirst()
                        .orElse(null)
        );
    }

    // Cập nhật password
    public boolean updatePassword(int userId, String newPassword) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createUpdate("UPDATE users SET password = :password WHERE id = :id")
                        .bind("password", newPassword)
                        .bind("id", userId)
                        .execute() > 0
        );
    }

    // PHƯƠNG THỨC KIỂM TRA USER ID CÓ TỒN TẠI
    public boolean userExists(int userId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT COUNT(*) FROM users WHERE id = :id")
                        .bind("id", userId)
                        .mapTo(Integer.class)
                        .one() > 0
        );
    }

    // Cập nhật avatar
    public boolean updateAvatar(int userId, String avatarFilename) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createUpdate("UPDATE users SET avatar = :avatar WHERE id = :id")
                        .bind("avatar", avatarFilename)
                        .bind("id", userId)
                        .execute() > 0
        );
    }

    // Cập nhật thông tin hồ sơ người dùng (PHƯƠNG THỨC MỚI)
    public boolean updateUserProfile(int userId, String lastName, String firstName,
                                     String gender, java.sql.Date birthdate, String phone) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle -> {
            String sql = "UPDATE users SET " +
                    "last_name = :lastName, " +
                    "first_name = :firstName, " +
                    "gender = :gender, " +
                    "birthdate = :birthdate, " +
                    "phone = :phone, " +
                    "updated_at = NOW() " +
                    "WHERE id = :id";

            return handle.createUpdate(sql)
                    .bind("lastName", lastName)
                    .bind("firstName", firstName)
                    .bind("gender", gender)
                    .bind("birthdate", birthdate)
                    .bind("phone", phone)
                    .bind("id", userId)
                    .execute() > 0;
        });
    }
}