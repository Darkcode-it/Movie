import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaStar, FaChild, FaHeart } from 'react-icons/fa';
import { childrenData } from '../data/mockData';
import ContentCard from '../components/ContentCard';

const KidsWatchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'همه', icon: '🌟' },
    { id: '3-7', label: '3 تا 7 سال', icon: '🎈' },
    { id: '5-10', label: '5 تا 10 سال', icon: '🚀' },
    { id: '7-12', label: '7 تا 12 سال', icon: '⭐' },
  ];

  const filteredContent = selectedCategory === 'all'
    ? childrenData
    : childrenData.filter(item => item.ageGroup === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-bounce">
              🎬 دنیای شگفت‌انگیز کودکان
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              هزاران کارتون و انیمیشن جذاب برای کودکان
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaChild className="text-white text-xl" />
                <span className="text-white font-semibold">محیط امن</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaHeart className="text-white text-xl" />
                <span className="text-white font-semibold">محتواهای آموزشی</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaStar className="text-white text-xl" />
                <span className="text-white font-semibold">کیفیت بالا</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">🎈</div>
        <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse delay-300">🌟</div>
        <div className="absolute bottom-10 left-1/4 text-4xl opacity-20 animate-pulse delay-700">🎪</div>
        <div className="absolute bottom-20 right-1/4 text-5xl opacity-20 animate-pulse delay-1000">🎨</div>
      </section>

      {/* Categories Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-110 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-400 to-pink-400 text-white shadow-lg scale-110'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
            <span>📺</span>
            محتوای انتخاب شده
          </h2>
          <p className="text-gray-600">
            {filteredContent.length} محتوا برای گروه سنی انتخاب شده
          </p>
        </div>

        {filteredContent.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to={`/Movie/details/${item.id}`}>
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <button className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                          <FaPlay />
                          <span>تماشا کن</span>
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <FaStar className="text-amber-400 text-sm" />
                      <span className="text-gray-800 font-semibold text-sm">{item.rating}</span>
                    </div>
                    <div className="absolute top-3 left-3 bg-amber-400 text-white px-3 py-1 rounded-full font-semibold text-sm">
                      {item.ageGroup} سال
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <span>{item.genre}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😢</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              محتوایی یافت نشد
            </h3>
            <p className="text-gray-600">
              متأسفانه برای این گروه سنی محتوایی موجود نیست
            </p>
          </div>
        )}
      </section>

      {/* Featured Section */}
      <section className="bg-gradient-to-r from-purple-400 to-pink-400 py-12 my-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            🎉 محیطی امن برای کودکان
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
            تمام محتواها توسط تیم متخصص بررسی شده و مناسب برای کودکان هستند.
            با خیال راحت بگذارید فرزندتان از تماشای کارتون‌ها لذت ببرد.
          </p>
          <Link
            to="/Movie/create-kid-profile"
            className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            <FaChild />
            <span>ساخت پروفایل کودک</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KidsWatchPage;

