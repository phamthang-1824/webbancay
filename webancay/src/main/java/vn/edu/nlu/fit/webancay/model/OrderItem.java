package vn.edu.nlu.fit.webancay.model;

public class OrderItem {
    private int id;
    private int orderId;
    private int productId;
    private String productCode;
    private String productName;
    private String productImage;
    private String variant;
    private double price;
    private int quantity;
    private double totalPrice;

    // Constructors
    public OrderItem() {}

    public OrderItem(int productId, String productName, double price, int quantity) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.totalPrice = price * quantity;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getOrderId() { return orderId; }
    public void setOrderId(int orderId) { this.orderId = orderId; }

    public int getProductId() { return productId; }
    public void setProductId(int productId) { this.productId = productId; }

    public String getProductCode() { return productCode; }
    public void setProductCode(String productCode) { this.productCode = productCode; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public String getProductImage() { return productImage; }
    public void setProductImage(String productImage) { this.productImage = productImage; }

    public String getVariant() { return variant; }
    public void setVariant(String variant) { this.variant = variant; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public double getTotalPrice() { return totalPrice; }
    public void setTotalPrice(double totalPrice) { this.totalPrice = totalPrice; }

    // Helper methods
    public String getFormattedPrice() {
        return String.format("%,.0f", price).replace(",", ".") + "₫";
    }

    public String getFormattedTotalPrice() {
        return String.format("%,.0f", totalPrice).replace(",", ".") + "₫";
    }
}