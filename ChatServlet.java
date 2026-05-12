package vn.edu.nlu.fit.webancay.controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import vn.edu.nlu.fit.webancay.dao.MessageDao;
import vn.edu.nlu.fit.webancay.model.Message;
import vn.edu.nlu.fit.webancay.model.User;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// Tắt warning e.printStackTrace() nếu dùng SonarLint
@SuppressWarnings("CallToPrintStackTrace")
@WebServlet("/chat")
public class ChatServlet extends HttpServlet {

    private final Gson gson = new Gson();

    /**
     * GET /chat          -> load trang chat.jsp
     * GET /chat?api=messages -> trả về JSON danh sách tin nhắn (dùng cho polling)
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");

        // Kiểm tra đăng nhập
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            String api = request.getParameter("api");
            if ("messages".equals(api)) {
                sendJson(response, HttpServletResponse.SC_UNAUTHORIZED, "Chưa đăng nhập", null);
            } else {
                response.sendRedirect(request.getContextPath() + "/login.jsp");
            }
            return;
        }

        User user = (User) session.getAttribute("user");
        String api = request.getParameter("api");

        if ("messages".equals(api)) {
            // API: trả về lịch sử chat dạng JSON
            MessageDao dao = new MessageDao();
            dao.markShopMessagesAsRead(user.getId());
            List<Message> messages = dao.getMessagesByUserId(user.getId());

            Map<String, Object> result = new HashMap<>();
            result.put("success", true);
            result.put("messages", messages);
            result.put("userId", user.getId());

            sendJsonObject(response, result);
        } else {
            // Load trang chat.jsp
            request.getRequestDispatcher("chat.jsp").forward(request, response);
        }
    }

    /**
     * POST /chat  -> user gửi tin nhắn (body JSON: { "content": "..." })
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=UTF-8");

        // Kiểm tra đăng nhập
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            sendJson(response, HttpServletResponse.SC_UNAUTHORIZED, "Chưa đăng nhập", null);
            return;
        }

        User user = (User) session.getAttribute("user");

        try {
            // Đọc body JSON
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = request.getReader().readLine()) != null) {
                sb.append(line);
            }

            JsonObject body = gson.fromJson(sb.toString(), JsonObject.class);
            String content = body.has("content") ? body.get("content").getAsString().trim() : "";

            if (content.isEmpty()) {
                sendJson(response, HttpServletResponse.SC_BAD_REQUEST, "Nội dung không được để trống", null);
                return;
            }

            if (content.length() > 1000) {
                sendJson(response, HttpServletResponse.SC_BAD_REQUEST, "Tin nhắn quá dài (tối đa 1000 ký tự)", null);
                return;
            }

            MessageDao dao = new MessageDao();
            boolean saved = dao.saveMessage(user.getId(), "user", content);

            if (saved) {
                sendJson(response, HttpServletResponse.SC_OK, "Gửi thành công", null);
            } else {
                sendJson(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Lỗi lưu tin nhắn", null);
            }

        } catch (Exception e) {
            e.printStackTrace();
            sendJson(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Lỗi server: " + e.getMessage(), null);
        }
    }

    // ─── Helper methods ────────────────────────────────────────────────────────

    private void sendJson(HttpServletResponse response, int status, String message, Object data)
            throws IOException {
        response.setStatus(status);
        response.setContentType("application/json;charset=UTF-8");
        Map<String, Object> map = new HashMap<>();
        map.put("success", status == HttpServletResponse.SC_OK);
        map.put("message", message);
        if (data != null) map.put("data", data);
        PrintWriter out = response.getWriter();
        out.print(gson.toJson(map));
        out.flush();
    }

    private void sendJsonObject(HttpServletResponse response, Object obj) throws IOException {
        response.setStatus(HttpServletResponse.SC_OK);
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.print(gson.toJson(obj));
        out.flush();
    }
}