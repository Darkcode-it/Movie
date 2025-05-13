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


import React, { useState, useEffect } from "react";
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
      const newIndex = direction === 'next' 
        ? (prev + 1) % COMMENTS.length 
        : (prev - 1 + COMMENTS.length) % COMMENTS.length;
      return newIndex;
    });

    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => handleNavigation('next'), 5000);
    return () => clearInterval(autoPlay);
  }, []);

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
          {/* Navigation Arrows */}
          <div className="hidden md:flex justify-between items-center absolute inset-0 z-10">
            <button
              onClick={() => handleNavigation('prev')}
              aria-label="نظر قبلی"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black/80 text-white hover:bg-amber-500 transition-transform transform -translate-x-12 group-hover:translate-x-0 duration-300"
            >
              <FaChevronRight className="text-xl" />
            </button>
            
            <button
              onClick={() => handleNavigation('next')}
              aria-label="نظر بعدی"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black/80 text-white hover:bg-amber-500 transition-transform transform translate-x-12 group-hover:translate-x-0 duration-300"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden relative h-[400px] md:h-[300px]">
            <div 
              className={`flex transition-transform duration-300 ease-in-out ${
                isAnimating ? 'opacity-75' : 'opacity-100'
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {COMMENTS.map((comment) => (
                <div 
                  key={comment.id}
                  className="min-w-full px-4 flex items-center justify-center"
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
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {COMMENTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-amber-500 scale-125' : 'bg-gray-600'
                }`}
                aria-label={`نظر ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsCarousel;