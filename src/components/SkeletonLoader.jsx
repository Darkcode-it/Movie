import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
      {/* Large skeleton item */}
      <div className="col-span-2 row-span-2 bg-slate-700 rounded-xl animate-pulse" />
      
      {/* Smaller skeleton items */}
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="col-span-1 bg-slate-700 rounded-xl animate-pulse"
        />
      ))}
    </div>
  );
};

export default SkeletonLoader; 