import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState({
    subscription: {
      status: 'active',
      expiryDate: '2024-12-31'
    },
    favoriteMovies: []
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Here you would typically fetch user data from your backend
    // For now, we'll use mock data
    const mockFavoriteMovies = [
      { id: 1, title: 'Movie 1', poster: 'https://via.placeholder.com/150' },
      { id: 2, title: 'Movie 2', poster: 'https://via.placeholder.com/150' },
    ];
    setUserData(prev => ({ ...prev, favoriteMovies: mockFavoriteMovies }));
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fa-IR');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="w-full max-w-6xl p-8 space-y-6">
        <div className="dashboard-header">
          <h1 className="text-3xl font-medium text-center text-slate-100">
            پنل کاربری <span className="text-rose-500">MovisFilm</span>
          </h1>
        </div>

        <div className="subscription-section">
          <h2 className="text-2xl font-medium text-slate-100 mb-4">وضعیت اشتراک</h2>
          <div className="subscription-info">
            <p className="text-slate-300">
              وضعیت: <span className={userData.subscription.status === 'active' ? 'text-green-500' : 'text-red-500'}>
                {userData.subscription.status === 'active' ? 'فعال' : 'غیرفعال'}
              </span>
            </p>
            <p className="text-slate-300">تاریخ انقضا: {formatDate(userData.subscription.expiryDate)}</p>
          </div>
        </div>

        <div className="favorites-section">
          <h2 className="text-2xl font-medium text-slate-100 mb-4">فیلم‌های مورد علاقه</h2>
          <div className="favorites-grid">
            {userData.favoriteMovies.map(movie => (
              <div key={movie.id} className="favorite-movie-card">
                <img src={movie.poster} alt={movie.title} />
                <h3 className="text-slate-100">{movie.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 