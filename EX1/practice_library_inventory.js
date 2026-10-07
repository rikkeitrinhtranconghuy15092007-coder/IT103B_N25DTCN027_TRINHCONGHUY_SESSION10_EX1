const libraryInventory = [
    { bookCode: 'B01', title: 'JavaScript Cơ Bản', category: 'IT', price: 150000, totalCopies: 5, availableCopies: 5, shelfLocation: 'A1' },
    { bookCode: 'B02', title: 'Cấu trúc Dữ liệu', category: 'IT', price: 200000, totalCopies: 3, availableCopies: 0, shelfLocation: 'A2' },
    { bookCode: 'B03', title: 'Sách Hỏng Cũ', category: 'Misc', price: 50000, totalCopies: 2, availableCopies: 2, shelfLocation: 'C1' }
];

console.log("--- BẮT ĐẦU QUY TRÌNH KIỂM KÊ ---");

libraryInventory.push({
    bookCode: 'B04',
    title: 'Thiết kế Hệ thống',
    category: 'IT',
    price: 250000,
    totalCopies: 4,
    availableCopies: 4,
    shelfLocation: 'A3'
});
console.log("[NHẬP KHO] Đã thêm sách mới: Thiết kế Hệ thống.");

const borrowCode = 'B01';
for (let i = 0; i < libraryInventory.length; i++) {
    if (libraryInventory[i].bookCode === borrowCode) {
        if (libraryInventory[i].availableCopies > 0) {
            libraryInventory[i].availableCopies -= 1; // Giảm số lượng khả dụng
            console.log(`[GIAO DỊCH] Cho mượn thành công 1 cuốn: ${libraryInventory[i].title}.`);
            
            if (libraryInventory[i].availableCopies === 0) {
                console.log(`[CẢNH BÁO] Đầu sách ${libraryInventory[i].title} đã HẾT SÁCH TRÊN KỆ!`);
            }
        } else {
            console.log(`[TỪ CHỐI] Đầu sách ${libraryInventory[i].title} đã HẾT SÁCH TRÊN KỆ, không thể mượn.`);
        }
        break; 
    }
}

const liquidateCode = 'B03';
for (let i = 0; i < libraryInventory.length; i++) {
    if (libraryInventory[i].bookCode === liquidateCode) {
        const removedBook = libraryInventory.splice(i, 1); 
        console.log(`[THANH LÝ] Đã loại bỏ đầu sách cũ/hỏng: ${removedBook[0].title}.`);
        break;
    }
}
let totalInventoryBooks = 0;
let totalAssetValue = 0;

for (let i = 0; i < libraryInventory.length; i++) {
    const book = libraryInventory[i];
    totalInventoryBooks += book.totalCopies;
    totalAssetValue += (book.totalCopies * book.price);
}

console.log("\n==========================================================");
console.log("            BẢNG KIỂM KÊ KHO THƯ VIỆN TỔNG HỢP            ");
console.log("==========================================================");
console.table(libraryInventory);
console.log("----------------------------------------------------------");
console.log(`> Tổng số lượng sách trong kho: ${totalInventoryBooks} cuốn`);
console.log(`> Tổng giá trị tài sản kho:     ${totalAssetValue.toLocaleString('vi-VN')} VNĐ`);
console.log("==========================================================\n");