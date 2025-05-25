import { useState } from "react";
import { Lia500Px } from "react-icons/lia";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("فیلم‌ها");
  const [lang, setLang] = useState("fa");
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: lang === "fa" ? "فیلم‌ها" : "Movies", path: "/Movie/movies" },
    { label: lang === "fa" ? "سریال‌ها" : "TV Shows", path: "/Movie/tv-shows" },
    { label: lang === "fa" ? "کودک" : "Kids", path: "/Movie/children" },
    { label: lang === "fa" ? "بیشتر" : "More", path: "/Movie/more" },
  ];

  const handleLangChange = () => {
    setLang((prev) => (prev === "fa" ? "en" : "fa"));
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-slate-900 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <Link to="/Movie" className="flex flex-col hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-medium text-slate-100">
                Movis<span className="text-rose-500">Film</span>
              </h1>
              <p className="text-xs font-semibold text-slate-400">Film Review</p>
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden space-x-4 md:flex">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm transition-colors duration-200 hover:text-white lg:text-base ${
                      activeItem === item.label ? "text-rose-500" : "text-slate-300"
                    }`}
                    onClick={() => handleItemClick(item.label)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth Section */}
          <div className="hidden items-center space-x-4 md:flex">
            <button
              onClick={handleLangChange}
              className="rounded-2xl border border-amber-400 px-4 py-2 text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-200"
            >
              {lang === "fa" ? "EN" : "FA"}
            </button>
            <Link
              to="/Movie/login"
              className="text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {lang === "fa" ? "ورود" : "Login"}
            </Link>
            <Link
              to="/Movie/register"
              className="rounded-3xl bg-rose-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-rose-500"
            >
              {lang === "fa" ? "ثبت‌نام" : "Sign Up"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <TiThMenuOutline
              size={32}
              className="text-slate-400/50 transition-colors duration-200 hover:text-slate-300"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`bg-slate-800 transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="container mx-auto space-y-4 px-4 py-6">
          <ul className="space-y-2 border-b border-slate-700 pb-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`block px-2 py-3 text-base transition-colors duration-200 ${
                    activeItem === item.label
                      ? "text-rose-500"
                      : "text-slate-300 hover:bg-slate-900/50"
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center justify-center space-x-4 pt-2">
            <button
              onClick={handleLangChange}
              className="rounded-2xl border border-amber-400 px-4 py-2 text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-200"
            >
              {lang === "fa" ? "EN" : "FA"}
            </button>
            <Link
              to="/Movie/login"
              className="text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {lang === "fa" ? "ورود" : "Login"}
            </Link>
            <Link
              to="/Movie/register"
              className="rounded-2xl bg-rose-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-rose-500"
            >
              {lang === "fa" ? "ثبت‌نام" : "Sign Up"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}