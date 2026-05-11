package vn.edu.nlu.fit.webancay.dao;

import org.jdbi.v3.core.Jdbi;
import vn.edu.nlu.fit.webancay.model.Category;

import java.util.List;

public class CategoryDao extends BaseDao {

    public List<Category> getAllCategories() {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM categories WHERE status = true ORDER BY sort_order, name")
                        .mapToBean(Category.class)
                        .list()
        );
    }

    public Category getCategoryById(int id) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM categories WHERE id = :id")
                        .bind("id", id)
                        .mapToBean(Category.class)
                        .findFirst()
                        .orElse(null)
        );
    }

    public Category getCategoryBySlug(String slug) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM categories WHERE slug = :slug")
                        .bind("slug", slug)
                        .mapToBean(Category.class)
                        .findFirst()
                        .orElse(null)
        );
    }

    public String getCategoryName(int id) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT name FROM categories WHERE id = :id")
                        .bind("id", id)
                        .mapTo(String.class)
                        .findFirst()
                        .orElse("Không xác định")
        );
    }

    public List<Category> getParentCategories() {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM categories WHERE parent_id IS NULL AND status = true ORDER BY sort_order, name")
                        .mapToBean(Category.class)
                        .list()
        );
    }

    public List<Category> getSubCategories(int parentId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM categories WHERE parent_id = :parentId AND status = true ORDER BY sort_order, name")
                        .bind("parentId", parentId)
                        .mapToBean(Category.class)
                        .list()
        );
    }
}