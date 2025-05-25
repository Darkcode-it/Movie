import React from 'react';
import { moviesData } from '../data/mockData';
import ContentCard from '../components/ContentCard';

const Movies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">فیلم‌ها</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {moviesData.map((movie) => (
          <ContentCard key={movie.id} item={movie} type="movie" />
        ))}
      </div>
    </div>
  );
};

export default Movies; 