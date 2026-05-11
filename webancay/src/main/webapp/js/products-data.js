// DỮ LIỆU SẢN PHẨM CHUNG - SỬ DỤNG CHO CẢ TRANG CHỦ VÀ TRANG CHI TIẾT
const productsDatabase = {
    // === SẢN PHẨM MỚI (20 sản phẩm) ===
    'TUBO005': {
        code: 'TUBO005',
        name: 'Cây tùng bồng lai tiểu cảnh chậu sứ thổ cẩm',
        price: '500.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-tung-bong-lai-tubo005.jpg',
        thumbnailImages: [
            'images/products/new/cay-tung-bong-lai-tubo005.jpg',
            'images/products/new/cay-tung-bong-lai-tubo005.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Tùng Bồng Lai là loại cây cảnh mini để bàn mang ý nghĩa phong thủy tốt đẹp, tượng trưng cho sự trường thọ và may mắn. Cây có sức sống mãnh liệt, dễ chăm sóc, thích hợp để trang trí bàn làm việc, bàn học hoặc phòng khách.',
        details: {
            scientificName: 'Podocarpus macrophyllus',
            otherNames: 'Tùng lá văn, Tùng bách',
            size: '• Kích thước chậu: 15x12cm (DxC)<br/>• Chiều cao tổng: 25 - 30cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 1-2 lần/tuần',
            temperature: '18-28°C',
            humidity: 'Trung bình 50-60%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'CPTK001': {
        code: 'CPTK001',
        name: 'Cây phát tài bộ 5 – Cây thiết mộc lan',
        price: '750.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-phat-tai-bo-5.jpg',
        thumbnailImages: [
            'images/products/new/cay-phat-tai-bo-5.jpg',
            'images/products/new/cay-phat-tai-bo-5.jpg',
            'images/products/new/cay-phat-tai-bo-5.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Phát Tài bộ 5 với 5 thân đan xen tượng trưng cho ngũ phúc: Phúc, Lộc, Thọ, Khang, Ninh. Cây mang lại may mắn, tài lộc và thịnh vượng cho gia chủ, phù hợp đặt ở phòng khách, văn phòng làm việc.',
        details: {
            scientificName: 'Dracaena fragrans',
            otherNames: 'Cây phát lộc, Thiết mộc lan',
            size: '• Kích thước chậu: 25x20cm<br/>• Chiều cao tổng: 60 - 70cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'LONI040': {
        code: 'LONI040',
        name: 'Cây kim ngân toa thỏn để bàn chậu sứ gấu BearBrick',
        price: '280.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-kim-ngan.jpg',
        thumbnailImages: [
            'images/products/new/cay-kim-ngan.jpg',
            'images/products/new/cay-kim-ngan.jpg',
            'images/products/new/cay-kim-ngan.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Kim Ngân được trồng trong chậu sứ hình gấu BearBrick độc đáo, thích hợp để bàn làm việc, bàn học. Cây có ý nghĩa phong thủy mang lại tài lộc và may mắn trong kinh doanh.',
        details: {
            scientificName: 'Pachira aquatica',
            otherNames: 'Cây thắt bím, Money tree',
            size: '• Kích thước chậu: 12x10cm<br/>• Chiều cao tổng: 20 - 25cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng nhẹ',
            water: 'Tưới nước 1 lần/tuần',
            temperature: '18-27°C',
            humidity: '40-60%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'PHIG006': {
        code: 'PHIG006',
        name: 'Cây trầu bà đế vương xanh chậu mặt cool \'Imperial Green\'',
        price: '120.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-trau-ba-de-vuong.jpg',
        thumbnailImages: [
            'images/products/new/cay-trau-ba-de-vuong.jpg',
            'images/products/new/cay-trau-ba-de-vuong.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Trầu Bà Đế Vương xanh với lá hình tim màu xanh đậm, viền vàng, mang vẻ đẹp sang trọng. Cây có khả năng thanh lọc không khí, loại bỏ độc tố formaldehyde, benzene trong không gian sống.',
        details: {
            scientificName: 'Philodendron imperial green',
            otherNames: 'Trầu bà đế vương',
            size: '• Kích thước chậu: 14x12cm<br/>• Chiều cao tổng: 30 - 35cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'SANS002': {
        code: 'SANS002',
        name: 'Cây Lưỡi Hổ Vàng Miền Châu',
        price: '120.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-luoi-ho-vang.jpg',
        thumbnailImages: [
            'images/products/new/cay-luoi-ho-vang.jpg',
            'images/products/new/cay-luoi-ho-vang.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Lưỡi Hổ có khả năng thanh lọc không khí, hấp thụ độc tố, phù hợp để bàn làm việc, phòng ngủ. Cây giải phóng oxy vào ban đêm, cải thiện chất lượng giấc ngủ, mang lại không gian trong lành.',
        details: {
            scientificName: 'Sansevieria trifasciata',
            otherNames: 'Cây lưỡi cọp, Hổ vĩ mép vàng',
            size: '• Kích thước chậu: 12x10cm<br/>• Chiều cao tổng: 25 - 30cm',
            difficulty: 'Rất dễ chăm sóc',
            light: 'Mọi điều kiện ánh sáng',
            water: 'Tưới nước 2 tuần/lần',
            temperature: '18-30°C',
            humidity: '30-50%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'ANTH010': {
        code: 'ANTH010',
        name: 'Cây hồng môn cỡ nhỏ chậu sứ trắng ANTH010',
        price: '240.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-hong-mon.jpg',
        thumbnailImages: [
            'images/products/new/cay-hong-mon.jpg',
            'images/products/new/cay-hong-mon.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Hồng Môn với hoa màu đỏ rực rỡ, tượng trưng cho tình yêu và sự nhiệt huyết. Cây thích hợp trang trí bàn làm việc, phòng khách, mang lại không gian tươi mát và tràn đầy năng lượng.',
        details: {
            scientificName: 'Anthurium andraeanum',
            otherNames: 'Cây vĩ hoa tròn, Buồm đỏ',
            size: '• Kích thước chậu: 15x13cm<br/>• Chiều cao tổng: 35 - 40cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 2-3 lần/tuần',
            temperature: '20-28°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'SCHE020': {
        code: 'SCHE020',
        name: 'Cây ngũ gia bì cẩm thạch nhỏ chậu ươm SCHE020',
        price: '100.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-ngu-gia-bi.jpg',
        thumbnailImages: [
            'images/products/new/cay-ngu-gia-bi.jpg',
            'images/products/new/cay-ngu-gia-bi-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Ngũ Gia Bì cẩm thạch với lá có vân trắng độc đáo, có khả năng đuổi muỗi tự nhiên. Cây thích hợp để bàn làm việc, phòng ngủ, mang lại không gian xanh mát và trong lành.',
        details: {
            scientificName: 'Schefflera arboricola',
            otherNames: 'Cây chân chim, Sâm non',
            size: '• Kích thước chậu: 10x9cm (ươm)<br/>• Chiều cao tổng: 20 - 25cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'LONI039': {
        code: 'LONI039',
        name: 'Cây kim ngân một thân để bàn chậu sứ LONI039',
        price: '450.000đ',
        originalPrice: '480.000đ',
        image: 'images/products/new/cay-kim-ngan-mot-than.jpg',
        thumbnailImages: [
            'images/products/new/cay-kim-ngan-mot-than.jpg',
            'images/products/new/cay-kim-ngan-mot-than-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: true,
        discountPercentage: 6,
        description: 'Cây Kim Ngân một thân với dáng đứng thẳng, lá xanh mướt tượng trưng cho sự vững chắc và thịnh vượng. Cây thích hợp để bàn làm việc, quầy lễ tân, mang lại tài lộc và may mắn.',
        details: {
            scientificName: 'Pachira aquatica',
            otherNames: 'Cây kim tiền, Money tree',
            size: '• Kích thước chậu: 18x16cm<br/>• Chiều cao tổng: 40 - 45cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 1-2 lần/tuần',
            temperature: '18-27°C',
            humidity: '40-60%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'LIVI005': {
        code: 'LIVI005',
        name: 'Cây cọ lùn xòe mini để bàn chậu sứ hoa văn LIVI005',
        price: '160.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-co-lun-xoe.jpg',
        thumbnailImages: [
            'images/products/new/cay-co-lun-xoe.jpg',
            'images/products/new/cay-co-lun-xoe-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Cọ Lùn Xòe với tán lá xòe rộng như chiếc quạt, mang lại không gian nhiệt đới tươi mát. Cây có khả năng thanh lọc không khí, hấp thụ khí độc, thích hợp để bàn làm việc, phòng khách.',
        details: {
            scientificName: 'Licuala grandis',
            otherNames: 'Cọ quạt, Cọ lá xòe',
            size: '• Kích thước chậu: 14x12cm<br/>• Chiều cao tổng: 25 - 30cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 2-3 lần/tuần',
            temperature: '20-30°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'RADE032': {
        code: 'RADE032',
        name: 'Cây hạnh phúc để sàn 2 tầng chậu sứ hoa văn RADE032',
        price: '900.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-hanh-phuc.jpg',
        thumbnailImages: [
            'images/products/new/cay-hanh-phuc.jpg',
            'images/products/new/cay-hanh-phuc-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Hạnh Phúc 2 tầng với tán lá xum xuê, xanh mướt, tượng trưng cho sự viên mãn và hạnh phúc trọn vẹn. Cây thích hợp đặt ở góc phòng khách, văn phòng, sảnh tiếp tân.',
        details: {
            scientificName: 'Radermachera sinica',
            otherNames: 'Cây hạnh phúc',
            size: '• Kích thước chậu: 35x30cm<br/>• Chiều cao tổng: 120 - 130cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'RADE031': {
        code: 'RADE031',
        name: 'Cây hạnh phúc để sàn chậu sứ RADE031',
        price: '550.000đ',
        originalPrice: '600.000đ',
        image: 'images/products/new/cay-hanh-phuc-de-san.jpg',
        thumbnailImages: [
            'images/products/new/cay-hanh-phuc-de-san.jpg',
            'images/products/new/cay-hanh-phuc-de-san-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'new',
        hasDiscount: true,
        discountPercentage: 8,
        description: 'Cây Hạnh Phúc với tán lá xanh mướt, mang lại không gian tươi mát và cảm giác thư giãn cho văn phòng. Cây có ý nghĩa mang lại hạnh phúc, may mắn và thành công trong công việc.',
        details: {
            scientificName: 'Radermachera sinica',
            otherNames: 'Cây hạnh phúc',
            size: '• Kích thước chậu: 30x25cm<br/>• Chiều cao tổng: 80 - 90cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'LONI038': {
        code: 'LONI038',
        name: 'Cây kim ngân để bàn thân bính tiểu cảnh chậu sứ LONI038',
        price: '380.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-kim-ngan-de-ban.jpg',
        thumbnailImages: [
            'images/products/new/cay-kim-ngan-de-ban.jpg',
            'images/products/new/cay-kim-ngan-de-ban-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Kim Ngân thân bính với nhiều thân đan xen tạo thành bím tóc độc đáo, mang ý nghĩa tài lộc kết hợp. Cây thích hợp để bàn làm việc, quầy thu ngân, mang lại thịnh vượng trong kinh doanh.',
        details: {
            scientificName: 'Pachira aquatica',
            otherNames: 'Cây thắt bím, Money tree',
            size: '• Kích thước chậu: 16x14cm<br/>• Chiều cao tổng: 35 - 40cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 1-2 lần/tuần',
            temperature: '18-27°C',
            humidity: '40-60%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'SHBG005': {
        code: 'SHBG005',
        name: 'Cây lưỡi hổ xanh để bàn mini \'Block Gold\' chậu sứ SHBG005',
        price: '120.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-luoi-ho.jpg',
        thumbnailImages: [
            'images/products/new/cay-luoi-ho.jpg',
            'images/products/new/cay-luoi-ho-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Lưỡi Hổ xanh mini với thiết kế chậu sứ Block Gold sang trọng, thích hợp để bàn làm việc, kệ sách. Cây có khả năng thanh lọc không khí, hấp thụ bức xạ từ thiết bị điện tử.',
        details: {
            scientificName: 'Sansevieria trifasciata',
            otherNames: 'Lưỡi hổ xanh',
            size: '• Kích thước chậu: 10x9cm<br/>• Chiều cao tổng: 20 - 25cm',
            difficulty: 'Rất dễ chăm sóc',
            light: 'Mọi điều kiện ánh sáng',
            water: 'Tưới nước 2 tuần/lần',
            temperature: '18-30°C',
            humidity: '30-50%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'PEAC005': {
        code: 'PEAC005',
        name: 'Cây Lan ý chậu cỡ lớn để bàn chậu sứ trắng PEAC005',
        price: '240.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-lan-y.jpg',
        thumbnailImages: [
            'images/products/new/cay-lan-y.jpg',
            'images/products/new/cay-lan-y-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Lan ý với hoa trắng tinh khôi, lá xanh mướt, có khả năng thanh lọc không khí rất tốt. Cây thích hợp để bàn làm việc, phòng họp, mang lại không gian trong lành và thư giãn.',
        details: {
            scientificName: 'Spathiphyllum wallisii',
            otherNames: 'Cây huệ hòa bình, Peace lily',
            size: '• Kích thước chậu: 18x16cm<br/>• Chiều cao tổng: 40 - 45cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 2-3 lần/tuần',
            temperature: '20-28°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'AGLA104': {
        code: 'AGLA104',
        name: 'Cây phú quý chậu sứ thổ cẩm để bàn AGLA104',
        price: '320.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-phu-quy.jpg',
        thumbnailImages: [
            'images/products/new/cay-phu-quy.jpg',
            'images/products/new/cay-phu-quy-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Phú Quý với lá có viền đỏ hồng nổi bật, tượng trưng cho sự giàu sang, phú quý. Cây thích hợp để bàn làm việc, phòng khách, mang lại may mắn và tài lộc cho gia chủ.',
        details: {
            scientificName: 'Aglaonema commutatum',
            otherNames: 'Cây minh ty, Aglaonema',
            size: '• Kích thước chậu: 16x14cm<br/>• Chiều cao tổng: 35 - 40cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'SPI004': {
        code: 'SPI004',
        name: 'Cây cỏ lan chi để bàn chậu sứ mặt cười',
        price: '120.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-co-lan-chi.jpg',
        thumbnailImages: [
            'images/products/new/cay-co-lan-chi.jpg',
            'images/products/new/cay-co-lan-chi-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Cỏ Lan Chi với lá dài, viền trắng thanh thoát, được trồng trong chậu sứ mặt cười độc đáo. Cây có khả năng thanh lọc không khí, hấp thụ formaldehyde và benzene.',
        details: {
            scientificName: 'Chlorophytum comosum',
            otherNames: 'Cây nhện, Cỏ mẫu tử',
            size: '• Kích thước chậu: 12x10cm<br/>• Chiều cao tổng: 25 - 30cm',
            difficulty: 'Rất dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 2-3 lần/tuần',
            temperature: '18-28°C',
            humidity: '40-60%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'PHIR008': {
        code: 'PHIR008',
        name: 'Cây trầu bà đế vương đỏ để bàn \'Red Rojo\' chậu sứ',
        price: '320.000đ',
        originalPrice: '350.000đ',
        image: 'images/products/new/cay-trau-ba-do.jpg',
        thumbnailImages: [
            'images/products/new/cay-trau-ba-do.jpg',
            'images/products/new/cay-trau-ba-do-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: true,
        discountPercentage: 9,
        description: 'Cây Trầu Bà Đế Vương đỏ với lá màu đỏ tía sang trọng, viền xanh độc đáo. Cây có ý nghĩa phong thủy mang lại quyền lực và thăng tiến trong sự nghiệp, thích hợp để bàn làm việc.',
        details: {
            scientificName: 'Philodendron imperial red',
            otherNames: 'Trầu bà đế vương đỏ',
            size: '• Kích thước chậu: 16x14cm<br/>• Chiều cao tổng: 35 - 40cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'STBS001': {
        code: 'STBS001',
        name: 'Cây lưỡi hổ Bental Sensation chậu ươm',
        price: '160.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-luoi-ho-ben.jpg',
        thumbnailImages: [
            'images/products/new/cay-luoi-ho-ben.jpg',
            'images/products/new/cay-luoi-ho-ben-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Lưỡi Hổ Bental Sensation với lá có viền vàng và vân xanh độc đáo, có khả năng thanh lọc không khí mạnh mẽ. Cây thích hợp để bàn làm việc, phòng ngủ, mang lại không gian trong lành.',
        details: {
            scientificName: 'Sansevieria bantel\'s sensation',
            otherNames: 'Lưỡi hổ vằn',
            size: '• Kích thước chậu: 12x10cm (ươm)<br/>• Chiều cao tổng: 30 - 35cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 2 tuần/lần',
            temperature: '18-30°C',
            humidity: '30-50%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'RADE033': {
        code: 'RADE033',
        name: 'Cây hạnh phúc để sàn 2 tầng lớn chậu đá mài',
        price: '1.200.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-hanh-phuc-de-2.jpg',
        thumbnailImages: [
            'images/products/new/cay-hanh-phuc-de-2.jpg',
            'images/products/new/cay-hanh-phuc-de-2-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Hạnh Phúc 2 tầng lớn với tán lá xum xuê, được trồng trong chậu đá mài sang trọng. Cây thích hợp đặt ở sảnh lớn, văn phòng công ty, mang lại không gian xanh mát và thư giãn.',
        details: {
            scientificName: 'Radermachera sinica',
            otherNames: 'Cây hạnh phúc',
            size: '• Kích thước chậu: 40x35cm<br/>• Chiều cao tổng: 150 - 160cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'CTBC007': {
        code: 'CTBC007',
        name: 'Cây trầu bà cột chậu xi măng trụ vuông',
        price: '1.100.000đ',
        originalPrice: '',
        image: 'images/products/new/cay-trau-ba.jpg',
        thumbnailImages: [
            'images/products/new/cay-trau-ba.jpg',
            'images/products/new/cay-trau-ba-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'new',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Trầu Bà cột với thân leo bám trên trụ dừa, được trồng trong chậu xi măng trụ vuông hiện đại. Cây có khả năng thanh lọc không khí rất tốt, thích hợp đặt ở góc phòng, sảnh văn phòng.',
        details: {
            scientificName: 'Epipremnum aureum',
            otherNames: 'Cây trầu bà leo cột',
            size: '• Kích thước chậu: 30x30cm<br/>• Chiều cao tổng: 140 - 150cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },

    // === CÂY CẢNH ĐỂ BÀN (10 sản phẩm) ===
    // Định nghĩa các sản phẩm đặc thù cho section desktop
    'TUBO005_D': {
        code: 'TUBO005',
        name: 'Cây tùng bồng lai tiểu cảnh chậu sứ thổ cẩm TUBO005',
        price: '500.000đ',
        originalPrice: '',
        image: 'images/products/desktop/cay-tung-bonglai-tieu.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-tung-bonglai-tieu.jpg',
            'images/products/desktop/cay-tung-bonglai-tieu-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Tùng Bồng Lai mini để bàn với chậu sứ thổ cẩm tinh xảo, thích hợp trang trí bàn làm việc, mang lại may mắn và tài lộc.',
        details: {
            scientificName: 'Podocarpus macrophyllus',
            otherNames: 'Tùng lá văn, Tùng bách',
            size: '• Kích thước chậu: 15x12cm<br/>• Chiều cao tổng: 25-30cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 1-2 lần/tuần',
            temperature: '18-28°C',
            humidity: 'Trung bình 50-60%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'LONI040_D': {
        code: 'LONI040',
        name: 'Cây kim ngân bọ thỏn để bàn chậu sứ gấu BearBrick LONI040',
        price: '280.000đ',
        originalPrice: '',
        image: 'images/products/desktop/cay-kim-ngan-bo.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-kim-ngan-bo.jpg',
            'images/products/desktop/cay-kim-ngan-bo-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Kim Ngân trồng trong chậu sứ hình gấu BearBrick độc đáo, phù hợp để bàn làm việc, mang lại tài lộc và thịnh vượng.',
        details: {
            scientificName: 'Pachira aquatica',
            otherNames: 'Cây thắt bím, Money tree',
            size: '• Kích thước chậu: 12x10cm<br/>• Chiều cao tổng: 20-25cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng nhẹ',
            water: 'Tưới nước 1 lần/tuần',
            temperature: '18-27°C',
            humidity: '40-60%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'PHIG006_D': {
        code: 'PHIG006',
        name: 'Cây trầu bà đế vương xanh chậu mặt cool \'Imperial Green\' chậu sứ PHIG006',
        price: '120.000đ',
        originalPrice: '',
        image: 'images/products/desktop/cay-trau-ba-de-xanh.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-trau-ba-de-xanh.jpg',
            'images/products/desktop/cay-trau-ba-de-xanh-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Trầu Bà Đế Vương xanh với chậu mặt cool, thanh lọc không khí hiệu quả, thích hợp để bàn làm việc.',
        details: {
            scientificName: 'Philodendron imperial green',
            otherNames: 'Trầu bà đế vương',
            size: '• Kích thước chậu: 14x12cm<br/>• Chiều cao tổng: 30-35cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'SANS002_D': {
        code: 'SANS002',
        name: 'Cây Lưỡi Hổ Vàng Miền Châu để bàn Sonsevireria Cylindrico SANS002',
        price: '120.000đ',
        originalPrice: '',
        image: 'images/products/desktop/cay-luoiho-vang.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-luoiho-vang.jpg',
            'images/products/desktop/cay-luoiho-vang-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Lưỡi Hổ Vàng Miền Châu để bàn, giải phóng oxy ban đêm, cải thiện chất lượng giấc ngủ và không khí.',
        details: {
            scientificName: 'Sansevieria trifasciata',
            otherNames: 'Cây lưỡi cọp, Hổ vĩ mép vàng',
            size: '• Kích thước chậu: 12x10cm<br/>• Chiều cao tổng: 25-30cm',
            difficulty: 'Rất dễ chăm sóc',
            light: 'Mọi điều kiện ánh sáng',
            water: 'Tưới nước 2 tuần/lần',
            temperature: '18-30°C',
            humidity: '30-50%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'SPI004_D': {
        code: 'SPI004',
        name: 'Cây cỏ lan chi để bàn chậu sứ mặt cười SPI004',
        price: '120.000đ',
        originalPrice: '',
        image: 'images/products/desktop/cay-co-lan-cuoi.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-co-lan-cuoi.jpg',
            'images/products/desktop/cay-co-lan-cuoi-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Cỏ Lan Chi trong chậu sứ mặt cười vui nhộn, thanh lọc không khí, mang lại không gian tươi mát.',
        details: {
            scientificName: 'Chlorophytum comosum',
            otherNames: 'Cây nhện, Cỏ mẫu tử',
            size: '• Kích thước chậu: 12x10cm<br/>• Chiều cao tổng: 25-30cm',
            difficulty: 'Rất dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 2-3 lần/tuần',
            temperature: '18-28°C',
            humidity: '40-60%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'PHIR008_D': {
        code: 'PHIR008',
        name: 'Cây trầu bà đế vương đỏ để bàn \'Red Rojo\' chậu sứ PHIR008',
        price: '320.000đ',
        originalPrice: '350.000đ',
        image: 'images/products/desktop/cay-trau-do.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-trau-do.jpg',
            'images/products/desktop/cay-trau-do-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: true,
        discountPercentage: 9,
        description: 'Cây Trầu Bà Đế Vương đỏ với lá màu đỏ tía sang trọng, mang lại quyền lực và thăng tiến trong sự nghiệp.',
        details: {
            scientificName: 'Philodendron imperial red',
            otherNames: 'Trầu bà đế vương đỏ',
            size: '• Kích thước chậu: 16x14cm<br/>• Chiều cao tổng: 35-40cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'STBS001_D': {
        code: 'STBS001',
        name: 'Cây lưỡi hổ Bental Sensation chậu ươm STBS001',
        price: '160.000đ',
        originalPrice: '',
        image: 'images/products/desktop/cay-luoi-ho-uom.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-luoi-ho-uom.jpg',
            'images/products/desktop/cay-luoi-ho-uom-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Lưỡi Hổ Bental Sensation với vân lá độc đáo, thanh lọc không khí mạnh mẽ, dễ chăm sóc.',
        details: {
            scientificName: 'Sansevieria bantel\'s sensation',
            otherNames: 'Lưỡi hổ vằn',
            size: '• Kích thước chậu: 12x10cm (ươm)<br/>• Chiều cao tổng: 30-35cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 2 tuần/lần',
            temperature: '18-30°C',
            humidity: '30-50%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'ANTH010_D': {
        code: 'ANTH010',
        name: 'Cây hồng môn cỡ nhỏ chậu sứ trắng ANTH010',
        price: '240.000đ',
        originalPrice: '',
        image: 'images/products/desktop/cay-hong-mon-nho.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-hong-mon-nho.jpg',
            'images/products/desktop/cay-hong-mon-nho-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Hồng Môn cỡ nhỏ với hoa đỏ rực rỡ, tượng trưng cho tình yêu và nhiệt huyết, thích hợp để bàn làm việc.',
        details: {
            scientificName: 'Anthurium andraeanum',
            otherNames: 'Cây vĩ hoa tròn, Buồm đỏ',
            size: '• Kích thước chậu: 15x13cm<br/>• Chiều cao tổng: 35-40cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 2-3 lần/tuần',
            temperature: '20-28°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'SCHE020_D': {
        code: 'SCHE020',
        name: 'Cây ngũ gia bì cẩm thạch nhỏ chậu ươm SCHE020',
        price: '100.000đ',
        originalPrice: '',
        image: 'images/products/desktop/cay-ngu-gia.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-ngu-gia.jpg',
            'images/products/desktop/cay-ngu-gia-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Ngũ Gia Bì cẩm thạch với lá vân trắng đẹp mắt, có khả năng đuổi muỗi tự nhiên, dễ chăm sóc.',
        details: {
            scientificName: 'Schefflera arboricola',
            otherNames: 'Cây chân chim, Sâm non',
            size: '• Kích thước chậu: 10x9cm (ươm)<br/>• Chiều cao tổng: 20-25cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },
    'LONI039_D': {
        code: 'LONI039',
        name: 'Cây kim ngân một thân để bàn chậu sứ LONI039',
        price: '450.000đ',
        originalPrice: '480.000đ',
        image: 'images/products/desktop/cay-kim-ngan-ban.jpg',
        thumbnailImages: [
            'images/products/desktop/cay-kim-ngan-ban.jpg',
            'images/products/desktop/cay-kim-ngan-ban-2.jpg'
        ],
        category: 'Cây để bàn',
        section: 'desktop',
        hasDiscount: true,
        discountPercentage: 6,
        description: 'Cây Kim Ngân một thân dáng đứng thẳng, tượng trưng cho sự vững chắc và thịnh vượng, thích hợp để bàn làm việc.',
        details: {
            scientificName: 'Pachira aquatica',
            otherNames: 'Cây kim tiền, Money tree',
            size: '• Kích thước chậu: 18x16cm<br/>• Chiều cao tổng: 40-45cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 1-2 lần/tuần',
            temperature: '18-27°C',
            humidity: '40-60%'
        },
        shippingInfo: {
            freeShipping: false,
            shippingTime: '1-3 ngày',
            location: 'HCM & Toàn quốc'
        }
    },

    // === CÂY CẢNH VĂN PHÒNG (10 sản phẩm) ===
    'RADE031_O': {
        code: 'RADE031',
        name: 'Cây hạnh phúc để sàn chậu sứ RADE031',
        price: '550.000đ',
        originalPrice: '600.000đ',
        image: 'images/products/office/cay-hanh-phuc-nho.jpg',
        thumbnailImages: [
            'images/products/office/cay-hanh-phuc-nho.jpg',
            'images/products/office/cay-hanh-phuc-nho-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: true,
        discountPercentage: 8,
        description: 'Cây Hạnh Phúc để sàn với tán lá xanh mướt, mang lại không gian tươi mát và cảm giác thư giãn cho văn phòng.',
        details: {
            scientificName: 'Radermachera sinica',
            otherNames: 'Cây hạnh phúc',
            size: '• Kích thước chậu: 30x25cm<br/>• Chiều cao tổng: 80-90cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'BUBV007': {
        code: 'BUBV007',
        name: 'Cây bàng Đài Loan cẩm thạch chậu sứ BUBV007',
        price: '1.200.000đ',
        originalPrice: '',
        image: 'images/products/office/cay-bang-dl.jpg',
        thumbnailImages: [
            'images/products/office/cay-bang-dl.jpg',
            'images/products/office/cay-bang-dl-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Bàng Đài Loan cẩm thạch với lá có vân trắng độc đáo, thích hợp đặt ở góc văn phòng, sảnh lớn.',
        details: {
            scientificName: 'Ficus microcarpa',
            otherNames: 'Cây bàng Đài Loan',
            size: '• Kích thước chậu: 40x35cm<br/>• Chiều cao tổng: 130-140cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'CPTN013': {
        code: 'CPTN013',
        name: 'Cây phát tài núi 2 tầng chậu đá mài CPTN013',
        price: '1.750.000đ',
        originalPrice: '1.900.000đ',
        image: 'images/products/office/cay-phat-tai.jpg',
        thumbnailImages: [
            'images/products/office/cay-phat-tai.jpg',
            'images/products/office/cay-phat-tai-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: true,
        discountPercentage: 8,
        description: 'Cây Phát Tài núi 2 tầng trong chậu đá mài sang trọng, mang lại may mắn và tài lộc cho văn phòng.',
        details: {
            scientificName: 'Dracaena deremensis',
            otherNames: 'Cây phát tài núi',
            size: '• Kích thước chậu: 35x30cm<br/>• Chiều cao tổng: 150-160cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 1-2 lần/tuần',
            temperature: '20-30°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'RADE024': {
        code: 'RADE024',
        name: 'Cây hạnh phúc một thân cao 1m6 chậu đất nung RADE024',
        price: '900.000đ',
        originalPrice: '',
        image: 'images/products/office/cay-hp-cao.jpg',
        thumbnailImages: [
            'images/products/office/cay-hp-cao.jpg',
            'images/products/office/cay-hp-cao-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Hạnh Phúc một thân cao 1m6 trong chậu đất nung, tạo điểm nhấn xanh mát cho không gian văn phòng.',
        details: {
            scientificName: 'Radermachera sinica',
            otherNames: 'Cây hạnh phúc',
            size: '• Kích thước chậu: 35x30cm<br/>• Chiều cao tổng: 160-170cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'SCHE017': {
        code: 'SCHE017',
        name: 'Cây ngũ gia bì để sàn chậu trụ tròn đỏ mận SCHE017',
        price: '750.000đ',
        originalPrice: '',
        image: 'images/products/office/cay-ngu-gia-do.jpg',
        thumbnailImages: [
            'images/products/office/cay-ngu-gia-do.jpg',
            'images/products/office/cay-ngu-gia-do-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Ngũ Gia Bì để sàn trong chậu trụ tròn màu đỏ mận, có khả năng đuổi muỗi và thanh lọc không khí.',
        details: {
            scientificName: 'Schefflera arboricola',
            otherNames: 'Cây chân chim, Sâm non',
            size: '• Kích thước chậu: 30x25cm<br/>• Chiều cao tổng: 100-110cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'CHRY009': {
        code: 'CHRY009',
        name: 'Cây cau vàng Nhật Bản cỡ trung chậu đá mài CHRY009',
        price: '740.000đ',
        originalPrice: '',
        image: 'images/products/office/cay-cau.jpg',
        thumbnailImages: [
            'images/products/office/cay-cau.jpg',
            'images/products/office/cay-cau-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Cau Vàng Nhật Bản với lá xanh vàng tươi sáng, mang lại không gian nhiệt đới tươi mát cho văn phòng.',
        details: {
            scientificName: 'Chrysalidocarpus lutescens',
            otherNames: 'Cây cau vàng',
            size: '• Kích thước chậu: 30x25cm<br/>• Chiều cao tổng: 90-100cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2-3 lần/tuần',
            temperature: '20-30°C',
            humidity: '60-80%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'RADE009': {
        code: 'RADE009',
        name: 'Cây hạnh phúc 2 tầng chậu sứ trắng RADE009',
        price: '990.000đ',
        originalPrice: '',
        image: 'images/products/office/cay-hanh-phuc-su.jpg',
        thumbnailImages: [
            'images/products/office/cay-hanh-phuc-su.jpg',
            'images/products/office/cay-hanh-phuc-su-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Hạnh Phúc 2 tầng trong chậu sứ trắng thanh lịch, tạo điểm nhấn xanh tươi cho không gian làm việc.',
        details: {
            scientificName: 'Radermachera sinica',
            otherNames: 'Cây hạnh phúc',
            size: '• Kích thước chậu: 35x30cm<br/>• Chiều cao tổng: 120-130cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'LYRA023': {
        code: 'LYRA023',
        name: 'Cây bàng Singapore cao 2m dáng tree chậu sứ LYRA023',
        price: '2.200.000đ',
        originalPrice: '',
        image: 'images/products/office/cay-bang-2m.jpg',
        thumbnailImages: [
            'images/products/office/cay-bang-2m.jpg',
            'images/products/office/cay-bang-2m-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Bàng Singapore cao 2m dáng tree sang trọng, thích hợp đặt ở sảnh lớn, văn phòng công ty.',
        details: {
            scientificName: 'Ficus lyrata',
            otherNames: 'Cây bàng lá to',
            size: '• Kích thước chậu: 45x40cm<br/>• Chiều cao tổng: 200-210cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'LONI017': {
        code: 'LONI017',
        name: 'Cây kim ngân thắt bính kích thước lớn LONI017',
        price: '1.200.000đ',
        originalPrice: '',
        image: 'images/products/office/cay-kim-ngan-binh.jpg',
        thumbnailImages: [
            'images/products/office/cay-kim-ngan-binh.jpg',
            'images/products/office/cay-kim-ngan-binh-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Cây Kim Ngân thắt bính kích thước lớn, mang lại tài lộc và thịnh vượng cho doanh nghiệp.',
        details: {
            scientificName: 'Pachira aquatica',
            otherNames: 'Cây thắt bím, Money tree',
            size: '• Kích thước chậu: 40x35cm<br/>• Chiều cao tổng: 140-150cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 1-2 lần/tuần',
            temperature: '18-27°C',
            humidity: '40-60%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },
    'CPTN012': {
        code: 'CPTN012',
        name: 'Cây phát tài núi 2 tầng chậu sứ CPTN012',
        price: '1.750.000đ',
        originalPrice: '1.900.000đ',
        image: 'images/products/office/cay-kim-ngan-nui.jpg',
        thumbnailImages: [
            'images/products/office/cay-kim-ngan-nui.jpg',
            'images/products/office/cay-kim-ngan-nui-2.jpg'
        ],
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: true,
        discountPercentage: 8,
        description: 'Cây Phát Tài núi 2 tầng trong chậu sứ cao cấp, mang lại may mắn và thành công trong kinh doanh.',
        details: {
            scientificName: 'Dracaena deremensis',
            otherNames: 'Cây phát tài núi',
            size: '• Kích thước chậu: 35x30cm<br/>• Chiều cao tổng: 150-160cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 1-2 lần/tuần',
            temperature: '20-30°C',
            humidity: '50-70%'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'HCM'
        }
    },

    // === CHẬU XI MĂNG ĐÁ MÀI (10 sản phẩm) ===
    'XMDM018': {
        code: 'XMDM018',
        name: 'Chậu đá mài Granito dáng trụ vót màu trắng XMDM018',
        price: '340.000đ - 420.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-da-mai.jpg',
        thumbnailImages: [
            'images/products/cement/chau-da-mai.jpg',
            'images/products/cement/chau-da-mai-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu đá mài Granito với thiết kế trụ vót hiện đại, màu trắng tinh tế phù hợp với mọi không gian.',
        details: {
            material: 'Xi măng đá mài Granito',
            color: 'Trắng',
            size: '• Kích thước: 25x40cm<br/>• Trọng lượng: 3.5kg<br/>• Đường kính miệng: 25cm<br/>• Chiều cao: 40cm',
            suitable: 'Cây cảnh văn phòng, cây để sàn, cây trang trí nội thất'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'XMDM017': {
        code: 'XMDM017',
        name: 'Chậu xi măng hình trụ vuông vằn sọc ngang màu đen XMDM017',
        price: '500.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-vuong.jpg',
        thumbnailImages: [
            'images/products/cement/chau-vuong.jpg',
            'images/products/cement/chau-vuong-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu xi măng hình trụ vuông với họa tiết vằn sọc ngang màu đen sang trọng, phù hợp với phong cách công nghiệp.',
        details: {
            material: 'Xi măng polymer',
            color: 'Đen vằn sọc',
            size: '• Kích thước: 30x30x40cm<br/>• Trọng lượng: 4.2kg<br/>• Kích thước đáy: 25x25cm',
            suitable: 'Cây để sàn, cây văn phòng, cây trang trí góc phòng'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'XMDM015': {
        code: 'XMDM015',
        name: 'Chậu đá mài Granito cao cấp dáng Remy màu trắng XMDM015',
        price: '360.000đ - 560.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-da.jpg',
        thumbnailImages: [
            'images/products/cement/chau-da.jpg',
            'images/products/cement/chau-da-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu đá mài Granito cao cấp dáng Remy màu trắng, thiết kế tinh tế, phù hợp với cây cảnh hiện đại.',
        details: {
            material: 'Xi măng đá mài Granito',
            color: 'Trắng',
            size: '• Kích thước: 20x35cm<br/>• Trọng lượng: 3kg<br/>• Đường kính miệng: 20cm<br/>• Chiều cao: 35cm',
            suitable: 'Cây để bàn cỡ lớn, cây trang trí nội thất'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'XMDM014': {
        code: 'XMDM014',
        name: 'Chậu xi măng nhẹ hình trụ vát đáy vằn quấn rối XMDM014',
        price: '220.000đ - 350.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-quan.jpg',
        thumbnailImages: [
            'images/products/cement/chau-quan.jpg',
            'images/products/cement/chau-quan-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu xi măng nhẹ hình trụ vát đáy với họa tiết vằn quấn rối độc đáo, trọng lượng nhẹ dễ di chuyển.',
        details: {
            material: 'Xi măng nhẹ',
            color: 'Xám vằn quấn rối',
            size: '• Kích thước: 18x30cm<br/>• Trọng lượng: 2.5kg<br/>• Đường kính miệng: 18cm<br/>• Chiều cao: 30cm',
            suitable: 'Cây để bàn, cây trang trí phòng khách'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'XMDM013': {
        code: 'XMDM013',
        name: 'Chậu xi măng đá mài trụ tròn vẽ zigzag XMDM013',
        price: '320.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-zig.jpg',
        thumbnailImages: [
            'images/products/cement/chau-zig.jpg',
            'images/products/cement/chau-zig-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu xi măng đá mài trụ tròn với họa tiết zigzag độc đáo, màu sắc hiện đại phù hợp với không gian trẻ trung.',
        details: {
            material: 'Xi măng đá mài',
            color: 'Xám zigzag',
            size: '• Kích thước: 25x35cm<br/>• Trọng lượng: 3.2kg<br/>• Đường kính miệng: 25cm<br/>• Chiều cao: 35cm',
            suitable: 'Cây để sàn nhỏ, cây văn phòng'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'XMDM012': {
        code: 'XMDM012',
        name: 'Chậu xi măng đá mài trụ tròn dáng thấp XMDM012',
        price: '80.000đ - 150.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-tron.jpg',
        thumbnailImages: [
            'images/products/cement/chau-tron.jpg',
            'images/products/cement/chau-tron-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu xi măng đá mài trụ tròn dáng thấp, nhiều kích thước lựa chọn, phù hợp với cây để bàn mini.',
        details: {
            material: 'Xi măng đá mài',
            color: 'Xám đen',
            size: '• Kích thước nhỏ: 12x15cm<br/>• Kích thước lớn: 20x25cm<br/>• Trọng lượng: 1-3kg',
            suitable: 'Cây để bàn mini, sen đá, xương rồng'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'XMDM011': {
        code: 'XMDM011',
        name: 'Chậu xi măng hình giọt nước sơn decor 32x52cm XMDM011',
        price: '440.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-son.jpg',
        thumbnailImages: [
            'images/products/cement/chau-son.jpg',
            'images/products/cement/chau-son-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu xi măng hình giọt nước với sơn decor độc đáo, thiết kế hình dáng giọt nước hiện đại.',
        details: {
            material: 'Xi măng sơn decor',
            color: 'Xám sơn trắng',
            size: '• Kích thước: 32x52cm<br/>• Trọng lượng: 5.5kg<br/>• Chiều dài đáy: 25cm<br/>• Chiều cao: 52cm',
            suitable: 'Cây để sàn lớn, cây trang trí sảnh'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'XMDM010': {
        code: 'XMDM010',
        name: 'Chậu xi măng hình giọt nước sơn decor 32x52cm XMDM010',
        price: '480.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-nuoc.jpg',
        thumbnailImages: [
            'images/products/cement/chau-nuoc.jpg',
            'images/products/cement/chau-nuoc-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu xi măng hình giọt nước với lớp sơn decor tinh tế, màu sắc trang nhã phù hợp với không gian hiện đại.',
        details: {
            material: 'Xi măng sơn decor',
            color: 'Xám sơn đen',
            size: '• Kích thước: 32x52cm<br/>• Trọng lượng: 5.5kg<br/>• Chiều dài đáy: 25cm<br/>• Chiều cao: 52cm',
            suitable: 'Cây để sàn, cây trang trí góc phòng'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'XMDM009': {
        code: 'XMDM009',
        name: 'Chậu xi măng hình giọt nước 32x52cm XMDM009',
        price: '340.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-giot.jpg',
        thumbnailImages: [
            'images/products/cement/chau-giot.jpg',
            'images/products/cement/chau-giot-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu xi măng hình giọt nước với thiết kế đơn giản nhưng tinh tế, màu xi măng tự nhiên phù hợp với nhiều phong cách.',
        details: {
            material: 'Xi măng nguyên bản',
            color: 'Xám xi măng',
            size: '• Kích thước: 32x52cm<br/>• Trọng lượng: 5kg<br/>• Chiều dài đáy: 25cm<br/>• Chiều cao: 52cm',
            suitable: 'Cây để sàn, cây văn phòng cỡ lớn'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'XMDM008': {
        code: 'XMDM008',
        name: 'Chậu xi măng hình trụ sơn họa tiết 40x40cm XMDM008',
        price: '520.000đ',
        originalPrice: '',
        image: 'images/products/cement/chau-tru.jpg',
        thumbnailImages: [
            'images/products/cement/chau-tru.jpg',
            'images/products/cement/chau-tru-2.jpg'
        ],
        category: 'Chậu xi măng',
        section: 'cement',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu xi măng hình trụ với sơn họa tiết độc đáo, kích thước lớn phù hợp với cây cảnh cỡ đại.',
        details: {
            material: 'Xi măng sơn họa tiết',
            color: 'Trắng họa tiết đen',
            size: '• Kích thước: 40x40cm<br/>• Trọng lượng: 6kg<br/>• Đường kính miệng: 40cm<br/>• Chiều cao: 40cm',
            suitable: 'Cây cảnh cỡ đại, cây trang trí sảnh lớn'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },

    // === CHẬU GỐM SỨ (10 sản phẩm) ===
    'GOSU059': {
        code: 'GOSU059',
        name: 'Chậu gốm sứ hình trụ hoa tiết Geometric GOSU059',
        price: '80.000đ - 180.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-gom-su.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-gom-su.jpg',
            'images/products/ceramic/chau-gom-su-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ hình trụ với hoa tiết Geometric hiện đại, màu sắc trang nhã phù hợp với mọi không gian.',
        details: {
            material: 'Gốm sứ tráng men',
            color: 'Trắng hoa tiết đen',
            size: '• Kích thước nhỏ: 12x15cm<br/>• Kích thước lớn: 20x25cm<br/>• Trọng lượng: 0.8-2kg',
            suitable: 'Cây để bàn, sen đá, xương rồng, cây mini'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'GOSU057': {
        code: 'GOSU057',
        name: 'Chậu gốm sứ họa tiết lá Monstera có dĩa GOSU057',
        price: '20.000đ - 60.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-gom-la.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-gom-la.jpg',
            'images/products/ceramic/chau-gom-la-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ với họa tiết lá Monstera độc đáo, kèm theo dĩa lót chống tràn nước tiện lợi.',
        details: {
            material: 'Gốm sứ có dĩa',
            color: 'Trắng họa tiết xanh',
            size: '• Kích thước nhỏ: 8x10cm<br/>• Kích thước lớn: 12x15cm<br/>• Trọng lượng: 0.3-0.8kg',
            suitable: 'Cây mini, sen đá nhỏ, xương rồng mini, tiểu cảnh'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'GOSU056': {
        code: 'GOSU056',
        name: 'Chậu gốm sứ họa tiết hoa màu trắng có dĩa GOSU056',
        price: '20.000đ - 60.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-hoa-trang.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-hoa-trang.jpg',
            'images/products/ceramic/chau-hoa-trang-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ với họa tiết hoa màu trắng tinh khôi, có dĩa lót đi kèm, phù hợp với không gian nhẹ nhàng.',
        details: {
            material: 'Gốm sứ có dĩa',
            color: 'Trắng họa tiết hoa',
            size: '• Kích thước nhỏ: 8x10cm<br/>• Kích thước lớn: 12x15cm<br/>• Trọng lượng: 0.3-0.8kg',
            suitable: 'Cây mini, sen đá, tiểu cảnh để bàn'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'GOSU055': {
        code: 'GOSU055',
        name: 'Chậu gốm sứ viền hoa cúc có dĩa màu trắng GOSU055',
        price: '20.000đ - 60.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-cuc-trang.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-cuc-trang.jpg',
            'images/products/ceramic/chau-cuc-trang-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ với viền hoa cúc tinh xảo, có dĩa lót đi kèm, màu trắng trang nhã phù hợp với nhiều phong cách.',
        details: {
            material: 'Gốm sứ có dĩa',
            color: 'Trắng viền hoa cúc',
            size: '• Kích thước nhỏ: 8x10cm<br/>• Kích thước lớn: 12x15cm<br/>• Trọng lượng: 0.3-0.8kg',
            suitable: 'Cây để bàn nhỏ, sen đá, xương rồng mini'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'GOSU054': {
        code: 'GOSU054',
        name: 'Chậu gốm sứ hình trụ trơn màu trắng GOSU054',
        price: '80.000đ - 180.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-tru-tron.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-tru-tron.jpg',
            'images/products/ceramic/chau-tru-tron-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ hình trụ trơn màu trắng tinh tế, thiết kế đơn giản nhưng sang trọng, phù hợp với mọi không gian.',
        details: {
            material: 'Gốm sứ tráng men',
            color: 'Trắng',
            size: '• Kích thước nhỏ: 12x15cm<br/>• Kích thước lớn: 20x25cm<br/>• Trọng lượng: 0.8-2kg',
            suitable: 'Cây để bàn, cây trang trí nội thất, sen đá cỡ lớn'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'GOSU053': {
        code: 'GOSU053',
        name: 'Chậu gốm sứ hình khối vân gợn sóng màu trắng GOSU053',
        price: '80.000đ - 150.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-van-tron.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-van-tron.jpg',
            'images/products/ceramic/chau-van-tron-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ hình khối với vân gợn sóng độc đáo, màu trắng tinh khôi, thiết kế hiện đại và tinh tế.',
        details: {
            material: 'Gốm sứ vân sóng',
            color: 'Trắng vân sóng',
            size: '• Kích thước nhỏ: 10x12cm<br/>• Kích thước lớn: 15x18cm<br/>• Trọng lượng: 0.5-1.5kg',
            suitable: 'Cây để bàn, tiểu cảnh, sen đá, xương rồng'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'GOSU052': {
        code: 'GOSU052',
        name: 'Chậu gốm sứ trụ trơn họa tiết kẻ sọc màu trắng GOSU052',
        price: '100.000đ - 230.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-ke-trang.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-ke-trang.jpg',
            'images/products/ceramic/chau-ke-trang-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ trụ trơn với họa tiết kẻ sọc tinh tế, màu trắng trang nhã phù hợp với phong cách Scandinavian.',
        details: {
            material: 'Gốm sứ tráng men',
            color: 'Trắng kẻ sọc đen',
            size: '• Kích thước nhỏ: 15x20cm<br/>• Kích thước lớn: 25x30cm<br/>• Trọng lượng: 1-3kg',
            suitable: 'Cây để bàn cỡ lớn, cây trang trí phòng khách'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'GOSU051': {
        code: 'GOSU051',
        name: 'Chậu gốm sứ họa tiết tam giác màu trắng GOSU051',
        price: '100.000đ - 230.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-tam.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-tam.jpg',
            'images/products/ceramic/chau-tam-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ với họa tiết tam giác geometric hiện đại, màu trắng tinh tế phù hợp với không gian trẻ trung.',
        details: {
            material: 'Gốm sứ tráng men',
            color: 'Trắng họa tiết tam giác',
            size: '• Kích thước nhỏ: 15x20cm<br/>• Kích thước lớn: 25x30cm<br/>• Trọng lượng: 1-3kg',
            suitable: 'Cây để bàn, cây trang trí văn phòng hiện đại'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'GOSU050': {
        code: 'GOSU050',
        name: 'Chậu gốm sứ họa tiết ô vuông màu trắng GOSU050',
        price: '100.000đ - 230.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-o.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-o.jpg',
            'images/products/ceramic/chau-o-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ với họa tiết ô vuông độc đáo, màu trắng sang trọng, thiết kế geometric hiện đại.',
        details: {
            material: 'Gốm sứ tráng men',
            color: 'Trắng họa tiết ô vuông',
            size: '• Kích thước nhỏ: 15x20cm<br/>• Kích thước lớn: 25x30cm<br/>• Trọng lượng: 1-3kg',
            suitable: 'Cây để bàn, cây trang trí nội thất hiện đại'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    },
    'GOSU049': {
        code: 'GOSU049',
        name: 'Chậu gốm sứ họa tiết đan mây màu đen GOSU049',
        price: '160.000đ - 250.000đ',
        originalPrice: '',
        image: 'images/products/ceramic/chau-may-den.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-may-den.jpg',
            'images/products/ceramic/chau-may-den-2.jpg'
        ],
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        hasDiscount: false,
        discountPercentage: 0,
        description: 'Chậu gốm sứ với họa tiết đan mây tinh xảo, màu đen sang trọng, phù hợp với phong cách industrial và hiện đại.',
        details: {
            material: 'Gốm sứ tráng men',
            color: 'Đen họa tiết đan mây',
            size: '• Kích thước nhỏ: 18x22cm<br/>• Kích thước lớn: 25x30cm<br/>• Trọng lượng: 1.5-4kg',
            suitable: 'Cây để bàn lớn, cây trang trí phòng khách sang trọng'
        },
        shippingInfo: {
            freeShipping: true,
            shippingTime: '3-7 ngày',
            location: 'Toàn quốc'
        }
    }
};

// HÀM TIỆN ÍCH ĐỂ LẤY SẢN PHẨM THEO MÃ (CẢI TIẾN)
function getProductByCode(code, section = null) {
    // 1. Ưu tiên tìm theo key chính xác
    if (productsDatabase[code]) {
        const product = productsDatabase[code];
        // Nếu có section và product có cùng section, trả về luôn
        if (!section || product.section === section) {
            return product;
        }
    }

    // 2. Tìm biến thể theo section nếu được chỉ định
    if (section) {
        // Tạo key biến thể: CODE_SECTION_PREFIX
        const sectionPrefix = getSectionPrefix(section);
        const variantKey = `${code}_${sectionPrefix}`;

        if (productsDatabase[variantKey]) {
            return productsDatabase[variantKey];
        }

        // Nếu không tìm thấy key biến thể, tìm trong tất cả sản phẩm cùng section
        for (const [key, product] of Object.entries(productsDatabase)) {
            if (product.code === code && product.section === section) {
                return product;
            }
        }
    }

    // 3. Tìm sản phẩm đầu tiên có mã trùng (cho tương thích ngược)
    for (const [key, product] of Object.entries(productsDatabase)) {
        if (product.code === code) {
            return product;
        }
    }

    return null;
}

// HÀM PHỤ TRỢ: Lấy prefix của section
function getSectionPrefix(section) {
    const prefixMap = {
        'new': 'NEW',
        'desktop': 'D',
        'office': 'O',
        'cement': 'C',
        'ceramic': 'G'
    };
    return prefixMap[section] || section.toUpperCase().charAt(0);
}

// HÀM LẤY DANH SÁCH SẢN PHẨM THEO SECTION (CẢI TIẾN)
function getProductsBySection(section, limit = 10, excludeCode = null) {
    const products = [];
    const addedCodes = new Set();

    // Duyệt qua tất cả sản phẩm
    for (const [key, product] of Object.entries(productsDatabase)) {
        if (product.section === section && !addedCodes.has(product.code)) {
            // Loại trừ sản phẩm hiện tại nếu có
            if (excludeCode && product.code === excludeCode) {
                continue;
            }

            products.push(product);
            addedCodes.add(product.code);

            if (products.length >= limit) {
                break;
            }
        }
    }

    return products;
}

// HÀM LẤY SẢN PHẨM LIÊN QUAN (CẢI TIẾN)
function getRelatedProducts(productCode, currentSection = null, limit = 5) {
    const currentProduct = getProductByCode(productCode, currentSection);
    if (!currentProduct) return [];

    const relatedProducts = [];
    const addedCodes = new Set([productCode]);

    // 1. Tìm sản phẩm cùng danh mục và cùng section trước
    for (const [key, product] of Object.entries(productsDatabase)) {
        if (product.category === currentProduct.category &&
            product.section === currentProduct.section &&
            !addedCodes.has(product.code)) {
            relatedProducts.push(product);
            addedCodes.add(product.code);

            if (relatedProducts.length >= limit) {
                return relatedProducts;
            }
        }
    }

    // 2. Tìm sản phẩm cùng danh mục (khác section)
    if (relatedProducts.length < limit) {
        for (const [key, product] of Object.entries(productsDatabase)) {
            if (product.category === currentProduct.category &&
                !addedCodes.has(product.code)) {
                relatedProducts.push(product);
                addedCodes.add(product.code);

                if (relatedProducts.length >= limit) {
                    return relatedProducts;
                }
            }
        }
    }

    // 3. Tìm sản phẩm cùng section (khác danh mục)
    if (relatedProducts.length < limit) {
        for (const [key, product] of Object.entries(productsDatabase)) {
            if (product.section === currentProduct.section &&
                !addedCodes.has(product.code)) {
                relatedProducts.push(product);
                addedCodes.add(product.code);

                if (relatedProducts.length >= limit) {
                    return relatedProducts;
                }
            }
        }
    }

    return relatedProducts;
}

// HÀM LẤY SẢN PHẨM KHUYẾN MÃI (CẢI TIẾN)
function getDiscountedProducts(limit = 5, section = null) {
    const discountedProducts = [];

    for (const [key, product] of Object.entries(productsDatabase)) {
        if (product.hasDiscount) {
            // Nếu chỉ định section, chỉ lấy sản phẩm trong section đó
            if (section && product.section !== section) {
                continue;
            }

            discountedProducts.push(product);

            if (discountedProducts.length >= limit) {
                break;
            }
        }
    }

    return discountedProducts;
}

// HÀM TÌM SẢN PHẨM THEO DANH MỤC (CẢI TIẾN)
function getProductsByCategory(category, limit = 10, section = null) {
    const products = [];
    const addedCodes = new Set();

    for (const [key, product] of Object.entries(productsDatabase)) {
        if (product.category === category && !addedCodes.has(product.code)) {
            // Nếu chỉ định section, chỉ lấy sản phẩm trong section đó
            if (section && product.section !== section) {
                continue;
            }

            products.push(product);
            addedCodes.add(product.code);

            if (products.length >= limit) {
                break;
            }
        }
    }

    return products;
}

// HÀM MỚI: Lấy tất cả biến thể của một sản phẩm
function getAllProductVariants(productCode) {
    const variants = [];

    for (const [key, product] of Object.entries(productsDatabase)) {
        if (product.code === productCode) {
            variants.push(product);
        }
    }

    return variants;
}

// HÀM MỚI: Lấy sản phẩm theo mã và section cụ thể
function getProductByCodeAndSection(code, section) {
    return getProductByCode(code, section);
}

// HÀM MỚI: Tạo URL cho sản phẩm với section
function createProductURL(productCode, section = null) {
    if (section) {
        return `product-detail.html?id=${productCode}&section=${section}`;
    }
    return `product-detail.html?id=${productCode}`;
}

// HÀM MỚI: Lấy thông tin section từ URL
function getSectionFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('section') || null;
}

// HÀM MỚI: Lấy tất cả sản phẩm (cho tìm kiếm/pagination)
function getAllProducts(filter = {}) {
    let filteredProducts = Object.values(productsDatabase);

    // Áp dụng filters
    if (filter.section) {
        filteredProducts = filteredProducts.filter(p => p.section === filter.section);
    }
    if (filter.category) {
        filteredProducts = filteredProducts.filter(p => p.category === filter.category);
    }
    if (filter.hasDiscount) {
        filteredProducts = filteredProducts.filter(p => p.hasDiscount === true);
    }
    if (filter.minPrice) {
        filteredProducts = filteredProducts.filter(p => {
            const price = parsePrice(p.price);
            return price >= filter.minPrice;
        });
    }
    if (filter.maxPrice) {
        filteredProducts = filteredProducts.filter(p => {
            const price = parsePrice(p.price);
            return price <= filter.maxPrice;
        });
    }

    return filteredProducts;
}

// HÀM PHỤ TRỢ: Chuyển đổi giá từ string sang number
function parsePrice(priceString) {
    if (!priceString) return 0;

    // Xử lý trường hợp "340.000đ - 420.000đ"
    if (priceString.includes(' - ')) {
        const prices = priceString.split(' - ');
        const minPrice = parseInt(prices[0].replace(/[^\d]/g, ''));
        return minPrice;
    }

    // Xử lý trường hợp "500.000đ"
    return parseInt(priceString.replace(/[^\d]/g, ''));
}

// HÀM MỚI: Lấy section name từ section code
function getSectionName(sectionCode) {
    const sectionNames = {
        'new': 'SẢN PHẨM MỚI',
        'desktop': 'CÂY CẢNH ĐỂ BÀN',
        'office': 'CÂY CẢNH VĂN PHÒNG',
        'cement': 'CHẬU XI MĂNG ĐÁ MÀI',
        'ceramic': 'CHẬU GỐM SỨ'
    };
    return sectionNames[sectionCode] || sectionCode;
}

// HÀM MỚI: Lấy category name từ category code
function getCategoryName(categoryCode) {
    const categoryNames = {
        'Cây để bàn': 'Cây để bàn',
        'Cây văn phòng': 'Cây văn phòng',
        'Chậu xi măng': 'Chậu xi măng',
        'Chậu gốm sứ': 'Chậu gốm sứ'
    };
    return categoryNames[categoryCode] || categoryCode;
}

// Export các hàm và dữ liệu nếu sử dụng ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        productsDatabase,
        getProductByCode,
        getProductsBySection,
        getRelatedProducts,
        getDiscountedProducts,
        getProductsByCategory,
        getAllProductVariants,
        getProductByCodeAndSection,
        createProductURL,
        getSectionFromURL,
        getAllProducts,
        parsePrice,
        getSectionName,
        getCategoryName
    };
}