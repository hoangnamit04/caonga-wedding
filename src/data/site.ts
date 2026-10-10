// Toàn bộ nội dung của trang nằm ở file này.
// Muốn đổi chữ, số liệu hoặc thêm ảnh, chỉ cần sửa tại đây.

const S3 = 'https://s3.namcao.io.vn/namcao';

export const site = {
  name: 'Cao Nga Wedding',
  title: 'Cao Nga Wedding — Trang Trí Tiệc Cưới Cao Cấp tại Bình Định',
  description:
    'Cao Nga Wedding - Dịch vụ trang trí tiệc cưới cao cấp tại Bình Định. Nơi tình yêu được kể bằng hoa và ánh sáng.',
  city: 'Bình Định',
  phone: '0327197787',
  phoneDisplay: '032 7197787',
  facebook: 'https://www.facebook.com/caongawedding',
  // Giả định cùng số điện thoại và cùng tên trang Facebook. Cần kiểm tra lại.
  zalo: 'https://zalo.me/0327197787',
  messenger: 'https://m.me/caongawedding',
  instagram: '', // điền đường dẫn thật thì biểu tượng sẽ tự hiện ở chân trang
  tiktok: '',
};

export const images = {
  hero: `${S3}/Cao%20Nga/1.jpg`,
  about: `${S3}/Cao%20Nga/2.jpg`,
  aboutFloat: `${S3}/Cao%20Nga/3.jpg`,
  banner: `${S3}/Cao%20Nga/4.jpg`,
  testimonial: `${S3}/Cao%20Nga/5.jpg`,
};

export const hero = {
  eyebrow: 'Bình Định, Việt Nam',
  lines: ['Nơi Tình Yêu', 'Được Kể Bằng'],
  lastLine: { first: 'Hoa', second: 'Ánh Sáng' },
  subtitle:
    'Đội ngũ in-house chuyên trang trí tiệc cưới cao cấp, từ lễ gia tiên đến khách sạn 5 sao. Mỗi không gian là một tác phẩm riêng.',
};

export const stats = [
  { value: 12, suffix: '+', label: 'Năm Kinh Nghiệm' },
  { value: 8000, suffix: '+', label: 'Lễ Cưới' },
  { value: 50, suffix: '+', label: 'Đối Tác Khách Sạn' },
  { value: 100, suffix: '%', label: 'Hài Lòng' },
];

export const about = {
  label: 'Câu Chuyện Của Chúng Tôi',
  heading: 'Chúng tôi biết điều gì làm nên một ngày cưới thực sự đẹp',
  paragraphs: [
    'Cao Nga Wedding ra đời từ niềm đam mê tạo nên những không gian cưới tinh tế và đầy cảm xúc. Với đội ngũ thiết kế in-house giàu kinh nghiệm, chúng tôi biến mọi ý tưởng thành hiện thực.',
    'Từ bàn gia tiên ấm cúng đến sảnh tiệc resort lộng lẫy, mỗi chi tiết đều được chăm chút tỉ mỉ vì chúng tôi đã ở đó, từ đầu đến cuối.',
  ],
  signature: 'Cao Nga Wedding',
  alt: 'Không gian tiệc cưới Cao Nga Wedding tại Bình Định',
  altFloat: 'Chi tiết trang trí tiệc cưới cao cấp',
};

export const services = {
  label: 'Dịch Vụ',
  heading: 'Trọn gói giải pháp trang trí cưới',
  description: 'Từ gia tiên đến tiệc chính, phù hợp mọi phong cách và ngân sách.',
  items: [
    {
      title: 'Trang Trí Gia Tiên',
      text: 'Bàn gia tiên được thiết kế riêng theo concept, tone màu và phong cách mà bạn yêu thích.',
    },
    {
      title: 'Wedding Decoration',
      text: 'Trang trí sảnh tiệc tại nhà hàng, khách sạn và resort 5 sao với chất lượng vượt trội.',
    },
    {
      title: 'Wedding Planner',
      text: 'Lên kế hoạch và điều phối trọn gói, giúp bạn tận hưởng ngày trọng đại mà không lo lắng.',
    },
  ],
};

// n là số thứ tự file ảnh trong thư mục namcao trên MinIO. tall: ô cao gấp đôi.
// Thêm ảnh mới: thêm một dòng { n: 31 } vào danh sách bên dưới.
const galleryRaw: { n: number; tall?: boolean; alt?: string }[] = [
  { n: 6, tall: true }, { n: 7 }, { n: 8 }, { n: 9 }, { n: 10 },
  { n: 11, tall: true }, { n: 12 }, { n: 13 }, { n: 14 }, { n: 15 },
  { n: 16, tall: true }, { n: 17 }, { n: 18 }, { n: 19 }, { n: 20 },
  { n: 21, tall: true }, { n: 22 }, { n: 23 }, { n: 24 }, { n: 25 },
  { n: 26 }, { n: 27 }, { n: 29 }, { n: 30, tall: true },
];

export const gallery = {
  label: 'Portfolio',
  heading: 'Những Khoảnh Khắc Đáng Nhớ',
  items: galleryRaw.map((it, i) => ({
    tall: it.tall ?? false,
    src: `${S3}/${it.n}.jpg`,
    alt: it.alt ?? `Trang trí tiệc cưới Cao Nga Wedding, ảnh ${i + 1}`,
  })),
};

export const banner = {
  text: 'Mỗi không gian cưới là một câu chuyện tình yêu, được kể bằng hoa, ánh sáng và cảm xúc.',
  alt: 'Trang trí tiệc cưới ngoài trời Cao Nga Wedding Bình Định',
};

export const testimonial = {
  quote:
    'Cao Nga Wedding đã biến giấc mơ về một đám cưới hoàn hảo thành hiện thực. Mọi chi tiết đều tinh tế và chu đáo hơn những gì chúng tôi tưởng tượng.',
  name: 'Minh Anh & Hoàng Long',
  detail: 'Resort Wedding, 2025',
  alt: 'Tiệc cưới resort do Cao Nga Wedding trang trí',
};

export const cta = {
  label: 'Bắt Đầu Hành Trình',
  heading: 'Hãy để chúng tôi tạo nên ngày đặc biệt của bạn',
  text: 'Liên hệ để được tư vấn miễn phí và nhận báo giá trong vòng 24 giờ.',
};
