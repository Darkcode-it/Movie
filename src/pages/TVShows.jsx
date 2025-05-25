import React from 'react';
import { tvShowsData } from '../data/mockData';
import ContentCard from '../components/ContentCard';

const TVShows = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">سریال‌ها</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tvShowsData.map((show) => (
          <ContentCard key={show.id} item={show} type="tv" />
        ))}
      </div>
    </div>
  );
};

export default TVShows; 