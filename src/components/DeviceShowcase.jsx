import { FaLaptop, FaMobileAlt, FaGamepad, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import ErrorFallback from "./ErrorFallback";

// Static data for devices
const staticDevices = [
  {
    id: 1,
    img: "img/lop.jpg",
    title: "کامپیوتر و لپ‌تاپ"
  },
  {
    id: 2,
    img: "img/mobile.jpg",
    title: "موبایل و تبلت"
  },
  {
    id: 3,
    img: "img/famile.jpg",
    title: "سیستم‌های خانگی"
  },
  {
    id: 4,
    img: "img/hoshmand.jpg",
    title: "تلویزیون هوشمند"
  },
  {
    id: 5,
    img: "img/Game.jpg",
    title: "کنسول‌های بازی"
  }
];

const DeviceShowcase = () => {
  const [state, setState] = useState({
    devices: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setState({
        devices: staticDevices,
        isLoading: false,
        error: null
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const DeviceItem = ({ icon, title, platforms }) => (
    <li className="group flex items-start gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
      <div className="text-2xl text-rose-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {platforms.map((platform, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-slate-900/50 rounded-full text-gray-300"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </li>
  );

  if (state.error) return <ErrorFallback message={state.error} />;

  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-slate-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-rose-500 to-emerald-600 bg-clip-text text-transparent">
                تجربه چند دستگاه
              </span>
              <br />
              تماشای همزمان روی ۳ دستگاه
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              پخش همزمان با کیفیت 4K HDR روی تمام پلتفرم‌ها
            </p>

            <ul className="space-y-6">
              <DeviceItem
                icon={<FaLaptop />}
                title="کامپیوتر و لپ‌تاپ"
                platforms={['Windows 11', 'macOS Ventura', 'Chrome OS']}
              />
              <DeviceItem
                icon={<FaMobileAlt />}
                title="موبایل و تبلت"
                platforms={['Android 13', 'iOS 16', 'iPadOS 16']}
              />
              <DeviceItem
                icon={<FaGamepad />}
                title="سیستم‌های خانگی"
                platforms={['PS5', 'Xbox Series X', 'Nintendo Switch']}
              />
            </ul>

            <button
              className="inline-flex items-center gap-3 bg-rose-500 hover:bg-emerald-600
               text-white font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="خرید اشتراک"
            >
              <FaShoppingCart className="text-xl" />
              <span>خرید اشتراک ویژه</span>
            </button>
          </div>

          {/* Image Grid */}
          <div className="relative h-[500px] w-full">
            {state.isLoading ? (
              <SkeletonLoader />
            ) : (
              <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
                {state.devices.map((device, index) => (
                  <div
                    key={device.id}
                    className={`relative rounded-xl overflow-hidden transition-transform duration-300 
                      hover:z-10 ${index === 0 ? 'col-span-1 row-span-2' : 'col-span-1'
                      } ${index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'}`}
                  >
                    <img
                      src={device.img}
                      alt={device.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                      <h3 className="text-white font-semibold">{device.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;