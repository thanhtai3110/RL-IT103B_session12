1. Bảng so sánh Trade-off
Tiêu chí	Monolithic Switch-Case	Modular Function Architecture
Cấu trúc code	Toàn bộ xử lý nằm trong switch-case	Mỗi chức năng được tách thành một hàm
Độ dài switch-case	Dài, khó đọc khi có nhiều chức năng	Ngắn, mỗi case chủ yếu gọi một hàm
Khả năng bảo trì	Khó sửa vì nhiều logic nằm chung	Dễ sửa từng chức năng riêng biệt
Khả năng tái sử dụng	Khó sử dụng logic ở nơi khác	Có thể gọi lại hàm ở nhiều nơi
Unit Test	Khó kiểm thử riêng từng chức năng	Dễ kiểm thử từng hàm độc lập
Mở rộng từ 5 lên 20 chức năng	Khối lệnh dễ trở nên phức tạp	Dễ tổ chức và quản lý hơn
Độ phức tạp ban đầu	Thấp, dễ viết với bài nhỏ	Cao hơn một chút vì phải thiết kế hàm
Phù hợp	Chương trình nhỏ, ít chức năng	Chương trình lớn, cần bảo trì và mở rộng
2. Nguyên lý SRP là gì?
SRP (Single Responsibility Principle) là nguyên lý đơn nhiệm, nghĩa là mỗi hàm hoặc thành phần nên đảm nhận một trách nhiệm chính.

Ví dụ trong chương trình quản lý thuê bao Cloud:
- displaySubscriptions() — hiển thị danh sách thuê bao.
- addSubscription() — thêm thuê bao.
- updateSubscription() — cập nhật thuê bao.
- deleteSubscription() — xóa thuê bao.
- calculateTotal() — tính tổng tiền.
Khi cần sửa cách tính tiền, ta chỉ cần sửa hàm calculateTotal(), không phải tìm kiếm và chỉnh sửa một khối switch-case dài hàng trăm dòng.