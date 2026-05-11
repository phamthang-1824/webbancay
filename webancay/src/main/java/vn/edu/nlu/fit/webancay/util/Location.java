package vn.edu.nlu.fit.webancay.util;

import java.util.*;

public class Location {

    // Cấu trúc: Tỉnh -> (Huyện -> Danh sách Xã)
    private static Map<String, Map<String, List<String>>> data;
    private static List<String> provinces;

    static {
        data = new LinkedHashMap<>();

        // ===========================================
        // 1. BÌNH THUẬN (ĐẦY ĐỦ 10 HUYỆN/THỊ XÃ/THÀNH PHỐ)
        // ===========================================
        Map<String, List<String>> binhThuan = new LinkedHashMap<>();

        // 1.1 Thành phố Phan Thiết (15 phường/xã)
        binhThuan.put("Thành phố Phan Thiết", Arrays.asList(
                "Phường Mũi Né", "Phường Hàm Tiến", "Phường Phú Hài",
                "Phường Thanh Hải", "Phường Lạc Đạo", "Phường Bình Hưng",
                "Phường Đức Long", "Phường Đức Thắng", "Phường Phú Trinh",
                "Phường Phú Thủy", "Phường Xuân An", "Xã Thiện Nghiệp",
                "Xã Phong Nẫm", "Xã Tiến Lợi", "Xã Tiến Thành"
        ));

        // 1.2 Thị xã La Gi (9 phường/xã)
        binhThuan.put("Thị xã La Gi", Arrays.asList(
                "Phường Bình Tân", "Phường Bình Hưng", "Phường Phước Lộc",
                "Phường Tân An", "Phường Tân Thiện", "Xã Tân Bình",
                "Xã Tân Hải", "Xã Tân Phước", "Xã Thắng Hải"
        ));

        // 1.3 Huyện Tuy Phong (8 xã/thị trấn)
        binhThuan.put("Huyện Tuy Phong", Arrays.asList(
                "Thị trấn Liên Hương", "Thị trấn Phan Rí Cửa",
                "Xã Phong Phú", "Xã Vĩnh Hảo", "Xã Phước Thể",
                "Xã Hòa Minh", "Xã Chí Công", "Xã Bình Thạnh"
        ));

        // 1.4 Huyện Bắc Bình (18 xã/thị trấn)
        binhThuan.put("Huyện Bắc Bình", Arrays.asList(
                "Thị trấn Chợ Lầu", "Thị trấn Lương Sơn",
                "Xã Bình An", "Xã Bình Tân", "Xã Bình Nghi",
                "Xã Hải Ninh", "Xã Hồng Phong", "Xã Hồng Thái",
                "Xã Phan Điền", "Xã Phan Hiệp", "Xã Phan Hòa",
                "Xã Phan Lâm", "Xã Phan Rí Thành", "Xã Phan Sơn",
                "Xã Phan Thanh", "Xã Phan Tiến", "Xã Sông Bình",
                "Xã Sông Lũy"
        ));

        // 1.5 Huyện Hàm Thuận Bắc (17 xã/thị trấn)
        binhThuan.put("Huyện Hàm Thuận Bắc", Arrays.asList(
                "Thị trấn Ma Lâm", "Thị trấn Phú Long",
                "Xã Đa Mi", "Xã Đông Giang", "Xã Đông Tiến",
                "Xã Hàm Chính", "Xã Hàm Đức", "Xã Hàm Hiệp",
                "Xã Hàm Liêm", "Xã Hàm Phú", "Xã Hàm Thắng",
                "Xã Hàm Trí", "Xã Hồng Liêm", "Xã Hồng Sơn",
                "Xã La Dạ", "Xã Thuận Hòa", "Xã Thuận Minh"
        ));

        // 1.6 Huyện Hàm Thuận Nam (12 xã/thị trấn)
        binhThuan.put("Huyện Hàm Thuận Nam", Arrays.asList(
                "Thị trấn Thuận Nam", "Xã Hàm Cần", "Xã Hàm Cường",
                "Xã Hàm Kiệm", "Xã Hàm Minh", "Xã Hàm Mỹ",
                "Xã Hàm Thạnh", "Xã Mương Mán", "Xã Tân Lập",
                "Xã Tân Thành", "Xã Tân Thuận", "Xã Thuận Quý"
        ));

        // 1.7 Huyện Tánh Linh (13 xã/thị trấn)
        binhThuan.put("Huyện Tánh Linh", Arrays.asList(
                "Thị trấn Lạc Tánh", "Xã Bắc Ruộng", "Xã Đồng Kho",
                "Xã Đức Bình", "Xã Đức Phú", "Xã Đức Thuận",
                "Xã Gia An", "Xã Gia Huynh", "Xã Huy Khiêm",
                "Xã La Ngâu", "Xã Măng Tố", "Xã Nghị Đức",
                "Xã Suối Kiết"
        ));

        // 1.8 Huyện Đức Linh (12 xã/thị trấn)
        binhThuan.put("Huyện Đức Linh", Arrays.asList(
                "Thị trấn Võ Xu", "Thị trấn Đức Tài",
                "Xã Đa Kai", "Xã Đông Hà", "Xã Đức Hạnh",
                "Xã Đức Tín", "Xã Mê Pu", "Xã Nam Chính",
                "Xã Sùng Nhơn", "Xã Tân Hà", "Xã Trà Tân",
                "Xã Vũ Hòa"
        ));

        // 1.9 Huyện Hàm Tân (9 xã/thị trấn)
        binhThuan.put("Huyện Hàm Tân", Arrays.asList(
                "Thị trấn Tân Minh", "Thị trấn Tân Nghĩa",
                "Xã Sông Phan", "Xã Tân Đức", "Xã Tân Hà",
                "Xã Tân Phúc", "Xã Tân Thắng", "Xã Tân Xuân",
                "Xã Thắng Hải"
        ));

        // 1.10 Huyện Phú Quý (3 xã)
        binhThuan.put("Huyện Phú Quý", Arrays.asList(
                "Xã Long Hải", "Xã Ngũ Phụng", "Xã Tam Thanh"
        ));

        data.put("Bình Thuận", binhThuan);

        // ===========================================
        // 2. HỒ CHÍ MINH (ĐẦY ĐỦ 22 QUẬN/HUYỆN)
        // ===========================================
        Map<String, List<String>> hcm = new LinkedHashMap<>();

        // 2.1 Quận 1 (10 phường)
        hcm.put("Quận 1", Arrays.asList(
                "Phường Bến Nghé", "Phường Bến Thành", "Phường Cô Giang",
                "Phường Cầu Kho", "Phường Đa Kao", "Phường Nguyễn Cư Trinh",
                "Phường Nguyễn Thái Bình", "Phường Phạm Ngũ Lão", "Phường Tân Định",
                "Phường Nguyễn Trãi"
        ));

        // 2.2 Quận 3 (14 phường)
        hcm.put("Quận 3", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10",
                "Phường 11", "Phường 12", "Phường 13", "Phường 14"
        ));

        // 2.3 Quận 4 (15 phường)
        hcm.put("Quận 4", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 8", "Phường 9", "Phường 10", "Phường 12",
                "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 18"
        ));

        // 2.4 Quận 5 (15 phường)
        hcm.put("Quận 5", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10",
                "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15"
        ));

        // 2.5 Quận 6 (14 phường)
        hcm.put("Quận 6", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10",
                "Phường 11", "Phường 12", "Phường 13", "Phường 14"
        ));

        // 2.6 Quận 7 (10 phường)
        hcm.put("Quận 7", Arrays.asList(
                "Phường Bình Thuận", "Phường Phú Mỹ", "Phường Phú Thuận",
                "Phường Tân Hưng", "Phường Tân Kiểng", "Phường Tân Phong",
                "Phường Tân Phú", "Phường Tân Quy", "Phường Tân Thuận Đông",
                "Phường Tân Thuận Tây"
        ));

        // 2.7 Quận 8 (16 phường)
        hcm.put("Quận 8", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10",
                "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15",
                "Phường 16"
        ));

        // 2.8 Quận 10 (15 phường)
        hcm.put("Quận 10", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10",
                "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15"
        ));

        // 2.9 Quận 11 (16 phường)
        hcm.put("Quận 11", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10",
                "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15",
                "Phường 16"
        ));

        // 2.10 Quận 12 (11 phường)
        hcm.put("Quận 12", Arrays.asList(
                "Phường An Phú Đông", "Phường Đông Hưng Thuận", "Phường Hiệp Thành",
                "Phường Tân Chánh Hiệp", "Phường Tân Hưng Thuận", "Phường Tân Thới Hiệp",
                "Phường Tân Thới Nhất", "Phường Thạnh Lộc", "Phường Thạnh Xuân",
                "Phường Thới An", "Phường Trung Mỹ Tây"
        ));

        // 2.11 Quận Bình Tân (10 phường)
        hcm.put("Quận Bình Tân", Arrays.asList(
                "Phường An Lạc", "Phường An Lạc A", "Phường Bình Hưng Hòa",
                "Phường Bình Hưng Hòa A", "Phường Bình Hưng Hòa B", "Phường Bình Trị Đông",
                "Phường Bình Trị Đông A", "Phường Bình Trị Đông B", "Phường Tân Tạo",
                "Phường Tân Tạo A"
        ));

        // 2.12 Quận Bình Thạnh (20 phường)
        hcm.put("Quận Bình Thạnh", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 5", "Phường 6",
                "Phường 7", "Phường 11", "Phường 12", "Phường 13", "Phường 14",
                "Phường 15", "Phường 17", "Phường 19", "Phường 21", "Phường 22",
                "Phường 24", "Phường 25", "Phường 26", "Phường 27", "Phường 28"
        ));

        // 2.13 Quận Gò Vấp (16 phường)
        hcm.put("Quận Gò Vấp", Arrays.asList(
                "Phường 1", "Phường 3", "Phường 4", "Phường 5", "Phường 6",
                "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11",
                "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16",
                "Phường 17"
        ));

        // 2.14 Quận Phú Nhuận (15 phường)
        hcm.put("Quận Phú Nhuận", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11",
                "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 17"
        ));

        // 2.15 Quận Tân Bình (15 phường)
        hcm.put("Quận Tân Bình", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10",
                "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15"
        ));

        // 2.16 Quận Tân Phú (11 phường)
        hcm.put("Quận Tân Phú", Arrays.asList(
                "Phường Hiệp Tân", "Phường Hòa Thạnh", "Phường Phú Thạnh",
                "Phường Phú Thọ Hòa", "Phường Phú Trung", "Phường Sơn Kỳ",
                "Phường Tân Quý", "Phường Tân Sơn Nhì", "Phường Tân Thành",
                "Phường Tân Thới Hòa", "Phường Tây Thạnh"
        ));

        // 2.17 Thành phố Thủ Đức (34 phường)
        hcm.put("Thành phố Thủ Đức", Arrays.asList(
                "Phường An Khánh", "Phường An Lợi Đông", "Phường An Phú",
                "Phường Bình Chiểu", "Phường Bình Thọ", "Phường Bình Trưng Đông",
                "Phường Bình Trưng Tây", "Phường Cát Lái", "Phường Hiệp Bình Chánh",
                "Phường Hiệp Bình Phước", "Phường Hiệp Phú", "Phường Linh Chiểu",
                "Phường Linh Đông", "Phường Linh Tây", "Phường Linh Trung",
                "Phường Linh Xuân", "Phường Long Bình", "Phường Long Phước",
                "Phường Long Thạnh Mỹ", "Phường Long Trường", "Phường Phú Hữu",
                "Phường Phước Bình", "Phường Phước Long A", "Phường Phước Long B",
                "Phường Tam Bình", "Phường Tam Phú", "Phường Tân Phú",
                "Phường Tăng Nhơn Phú A", "Phường Tăng Nhơn Phú B", "Phường Thạnh Mỹ Lợi",
                "Phường Thảo Điền", "Phường Trường Thạnh", "Phường Trường Thọ",
                "Phường Bình An"
        ));

        // 2.18 Huyện Bình Chánh (16 xã/thị trấn)
        hcm.put("Huyện Bình Chánh", Arrays.asList(
                "Thị trấn Tân Túc", "Xã An Phú Tây", "Xã Bình Chánh",
                "Xã Bình Hưng", "Xã Bình Lợi", "Xã Đa Phước",
                "Xã Hưng Long", "Xã Lê Minh Xuân", "Xã Phạm Văn Hai",
                "Xã Phong Phú", "Xã Quy Đức", "Xã Tân Kiên",
                "Xã Tân Nhựt", "Xã Tân Quý Tây", "Xã Vĩnh Lộc A",
                "Xã Vĩnh Lộc B"
        ));

        // 2.19 Huyện Cần Giờ (7 xã/thị trấn)
        hcm.put("Huyện Cần Giờ", Arrays.asList(
                "Thị trấn Cần Thạnh", "Xã An Thới Đông", "Xã Bình Khánh",
                "Xã Long Hòa", "Xã Lý Nhơn", "Xã Tam Thôn Hiệp",
                "Xã Thạnh An"
        ));

        // 2.20 Huyện Củ Chi (21 xã/thị trấn)
        hcm.put("Huyện Củ Chi", Arrays.asList(
                "Thị trấn Củ Chi", "Xã An Nhơn Tây", "Xã An Phú",
                "Xã Bình Mỹ", "Xã Hòa Phú", "Xã Nhuận Đức",
                "Xã Phạm Văn Cội", "Xã Phú Hòa Đông", "Xã Phú Mỹ Hưng",
                "Xã Phước Hiệp", "Xã Phước Thạnh", "Xã Phước Vĩnh An",
                "Xã Tân An Hội", "Xã Tân Phú Trung", "Xã Tân Thạnh Đông",
                "Xã Tân Thạnh Tây", "Xã Tân Thông Hội", "Xã Thái Mỹ",
                "Xã Trung An", "Xã Trung Lập Hạ", "Xã Trung Lập Thượng"
        ));

        // 2.21 Huyện Hóc Môn (12 xã/thị trấn)
        hcm.put("Huyện Hóc Môn", Arrays.asList(
                "Thị trấn Hóc Môn", "Xã Bà Điểm", "Xã Đông Thạnh",
                "Xã Nhị Bình", "Xã Tân Hiệp", "Xã Tân Thới Nhì",
                "Xã Tân Xuân", "Xã Thới Tam Thôn", "Xã Trung Chánh",
                "Xã Xuân Thới Đông", "Xã Xuân Thới Sơn", "Xã Xuân Thới Thượng"
        ));

        // 2.22 Huyện Nhà Bè (7 xã/thị trấn)
        hcm.put("Huyện Nhà Bè", Arrays.asList(
                "Thị trấn Nhà Bè", "Xã Hiệp Phước", "Xã Long Thới",
                "Xã Nhơn Đức", "Xã Phú Xuân", "Xã Phước Kiển",
                "Xã Phước Lộc"
        ));

        data.put("Hồ Chí Minh", hcm);

        // ===========================================
        // 3. HÀ NỘI (ĐẦY ĐỦ 30 QUẬN/HUYỆN)
        // ===========================================
        Map<String, List<String>> hanoi = new LinkedHashMap<>();

        // 3.1 Quận Ba Đình (14 phường)
        hanoi.put("Quận Ba Đình", Arrays.asList(
                "Phường Phúc Xá", "Phường Trúc Bạch", "Phường Vĩnh Phúc",
                "Phường Cống Vị", "Phường Liễu Giai", "Phường Nguyễn Trung Trực",
                "Phường Quán Thánh", "Phường Ngọc Hà", "Phường Điện Biên",
                "Phường Đội Cấn", "Phường Ngọc Khánh", "Phường Kim Mã",
                "Phường Giảng Võ", "Phường Thành Công"
        ));

        // 3.2 Quận Hoàn Kiếm (18 phường)
        hanoi.put("Quận Hoàn Kiếm", Arrays.asList(
                "Phường Phúc Tân", "Phường Đồng Xuân", "Phường Hàng Mã",
                "Phường Hàng Buồm", "Phường Hàng Đào", "Phường Hàng Bồ",
                "Phường Cửa Đông", "Phường Lý Thái Tổ", "Phường Hàng Bạc",
                "Phường Hàng Gai", "Phường Chương Dương", "Phường Hàng Trống",
                "Phường Cửa Nam", "Phường Hàng Bông", "Phường Tràng Tiền",
                "Phường Trần Hưng Đạo", "Phường Phan Chu Trinh", "Phường Hàng Bài"
        ));

        // 3.3 Quận Hai Bà Trưng (20 phường)
        hanoi.put("Quận Hai Bà Trưng", Arrays.asList(
                "Phường Nguyễn Du", "Phường Bạch Đằng", "Phường Phạm Đình Hổ",
                "Phường Bùi Thị Xuân", "Phường Ngô Thì Nhậm", "Phường Lê Đại Hành",
                "Phường Đồng Nhân", "Phường Phố Huế", "Phường Đống Mác",
                "Phường Thanh Lương", "Phường Thanh Nhàn", "Phường Cầu Dền",
                "Phường Bách Khoa", "Phường Đồng Tâm", "Phường Vĩnh Tuy",
                "Phường Bạch Mai", "Phường Quỳnh Mai", "Phường Quỳnh Lôi",
                "Phường Minh Khai", "Phường Trương Định"
        ));

        // 3.4 Quận Đống Đa (21 phường)
        hanoi.put("Quận Đống Đa", Arrays.asList(
                "Phường Cát Linh", "Phường Văn Miếu", "Phường Quốc Tử Giám",
                "Phường Láng Thượng", "Phường Ô Chợ Dừa", "Phường Văn Chương",
                "Phường Hàng Bột", "Phường Láng Hạ", "Phường Khâm Thiên",
                "Phường Thổ Quan", "Phường Nam Đồng", "Phường Trung Phụng",
                "Phường Quang Trung", "Phường Trung Liệt", "Phường Phương Liên",
                "Phường Thịnh Quang", "Phường Trung Tự", "Phường Kim Liên",
                "Phường Phương Mai", "Phường Ngã Tư Sở", "Phường Khương Thượng"
        ));

        // 3.5 Quận Tây Hồ (8 phường)
        hanoi.put("Quận Tây Hồ", Arrays.asList(
                "Phường Phú Thượng", "Phường Nhật Tân", "Phường Tứ Liên",
                "Phường Quảng An", "Phường Xuân La", "Phường Yên Phụ",
                "Phường Bưởi", "Phường Thụy Khuê"
        ));

        // 3.6 Quận Cầu Giấy (8 phường)
        hanoi.put("Quận Cầu Giấy", Arrays.asList(
                "Phường Nghĩa Đô", "Phường Nghĩa Tân", "Phường Mai Dịch",
                "Phường Dịch Vọng", "Phường Dịch Vọng Hậu", "Phường Quan Hoa",
                "Phường Yên Hòa", "Phường Trung Hòa"
        ));

        // 3.7 Quận Thanh Xuân (11 phường)
        hanoi.put("Quận Thanh Xuân", Arrays.asList(
                "Phường Nhân Chính", "Phường Thượng Đình", "Phường Khương Trung",
                "Phường Khương Mai", "Phường Thanh Xuân Trung", "Phường Phương Liệt",
                "Phường Hạ Đình", "Phường Khương Đình", "Phường Thanh Xuân Bắc",
                "Phường Thanh Xuân Nam", "Phường Kim Giang"
        ));

        // 3.8 Quận Hoàng Mai (14 phường)
        hanoi.put("Quận Hoàng Mai", Arrays.asList(
                "Phường Thanh Trì", "Phường Vĩnh Hưng", "Phường Định Công",
                "Phường Mai Động", "Phường Tương Mai", "Phường Đại Kim",
                "Phường Tân Mai", "Phường Hoàng Văn Thụ", "Phường Giáp Bát",
                "Phường Lĩnh Nam", "Phường Thịnh Liệt", "Phường Trần Phú",
                "Phường Hoàng Liệt", "Phường Yên Sở"
        ));

        // 3.9 Quận Long Biên (14 phường)
        hanoi.put("Quận Long Biên", Arrays.asList(
                "Phường Long Biên", "Phường Thạch Bàn", "Phường Phúc Đồng",
                "Phường Cự Khối", "Phường Đức Giang", "Phường Việt Hưng",
                "Phường Gia Thụy", "Phường Ngọc Lâm", "Phường Hội Xá",
                "Phường Thượng Thanh", "Phường Bồ Đề", "Phường Sài Đồng",
                "Phường Phúc Lợi", "Phường Giang Biên"
        ));

        // 3.10 Quận Nam Từ Liêm (10 phường)
        hanoi.put("Quận Nam Từ Liêm", Arrays.asList(
                "Phường Cầu Diễn", "Phường Xuân Phương", "Phường Phương Canh",
                "Phường Mỹ Đình 1", "Phường Mỹ Đình 2", "Phường Tây Mỗ",
                "Phường Mễ Trì", "Phường Phú Đô", "Phường Đại Mỗ",
                "Phường Trung Văn"
        ));

        // 3.11 Quận Bắc Từ Liêm (13 phường)
        hanoi.put("Quận Bắc Từ Liêm", Arrays.asList(
                "Phường Thượng Cát", "Phường Liên Mạc", "Phường Đông Ngạc",
                "Phường Đức Thắng", "Phường Thụy Phương", "Phường Tây Tựu",
                "Phường Xuân Đỉnh", "Phường Xuân Tảo", "Phường Minh Khai",
                "Phường Cổ Nhuế 1", "Phường Cổ Nhuế 2", "Phường Phú Diễn",
                "Phường Phúc Diễn"
        ));

        // 3.12 Quận Hà Đông (15 phường)
        hanoi.put("Quận Hà Đông", Arrays.asList(
                "Phường Quang Trung", "Phường Vạn Phúc", "Phường Văn Quán",
                "Phường Phúc La", "Phường Yết Kiêu", "Phường Nguyễn Trãi",
                "Phường Mỗ Lao", "Phường Hà Cầu", "Phường La Khê",
                "Phường Phú La", "Phường Phú Lương", "Phường Kiến Hưng",
                "Phường Dương Nội", "Phường Đồng Mai", "Phường Biên Giang"
        ));

        // 3.13 Huyện Ba Vì (31 xã/thị trấn)
        hanoi.put("Huyện Ba Vì", Arrays.asList(
                "Thị trấn Tây Đằng", "Xã Ba Trại", "Xã Ba Vì", "Xã Cẩm Lĩnh",
                "Xã Cam Thượng", "Xã Châu Sơn", "Xã Chu Minh", "Xã Cổ Đô",
                "Xã Đông Quang", "Xã Đồng Thái", "Xã Khánh Thượng", "Xã Minh Châu",
                "Xã Minh Quang", "Xã Phong Vân", "Xã Phú Châu", "Xã Phú Cường",
                "Xã Phú Đông", "Xã Phú Phương", "Xã Phú Sơn", "Xã Sơn Đà",
                "Xã Tản Hồng", "Xã Tản Lĩnh", "Xã Thái Hòa", "Xã Thuần Mỹ",
                "Xã Thụy An", "Xã Tiên Phong", "Xã Tòng Bạt", "Xã Vân Hòa",
                "Xã Vạn Thắng", "Xã Vật Lại", "Xã Yên Bài"
        ));

        // 3.14 Huyện Chương Mỹ (30 xã/thị trấn)
        hanoi.put("Huyện Chương Mỹ", Arrays.asList(
                "Thị trấn Chúc Sơn", "Thị trấn Xuân Mai", "Xã Đại Yên", "Xã Đồng Lạc",
                "Xã Đồng Phú", "Xã Đông Phương Yên", "Xã Đông Sơn", "Xã Hòa Chính",
                "Xã Hoàng Diệu", "Xã Hoàng Văn Thụ", "Xã Hồng Phong", "Xã Hợp Đồng",
                "Xã Hữu Văn", "Xã Lam Điền", "Xã Mỹ Lương", "Xã Nam Phương Tiến",
                "Xã Ngọc Hòa", "Xã Phú Nam An", "Xã Phú Nghĩa", "Xã Phụng Châu",
                "Xã Quảng Bị", "Xã Tân Tiến", "Xã Thanh Bình", "Xã Thụy Hương",
                "Xã Thủy Xuân Tiên", "Xã Tiên Phương", "Xã Tốt Động", "Xã Trần Phú",
                "Xã Trung Hòa", "Xã Văn Võ"
        ));

        // 3.15 Huyện Đan Phượng (15 xã/thị trấn)
        hanoi.put("Huyện Đan Phượng", Arrays.asList(
                "Thị trấn Phùng", "Xã Đan Phượng", "Xã Đồng Tháp", "Xã Hạ Mỗ",
                "Xã Hồng Hà", "Xã Liên Hà", "Xã Liên Hồng", "Xã Liên Trung",
                "Xã Phương Đình", "Xã Song Phượng", "Xã Tân Hội", "Xã Tân Lập",
                "Xã Thọ An", "Xã Thọ Xuân", "Xã Trung Châu"
        ));

        // 3.16 Huyện Đông Anh (23 xã/thị trấn)
        hanoi.put("Huyện Đông Anh", Arrays.asList(
                "Thị trấn Đông Anh", "Xã Bắc Hồng", "Xã Cổ Loa", "Xã Đại Mạch",
                "Xã Đông Hội", "Xã Dục Tú", "Xã Hải Bối", "Xã Kim Chung",
                "Xã Kim Nỗ", "Xã Liên Hà", "Xã Mai Lâm", "Xã Nam Hồng",
                "Xã Nguyên Khê", "Xã Tàm Xá", "Xã Thụy Lâm", "Xã Tiên Dương",
                "Xã Uy Nỗ", "Xã Vân Hà", "Xã Vân Nội", "Xã Việt Hùng",
                "Xã Vĩnh Ngọc", "Xã Võng La", "Xã Xuân Canh"
        ));

        // 3.17 Huyện Gia Lâm (20 xã/thị trấn)
        hanoi.put("Huyện Gia Lâm", Arrays.asList(
                "Thị trấn Trâu Quỳ", "Thị trấn Yên Viên", "Xã Bát Tràng", "Xã Cổ Bi",
                "Xã Đa Tốn", "Xã Đặng Xá", "Xã Đình Xuyên", "Xã Dương Hà",
                "Xã Dương Quang", "Xã Dương Xá", "Xã Kiêu Kỵ", "Xã Kim Lan",
                "Xã Kim Sơn", "Xã Lệ Chi", "Xã Ninh Hiệp", "Xã Phù Đổng",
                "Xã Phú Thị", "Xã Trung Mầu", "Xã Văn Đức", "Xã Yên Thường"
        ));

        // 3.18 Huyện Hoài Đức (17 xã/thị trấn)
        hanoi.put("Huyện Hoài Đức", Arrays.asList(
                "Thị trấn Trạm Trôi", "Xã An Khánh", "Xã An Thượng", "Xã Cát Quế",
                "Xã Đắc Sở", "Xã Di Trạch", "Xã Đông La", "Xã Đức Giang",
                "Xã Đức Thượng", "Xã Dương Liễu", "Xã Kim Chung", "Xã La Phù",
                "Xã Lại Yên", "Xã Minh Khai", "Xã Sơn Đồng", "Xã Song Phương",
                "Xã Tiền Yên", "Xã Vân Canh", "Xã Vân Côn", "Xã Yên Sở"
        ));

        // 3.19 Huyện Mê Linh (18 xã/thị trấn)
        hanoi.put("Huyện Mê Linh", Arrays.asList(
                "Thị trấn Chi Đông", "Thị trấn Quang Minh", "Xã Chu Phan", "Xã Đại Thịnh",
                "Xã Hoàng Kim", "Xã Kim Hoa", "Xã Liên Mạc", "Xã Mê Linh",
                "Xã Tam Đồng", "Xã Thạch Đà", "Xã Thanh Lâm", "Xã Tiền Phong",
                "Xã Tiến Thắng", "Xã Tiến Thịnh", "Xã Tráng Việt", "Xã Tự Lập",
                "Xã Văn Khê", "Xã Vạn Yên"
        ));

        // 3.20 Huyện Mỹ Đức (21 xã/thị trấn)
        hanoi.put("Huyện Mỹ Đức", Arrays.asList(
                "Thị trấn Đại Nghĩa", "Xã An Mỹ", "Xã An Phú", "Xã An Tiến",
                "Xã Bột Xuyên", "Xã Đại Hưng", "Xã Đốc Tín", "Xã Đồng Tâm",
                "Xã Hồng Sơn", "Xã Hợp Thanh", "Xã Hợp Tiến", "Xã Hùng Tiến",
                "Xã Hương Sơn", "Xã Lê Thanh", "Xã Mỹ Thành", "Xã Phù Lưu Tế",
                "Xã Phúc Lâm", "Xã Phùng Xá", "Xã Thượng Lâm", "Xã Tuy Lai",
                "Xã Vạn Kim", "Xã Xuy Xá"
        ));

        // 3.21 Huyện Phú Xuyên (22 xã/thị trấn)
        hanoi.put("Huyện Phú Xuyên", Arrays.asList(
                "Thị trấn Phú Xuyên", "Thị trấn Phú Minh", "Xã Bạch Hạ", "Xã Châu Can",
                "Xã Chuyên Mỹ", "Xã Đại Thắng", "Xã Đại Xuyên", "Xã Hoàng Long",
                "Xã Hồng Minh", "Xã Hồng Thái", "Xã Khai Thái", "Xã Minh Tân",
                "Xã Nam Phong", "Xã Nam Tiến", "Xã Nam Triều", "Xã Phú Túc",
                "Xã Phú Yên", "Xã Phúc Tiến", "Xã Phượng Dực", "Xã Quang Lãng",
                "Xã Quang Trung", "Xã Sơn Hà", "Xã Tân Dân", "Xã Thụy Phú",
                "Xã Tri Thủy", "Xã Tri Trung", "Xã Văn Hoàng", "Xã Văn Nhân",
                "Xã Vân Từ"
        ));

        // 3.22 Huyện Phúc Thọ (20 xã/thị trấn)
        hanoi.put("Huyện Phúc Thọ", Arrays.asList(
                "Thị trấn Phúc Thọ", "Xã Cẩm Đình", "Xã Hát Môn", "Xã Hiệp Thuận",
                "Xã Liên Hiệp", "Xã Long Xuyên", "Xã Ngọc Tảo", "Xã Phúc Hòa",
                "Xã Phụng Thượng", "Xã Phương Độ", "Xã Sen Chiểu", "Xã Tam Hiệp",
                "Xã Tam Thuấn", "Xã Thanh Đa", "Xã Thọ Lộc", "Xã Thượng Cốc",
                "Xã Tích Giang", "Xã Trạch Mỹ Lộc", "Xã Vân Hà", "Xã Võng Xuyên",
                "Xã Xuân Đình", "Xã Xuân Phú"
        ));

        // 3.23 Huyện Quốc Oai (20 xã/thị trấn)
        hanoi.put("Huyện Quốc Oai", Arrays.asList(
                "Thị trấn Quốc Oai", "Xã Cấn Hữu", "Xã Cộng Hòa", "Xã Đại Thành",
                "Xã Đồng Quang", "Xã Đông Xuân", "Xã Đông Yên", "Xã Hòa Thạch",
                "Xã Liệp Tuyết", "Xã Nghĩa Hương", "Xã Ngọc Liệp", "Xã Ngọc Mỹ",
                "Xã Phú Cát", "Xã Phú Mãn", "Xã Phượng Cách", "Xã Sài Sơn",
                "Xã Tân Hòa", "Xã Tân Phú", "Xã Thạch Thán", "Xã Tuyết Nghĩa",
                "Xã Yên Sơn"
        ));

        // 3.24 Huyện Sóc Sơn (25 xã/thị trấn)
        hanoi.put("Huyện Sóc Sơn", Arrays.asList(
                "Thị trấn Sóc Sơn", "Xã Bắc Phú", "Xã Bắc Sơn", "Xã Đông Xuân",
                "Xã Đức Hòa", "Xã Hiền Ninh", "Xã Hồng Kỳ", "Xã Kim Lũ",
                "Xã Mai Đình", "Xã Minh Phú", "Xã Minh Trí", "Xã Nam Sơn",
                "Xã Phú Cường", "Xã Phù Linh", "Xã Phù Lỗ", "Xã Phú Minh",
                "Xã Quang Tiến", "Xã Tân Dân", "Xã Tân Hưng", "Xã Tân Minh",
                "Xã Thanh Xuân", "Xã Tiên Dược", "Xã Trung Giã", "Xã Việt Long",
                "Xã Xuân Giang", "Xã Xuân Thu"
        ));

        // 3.25 Huyện Thạch Thất (22 xã/thị trấn)
        hanoi.put("Huyện Thạch Thất", Arrays.asList(
                "Thị trấn Liên Quan", "Xã Bình Phú", "Xã Bình Yên", "Xã Cẩm Yên",
                "Xã Cần Kiệm", "Xã Canh Nậu", "Xã Chàng Sơn", "Xã Đại Đồng",
                "Xã Dị Nậu", "Xã Đồng Trúc", "Xã Hạ Bằng", "Xã Hương Ngải",
                "Xã Hữu Bằng", "Xã Kim Quan", "Xã Lại Thượng", "Xã Phú Kim",
                "Xã Phùng Xá", "Xã Tân Xã", "Xã Thạch Hòa", "Xã Thạch Xá",
                "Xã Tiến Xuân", "Xã Yên Bình", "Xã Yên Trung"
        ));

        // 3.26 Huyện Thanh Oai (20 xã/thị trấn)
        hanoi.put("Huyện Thanh Oai", Arrays.asList(
                "Thị trấn Kim Bài", "Xã Bích Hòa", "Xã Bình Minh", "Xã Cao Dương",
                "Xã Cao Viên", "Xã Cự Khê", "Xã Dân Hòa", "Xã Đỗ Động",
                "Xã Hồng Dương", "Xã Kim An", "Xã Kim Thư", "Xã Liên Châu",
                "Xã Mỹ Hưng", "Xã Phương Trung", "Xã Tam Hưng", "Xã Tân Ước",
                "Xã Thanh Cao", "Xã Thanh Mai", "Xã Thanh Thùy", "Xã Thanh Văn",
                "Xã Xuân Dương"
        ));

        // 3.27 Huyện Thanh Trì (15 xã/thị trấn)
        hanoi.put("Huyện Thanh Trì", Arrays.asList(
                "Thị trấn Văn Điển", "Xã Đại Áng", "Xã Đông Mỹ", "Xã Duyên Hà",
                "Xã Hữu Hòa", "Xã Liên Ninh", "Xã Ngọc Hồi", "Xã Ngũ Hiệp",
                "Xã Tả Thanh Oai", "Xã Tam Hiệp", "Xã Tân Triều", "Xã Thanh Liệt",
                "Xã Tứ Hiệp", "Xã Vạn Phúc", "Xã Vĩnh Quỳnh", "Xã Yên Mỹ"
        ));

        // 3.28 Huyện Thường Tín (28 xã/thị trấn)
        hanoi.put("Huyện Thường Tín", Arrays.asList(
                "Thị trấn Thường Tín", "Xã Chương Dương", "Xã Dũng Tiến", "Xã Duyên Thái",
                "Xã Hà Hồi", "Xã Hiền Giang", "Xã Hòa Bình", "Xã Hồng Vân",
                "Xã Khánh Hà", "Xã Lê Lợi", "Xã Liên Phương", "Xã Minh Cường",
                "Xã Nghiêm Xuyên", "Xã Nguyễn Trãi", "Xã Nhị Khê", "Xã Ninh Sở",
                "Xã Quất Động", "Xã Tân Minh", "Xã Thắng Lợi", "Xã Thống Nhất",
                "Xã Thư Phú", "Xã Tiền Phong", "Xã Tô Hiệu", "Xã Tự Nhiên",
                "Xã Văn Bình", "Xã Vạn Điểm", "Xã Văn Phú", "Xã Vân Tảo",
                "Xã Văn Tự"
        ));

        // 3.29 Huyện Ứng Hòa (26 xã/thị trấn)
        hanoi.put("Huyện Ứng Hòa", Arrays.asList(
                "Thị trấn Vân Đình", "Xã Cao Thành", "Xã Đại Cường", "Xã Đại Hùng",
                "Xã Đội Bình", "Xã Đông Lỗ", "Xã Đồng Tân", "Xã Đồng Tiến",
                "Xã Hòa Lâm", "Xã Hòa Nam", "Xã Hòa Phú", "Xã Hoa Sơn",
                "Xã Hòa Xá", "Xã Hồng Quang", "Xã Kim Đường", "Xã Liên Bạt",
                "Xã Lưu Hoàng", "Xã Minh Đức", "Xã Phù Lưu", "Xã Phương Tú",
                "Xã Quảng Phú Cầu", "Xã Sơn Công", "Xã Tảo Dương Văn", "Xã Trầm Lộng",
                "Xã Trung Tú", "Xã Trường Thịnh", "Xã Vạn Thái", "Xã Viên An",
                "Xã Viên Nội"
        ));

        // 3.30 Thị xã Sơn Tây (15 phường/xã)
        hanoi.put("Thị xã Sơn Tây", Arrays.asList(
                "Phường Lê Lợi", "Phường Ngô Quyền", "Phường Phú Thịnh", "Phường Quang Trung",
                "Phường Sơn Lộc", "Phường Trung Hưng", "Phường Trung Sơn Trầm", "Phường Viên Sơn",
                "Phường Xuân Khanh", "Xã Cổ Đông", "Xã Đường Lâm", "Xã Kim Sơn",
                "Xã Sơn Đông", "Xã Thanh Mỹ", "Xã Xuân Sơn"
        ));

        data.put("Hà Nội", hanoi);

        // ===========================================
        // 4. ĐÀ NẴNG (ĐẦY ĐỦ 8 QUẬN/HUYỆN)
        // ===========================================
        Map<String, List<String>> danang = new LinkedHashMap<>();

        // 4.1 Quận Hải Châu (13 phường)
        danang.put("Quận Hải Châu", Arrays.asList(
                "Phường Hòa Cường Bắc", "Phường Hòa Cường Nam", "Phường Hòa Thuận Đông",
                "Phường Hòa Thuận Tây", "Phường Bình Hiên", "Phường Bình Thuận",
                "Phường Nam Dương", "Phường Phước Ninh", "Phường Thạch Thang",
                "Phường Thanh Bình", "Phường Thuận Phước", "Phường Hải Châu I",
                "Phường Hải Châu II"
        ));

        // 4.2 Quận Thanh Khê (10 phường)
        danang.put("Quận Thanh Khê", Arrays.asList(
                "Phường Chính Gián", "Phường Hòa Khê", "Phường Tam Thuận",
                "Phường Tân Chính", "Phường Thạc Gián", "Phường Thanh Khê Đông",
                "Phường Thanh Khê Tây", "Phường Xuân Hà", "Phường An Khê",
                "Phường Vĩnh Trung"
        ));

        // 4.3 Quận Sơn Trà (7 phường)
        danang.put("Quận Sơn Trà", Arrays.asList(
                "Phường An Hải Bắc", "Phường An Hải Đông", "Phường An Hải Tây",
                "Phường Mân Thái", "Phường Nại Hiên Đông", "Phường Phước Mỹ",
                "Phường Thọ Quang"
        ));

        // 4.4 Quận Ngũ Hành Sơn (4 phường)
        danang.put("Quận Ngũ Hành Sơn", Arrays.asList(
                "Phường Mỹ An", "Phường Khuê Mỹ", "Phường Hòa Quý",
                "Phường Hòa Hải"
        ));

        // 4.5 Quận Liên Chiểu (5 phường)
        danang.put("Quận Liên Chiểu", Arrays.asList(
                "Phường Hòa Hiệp Bắc", "Phường Hòa Hiệp Nam", "Phường Hòa Khánh Bắc",
                "Phường Hòa Khánh Nam", "Phường Hòa Minh"
        ));

        // 4.6 Quận Cẩm Lệ (6 phường)
        danang.put("Quận Cẩm Lệ", Arrays.asList(
                "Phường Hòa An", "Phường Hòa Phát", "Phường Hòa Thọ Đông",
                "Phường Hòa Thọ Tây", "Phường Hòa Xuân", "Phường Khuê Trung"
        ));

        // 4.7 Huyện Hòa Vang (11 xã)
        danang.put("Huyện Hòa Vang", Arrays.asList(
                "Xã Hòa Bắc", "Xã Hòa Châu", "Xã Hòa Khương",
                "Xã Hòa Liên", "Xã Hòa Nhơn", "Xã Hòa Ninh",
                "Xã Hòa Phong", "Xã Hòa Phú", "Xã Hòa Phước",
                "Xã Hòa Sơn", "Xã Hòa Tiến"
        ));

        // 4.8 Huyện Hoàng Sa
        danang.put("Huyện Hoàng Sa", new ArrayList<>());

        data.put("Đà Nẵng", danang);

        // ===========================================
        // 5. HẢI PHÒNG (ĐẦY ĐỦ 15 QUẬN/HUYỆN)
        // ===========================================
        Map<String, List<String>> haiphong = new LinkedHashMap<>();

        // 5.1 Quận Hồng Bàng (8 phường)
        haiphong.put("Quận Hồng Bàng", Arrays.asList(
                "Phường Hoàng Văn Thụ", "Phường Hùng Vương", "Phường Minh Khai",
                "Phường Phan Bội Châu", "Phường Quán Toan", "Phường Sở Dầu",
                "Phường Thượng Lý", "Phường Trại Chuối"
        ));

        // 5.2 Quận Lê Chân (15 phường)
        haiphong.put("Quận Lê Chân", Arrays.asList(
                "Phường An Biên", "Phường An Dương", "Phường Cát Dài",
                "Phường Đông Hải", "Phường Dư Hàng", "Phường Dư Hàng Kênh",
                "Phường Hàng Kênh", "Phường Hồ Nam", "Phường Kênh Dương",
                "Phường Lam Sơn", "Phường Nghĩa Xá", "Phường Niệm Nghĩa",
                "Phường Trại Cau", "Phường Trần Nguyên Hãn", "Phường Vĩnh Niệm"
        ));

        // 5.3 Quận Ngô Quyền (12 phường)
        haiphong.put("Quận Ngô Quyền", Arrays.asList(
                "Phường Cầu Đất", "Phường Cầu Tre", "Phường Đằng Giang",
                "Phường Đông Khê", "Phường Đổng Quốc Bình", "Phường Gia Viên",
                "Phường Lạc Viên", "Phường Lạch Tray", "Phường Lê Lợi",
                "Phường Máy Chai", "Phường Máy Tơ", "Phường Vạn Mỹ"
        ));

        // 5.4 Quận Kiến An (10 phường)
        haiphong.put("Quận Kiến An", Arrays.asList(
                "Phường Bắc Sơn", "Phường Đồng Hòa", "Phường Lãm Hà",
                "Phường Nam Sơn", "Phường Ngọc Sơn", "Phường Phù Liễn",
                "Phường Quán Trữ", "Phường Tràng Minh", "Phường Trần Thành Ngọ",
                "Phường Văn Đẩu"
        ));

        // 5.5 Quận Hải An (8 phường)
        haiphong.put("Quận Hải An", Arrays.asList(
                "Phường Cát Bi", "Phường Đằng Hải", "Phường Đằng Lâm",
                "Phường Đông Hải 1", "Phường Đông Hải 2", "Phường Nam Hải",
                "Phường Thành Tô", "Phường Tràng Cát"
        ));

        // 5.6 Quận Dương Kinh (6 phường)
        haiphong.put("Quận Dương Kinh", Arrays.asList(
                "Phường Anh Dũng", "Phường Đa Phúc", "Phường Hải Thành",
                "Phường Hòa Nghĩa", "Phường Hưng Đạo", "Phường Tân Thành"
        ));

        // 5.7 Quận Đồ Sơn (7 phường)
        haiphong.put("Quận Đồ Sơn", Arrays.asList(
                "Phường Bàng La", "Phường Hợp Đức", "Phường Minh Đức",
                "Phường Ngọc Hải", "Phường Ngọc Xuyên", "Phường Vạn Hương",
                "Phường Vạn Sơn"
        ));

        // 5.8 Huyện An Dương (12 xã/thị trấn)
        haiphong.put("Huyện An Dương", Arrays.asList(
                "Thị trấn An Dương", "Xã An Đồng", "Xã An Hòa", "Xã An Hồng",
                "Xã An Hưng", "Xã An Lão", "Xã An Thái", "Xã Bắc Sơn",
                "Xã Đại Bản", "Xã Đặng Cương", "Xã Hồng Phong", "Xã Lê Lợi",
                "Xã Lê Thiện", "Xã Nam Sơn", "Xã Quốc Tuấn", "Xã Tân Tiến"
        ));

        // 5.9 Huyện An Lão (15 xã/thị trấn)
        haiphong.put("Huyện An Lão", Arrays.asList(
                "Thị trấn An Lão", "Thị trấn Trường Sơn", "Xã An Thái", "Xã An Thắng",
                "Xã An Thọ", "Xã An Tiến", "Xã Bát Trang", "Xã Chiến Thắng",
                "Xã Mỹ Đức", "Xã Quang Hưng", "Xã Quang Trung", "Xã Tân Dân",
                "Xã Tân Viên", "Xã Thái Sơn", "Xã Trường Thành", "Xã Trường Thọ"
        ));

        // 5.10 Huyện Cát Hải (10 xã/thị trấn)
        haiphong.put("Huyện Cát Hải", Arrays.asList(
                "Thị trấn Cát Bà", "Thị trấn Cát Hải", "Xã Đồng Bài", "Xã Gia Luận",
                "Xã Hiền Hào", "Xã Hoàng Châu", "Xã Nghĩa Lộ", "Xã Phù Long",
                "Xã Trân Châu", "Xã Văn Phong", "Xã Việt Hải", "Xã Xuân Đám"
        ));

        // 5.11 Huyện Kiến Thụy (15 xã/thị trấn)
        haiphong.put("Huyện Kiến Thụy", Arrays.asList(
                "Thị trấn Núi Đèo", "Thị trấn Minh Đức", "Xã Đại Hà", "Xã Đại Hợp",
                "Xã Đoàn Xá", "Xã Đông Phương", "Xã Hữu Bằng", "Xã Kiến Quốc",
                "Xã Minh Tân", "Xã Ngũ Đoan", "Xã Ngũ Lão", "Xã Tân Phong",
                "Xã Tân Trào", "Xã Thanh Sơn", "Xã Thuận Thiên", "Xã Thụy Hương",
                "Xã Tú Sơn"
        ));

        // 5.12 Huyện Thủy Nguyên (35 xã/thị trấn)
        haiphong.put("Huyện Thủy Nguyên", Arrays.asList(
                "Thị trấn Núi Đèo", "Thị trấn Minh Đức", "Xã An Lư", "Xã An Sơn",
                "Xã Cao Nhân", "Xã Chính Mỹ", "Xã Dương Quan", "Xã Đông Sơn",
                "Xã Gia Đức", "Xã Gia Minh", "Xã Hoa Động", "Xã Hòa Bình",
                "Xã Hoàng Động", "Xã Hợp Thành", "Xã Kênh Giang", "Xã Kiền Bái",
                "Xã Kỳ Sơn", "Xã Lại Xuân", "Xã Lâm Động", "Xã Lập Lễ",
                "Xã Liên Khê", "Xã Lưu Kiếm", "Xã Lưu Kỳ", "Xã Minh Tân",
                "Xã Mỹ Đồng", "Xã Ngũ Lão", "Xã Phả Lễ", "Xã Phù Ninh",
                "Xã Phục Lễ", "Xã Quảng Thanh", "Xã Tam Hưng", "Xã Tân Dương",
                "Xã Thiên Hương", "Xã Thủy Đường", "Xã Thủy Sơn", "Xã Thủy Triều"
        ));

        // 5.13 Huyện Tiên Lãng (19 xã/thị trấn)
        haiphong.put("Huyện Tiên Lãng", Arrays.asList(
                "Thị trấn Tiên Lãng", "Xã Bắc Hưng", "Xã Bạch Đằng", "Xã Cấp Tiến",
                "Xã Đại Thắng", "Xã Đoàn Lập", "Xã Đông Hưng", "Xã Hùng Thắng",
                "Xã Khởi Nghĩa", "Xã Kiến Thiết", "Xã Nam Hưng", "Xã Quang Phục",
                "Xã Quyết Tiến", "Xã Tây Hưng", "Xã Tiên Cường", "Xã Tiên Minh",
                "Xã Tiên Thanh", "Xã Tiên Thắng", "Xã Toàn Thắng", "Xã Tự Cường",
                "Xã Vinh Quang"
        ));

        // 5.14 Huyện Vĩnh Bảo (22 xã/thị trấn)
        haiphong.put("Huyện Vĩnh Bảo", Arrays.asList(
                "Thị trấn Vĩnh Bảo", "Xã An Hòa", "Xã Cao Minh", "Xã Cổ Am",
                "Xã Cộng Hiền", "Xã Đồng Minh", "Xã Dũng Tiến", "Xã Giang Biên",
                "Xã Hiệp Hòa", "Xã Hòa Bình", "Xã Hùng Tiến", "Xã Hưng Nhân",
                "Xã Liên Am", "Xã Lý Học", "Xã Nhân Hòa", "Xã Tam Cường",
                "Xã Tam Đa", "Xã Tân Hưng", "Xã Tân Liên", "Xã Thanh Lương",
                "Xã Thắng Thủy", "Xã Tiền Phong", "Xã Trấn Dương", "Xã Trung Lập",
                "Xã Việt Tiến", "Xã Vinh Quang", "Xã Vĩnh An", "Xã Vĩnh Long",
                "Xã Vĩnh Phong", "Xã Vĩnh Tiến"
        ));

        // 5.15 Huyện Bạch Long Vĩ
        haiphong.put("Huyện Bạch Long Vĩ", new ArrayList<>());

        data.put("Hải Phòng", haiphong);

        // ===========================================
        // 6. CẦN THƠ (ĐẦY ĐỦ 9 QUẬN/HUYỆN)
        // ===========================================
        Map<String, List<String>> cantho = new LinkedHashMap<>();

        // 6.1 Quận Ninh Kiều (13 phường)
        cantho.put("Quận Ninh Kiều", Arrays.asList(
                "Phường An Bình", "Phường An Cư", "Phường An Hòa",
                "Phường An Hội", "Phường An Khánh", "Phường An Lạc",
                "Phường An Nghiệp", "Phường An Phú", "Phường Cái Khế",
                "Phường Hưng Lợi", "Phường Tân An", "Phường Thới Bình",
                "Phường Xuân Khánh"
        ));

        // 6.2 Quận Bình Thủy (8 phường)
        cantho.put("Quận Bình Thủy", Arrays.asList(
                "Phường An Thới", "Phường Bình Thủy", "Phường Bùi Hữu Nghĩa",
                "Phường Long Hòa", "Phường Long Tuyền", "Phường Thới An Đông",
                "Phường Trà An", "Phường Trà Nóc"
        ));

        // 6.3 Quận Cái Răng (7 phường)
        cantho.put("Quận Cái Răng", Arrays.asList(
                "Phường Ba Láng", "Phường Hưng Phú", "Phường Hưng Thạnh",
                "Phường Lê Bình", "Phường Phú Thứ", "Phường Tân Phú",
                "Phường Thường Thạnh"
        ));

        // 6.4 Quận Ô Môn (6 phường)
        cantho.put("Quận Ô Môn", Arrays.asList(
                "Phường Châu Văn Liêm", "Phường Long Hưng", "Phường Phước Thới",
                "Phường Thới An", "Phường Thới Hòa", "Phường Trường Lạc"
        ));

        // 6.5 Quận Thốt Nốt (8 phường)
        cantho.put("Quận Thốt Nốt", Arrays.asList(
                "Phường Tân Hưng", "Phường Tân Lộc", "Phường Thạnh Hòa",
                "Phường Thốt Nốt", "Phường Thuận An", "Phường Thuận Hưng",
                "Phường Trung Kiên", "Phường Trung Nhứt"
        ));

        // 6.6 Huyện Phong Điền (7 xã/thị trấn)
        cantho.put("Huyện Phong Điền", Arrays.asList(
                "Thị trấn Phong Điền", "Xã Giai Xuân", "Xã Mỹ Khánh",
                "Xã Nhơn Ái", "Xã Nhơn Nghĩa", "Xã Tân Thới",
                "Xã Trường Long"
        ));

        // 6.7 Huyện Cờ Đỏ (9 xã/thị trấn)
        cantho.put("Huyện Cờ Đỏ", Arrays.asList(
                "Thị trấn Cờ Đỏ", "Xã Đông Hiệp", "Xã Đông Thắng",
                "Xã Thạnh Phú", "Xã Thới Đông", "Xã Thới Hưng",
                "Xã Trung An", "Xã Trung Hưng", "Xã Trung Thạnh"
        ));

        // 6.8 Huyện Thới Lai (12 xã/thị trấn)
        cantho.put("Huyện Thới Lai", Arrays.asList(
                "Thị trấn Thới Lai", "Xã Định Môn", "Xã Đông Bình",
                "Xã Đông Thuận", "Xã Tân Thạnh", "Xã Thới Tân",
                "Xã Thới Thạnh", "Xã Trường Thắng", "Xã Trường Thành",
                "Xã Trường Xuân", "Xã Trường Xuân A", "Xã Trường Xuân B"
        ));

        // 6.9 Huyện Vĩnh Thạnh (11 xã/thị trấn)
        cantho.put("Huyện Vĩnh Thạnh", Arrays.asList(
                "Thị trấn Vĩnh Thạnh", "Thị trấn Thạnh An", "Xã Thạnh An",
                "Xã Thạnh Lộc", "Xã Thạnh Lợi", "Xã Thạnh Mỹ",
                "Xã Thạnh Quới", "Xã Thạnh Thắng", "Xã Thạnh Tiến",
                "Xã Vĩnh Bình", "Xã Vĩnh Trinh"
        ));

        data.put("Cần Thơ", cantho);

        // ===========================================
        // 7. CÁC TỈNH MIỀN NÚI PHÍA BẮC
        // ===========================================

        // 7.1 An Giang
        Map<String, List<String>> anGiang = new LinkedHashMap<>();
        anGiang.put("Thành phố Long Xuyên", Arrays.asList(
                "Phường Mỹ Bình", "Phường Mỹ Long", "Phường Đông Xuyên",
                "Phường Mỹ Xuyên", "Phường Bình Đức", "Phường Bình Khánh",
                "Phường Mỹ Phước", "Phường Mỹ Quý", "Phường Mỹ Thạnh",
                "Phường Mỹ Thới", "Xã Mỹ Khánh", "Xã Mỹ Hòa Hưng"
        ));
        anGiang.put("Thành phố Châu Đốc", Arrays.asList(
                "Phường Châu Phú A", "Phường Châu Phú B", "Phường Núi Sam",
                "Phường Vĩnh Mỹ", "Phường Vĩnh Ngươn", "Xã Vĩnh Châu",
                "Xã Vĩnh Tế"
        ));
        anGiang.put("Thị xã Tân Châu", Arrays.asList(
                "Phường Long Châu", "Phường Long Hưng", "Phường Long Phú",
                "Phường Long Sơn", "Phường Long Thạnh", "Xã Châu Phong",
                "Xã Lê Chánh", "Xã Long An", "Xã Phú Lộc", "Xã Phú Vĩnh",
                "Xã Tân An", "Xã Tân Thạnh", "Xã Vĩnh Hòa", "Xã Vĩnh Xương"
        ));
        anGiang.put("Huyện An Phú", Arrays.asList(
                "Thị trấn An Phú", "Xã Đa Phước", "Xã Khánh An", "Xã Khánh Bình",
                "Xã Nhơn Hội", "Xã Phú Hội", "Xã Phú Hữu", "Xã Phước Hưng",
                "Xã Quốc Thái", "Xã Vĩnh Hậu", "Xã Vĩnh Hội Đông", "Xã Vĩnh Lộc",
                "Xã Vĩnh Trường"
        ));
        anGiang.put("Huyện Châu Phú", Arrays.asList(
                "Thị trấn Cái Dầu", "Xã Bình Chánh", "Xã Bình Long", "Xã Bình Mỹ",
                "Xã Bình Phú", "Xã Bình Thủy", "Xã Đào Hữu Cảnh", "Xã Khánh Hòa",
                "Xã Mỹ Đức", "Xã Mỹ Phú", "Xã Ô Long Vĩ", "Xã Thạnh Mỹ Tây",
                "Xã Vĩnh Thạnh Trung"
        ));
        anGiang.put("Huyện Châu Thành", Arrays.asList(
                "Thị trấn An Châu", "Xã An Hòa", "Xã Bình Hòa", "Xã Bình Thạnh",
                "Xã Cần Đăng", "Xã Hòa Bình Thạnh", "Xã Tân Phú", "Xã Vĩnh An",
                "Xã Vĩnh Bình", "Xã Vĩnh Hanh", "Xã Vĩnh Lợi", "Xã Vĩnh Nhuận",
                "Xã Vĩnh Thành"
        ));
        anGiang.put("Huyện Chợ Mới", Arrays.asList(
                "Thị trấn Chợ Mới", "Thị trấn Mỹ Luông", "Xã An Thạnh Trung",
                "Xã Bình Phước Xuân", "Xã Hòa An", "Xã Hòa Bình", "Xã Hội An",
                "Xã Kiến An", "Xã Kiến Thành", "Xã Long Điền A", "Xã Long Điền B",
                "Xã Long Giang", "Xã Long Kiến", "Xã Mỹ An", "Xã Mỹ Hiệp",
                "Xã Mỹ Hội Đông", "Xã Nhơn Mỹ", "Xã Tấn Mỹ"
        ));
        anGiang.put("Huyện Phú Tân", Arrays.asList(
                "Thị trấn Phú Mỹ", "Thị trấn Chợ Vàm", "Xã Bình Thạnh Đông",
                "Xã Hiệp Xương", "Xã Hòa Lạc", "Xã Long Hòa", "Xã Phú An",
                "Xã Phú Bình", "Xã Phú Hiệp", "Xã Phú Hưng", "Xã Phú Lâm",
                "Xã Phú Long", "Xã Phú Thành", "Xã Phú Thạnh", "Xã Phú Thọ",
                "Xã Phú Xuân", "Xã Tân Hòa", "Xã Tân Trung"
        ));
        anGiang.put("Huyện Thoại Sơn", Arrays.asList(
                "Thị trấn Núi Sập", "Thị trấn Óc Eo", "Thị trấn Phú Hòa",
                "Xã An Bình", "Xã Bình Thành", "Xã Định Mỹ", "Xã Định Thành",
                "Xã Mỹ Phú Đông", "Xã Phú Thuận", "Xã Tây Phú", "Xã Thoại Giang",
                "Xã Vĩnh Chánh", "Xã Vĩnh Khánh", "Xã Vĩnh Phú", "Xã Vĩnh Trạch",
                "Xã Vọng Đông", "Xã Vọng Thê"
        ));
        anGiang.put("Huyện Tịnh Biên", Arrays.asList(
                "Thị trấn Tịnh Biên", "Thị trấn Chi Lăng", "Xã An Cư", "Xã An Hảo",
                "Xã An Nông", "Xã An Phú", "Xã Nhơn Hưng", "Xã Núi Voi",
                "Xã Tân Lập", "Xã Tân Lợi", "Xã Thới Sơn", "Xã Văn Giáo",
                "Xã Vĩnh Trung"
        ));
        anGiang.put("Huyện Tri Tôn", Arrays.asList(
                "Thị trấn Tri Tôn", "Thị trấn Ba Chúc", "Xã An Tức", "Xã Châu Lăng",
                "Xã Cô Tô", "Xã Lạc Quới", "Xã Lê Trì", "Xã Lương An Trà",
                "Xã Lương Phi", "Xã Núi Tô", "Xã Ô Lâm", "Xã Tà Đảnh",
                "Xã Tân Tuyến", "Xã Vĩnh Gia", "Xã Vĩnh Phước"
        ));
        data.put("An Giang", anGiang);

        // 7.2 Bà Rịa - Vũng Tàu
        Map<String, List<String>> baria = new LinkedHashMap<>();
        baria.put("Thành phố Vũng Tàu", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10",
                "Phường 11", "Phường 12", "Phường Thắng Nhất", "Phường Thắng Nhì",
                "Phường Nguyễn An Ninh", "Phường Rạch Dừa", "Xã Long Sơn"
        ));
        baria.put("Thành phố Bà Rịa", Arrays.asList(
                "Phường Phước Hưng", "Phường Phước Hiệp", "Phường Phước Nguyên",
                "Phường Long Toàn", "Phường Long Tâm", "Phường Phước Trung",
                "Phường Long Hương", "Phường Kim Dinh", "Xã Hòa Long",
                "Xã Long Phước", "Xã Tân Hưng"
        ));
        baria.put("Thị xã Phú Mỹ", Arrays.asList(
                "Phường Phú Mỹ", "Phường Hắc Dịch", "Phường Mỹ Xuân",
                "Phường Phước Hòa", "Phường Tân Phước", "Phường Tân Hải",
                "Xã Châu Pha", "Xã Sông Xoài", "Xã Tóc Tiên", "Xã Tân Hòa"
        ));
        baria.put("Huyện Châu Đức", Arrays.asList(
                "Thị trấn Ngãi Giao", "Xã Bàu Chinh", "Xã Bình Ba", "Xã Bình Giã",
                "Xã Bình Trung", "Xã Cù Bị", "Xã Đá Bạc", "Xã Kim Long",
                "Xã Láng Lớn", "Xã Nghĩa Thành", "Xã Quảng Thành", "Xã Sơn Bình",
                "Xã Suối Nghệ", "Xã Suối Rao", "Xã Xà Bang", "Xã Xuân Sơn"
        ));
        baria.put("Huyện Côn Đảo", Arrays.asList(
                "Thị trấn Côn Đảo"
        ));
        baria.put("Huyện Đất Đỏ", Arrays.asList(
                "Thị trấn Đất Đỏ", "Thị trấn Phước Hải", "Xã Láng Dài",
                "Xã Long Mỹ", "Xã Long Tân", "Xã Phước Hội", "Xã Phước Long Thọ"
        ));
        baria.put("Huyện Long Điền", Arrays.asList(
                "Thị trấn Long Điền", "Thị trấn Long Hải", "Xã An Ngãi",
                "Xã An Nhứt", "Xã Phước Hưng", "Xã Phước Tỉnh", "Xã Tam Phước"
        ));
        baria.put("Huyện Xuyên Mộc", Arrays.asList(
                "Thị trấn Phước Bửu", "Xã Bàu Lâm", "Xã Bình Châu", "Xã Bông Trang",
                "Xã Bưng Riềng", "Xã Hòa Bình", "Xã Hòa Hiệp", "Xã Hòa Hội",
                "Xã Hòa Hưng", "Xã Phước Tân", "Xã Tân Lâm", "Xã Xuyên Mộc"
        ));
        data.put("Bà Rịa - Vũng Tàu", baria);

        // 7.3 Bạc Liêu
        Map<String, List<String>> bacLieu = new LinkedHashMap<>();
        bacLieu.put("Thành phố Bạc Liêu", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 5", "Phường 7",
                "Phường 8", "Phường Nhà Mát", "Xã Hiệp Thành", "Xã Vĩnh Trạch",
                "Xã Vĩnh Trạch Đông"
        ));
        bacLieu.put("Huyện Đông Hải", Arrays.asList(
                "Thị trấn Gành Hào", "Xã An Phúc", "Xã An Trạch", "Xã An Trạch A",
                "Xã Điền Hải", "Xã Định Thành", "Xã Định Thành A", "Xã Long Điền",
                "Xã Long Điền Đông", "Xã Long Điền Đông A", "Xã Phong Thạnh Tây"
        ));
        bacLieu.put("Huyện Hòa Bình", Arrays.asList(
                "Thị trấn Hòa Bình", "Xã Minh Diệu", "Xã Vĩnh Bình", "Xã Vĩnh Hậu",
                "Xã Vĩnh Hậu A", "Xã Vĩnh Mỹ A", "Xã Vĩnh Mỹ B", "Xã Vĩnh Thịnh"
        ));
        bacLieu.put("Huyện Hồng Dân", Arrays.asList(
                "Thị trấn Ngan Dừa", "Xã Lộc Ninh", "Xã Ninh Hòa", "Xã Ninh Quới",
                "Xã Ninh Quới A", "Xã Ninh Thạnh Lợi", "Xã Ninh Thạnh Lợi A",
                "Xã Vĩnh Lộc", "Xã Vĩnh Lộc A"
        ));
        bacLieu.put("Huyện Phước Long", Arrays.asList(
                "Thị trấn Phước Long", "Xã Hưng Phú", "Xã Phong Thạnh Tây A",
                "Xã Phong Thạnh Tây B", "Xã Phước Long", "Xã Vĩnh Phú Đông",
                "Xã Vĩnh Phú Tây", "Xã Vĩnh Thanh"
        ));
        bacLieu.put("Huyện Vĩnh Lợi", Arrays.asList(
                "Thị trấn Châu Hưng", "Xã Châu Hưng A", "Xã Châu Thới", "Xã Hưng Hội",
                "Xã Hưng Thành", "Xã Long Thạnh", "Xã Vĩnh Hưng", "Xã Vĩnh Hưng A"
        ));
        data.put("Bạc Liêu", bacLieu);

        // 7.4 Bắc Giang
        Map<String, List<String>> bacGiang = new LinkedHashMap<>();
        bacGiang.put("Thành phố Bắc Giang", Arrays.asList(
                "Phường Hoàng Văn Thụ", "Phường Ngô Quyền", "Phường Trần Nguyên Hãn",
                "Phường Trần Phú", "Phường Xương Giang", "Phường Đa Mai",
                "Phường Dĩnh Kế", "Phường Lê Lợi", "Phường Mỹ Độ",
                "Phường Thọ Xương", "Xã Dĩnh Trì", "Xã Song Khê", "Xã Song Mai",
                "Xã Tân Mỹ", "Xã Tân Tiến"
        ));
        bacGiang.put("Thị xã Việt Yên", Arrays.asList(
                "Phường Bích Động", "Phường Hồng Thái", "Phường Nếnh", "Phường Thượng Lan",
                "Phường Việt Tiến", "Xã Hương Mai", "Xã Minh Đức", "Xã Nghĩa Trung",
                "Xã Quảng Minh", "Xã Quang Châu", "Xã Tăng Tiến", "Xã Tự Lạn",
                "Xã Vân Hà", "Xã Vân Trung", "Xã Việt Tiến", "Xã Trung Sơn"
        ));
        bacGiang.put("Huyện Hiệp Hòa", Arrays.asList(
                "Thị trấn Thắng", "Xã Bắc Lý", "Xã Châu Minh", "Xã Đại Thành",
                "Xã Danh Thắng", "Xã Đoan Bái", "Xã Đông Lỗ", "Xã Đồng Tân",
                "Xã Hòa Sơn", "Xã Hoàng An", "Xã Hoàng Lương", "Xã Hoàng Thanh",
                "Xã Hoàng Vân", "Xã Hợp Thịnh", "Xã Hùng Sơn", "Xã Hương Lâm",
                "Xã Lương Phong", "Xã Mai Đình", "Xã Mai Trung", "Xã Ngọc Sơn",
                "Xã Quang Minh", "Xã Thái Sơn", "Xã Thanh Vân", "Xã Thường Thắng",
                "Xã Xuân Cẩm"
        ));
        bacGiang.put("Huyện Lạng Giang", Arrays.asList(
                "Thị trấn Vôi", "Thị trấn Kép", "Xã An Hà", "Xã Dương Đức",
                "Xã Đại Lâm", "Xã Đào Mỹ", "Xã Hương Lạc", "Xã Hương Sơn",
                "Xã Mỹ Hà", "Xã Mỹ Thái", "Xã Nghĩa Hòa", "Xã Nghĩa Hưng",
                "Xã Quang Thịnh", "Xã Tân Dĩnh", "Xã Tân Hưng", "Xã Tân Thanh",
                "Xã Thái Đào", "Xã Tiên Lục", "Xã Xuân Hương", "Xã Xương Lâm",
                "Xã Yên Mỹ"
        ));
        bacGiang.put("Huyện Lục Nam", Arrays.asList(
                "Thị trấn Đồi Ngô", "Thị trấn Lục Nam", "Xã Bắc Lũng", "Xã Bảo Đài",
                "Xã Bảo Sơn", "Xã Bình Sơn", "Xã Cẩm Lý", "Xã Chu Điện",
                "Xã Cương Sơn", "Xã Đan Hội", "Xã Đông Hưng", "Xã Đông Phú",
                "Xã Huyền Sơn", "Xã Khám Lạng", "Xã Lục Sơn", "Xã Nghĩa Phương",
                "Xã Phương Sơn", "Xã Tam Dị", "Xã Thanh Lâm", "Xã Tiên Hưng",
                "Xã Trường Giang", "Xã Trường Sơn", "Xã Vô Tranh", "Xã Vũ Xá",
                "Xã Yên Sơn"
        ));
        bacGiang.put("Huyện Lục Ngạn", Arrays.asList(
                "Thị trấn Chũ", "Xã Biên Sơn", "Xã Biển Động", "Xã Cấm Sơn",
                "Xã Đèo Gia", "Xã Đồng Cốc", "Xã Giáp Sơn", "Xã Hộ Đáp",
                "Xã Hồng Giang", "Xã Kim Sơn", "Xã Kiên Lao", "Xã Kiên Thành",
                "Xã Mỹ An", "Xã Nam Dương", "Xã Nghĩa Hồ", "Xã Phì Điền",
                "Xã Phong Minh", "Xã Phong Vân", "Xã Phú Nhuận", "Xã Phượng Sơn",
                "Xã Quý Sơn", "Xã Sa Lý", "Xã Sơn Hải", "Xã Tân Hoa",
                "Xã Tân Lập", "Xã Tân Mộc", "Xã Tân Quang", "Xã Tân Sơn",
                "Xã Thanh Hải", "Xã Trù Hựu"
        ));
        bacGiang.put("Huyện Sơn Động", Arrays.asList(
                "Thị trấn An Châu", "Thị trấn Tây Yên Tử", "Xã An Bá", "Xã An Lạc",
                "Xã Cẩm Đàn", "Xã Đại Sơn", "Xã Dương Hưu", "Xã Giáo Liêm",
                "Xã Hữu Sản", "Xã Lệ Viễn", "Xã Long Sơn", "Xã Phúc Sơn",
                "Xã Phúc Thắng", "Xã Thanh Luận", "Xã Tuấn Đạo", "Xã Vân Sơn",
                "Xã Vĩnh An", "Xã Yên Định"
        ));
        bacGiang.put("Huyện Tân Yên", Arrays.asList(
                "Thị trấn Cao Thượng", "Thị trấn Nhã Nam", "Xã An Dương", "Xã Cao Xá",
                "Xã Đại Hóa", "Xã Hợp Đức", "Xã Lam Cốt", "Xã Lan Giới",
                "Xã Liên Chung", "Xã Liên Sơn", "Xã Ngọc Châu", "Xã Ngọc Lý",
                "Xã Ngọc Thiện", "Xã Ngọc Vân", "Xã Phúc Hòa", "Xã Phúc Sơn",
                "Xã Quang Tiến", "Xã Quế Nham", "Xã Song Vân", "Xã Tân Trung",
                "Xã Việt Lập", "Xã Việt Ngọc"
        ));
        bacGiang.put("Huyện Yên Dũng", Arrays.asList(
                "Thị trấn Nham Biền", "Thị trấn Tân An", "Xã Cảnh Thụy", "Xã Đồng Phúc",
                "Xã Đồng Việt", "Xã Đức Giang", "Xã Hương Gián", "Xã Lãng Sơn",
                "Xã Lão Hộ", "Xã Nội Hoàng", "Xã Quỳnh Sơn", "Xã Tân Liễu",
                "Xã Tiến Dũng", "Xã Tiền Phong", "Xã Trí Yên", "Xã Tư Mại",
                "Xã Xuân Phú", "Xã Yên Lư"
        ));
        bacGiang.put("Huyện Yên Thế", Arrays.asList(
                "Thị trấn Phồn Xương", "Thị trấn Bố Hạ", "Xã An Thượng", "Xã Canh Nậu",
                "Xã Đồng Hưu", "Xã Đồng Kỳ", "Xã Đồng Lạc", "Xã Đông Sơn",
                "Xã Đồng Tiến", "Xã Đồng Vương", "Xã Hồng Kỳ", "Xã Hương Vĩ",
                "Xã Phúc Đạo", "Xã Tân Hiệp", "Xã Tân Sỏi", "Xã Tam Hiệp",
                "Xã Tam Tiến", "Xã Tiến Thắng", "Xã Xuân Lương"
        ));
        data.put("Bắc Giang", bacGiang);

        // ===========================================
        // Các tỉnh còn lại (có thể thêm tương tự)
        // ===========================================

        // Bắc Kạn
        Map<String, List<String>> bacKan = new LinkedHashMap<>();
        bacKan.put("Thành phố Bắc Kạn", Arrays.asList(
                "Phường Đức Xuân", "Phường Huyền Tụng", "Phường Nguyễn Thị Minh Khai",
                "Phường Phùng Chí Kiên", "Phường Sông Cầu", "Phường Xuất Hóa",
                "Xã Dương Quang", "Xã Nông Thượng"
        ));
        bacKan.put("Huyện Ba Bể", Arrays.asList(
                "Thị trấn Chợ Rã", "Xã Bành Trạch", "Xã Cao Thượng", "Xã Cao Trĩ",
                "Xã Chu Hương", "Xã Địa Linh", "Xã Đồng Phúc", "Xã Hà Hiệu",
                "Xã Hoàng Trĩ", "Xã Khang Ninh", "Xã Mỹ Phương", "Xã Nam Mẫu",
                "Xã Phúc Lộc", "Xã Quảng Khê", "Xã Thượng Giáo", "Xã Yến Dương"
        ));
        bacKan.put("Huyện Bạch Thông", Arrays.asList(
                "Thị trấn Phủ Thông", "Xã Cao Sơn", "Xã Cẩm Giàng", "Xã Dương Phong",
                "Xã Đôn Phong", "Xã Lục Bình", "Xã Mỹ Thanh", "Xã Nguyên Phúc",
                "Xã Quang Thuận", "Xã Sĩ Bình", "Xã Tân Tú", "Xã Vi Hương",
                "Xã Vũ Muộn", "Xã Xuân Lạc"
        ));
        bacKan.put("Huyện Chợ Đồn", Arrays.asList(
                "Thị trấn Bằng Lũng", "Xã Bản Thi", "Xã Bằng Lãng", "Xã Bằng Phúc",
                "Xã Bình Trung", "Xã Đại Sảo", "Xã Đồng Lạc", "Xã Đông Viên",
                "Xã Lương Bằng", "Xã Nam Cường", "Xã Nghĩa Tá", "Xã Ngọc Phái",
                "Xã Phương Viên", "Xã Quảng Bạch", "Xã Tân Lập", "Xã Xuân Lạc",
                "Xã Yên Mỹ", "Xã Yên Nhuận", "Xã Yên Thịnh", "Xã Yên Thượng"
        ));
        bacKan.put("Huyện Chợ Mới", Arrays.asList(
                "Thị trấn Đồng Tâm", "Xã Bình Văn", "Xã Cao Kỳ", "Xã Hòa Mục",
                "Xã Mai Lạp", "Xã Như Cố", "Xã Nông Hạ", "Xã Nông Thịnh",
                "Xã Quảng Chu", "Xã Tân Sơn", "Xã Thanh Mai", "Xã Thanh Vận",
                "Xã Yên Cư", "Xã Yên Đĩnh", "Xã Yên Hân"
        ));
        bacKan.put("Huyện Na Rì", Arrays.asList(
                "Thị trấn Yến Lạc", "Xã Côn Minh", "Xã Cư Lễ", "Xã Cường Lợi",
                "Xã Đổng Xá", "Xã Dương Sơn", "Xã Hảo Nghĩa", "Xã Hữu Thác",
                "Xã Kim Hỷ", "Xã Kim Lư", "Xã Lam Sơn", "Xã Lạng San",
                "Xã Liêm Thủy", "Xã Lương Hạ", "Xã Lương Thành", "Xã Lương Thượng",
                "Xã Quang Phong", "Xã Văn Học", "Xã Văn Minh", "Xã Vũ Loan",
                "Xã Xuân Dương"
        ));
        bacKan.put("Huyện Ngân Sơn", Arrays.asList(
                "Thị trấn Nà Phặc", "Xã Bằng Vân", "Xã Cốc Đán", "Xã Đức Vân",
                "Xã Hiệp Lực", "Xã Thuần Mang", "Xã Thượng Ân", "Xã Thượng Quan",
                "Xã Trung Hòa", "Xã Vân Tùng"
        ));
        bacKan.put("Huyện Pác Nặm", Arrays.asList(
                "Xã An Thắng", "Xã Bằng Thành", "Xã Bộc Bố", "Xã Cao Tân",
                "Xã Cổ Linh", "Xã Công Bằng", "Xã Giáo Hiệu", "Xã Nghiên Loan",
                "Xã Nhạn Môn", "Xã Xuân La"
        ));
        data.put("Bắc Kạn", bacKan);

        // Bắc Ninh
        Map<String, List<String>> bacNinh = new LinkedHashMap<>();
        bacNinh.put("Thành phố Bắc Ninh", Arrays.asList(
                "Phường Đại Phúc", "Phường Đáp Cầu", "Phường Hạp Lĩnh", "Phường Hòa Long",
                "Phường Khắc Niệm", "Phường Khúc Xuyên", "Phường Kinh Bắc", "Phường Nam Sơn",
                "Phường Ninh Xá", "Phường Phong Khê", "Phường Suối Hoa", "Phường Thị Cầu",
                "Phường Tiền An", "Phường Vạn An", "Phường Vân Dương", "Phường Vệ An",
                "Phường Võ Cường", "Phường Vũ Ninh", "Xã Kim Chân", "Xã Nam Sơn",
                "Xã Phú Hòa"
        ));
        bacNinh.put("Thị xã Từ Sơn", Arrays.asList(
                "Phường Châu Khê", "Phường Đình Bảng", "Phường Đồng Kỵ", "Phường Đông Ngàn",
                "Phường Đồng Nguyên", "Phường Hương Mạc", "Phường Phù Chẩn", "Phường Phù Khê",
                "Phường Tam Sơn", "Phường Tân Hồng", "Phường Trang Hạ", "Phường Tương Giang",
                "Xã Phù Chẩn", "Xã Phù Khê", "Xã Tam Sơn", "Xã Tương Giang"
        ));
        bacNinh.put("Huyện Gia Bình", Arrays.asList(
                "Thị trấn Gia Bình", "Xã Bình Dương", "Xã Cao Đức", "Xã Đại Bái",
                "Xã Đại Lai", "Xã Đông Cứu", "Xã Giang Sơn", "Xã Lãng Ngâm",
                "Xã Nhân Thắng", "Xã Quỳnh Phú", "Xã Song Giang", "Xã Thái Bảo",
                "Xã Vạn Ninh", "Xã Xuân Lai"
        ));
        bacNinh.put("Huyện Lương Tài", Arrays.asList(
                "Thị trấn Thứa", "Xã An Thịnh", "Xã Bình Định", "Xã Lai Hạ",
                "Xã Lâm Thao", "Xã Minh Tân", "Xã Mỹ Hương", "Xã Phú Hòa",
                "Xã Phú Lương", "Xã Quảng Phú", "Xã Tân Lãng", "Xã Trung Chính",
                "Xã Trung Kênh", "Xã Trừng Xá"
        ));
        bacNinh.put("Huyện Quế Võ", Arrays.asList(
                "Thị trấn Phố Mới", "Xã Bằng An", "Xã Bồng Lai", "Xã Cách Bi",
                "Xã Châu Phong", "Xã Chi Lăng", "Xã Đại Xuân", "Xã Đào Viên",
                "Xã Đức Long", "Xã Hán Quảng", "Xã Mộ Đạo", "Xã Ngọc Xá",
                "Xã Nhân Hòa", "Xã Phù Lãng", "Xã Phù Lương", "Xã Phương Liễu",
                "Xã Phượng Mao", "Xã Quế Tân", "Xã Việt Hùng", "Xã Việt Thống",
                "Xã Yên Giả"
        ));
        bacNinh.put("Huyện Thuận Thành", Arrays.asList(
                "Thị trấn Hồ", "Xã An Bình", "Xã Đại Đồng Thành", "Xã Đình Tổ",
                "Xã Gia Đông", "Xã Hà Mãn", "Xã Hồng Kỳ", "Xã Mão Điền",
                "Xã Nghĩa Đạo", "Xã Ngũ Thái", "Xã Nguyệt Đức", "Xã Ninh Xá",
                "Xã Song Hồ", "Xã Song Liễu", "Xã Thanh Khương", "Xã Trạm Lộ",
                "Xã Trí Quả", "Xã Xuân Lâm"
        ));
        bacNinh.put("Huyện Tiên Du", Arrays.asList(
                "Thị trấn Lim", "Xã Cảnh Hưng", "Xã Đại Đồng", "Xã Hiên Vân",
                "Xã Hoàn Sơn", "Xã Lạc Vệ", "Xã Liên Bão", "Xã Minh Đạo",
                "Xã Nội Duệ", "Xã Phật Tích", "Xã Phú Lâm", "Xã Tân Chi",
                "Xã Tri Phương", "Xã Việt Đoàn"
        ));
        bacNinh.put("Huyện Yên Phong", Arrays.asList(
                "Thị trấn Chờ", "Xã Đông Phong", "Xã Đông Thọ", "Xã Đông Tiến",
                "Xã Dũng Liệt", "Xã Hòa Tiến", "Xã Long Châu", "Xã Tam Đa",
                "Xã Tam Giang", "Xã Thụy Hòa", "Xã Trung Nghĩa", "Xã Văn Môn",
                "Xã Yên Phụ", "Xã Yên Trung"
        ));
        data.put("Bắc Ninh", bacNinh);

        // Bến Tre
        Map<String, List<String>> benTre = new LinkedHashMap<>();
        benTre.put("Thành phố Bến Tre", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5",
                "Phường 6", "Phường 7", "Phường 8", "Xã Bình Phú", "Xã Mỹ Thành",
                "Xã Mỹ Thạnh An", "Xã Nhơn Thạnh", "Xã Phú Hưng", "Xã Phú Tân",
                "Xã Sơn Đông", "Xã Thuận Đức"
        ));
        benTre.put("Huyện Ba Tri", Arrays.asList(
                "Thị trấn Ba Tri", "Xã An Bình Tây", "Xã An Đức", "Xã An Hiệp",
                "Xã An Hòa Tây", "Xã An Ngãi Tây", "Xã An Ngãi Trung", "Xã An Phú Trung",
                "Xã An Thủy", "Xã Bảo Thạnh", "Xã Bảo Thuận", "Xã Mỹ Chánh",
                "Xã Mỹ Hòa", "Xã Mỹ Nhơn", "Xã Mỹ Thạnh", "Xã Phú Lễ",
                "Xã Phước Ngãi", "Xã Tân Hưng", "Xã Tân Mỹ", "Xã Tân Thủy",
                "Xã Vĩnh An", "Xã Vĩnh Hòa"
        ));
        benTre.put("Huyện Bình Đại", Arrays.asList(
                "Thị trấn Bình Đại", "Xã Bình Thắng", "Xã Bình Thới", "Xã Châu Hưng",
                "Xã Đại Hòa Lộc", "Xã Định Trung", "Xã Lộc Thuận", "Xã Long Định",
                "Xã Long Hòa", "Xã Phú Long", "Xã Phú Thuận", "Xã Phú Vang",
                "Xã Tam Hiệp", "Xã Thạnh Phước", "Xã Thạnh Trị", "Xã Thới Lai",
                "Xã Thới Thuận", "Xã Thừa Đức", "Xã Vang Quới Đông", "Xã Vang Quới Tây"
        ));
        benTre.put("Huyện Châu Thành", Arrays.asList(
                "Thị trấn Châu Thành", "Xã An Hiệp", "Xã An Hóa", "Xã An Khánh",
                "Xã An Phước", "Xã Giao Hòa", "Xã Giao Long", "Xã Hữu Định",
                "Xã Phú An Hòa", "Xã Phú Đức", "Xã Phú Túc", "Xã Phước Thạnh",
                "Xã Quới Sơn", "Xã Quới Thành", "Xã Sơn Hòa", "Xã Tam Phước",
                "Xã Tân Phú", "Xã Tân Thạch", "Xã Thành Triệu", "Xã Tiên Long",
                "Xã Tiên Thủy", "Xã Tường Đa"
        ));
        benTre.put("Huyện Chợ Lách", Arrays.asList(
                "Thị trấn Chợ Lách", "Xã Định Thủy", "Xã Hòa Nghĩa", "Xã Hưng Khánh Trung B",
                "Xã Long Thới", "Xã Phú Phụng", "Xã Phú Sơn", "Xã Sơn Định",
                "Xã Tân Thiềng", "Xã Vĩnh Bình", "Xã Vĩnh Hòa", "Xã Vĩnh Thành"
        ));
        benTre.put("Huyện Giồng Trôm", Arrays.asList(
                "Thị trấn Giồng Trôm", "Xã Bình Hòa", "Xã Bình Thành", "Xã Châu Bình",
                "Xã Châu Hòa", "Xã Hưng Lễ", "Xã Hưng Nhượng", "Xã Hưng Phong",
                "Xã Long Mỹ", "Xã Lương Hòa", "Xã Lương Phú", "Xã Lương Quới",
                "Xã Mỹ Thạnh", "Xã Phong Nẫm", "Xã Phước Long", "Xã Sơn Phú",
                "Xã Tân Hào", "Xã Tân Hòa", "Xã Tân Lợi Thạnh", "Xã Tân Thanh",
                "Xã Thạnh Phú Đông", "Xã Thuận Điền"
        ));
        benTre.put("Huyện Mỏ Cày Bắc", Arrays.asList(
                "Thị trấn Phước Mỹ Trung", "Xã Định Thủy", "Xã Hòa Lộc", "Xã Hưng Khánh Trung A",
                "Xã Khánh Thạnh Tân", "Xã Nhuận Phú Tân", "Xã Phú Mỹ", "Xã Tân Bình",
                "Xã Tân Phú Tây", "Xã Tân Thành Bình", "Xã Tân Thanh Tây", "Xã Thạnh Ngãi",
                "Xã Thành An", "Xã Thạnh Phú Tây", "Xã Thới Thạnh"
        ));
        benTre.put("Huyện Mỏ Cày Nam", Arrays.asList(
                "Thị trấn Mỏ Cày", "Xã An Định", "Xã An Thạnh", "Xã An Thới",
                "Xã Bình Khánh Đông", "Xã Bình Khánh Tây", "Xã Cẩm Sơn", "Xã Đa Phước Hội",
                "Xã Định Thủy", "Xã Hương Mỹ", "Xã Minh Đức", "Xã Ngãi Đăng",
                "Xã Phước Hiệp", "Xã Tân Hội", "Xã Tân Trung", "Xã Thành Thới A",
                "Xã Thành Thới B"
        ));
        benTre.put("Huyện Thạnh Phú", Arrays.asList(
                "Thị trấn Thạnh Phú", "Xã An Điền", "Xã An Nhơn", "Xã An Quy",
                "Xã An Thạnh", "Xã An Thuận", "Xã Bình Thạnh", "Xã Đại Điền",
                "Xã Giao Thạnh", "Xã Hòa Lợi", "Xã Mỹ An", "Xã Mỹ Hưng",
                "Xã Phú Khánh", "Xã Quới Điền", "Xã Tân Phong", "Xã Thạnh Hải",
                "Xã Thạnh Phong", "Xã Thới Thạnh"
        ));
        data.put("Bến Tre", benTre);

        // Bình Định
        Map<String, List<String>> binhDinh = new LinkedHashMap<>();
        binhDinh.put("Thành phố Quy Nhơn", Arrays.asList(
                "Phường Bùi Thị Xuân", "Phường Đống Đa", "Phường Ghềnh Ráng", "Phường Hải Cảng",
                "Phường Lê Hồng Phong", "Phường Lê Lợi", "Phường Lý Thường Kiệt", "Phường Ngô Mây",
                "Phường Nguyễn Văn Cừ", "Phường Nhơn Bình", "Phường Nhơn Phú", "Phường Quang Trung",
                "Phường Thị Nại", "Phường Trần Hưng Đạo", "Phường Trần Phú", "Phường Trần Quang Diệu",
                "Xã Nhơn Châu", "Xã Nhơn Hải", "Xã Nhơn Hội", "Xã Nhơn Lý"
        ));
        binhDinh.put("Thị xã An Nhơn", Arrays.asList(
                "Phường Bình Định", "Phường Đập Đá", "Phường Nhơn Hòa", "Phường Nhơn Hưng",
                "Phường Nhơn Thành", "Xã Nhơn An", "Xã Nhơn Hạnh", "Xã Nhơn Hậu",
                "Xã Nhơn Khánh", "Xã Nhơn Lộc", "Xã Nhơn Mỹ", "Xã Nhơn Phong",
                "Xã Nhơn Phúc", "Xã Nhơn Tân", "Xã Nhơn Thọ"
        ));
        binhDinh.put("Thị xã Hoài Nhơn", Arrays.asList(
                "Phường Bồng Sơn", "Phường Hoài Đức", "Phường Hoài Hảo", "Phường Hoài Hương",
                "Phường Hoài Tân", "Phường Hoài Thanh", "Phường Hoài Thanh Tây", "Phường Hoài Xuân",
                "Phường Tam Quan", "Phường Tam Quan Bắc", "Phường Tam Quan Nam",
                "Xã Hoài Châu", "Xã Hoài Châu Bắc", "Xã Hoài Hải", "Xã Hoài Mỹ",
                "Xã Hoài Phú", "Xã Hoài Sơn"
        ));
        binhDinh.put("Huyện An Lão", Arrays.asList(
                "Thị trấn An Lão", "Xã An Dũng", "Xã An Hòa", "Xã An Hưng",
                "Xã An Nghĩa", "Xã An Quang", "Xã An Tân", "Xã An Toàn",
                "Xã An Trung", "Xã An Vinh"
        ));
        binhDinh.put("Huyện Hoài Ân", Arrays.asList(
                "Thị trấn Tăng Bạt Hổ", "Xã Ân Đức", "Xã Ân Hảo Đông", "Xã Ân Hảo Tây",
                "Xã Ân Hữu", "Xã Ân Mỹ", "Xã Ân Nghĩa", "Xã Ân Phong",
                "Xã Ân Sơn", "Xã Ân Thạnh", "Xã Ân Tín", "Xã Ân Tường Đông",
                "Xã Ân Tường Tây", "Xã Bok Tới", "Xã Đak Mang"
        ));
        binhDinh.put("Huyện Phù Cát", Arrays.asList(
                "Thị trấn Ngô Mây", "Xã Cát Chánh", "Xã Cát Hải", "Xã Cát Hanh",
                "Xã Cát Hiệp", "Xã Cát Hưng", "Xã Cát Khánh", "Xã Cát Lâm",
                "Xã Cát Minh", "Xã Cát Nhơn", "Xã Cát Sơn", "Xã Cát Tài",
                "Xã Cát Thắng", "Xã Cát Thành", "Xã Cát Tiến", "Xã Cát Trinh",
                "Xã Cát Tường"
        ));
        binhDinh.put("Huyện Phù Mỹ", Arrays.asList(
                "Thị trấn Phù Mỹ", "Thị trấn Bình Dương", "Xã Mỹ An", "Xã Mỹ Cát",
                "Xã Mỹ Chánh", "Xã Mỹ Chánh Tây", "Xã Mỹ Đức", "Xã Mỹ Hiệp",
                "Xã Mỹ Hòa", "Xã Mỹ Lộc", "Xã Mỹ Lợi", "Xã Mỹ Phong",
                "Xã Mỹ Quang", "Xã Mỹ Tài", "Xã Mỹ Thắng", "Xã Mỹ Thành",
                "Xã Mỹ Thọ", "Xã Mỹ Trinh"
        ));
        binhDinh.put("Huyện Tây Sơn", Arrays.asList(
                "Thị trấn Phú Phong", "Xã Bình Hòa", "Xã Bình Nghi", "Xã Bình Tân",
                "Xã Bình Thành", "Xã Bình Thuận", "Xã Bình Tường", "Xã Tây An",
                "Xã Tây Bình", "Xã Tây Giang", "Xã Tây Phú", "Xã Tây Thuận",
                "Xã Tây Vinh", "Xã Tây Xuân", "Xã Vĩnh An"
        ));
        binhDinh.put("Huyện Tuy Phước", Arrays.asList(
                "Thị trấn Diêu Trì", "Thị trấn Tuy Phước", "Xã Phước An", "Xã Phước Hiệp",
                "Xã Phước Hòa", "Xã Phước Hưng", "Xã Phước Lộc", "Xã Phước Nghĩa",
                "Xã Phước Quang", "Xã Phước Sơn", "Xã Phước Thắng", "Xã Phước Thành",
                "Xã Phước Thuận"
        ));
        binhDinh.put("Huyện Vân Canh", Arrays.asList(
                "Thị trấn Vân Canh", "Xã Canh Hiệp", "Xã Canh Hiển", "Xã Canh Hòa",
                "Xã Canh Liên", "Xã Canh Thuận", "Xã Canh Vinh"
        ));
        binhDinh.put("Huyện Vĩnh Thạnh", Arrays.asList(
                "Thị trấn Vĩnh Thạnh", "Xã Vĩnh Hảo", "Xã Vĩnh Hiệp", "Xã Vĩnh Hòa",
                "Xã Vĩnh Kim", "Xã Vĩnh Quang", "Xã Vĩnh Sơn", "Xã Vĩnh Thịnh",
                "Xã Vĩnh Thuận"
        ));
        data.put("Bình Định", binhDinh);

        // Bình Dương
        Map<String, List<String>> binhDuong = new LinkedHashMap<>();
        binhDuong.put("Thành phố Thủ Dầu Một", Arrays.asList(
                "Phường Chánh Mỹ", "Phường Chánh Nghĩa", "Phường Định Hòa", "Phường Hiệp An",
                "Phường Hiệp Thành", "Phường Hòa Phú", "Phường Phú Cường", "Phường Phú Hòa",
                "Phường Phú Lợi", "Phường Phú Mỹ", "Phường Phú Tân", "Phường Phú Thọ",
                "Phường Tân An", "Phường Tương Bình Hiệp"
        ));
        binhDuong.put("Thành phố Dĩ An", Arrays.asList(
                "Phường An Bình", "Phường Bình An", "Phường Bình Thắng", "Phường Dĩ An",
                "Phường Đông Hòa", "Phường Tân Bình", "Phường Tân Đông Hiệp",
                "Xã An Bình", "Xã Bình An", "Xã Bình Thắng", "Xã Tân Bình",
                "Xã Tân Đông Hiệp"
        ));
        binhDuong.put("Thành phố Thuận An", Arrays.asList(
                "Phường An Phú", "Phường An Thạnh", "Phường Bình Chuẩn", "Phường Bình Hòa",
                "Phường Bình Nhâm", "Phường Hưng Định", "Phường Lái Thiêu", "Phường Thuận Giao",
                "Phường Vĩnh Phú", "Xã An Sơn", "Xã Bình Nhâm", "Xã Hưng Định"
        ));
        binhDuong.put("Thị xã Bến Cát", Arrays.asList(
                "Phường Chánh Phú Hòa", "Phường Hòa Lợi", "Phường Mỹ Phước", "Phường Tân Định",
                "Xã An Điền", "Xã An Tây", "Xã Phú An", "Xã Thới Hòa",
                "Xã An Điền", "Xã An Tây", "Xã Phú An"
        ));
        binhDuong.put("Thị xã Tân Uyên", Arrays.asList(
                "Phường Khánh Bình", "Phường Phú Chánh", "Phường Tân Hiệp", "Phường Tân Phước Khánh",
                "Phường Tân Vĩnh Hiệp", "Phường Thái Hòa", "Phường Thạnh Phước", "Phường Uyên Hưng",
                "Phường Vĩnh Tân", "Xã Bạch Đằng", "Xã Đất Cuốc", "Xã Hiếu Liêm",
                "Xã Lạc An", "Xã Tân Bình", "Xã Tân Định", "Xã Tân Lập",
                "Xã Tân Mỹ", "Xã Tân Thành", "Xã Thường Tân"
        ));
        binhDuong.put("Huyện Bàu Bàng", Arrays.asList(
                "Thị trấn Lai Uyên", "Xã Cây Trường", "Xã Hưng Hòa", "Xã Lai Hưng",
                "Xã Long Nguyên", "Xã Tân Hưng", "Xã Trừ Văn Thố"
        ));
        binhDuong.put("Huyện Bắc Tân Uyên", Arrays.asList(
                "Thị trấn Tân Thành", "Xã Bình Mỹ", "Xã Đất Cuốc", "Xã Hiếu Liêm",
                "Xã Lạc An", "Xã Tân Bình", "Xã Tân Định", "Xã Tân Lập",
                "Xã Tân Mỹ", "Xã Tân Thành", "Xã Thường Tân"
        ));
        binhDuong.put("Huyện Dầu Tiếng", Arrays.asList(
                "Thị trấn Dầu Tiếng", "Xã An Lập", "Xã Định An", "Xã Định Hiệp",
                "Xã Định Thành", "Xã Long Hòa", "Xã Long Tân", "Xã Minh Hòa",
                "Xã Minh Tân", "Xã Minh Thạnh", "Xã Thanh An", "Xã Thanh Tuyền"
        ));
        binhDuong.put("Huyện Phú Giáo", Arrays.asList(
                "Thị trấn Phước Vĩnh", "Xã An Bình", "Xã An Linh", "Xã An Long",
                "Xã An Thái", "Xã Phước Hòa", "Xã Phước Sang", "Xã Tam Lập",
                "Xã Tân Hiệp", "Xã Tân Long", "Xã Vĩnh Hòa", "Xã An Bình"
        ));
        data.put("Bình Dương", binhDuong);

        // Bình Phước
        Map<String, List<String>> binhPhuoc = new LinkedHashMap<>();
        binhPhuoc.put("Thành phố Đồng Xoài", Arrays.asList(
                "Phường Tân Bình", "Phường Tân Đồng", "Phường Tân Phú", "Phường Tân Thiện",
                "Phường Tân Xuân", "Xã Tiến Hưng", "Xã Tiến Thành"
        ));
        binhPhuoc.put("Thị xã Bình Long", Arrays.asList(
                "Phường An Lộc", "Phường Hưng Chiến", "Phường Phú Thịnh", "Phường Phú Đức",
                "Xã Thanh Lương", "Xã Thanh Phú"
        ));
        binhPhuoc.put("Thị xã Phước Long", Arrays.asList(
                "Phường Long Phước", "Phường Long Thủy", "Phường Phước Bình", "Phường Sơn Giang",
                "Phường Thác Mơ", "Xã Long Giang", "Xã Phước Tín"
        ));
        binhPhuoc.put("Huyện Bù Đăng", Arrays.asList(
                "Thị trấn Đức Phong", "Xã Bình Minh", "Xã Bom Bo", "Xã Đak Nhau",
                "Xã Đăng Hà", "Xã Đoàn Kết", "Xã Đồng Nai", "Xã Đức Liễu",
                "Xã Đường 10", "Xã Minh Hưng", "Xã Nghĩa Bình", "Xã Nghĩa Trung",
                "Xã Phú Sơn", "Xã Phước Sơn", "Xã Thọ Sơn", "Xã Thống Nhất"
        ));
        binhPhuoc.put("Huyện Bù Đốp", Arrays.asList(
                "Thị trấn Thanh Bình", "Xã Hưng Phước", "Xã Phước Thiện", "Xã Tân Thành",
                "Xã Thanh Hòa", "Xã Thiện Hưng"
        ));
        binhPhuoc.put("Huyện Bù Gia Mập", Arrays.asList(
                "Xã Bình Thắng", "Xã Bù Gia Mập", "Xã Đa Kia", "Xã Đak Ơ",
                "Xã Đức Hạnh", "Xã Đức Phước", "Xã Phú Nghĩa", "Xã Phú Văn",
                "Xã Phước Minh"
        ));
        binhPhuoc.put("Huyện Chơn Thành", Arrays.asList(
                "Thị trấn Chơn Thành", "Xã Minh Hưng", "Xã Minh Lập", "Xã Minh Long",
                "Xã Minh Thành", "Xã Minh Thắng", "Xã Nha Bích", "Xã Quang Minh",
                "Xã Thành Tâm"
        ));
        binhPhuoc.put("Huyện Đồng Phú", Arrays.asList(
                "Thị trấn Tân Phú", "Xã Tân Hòa", "Xã Tân Hưng", "Xã Tân Lập",
                "Xã Tân Lợi", "Xã Tân Phước", "Xã Tân Tiến", "Xã Thuận Lợi",
                "Xã Thuận Phú"
        ));
        binhPhuoc.put("Huyện Hớn Quản", Arrays.asList(
                "Thị trấn Tân Khai", "Xã An Khương", "Xã An Phú", "Xã Đồng Nơ",
                "Xã Minh Đức", "Xã Minh Tâm", "Xã Phước An", "Xã Tân Hiệp",
                "Xã Tân Hưng", "Xã Tân Lợi", "Xã Tân Quan", "Xã Thanh An"
        ));
        binhPhuoc.put("Huyện Lộc Ninh", Arrays.asList(
                "Thị trấn Lộc Ninh", "Xã Lộc An", "Xã Lộc Điền", "Xã Lộc Hiệp",
                "Xã Lộc Hòa", "Xã Lộc Hưng", "Xã Lộc Khánh", "Xã Lộc Phú",
                "Xã Lộc Quang", "Xã Lộc Tấn", "Xã Lộc Thái", "Xã Lộc Thạnh",
                "Xã Lộc Thành", "Xã Lộc Thiện", "Xã Lộc Thuận"
        ));
        binhPhuoc.put("Huyện Phú Riềng", Arrays.asList(
                "Xã Bình Sơn", "Xã Bình Tân", "Xã Bù Nho", "Xã Long Bình",
                "Xã Long Hà", "Xã Long Hưng", "Xã Long Tân", "Xã Phú Riềng",
                "Xã Phú Trung", "Xã Phước Tân"
        ));
        data.put("Bình Phước", binhPhuoc);

        // Cà Mau
        Map<String, List<String>> caMau = new LinkedHashMap<>();
        caMau.put("Thành phố Cà Mau", Arrays.asList(
                "Phường 1", "Phường 2", "Phường 4", "Phường 5", "Phường 6",
                "Phường 7", "Phường 8", "Phường 9", "Phường Tân Thành", "Phường Tân Xuyên",
                "Xã An Xuyên", "Xã Định Bình", "Xã Hòa Tân", "Xã Hòa Thành",
                "Xã Lý Văn Lâm", "Xã Tắc Vân", "Xã Tân Thành"
        ));
        caMau.put("Huyện Cái Nước", Arrays.asList(
                "Thị trấn Cái Nước", "Xã Đông Hưng", "Xã Đông Thới", "Xã Hòa Mỹ",
                "Xã Hưng Mỹ", "Xã Lương Thế Trân", "Xã Phú Hưng", "Xã Tân Hưng",
                "Xã Tân Hưng Đông", "Xã Thạnh Phú", "Xã Trần Thới"
        ));
        caMau.put("Huyện Đầm Dơi", Arrays.asList(
                "Thị trấn Đầm Dơi", "Xã Ngọc Chánh", "Xã Nguyễn Huân", "Xã Quách Phẩm",
                "Xã Quách Phẩm Bắc", "Xã Tạ An Khương", "Xã Tạ An Khương Đông",
                "Xã Tạ An Khương Nam", "Xã Tân Dân", "Xã Tân Đức", "Xã Tân Thuận",
                "Xã Thanh Tùng", "Xã Trần Phán"
        ));
        caMau.put("Huyện Năm Căn", Arrays.asList(
                "Thị trấn Năm Căn", "Xã Đất Mới", "Xã Hàm Rồng", "Xã Hàng Vịnh",
                "Xã Hiệp Tùng", "Xã Lâm Hải", "Xã Tam Giang", "Xã Tam Giang Đông"
        ));
        caMau.put("Huyện Ngọc Hiển", Arrays.asList(
                "Thị trấn Rạch Gốc", "Xã Đất Mũi", "Xã Tam Giang Tây", "Xã Tân Ân",
                "Xã Tân Ân Tây", "Xã Viên An", "Xã Viên An Đông"
        ));
        caMau.put("Huyện Phú Tân", Arrays.asList(
                "Thị trấn Cái Đôi Vàm", "Xã Nguyễn Việt Khái", "Xã Phú Mỹ", "Xã Phú Tân",
                "Xã Phú Thuận", "Xã Rạch Chèo", "Xã Tân Hải", "Xã Tân Hưng Tây",
                "Xã Việt Thắng", "Xã Việt Khái"
        ));
        caMau.put("Huyện Thới Bình", Arrays.asList(
                "Thị trấn Thới Bình", "Xã Biển Bạch", "Xã Biển Bạch Đông", "Xã Hồ Thị Kỷ",
                "Xã Tân Bằng", "Xã Tân Lộc", "Xã Tân Lộc Bắc", "Xã Tân Lộc Đông",
                "Xã Tân Phú", "Xã Thới Bình", "Xã Trí Lực", "Xã Trí Phải"
        ));
        caMau.put("Huyện Trần Văn Thời", Arrays.asList(
                "Thị trấn Trần Văn Thời", "Thị trấn Sông Đốc", "Xã Khánh Bình", "Xã Khánh Bình Đông",
                "Xã Khánh Bình Tây", "Xã Khánh Bình Tây Bắc", "Xã Khánh Hải", "Xã Khánh Hưng",
                "Xã Khánh Lộc", "Xã Lợi An", "Xã Phong Điền", "Xã Phong Lạc"
        ));
        caMau.put("Huyện U Minh", Arrays.asList(
                "Thị trấn U Minh", "Xã Khánh An", "Xã Khánh Hòa", "Xã Khánh Hội",
                "Xã Khánh Lâm", "Xã Khánh Thuận", "Xã Khánh Tiến", "Xã Nguyễn Phích",
                "Xã Trần Hợi"
        ));
        data.put("Cà Mau", caMau);

        // Các tỉnh còn lại... (có thể thêm tương tự)

        // Tạo danh sách tỉnh
        provinces = new ArrayList<>(data.keySet());
        Collections.sort(provinces);
    }

    public static List<String> getProvinces() {
        return provinces;
    }

    public static Map<String, List<String>> getDistricts(String province) {
        return data.getOrDefault(province, new LinkedHashMap<>());
    }

    public static List<String> getWards(String province, String district) {
        Map<String, List<String>> districts = data.get(province);
        if (districts != null) {
            return districts.getOrDefault(district, new ArrayList<>());
        }
        return new ArrayList<>();
    }

    public static boolean hasDistrict(String province) {
        Map<String, List<String>> districts = data.get(province);
        return districts != null && !districts.isEmpty();
    }

    public static boolean hasWard(String province, String district) {
        Map<String, List<String>> districts = data.get(province);
        if (districts != null) {
            List<String> wards = districts.get(district);
            return wards != null && !wards.isEmpty();
        }
        return false;
    }
}