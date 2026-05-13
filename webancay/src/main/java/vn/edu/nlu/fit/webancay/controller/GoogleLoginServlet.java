package vn.edu.nlu.fit.webancay.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import vn.edu.nlu.fit.webancay.dao.DBProperties;

import java.io.IOException;

@WebServlet("/login/google")
public class GoogleLoginServlet extends HttpServlet {

    private static final String GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/auth";
    private static final String SCOPE = "email profile";

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String clientId = DBProperties.getGoogleClientId();
        String redirectUri = DBProperties.getGoogleRedirectUri();

        String url = GOOGLE_AUTH_URL
                + "?client_id=" + clientId
                + "&redirect_uri=" + redirectUri
                + "&response_type=code"
                + "&scope=" + SCOPE.replace(" ", "%20");

        response.sendRedirect(url);
    }
}