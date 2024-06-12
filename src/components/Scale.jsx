// src/components/Scale.js

import React, { useState } from 'react';

const Scale = ({ age, initialHeight }) => {
  const minHeight = 0; // tinggi minimum dalam cm untuk usia 2 tahun
  const maxHeight = 300; // tinggi maksimum dalam cm untuk usia 2 tahun
  const [height, setHeight] = useState(initialHeight);
  
  const normalizedHeight = Math.min(Math.max(height, minHeight), maxHeight);
  const percentage = ((normalizedHeight - minHeight) / (maxHeight - minHeight)) * 100;

  const handleDrag = (e) => {
    const rect = e.target.parentNode.getBoundingClientRect();
    const newPercentage = ((e.clientX - rect.left) / rect.width) * 100;
    const newHeight = minHeight + ((newPercentage / 100) * (maxHeight - minHeight));
    setHeight(newHeight);
  };

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <div className="flex justify-between font-bold text-lg mb-2">
        <span>Umur {age} Tahun</span>
        <span>Tinggi (cm) {Math.round(height)}</span>
      </div>
      <div className="relative h-4 rounded-full overflow-hidden bg-gray-300">
        <div className="absolute inset-0 bg-red-500" style={{ width: '20%' }}></div>
        <div className="absolute inset-0 bg-yellow-500" style={{ width: '60%', left: '20%' }}></div>
        <div className="absolute inset-0 bg-green-500" style={{ width: '20%', left: '80%' }}></div>
        <div
          className="absolute h-4 w-4 bg-black rounded-full -top-1 cursor-pointer"
          style={{ left: `calc(${percentage}% - 8px)` }}
          draggable="true"
          onDrag={(e) => e.preventDefault()} // This is to prevent default dragging behavior
          onDragEnd={handleDrag}
        ></div>
      </div>
    </div>
  );
};

export default Scale;
