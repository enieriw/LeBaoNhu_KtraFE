
    const pricePerItem = 1034550;

    // Hàm cập nhật tổng giá trị
    function updateTotalPrice(quantity) {
            const totalPrice = pricePerItem * quantity;
    document.getElementById('totalPrice').textContent = totalPrice.toLocaleString('vi-VN') + '₫';
        }

    // Hàm xử lý khi bấm nút "+"
    function increaseQuantity() {
        let currentQuantity = parseInt(document.getElementById('quantity').value);
    currentQuantity++;
    document.getElementById('quantity').value = currentQuantity;
    updateTotalPrice(currentQuantity);
    // Bỏ disable nút trừ khi số lượng > 1
    document.getElementById('minusBtn').classList.remove('disabled');
        }

    // Hàm xử lý khi bấm nút "-"
    function decreaseQuantity() {
        let currentQuantity = parseInt(document.getElementById('quantity').value);
            if (currentQuantity > 1) {
        currentQuantity--;
    document.getElementById('quantity').value = currentQuantity;
    updateTotalPrice(currentQuantity);
            }
    // Khi số lượng là 1, disable nút trừ
    if (currentQuantity === 1) {
        document.getElementById('minusBtn').classList.add('disabled');
            }
        }

    // Thêm sự kiện khi trang load để kiểm tra nút trừ
    window.onload = function () {
        let currentQuantity = parseInt(document.getElementById('quantity').value);
    if (currentQuantity === 1) {
        document.getElementById('minusBtn').classList.add('disabled');
            }
        }