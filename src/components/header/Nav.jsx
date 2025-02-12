
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

export default function Nav() {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [activeItem, setActiveItem] = useState(null); // State برای ذخیره آیتم فعال

    const handleItemClick = (item) => {
        setActiveItem(item); // تنظیم آیتم فعال
        setisOpenMenu(false); // بستن منو پس از کلیک (اختیاری)
    };

    return (
        <>
            <nav className="flex items-center text-slate-300 p-4 bg-slate-900">
                <div className="flex items-center">
                    <h1 className="text-2xl mr-12">
                        Movis <span className="text-rose-600 font-semibold">Film</span>
                        <p className="text-slate-600 text-xs text-center font-semibold">Film Review</p>
                    </h1>
                    <ul className="hidden md:flex gap-4 uppercase text-sm lg:text-base">
                        <li className="hover:text-white">
                            <a href="#" className="hover:border-1 rounded-md p-1">Movies</a>
                        </li>
                        <li className="hover:text-white">
                            <a href="#" className="hover:border-1 rounded-md p-1">TV shows</a>
                        </li>
                        <li className="hover:text-white">
                            <a href="#" className="hover:border-1 rounded-md p-1">Pip</a>
                        </li>
                        <li className="hover:text-white">
                            <a href="#" className="hover:border-1 rounded-md p-1">More</a>
                        </li>
                    </ul>
                </div>
                <div className="ml-auto">
                    <ul className="hidden md:flex gap-4 items-center uppercase text-sm lg:text-base">
                        <li className="cursor-pointer hover:text-white">
                            <a href="#">Login</a>
                        </li>
                        <li className="bg-rose-700 hover:bg-rose-500 cursor-pointer px-6 py-3 rounded-3xl text-white">
                            <a href="#">Sign up</a>
                        </li>
                    </ul>
                    <button className="md:hidden" onClick={() => setisOpenMenu(!isOpenMenu)}>
                        <TiThMenuOutline size="40" color="rgba(154, 159, 170, 0.5)" />
                    </button>
                </div>
            </nav>
            <div
                className={`bg-slate-900 text-center overflow-hidden transition-all duration-500 ${isOpenMenu ? "h-full py-4 border-t-2 border-slate-800" : "h-0 py-0 border-none"
                    }`}
                    style={{height: isOpenMenu ? 330: 0}}
            >
                <ul className="flex flex-col gap-1 text-xl">
                    <li>
                        <a
                            href="#"
                            className={`block py-2 hover:bg-slate-800 hover:text-white transition-all duration-300 ${activeItem === "Movies" ? "text-rose-600" : "text-slate-300"
                                }`}
                            onClick={() => handleItemClick("Movies")}
                        >
                            Movies
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`block py-2 hover:bg-slate-800 hover:text-white transition-all duration-300 ${activeItem === "TV shows" ? "text-rose-600" : "text-slate-300"
                                }`}
                            onClick={() => handleItemClick("TV shows")}
                        >
                            TV shows
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`block py-2 hover:bg-slate-800 hover:text-white transition-all duration-300 ${activeItem === "Pip" ? "text-rose-600" : "text-slate-300"
                                }`}
                            onClick={() => handleItemClick("Pip")}
                        >
                            Pip
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`block py-2 hover:bg-slate-800 hover:text-white transition-all duration-300 ${activeItem === "More" ? "text-rose-600" : "text-slate-300"
                                }`}
                            onClick={() => handleItemClick("More")}
                        >
                            More
                        </a>
                    </li>
                </ul>
             
                  <ul className=" mt-5 gap-4 flex justify-center items-center border-t-1 border-slate-700 pt-4">
                    <li className="text-xl"><a href=""></a>Login</li>
                    <li  className="bg-rose-600 rounded-2xl py-2 px-4"><a href=""></a>Sing Up</li>
                  </ul>
           
            </div>
        </>
    );
}