package vn.edu.nlu.fit.webancay.dao;

import com.mysql.cj.jdbc.MysqlDataSource;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;
import vn.edu.nlu.fit.webancay.model.User;

import java.sql.SQLException;
import java.util.List;

public abstract class BaseDao {
    private static Jdbi jdbi;

    protected Jdbi get() {
        if (jdbi == null) {
            createConnection();
        }
        return jdbi;
    }

    private void createConnection() {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setURL("jdbc:mysql://" + DBProperties.getDbHost() + ":" + DBProperties.getDbPort() + "/" + DBProperties.getDbName());
        dataSource.setUser(DBProperties.getUsername());
        dataSource.setPassword(DBProperties.getPassword());

        try {
            dataSource.setUseCompression(true);
            dataSource.setAutoReconnect(true);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            throw new RuntimeException(throwables);
        }

        jdbi = Jdbi.create(dataSource);
    }
}