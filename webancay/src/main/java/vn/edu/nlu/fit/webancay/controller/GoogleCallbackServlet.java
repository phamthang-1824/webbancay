package vn.edu.nlu.fit.webancay.controller;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import vn.edu.nlu.fit.webancay.dao.DBProperties;
import vn.edu.nlu.fit.webancay.dao.UserDao;
import vn.edu.nlu.fit.webancay.model.User;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@WebServlet("/login/google/callback")
public class GoogleCallbackServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String code = request.getParameter("code");
        if (code == null) {
            response.sendRedirect(request.getContextPath() + "/login");
            return;
        }

        try {
            // B1: Đổi code lấy access token
            String tokenResponse = getAccessToken(code);
            JsonObject tokenJson = JsonParser.parseString(tokenResponse).getAsJsonObject();
            String accessToken = tokenJson.get("access_token").getAsString();

            // B2: Dùng access token lấy thông tin user
            String userInfoResponse = getUserInfo(accessToken);
            JsonObject userJson = JsonParser.parseString(userInfoResponse).getAsJsonObject();
            String email = userJson.get("email").getAsString();
            String name = userJson.has("name") ? userJson.get("name").getAsString() : "";

            // B3: Kiểm tra user trong DB
            UserDao userDao = new UserDao();
            User user = userDao.getUserByEmail(email);

            if (user == null) {
                String lastName = "";
                String firstName = name;
                if (name.contains(" ")) {
                    int lastSpace = name.lastIndexOf(" ");
                    lastName = name.substring(0, lastSpace);
                    firstName = name.substring(lastSpace + 1);
                }

                user = new User();
                user.setEmail(email);
                user.setLastName(lastName);
                user.setFirstName(firstName);
                user.setPassword("");
                user.setRole("user");
                user.setGender("other");

                userDao.addUser(user);
                user = userDao.getUserByEmail(email);
            }

            // B4: Lưu session
            HttpSession session = request.getSession();
            session.setAttribute("user", user);
            response.sendRedirect(request.getContextPath() + "/index.jsp");

        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect(request.getContextPath() + "/login");
        }
    }

    private String getAccessToken(String code) throws IOException {
        String params = "code=" + URLEncoder.encode(code, StandardCharsets.UTF_8)
                + "&client_id=" + URLEncoder.encode(DBProperties.getGoogleClientId(), StandardCharsets.UTF_8)
                + "&client_secret=" + URLEncoder.encode(DBProperties.getGoogleClientSecret(), StandardCharsets.UTF_8)
                + "&redirect_uri=" + URLEncoder.encode(DBProperties.getGoogleRedirectUri(), StandardCharsets.UTF_8)
                + "&grant_type=authorization_code";

        URL url = new URL("https://oauth2.googleapis.com/token");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setDoOutput(true);
        conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");

        try (OutputStream os = conn.getOutputStream()) {
            os.write(params.getBytes(StandardCharsets.UTF_8));
        }

        return readResponse(conn);
    }

    private String getUserInfo(String accessToken) throws IOException {
        URL url = new URL("https://www.googleapis.com/oauth2/v2/userinfo");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Authorization", "Bearer " + accessToken);
        return readResponse(conn);
    }

    private String readResponse(HttpURLConnection conn) throws IOException {
        StringBuilder sb = new StringBuilder();
        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8))) {
            String line;
            while ((line = br.readLine()) != null) {
                sb.append(line);
            }
        }
        return sb.toString();
    }
}