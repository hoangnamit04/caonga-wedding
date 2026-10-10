// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Ảnh gốc nằm trên MinIO. Astro tải về lúc build, tối ưu và đóng gói vào site.
  image: {
    domains: ['s3.namcao.io.vn'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
