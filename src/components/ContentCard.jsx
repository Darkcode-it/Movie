import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ContentCard = ({ item, type }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <Link to={`/Movie/details/${item.id}`}>
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute top-2 right-2 bg-slate-900/80 px-2 py-1 rounded-full flex items-center gap-1">
            <FaStar className="text-amber-400" />
            <span className="text-white text-sm">{item.rating}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            {type === 'movie' && <span>{item.year}</span>}
            {type === 'tv' && <span>{item.seasons} فصل</span>}
            {type === 'children' && <span>سن {item.ageGroup}</span>}
            {type === 'more' && <span>{item.category}</span>}
            <span>•</span>
            <span>{item.genre || item.category}</span>
          </div>
          <p className="text-slate-300 mt-2 text-sm line-clamp-2">{item.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard; 