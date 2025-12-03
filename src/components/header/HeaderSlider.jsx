import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // ستاره‌های پر
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  // ستاره نیمه پر
  if (hasHalfStar) {
    stars.push(
      <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="half-gradient" x1="0" x2="100%" y1="0" y2="0">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path fill="url(#half-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  // ستاره‌های خالی
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  return (
    <div className="flex items-center">
      {stars}
      <span className="text-sm text-gray-300 ml-1">({rating.toFixed(1)})</span>
    </div>
  );
};
const MovieCard = ({ movie, isFirst }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleDetailsClick = () => {
    navigate(`/Movie/details/${movie.id}`);
  };

  return (
    <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl relative group">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <div className="text-slate-600 text-sm">در حال بارگذاری...</div>
        </div>
      )}
      <img
        src={movie.src}
        alt={movie.alt}
        className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={isFirst ? "eager" : "lazy"}
        fetchPriority={isFirst ? "high" : "auto"}
        onLoad={() => setImageLoaded(true)}
        decoding="async"
      />
      
      {/* Overlay با تغییرات برای موبایل */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent 
        opacity-0 
        group-hover:opacity-100 
        mobile:opacity-100
        mobile:pointer-events-none
        transition-opacity duration-300 
        flex flex-col justify-end p-2 
        sm:p-4">
        <h3 className="text-white text-sm sm:text-lg font-bold mb-1">{movie.title}</h3>
        <div className="flex items-center justify-between mb-1 sm:mb-2">
          <span className="text-gray-300 text-xs sm:text-sm">{movie.year}</span>
          <span className="text-gray-300 text-xs sm:text-sm bg-gray-800/80 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
            {movie.genre}
          </span>
        </div>
        <StarRating rating={movie.rating} />
        <p className="text-gray-200 text-[0.7rem] sm:text-sm mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3">
          {movie.description}
        </p>
        <button 
          onClick={handleDetailsClick}
          className="mt-1.5 sm:mt-3 bg-red-600 hover:bg-red-700 text-white py-1 px-2 sm:py-2 sm:px-4 
          rounded-md text-xs sm:text-sm font-medium transition-all duration-200 transform hover:scale-105"
          aria-label={`جزئیات بیشتر درباره فیلم ${movie.title}`}
        >
          جزئیات بیشتر
        </button>
      </div>
    </div>
  );
};

export default function HeaderSlider() {
  const baseUrl = import.meta.env.BASE_URL;
  
  const movies = [
    {
      id: 1,
      src: `${baseUrl}img/film.jpg`,
      alt: 'پوستر فیلم اکشن',
      title: 'ماموریت غیرممکن',
      description: 'یک فیلم اکشن پر از تعقیب و گریز و سکانس‌های نفس‌گیر با بازی تام کروز',
      rating: 4.5,
      year: 2023,
      genre: 'اکشن'
    },
    {
      id: 2,
      src: `${baseUrl}img/film1.jpg`,
      alt: 'صحنه فیلم کمدی',
      title: 'مردان بد',
      description: 'کمدی سیاه با بازی درخشان ویل اسمیت و مارتین لارنس',
      rating: 3.8,
      year: 2022,
      genre: 'کمدی'
    },
    {
      id: 3,
      src: `${baseUrl}img/film5.jpg`,
      alt: 'فیلم درام',
      title: 'راه رفتن در باران',
      description: 'داستان عاشقانه‌ای که در پس‌زمینه‌ای تاریخی روایت می‌شود',
      rating: 4.2,
      year: 2021,
      genre: 'درام'
    },
    {
      id: 4,
      src: `${baseUrl}img/film3.jpg`,
      alt: 'پیش نمایش فیلم علمی تخیلی',
      title: 'کهکشان بی‌پایان',
      description: 'سفر بین ستاره‌ای گروهی از فضانوردان برای نجات بشریت',
      rating: 4.7,
      year: 2023,
      genre: 'علمی تخیلی'
    },
    {
      id: 5,
      src: `${baseUrl}img/img1.jpg`,
      alt: 'پیش نمایش فیلم علمی تخیلی',
      title: 'دنیای آینده',
      description: 'تصویری از آینده‌ای که تکنولوژی بر همه چیز حاکم است',
      rating: 3.9,
      year: 2022,
      genre: 'علمی تخیلی'
    },
    {
      id: 6,
      src: `${baseUrl}img/img2.jpeg`,
      alt: 'پوستر فیلم اکشن',
      title: 'انتقام‌جویان نهایی',
      description: 'نبرد نهایی قهرمانان برای نجات جهان از دست تانوس',
      rating: 4.8,
      year: 2023,
      genre: 'اکشن'
    },
    {
      id: 7,
      src: `${baseUrl}img/img3.jpg`,
      alt: 'صحنه فیلم کمدی',
      title: 'شب دیوانه',
      description: 'ماجراهای خنده‌دار سه دوست در یک شب به یاد ماندنی',
      rating: 3.5,
      year: 2021,
      genre: 'کمدی'
    },
    {
      id: 8,
      src: `${baseUrl}img/img4.jpg`,
      alt: 'فیلم درام',
      title: 'سکوت',
      description: 'داستان زندگی یک خانواده با رازهای پنهان و درام خانوادگی',
      rating: 4.1,
      year: 2020,
      genre: 'درام'
    },
  ];

  const swiperConfig = {
    modules: [Autoplay, Navigation, Pagination],
    spaceBetween: 24,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
      1280: { slidesPerView: 4, spaceBetween: 28 },
    },
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  };

  return (
    <section className="relative py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">فیلم‌های پیشنهادی</h2>

        <div className="relative ">
          <Swiper {...swiperConfig} className="swiper-container ">
            {movies.map((movie, index) => (
              <SwiperSlide  key={movie.id}>
                <MovieCard movie={movie} isFirst={index < 4} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation buttons */}
          <div className="swiper-button-next !text-red-500 hover:!text-red-600 after:!text-xl"></div>
          <div className="swiper-button-prev !text-red-500 hover:!text-red-600 after:!text-xl"></div>
        </div>
      </div>
    </section>
  );
}