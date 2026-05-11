// DỮ LIỆU ĐẦY ĐỦ TẤT CẢ SẢN PHẨM TỪ TRANG CHỦ
const products = {
    // === SẢN PHẨM MỚI ===
    'TUBO005': {
        name: 'Cây tùng bồng lai tiểu cảnh chậu sứ thổ cẩm',
        price: '500.000đ',
        image: 'images/products/new/cay-tung-bong-lai-tubo005.jpg',
        thumbnailImages: [
            'images/products/new/cay-tung-bong-lai-tubo005.jpg',
            'images/products/new/cay-tung-bong-lai-tubo005.jpg'
        ],
        code: 'TUBO005',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'CPTK001': {
        name: 'Cây phát tài bộ 5 – Cây thiết mộc lan',
        price: '750.000đ',
        image: 'images/products/new/cay-phat-tai-bo-5.jpg',
        thumbnailImages: [
            'images/products/new/cay-phat-tai-bo-5.jpg',
            'images/products/new/cay-phat-tai-bo-5.jpg',
            'images/products/new/cay-phat-tai-bo-5.jpg'
        ],
        code: 'CPTK001',
        category: 'Cây văn phòng',
        section: 'new',
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
        }
    },
    'LONI040': {
        name: 'Cây kim ngân toa thỏn để bàn chậu sứ gấu BearBrick',
        price: '280.000đ',
        image: 'images/products/new/cay-kim-ngan.jpg',
        thumbnailImages: [
            'images/products/new/cay-kim-ngan.jpg',
            'images/products/new/cay-kim-ngan.jpg',
            'images/products/new/cay-kim-ngan.jpg'
        ],
        code: 'LONI040',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'PHIG006': {
        name: 'Cây trầu bà đế vương xanh chậu mặt cool \'Imperial Green\'',
        price: '120.000đ',
        image: 'images/products/new/cay-trau-ba-de-vuong.jpg',
        thumbnailImages: [
            'images/products/new/cay-trau-ba-de-vuong.jpg',
            'images/products/new/cay-trau-ba-de-vuong.jpg'
        ],
        code: 'PHIG006',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'SANS002': {
        name: 'Cây Lưỡi Hổ Vàng Miền Châu',
        price: '120.000đ',
        image: 'images/products/new/cay-luoi-ho-vang.jpg',
        thumbnailImages: [
            'images/products/new/cay-luoi-ho-vang.jpg',
            'images/products/new/cay-luoi-ho-vang.jpg'
        ],
        code: 'SANS002',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'ANTH010': {
        name: 'Cây hồng môn cỡ nhỏ chậu sứ trắng ANTH010',
        price: '240.000đ',
        image: 'images/products/new/cay-hong-mon.jpg',
        thumbnailImages: [
            'images/products/new/cay-hong-mon.jpg',
            'images/products/new/cay-hong-mon.jpg'
        ],
        code: 'ANTH010',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'SCHE020': {
        name: 'Cây ngũ gia bì cẩm thạch nhỏ chậu ươm SCHE020',
        price: '100.000đ',
        image: 'images/products/new/cay-ngu-gia-bi.jpg',
        thumbnailImages: [
            'images/products/new/cay-ngu-gia-bi.jpg',
            'images/products/new/cay-ngu-gia-bi-2.jpg'
        ],
        code: 'SCHE020',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'LONI039': {
        name: 'Cây kim ngân một thân để bàn chậu sứ LONI039',
        price: '450.000đ',
        originalPrice: '480.000đ',
        image: 'images/products/new/cay-kim-ngan-mot-than.jpg',
        thumbnailImages: [
            'images/products/new/cay-kim-ngan-mot-than.jpg',
            'images/products/new/cay-kim-ngan-mot-than-2.jpg'
        ],
        code: 'LONI039',
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
        }
    },
    'LIVI005': {
        name: 'Cây cọ lùn xòe mini để bàn chậu sứ hoa văn LIVI005',
        price: '160.000đ',
        image: 'images/products/new/cay-co-lun-xoe.jpg',
        thumbnailImages: [
            'images/products/new/cay-co-lun-xoe.jpg',
            'images/products/new/cay-co-lun-xoe-2.jpg'
        ],
        code: 'LIVI005',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'RADE032': {
        name: 'Cây hạnh phúc để sàn 2 tầng chậu sứ hoa văn RADE032',
        price: '900.000đ',
        image: 'images/products/new/cay-hanh-phuc.jpg',
        thumbnailImages: [
            'images/products/new/cay-hanh-phuc.jpg',
            'images/products/new/cay-hanh-phuc-2.jpg'
        ],
        code: 'RADE032',
        category: 'Cây văn phòng',
        section: 'new',
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
        }
    },
    'RADE031': {
        name: 'Cây hạnh phúc để sàn chậu sứ RADE031',
        price: '550.000đ',
        originalPrice: '600.000đ',
        image: 'images/products/new/cay-hanh-phuc-de-san.jpg',
        thumbnailImages: [
            'images/products/new/cay-hanh-phuc-de-san.jpg',
            'images/products/new/cay-hanh-phuc-de-san-2.jpg'
        ],
        code: 'RADE031',
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
        }
    },
    'LONI038': {
        name: 'Cây kim ngân để bàn thân bính tiểu cảnh chậu sứ LONI038',
        price: '380.000đ',
        image: 'images/products/new/cay-kim-ngan-de-ban.jpg',
        thumbnailImages: [
            'images/products/new/cay-kim-ngan-de-ban.jpg',
            'images/products/new/cay-kim-ngan-de-ban-2.jpg'
        ],
        code: 'LONI038',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'SHBG005': {
        name: 'Cây lưỡi hổ xanh để bàn mini \'Block Gold\' chậu sứ SHBG005',
        price: '120.000đ',
        image: 'images/products/new/cay-luoi-ho.jpg',
        thumbnailImages: [
            'images/products/new/cay-luoi-ho.jpg',
            'images/products/new/cay-luoi-ho-2.jpg'
        ],
        code: 'SHBG005',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'PEAC005': {
        name: 'Cây Lan ý chậu cỡ lớn để bàn chậu sứ trắng PEAC005',
        price: '240.000đ',
        image: 'images/products/new/cay-lan-y.jpg',
        thumbnailImages: [
            'images/products/new/cay-lan-y.jpg',
            'images/products/new/cay-lan-y-2.jpg'
        ],
        code: 'PEAC005',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'AGLA104': {
        name: 'Cây phú quý chậu sứ thổ cẩm để bàn AGLA104',
        price: '320.000đ',
        image: 'images/products/new/cay-phu-quy.jpg',
        thumbnailImages: [
            'images/products/new/cay-phu-quy.jpg',
            'images/products/new/cay-phu-quy-2.jpg'
        ],
        code: 'AGLA104',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'SPI004': {
        name: 'Cây cỏ lan chi để bàn chậu sứ mặt cười',
        price: '120.000đ',
        image: 'images/products/new/cay-co-lan-chi.jpg',
        thumbnailImages: [
            'images/products/new/cay-co-lan-chi.jpg',
            'images/products/new/cay-co-lan-chi-2.jpg'
        ],
        code: 'SPI004',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'PHIR008': {
        name: 'Cây trầu bà đế vương đỏ để bàn \'Red Rojo\' chậu sứ',
        price: '320.000đ',
        originalPrice: '350.000đ',
        image: 'images/products/new/cay-trau-ba-do.jpg',
        thumbnailImages: [
            'images/products/new/cay-trau-ba-do.jpg',
            'images/products/new/cay-trau-ba-do-2.jpg'
        ],
        code: 'PHIR008',
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
        }
    },
    'STBS001': {
        name: 'Cây lưỡi hổ Bental Sensation chậu ươm',
        price: '160.000đ',
        image: 'images/products/new/cay-luoi-ho-ben.jpg',
        thumbnailImages: [
            'images/products/new/cay-luoi-ho-ben.jpg',
            'images/products/new/cay-luoi-ho-ben-2.jpg'
        ],
        code: 'STBS001',
        category: 'Cây để bàn',
        section: 'new',
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
        }
    },
    'RADE033': {
        name: 'Cây hạnh phúc để sàn 2 tầng lớn chậu đá mài',
        price: '1.200.000đ',
        image: 'images/products/new/cay-hanh-phuc-de-2.jpg',
        thumbnailImages: [
            'images/products/new/cay-hanh-phuc-de-2.jpg',
            'images/products/new/cay-hanh-phuc-de-2-2.jpg'
        ],
        code: 'RADE033',
        category: 'Cây văn phòng',
        section: 'new',
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
        }
    },
    'CTBC007': {
        name: 'Cây trầu bà cột chậu xi măng trụ vuông',
        price: '1.100.000đ',
        image: 'images/products/new/cay-trau-ba.jpg',
        thumbnailImages: [
            'images/products/new/cay-trau-ba.jpg',
            'images/products/new/cay-trau-ba-2.jpg'
        ],
        code: 'CTBC007',
        category: 'Cây văn phòng',
        section: 'new',
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
        }
    },

    // === CÂY CẢNH VĂN PHÒNG ===
    'BUBV007': {
        name: 'Cây bàng Đài Loan cẩm thạch chậu sứ BUBV007',
        price: '1.200.000đ',
        image: 'images/products/office/cay-bang-dl.jpg',
        thumbnailImages: [
            'images/products/office/cay-bang-dl.jpg',
            'images/products/office/cay-bang-dl-2.jpg'
        ],
        code: 'BUBV007',
        category: 'Cây văn phòng',
        section: 'office',
        description: 'Cây Bàng Đài Loan cẩm thạch với lá có vân trắng độc đáo, thân thẳng đứng tạo dáng sang trọng. Cây thích hợp đặt ở văn phòng, sảnh lớn, mang lại không gian làm việc chuyên nghiệp.',
        details: {
            scientificName: 'Ficus microcarpa',
            otherNames: 'Cây bàng Đài Loan',
            size: '• Kích thước chậu: 35x30cm<br/>• Chiều cao tổng: 140 - 150cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '50-70%'
        }
    },
    'CPTN013': {
        name: 'Cây phát tài núi 2 tầng chậu đá mài CPTN013',
        price: '1.750.000đ',
        originalPrice: '1.900.000đ',
        image: 'images/products/office/cay-phat-tai.jpg',
        thumbnailImages: [
            'images/products/office/cay-phat-tai.jpg',
            'images/products/office/cay-phat-tai-2.jpg'
        ],
        code: 'CPTN013',
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: true,
        discountPercentage: 8,
        description: 'Cây Phát Tài Núi 2 tầng với nhiều thân đan xen, tạo tầng lớp độc đáo, tượng trưng cho sự thăng tiến liên tục. Cây thích hợp đặt ở văn phòng giám đốc, phòng họp quan trọng.',
        details: {
            scientificName: 'Dracaena draco',
            otherNames: 'Cây phát tài núi',
            size: '• Kích thước chậu: 40x35cm<br/>• Chiều cao tổng: 160 - 170cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '50-70%'
        }
    },
    'RADE024': {
        name: 'Cây hạnh phúc một thân cao 1m6 chậu đất nung RADE024',
        price: '900.000đ',
        image: 'images/products/office/cay-hp-cao.jpg',
        thumbnailImages: [
            'images/products/office/cay-hp-cao.jpg',
            'images/products/office/cay-hp-cao-2.jpg'
        ],
        code: 'RADE024',
        category: 'Cây văn phòng',
        section: 'office',
        description: 'Cây Hạnh Phúc một thân cao với tán lá xum xuê, được trồng trong chậu đất nung mộc mạc. Cây thích hợp đặt ở góc phòng, hành lang văn phòng, mang lại cảm giác thư giãn và bình yên.',
        details: {
            scientificName: 'Radermachera sinica',
            otherNames: 'Cây hạnh phúc',
            size: '• Kích thước chậu: 35x30cm<br/>• Chiều cao tổng: 160 - 170cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        }
    },
    'SCHE017': {
        name: 'Cây ngũ gia bì để sàn chậu trụ tròn đỏ mận SCHE017',
        price: '750.000đ',
        image: 'images/products/office/cay-ngu-gia-do.jpg',
        thumbnailImages: [
            'images/products/office/cay-ngu-gia-do.jpg',
            'images/products/office/cay-ngu-gia-do-2.jpg'
        ],
        code: 'SCHE017',
        category: 'Cây văn phòng',
        section: 'office',
        description: 'Cây Ngũ Gia Bì để sàn với tán lá xanh mướt, được trồng trong chậu trụ tròn màu đỏ mận sang trọng. Cây có khả năng đuổi muỗi tự nhiên, thích hợp đặt ở văn phòng, phòng họp.',
        details: {
            scientificName: 'Schefflera arboricola',
            otherNames: 'Cây chân chim',
            size: '• Kích thước chậu: 30x25cm<br/>• Chiều cao tổng: 100 - 110cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        }
    },
    'CHRY009': {
        name: 'Cây cau vàng Nhật Bản cỡ trung chậu đá mài CHRY009',
        price: '740.000đ',
        image: 'images/products/office/cay-cau.jpg',
        thumbnailImages: [
            'images/products/office/cay-cau.jpg',
            'images/products/office/cay-cau-2.jpg'
        ],
        code: 'CHRY009',
        category: 'Cây văn phòng',
        section: 'office',
        description: 'Cây Cau Vàng Nhật Bản với lá xẻ dài màu vàng xanh tươi sáng, thân thẳng đứng tạo dáng thanh thoát. Cây thích hợp đặt ở văn phòng, sảnh tiếp tân, mang lại không gian nhiệt đới.',
        details: {
            scientificName: 'Chrysalidocarpus lutescens',
            otherNames: 'Cây cau vàng',
            size: '• Kích thước chậu: 30x25cm<br/>• Chiều cao tổng: 120 - 130cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2-3 lần/tuần',
            temperature: '20-30°C',
            humidity: '60-80%'
        }
    },
    'RADE009': {
        name: 'Cây hạnh phúc 2 tầng chậu sứ trắng RADE009',
        price: '990.000đ',
        image: 'images/products/office/cay-hanh-phuc-su.jpg',
        thumbnailImages: [
            'images/products/office/cay-hanh-phuc-su.jpg',
            'images/products/office/cay-hanh-phuc-su-2.jpg'
        ],
        code: 'RADE009',
        category: 'Cây văn phòng',
        section: 'office',
        description: 'Cây Hạnh Phúc 2 tầng với tán lá xum xuê tạo thành 2 tầng rõ rệt, được trồng trong chậu sứ trắng tinh khôi. Cây thích hợp đặt ở văn phòng, mang lại không gian xanh mát và thư giãn.',
        details: {
            scientificName: 'Radermachera sinica',
            otherNames: 'Cây hạnh phúc',
            size: '• Kích thước chậu: 35x30cm<br/>• Chiều cao tổng: 140 - 150cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-28°C',
            humidity: '50-70%'
        }
    },
    'LYRA023': {
        name: 'Cây bàng Singapore cao 2m dáng tree chậu sứ LYRA023',
        price: '2.200.000đ',
        image: 'images/products/office/cay-bang-2m.jpg',
        thumbnailImages: [
            'images/products/office/cay-bang-2m.jpg',
            'images/products/office/cay-bang-2m-2.jpg'
        ],
        code: 'LYRA023',
        category: 'Cây văn phòng',
        section: 'office',
        description: 'Cây Bàng Singapore cao 2m với dáng tree uốn lượn nghệ thuật, được trồng trong chậu sứ sang trọng. Cây thích hợp đặt ở sảnh lớn, văn phòng cao cấp, mang lại vẻ đẹp đẳng cấp.',
        details: {
            scientificName: 'Ficus lyrata',
            otherNames: 'Cây bàng Singapore',
            size: '• Kích thước chậu: 45x40cm<br/>• Chiều cao tổng: 200 - 210cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '50-70%'
        }
    },
    'LONI017': {
        name: 'Cây kim ngân thắt bính kích thước lớn LONI017',
        price: '1.200.000đ',
        image: 'images/products/office/cay-kim-ngan-binh.jpg',
        thumbnailImages: [
            'images/products/office/cay-kim-ngan-binh.jpg',
            'images/products/office/cay-kim-ngan-binh-2.jpg'
        ],
        code: 'LONI017',
        category: 'Cây văn phòng',
        section: 'office',
        description: 'Cây Kim Ngân thắt bính kích thước lớn với nhiều thân đan xen tạo thành bím tóc công phu, tượng trưng cho sự kết hợp tài lộc. Cây thích hợp đặt ở sảnh ngân hàng, công ty tài chính.',
        details: {
            scientificName: 'Pachira aquatica',
            otherNames: 'Cây thắt bím',
            size: '• Kích thước chậu: 40x35cm<br/>• Chiều cao tổng: 160 - 170cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng tán xạ',
            water: 'Tưới nước 1-2 lần/tuần',
            temperature: '18-27°C',
            humidity: '40-60%'
        }
    },
    'CPTN012': {
        name: 'Cây phát tài núi 2 tầng chậu sứ CPTN012',
        price: '1.750.000đ',
        originalPrice: '1.900.000đ',
        image: 'images/products/office/cay-kim-ngan-nui.jpg',
        thumbnailImages: [
            'images/products/office/cay-kim-ngan-nui.jpg',
            'images/products/office/cay-kim-ngan-nui-2.jpg'
        ],
        code: 'CPTN012',
        category: 'Cây văn phòng',
        section: 'office',
        hasDiscount: true,
        discountPercentage: 8,
        description: 'Cây Phát Tài Núi 2 tầng với dáng cây phân tầng rõ rệt, được trồng trong chậu sứ cao cấp. Cây có ý nghĩa phong thủy mang lại thăng tiến và thành công trong sự nghiệp.',
        details: {
            scientificName: 'Dracaena draco',
            otherNames: 'Cây phát tài núi',
            size: '• Kích thước chậu: 40x35cm<br/>• Chiều cao tổng: 160 - 170cm',
            difficulty: 'Trung bình',
            light: 'Ánh sáng gián tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '20-30°C',
            humidity: '50-70%'
        }
    },

    // === CHẬU XI MĂNG ĐÁ MÀI ===
    'XMDM018': {
        name: 'Chậu đá mài Granito dáng trụ vót màu trắng XMDM018',
        price: '340.000đ - 420.000đ',
        image: 'images/products/cement/chau-da-mai.jpg',
        thumbnailImages: [
            'images/products/cement/chau-da-mai.jpg',
            'images/products/cement/chau-da-mai-2.jpg'
        ],
        code: 'XMDM018',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu đá mài Granito với thiết kế trụ vót hiện đại, màu trắng tinh tế phù hợp với mọi không gian. Chậu được làm từ xi măng đá mài cao cấp, bền đẹp theo thời gian.',
        details: {
            material: 'Xi măng đá mài Granito',
            color: 'Trắng',
            size: '• Kích thước: 25x40cm<br/>• Trọng lượng: 3.5kg<br/>• Đường kính miệng: 25cm<br/>• Chiều cao: 40cm',
            suitable: 'Cây cảnh văn phòng, cây để sàn, cây trang trí nội thất'
        }
    },
    'XMDM017': {
        name: 'Chậu xi măng hình trụ vuông vằn sọc ngang màu đen XMDM017',
        price: '500.000đ',
        image: 'images/products/cement/chau-vuong.jpg',
        thumbnailImages: [
            'images/products/cement/chau-vuong.jpg',
            'images/products/cement/chau-vuong-2.jpg'
        ],
        code: 'XMDM017',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu xi măng hình trụ vuông với họa tiết vằn sọc ngang màu đen sang trọng, phù hợp với phong cách công nghiệp và hiện đại. Chậu có độ bền cao, chống thấm tốt.',
        details: {
            material: 'Xi măng polymer',
            color: 'Đen vằn sọc',
            size: '• Kích thước: 30x30x40cm<br/>• Trọng lượng: 4.2kg<br/>• Kích thước đáy: 25x25cm',
            suitable: 'Cây để sàn, cây văn phòng, cây trang trí góc phòng'
        }
    },
    'XMDM015': {
        name: 'Chậu đá mài Granito cao cấp dáng Remy màu trắng XMDM015',
        price: '360.000đ - 560.000đ',
        image: 'images/products/cement/chau-da.jpg',
        thumbnailImages: [
            'images/products/cement/chau-da.jpg',
            'images/products/cement/chau-da-2.jpg'
        ],
        code: 'XMDM015',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu đá mài Granito cao cấp dáng Remy với đường cong mềm mại, màu trắng tinh khiết. Chậu được gia công tỉ mỉ, bề mặt mịn màng, thích hợp trồng các loại cây cảnh cao cấp.',
        details: {
            material: 'Xi măng đá mài cao cấp',
            color: 'Trắng nguyên bản',
            size: '• Kích thước nhỏ: 20x30cm<br/>• Kích thước lớn: 30x45cm<br/>• Trọng lượng: 3-5kg',
            suitable: 'Cây cảnh cao cấp, cây bonsai, tiểu cảnh'
        }
    },
    'XMDM014': {
        name: 'Chậu xi măng nhẹ hình trụ vát đáy vằn quấn rối XMDM014',
        price: '220.000đ - 350.000đ',
        image: 'images/products/cement/chau-quan.jpg',
        thumbnailImages: [
            'images/products/cement/chau-quan.jpg',
            'images/products/cement/chau-quan-2.jpg'
        ],
        code: 'XMDM014',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu xi măng nhẹ với thiết kế hình trụ vát đáy độc đáo, họa tiết vằn quấn rối nghệ thuật. Chậu sử dụng công nghệ xi măng nhẹ, dễ dàng di chuyển và trang trí.',
        details: {
            material: 'Xi măng nhẹ polymer',
            color: 'Xám vằn rối',
            size: '• Kích thước nhỏ: 18x25cm<br/>• Kích thước lớn: 25x35cm<br/>• Trọng lượng: 2-3.5kg',
            suitable: 'Cây để bàn, cây văn phòng nhỏ, sen đá, xương rồng'
        }
    },
    'XMDM013': {
        name: 'Chậu xi măng đá mài trụ tròn vẽ zigzag XMDM013',
        price: '320.000đ',
        image: 'images/products/cement/chau-zig.jpg',
        thumbnailImages: [
            'images/products/cement/chau-zig.jpg',
            'images/products/cement/chau-zig-2.jpg'
        ],
        code: 'XMDM013',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu xi măng đá mài trụ tròn với họa tiết zigzag hiện đại, phù hợp với không gian sống trẻ trung và năng động. Chậu có khả năng thoát nước tốt, giúp cây phát triển khỏe mạnh.',
        details: {
            material: 'Xi măng đá mài',
            color: 'Xám zigzag',
            size: '• Kích thước: 25x35cm<br/>• Trọng lượng: 3.8kg<br/>• Đường kính miệng: 25cm',
            suitable: 'Cây cảnh văn phòng, cây trang trí nội thất hiện đại'
        }
    },
    'XMDM012': {
        name: 'Chậu xi măng đá mài trụ tròn dáng thấp XMDM012',
        price: '80.000đ - 150.000đ',
        image: 'images/products/cement/chau-tron.jpg',
        thumbnailImages: [
            'images/products/cement/chau-tron.jpg',
            'images/products/cement/chau-tron-2.jpg'
        ],
        code: 'XMDM012',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu xi măng đá mài trụ tròn dáng thấp, thiết kế đơn giản nhưng tinh tế, phù hợp với nhiều phong cách trang trí. Chậu có nhiều kích thước để lựa chọn.',
        details: {
            material: 'Xi măng đá mài',
            color: 'Xám tự nhiên',
            size: '• Kích thước nhỏ: 15x10cm<br/>• Kích thước lớn: 25x15cm<br/>• Trọng lượng: 1-2.5kg',
            suitable: 'Cây để bàn nhỏ, sen đá, xương rồng, tiểu cảnh'
        }
    },
    'XMDM011': {
        name: 'Chậu xi măng hình giọt nước sơn decor 32x52cm XMDM011',
        price: '440.000đ',
        image: 'images/products/cement/chau-son.jpg',
        thumbnailImages: [
            'images/products/cement/chau-son.jpg',
            'images/products/cement/chau-son-2.jpg'
        ],
        code: 'XMDM011',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu xi măng hình giọt nước với thiết kế độc đáo, được sơn decor tinh xảo. Chậu có hình dáng như giọt nước đang rơi, mang lại vẻ đẹp nghệ thuật cho không gian.',
        details: {
            material: 'Xi măng sơn decor',
            color: 'Xám sơn trắng',
            size: '• Kích thước: 32x52cm<br/>• Trọng lượng: 5.5kg<br/>• Đường kính miệng: 32cm',
            suitable: 'Cây cảnh lớn, cây trang trí sảnh, cây cảnh nghệ thuật'
        }
    },
    'XMDM010': {
        name: 'Chậu xi măng hình giọt nước sơn decor 32x52cm XMDM010',
        price: '480.000đ',
        image: 'images/products/cement/chau-nuoc.jpg',
        thumbnailImages: [
            'images/products/cement/chau-nuoc.jpg',
            'images/products/cement/chau-nuoc-2.jpg'
        ],
        code: 'XMDM010',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu xi măng hình giọt nước với lớp sơn decor cao cấp, màu sắc trang nhã. Chậu có thiết kế hiện đại, thích hợp trồng các loại cây cảnh có dáng đẹp, tạo điểm nhấn cho không gian.',
        details: {
            material: 'Xi măng sơn decor cao cấp',
            color: 'Xám sơn bóng',
            size: '• Kích thước: 32x52cm<br/>• Trọng lượng: 5.8kg<br/>• Đường kính đáy: 20cm',
            suitable: 'Cây cảnh cao cấp, cây bonsai, cây trang trí nghệ thuật'
        }
    },
    'XMDM009': {
        name: 'Chậu xi măng hình giọt nước 32x52cm XMDM009',
        price: '340.000đ',
        image: 'images/products/cement/chau-giot.jpg',
        thumbnailImages: [
            'images/products/cement/chau-giot.jpg',
            'images/products/cement/chau-giot-2.jpg'
        ],
        code: 'XMDM009',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu xi măng hình giọt nước với màu xi măng tự nhiên, mang vẻ đẹp mộc mạc và chân thật. Chậu không qua sơn phủ, giữ nguyên vẻ đẹp nguyên bản của chất liệu xi măng.',
        details: {
            material: 'Xi măng nguyên bản',
            color: 'Xám xi măng tự nhiên',
            size: '• Kích thước: 32x52cm<br/>• Trọng lượng: 5.2kg<br/>• Chiều cao: 52cm',
            suitable: 'Cây cảnh phong cách công nghiệp, cây trang trí nội thất raw'
        }
    },
    'XMDM008': {
        name: 'Chậu xi măng hình trụ sơn họa tiết 40x40cm XMDM008',
        price: '520.000đ',
        image: 'images/products/cement/chau-tru.jpg',
        thumbnailImages: [
            'images/products/cement/chau-tru.jpg',
            'images/products/cement/chau-tru-2.jpg'
        ],
        code: 'XMDM008',
        category: 'Chậu xi măng',
        section: 'cement',
        description: 'Chậu xi măng hình trụ với họa tiết sơn decor tinh xảo, kích thước lớn phù hợp trồng cây cảnh cỡ đại. Chậu có độ bền cao, chịu được thời tiết khắc nghiệt.',
        details: {
            material: 'Xi măng sơn họa tiết',
            color: 'Xám họa tiết trắng',
            size: '• Kích thước: 40x40cm<br/>• Trọng lượng: 6.5kg<br/>• Đường kính miệng: 40cm',
            suitable: 'Cây cảnh lớn, cây văn phòng cỡ đại, cây trang trí sảnh lớn'
        }
    },

    // === CHẬU GỐM SỨ ===
    'GOSU059': {
        name: 'Chậu gốm sứ hình trụ hoa tiết Geometric GOSU059',
        price: '80.000đ - 180.000đ',
        image: 'images/products/ceramic/chau-gom-su.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-gom-su.jpg',
            'images/products/ceramic/chau-gom-su-2.jpg'
        ],
        code: 'GOSU059',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ hình trụ với hoa tiết Geometric hiện đại, màu sắc trang nhã. Chậu được làm từ gốm sứ cao cấp, bề mặt tráng men bóng, dễ dàng vệ sinh và chăm sóc.',
        details: {
            material: 'Gốm sứ tráng men',
            color: 'Trắng hoa tiết đen',
            size: '• Kích thước nhỏ: 12x15cm<br/>• Kích thước lớn: 20x25cm<br/>• Trọng lượng: 0.8-2kg',
            suitable: 'Cây để bàn, sen đá, xương rồng, cây mini'
        }
    },
    'GOSU057': {
        name: 'Chậu gốm sứ họa tiết lá Monstera có dĩa GOSU057',
        price: '20.000đ - 60.000đ',
        image: 'images/products/ceramic/chau-gom-la.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-gom-la.jpg',
            'images/products/ceramic/chau-gom-la-2.jpg'
        ],
        code: 'GOSU057',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ với họa tiết lá Monstera độc đáo, kèm theo dĩa lót chống tràn nước. Chậu có thiết kế nhỏ xinh, phù hợp trồng các loại cây mini, sen đá.',
        details: {
            material: 'Gốm sứ có dĩa',
            color: 'Trắng họa tiết xanh',
            size: '• Kích thước nhỏ: 8x10cm<br/>• Kích thước lớn: 12x15cm<br/>• Trọng lượng: 0.3-0.8kg',
            suitable: 'Cây mini, sen đá nhỏ, xương rồng mini, tiểu cảnh'
        }
    },
    'GOSU056': {
        name: 'Chậu gốm sứ họa tiết hoa màu trắng có dĩa GOSU056',
        price: '20.000đ - 60.000đ',
        image: 'images/products/ceramic/chau-hoa-trang.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-hoa-trang.jpg',
            'images/products/ceramic/chau-hoa-trang-2.jpg'
        ],
        code: 'GOSU056',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ với họa tiết hoa màu trắng tinh khôi, có kèm dĩa lót tiện lợi. Chậu mang vẻ đẹp nhẹ nhàng, nữ tính, thích hợp trang trí bàn làm việc, kệ sách.',
        details: {
            material: 'Gốm sứ có dĩa',
            color: 'Trắng họa tiết hoa',
            size: '• Kích thước nhỏ: 8x10cm<br/>• Kích thước lớn: 12x15cm<br/>• Trọng lượng: 0.3-0.8kg',
            suitable: 'Cây để bàn nhỏ, sen đá, cây trang trí bàn học'
        }
    },
    'GOSU055': {
        name: 'Chậu gốm sứ viền hoa cúc có dĩa màu trắng GOSU055',
        price: '20.000đ - 60.000đ',
        image: 'images/products/ceramic/chau-cuc-trang.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-cuc-trang.jpg',
            'images/products/ceramic/chau-cuc-trang-2.jpg'
        ],
        code: 'GOSU055',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ với viền hoa cúc tinh xảo, màu trắng tinh khiết, có dĩa lót đi kèm. Chậu mang vẻ đẹp cổ điển nhưng vẫn hiện đại, phù hợp nhiều phong cách trang trí.',
        details: {
            material: 'Gốm sứ có dĩa',
            color: 'Trắng viền hoa cúc',
            size: '• Kích thước nhỏ: 8x10cm<br/>• Kích thước lớn: 12x15cm<br/>• Trọng lượng: 0.3-0.8kg',
            suitable: 'Cây mini, tiểu cảnh, cây trang trí bàn trà'
        }
    },
    'GOSU054': {
        name: 'Chậu gốm sứ hình trụ trơn màu trắng GOSU054',
        price: '80.000đ - 180.000đ',
        image: 'images/products/ceramic/chau-tru-tron.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-tru-tron.jpg',
            'images/products/ceramic/chau-tru-tron-2.jpg'
        ],
        code: 'GOSU054',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ hình trụ trơn màu trắng, thiết kế đơn giản nhưng thanh lịch. Chậu phù hợp với mọi không gian, từ hiện đại đến tối giản, dễ dàng phối hợp với nhiều loại cây.',
        details: {
            material: 'Gốm sứ trơn',
            color: 'Trắng tinh',
            size: '• Kích thước nhỏ: 12x15cm<br/>• Kích thước lớn: 20x25cm<br/>• Trọng lượng: 0.8-2kg',
            suitable: 'Cây để bàn, cây văn phòng nhỏ, các loại cây cảnh phổ biến'
        }
    },
    'GOSU053': {
        name: 'Chậu gốm sứ hình khối vân gợn sóng màu trắng GOSU053',
        price: '80.000đ - 150.000đ',
        image: 'images/products/ceramic/chau-van-tron.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-van-tron.jpg',
            'images/products/ceramic/chau-van-tron-2.jpg'
        ],
        code: 'GOSU053',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ hình khối với vân gợn sóng tự nhiên, màu trắng sang trọng. Bề mặt chậu có độ bóng vừa phải, tạo cảm giác cao cấp và tinh tế.',
        details: {
            material: 'Gốm sứ vân sóng',
            color: 'Trắng vân tự nhiên',
            size: '• Kích thước nhỏ: 10x12cm<br/>• Kích thước lớn: 18x22cm<br/>• Trọng lượng: 0.7-1.8kg',
            suitable: 'Cây để bàn, tiểu cảnh, cây trang trí nội thất'
        }
    },
    'GOSU052': {
        name: 'Chậu gốm sứ trụ trơn họa tiết kẻ sọc màu trắng GOSU052',
        price: '100.000đ - 230.000đ',
        image: 'images/products/ceramic/chau-ke-trang.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-ke-trang.jpg',
            'images/products/ceramic/chau-ke-trang-2.jpg'
        ],
        code: 'GOSU052',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ trụ trơn với họa tiết kẻ sọc tinh tế, màu trắng chủ đạo. Chậu có thiết kế hiện đại, phù hợp với không gian làm việc và sinh hoạt đương đại.',
        details: {
            material: 'Gốm sứ kẻ sọc',
            color: 'Trắng sọc đen',
            size: '• Kích thước nhỏ: 15x20cm<br/>• Kích thước lớn: 25x30cm<br/>• Trọng lượng: 1.2-2.8kg',
            suitable: 'Cây văn phòng cỡ vừa, cây để sàn nhỏ, cây trang trí phòng khách'
        }
    },
    'GOSU051': {
        name: 'Chậu gốm sứ họa tiết tam giác màu trắng GOSU051',
        price: '100.000đ - 230.000đ',
        image: 'images/products/ceramic/chau-tam.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-tam.jpg',
            'images/products/ceramic/chau-tam-2.jpg'
        ],
        code: 'GOSU051',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ với họa tiết tam giác geometric, màu trắng chủ đạo tạo điểm nhấn hiện đại. Chậu thích hợp cho những ai yêu thích phong cách tối giản nhưng vẫn cá tính.',
        details: {
            material: 'Gốm sứ họa tiết',
            color: 'Trắng tam giác đen',
            size: '• Kích thước nhỏ: 15x20cm<br/>• Kích thước lớn: 25x30cm<br/>• Trọng lượng: 1.2-2.8kg',
            suitable: 'Cây cảnh văn phòng, cây trang trí nội thất hiện đại'
        }
    },
    'GOSU050': {
        name: 'Chậu gốm sứ họa tiết ô vuông màu trắng GOSU050',
        price: '100.000đ - 230.000đ',
        image: 'images/products/ceramic/chau-o.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-o.jpg',
            'images/products/ceramic/chau-o-2.jpg'
        ],
        code: 'GOSU050',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ với họa tiết ô vuông độc đáo, màu trắng tinh khôi. Thiết kế chậu mang hơi hướng retro nhưng vẫn rất hiện đại, phù hợp nhiều phong cách trang trí.',
        details: {
            material: 'Gốm sứ họa tiết',
            color: 'Trắng ô vuông đen',
            size: '• Kích thước nhỏ: 15x20cm<br/>• Kích thước lớn: 25x30cm<br/>• Trọng lượng: 1.2-2.8kg',
            suitable: 'Cây cảnh trang trí, cây văn phòng, cây để sàn nhỏ'
        }
    },
    'GOSU049': {
        name: 'Chậu gốm sứ họa tiết đan mây màu đen GOSU049',
        price: '160.000đ - 250.000đ',
        image: 'images/products/ceramic/chau-may-den.jpg',
        thumbnailImages: [
            'images/products/ceramic/chau-may-den.jpg',
            'images/products/ceramic/chau-may-den-2.jpg'
        ],
        code: 'GOSU049',
        category: 'Chậu gốm sứ',
        section: 'ceramic',
        description: 'Chậu gốm sứ với họa tiết đan mây tinh xảo, màu đen huyền bí và sang trọng. Chậu mang vẻ đẹp của sự kết hợp giữa truyền thống và hiện đại, tạo điểm nhấn ấn tượng.',
        details: {
            material: 'Gốm sứ họa tiết cao cấp',
            color: 'Đen họa tiết mây',
            size: '• Kích thước nhỏ: 18x25cm<br/>• Kích thước lớn: 28x35cm<br/>• Trọng lượng: 1.8-3.2kg',
            suitable: 'Cây cảnh cao cấp, cây trang trí phòng khách sang trọng, cây văn phòng giám đốc'
        }
    },

    // === SẢN PHẨM DEFAULT ===
    'LONI023': {
        name: 'Cây kim ngân thắt bính cao 1m8 chậu sứ trắng LONI023',
        price: '1.150.000đ',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRBCjrFsSgE0Vk3ojrXBbmZhmMuKTzOL9ch5goSkoaMH6O0_PEiGShH2pBLwPiivemS1shioPMEmEqjmTku_JsBS6x6ze3ysTEvQGO5jyy8Q-8EWYHmaZtnb0NACvhH5N0OmLADmd-cDccwIlqHXasnvfe0Zsydn01xJDXmUE1h6qtVfFsEX0Mrc-nF-u1lspLpabKX185fQbvzp077SOEI1G9miIoOwf7u_c21vrqbS215rViK1XDx3vYJOtVQLdY6_REk3TicFE',
        thumbnailImages: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBRBCjrFsSgE0Vk3ojrXBbmZhmMuKTzOL9ch5goSkoaMH6O0_PEiGShH2pBLwPiivemS1shioPMEmEqjmTku_JsBS6x6ze3ysTEvQGO5jyy8Q-8EWYHmaZtnb0NACvhH5N0OmLADmd-cDccwIlqHXasnvfe0Zsydn01xJDXmUE1h6qtVfFsEX0Mrc-nF-u1lspLpabKX185fQbvzp077SOEI1G9miIoOwf7u_c21vrqbS215rViK1XDx3vYJOtVQLdY6_REk3TicFE',
            'https://images.unsplash.com/photo-1574321459075-735c7840f8d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        code: 'LONI023',
        category: 'Cây văn phòng',
        section: 'office',
        description: 'Cây Kim Ngân là loại cây cảnh trong nhà được trồng phổ biến trên khắp thế giới, nó có sức ảnh hưởng tới mức mà hầu như ai cũng tin rằng khi trồng có thể mang lại nhiều may mắn trong cuộc sống, công việc hoặc làm ăn.',
        details: {
            scientificName: 'Pachira aquatica',
            otherNames: 'Cây kim ngân bính',
            size: '• Kích thước chậu: 40x30cm (DxC)<br/>• Chiều cao tổng: 170 - 180cm',
            difficulty: 'Dễ chăm sóc',
            light: 'Ánh sáng tán xạ, Nắng trực tiếp',
            water: 'Tưới nước 2 lần/tuần',
            temperature: '18-27°C',
            humidity: '40-60%'
        }
    }
};

// product-detail.js (VERSION MỚI - ĐỒNG BỘ HOÀN TOÀN VỚI CART.JS)

// HÀM CHÍNH - XỬ LÝ HIỂN THỊ SẢN PHẨM
document.addEventListener('DOMContentLoaded', function() {
    // 1. LẤY ID SẢN PHẨM TỪ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Kiểm tra nếu không có ID trong URL
    let product;
    if (!productId) {
        // Sử dụng sản phẩm mặc định
        product = products['LONI023'];
        showNotification('Không tìm thấy ID sản phẩm. Hiển thị sản phẩm mặc định.', 'info');
    } else {
        // 2. TÌM SẢN PHẨM TRONG DỮ LIỆU
        product = products[productId];

        if (!product) {
            showError(`Sản phẩm "${productId}" không tồn tại! Vui lòng kiểm tra lại.`);
            return;
        }
    }

    console.log('Đang hiển thị sản phẩm:', product);

    // 3. HIỂN THỊ THÔNG TIN SẢN PHẨM
    displayProductInfo(product);

    // 4. THIẾT LẬP CÁC CHỨC NĂNG
    setupCartFunctionality(product);
    setupReviewFunctionality();
    setupNewsletterForm();
    setupThumbnailNavigation();
    setupZoomFunctionality();
    setupFavoriteFunctionality(product);

    // CẬP NHẬT SỐ LƯỢNG GIỎ HÀNG VÀ YÊU THÍCH KHI TRANG LOAD
    updateCartCountInHeader();
    updateFavoriteCount();

    // Tải sản phẩm vừa xem và liên quan
    loadRecentlyViewed();
    loadRelatedProducts(product.category, product.code);
});

// ========== SỬA HÀM THIẾT LẬP GIỎ HÀNG ==========
// HÀM THIẾT LẬP CHỨC NĂNG GIỎ HÀNG (VERSION MỚI)
function setupCartFunctionality(product) {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const buyNowBtn = document.querySelector('.buy-now-btn');
    const quantityDisplay = document.getElementById('quantity-display');
    const decreaseQtyBtn = document.getElementById('decrease-qty');
    const increaseQtyBtn = document.getElementById('increase-qty');

    if (!addToCartBtn || !quantityDisplay) return;

    let quantity = 1;

    // Xử lý tăng số lượng
    if (increaseQtyBtn) {
        increaseQtyBtn.addEventListener('click', () => {
            quantity++;
            quantityDisplay.textContent = quantity;
        });
    }

    // Xử lý giảm số lượng
    if (decreaseQtyBtn) {
        decreaseQtyBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });
    }

    // ==== SỬA: Xử lý thêm vào giỏ hàng (ĐỒNG BỘ VỚI CART.JS) ====
    addToCartBtn.addEventListener('click', () => {
        if (!product) {
            showNotification('Không thể thêm sản phẩm vào giỏ hàng!', 'error');
            return;
        }

        // Sử dụng hàm addToCart chung
        const result = addToCart(product, quantity);

        if (result.success) {
            showNotification(result.message, 'success');
        } else {
            showNotification(result.message, 'error');
        }

        // Reset số lượng
        quantity = 1;
        quantityDisplay.textContent = quantity;
    });

    // ==== SỬA: Xử lý mua ngay (ĐỒNG BỘ VỚI CART.JS) ====
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            if (!product) {
                showNotification('Không thể thực hiện mua hàng!', 'error');
                return;
            }

            // Sử dụng hàm addToCart chung
            const result = addToCart(product, quantity);

            if (result.success) {
                showNotification('Đã thêm sản phẩm vào giỏ hàng! Chuyển hướng đến trang thanh toán...', 'success');

                // Chuyển hướng đến cart.jsp thay vì checkout.jsp
                setTimeout(() => {
                    window.location.href = 'cart.jsp';
                }, 1500);
            } else {
                showNotification('Có lỗi xảy ra! Vui lòng thử lại.', 'error');
            }
        });
    }
}

// ========== THÊM HÀM MỚI: THÊM SẢN PHẨM VÀO GIỎ HÀNG (CHUNG) ==========
function addToCart(product, quantity = 1) {
    try {
        // Lấy giỏ hàng hiện tại
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');

        // Kiểm tra sản phẩm đã có trong giỏ chưa
        const existingItemIndex = cart.findIndex(item => item.code === product.code);

        if (existingItemIndex !== -1) {
            // Cập nhật số lượng
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Thêm mới với đầy đủ thông tin để cart.js hiểu được
            cart.push({
                code: product.code,
                name: product.name,
                price: product.price, // Giữ nguyên định dạng "1.150.000đ"
                image: product.image,
                quantity: quantity,
                variant: product.variant || '', // Thêm variant để cart.js hiển thị
                hasDiscount: product.hasDiscount || false,
                discountPercentage: product.discountPercentage || 0,
                originalPrice: product.originalPrice || ''
            });
        }

        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Cập nhật giỏ hàng trong header
        updateCartCountInHeader();

        console.log('Sản phẩm đã thêm vào giỏ:', product.code, 'Số lượng:', quantity);

        return {
            success: true,
            message: `Đã thêm ${quantity} "${product.name}" vào giỏ hàng!`,
            cart: cart
        };
    } catch (error) {
        console.error('Lỗi khi thêm vào giỏ hàng:', error);
        return {
            success: false,
            message: 'Có lỗi xảy ra khi thêm vào giỏ hàng!'
        };
    }
}

// ========== SỬA HÀM CẬP NHẬT GIỎ HÀNG TRONG HEADER ==========
function updateCartCountInHeader() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

        // Tính tổng giá trị (chuyển từ chuỗi VND sang số)
        const totalPrice = cart.reduce((sum, item) => {
            if (item.price) {
                const priceMatch = item.price.match(/(\d+(?:\.\d+)*)/);
                if (priceMatch) {
                    const priceNumber = parseFloat(priceMatch[0].replace(/\./g, ''));
                    return sum + (priceNumber * (item.quantity || 1));
                }
            }
            return sum;
        }, 0);

        // Cập nhật trong header
        const cartButton = document.getElementById('cart-button');
        if (cartButton) {
            const priceSpan = cartButton.querySelector('span:first-child');
            const countSpan = cartButton.querySelector('#cart-count');

            if (priceSpan) {
                priceSpan.textContent = `${totalPrice.toLocaleString('vi-VN')}đ`;
            }

            if (countSpan) {
                countSpan.textContent = totalItems;
                if (totalItems > 0) {
                    countSpan.style.display = 'flex';
                } else {
                    countSpan.style.display = 'none';
                }
            }
        }

        console.log('Đã cập nhật header - Số lượng:', totalItems, 'Tổng tiền:', totalPrice);
    } catch (error) {
        console.error('Lỗi khi cập nhật giỏ hàng trong header:', error);
    }
}

// ========== XÓA HÀM updateCartCount CŨ (KHÔNG CẦN THIẾT) ==========
// HÀM CẬP NHẬT SỐ LƯỢNG GIỎ HÀNG (CŨ - GIỮ LẠI ĐỂ TRÁNH LỖI)
function updateCartCount() {
    // Hàm này chỉ để không bị lỗi, không sử dụng
    try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

        console.log('Cart count (legacy function):', totalItems);
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

// ========== CÁC HÀM KHÁC GIỮ NGUYÊN ==========
// HÀM HIỂN THỊ THÔNG TIN SẢN PHẨM
function displayProductInfo(product) {
    // Cập nhật tiêu đề trang
    document.title = `${product.name} - Cây Xanh Việt`;

    // Cập nhật breadcrumb
    updateBreadcrumb(product);

    // Cập nhật ảnh sản phẩm chính VÀ NHÃN GIẢM GIÁ
    updateProductImageAndDiscount(product);

    // Cập nhật ảnh thumbnail
    updateThumbnails(product);

    // Cập nhật thông tin chính
    const productTitle = document.querySelector('.product-title');
    const productPriceDetail = document.querySelector('.product-price-detail');
    const productDescription = document.querySelector('.product-description');

    if (productTitle) productTitle.textContent = product.name;

    // Cập nhật giá với khuyến mãi nếu có
    if (productPriceDetail) {
        if (product.hasDiscount && product.discountPercentage) {
            productPriceDetail.innerHTML = `
                <span class="current-price">${product.price}</span>
                <span class="original-price">${product.originalPrice}</span>
                <span class="price-discount-badge">-${product.discountPercentage}%</span>
            `;
        } else {
            // Nếu không có discount, chỉ hiển thị giá
            productPriceDetail.innerHTML = `
                <span class="current-price">${product.price}</span>
            `;
        }
    }

    if (productDescription) productDescription.innerHTML = product.description;

    // Cập nhật chi tiết sản phẩm
    updateProductDetails(product);

    // Cập nhật sidebar
    updateSidebar(product);
}

// HÀM CẬP NHẬT ẢNH SẢN PHẨM VÀ NHÃN GIẢM GIÁ
function updateProductImageAndDiscount(product) {
    const productImage = document.getElementById('main-product-image');
    const zoomContainer = document.getElementById('zoom-container');

    if (!productImage || !zoomContainer) return;

    // Cập nhật ảnh chính
    productImage.src = product.image;
    productImage.alt = product.name;

    // KIỂM TRA VÀ THÊM/XÓA NHÃN GIẢM GIÁ TRONG ẢNH
    const existingDiscountBadge = zoomContainer.querySelector('.product-detail-discount');

    if (product.hasDiscount && product.discountPercentage) {
        if (existingDiscountBadge) {
            // Cập nhật nếu đã có
            existingDiscountBadge.textContent = `-${product.discountPercentage}%`;
        } else {
            // Thêm mới nếu chưa có
            const discountBadge = document.createElement('div');
            discountBadge.className = 'product-detail-discount';
            discountBadge.textContent = `-${product.discountPercentage}%`;
            discountBadge.style.position = 'absolute';
            discountBadge.style.top = '1rem';
            discountBadge.style.left = '1rem';
            discountBadge.style.zIndex = '5';

            zoomContainer.appendChild(discountBadge);
        }
    } else {
        // Xóa nhãn giảm giá nếu sản phẩm không có discount
        if (existingDiscountBadge) {
            existingDiscountBadge.remove();
        }
    }
}

// HÀM CẬP NHẬT THUMBNAILS
function updateThumbnails(product) {
    const thumbnailsContainer = document.querySelector('.product-thumbnails');
    if (!thumbnailsContainer) return;

    let thumbnailsHTML = '';
    const images = product.thumbnailImages || [product.image];

    images.forEach((imgSrc, index) => {
        thumbnailsHTML += `
            <img src="${imgSrc}" 
                 alt="${product.name} ${index + 1}" 
                 class="product-thumbnail ${index === 0 ? 'active' : ''}"
                 data-src="${imgSrc}">
        `;
    });

    thumbnailsContainer.innerHTML = thumbnailsHTML;

    // Thêm event listener cho thumbnails
    const thumbnails = thumbnailsContainer.querySelectorAll('.product-thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const src = this.getAttribute('data-src') || this.src;
            changeProductImage(src, this);
        });
    });
}

// HÀM THAY ĐỔI ẢNH SẢN PHẨM KHI CLICK THUMBNAIL
function changeProductImage(src, clickedThumbnail = null) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = src;

        // Cập nhật trạng thái active cho thumbnail
        const thumbnails = document.querySelectorAll('.product-thumbnail');
        thumbnails.forEach(thumbnail => {
            const thumbSrc = thumbnail.getAttribute('data-src') || thumbnail.src;
            if (thumbSrc === src) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }
}

// HÀM CẬP NHẬT BREADCRUMB
function updateBreadcrumb(product) {
    const breadcrumb = document.querySelector('.breadcrumb ol');
    if (breadcrumb) {
        const items = breadcrumb.querySelectorAll('li');
        if (items.length >= 3) {
            // Cập nhật danh mục
            const categoryLink = items[1].querySelector('a');
            if (categoryLink) {
                categoryLink.textContent = product.category;
                // Tạo link cho danh mục (giả lập)
                categoryLink.href = `index.html#${product.category.toLowerCase().replace(/\s+/g, '-')}`;
            }

            // Cập nhật tên sản phẩm (item cuối)
            const lastItem = items[items.length - 1];
            lastItem.textContent = product.name;
            lastItem.setAttribute('aria-current', 'page');
        }
    }
}

// HÀM CẬP NHẬT CHI TIẾT SẢN PHẨM
function updateProductDetails(product) {
    const detailRows = document.querySelectorAll('.detail-row');

    if (detailRows.length > 0) {
        // Nếu là cây cảnh
        if (product.details && product.details.scientificName) {
            if (detailRows[0]) detailRows[0].querySelector('.detail-value').textContent = product.details.scientificName || '';
            if (detailRows[1]) detailRows[1].querySelector('.detail-value').textContent = product.details.otherNames || '';
            if (detailRows[2]) detailRows[2].querySelector('.detail-value').innerHTML = product.details.size || '';
            if (detailRows[3]) detailRows[3].querySelector('.detail-value').textContent = product.details.difficulty || '';
            if (detailRows[4]) detailRows[4].querySelector('.detail-value').textContent = product.details.light || '';
            if (detailRows[5]) detailRows[5].querySelector('.detail-value').textContent = product.details.water || '';

            // Thêm các chi tiết bổ sung nếu có
            if (product.details.temperature && detailRows[6]) {
                detailRows[6].querySelector('.detail-value').textContent = product.details.temperature;
            }
            if (product.details.humidity && detailRows[7]) {
                detailRows[7].querySelector('.detail-value').textContent = product.details.humidity;
            }
        }
        // Nếu là chậu
        else if (product.details && product.details.material) {
            if (detailRows[0]) detailRows[0].querySelector('.detail-value').textContent = product.details.material || '';
            if (detailRows[1]) detailRows[1].querySelector('.detail-value').textContent = product.details.color || '';
            if (detailRows[2]) detailRows[2].querySelector('.detail-value').innerHTML = product.details.size || '';
            if (detailRows[3]) detailRows[3].querySelector('.detail-value').textContent = product.details.suitable || '';

            // Ẩn các dòng không cần thiết
            for (let i = 4; i < detailRows.length; i++) {
                detailRows[i].style.display = 'none';
            }
        }
    }
}

// HÀM CẬP NHẬT SIDEBAR
function updateSidebar(product) {
    // Cập nhật tiêu đề sidebar với mã sản phẩm
    const sidebarTitle = document.querySelector('.sidebar-title');
    if (sidebarTitle && product.code) {
        sidebarTitle.innerHTML = `<span class="material-symbols-outlined">phone_in_talk</span> Đặt hàng nhanh - Mã: ${product.code}`;
    }

    // Lưu sản phẩm vào "vừa xem"
    saveToRecentlyViewed(product);
}

// HÀM LƯU SẢN PHẨM VỪA XEM
function saveToRecentlyViewed(product) {
    try {
        let viewedProducts = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');

        // Loại bỏ nếu đã tồn tại
        viewedProducts = viewedProducts.filter(p => p.code !== product.code);

        // Thêm vào đầu mảng
        viewedProducts.unshift({
            code: product.code,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            hasDiscount: product.hasDiscount || false,
            discountPercentage: product.discountPercentage || 0,
            originalPrice: product.originalPrice || ''
        });

        // Giới hạn 5 sản phẩm
        if (viewedProducts.length > 5) {
            viewedProducts = viewedProducts.slice(0, 5);
        }

        localStorage.setItem('recentlyViewed', JSON.stringify(viewedProducts));
    } catch (error) {
        console.error('Lỗi khi lưu sản phẩm vừa xem:', error);
    }
}

// HÀM TẢI SẢN PHẨM LIÊN QUAN
function loadRelatedProducts(category, currentProductCode) {
    // Tìm các sản phẩm cùng danh mục
    const relatedProducts = [];

    for (const [id, product] of Object.entries(products)) {
        if (product.category === category && product.code !== currentProductCode) {
            relatedProducts.push(product);
        }

        // Giới hạn 5 sản phẩm
        if (relatedProducts.length >= 5) break;
    }

    // Hiển thị sản phẩm liên quan
    displayRelatedProducts(relatedProducts, 'related-products');
}

// HÀM TẢI SẢN PHẨM VỪA XEM
function loadRecentlyViewed() {
    try {
        const viewedProducts = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        displayRelatedProducts(viewedProducts, 'recently-viewed');
    } catch (error) {
        console.error('Lỗi khi tải sản phẩm vừa xem:', error);
    }
}

// HÀM HIỂN THỊ SẢN PHẨM LIÊN QUAN
function displayRelatedProducts(products, sectionClass) {
    // Tìm container dựa trên sectionClass
    let container;
    if (sectionClass === 'related-products') {
        // Tìm container sản phẩm liên quan
        const sections = document.querySelectorAll('.products-section');
        if (sections.length > 1) {
            container = sections[1].querySelector('.product-scroll-container');
        }
    } else if (sectionClass === 'recently-viewed') {
        // Tìm container sản phẩm vừa xem
        const sections = document.querySelectorAll('.products-section');
        if (sections.length > 0) {
            container = sections[0].querySelector('.product-scroll-container');
        }
    }

    if (!container) return;

    let html = '';

    products.forEach(product => {
        const hasDiscount = product.hasDiscount || false;
        const discountPercentage = product.discountPercentage || 0;
        const originalPrice = product.originalPrice || '';

        html += `
            <a class="product-item" href="product-detail.html?id=${product.code}">
                <div class="product-image-container">
                    <img alt="${product.name}" class="product-item-image" src="${product.image}" loading="lazy"/>
                    ${hasDiscount ? `<div class="home-discount-badge">-${discountPercentage}%</div>` : ''}
                </div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price-wrapper">
                    ${originalPrice ? `<span class="product-item-original-price">${originalPrice}</span>` : ''}
                    <span class="product-item-price">${product.price}</span>
                </div>
            </a>
        `;
    });

    // Thêm các sản phẩm mẫu nếu không đủ
    const remainingSlots = 5 - products.length;
    if (remainingSlots > 0) {
        for (let i = 0; i < remainingSlots; i++) {
            // Tìm một sản phẩm ngẫu nhiên để fill
            const productKeys = Object.keys(window.products || {});
            if (productKeys.length > 0) {
                const randomKey = productKeys[Math.floor(Math.random() * productKeys.length)];
                const randomProduct = window.products[randomKey];
                html += `
                    <a class="product-item" href="product-detail.html?id=${randomProduct.code}">
                        <div class="product-image-container">
                            <img alt="${randomProduct.name}" class="product-item-image" src="${randomProduct.image}" loading="lazy"/>
                        </div>
                        <h3 class="product-name">${randomProduct.name}</h3>
                        <div class="product-price-wrapper">
                            <span class="product-item-price">${randomProduct.price}</span>
                        </div>
                    </a>
                `;
            }
        }
    }

    container.innerHTML = html;
}

// HÀM CẬP NHẬT SỐ LƯỢNG YÊU THÍCH
function updateFavoriteCount() {
    try {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const favoriteCount = document.querySelector('.favorite-count');
        if (favoriteCount) {
            favoriteCount.textContent = favorites.length;
        }
    } catch (error) {
        console.error('Lỗi khi cập nhật số lượng yêu thích:', error);
    }
}

// HÀM THIẾT LẬP CHỨC NĂNG ĐÁNH GIÁ
function setupReviewFunctionality() {
    const writeReviewBtn = document.querySelector('.write-review-btn');
    const ratingFilters = document.querySelectorAll('.rating-filter');
    const helpfulBtns = document.querySelectorAll('.helpful-btn');
    const reportBtns = document.querySelectorAll('.report-btn');

    // Xử lý nút viết đánh giá
    if (writeReviewBtn) {
        writeReviewBtn.addEventListener('click', () => {
            showNotification('Chức năng viết đánh giá đang được phát triển! Quý khách vui lòng liên hệ hotline để phản hồi về sản phẩm.', 'info');
        });
    }

    // Xử lý filter đánh giá
    ratingFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            ratingFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            // Ẩn/hiện đánh giá theo filter
            filterReviews(this.textContent);
        });
    });

    // Xử lý nút "Hữu ích"
    helpfulBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const countSpan = this.querySelector('span:last-child');
            const currentText = countSpan.textContent;
            const match = currentText.match(/\((\d+)\)/);

            if (match) {
                const currentCount = parseInt(match[1]);
                countSpan.textContent = `Hữu ích? (${currentCount + 1})`;
                this.style.pointerEvents = 'none';
                this.style.opacity = '0.6';

                // Lưu vào localStorage để không bấm lại
                const reviewItem = this.closest('.review-item');
                const reviewerName = reviewItem.querySelector('.reviewer-name').textContent;
                const helpfulKey = `helpful_${reviewerName}`;
                localStorage.setItem(helpfulKey, 'true');
            }
        });
    });

    // Xử lý nút "Báo cáo"
    reportBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Bạn có chắc chắn muốn báo cáo đánh giá này không?')) {
                showNotification('Cảm ơn bạn đã báo cáo. Chúng tôi sẽ xem xét đánh giá này trong thời gian sớm nhất.', 'info');
                this.textContent = 'Đã báo cáo';
                this.disabled = true;
            }
        });
    });

    // Khôi phục trạng thái "Hữu ích" đã bấm
    restoreHelpfulButtons();
}

// HÀM LỌC ĐÁNH GIÁ
function filterReviews(filterText) {
    const reviewItems = document.querySelectorAll('.review-item');

    reviewItems.forEach(item => {
        const rating = item.querySelector('.rating-stars');
        const hasComment = item.querySelector('.review-text').textContent.trim().length > 0;
        const hasImage = item.querySelector('.review-images');

        let shouldShow = true;

        if (filterText.includes('Sao')) {
            const starCount = parseInt(filterText.charAt(0));
            const stars = rating.querySelectorAll('.material-symbols-outlined:not([style*="color: var(--gray-300)"])').length;
            shouldShow = stars === starCount;
        } else if (filterText.includes('Bình luận')) {
            shouldShow = hasComment;
        } else if (filterText.includes('Hình ảnh')) {
            shouldShow = !!hasImage;
        } else if (filterText.includes('Tất cả')) {
            shouldShow = true;
        }

        item.style.display = shouldShow ? 'flex' : 'none';
    });
}

// HÀM KHÔI PHỤC NÚT "HỮU ÍCH"
function restoreHelpfulButtons() {
    const helpfulBtns = document.querySelectorAll('.helpful-btn');

    helpfulBtns.forEach(btn => {
        const reviewItem = btn.closest('.review-item');
        const reviewerName = reviewItem.querySelector('.reviewer-name').textContent;
        const helpfulKey = `helpful_${reviewerName}`;

        if (localStorage.getItem(helpfulKey) === 'true') {
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.6';
        }
    });
}

// HÀM THIẾT LẬP FORM NEWSLETTER
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const dob = this.querySelector('#dob').value.trim();

            // Kiểm tra dữ liệu
            if (!name || !email) {
                showNotification('Vui lòng nhập đầy đủ họ tên và email!', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Email không hợp lệ! Vui lòng kiểm tra lại.', 'error');
                return;
            }

            // Lưu vào localStorage
            try {
                let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');

                // Kiểm tra email đã đăng ký chưa
                const existingSubscriber = subscribers.find(sub => sub.email === email);
                if (existingSubscriber) {
                    showNotification('Email này đã đăng ký nhận tin rồi!', 'info');
                    return;
                }

                // Thêm người đăng ký mới
                subscribers.push({
                    name: name,
                    email: email,
                    dob: dob,
                    date: new Date().toISOString(),
                    source: 'product-detail'
                });

                localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));

                // Hiển thị thông báo thành công
                showNotification('Cảm ơn bạn đã đăng ký nhận tin! Chúng tôi sẽ gửi ưu đãi đặc biệt đến bạn sớm nhất.', 'success');

                // Reset form
                this.reset();
            } catch (error) {
                console.error('Lỗi khi lưu thông tin đăng ký:', error);
                showNotification('Có lỗi xảy ra! Vui lòng thử lại sau.', 'error');
            }
        });

        // Định dạng ngày sinh
        const dobInput = newsletterForm.querySelector('#dob');
        if (dobInput) {
            dobInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');

                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2);
                }
                if (value.length >= 5) {
                    value = value.substring(0, 5) + '/' + value.substring(5, 9);
                }

                e.target.value = value.substring(0, 10);
            });
        }
    }
}

// HÀM THIẾT LẬP THUMBNAIL NAVIGATION
function setupThumbnailNavigation() {
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    const mainImage = document.getElementById('main-product-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Cập nhật ảnh chính
            const src = this.getAttribute('data-src') || this.src;
            mainImage.src = src;

            // Cập nhật trạng thái active
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// HÀM THIẾT LẬP ZOOM
function setupZoomFunctionality() {
    const zoomContainer = document.getElementById('zoom-container');
    const zoomLens = document.getElementById('zoom-lens');
    const zoomResult = document.getElementById('zoom-result');
    const mainImage = document.getElementById('main-product-image');

    if (!zoomContainer || !zoomLens || !zoomResult || !mainImage) return;

    // Zoom functionality
    zoomContainer.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate lens position
        const lensWidth = 100;
        const lensHeight = 100;

        let lensX = x - lensWidth / 2;
        let lensY = y - lensHeight / 2;

        // Keep lens within bounds
        lensX = Math.max(0, Math.min(lensX, rect.width - lensWidth));
        lensY = Math.max(0, Math.min(lensY, rect.height - lensHeight));

        // Set lens position
        zoomLens.style.left = lensX + 'px';
        zoomLens.style.top = lensY + 'px';
        zoomLens.style.display = 'block';

        // Calculate zoom
        const scaleX = mainImage.naturalWidth / rect.width;
        const scaleY = mainImage.naturalHeight / rect.height;

        zoomResult.style.display = 'block';
        zoomResult.style.left = (rect.right + 10) + 'px';
        zoomResult.style.top = rect.top + 'px';

        const zoomImg = zoomResult.querySelector('img') || document.createElement('img');
        zoomImg.src = mainImage.src;
        zoomImg.style.width = (mainImage.naturalWidth * 2) + 'px';
        zoomImg.style.height = (mainImage.naturalHeight * 2) + 'px';
        zoomImg.style.position = 'absolute';
        zoomImg.style.left = (-lensX * 2) + 'px';
        zoomImg.style.top = (-lensY * 2) + 'px';

        if (!zoomResult.contains(zoomImg)) {
            zoomResult.appendChild(zoomImg);
        }
    });

    zoomContainer.addEventListener('mouseleave', function() {
        zoomLens.style.display = 'none';
        zoomResult.style.display = 'none';
    });
}

// HÀM THIẾT LẬP YÊU THÍCH
function setupFavoriteFunctionality(product) {
    const favoriteBtn = document.getElementById('product-favorite-btn');
    const favoriteLink = document.querySelector('.favorite-link');

    if (favoriteBtn) {
        // Kiểm tra nếu sản phẩm đã có trong yêu thích
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const isFavorite = favorites.some(fav => fav.code === product.code);

        if (isFavorite) {
            favoriteBtn.classList.add('active');
        }

        favoriteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleFavorite(product, this);
        });
    }

    if (favoriteLink) {
        favoriteLink.addEventListener('click', function(e) {
            e.preventDefault();
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            if (favorites.length > 0) {
                // Chuyển hướng đến trang yêu thích
                window.location.href = 'favorites.jsp';
            } else {
                showNotification('Bạn chưa có sản phẩm yêu thích nào!', 'info');
            }
        });
    }
}

function toggleFavorite(product, button) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const existingIndex = favorites.findIndex(fav => fav.code === product.code);

    if (existingIndex !== -1) {
        // Xóa khỏi yêu thích
        favorites.splice(existingIndex, 1);
        button.classList.remove('active');
        showNotification('Đã xóa khỏi danh sách yêu thích', 'info');
    } else {
        // Thêm vào yêu thích
        favorites.push({
            code: product.code,
            name: product.name,
            image: product.image,
            price: product.price,
            date: new Date().toISOString()
        });
        button.classList.add('active');
        showNotification('Đã thêm vào danh sách yêu thích', 'success');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteCount();
}

// HÀM KIỂM TRA EMAIL HỢP LỆ
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ========== HÀM HIỂN THỊ THÔNG BÁO MỚI (ĐÃ FIX CHỮ MẤT) ==========
function showNotification(message, type = 'success') {
    // Xóa thông báo cũ nếu có
    const oldNotification = document.querySelector('.notification');
    if (oldNotification) {
        oldNotification.remove();
    }

    // Tạo thông báo mới
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span class="material-symbols-outlined">
            ${type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}
        </span>
        <div class="notification-content">${message}</div>
        <button class="notification-close" aria-label="Đóng">&times;</button>
    `;

    // Thêm thông báo vào trang
    document.body.appendChild(notification);

    // Xử lý nút đóng
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });

    // Tự động đóng sau 5 giây
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// ========== HÀM HIỂN THỊ LỖI ==========
function showError(message) {
    const mainContent = document.querySelector('.product-grid');
    if (mainContent) {
        mainContent.innerHTML = `
            <div style="text-align: center; padding: 50px 20px; grid-column: 1 / -1;">
                <span class="material-symbols-outlined" style="font-size: 48px; color: #ef4444; margin-bottom: 20px;">
                    error
                </span>
                <h2 style="color: #ef4444; margin-bottom: 20px;">${message}</h2>
                <a href="index.html" style="display: inline-block; padding: 12px 24px; background-color: var(--primary-green); color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
                    Quay lại trang chủ
                </a>
            </div>
        `;
    }
}

// ========== HÀM ĐIỀU HƯỚNG ẢNH ==========
function navigateImages(e) {
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    const currentActive = document.querySelector('.product-thumbnail.active');
    const isNext = e.currentTarget.id === 'next-button';

    if (!thumbnails.length || !currentActive) return;

    let currentIndex = Array.from(thumbnails).indexOf(currentActive);

    if (isNext) {
        currentIndex = (currentIndex + 1) % thumbnails.length;
    } else {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    }

    const newImageSrc = thumbnails[currentIndex].getAttribute('data-src') || thumbnails[currentIndex].src;

    // Thay đổi ảnh chính
    changeProductImage(newImageSrc, thumbnails[currentIndex]);
}

// ========== HÀM THAY ĐỔI ẢNH SẢN PHẨM ==========
function changeProductImage(src, clickedThumbnail = null) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = src;

        // Cập nhật trạng thái active cho thumbnail
        const thumbnails = document.querySelectorAll('.product-thumbnail');
        thumbnails.forEach(thumbnail => {
            const thumbSrc = thumbnail.getAttribute('data-src') || thumbnail.src;
            if (thumbSrc === src) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }
}

// ========== GẮN SỰ KIỆN CHO NÚT ĐIỀU HƯỚNG ẢNH ==========
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', navigateImages);
        nextButton.addEventListener('click', navigateImages);
    }
});