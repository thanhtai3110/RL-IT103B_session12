# PHÂN TÍCH LỖI VÀ TEST CASES – GRACE PERIOD

## 1. Phân tích lỗi logic

### Dòng code gây lỗi

Trong hàm `auditSubscriptions()`, đoạn code ban đầu có điều kiện:

```javascript
if (sub.daysOverdue >= 3) {
    sub.planTier = 'FREE';
    sub.deviceLimit = 1;
    sub.status = 'EXPIRED';
}
```

### Nguyên nhân gây lỗi

Toán tử `>= 3` có nghĩa là số ngày nợ cước lớn hơn hoặc bằng 3. Vì vậy, khi thuê bao nợ cước đúng 3 ngày, điều kiện vẫn đúng và hệ thống lập tức hạ cấp gói thuê bao về `FREE`, giới hạn thiết bị còn 1 và chuyển trạng thái thành `EXPIRED`.

Điều này trái với quy định nghiệp vụ của StreamHub: thuê bao vẫn được sử dụng gói cước hiện tại trong 3 ngày đầu của thời gian ân hạn.

### Cách sửa lỗi

Thay điều kiện:

```javascript
if (sub.daysOverdue >= 3)
```

bằng:

```javascript
if (sub.daysOverdue > 3)
```

Sau khi sửa, hệ thống chỉ hạ cấp thuê bao khi số ngày nợ cước lớn hơn 3. Nếu nợ cước từ 1 đến 3 ngày, thuê bao chuyển sang trạng thái `GRACE_PERIOD` và giữ nguyên gói cước cùng giới hạn thiết bị.

## 2. Bảng Test Cases đối chứng

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01 – Thuê bao nợ cước đúng 3 ngày | `daysOverdue = 3`, `planTier = 'FAMILY'`, `deviceLimit = 5`, `status = 'ACTIVE'` | Điều kiện `>= 3` đúng, thuê bao bị hạ cấp về `FREE`, `deviceLimit = 1`, `status = 'EXPIRED'`. | Giữ nguyên `planTier = 'FAMILY'`, `deviceLimit = 5`; cập nhật `status = 'GRACE_PERIOD'`. |
| TC02 – Thuê bao nợ cước 4 ngày | `daysOverdue = 4`, `planTier = 'FAMILY'`, `deviceLimit = 5`, `status = 'ACTIVE'` | Thuê bao bị hạ cấp về `FREE`, `deviceLimit = 1`, `status = 'EXPIRED'`. | Hạ cấp về `FREE`, đặt `deviceLimit = 1`, cập nhật `status = 'EXPIRED'`. |

## 3. Kết luận

Lỗi phát sinh do sử dụng toán tử so sánh `>=` thay vì `>`, khiến thuê bao bị hạ cấp sớm một ngày so với chính sách quy định.

Việc thay đổi điều kiện thành `sub.daysOverdue > 3` giúp hệ thống xử lý đúng ranh giới thời gian ân hạn, bảo vệ quyền lợi khách hàng và đảm bảo các thuộc tính của đối tượng thuê bao được cập nhật chính xác trong mảng `subscriptions`.