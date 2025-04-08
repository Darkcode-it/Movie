import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeaderSlider() {
  const images = [
    { src: './public/img/film.jpg', alt: 'پوستر فیلم اکشن' },
    { src: './public/img/film1.jpg', alt: 'صحنه فیلم کمدی' },
    { src: './public/img/film5.jpg', alt: 'فیلم درام' },
    { src: './public/img/film3.jpg', alt: 'پیش نمایش فیلم علمی تخیلی' },
    
    { src: './public/img1.jpg', alt: 'پیش نمایش فیلم علمی تخیلی' },
    { src: './public/img2.jpeg', alt: 'پوستر فیلم اکشن' },
    { src: './public/img3.jpg', alt: 'صحنه فیلم کمدی' },
    { src: './public/img4.jpg', alt: 'فیلم درام' },
  ];

  const maxSlidesPerView = 4; // مطابق با breakpoints
  const enableLoop = images.length > maxSlidesPerView;

  const swiperConfig = {
    modules: [Autoplay, Navigation, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: enableLoop,
    navigation: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
    grabCursor: true,
  };

  return (
    <section className="relative group">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Swiper {...swiperConfig} className="swiper-container">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
