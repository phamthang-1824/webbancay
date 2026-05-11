package vn.edu.nlu.fit.webancay.controller;

import vn.edu.nlu.fit.webancay.dao.CategoryDao;
import vn.edu.nlu.fit.webancay.dao.ProductDao;
import vn.edu.nlu.fit.webancay.model.Category;
import vn.edu.nlu.fit.webancay.model.Product;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/category")
public class CategoryServlet extends HttpServlet {
    private ProductDao productDao;
    private CategoryDao categoryDao;

    @Override
    public void init() throws ServletException {
        productDao = new ProductDao();
        categoryDao = new CategoryDao();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getParameter("action");

        if (action == null) {
            action = "list";
        }

        switch (action) {
            case "filter":
                filterProducts(request, response);
                break;
            case "search":
                searchProducts(request, response);
                break;
            case "sort":
                sortProducts(request, response);
                break;
            default:
                listProducts(request, response);
                break;
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

    private void listProducts(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int page = 1;
        int recordsPerPage = 12;
        String categoryId = request.getParameter("id");
        String categorySlug = request.getParameter("slug");

        if (request.getParameter("page") != null) {
            page = Integer.parseInt(request.getParameter("page"));
        }

        List<Product> products;
        List<Category> categories = categoryDao.getAllCategories();
        int totalRecords = 0;
        String categoryName = "Tất cả sản phẩm";
        int currentCategoryId = 0;

        if (categoryId != null && !categoryId.isEmpty()) {
            currentCategoryId = Integer.parseInt(categoryId);
            products = productDao.getProductsByCategory(currentCategoryId, page, recordsPerPage);
            totalRecords = productDao.getTotalProductsByCategory(currentCategoryId);
            Category category = categoryDao.getCategoryById(currentCategoryId);
            if (category != null) {
                categoryName = category.getName();
            }
        } else if (categorySlug != null && !categorySlug.isEmpty()) {
            Category category = categoryDao.getCategoryBySlug(categorySlug);
            if (category != null) {
                currentCategoryId = category.getId();
                products = productDao.getProductsByCategory(currentCategoryId, page, recordsPerPage);
                totalRecords = productDao.getTotalProductsByCategory(currentCategoryId);
                categoryName = category.getName();
            } else {
                products = productDao.getAllProducts(page, recordsPerPage);
                totalRecords = productDao.getTotalProducts();
            }
        } else {
            products = productDao.getAllProducts(page, recordsPerPage);
            totalRecords = productDao.getTotalProducts();
        }

        int totalPages = (int) Math.ceil(totalRecords * 1.0 / recordsPerPage);

        request.setAttribute("products", products);
        request.setAttribute("categories", categories);
        request.setAttribute("currentPage", page);
        request.setAttribute("totalPages", totalPages);
        request.setAttribute("totalRecords", totalRecords);
        request.setAttribute("categoryName", categoryName);
        request.setAttribute("categoryId", currentCategoryId);

        request.getRequestDispatcher("/category.jsp").forward(request, response);
    }

    private void filterProducts(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String minPrice = request.getParameter("minPrice");
        String maxPrice = request.getParameter("maxPrice");
        String categoryId = request.getParameter("categoryId");
        int page = 1;
        int recordsPerPage = 12;

        if (request.getParameter("page") != null) {
            page = Integer.parseInt(request.getParameter("page"));
        }

        List<Product> products;
        List<Category> categories = categoryDao.getAllCategories();
        int totalRecords;

        if (categoryId != null && !categoryId.isEmpty() && !categoryId.equals("0")) {
            products = productDao.getProductsByCategoryAndPriceRange(
                    Integer.parseInt(categoryId),
                    Double.parseDouble(minPrice),
                    Double.parseDouble(maxPrice),
                    page, recordsPerPage);
            totalRecords = productDao.getTotalProductsByCategoryAndPriceRange(
                    Integer.parseInt(categoryId),
                    Double.parseDouble(minPrice),
                    Double.parseDouble(maxPrice));
        } else {
            products = productDao.getProductsByPriceRange(
                    Double.parseDouble(minPrice),
                    Double.parseDouble(maxPrice),
                    page, recordsPerPage);
            totalRecords = productDao.getTotalProductsByPriceRange(
                    Double.parseDouble(minPrice),
                    Double.parseDouble(maxPrice));
        }

        int totalPages = (int) Math.ceil(totalRecords * 1.0 / recordsPerPage);

        request.setAttribute("products", products);
        request.setAttribute("categories", categories);
        request.setAttribute("currentPage", page);
        request.setAttribute("totalPages", totalPages);
        request.setAttribute("totalRecords", totalRecords);
        request.setAttribute("minPrice", minPrice);
        request.setAttribute("maxPrice", maxPrice);
        request.setAttribute("categoryId", categoryId);

        request.getRequestDispatcher("/category.jsp").forward(request, response);
    }

    private void searchProducts(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String keyword = request.getParameter("keyword");
        int page = 1;
        int recordsPerPage = 12;

        if (request.getParameter("page") != null) {
            page = Integer.parseInt(request.getParameter("page"));
        }

        List<Product> products = productDao.searchProducts(keyword, page, recordsPerPage);
        List<Category> categories = categoryDao.getAllCategories();
        int totalRecords = productDao.getTotalSearchResults(keyword);
        int totalPages = (int) Math.ceil(totalRecords * 1.0 / recordsPerPage);

        request.setAttribute("products", products);
        request.setAttribute("categories", categories);
        request.setAttribute("currentPage", page);
        request.setAttribute("totalPages", totalPages);
        request.setAttribute("totalRecords", totalRecords);
        request.setAttribute("keyword", keyword);

        request.getRequestDispatcher("/category.jsp").forward(request, response);
    }

    private void sortProducts(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String sortBy = request.getParameter("sortBy");
        String categoryId = request.getParameter("categoryId");
        int page = 1;
        int recordsPerPage = 12;

        if (request.getParameter("page") != null) {
            page = Integer.parseInt(request.getParameter("page"));
        }

        List<Product> products;
        List<Category> categories = categoryDao.getAllCategories();
        int totalRecords;
        String categoryName = "Tất cả sản phẩm";

        if (categoryId != null && !categoryId.isEmpty() && !categoryId.equals("0")) {
            products = productDao.getProductsByCategorySorted(
                    Integer.parseInt(categoryId), sortBy, page, recordsPerPage);
            totalRecords = productDao.getTotalProductsByCategory(Integer.parseInt(categoryId));
            Category category = categoryDao.getCategoryById(Integer.parseInt(categoryId));
            if (category != null) {
                categoryName = category.getName();
            }
        } else {
            products = productDao.getAllProductsSorted(sortBy, page, recordsPerPage);
            totalRecords = productDao.getTotalProducts();
        }

        int totalPages = (int) Math.ceil(totalRecords * 1.0 / recordsPerPage);

        request.setAttribute("products", products);
        request.setAttribute("categories", categories);
        request.setAttribute("currentPage", page);
        request.setAttribute("totalPages", totalPages);
        request.setAttribute("totalRecords", totalRecords);
        request.setAttribute("sortBy", sortBy);
        request.setAttribute("categoryId", categoryId);
        request.setAttribute("categoryName", categoryName);

        request.getRequestDispatcher("/category.jsp").forward(request, response);
    }
}