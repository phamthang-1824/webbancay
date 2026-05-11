package vn.edu.nlu.fit.webancay.dao;

import org.jdbi.v3.core.Jdbi;
import vn.edu.nlu.fit.webancay.model.Order;
import vn.edu.nlu.fit.webancay.model.OrderItem;

import java.util.List;

public class OrderDao extends BaseDao {

    // Tạo đơn hàng mới
    public int createOrder(Order order) {
        Jdbi jdbi = get();
        String sql = "INSERT INTO orders (order_number, user_id, customer_name, customer_phone, " +
                "customer_email, province, district, ward, street_address, full_address, notes, " +
                "subtotal, shipping_fee, discount, total, payment_method, shipping_method, status, order_date) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try {
            return jdbi.withHandle(handle ->
                    handle.createUpdate(sql)
                            .bind(0, order.getOrderNumber())
                            .bind(1, order.getUserId())
                            .bind(2, order.getCustomerName())
                            .bind(3, order.getCustomerPhone())
                            .bind(4, order.getCustomerEmail())
                            .bind(5, order.getProvince())
                            .bind(6, order.getDistrict())
                            .bind(7, order.getWard())
                            .bind(8, order.getStreetAddress())
                            .bind(9, order.getFullAddress())
                            .bind(10, order.getNotes())
                            .bind(11, order.getSubtotal())
                            .bind(12, order.getShippingFee())
                            .bind(13, order.getDiscount())
                            .bind(14, order.getTotal())
                            .bind(15, order.getPaymentMethod())
                            .bind(16, order.getShippingMethod())
                            .bind(17, order.getStatus())
                            .bind(18, new java.sql.Timestamp(order.getOrderDate().getTime()))
                            .executeAndReturnGeneratedKeys()
                            .mapTo(int.class)
                            .one()
            );
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }

    // Thêm chi tiết đơn hàng
    public void addOrderItem(int orderId, OrderItem item) {
        Jdbi jdbi = get();
        String sql = "INSERT INTO order_items (order_id, product_id, product_code, product_name, " +
                "product_image, variant, price, quantity, total_price) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try {
            jdbi.useHandle(handle ->
                    handle.createUpdate(sql)
                            .bind(0, orderId)
                            .bind(1, item.getProductId())
                            .bind(2, item.getProductCode())
                            .bind(3, item.getProductName())
                            .bind(4, item.getProductImage())
                            .bind(5, item.getVariant())
                            .bind(6, item.getPrice())
                            .bind(7, item.getQuantity())
                            .bind(8, item.getTotalPrice())
                            .execute()
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Lấy đơn hàng theo ID
    public Order getOrderById(int id) {
        Jdbi jdbi = get();
        String sql = "SELECT * FROM orders WHERE id = ?";

        try {
            return jdbi.withHandle(handle ->
                    handle.createQuery(sql)
                            .bind(0, id)
                            .map((rs, ctx) -> {
                                Order order = new Order();
                                order.setId(rs.getInt("id"));
                                order.setOrderNumber(rs.getString("order_number"));
                                order.setUserId(rs.getInt("user_id"));
                                order.setCustomerName(rs.getString("customer_name"));
                                order.setCustomerPhone(rs.getString("customer_phone"));
                                order.setCustomerEmail(rs.getString("customer_email"));
                                order.setProvince(rs.getString("province"));
                                order.setDistrict(rs.getString("district"));
                                order.setWard(rs.getString("ward"));
                                order.setStreetAddress(rs.getString("street_address"));
                                order.setNotes(rs.getString("notes"));
                                order.setSubtotal(rs.getDouble("subtotal"));
                                order.setShippingFee(rs.getDouble("shipping_fee"));
                                order.setDiscount(rs.getDouble("discount"));
                                order.setTotal(rs.getDouble("total"));
                                order.setPaymentMethod(rs.getString("payment_method"));
                                order.setShippingMethod(rs.getString("shipping_method"));
                                order.setStatus(rs.getString("status"));
                                order.setOrderDate(rs.getTimestamp("order_date"));
                                return order;
                            })
                            .findOne()
                            .orElse(null)
            );
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // Lấy chi tiết đơn hàng
    public List<OrderItem> getOrderItems(int orderId) {
        Jdbi jdbi = get();
        String sql = "SELECT * FROM order_items WHERE order_id = ?";

        try {
            return jdbi.withHandle(handle ->
                    handle.createQuery(sql)
                            .bind(0, orderId)
                            .map((rs, ctx) -> {
                                OrderItem item = new OrderItem();
                                item.setId(rs.getInt("id"));
                                item.setOrderId(rs.getInt("order_id"));
                                item.setProductId(rs.getInt("product_id"));
                                item.setProductCode(rs.getString("product_code"));
                                item.setProductName(rs.getString("product_name"));
                                item.setProductImage(rs.getString("product_image"));
                                item.setVariant(rs.getString("variant"));
                                item.setPrice(rs.getDouble("price"));
                                item.setQuantity(rs.getInt("quantity"));
                                item.setTotalPrice(rs.getDouble("total_price"));
                                return item;
                            })
                            .list()
            );
        } catch (Exception e) {
            e.printStackTrace();
            return List.of();
        }
    }

    // Lấy đơn hàng theo user
    public List<Order> getOrdersByUserId(int userId) {
        Jdbi jdbi = get();
        String sql = "SELECT * FROM orders WHERE user_id = ? ORDER BY order_date DESC";

        try {
            return jdbi.withHandle(handle ->
                    handle.createQuery(sql)
                            .bind(0, userId)
                            .map((rs, ctx) -> {
                                Order order = new Order();
                                order.setId(rs.getInt("id"));
                                order.setOrderNumber(rs.getString("order_number"));
                                order.setUserId(rs.getInt("user_id"));
                                order.setCustomerName(rs.getString("customer_name"));
                                order.setCustomerPhone(rs.getString("customer_phone"));
                                order.setCustomerEmail(rs.getString("customer_email"));
                                order.setProvince(rs.getString("province"));
                                order.setDistrict(rs.getString("district"));
                                order.setWard(rs.getString("ward"));
                                order.setStreetAddress(rs.getString("street_address"));
                                order.setNotes(rs.getString("notes"));
                                order.setSubtotal(rs.getDouble("subtotal"));
                                order.setShippingFee(rs.getDouble("shipping_fee"));
                                order.setDiscount(rs.getDouble("discount"));
                                order.setTotal(rs.getDouble("total"));
                                order.setPaymentMethod(rs.getString("payment_method"));
                                order.setShippingMethod(rs.getString("shipping_method"));
                                order.setStatus(rs.getString("status"));
                                order.setOrderDate(rs.getTimestamp("order_date"));
                                return order;
                            })
                            .list()
            );
        } catch (Exception e) {
            e.printStackTrace();
            return List.of();
        }
    }

    // Cập nhật trạng thái đơn hàng
    public void updateOrderStatus(int orderId, String status) {
        Jdbi jdbi = get();
        String sql = "UPDATE orders SET status = ? WHERE id = ?";

        try {
            jdbi.useHandle(handle ->
                    handle.createUpdate(sql)
                            .bind(0, status)
                            .bind(1, orderId)
                            .execute()
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Tạo mã đơn hàng
    public String generateOrderNumber() {
        return "ORD" + System.currentTimeMillis();
    }
}