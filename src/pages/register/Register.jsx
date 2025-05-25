import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate form
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('لطفا تمام فیلدها را پر کنید');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('رمز عبور و تأیید آن مطابقت ندارند');
      return;
    }

    try {
      // Here you would typically make an API call to register the user
      // For now, we'll just simulate a successful registration
      console.log('Registration data:', formData);
      
      // Navigate to dashboard after successful registration
      navigate('/Movie/dashboard');
    } catch (err) {
      setError('خطا در ثبت‌نام. لطفا دوباره تلاش کنید');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium text-center text-slate-100">
          ثبت‌نام در <span className="text-rose-500">MovisFilm</span>
        </h2>
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-100 rounded-md">
            {error}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-300">
              نام کاربری
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-sm bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
              placeholder="یک نام کاربری انتخاب کنید"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-sm bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300">
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-sm bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
              placeholder="یک رمز عبور انتخاب کنید"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300">
              تأیید رمز عبور
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-sm bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
              placeholder="رمز عبور را دوباره وارد کنید"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
          >
            ثبت‌نام
          </button>
        </form>
        <p className="text-sm text-center text-slate-400">
          حساب کاربری دارید؟{' '}
          <Link
           to="/Movie/login" 
           className="text-rose-500 hover:underline transition-colors duration-200">
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;