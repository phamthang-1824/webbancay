package vn.edu.nlu.fit.webancay.services;

import vn.edu.nlu.fit.webancay.dao.ProductDao;
import vn.edu.nlu.fit.webancay.model.Product;

import java.util.List;

public class ProductService {
    private final ProductDao productDao;

    public ProductService() {
        productDao = new ProductDao();
    }

    public List<Product> getAllProducts(int page, int recordsPerPage) {
        return productDao.getAllProducts(page, recordsPerPage);
    }

    public Product getProduct(int id) {
        return productDao.getProductById(id);
    }

    public int getTotalProducts() {
        return productDao.getTotalProducts();
    }

    public List<Product> getProductsByCategory(int categoryId, int page, int recordsPerPage) {
        return productDao.getProductsByCategory(categoryId, page, recordsPerPage);
    }

    public int getTotalProductsByCategory(int categoryId) {
        return productDao.getTotalProductsByCategory(categoryId);
    }

    public List<String> getProductImages(int productId) {
        return productDao.getProductImages(productId);
    }
}