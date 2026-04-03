// 1. Khai báo biến an toàn từ môi trường Maestro (Global Scope)
// Kiểm tra nếu biến tồn tại trong env, nếu không thì lấy giá trị mặc định
const _total = (typeof total !== 'undefined') ? Number(total) : 1;
const _hasMultiple = (typeof hasMultiple !== 'undefined') ? (hasMultiple === true || hasMultiple === "true") : false;
const _copiedText = (typeof copiedText !== 'undefined') ? copiedText : "";

let required = 1;

// 2. Xử lý đếm số lượng đáp án cần chọn từ text "0/X"
if (_hasMultiple && _copiedText) {
    const match = _copiedText.match(/0\/(\d+)/);
    if (match) {
        // Đảm bảo không chọn quá số lượng đáp án thực tế có sẵn (_total)
        required = Math.min(Number(match[1]) || 1, _total);
    }
}

// 3. Tạo mảng index và xáo trộn (Fisher-Yates Shuffle)
let arr = [];
for (let i = 0; i < _total; i++) {
    arr.push(i);
}

for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Cách viết ES6 để hoán đổi vị trí
}

// 4. Lấy danh sách các index ngẫu nhiên
const finalIndexes = arr.slice(0, required);

// 5. Gán vào output
output.indexes = finalIndexes; // Giữ để log
output.required = required;

// Mẹo quan trọng: Gán thêm các biến động để YAML dễ đọc
finalIndexes.forEach((val, index) => {
    output["idx" + index] = val;
});

