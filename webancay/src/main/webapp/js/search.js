// Search functionality for header
document.addEventListener('DOMContentLoaded', function() {
    // Biến toàn cục
    let searchProducts = [];

    // Khởi tạo dữ liệu tìm kiếm
    initSearchData();

    // Lấy các phần tử DOM
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchToggle = document.getElementById('search-toggle');
    const searchResults = document.getElementById('search-results');
    const searchModal = document.getElementById('search-modal');
    const searchModalInput = document.getElementById('search-modal-input');
    const searchModalResults = document.getElementById('search-modal-results');
    const searchModalClose = document.getElementById('search-modal-close');

    // Trạng thái tìm kiếm
    let isSearchOpen = false;

    // ========== 1. KHỞI TẠO DỮ LIỆU TÌM KIẾM ==========
    function initSearchData() {
        // Thu thập tất cả sản phẩm từ các section trên trang
        const productItems = document.querySelectorAll('.product-item');

        searchProducts = Array.from(productItems).map(item => {
            const nameLink = item.querySelector('.product-name-link');
            const nameElement = item.querySelector('.product-name');
            const codeElement = item.querySelector('.product-code');
            const priceElement = item.querySelector('.product-price');
            const imageElement = item.querySelector('.product-image');

            // Lấy link chi tiết sản phẩm
            let productLink = '';
            if (nameLink && nameLink.href) {
                productLink = nameLink.href;
            }

            // Lấy mã sản phẩm từ thẻ p hoặc từ ID trong href
            let productCode = '';
            if (codeElement) {
                productCode = codeElement.textContent || '';
            } else if (productLink) {
                // Lấy ID từ URL nếu không có mã sản phẩm hiển thị
                const urlParams = new URL(productLink, window.location.href);
                const id = urlParams.searchParams.get('id');
                if (id) productCode = id;
            }

            return {
                id: productCode,
                name: nameElement ? nameElement.textContent : '',
                code: productCode,
                price: priceElement ? priceElement.textContent : '',
                image: imageElement ? imageElement.src : '',
                link: productLink
            };
        }).filter(product => product.name && product.link);

        console.log(`Đã tải ${searchProducts.length} sản phẩm cho tìm kiếm`);
    }

    // ========== 2. XỬ LÝ TÌM KIẾM HEADER ==========
    // Toggle thanh tìm kiếm
    if (searchToggle) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.innerWidth < 768) {
                // Trên mobile, mở modal tìm kiếm
                openSearchModal();
            } else {
                // Trên desktop, toggle thanh tìm kiếm
                toggleSearchBar();
            }
        });
    }

    function toggleSearchBar() {
        isSearchOpen = !isSearchOpen;
        searchForm.classList.toggle('active', isSearchOpen);

        if (isSearchOpen) {
            searchInput.focus();
            // Đóng kết quả tìm kiếm nếu đang mở
            searchResults.classList.remove('active');
        } else {
            searchInput.value = '';
            searchResults.classList.remove('active');
        }
    }

    // Xử lý khi nhập vào ô tìm kiếm header
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 0) {
                performSearch(query, searchResults);
            } else {
                searchResults.classList.remove('active');
            }
        });

        searchInput.addEventListener('focus', function() {
            const query = this.value.trim();
            if (query.length > 0) {
                performSearch(query, searchResults);
                searchResults.classList.add('active');
            }
        });
    }

    // ========== 3. XỬ LÝ MODAL TÌM KIẾM TOÀN MÀN HÌNH ==========
    function openSearchModal() {
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        searchModalInput.focus();
    }

    function closeSearchModal() {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
        searchModalInput.value = '';
        searchModalResults.innerHTML = '';
    }

    if (searchModalClose) {
        searchModalClose.addEventListener('click', closeSearchModal);
    }

    // Đóng modal khi click ra ngoài
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            closeSearchModal();
        }
    });

    // Xử lý tìm kiếm trong modal
    if (searchModalInput) {
        searchModalInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 0) {
                performSearch(query, searchModalResults, true);
            } else {
                searchModalResults.innerHTML = '';
            }
        });

        // Xử lý phím Escape
        searchModalInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeSearchModal();
            }
        });
    }

    // ========== 4. HÀM THỰC HIỆN TÌM KIẾM ==========
    function performSearch(query, resultsContainer, isModal = false) {
        if (!query || query.length < 2) {
            resultsContainer.innerHTML = '<div class="no-results">Vui lòng nhập ít nhất 2 ký tự</div>';
            if (isModal) resultsContainer.style.display = 'block';
            return;
        }

        // Tìm kiếm trong mảng sản phẩm
        const searchTerm = query.toLowerCase();
        const matchedProducts = searchProducts.filter(product => {
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.code.toLowerCase().includes(searchTerm)
            );
        });

        // Hiển thị kết quả
        displaySearchResults(matchedProducts, resultsContainer, query, isModal);
    }

    // ========== 5. HIỂN THỊ KẾT QUẢ TÌM KIẾM ==========
    function displaySearchResults(products, container, query, isModal) {
        if (products.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <p>Không tìm thấy sản phẩm nào phù hợp với "<strong>${query}</strong>"</p>
                    <p style="margin-top: 10px; font-size: 0.875rem;">Vui lòng thử từ khóa khác</p>
                </div>
            `;
            if (isModal) container.style.display = 'block';
            return;
        }

        let resultsHTML = '';

        products.forEach(product => {
            // Highlight từ khóa tìm kiếm trong tên sản phẩm
            let highlightedName = product.name;
            const searchTerm = query.toLowerCase();
            const nameLower = product.name.toLowerCase();
            const matchIndex = nameLower.indexOf(searchTerm);

            if (matchIndex !== -1) {
                const beforeMatch = product.name.substring(0, matchIndex);
                const matchText = product.name.substring(matchIndex, matchIndex + query.length);
                const afterMatch = product.name.substring(matchIndex + query.length);

                highlightedName = `${beforeMatch}<strong style="color: var(--hover-green);">${matchText}</strong>${afterMatch}`;
            }

            resultsHTML += `
                <a href="${product.link}" class="search-result-item">
                    ${product.image ? `<img src="${product.image}" alt="${product.name}" class="search-result-image">` : ''}
                    <div class="search-result-info">
                        <div class="search-result-name">${highlightedName}</div>
                        ${product.code ? `<div class="search-result-code" style="font-size: 0.75rem; color: var(--gray-500); margin-bottom: 0.25rem;">Mã: ${product.code}</div>` : ''}
                        <div class="search-result-price">${product.price}</div>
                    </div>
                </a>
            `;
        });

        // Thêm số lượng kết quả
        resultsHTML = `
            <div style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--gray-200); font-size: 0.875rem; color: var(--gray-600);">
                Tìm thấy ${products.length} sản phẩm
            </div>
            ${resultsHTML}
        `;

        container.innerHTML = resultsHTML;
        if (isModal) {
            container.style.display = 'block';
        } else {
            container.classList.add('active');
        }
    }

    // ========== 6. XỬ LÝ SỰ KIỆN KHÁC ==========
    // Đóng kết quả tìm kiếm khi click ra ngoài
    document.addEventListener('click', function(e) {
        if (!searchForm.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Xử lý phím Escape để đóng tìm kiếm
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (searchModal.classList.contains('active')) {
                closeSearchModal();
            } else if (isSearchOpen) {
                toggleSearchBar();
            }
        }
    });

    // Tự động tắt thanh tìm kiếm khi chuyển sang mobile
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768 && isSearchOpen) {
            toggleSearchBar();
        }
    });

    // ========== 7. HÀM TÌM KIẾM CÔNG KHAI (có thể gọi từ nơi khác) ==========
    window.searchProducts = function(query) {
        openSearchModal();
        searchModalInput.value = query;
        searchModalInput.dispatchEvent(new Event('input'));
    };
});