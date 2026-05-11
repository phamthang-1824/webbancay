package vn.edu.nlu.fit.webancay.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import vn.edu.nlu.fit.webancay.model.CartItem;
import vn.edu.nlu.fit.webancay.model.User;
import vn.edu.nlu.fit.webancay.dao.CartDao;

@WebServlet(urlPatterns = {"/cart", "/cart/add", "/cart/update", "/cart/remove"})
public class CartServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private CartDao cartDao = new CartDao();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String path = req.getServletPath();

        if ("/cart".equals(path)) {
            HttpSession session = req.getSession();
            User user = (User) session.getAttribute("user");

            List<CartItem> cart;

            // Nếu đã đăng nhập, lấy giỏ hàng từ CSDL
            if (user != null) {
                cart = cartDao.getCartByUserId(user.getId());
                session.setAttribute("cart", cart);
            } else {
                cart = getCartFromSession(session);
            }

            // Tính tổng tiền
            double total = 0;
            int itemCount = 0;
            for (CartItem item : cart) {
                total += item.getPrice() * item.getQuantity();
                itemCount += item.getQuantity();
            }

            // Set attributes
            req.setAttribute("cartItems", cart);
            req.setAttribute("total", total);
            req.setAttribute("itemCount", itemCount);
            req.setAttribute("formattedTotal", formatPrice(total));
            req.setAttribute("user", user);

            req.getRequestDispatcher("/cart.jsp").forward(req, resp);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        String path = req.getServletPath();
        HttpSession session = req.getSession();
        User user = (User) session.getAttribute("user");

        switch (path) {
            case "/cart/add":
                addToCart(req, session, user);
                break;
            case "/cart/update":
                updateCart(req, session, user);
                break;
            case "/cart/remove":
                removeFromCart(req, session, user);
                break;
        }

        // Sau khi xử lý xong, chuyển hướng về trang giỏ hàng
        resp.sendRedirect(req.getContextPath() + "/cart");
    }

    // Lấy giỏ hàng từ session
    @SuppressWarnings("unchecked")
    private List<CartItem> getCartFromSession(HttpSession session) {
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");
        if (cart == null) {
            cart = new ArrayList<>();
            session.setAttribute("cart", cart);
        }
        return cart;
    }

    // Thêm vào giỏ hàng
    private void addToCart(HttpServletRequest req, HttpSession session, User user) {
        try {
            String productId = req.getParameter("productId");
            String productName = req.getParameter("productName");
            String priceStr = req.getParameter("price");
            String quantityStr = req.getParameter("quantity");
            String image = req.getParameter("image");
            String variant = req.getParameter("variant");

            if (productId == null || productName == null || priceStr == null) {
                return;
            }

            double price = Double.parseDouble(priceStr);
            int quantity = quantityStr != null ? Integer.parseInt(quantityStr) : 1;

            List<CartItem> cart = getCartFromSession(session);

            // Kiểm tra sản phẩm đã có chưa
            boolean found = false;
            for (CartItem item : cart) {
                if (item.getProductId().equals(productId)) {
                    item.setQuantity(item.getQuantity() + quantity);
                    found = true;
                    break;
                }
            }

            // Thêm mới nếu chưa có
            if (!found) {
                CartItem newItem = new CartItem();
                newItem.setId(cart.size() + 1);
                newItem.setProductId(productId);
                newItem.setProductName(productName);
                newItem.setPrice(price);
                newItem.setQuantity(quantity);
                newItem.setImageUrl(image != null ? image : "https://via.placeholder.com/80x80");
                newItem.setVariant(variant != null ? variant : "Đang cập nhật...");
                cart.add(newItem);
            }

            session.setAttribute("cart", cart);

            // Nếu đã đăng nhập, lưu vào CSDL
            if (user != null) {
                cartDao.saveCart(user.getId(), cart);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Cập nhật số lượng
    private void updateCart(HttpServletRequest req, HttpSession session, User user) {
        try {
            String productId = req.getParameter("productId");
            String quantityStr = req.getParameter("quantity");

            if (productId == null || quantityStr == null) {
                return;
            }

            int quantity = Integer.parseInt(quantityStr);
            List<CartItem> cart = getCartFromSession(session);

            // Tìm và cập nhật
            for (int i = 0; i < cart.size(); i++) {
                CartItem item = cart.get(i);
                if (item.getProductId().equals(productId)) {
                    if (quantity <= 0) {
                        cart.remove(i);
                    } else {
                        item.setQuantity(quantity);
                    }
                    break;
                }
            }

            session.setAttribute("cart", cart);

            // Nếu đã đăng nhập, lưu vào CSDL
            if (user != null) {
                cartDao.saveCart(user.getId(), cart);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Xóa sản phẩm
    private void removeFromCart(HttpServletRequest req, HttpSession session, User user) {
        try {
            String productId = req.getParameter("productId");

            if (productId == null) {
                return;
            }

            List<CartItem> cart = getCartFromSession(session);

            // Xóa sản phẩm
            cart.removeIf(item -> item.getProductId().equals(productId));

            session.setAttribute("cart", cart);

            // Nếu đã đăng nhập, lưu vào CSDL
            if (user != null) {
                cartDao.saveCart(user.getId(), cart);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Format giá tiền
    private String formatPrice(double price) {
        return String.format("%,.0f", price) + "₫";
    }
}