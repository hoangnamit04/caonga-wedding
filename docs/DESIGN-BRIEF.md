# Cao Nga Wedding: tóm tắt sản phẩm, thiết kế, phát triển, triển khai

Tài liệu này ghi lại các quyết định đứng sau bản thiết kế Glassmorphism, để lần sau sửa trang không đi lệch hướng.

## 1. Sản phẩm

**Ai dùng trang.** Cặp đôi và gia đình ở Bình Định đang chọn đơn vị trang trí tiệc cưới. Phần lớn vào bằng điện thoại, từ Facebook, Zalo hoặc Google.

**Họ muốn gì.** Nhìn thấy công việc thật trước, xem mình có hợp phong cách không, rồi liên hệ ngay mà không phải điền nhiều thứ.

**Mục tiêu của trang.** Một hành động duy nhất: gọi điện hoặc nhắn Zalo. Mọi phần của trang đều phải dẫn tới hành động này.

**Chỉ số theo dõi.** Số lượt bấm Gọi, Zalo, Messenger. Tốc độ tải trên 4G. Tỷ lệ người cuộn qua gallery.

**Bằng chứng uy tín đã có.** 12 năm, hơn 8.000 lễ cưới, hơn 50 đối tác khách sạn, 100% hài lòng. Đặt ngay trong hero.

**Tài sản hiện có.** Một ảnh hero, hai ảnh giới thiệu, một ảnh banner, một ảnh đánh giá, 24 ảnh gallery. **Toàn bộ là ảnh dọc**, nên bố cục xoay quanh ảnh dọc và không ép ảnh dọc thành banner ngang.

**Còn thiếu, chưa có trong bản này.**
- Form nhận báo giá. Cần một nơi nhận dữ liệu, ví dụ webhook n8n.
- Gói dịch vụ và khoảng giá.
- Vài lời đánh giá thật của khách, hiện chỉ có một.
- Địa chỉ thật và bản đồ.
- Ảnh hero ngang chất lượng cao cho màn hình lớn.

## 2. Thiết kế

**Hướng.** Glassmorphism trên nền tối ấm: tấm kính mờ nổi trên vầng sáng hồng, sâm panh và tím. Cảm giác sang, hiện đại, ban đêm.

**Vì sao hợp.** Ảnh cưới trắng nổi bật trên nền tối. Kính chỉ đẹp khi phía sau có thứ để làm mờ, nên nền có vầng sáng màu.

**Một font duy nhất: Be Vietnam Pro.** Thiết kế riêng cho tiếng Việt, có đủ bộ ký tự, dấu thanh không bị lệch. Ba độ đậm: 300 cho tiêu đề lớn, 400 cho nội dung, 500 cho nhãn và nút. Phân cấp bằng cỡ chữ, độ đậm và màu, không dùng font thứ hai.

**Ba loại kính.**
| Lớp | Dùng khi | Ghi chú |
|---|---|---|
| `glass` | Nằm trên nền aurora của trang | Phủ tối 34% để chữ luôn đạt AA |
| `glass-dark` | Nằm trên ảnh | Đậm hơn, để chữ sáng không bị ảnh sáng làm mất |
| `glass-nav` | Thanh điều hướng, thanh liên hệ nhanh, nút trong lightbox | Đậm nhất, vì trượt qua cả ảnh trắng |

**Màu.** Nền `#150f10`. Chữ ngà `#f7f0e6`. Nhấn sâm panh `#ecd7b8` và hồng `#dba99c`.

**Bố cục.**
1. Thanh điều hướng viên thuốc kính nổi.
2. Hero: tấm kính chứa tiêu đề cùng ảnh dọc trong khung kính, bốn con số uy tín ngay bên dưới.
3. Giới thiệu: ảnh dọc và tấm kính đè lên mép ảnh.
4. Dịch vụ: ba thẻ kính, mỗi thẻ có biểu tượng riêng.
5. Gallery: lưới ảnh trong khung kính, lightbox kính.
6. Câu trích dẫn chữ thuần.
7. Đánh giá: ảnh dọc và thẻ kính.
8. Kêu gọi liên hệ: thẻ kính lớn có ảnh.
9. Chân trang kính.
10. Thanh liên hệ nhanh: viên thuốc có nhãn ở đáy màn hình điện thoại, cột biểu tượng ở góc phải trên máy tính.

**Quy tắc để kính không làm hỏng trải nghiệm.**
- Chữ trên kính phải đạt tương phản AA ở trường hợp xấu nhất, đã tính bằng số.
- Ảnh không bị làm mờ, chỉ khung kính bao quanh, để cuộn mượt.
- Điện thoại dùng bán kính mờ nhỏ hơn.
- Có phương án dự phòng khi trình duyệt không hỗ trợ làm mờ nền và khi người dùng bật "giảm độ trong suốt".
- Không ẩn nội dung khi tắt JavaScript. Tôn trọng "giảm chuyển động".
- Không đặt chữ lên ảnh sáng.

## 3. Phát triển

**Công nghệ.** Astro, Tailwind CSS 4, TypeScript. Site tĩnh, gần như không có JavaScript.

**Cấu trúc.**
- `src/data/site.ts`: toàn bộ chữ, số liệu, liên hệ và danh sách ảnh.
- `src/components/`: mỗi phần của trang là một component.
- `src/styles/global.css`: màu, font, ba lớp kính, nút, hiệu ứng cuộn.

**Ảnh.** Astro tải ảnh gốc từ MinIO lúc build, tạo AVIF, WebP và JPEG nhiều cỡ. Trình duyệt chọn định dạng nhẹ nhất mà nó hiểu.

**Ngân sách hiệu năng, đo trên điện thoại ở lần tải đầu.**
| Mục | Mục tiêu | Thực tế |
|---|---|---|
| Font | dưới 150 KB | 138 KB |
| CSS và JavaScript | dưới 15 KB | 8 KB |
| Số yêu cầu | dưới 25 | 15 |

**Sửa nội dung.** Chỉ cần sửa `src/data/site.ts`. Thêm ảnh gallery bằng một dòng.

## 4. Triển khai

**Nhánh.** Làm trên nhánh riêng, không đẩy thẳng vào `main`.

**Xem thử trước khi thay bản chạy thật.**
1. Trong Coolify, tạo một ứng dụng thứ hai từ cùng kho, chọn nhánh thiết kế mới, Build Pack là Dockerfile.
2. Đặt ánh xạ cổng `8068:80`, để trống Domains.
3. Mở `http://<IP-server>:8068` kiểm tra trên điện thoại và máy tính.

**Đưa lên bản chạy thật.**
1. Tạo pull request và gộp vào `main`.
2. Coolify tự build lại ứng dụng đang chạy, nếu đã bật auto deploy. Nếu chưa, bấm Deploy.
3. Kiểm tra lại, xóa ứng dụng xem thử.

**Quay lại bản cũ.** Trong Coolify, mở mục Deployments, chọn lần deploy trước đó và deploy lại. Hoặc dùng `git revert` cho commit gộp và đẩy lên.

**Điều kiện build.** Build cần tải được ảnh từ `s3.namcao.io.vn`. Nếu kho ảnh tạm ngừng, build sẽ lỗi, bản đang chạy vẫn không bị ảnh hưởng.
