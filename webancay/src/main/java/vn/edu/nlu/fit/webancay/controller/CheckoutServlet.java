package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.dao.CartDao;
import vn.edu.nlu.fit.webancay.dao.OrderDao;
import vn.edu.nlu.fit.webancay.model.CartItem;
import vn.edu.nlu.fit.webancay.model.Order;
import vn.edu.nlu.fit.webancay.model.OrderItem;
import vn.edu.nlu.fit.webancay.model.User;
import vn.edu.nlu.fit.webancay.util.Location;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/checkout")
public class CheckoutServlet extends HttpServlet {

    private CartDao cartDao;
    private OrderDao orderDao;
    private Gson gson = new Gson();

    @Override
    public void init() throws ServletException {
        cartDao = new CartDao();
        orderDao = new OrderDao();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        User user = (User) session.getAttribute("user");

        // Kiểm tra đăng nhập
        if (user == null) {
            resp.sendRedirect(req.getContextPath() + "/login?redirect=checkout");
            return;
        }

        // Lấy giỏ hàng từ database
        List<CartItem> cartItems = cartDao.getCartByUserId(user.getId());

        if (cartItems == null || cartItems.isEmpty()) {
            resp.sendRedirect(req.getContextPath() + "/cart");
            return;
        }

        // Tính toán tổng tiền
        double subtotal = 0;
        for (CartItem item : cartItems) {
            subtotal += item.getPrice() * item.getQuantity();
        }
        double shippingFee = 35000; // Phí ship mặc định
        double total = subtotal + shippingFee;

        // Lưu vào session
        session.setAttribute("cartItems", cartItems);
        session.setAttribute("subtotal", subtotal);
        session.setAttribute("shippingFee", shippingFee);
        session.setAttribute("total", total);

        // Lấy danh sách tỉnh thành từ Location class
        List<String> provinces = Location.getProvinces();
        req.setAttribute("provinces", provinces);

        // Forward đến trang checkout
        req.getRequestDispatcher("/checkout.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        User user = (User) session.getAttribute("user");

        if (user == null) {
            resp.sendRedirect(req.getContextPath() + "/login");
            return;
        }

        // Lấy thông tin từ form
        String action = req.getParameter("action");

        // API endpoint cho AJAX - lấy quận/huyện theo tỉnh
        if ("getDistricts".equals(action)) {
            String province = req.getParameter("province");
            Map<String, List<String>> districts = Location.getDistricts(province);

            Map<String, Object> result = new HashMap<>();
            result.put("districts", districts);
            result.put("districtList", new ArrayList<>(districts.keySet()));

            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(gson.toJson(result));
            return;
        }

        // API endpoint cho AJAX - lấy xã/phường theo huyện
        if ("getWards".equals(action)) {
            String province = req.getParameter("province");
            String district = req.getParameter("district");
            List<String> wards = Location.getWards(province, district);

            Map<String, Object> result = new HashMap<>();
            result.put("wards", wards);

            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(gson.toJson(result));
            return;
        }

        // Nếu là đặt hàng
        if ("placeOrder".equals(action)) {
            placeOrder(req, resp, user);
            return;
        }
    }

    private void placeOrder(HttpServletRequest req, HttpServletResponse resp, User user) throws IOException, ServletException {
        HttpSession session = req.getSession();

        // Lấy thông tin từ form
        String name = req.getParameter("name");
        String phone = req.getParameter("phone");
        String email = req.getParameter("email");
        String province = req.getParameter("province");
        String district = req.getParameter("district");
        String ward = req.getParameter("ward");
        String address = req.getParameter("address");
        String notes = req.getParameter("notes");

        // Lấy thông tin giỏ hàng từ session
        List<CartItem> cartItems = (List<CartItem>) session.getAttribute("cartItems");
        Double subtotal = (Double) session.getAttribute("subtotal");
        Double shippingFee = (Double) session.getAttribute("shippingFee");
        Double total = (Double) session.getAttribute("total");

        // Validate dữ liệu
        List<String> errors = new ArrayList<>();

        if (name == null || name.trim().isEmpty()) {
            errors.add("Vui lòng nhập họ tên");
        }
        if (phone == null || phone.trim().isEmpty()) {
            errors.add("Vui lòng nhập số điện thoại");
        }
        if (email == null || email.trim().isEmpty()) {
            errors.add("Vui lòng nhập email");
        }
        if (province == null || province.trim().isEmpty()) {
            errors.add("Vui lòng chọn tỉnh/thành phố");
        }
        if (district == null || district.trim().isEmpty()) {
            errors.add("Vui lòng chọn quận/huyện");
        }
        if (ward == null || ward.trim().isEmpty()) {
            errors.add("Vui lòng chọn xã/phường");
        }
        if (address == null || address.trim().isEmpty()) {
            errors.add("Vui lòng nhập địa chỉ cụ thể");
        }

        if (!errors.isEmpty()) {
            req.setAttribute("errors", errors);
            req.setAttribute("name", name);
            req.setAttribute("phone", phone);
            req.setAttribute("email", email);
            req.setAttribute("province", province);
            req.setAttribute("district", district);
            req.setAttribute("ward", ward);
            req.setAttribute("address", address);
            req.setAttribute("notes", notes);

            // Load lại dữ liệu từ Location class
            List<String> provinces = Location.getProvinces();
            req.setAttribute("provinces", provinces);

            if (province != null) {
                Map<String, List<String>> districts = Location.getDistricts(province);
                req.setAttribute("districts", districts);
                req.setAttribute("districtList", new ArrayList<>(districts.keySet()));
            }
            if (province != null && district != null) {
                List<String> wards = Location.getWards(province, district);
                req.setAttribute("wards", wards);
            }

            req.getRequestDispatcher("/checkout.jsp").forward(req, resp);
            return;
        }

        // Tạo đối tượng Order
        Order order = new Order();
        order.setOrderNumber(orderDao.generateOrderNumber());
        order.setUserId(user.getId());
        order.setCustomerName(name);
        order.setCustomerPhone(phone);
        order.setCustomerEmail(email);
        order.setProvince(province);
        order.setDistrict(district);
        order.setWard(ward);
        order.setStreetAddress(address);
        order.setNotes(notes);
        order.setSubtotal(subtotal != null ? subtotal : 0);
        order.setShippingFee(shippingFee != null ? shippingFee : 0);
        order.setDiscount(0);
        order.setTotal(total != null ? total : 0);
        order.setPaymentMethod("Thanh toán khi nhận hàng");
        order.setShippingMethod("Giao hàng tiêu chuẩn");

        // Lưu đơn hàng vào database
        int orderId = orderDao.createOrder(order);

        if (orderId > 0) {
            // Lưu chi tiết đơn hàng
            for (CartItem cartItem : cartItems) {
                OrderItem item = new OrderItem();
                item.setProductId(Integer.parseInt(cartItem.getProductId()));
                item.setProductCode(cartItem.getProductCode());
                item.setProductName(cartItem.getProductName());
                item.setProductImage(cartItem.getImageUrl());
                item.setVariant(cartItem.getVariant());
                item.setPrice(cartItem.getPrice());
                item.setQuantity(cartItem.getQuantity());
                item.setTotalPrice(cartItem.getPrice() * cartItem.getQuantity());

                orderDao.addOrderItem(orderId, item);
            }

            // Xóa giỏ hàng
            cartDao.deleteCartByUserId(user.getId());

            // Xóa session
            session.removeAttribute("cartItems");
            session.removeAttribute("subtotal");
            session.removeAttribute("shippingFee");
            session.removeAttribute("total");

            resp.sendRedirect(req.getContextPath() + "/orders");
        } else {
            req.setAttribute("error", "Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại!");
            doGet(req, resp);
        }
    }
}