package vn.edu.nlu.fit.webancay.dao;

import org.jdbi.v3.core.Jdbi;
import vn.edu.nlu.fit.webancay.model.Product;

import java.util.List;

public class ProductDao extends BaseDao {

    public List<Product> getAllProducts(int page, int recordsPerPage) {
        Jdbi jdbi = get();
        int start = (page - 1) * recordsPerPage;

        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE status = true ORDER BY created_at DESC LIMIT :start, :limit")
                        .bind("start", start)
                        .bind("limit", recordsPerPage)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public int getTotalProducts() {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT COUNT(*) FROM products WHERE status = true")
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public List<Product> getProductsByCategory(int categoryId, int page, int recordsPerPage) {
        Jdbi jdbi = get();
        int start = (page - 1) * recordsPerPage;

        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE category_id = :categoryId AND status = true ORDER BY created_at DESC LIMIT :start, :limit")
                        .bind("categoryId", categoryId)
                        .bind("start", start)
                        .bind("limit", recordsPerPage)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public int getTotalProductsByCategory(int categoryId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT COUNT(*) FROM products WHERE category_id = :categoryId AND status = true")
                        .bind("categoryId", categoryId)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public List<Product> getProductsByPriceRange(double minPrice, double maxPrice, int page, int recordsPerPage) {
        Jdbi jdbi = get();
        int start = (page - 1) * recordsPerPage;

        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE price BETWEEN :minPrice AND :maxPrice AND status = true ORDER BY price LIMIT :start, :limit")
                        .bind("minPrice", minPrice)
                        .bind("maxPrice", maxPrice)
                        .bind("start", start)
                        .bind("limit", recordsPerPage)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public int getTotalProductsByPriceRange(double minPrice, double maxPrice) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT COUNT(*) FROM products WHERE price BETWEEN :minPrice AND :maxPrice AND status = true")
                        .bind("minPrice", minPrice)
                        .bind("maxPrice", maxPrice)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public List<Product> getProductsByCategoryAndPriceRange(int categoryId, double minPrice, double maxPrice, int page, int recordsPerPage) {
        Jdbi jdbi = get();
        int start = (page - 1) * recordsPerPage;

        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE category_id = :categoryId AND price BETWEEN :minPrice AND :maxPrice AND status = true ORDER BY price LIMIT :start, :limit")
                        .bind("categoryId", categoryId)
                        .bind("minPrice", minPrice)
                        .bind("maxPrice", maxPrice)
                        .bind("start", start)
                        .bind("limit", recordsPerPage)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public int getTotalProductsByCategoryAndPriceRange(int categoryId, double minPrice, double maxPrice) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT COUNT(*) FROM products WHERE category_id = :categoryId AND price BETWEEN :minPrice AND :maxPrice AND status = true")
                        .bind("categoryId", categoryId)
                        .bind("minPrice", minPrice)
                        .bind("maxPrice", maxPrice)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public List<Product> searchProducts(String keyword, int page, int recordsPerPage) {
        Jdbi jdbi = get();
        int start = (page - 1) * recordsPerPage;
        String searchKeyword = "%" + keyword + "%";

        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE (name LIKE :keyword OR description LIKE :keyword OR scientific_name LIKE :keyword) AND status = true ORDER BY name LIMIT :start, :limit")
                        .bind("keyword", searchKeyword)
                        .bind("start", start)
                        .bind("limit", recordsPerPage)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public int getTotalSearchResults(String keyword) {
        Jdbi jdbi = get();
        String searchKeyword = "%" + keyword + "%";

        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT COUNT(*) FROM products WHERE (name LIKE :keyword OR description LIKE :keyword OR scientific_name LIKE :keyword) AND status = true")
                        .bind("keyword", searchKeyword)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public List<Product> getAllProductsSorted(String sortBy, int page, int recordsPerPage) {
        Jdbi jdbi = get();
        int start = (page - 1) * recordsPerPage;
        String orderBy = getOrderByClause(sortBy);

        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE status = true ORDER BY " + orderBy + " LIMIT :start, :limit")
                        .bind("start", start)
                        .bind("limit", recordsPerPage)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public List<Product> getProductsByCategorySorted(int categoryId, String sortBy, int page, int recordsPerPage) {
        Jdbi jdbi = get();
        int start = (page - 1) * recordsPerPage;
        String orderBy = getOrderByClause(sortBy);

        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE category_id = :categoryId AND status = true ORDER BY " + orderBy + " LIMIT :start, :limit")
                        .bind("categoryId", categoryId)
                        .bind("start", start)
                        .bind("limit", recordsPerPage)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    private String getOrderByClause(String sortBy) {
        switch (sortBy) {
            case "popularity":
                return "views DESC";
            case "rating":
                return "has_discount DESC, discount_percentage DESC";
            case "price-low":
                return "price ASC";
            case "price-high":
                return "price DESC";
            case "latest":
            default:
                return "created_at DESC";
        }
    }

    public Product getProductById(int id) {
        Jdbi jdbi = get();

        // Tăng lượt xem
        jdbi.useHandle(handle ->
                handle.createUpdate("UPDATE products SET views = views + 1 WHERE id = :id")
                        .bind("id", id)
                        .execute()
        );

        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE id = :id")
                        .bind("id", id)
                        .mapToBean(Product.class)
                        .findFirst()
                        .orElse(null)
        );
    }

    public Product getProductByCode(String code) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE code = :code")
                        .bind("code", code)
                        .mapToBean(Product.class)
                        .findFirst()
                        .orElse(null)
        );
    }

    public List<Product> getDiscountedProducts(int limit) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE has_discount = true AND status = true ORDER BY discount_percentage DESC LIMIT :limit")
                        .bind("limit", limit)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public List<Product> getNewProducts(int limit) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE status = true ORDER BY created_at DESC LIMIT :limit")
                        .bind("limit", limit)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public List<Product> getProductsBySection(int sectionId, int limit) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE section_id = :sectionId AND status = true ORDER BY created_at DESC LIMIT :limit")
                        .bind("sectionId", sectionId)
                        .bind("limit", limit)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public List<Product> getProductsBySectionWithPaging(int sectionId, int offset, int limit) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE section_id = :sectionId AND status = true ORDER BY created_at DESC LIMIT :limit OFFSET :offset")
                        .bind("sectionId", sectionId)
                        .bind("offset", offset)
                        .bind("limit", limit)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public int getTotalProductsBySection(int sectionId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT COUNT(*) FROM products WHERE section_id = :sectionId AND status = true")
                        .bind("sectionId", sectionId)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public List<Product> getRelatedProducts(int productId, int categoryId, int limit) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE category_id = :categoryId AND id != :productId AND status = true ORDER BY created_at DESC LIMIT :limit")
                        .bind("categoryId", categoryId)
                        .bind("productId", productId)
                        .bind("limit", limit)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public List<Product> getFeaturedProducts(int limit) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM products WHERE status = true ORDER BY views DESC, created_at DESC LIMIT :limit")
                        .bind("limit", limit)
                        .mapToBean(Product.class)
                        .list()
        );
    }

    public List<String> getProductImages(int productId) {
        Jdbi jdbi = get();
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT image_url FROM product_images WHERE product_id = :productId ORDER BY sort_order ASC")
                        .bind("productId", productId)
                        .mapTo(String.class)
                        .list()
        );
    }
}