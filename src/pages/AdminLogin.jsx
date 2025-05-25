import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // چک کردن وضعیت لاگین در هنگام لود صفحه
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (isLoggedIn) {
      navigate('/Movie/admin');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // پاک کردن خطای قبلی
    
    // در حالت واقعی، این اطلاعات باید از سرور دریافت شود
    const adminEmail = 'darkcodeit@protonmail.com';
    const adminPassword = 'admin123';

    console.log('Login attempt:', { email, password });

    if (email === adminEmail && password === adminPassword) {
      console.log('Login successful');
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/Movie/admin');
    } else {
      console.log('Login failed');
      setError('ایمیل یا رمز عبور اشتباه است');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>ورود به پنل ادمین</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ایمیل:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="darkcodeit@protonmail.com"
            />
          </div>
          <div className="form-group">
            <label>رمز عبور:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="admin123"
            />
          </div>
          <button type="submit" className="login-button">ورود</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 