package vn.edu.nlu.fit.webancay.model;

import java.util.Date;
import java.util.List;

public class Order {
    private int id;
    private String orderNumber;
    private int userId;
    private String customerName;
    private String customerPhone;
    private String customerEmail;
    private String province;
    private String district;
    private String ward;
    private String streetAddress;
    private String fullAddress;
    private String notes;
    private double subtotal;
    private double shippingFee;
    private double discount;
    private double total;
    private String paymentMethod;
    private String shippingMethod;
    private String status;
    private Date orderDate;
    private List<OrderItem> items;

    // Constructors
    public Order() {
        this.orderDate = new Date();
        this.status = "Chờ xác nhận";
    }

    public Order(int userId, String customerName, String customerPhone, String customerEmail) {
        this();
        this.userId = userId;
        this.customerName = customerName;
        this.customerPhone = customerPhone;
        this.customerEmail = customerEmail;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getOrderNumber() { return orderNumber; }
    public void setOrderNumber(String orderNumber) { this.orderNumber = orderNumber; }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getCustomerPhone() { return customerPhone; }
    public void setCustomerPhone(String customerPhone) { this.customerPhone = customerPhone; }

    public String getCustomerEmail() { return customerEmail; }
    public void setCustomerEmail(String customerEmail) { this.customerEmail = customerEmail; }

    public String getProvince() { return province; }
    public void setProvince(String province) { this.province = province; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getWard() { return ward; }
    public void setWard(String ward) { this.ward = ward; }

    public String getStreetAddress() { return streetAddress; }
    public void setStreetAddress(String streetAddress) { this.streetAddress = streetAddress; }

    public String getFullAddress() {
        return streetAddress + ", " + ward + ", " + district + ", " + province;
    }
    public void setFullAddress(String fullAddress) { this.fullAddress = fullAddress; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public double getSubtotal() { return subtotal; }
    public void setSubtotal(double subtotal) { this.subtotal = subtotal; }

    public double getShippingFee() { return shippingFee; }
    public void setShippingFee(double shippingFee) { this.shippingFee = shippingFee; }

    public double getDiscount() { return discount; }
    public void setDiscount(double discount) { this.discount = discount; }

    public double getTotal() { return total; }
    public void setTotal(double total) { this.total = total; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }

    public String getShippingMethod() { return shippingMethod; }
    public void setShippingMethod(String shippingMethod) { this.shippingMethod = shippingMethod; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Date getOrderDate() { return orderDate; }
    public void setOrderDate(Date orderDate) { this.orderDate = orderDate; }

    public List<OrderItem> getItems() { return items; }
    public void setItems(List<OrderItem> items) { this.items = items; }

    // Helper methods
    public String getFormattedSubtotal() {
        return String.format("%,.0f", subtotal).replace(",", ".") + "₫";
    }

    public String getFormattedShippingFee() {
        return String.format("%,.0f", shippingFee).replace(",", ".") + "₫";
    }

    public String getFormattedDiscount() {
        return "-" + String.format("%,.0f", discount).replace(",", ".") + "₫";
    }

    public String getFormattedTotal() {
        return String.format("%,.0f", total).replace(",", ".") + "₫";
    }

    public String getFormattedOrderDate() {
        return new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm").format(orderDate);
    }
}