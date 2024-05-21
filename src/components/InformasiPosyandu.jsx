import React from 'react';

const Card = ({ content }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1146px] h-[72px] p-6 bg-gray-100 rounded-[14px] shadow-md mb-4">
      <div className="text-gray-800">
        {content}
      </div>
      <button className="px-4 py-2 bg-[#135D66] text-white rounded-[14px] hover:bg-opacity-90">
        Lihat Selengkapnya
      </button>
    </div>
  );
}

export default Card;
