import { CiSearch } from "react-icons/ci";

export default function SearchBox() {
  return (
    <section className="container mx-auto mt-8 px-4 md:px-6 lg:mt-12">
      <div className="relative group">
        <label htmlFor="searchInput" className="sr-only">
          جستجوی فیلم
        </label>
        
        <input
          id="searchInput"
          type="text"
          placeholder="🎬 چه فیلمی دنبالش میگردید؟"
          className="w-full bg-slate-800 text-slate-300 placeholder-slate-500 
                     text-lg md:text-xl lg:text-2xl
                     px-6 py-4 md:py-5
                     rounded-xl border-2 border-slate-700
                     focus:outline-none focus:border-rose-600 focus:ring-2 
                     focus:ring-rose-600/30
                     transition-all duration-300
                     hover:border-slate-600"
          aria-label="ورودی جستجوی فیلم"
        />
        
        <CiSearch 
          className="absolute right-4 top-1/2 -translate-y-1/2
                    w-7 h-7 md:w-8 md:h-8
                    text-slate-500 group-focus-within:text-rose-600
                    transition-colors duration-300
                    pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}