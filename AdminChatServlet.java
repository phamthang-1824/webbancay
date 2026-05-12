package vn.edu.nlu.fit.webancay.controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import vn.edu.nlu.fit.webancay.dao.MessageDao;
import vn.edu.nlu.fit.webancay.dao.UserDao;
import vn.edu.nlu.fit.webancay.model.Message;
import vn.edu.nlu.fit.webancay.model.User;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

@SuppressWarnings("CallToPrintStackTrace")
@WebServlet("/admin/chat")
public class AdminChatServlet extends HttpServlet {

    private final Gson gson = new Gson();

    /**
     * GET /admin/chat              -> load trang admin-chat.jsp
     * GET /admin/chat?api=users    -> JSON danh sách user có tin nhắn + số chưa đọc
     * GET /admin/chat?api=messages&userId=X -> JSON lịch sử chat với user X
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        if (!isAdmin(request, response)) return;

        String api = request.getParameter("api");

        if ("users".equals(api)) {
            // Trả về danh sách user đã chat
            MessageDao msgDao = new MessageDao();
            UserDao userDao  = new UserDao();

            List<Integer> userIds = msgDao.getUserIdsWithMessages();
            List<Map<String, Object>> result = new ArrayList<>();

            for (int uid : userIds) {
                User u = userDao.getUserById(uid);
                if (u == null) continue;

                Map<String, Object> item = new HashMap<>();
                item.put("userId",    u.getId());
                item.put("fullName",  u.getLastName() + " " + u.getFirstName());
                item.put("email",     u.getEmail());
                item.put("unread",    msgDao.countUnreadFromUser(uid));
                result.add(item);
            }

            sendJsonObject(response, Map.of("success", true, "users", result));

        } else if ("messages".equals(api)) {
            // Trả về lịch sử chat với 1 user
            String userIdStr = request.getParameter("userId");
            if (userIdStr == null) { sendJson(response, false, "Thiếu userId"); return; }

            try {
                int userId = Integer.parseInt(userIdStr);
                MessageDao dao = new MessageDao();
                dao.markUserMessagesAsRead(userId); // admin đọc -> đánh dấu
                List<Message> messages = dao.getMessagesByUserId(userId);
                sendJsonObject(response, Map.of("success", true, "messages", messages));
            } catch (NumberFormatException e) {
                sendJson(response, false, "userId không hợp lệ");
            }

        } else {
            // Load trang admin-chat.jsp
            request.getRequestDispatcher("/admin/admin-chat.jsp").forward(request, response);
        }
    }

    /**
     * POST /admin/chat  -> admin gửi reply (body JSON: { "userId": X, "content": "..." })
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        if (!isAdmin(request, response)) return;

        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=UTF-8");

        try {
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = request.getReader().readLine()) != null) sb.append(line);

            JsonObject body = gson.fromJson(sb.toString(), JsonObject.class);

            if (!body.has("userId") || !body.has("content")) {
                sendJson(response, false, "Thiếu userId hoặc content");
                return;
            }

            int    userId  = body.get("userId").getAsInt();
            String content = body.get("content").getAsString().trim();

            if (content.isEmpty()) { sendJson(response, false, "Nội dung không được trống"); return; }
            if (content.length() > 1000) { sendJson(response, false, "Tin nhắn quá dài"); return; }

            MessageDao dao = new MessageDao();
            boolean saved = dao.saveMessage(userId, "shop", content);

            if (saved) sendJson(response, true, "Gửi thành công");
            else       sendJson(response, false, "Lỗi lưu tin nhắn");

        } catch (Exception e) {
            e.printStackTrace();
            sendJson(response, false, "Lỗi server: " + e.getMessage());
        }
    }

    // ─── Helpers ─────────────────────────────────────────────────────────────────

    private boolean isAdmin(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            response.sendRedirect(request.getContextPath() + "/login.jsp");
            return false;
        }
        User u = (User) session.getAttribute("user");
        if (!"admin".equals(u.getRole())) {
            response.sendRedirect(request.getContextPath() + "/index.jsp");
            return false;
        }
        return true;
    }

    private void sendJson(HttpServletResponse response, boolean success, String message)
            throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.print(gson.toJson(Map.of("success", success, "message", message)));
        out.flush();
    }

    private void sendJsonObject(HttpServletResponse response, Object obj) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.print(gson.toJson(obj));
        out.flush();
    }
}