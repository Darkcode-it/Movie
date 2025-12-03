// import React, { useState } from "react";
// import { FaChevronRight, FaChevronLeft, FaUserCircle, FaQuoteLeft } from "react-icons/fa";

// const comments = [
//   {
//     name: "محسن مرصاد",
//     text: "یعنی حرف نداره فقط کافیه اشتراک شو فعال کنی میتونی کل فیلم و سریال‌هارو راحت تماشا کنی",
//   },
//   {
//     name: "F.A",
//     text: "خیلی خوبه تازه فیلم های 2021 رو هم با دوبله داره",
//   },
//   {
//     name: "ستایش",
//     text: "عالــــــــــــــــییییییی پیشنهاد میکنم نصب کنید فیلم های رایگان هم داره پس نصب کنید 😍🤗",
//   },
// ];

// export default function CommentsSection() {
//   const [current, setCurrent] = useState(0);

//   const prev = () => setCurrent((prev) => (prev === 0 ? comments.length - 1 : prev - 1));
//   const next = () => setCurrent((prev) => (prev === comments.length - 1 ? 0 : prev + 1));

//   return (
//     <section className="w-full bg-[#181818] py-12 px-2 md:px-0">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-10">نظر کاربران بعد از تماشای فیلیمو</h2>
//         <div className="flex items-center justify-center gap-6 mb-8">
//           <button onClick={prev} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/80 text-white hover:bg-amber-400 hover:text-black transition text-xl">
//             <FaChevronRight />
//           </button>
//           <button onClick={next} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/80 text-white hover:bg-amber-400 hover:text-black transition text-xl">
//             <FaChevronLeft />
//           </button>
//         </div>
//         <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
//           {comments.map((comment, idx) => (
//             <div
//               key={idx}
//               className={`w-full md:w-1/3 bg-[#202020] rounded-2xl border border-slate-700 p-8 flex flex-col items-center text-center text-white relative transition-all duration-300 ${
//                 idx === current ? "opacity-100 scale-100" : "opacity-60 scale-95 blur-[1px] pointer-events-none"
//               }`}
//             >
//               <FaQuoteLeft className="absolute top-6 right-6 text-3xl text-slate-700 opacity-30" />
//               <div className="flex items-center gap-2 mb-4 self-end">
//                 <span className="text-sm text-slate-300">{comment.name}</span>
//                 <FaUserCircle className="text-lg text-slate-400" />
//               </div>
//               <p className="font-bold leading-relaxed">{comment.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// } 


import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaUserCircle, FaQuoteLeft } from "react-icons/fa";

const COMMENTS = [
  {
    id: 1,
    name: "محسن مرصاد",
    text: "یعنی حرف نداره فقط کافیه اشتراک شو فعال کنی میتونی کل فیلم و سریال‌هارو راحت تماشا کنی",
  },
  {
    id: 2,
    name: "F.A",
    text: "خیلی خوبه تازه فیلم های 2021 رو هم با دوبله داره",
  },
  {
    id: 3,
    name: "ستایش",
    text: "عالــــــــــــــــییییییی پیشنهاد میکنم نصب کنید فیلم های رایگان هم داره پس نصب کنید 😍🤗",
  },
];

const CommentsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setCurrentIndex(prev => {
      let newIndex;
      if (direction === 'next') {
        newIndex = (prev + 1) % COMMENTS.length;
      } else {
        newIndex = prev === 0 ? COMMENTS.length - 1 : prev - 1;
      }
      return newIndex;
    });

    setTimeout(() => setIsAnimating(false), 300);
  };

  // autoPlay حذف شده - نظرات فقط با کلیک دستی کاربر تغییر می‌کنند

  return (
    <section className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white">
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            تجربه کاربران
          </span>
          <br />
          پس از استفاده از فیلم مویز
        </h2>

        <div className="relative group">
          {/* Carousel Container */}
          <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center overflow-hidden">
            {COMMENTS.map((comment, idx) => (
              <div
                key={comment.id}
                className={`absolute inset-0 px-4 flex items-center justify-center transition-all duration-300 ease-in-out pointer-events-none ${
                  idx === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
              >
                <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 rounded-xl p-8 border border-gray-700 relative">
                  <FaQuoteLeft className="absolute top-6 left-6 text-3xl text-amber-500/20" />
                  
                  <div className="flex items-center gap-3 mb-6">
                    <FaUserCircle className="text-2xl text-amber-500" />
                    <span className="text-lg font-medium text-gray-200">
                      {comment.name}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg text-justify">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - همیشه قابل مشاهده و قابل استفاده */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleNavigation('prev');
            }}
            disabled={isAnimating}
            aria-label="نظر قبلی"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/90 backdrop-blur-sm text-white hover:bg-amber-500 active:bg-amber-600 transition-all shadow-lg hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <FaChevronRight className="text-lg md:text-xl" />
          </button>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleNavigation('next');
            }}
            disabled={isAnimating}
            aria-label="نظر بعدی"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/90 backdrop-blur-sm text-white hover:bg-amber-500 active:bg-amber-600 transition-all shadow-lg hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <FaChevronLeft className="text-lg md:text-xl" />
          </button>

          {/* Pagination Dots - کنترل دستی برای رفتن مستقیم به هر نظر */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {COMMENTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating && idx !== currentIndex) {
                    setIsAnimating(true);
                    setCurrentIndex(idx);
                    setTimeout(() => setIsAnimating(false), 300);
                  }
                }}
                disabled={isAnimating}
                className={`transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:cursor-not-allowed ${
                  idx === currentIndex 
                    ? 'w-10 h-3 bg-amber-500 scale-100' 
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 hover:scale-110'
                }`}
                aria-label={`رفتن به نظر ${idx + 1}`}
                aria-current={idx === currentIndex ? 'true' : 'false'}
              />
            ))}
            <span className="text-sm text-gray-400 mr-2">
              {currentIndex + 1} از {COMMENTS.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsCarousel;