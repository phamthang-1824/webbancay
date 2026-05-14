package vn.edu.nlu.fit.webancay.dao;

import java.io.IOException;
import java.util.Properties;

public class DBProperties {
    private static Properties prop = new Properties();

    static {
        try {
            prop.load(DBProperties.class.getClassLoader().getResourceAsStream("db.properties"));
        } catch (IOException ioException) {
            ioException.printStackTrace();
        }
    }

    public static String getDbHost() {
        return prop.get("db.host").toString();
    }

    public static String getDbPort() {
        return prop.get("db.port").toString();
    }

    public static String getUsername() {
        return prop.get("db.username").toString();
    }

    public static String getPassword() {
        return prop.get("db.password").toString();
    }

    public static String getDbName() {
        return prop.get("db.databaseName").toString();
    }
    public static String getGoogleClientId() {
        return prop.get("google.clientId").toString();
    }

    public static String getGoogleClientSecret() {
        return prop.get("google.clientSecret").toString();
    }

    public static String getGoogleRedirectUri() {
        return prop.get("google.redirectUri").toString();
    }
}
