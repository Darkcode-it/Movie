import { FaInstagram, FaTelegram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-12 border-t border-gray-800 rtl">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
        <div className="flex flex-col">
              <h1 className="text-2xl font-medium text-slate-100">
                Movis<span className="text-rose-500">Film</span>
              </h1>
              <p className="text-xs font-semibold text-slate-400">Film Review</p>
            </div>
            
          <p className="text-sm text-gray-400">تماشای آنلاین فیلم و سریال با بهترین کیفیت</p>
        </div>
        {/* Links */}
        <ul className="flex flex-col md:flex-row gap-4 text-sm font-medium">
          <li><a href="#" className="hover:text-amber-400 transition">درباره ما</a></li>
          <li><a href="#" className="hover:text-amber-400 transition">سوالات متداول</a></li>
          <li><a href="#" className="hover:text-amber-400 transition">تماس با ما</a></li>
          <li><a href="#" className="hover:text-amber-400 transition">قوانین و مقررات</a></li>
        </ul>
        {/* Socials */}
        <div className="flex gap-4 text-xl">
          <a href="https://t.me/Darkcodeit" className="hover:text-amber-400 transition" aria-label="تلگرام"><FaTelegram /></a>
          <a href="https://github.com/Darkcode-it" className="hover:text-amber-400 transition" aria-label="گیت‌هاب"><FaGithub /></a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
      <h1>
      به عنوان یک توسعه‌دهنده متعهد به فلسفه اپن سورس، همواره در توسعه و بهبود پروژه‌های متن‌باز مشارکت فعال داشته‌ام. باور دارم که اشتراک دانش و همکاری جمعی نه تنها به پیشرفت فناوری کمک می‌کند، بلکه جامعه‌ای پویا و فراگیر را شکل می‌دهد. </h1>
      </div>
    </footer>
  );
} 