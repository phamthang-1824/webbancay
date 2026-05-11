package vn.edu.nlu.fit.webancay.dao;

import org.jdbi.v3.core.Jdbi;
import vn.edu.nlu.fit.webancay.model.CartItem;

import java.util.List;

public class CartDao extends BaseDao {

    // Lấy giỏ hàng từ database
    public List<CartItem> getCartByUserId(int userId) {
        Jdbi jdbi = get();
        String sql = "SELECT c.*, p.name, p.price, p.image, p.code FROM cart c " +
                "JOIN products p ON c.product_id = p.id " +
                "WHERE c.user_id = ?";

        try {
            return jdbi.withHandle(handle ->
                    handle.createQuery(sql)
                            .bind(0, userId)
                            .map((rs, ctx) -> {
                                CartItem item = new CartItem();
                                item.setId(rs.getInt("id"));
                                item.setProductId(String.valueOf(rs.getInt("product_id")));
                                item.setProductCode(rs.getString("code"));
                                item.setProductName(rs.getString("name"));
                                item.setPrice(rs.getDouble("price"));
                                item.setQuantity(rs.getInt("quantity"));
                                item.setImageUrl(rs.getString("image"));
                                item.setVariant(rs.getString("variant") != null ? rs.getString("variant") : "Đang cập nhật...");
                                return item;
                            })
                            .list()
            );
        } catch (Exception e) {
            e.printStackTrace();
            return List.of();
        }
    }

    // Xóa giỏ hàng cũ
    public void deleteCartByUserId(int userId) {
        Jdbi jdbi = get();
        try {
            jdbi.useHandle(handle ->
                    handle.createUpdate("DELETE FROM cart WHERE user_id = ?")
                            .bind(0, userId)
                            .execute()
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Thêm sản phẩm vào giỏ
    public void addToCart(int userId, int productId, int quantity, String variant) {
        Jdbi jdbi = get();
        try {
            jdbi.useHandle(handle ->
                    handle.createUpdate("INSERT INTO cart (user_id, product_id, quantity, variant) VALUES (?, ?, ?, ?)")
                            .bind(0, userId)
                            .bind(1, productId)
                            .bind(2, quantity)
                            .bind(3, variant)
                            .execute()
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Lưu toàn bộ giỏ hàng (xóa cũ + thêm mới)
    public void saveCart(int userId, List<CartItem> cart) {
        Jdbi jdbi = get();
        try {
            jdbi.useHandle(handle -> {
                // Xóa giỏ hàng cũ
                handle.createUpdate("DELETE FROM cart WHERE user_id = ?")
                        .bind(0, userId)
                        .execute();

                // Thêm giỏ hàng mới
                for (CartItem item : cart) {
                    handle.createUpdate("INSERT INTO cart (user_id, product_id, quantity, variant) VALUES (?, ?, ?, ?)")
                            .bind(0, userId)
                            .bind(1, Integer.parseInt(item.getProductId()))
                            .bind(2, item.getQuantity())
                            .bind(3, item.getVariant())
                            .execute();
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}