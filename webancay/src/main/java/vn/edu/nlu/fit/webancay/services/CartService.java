package vn.edu.nlu.fit.webancay.services;

import vn.edu.nlu.fit.webancay.model.CartItem;
import vn.edu.nlu.fit.webancay.model.Product;
import vn.edu.nlu.fit.webancay.dao.ProductDao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class CartService {

    private ProductDao productDao;

    // Danh sách mã giảm giá
    private static final Map<String, Integer> COUPONS = new HashMap<>();

    static {
        COUPONS.put("SAVE10", 10);
        COUPONS.put("SAVE20", 20);
        COUPONS.put("XANHVIET15", 15);
        COUPONS.put("WELCOME5", 5);
        COUPONS.put("GREENDAY", 12);
    }

    public CartService() {
        productDao = new ProductDao();
    }

    // Thêm sản phẩm vào giỏ
    public List<CartItem> addToCart(List<CartItem> cart, String productId, int quantity) {
        if (cart == null) {
            cart = new ArrayList<>();
        }

        // Lấy thông tin sản phẩm từ database
        Product product = null;
        try {
            int id = Integer.parseInt(productId);
            product = productDao.getProductById(id);
        } catch (NumberFormatException e) {
            product = productDao.getProductByCode(productId);
        }

        if (product == null) {
            return cart;
        }

        // Kiểm tra sản phẩm đã có trong giỏ chưa
        boolean found = false;
        for (CartItem item : cart) {
            if (item.getProductId().equals(productId) ||
                    (product.getCode() != null && product.getCode().equals(item.getProductCode()))) {
                item.setQuantity(item.getQuantity() + quantity);
                found = true;
                break;
            }
        }

        // Nếu chưa có, tạo mới
        if (!found) {
            CartItem newItem = new CartItem();
            newItem.setId(cart.size() + 1);
            newItem.setProductId(String.valueOf(product.getId()));
            newItem.setProductCode(product.getCode());
            newItem.setProductName(product.getName());
            newItem.setPrice(product.getPrice());
            newItem.setQuantity(quantity);
            newItem.setImageUrl(product.getImage());
            newItem.setHasDiscount(product.isHasDiscount());
            newItem.setDiscountPercentage(product.getDiscountPercentage());
            newItem.setOriginalPrice(product.getOriginalPrice() != null ?
                    product.getOriginalPrice() : product.getPrice());

            // Tạo variant từ thông tin sản phẩm
            StringBuilder variant = new StringBuilder();
            if (product.getSize() != null && !product.getSize().isEmpty()) {
                variant.append(product.getSize());
            }
            if (product.getScientificName() != null && !product.getScientificName().isEmpty()) {
                if (variant.length() > 0) variant.append(" • ");
                variant.append(product.getScientificName());
            }
            newItem.setVariant(variant.toString());

            cart.add(newItem);
        }

        return cart;
    }

    // Cập nhật số lượng
    public List<CartItem> updateQuantity(List<CartItem> cart, String productId, int quantity) {
        if (cart == null) return cart;

        if (quantity <= 0) {
            // Xóa sản phẩm
            cart.removeIf(item -> item.getProductId().equals(productId) ||
                    (item.getProductCode() != null && item.getProductCode().equals(productId)));
        } else {
            // Cập nhật số lượng
            for (CartItem item : cart) {
                if (item.getProductId().equals(productId) ||
                        (item.getProductCode() != null && item.getProductCode().equals(productId))) {
                    item.setQuantity(quantity);
                    break;
                }
            }
        }

        return cart;
    }

    // Xóa sản phẩm khỏi giỏ
    public List<CartItem> removeFromCart(List<CartItem> cart, String productId) {
        if (cart == null) return cart;

        cart.removeIf(item -> item.getProductId().equals(productId) ||
                (item.getProductCode() != null && item.getProductCode().equals(productId)));
        return cart;
    }

    // Tính tổng tiền
    public double calculateSubtotal(List<CartItem> cart) {
        if (cart == null) return 0;

        double subtotal = 0;
        for (CartItem item : cart) {
            subtotal += item.getPrice() * item.getQuantity();
        }
        return subtotal;
    }

    // Áp dụng mã giảm giá
    public Map<String, Object> applyCoupon(String couponCode, double subtotal) {
        Map<String, Object> result = new HashMap<>();

        if (couponCode == null || couponCode.trim().isEmpty()) {
            result.put("success", false);
            result.put("message", "Vui lòng nhập mã giảm giá");
            return result;
        }

        String code = couponCode.trim().toUpperCase();

        if (COUPONS.containsKey(code)) {
            int discountPercent = COUPONS.get(code);
            double discountAmount = subtotal * discountPercent / 100;

            result.put("success", true);
            result.put("message", "Áp dụng mã thành công");
            result.put("discountCode", code);
            result.put("discountPercent", discountPercent);
            result.put("discountAmount", discountAmount);
        } else {
            result.put("success", false);
            result.put("message", "Mã giảm giá không hợp lệ");
        }

        return result;
    }

    // Đếm số lượng sản phẩm trong giỏ
    public int getItemCount(List<CartItem> cart) {
        if (cart == null) return 0;

        int count = 0;
        for (CartItem item : cart) {
            count += item.getQuantity();
        }
        return count;
    }

    // Format giá tiền
    public String formatPrice(double price) {
        return String.format("%,.0f", price) + "₫";
    }
}