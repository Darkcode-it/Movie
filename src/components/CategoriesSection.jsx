import React from 'react';
import { FaLaptop, FaMobileAlt, FaGamepad } from "react-icons/fa";
import { MdBrowserUpdated } from "react-icons/md";

const CategoriesSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-sm">
      {/* بخش کمپیوتر و ایمنی */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">کمپیوتر و ایمنی</h2>
        <ul className="list-disc list-inside space-y-2">
          {['Welcome PC', 'Include', 'Connect OS'].map((item, idx) => (
            <li key={idx} className="text-gray-600 hover:text-blue-600 transition-colors">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* بخش جوانان و ثابت */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">جوانان و ثابت</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Animal Phone & Tables', 'Woven and Ball', 'Amazon Fire Tablets'].map((item, idx) => (
            <div key={idx} className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* بخش تصویرهای برای */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">تصویرهای برای</h2>
        <div className="flex flex-wrap gap-4">
          {['Xbox Game & 2', 'Xbox Bank & 2', 'PGA', 'PHP'].map((item, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;