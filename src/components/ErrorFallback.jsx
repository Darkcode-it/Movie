import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorFallback = ({ message }) => {
  return (
    <div className="w-full bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-800 rounded-xl">
          <FaExclamationTriangle className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            خطا در بارگذاری اطلاعات
          </h3>
          <p className="text-gray-400">
            {message || 'متأسفانه در بارگذاری اطلاعات مشکلی پیش آمده است. لطفاً دوباره تلاش کنید.'}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg transition-colors"
          >
            تلاش مجدد
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback; 