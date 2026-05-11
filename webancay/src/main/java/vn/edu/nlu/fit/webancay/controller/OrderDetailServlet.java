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

@WebServlet("/order-detail")
public class OrderDetailServlet extends HttpServlet {

    private OrderDao orderDao;

    @Override
    public void init() throws ServletException {
        orderDao = new OrderDao();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        User user = (User) session.getAttribute("user");

        // Kiểm tra đăng nhập
        if (user == null) {
            resp.sendRedirect(req.getContextPath() + "/login?redirect=order-detail");
            return;
        }

        // Lấy ID đơn hàng từ parameter
        String orderIdParam = req.getParameter("id");
        if (orderIdParam == null || orderIdParam.isEmpty()) {
            resp.sendRedirect(req.getContextPath() + "/orders");
            return;
        }

        try {
            int orderId = Integer.parseInt(orderIdParam);
            Order order = orderDao.getOrderById(orderId);

            // Kiểm tra đơn hàng có thuộc về user này không
            if (order != null && order.getUserId() == user.getId()) {
                // Lấy chi tiết đơn hàng
                List<OrderItem> items = orderDao.getOrderItems(orderId);
                order.setItems(items);

                req.setAttribute("order", order);
                req.getRequestDispatcher("/order-detail.jsp").forward(req, resp);
            } else {
                resp.sendRedirect(req.getContextPath() + "/orders");
            }
        } catch (NumberFormatException e) {
            resp.sendRedirect(req.getContextPath() + "/orders");
        }
    }
}