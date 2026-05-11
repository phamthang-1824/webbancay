package vn.edu.nlu.fit.webancay.dao;

import org.jdbi.v3.core.Jdbi;
import vn.edu.nlu.fit.webancay.model.Section;

import java.util.List;

public class SectionDao extends BaseDao {

    public List<Section> getAllActiveSections() {
        Jdbi jdbi = get();
        try {
            return jdbi.withHandle(handle ->
                    handle.createQuery("SELECT * FROM sections WHERE status = true ORDER BY id")
                            .mapToBean(Section.class)
                            .list()
            );
        } catch (Exception e) {
            e.printStackTrace();
            return List.of(); // Trả về list rỗng nếu có lỗi
        }
    }

    public Section getSectionById(int id) {
        Jdbi jdbi = get();
        try {
            return jdbi.withHandle(handle ->
                    handle.createQuery("SELECT * FROM sections WHERE id = :id")
                            .bind("id", id)
                            .mapToBean(Section.class)
                            .findFirst()
                            .orElse(null)
            );
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Section getSectionByCode(String code) {
        Jdbi jdbi = get();
        try {
            return jdbi.withHandle(handle ->
                    handle.createQuery("SELECT * FROM sections WHERE code = :code")
                            .bind("code", code)
                            .mapToBean(Section.class)
                            .findFirst()
                            .orElse(null)
            );
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public String getSectionName(int id) {
        Jdbi jdbi = get();
        try {
            return jdbi.withHandle(handle ->
                    handle.createQuery("SELECT name FROM sections WHERE id = :id")
                            .bind("id", id)
                            .mapTo(String.class)
                            .findFirst()
                            .orElse("Không xác định")
            );
        } catch (Exception e) {
            e.printStackTrace();
            return "Không xác định";
        }
    }
}