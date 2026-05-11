package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.dao.OrderDao;
import vn.edu.nlu.fit.webancay.model.Order;
import vn.edu.nlu.fit.webancay.model.OrderItem;
import vn.edu.nlu.fit.webancay.model.User;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.List;

@WebServlet("/orders")
public class OrderServlet extends HttpServlet {

    private OrderDao orderDao;

    @Override
    public void init() throws ServletException {
        orderDao = new OrderDao();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        User user = (User) session.getAttribute("user");

        if (user == null) {
            resp.sendRedirect(req.getContextPath() + "/login?redirect=orders");
            return;
        }

        // Lấy danh sách đơn hàng của user
        List<Order> orders = orderDao.getOrdersByUserId(user.getId());

        // Lấy chi tiết từng đơn hàng
        for (Order order : orders) {
            List<OrderItem> items = orderDao.getOrderItems(order.getId());
            order.setItems(items);
        }

        req.setAttribute("orders", orders);
        req.getRequestDispatcher("/orders.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");

        if ("cancel".equals(action)) {
            cancelOrder(req, resp);
        } else if ("getDetail".equals(action)) {
            getOrderDetail(req, resp);
        }
    }

    private void cancelOrder(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        int orderId = Integer.parseInt(req.getParameter("orderId"));
        orderDao.updateOrderStatus(orderId, "Đã hủy");

        resp.setContentType("application/json");
        resp.getWriter().write("{\"success\": true}");
    }

    private void getOrderDetail(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        int orderId = Integer.parseInt(req.getParameter("orderId"));
        Order order = orderDao.getOrderById(orderId);

        if (order != null) {
            List<OrderItem> items = orderDao.getOrderItems(orderId);
            order.setItems(items);
        }

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        // Chuyển đổi order sang JSON (bạn có thể dùng Gson)
        com.google.gson.Gson gson = new com.google.gson.Gson();
        resp.getWriter().write(gson.toJson(order));
    }
}