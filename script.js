document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. TÍNH NĂNG BẢNG TUẦN HOÀN TƯƠNG TÁC (periodic.html)
       ========================================================================== */
    const periodicElements = document.querySelectorAll('.periodic-table-grid .element, .special-series-container .element');
    
    if (periodicElements.length > 0) {
        const panelZ = document.querySelector('.badge-z');
        const panelSymbol = document.querySelector('.badge-symbol');
        const panelName = document.getElementById('panel-name');
        const panelEConfig = document.getElementById('panel-e-config');
        const panelUse = document.getElementById('panel-use');
        const panelToxic = document.getElementById('panel-toxic');

        periodicElements.forEach(el => {
            el.addEventListener('click', function() {
                // Xóa trạng thái 'active' của tất cả các ô nguyên tố
                periodicElements.forEach(e => e.classList.remove('active'));
                
                // Thêm trạng thái 'active' cho ô vừa được click
                this.classList.add('active');

                // Lấy dữ liệu từ các thuộc tính data-* và cập nhật lên bảng thông tin
                panelZ.textContent = this.dataset.z || '';
                panelSymbol.textContent = this.dataset.symbol || '';
                panelName.textContent = this.dataset.name || '';
                panelEConfig.textContent = this.dataset.e || 'Đang cập nhật...';
                panelUse.textContent = this.dataset.use || 'Đang cập nhật dữ liệu ứng dụng...';
                panelToxic.textContent = this.dataset.toxic || 'Đang cập nhật dữ liệu an toàn...';
                
                // Hiệu ứng nhấp nháy nhẹ cho bảng thông tin để gây chú ý
                const infoPanel = document.getElementById('info-panel');
                infoPanel.style.opacity = '0.5';
                setTimeout(() => {
                    infoPanel.style.opacity = '1';
                    infoPanel.style.transition = 'opacity 0.3s ease';
                }, 50);
            });
        });
    }

    /* ==========================================================================
       2. TÍNH NĂNG TÌM KIẾM KÝ HIỆU HÓA HỌC (symbols.html)
       ========================================================================== */
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const tableRows = document.querySelectorAll('.symbol-table tbody tr');

    if (searchInput && tableRows.length > 0) {
        // Hàm lọc bảng
        const filterTable = () => {
            const query = searchInput.value.toLowerCase().trim();
            
            tableRows.forEach(row => {
                // Lấy toàn bộ nội dung text của hàng đó
                const rowText = row.textContent.toLowerCase();
                
                // Ẩn/hiện dựa trên kết quả tìm kiếm
                if (rowText.includes(query)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        };

        // Lọc ngay khi người dùng gõ phím (Real-time)
        searchInput.addEventListener('input', filterTable);
        
        // Lọc khi bấm nút (dự phòng)
        if(searchBtn) {
            searchBtn.addEventListener('click', filterTable);
        }
    }

    /* ==========================================================================
       3. TÍNH NĂNG ACCORDION CHO GỢI Ý BÀI TẬP (exercises.html)
       ========================================================================== */
    const microlearningDetails = document.querySelectorAll('details.microlearning');
    
    microlearningDetails.forEach(targetDetail => {
        targetDetail.addEventListener('click', () => {
            // Khi click vào 1 thẻ, tự động đóng tất cả các thẻ mở trước đó
            microlearningDetails.forEach(detail => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });

});