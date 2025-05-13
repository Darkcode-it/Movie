import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiGlobe, FiFilm, FiUser } from 'react-icons/fi';
import Header from "../components/header/Header";
import Nav from "../components/header/Nav";
import Footer from "../components/Footer";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Movie data - same as in HeaderSlider
  const movies = [
    {
      id: 1,
      src: 'img/film.jpg',
      alt: 'پوستر فیلم اکشن',
      title: 'ماموریت غیرممکن',
      description: 'یک فیلم اکشن پر از تعقیب و گریز و سکانس‌های نفس‌گیر با بازی تام کروز',
      rating: 4.5,
      year: 2023,
      genre: 'اکشن',
      director: 'کریستوفر مک‌کوری',
      duration: 150,
      language: 'انگلیسی',
      synopsis: 'یک فیلم اکشن پر از تعقیب و گریز و سکانس‌های نفس‌گیر با بازی تام کروز. در این فیلم، ایتن هانت و تیم IMF باید با یک تهدید جهانی مقابله کنند که می‌تواند امنیت جهان را به خطر بیندازد.',
      budget: '190 میلیون دلار',
      revenue: '567 میلیون دلار'
    },
    {
      id: 2,
      src: 'img/film1.jpg',
      alt: 'صحنه فیلم کمدی',
      title: 'مردان بد',
      description: 'کمدی سیاه با بازی درخشان ویل اسمیت و مارتین لارنس',
      rating: 3.8,
      year: 2022,
      genre: 'کمدی',
      director: 'آدیل ال آربی و بیلال فلاح',
      duration: 124,
      language: 'انگلیسی',
      synopsis: 'کمدی سیاه با بازی درخشان ویل اسمیت و مارتین لارنس. در این فیلم، دو پلیس باید با یک باند خلافکار مبارزه کنند.',
      budget: '90 میلیون دلار',
      revenue: '426 میلیون دلار'
    },
    // Add more movies with detailed information...
  ];

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">فیلم یافت نشد</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            بازگشت
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Nav />
      <div className="min-h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            aria-label="بازگشت"
          >
            <FiArrowLeft className="text-xl" />
            <span className="font-medium">بازگشت به صفحه قبل</span>
          </button>

          <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-96">
              <img
                src={movie.src}
                alt={movie.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-8">
              <h1 className="text-4xl font-bold text-white">{movie.title}</h1>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Metadata */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <FiUser className="text-2xl text-amber-400" />
                    <div>
                      <p className="text-gray-400 text-sm">کارگردان</p>
                      <p className="text-white font-medium">{movie.director}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <FiClock className="text-2xl text-amber-400" />
                    <div>
                      <p className="text-gray-400 text-sm">مدت زمان</p>
                      <p className="text-white font-medium">{movie.duration} دقیقه</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <FiGlobe className="text-2xl text-amber-400" />
                    <div>
                      <p className="text-gray-400 text-sm">زبان</p>
                      <p className="text-white font-medium">{movie.language}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <FiFilm className="text-2xl text-amber-400" />
                    <div>
                      <p className="text-gray-400 text-sm">ژانر</p>
                      <p className="text-white font-medium">{movie.genre}</p>
                    </div>
                  </div>
                </div>

                {/* Synopsis */}
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-2xl font-semibold text-white">خلاصه داستان</h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {movie.synopsis || movie.description}
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <InfoCard label="امتیاز" value={`${movie.rating}/5`} />
                <InfoCard label="سال تولید" value={movie.year} />
                <InfoCard label="بودجه" value={movie.budget} />
                <InfoCard label="فروش جهانی" value={movie.revenue} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const InfoCard = ({ label, value }) => (
  <div className="bg-gray-700/50 p-4 rounded-xl">
    <p className="text-gray-400 text-sm mb-1">{label}</p>
    <p className="text-white font-medium">{value}</p>
  </div>
);

export default MovieDetails;