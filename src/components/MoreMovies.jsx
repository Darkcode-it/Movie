import React from 'react';
import { moreData } from '../data/mockData';
import ContentCard from './ContentCard';

const MoreMovies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">بیشتر</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {moreData.map((item) => (
          <ContentCard key={item.id} item={item} type="more" />
        ))}
      </div>
    </div>
  );
};

export default MoreMovies; 