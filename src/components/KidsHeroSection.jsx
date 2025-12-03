// import React from "react";

// const KidsHeroSection = () => {
//   return (
//     <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-l from-[#11303d] via-[#0F172B] to-[#0F172B] text-white py-12 md:py-20 px-4 md:px-0 rtl">
//       <div className="w-full md:max-w-md md:ml-10 mt-8 md:mt-0 text-center md:text-right">
//         <h1 className="text-2xl md:text-4xl font-bold mb-5 leading-snug">دنیایی متنوع از فیلم و کارتون‌های کودکانه</h1>
//         <p className="text-base md:text-lg mb-8 leading-8">
//           ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
//         </p>
//         <div className="flex flex-col md:flex-row gap-4 md:justify-start justify-center items-center md:items-start">
//           <button className="bg-white text-gray-900 font-bold rounded-lg px-7 py-3 text-base transition hover:bg-yellow-300 w-full md:w-auto">فیلیمو کودک بساز</button>
//           <button className="bg-gray-800 text-white rounded-lg px-7 py-3 text-base transition hover:bg-gray-700 w-full md:w-auto">تماشای فیلیمو کودک</button>
//         </div>
//       </div>
//       <div className="w-full flex justify-center md:justify-end md:w-auto mb-8 md:mb-0">
//         <img src="/img/bg-kids.webp" alt="شخصیت کارتونی کودکانه" className="max-w-xs w-full h-auto block md:max-w-[320px] rounded-xl shadow-lg" />
//       </div>
//     </section>
//   );
// };

// export default KidsHeroSection; 



import React from "react";
import { Link } from "react-router-dom";

const KidsHeroSection = () => {
  return (
    <section className="w-full min-h-[600px] md:min-h-[700px] bg-gradient-to-l from-primary-900 via-primary-800 to-primary-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 py-12 md:py-24">
        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-center md:text-right">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              دنیای شگفت‌انگیز
            </span>
            <br />
            فیلم و انیمیشن‌های کودکانه
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center md:text-right max-w-2xl">
            با قابلیت تنظیم سن کودک، محیطی امن و شخصی‌سازی شده ایجاد کنید تا فقط 
            محتوای مناسب گروه سنی خودش را تماشا کند.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/Movie/create-kid-profile"
              className="group relative flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-xl px-8 py-4 md:py-5 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl w-full md:w-auto"
            >
              <span>ساخت پروفایل کودک</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Link>

            <button className="border-2 border-amber-400 hover:border-amber-500 text-amber-400 hover:text-amber-500 font-semibold rounded-xl px-8 py-4 md:py-5 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto">
              شروع تماشا
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <div className="relative w-full max-w-xl">
            {/* <img 
              src="/img/bg-kids.webp`"
              alt="شخصیت‌های کارتونی"
              className="w-full h-auto object-contain rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-500"
              loading="lazy"
            />
             */}
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsHeroSection;