import { useState } from "react";
import { Lia500Px } from "react-icons/lia";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Movies");

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Movies", href: "#" },
    { label: "TV Shows", href: "#" },
    { label: "Pip", href: "#" },
    { label: "More", href: "#" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-slate-900 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <div className="flex flex-col">
              <h1 className="text-2xl font-medium text-slate-100">
                Movis<span className="text-rose-500">Film</span>
              </h1>
              <p className="text-xs font-semibold text-slate-400">Film Review</p>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden space-x-4 md:flex">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`px-3 py-2 text-sm transition-colors duration-200 hover:text-white lg:text-base ${
                      activeItem === item.label ? "text-rose-500" : "text-slate-300"
                    }`}
                    onClick={() => handleItemClick(item.label)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth Section */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              to="/Movie/login"
              className="text-slate-300 transition-colors duration-200 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/Movie/register"
              className="rounded-3xl bg-rose-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-rose-500"
            >
              Sign Up
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
                <a
                  href={item.href}
                  className={`block px-2 py-3 text-base transition-colors duration-200 ${
                    activeItem === item.label
                      ? "text-rose-500"
                      : "text-slate-300 hover:bg-slate-900/50"
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center justify-center space-x-4 pt-2">
            <Link
              to="/Movie/login"
              className="text-slate-300 transition-colors duration-200 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/Movie/register"
              className="rounded-2xl bg-rose-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-rose-500"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    
    </>
  );
}