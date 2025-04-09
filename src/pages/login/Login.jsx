import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium text-center text-slate-100">
          ورود به <span className="text-rose-500">MovisFilm</span>
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              ایمیل یا نام کاربری
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 mt-1 text-sm bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
              placeholder="ایمیل یا نام کاربری خود را وارد کنید"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300">
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 text-sm bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
          >
            ورود
          </button>
        </form>
        <p className="text-sm text-center text-slate-400">
          حساب کاربری ندارید؟{' '}
          <Link 
          to="/Movie/register" 
          className="text-rose-500 hover:underline transition-colors duration-200">
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;