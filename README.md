# Cao Nga Wedding

Trang giới thiệu dịch vụ trang trí tiệc cưới. Astro, Tailwind CSS, site tĩnh phục vụ bằng nginx.

## Chạy trên máy

```bash
npm install
npm run dev      # xem trực tiếp khi sửa
npm run build    # build bản chạy thật vào thư mục dist
npm run preview  # xem thử bản build
```

Lần build đầu sẽ tải ảnh gốc từ `s3.namcao.io.vn` về để tối ưu, nên cần có mạng.

## Sửa nội dung

Mọi chữ, số liệu, thông tin liên hệ và danh sách ảnh nằm trong `src/data/site.ts`.

- **Thêm ảnh vào gallery:** upload ảnh lên MinIO với số thứ tự mới, rồi thêm một dòng `{ n: 31 }` vào `galleryRaw`. Thêm `tall: true` nếu muốn ô cao gấp đôi.
- **Đổi ảnh hero, giới thiệu, banner:** sửa đường dẫn trong `images`.
- **Hiện biểu tượng Instagram hoặc TikTok:** điền đường dẫn vào `site.instagram` hoặc `site.tiktok`.

## Triển khai bằng Coolify

1. Đẩy mã lên một repo private trên GitHub.
2. Trong Coolify, tạo ứng dụng từ Private Repository (with Deploy Key), Build Pack chọn **Dockerfile**.
3. Cổng nội bộ của container là `80`. Vì Coolify trên server này không chạy proxy, khai báo ánh xạ cổng, ví dụ `8066:80`, rồi trỏ tuyến Cloudflare Tunnel vào cổng đó.

## Cần kiểm tra trước khi chạy thật

- `site.zalo` và `site.messenger` trong `src/data/site.ts` đang giả định cùng số điện thoại và cùng tên trang Facebook.
- Chưa khai báo địa chỉ web chính thức, nên chưa có sitemap và thẻ canonical. Khi có tên miền, thêm `site` vào `astro.config.mjs` rồi thêm `@astrojs/sitemap`.
