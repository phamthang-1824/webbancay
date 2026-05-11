package vn.edu.nlu.fit.webancay.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import vn.edu.nlu.fit.webancay.dao.ProductDao;
import vn.edu.nlu.fit.webancay.dao.CategoryDao;
import vn.edu.nlu.fit.webancay.model.Product;
import vn.edu.nlu.fit.webancay.model.Category;

import java.io.IOException;
import java.util.List;
import java.util.ArrayList;

@WebServlet(name = "ProductServlet", value = "/product")
public class ProductServlet extends HttpServlet {
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

        String idParam = request.getParameter("id");

        if (idParam == null || idParam.isEmpty()) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Missing product ID");
            return;
        }

        try {
            int id = Integer.parseInt(idParam);

            // Lấy sản phẩm theo ID (tự động tăng lượt xem)
            Product product = productDao.getProductById(id);

            if (product == null) {
                response.sendError(HttpServletResponse.SC_NOT_FOUND, "Product not found");
                return;
            }

            // Lấy danh sách ảnh phụ của sản phẩm
            List<String> productImages = productDao.getProductImages(id);

            // Lấy danh mục của sản phẩm
            Category category = categoryDao.getCategoryById(product.getCategoryId());

            // Lấy sản phẩm liên quan (cùng danh mục)
            List<Product> relatedProducts = productDao.getRelatedProducts(
                    product.getId(),
                    product.getCategoryId(),
                    5
            );

            // Lấy sản phẩm khuyến mãi
            List<Product> discountedProducts = productDao.getDiscountedProducts(5);

            // Lấy sản phẩm mới nhất
            List<Product> newProducts = productDao.getNewProducts(5);

            // Xử lý sản phẩm vừa xem
            List<Product> recentlyViewed = getRecentlyViewed(request, product);

            // Set attributes cho JSP
            request.setAttribute("product", product);
            request.setAttribute("productImages", productImages);
            request.setAttribute("category", category);
            request.setAttribute("relatedProducts", relatedProducts);
            request.setAttribute("discountedProducts", discountedProducts);
            request.setAttribute("newProducts", newProducts);
            request.setAttribute("recentlyViewed", recentlyViewed);

            // Forward tới trang product-detail.jsp
            request.getRequestDispatcher("/product-detail.jsp").forward(request, response);

        } catch (NumberFormatException e) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid product ID");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

    @SuppressWarnings("unchecked")
    private List<Product> getRecentlyViewed(HttpServletRequest request, Product currentProduct) {
        HttpSession session = request.getSession();
        List<Product> recentlyViewed = (List<Product>) session.getAttribute("recentlyViewed");

        if (recentlyViewed == null) {
            recentlyViewed = new ArrayList<>();
        }

        // Tạo list mới để tránh ConcurrentModificationException
        List<Product> updatedList = new ArrayList<>();

        // Thêm sản phẩm hiện tại vào đầu danh sách
        updatedList.add(currentProduct);

        // Thêm các sản phẩm cũ (trừ sản phẩm hiện tại)
        for (Product p : recentlyViewed) {
            if (p.getId() != currentProduct.getId() && updatedList.size() < 5) {
                updatedList.add(p);
            }
        }

        session.setAttribute("recentlyViewed", updatedList);
        return updatedList;
    }
}