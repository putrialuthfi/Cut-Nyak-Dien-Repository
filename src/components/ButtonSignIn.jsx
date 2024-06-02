// src/components/ToggleButtons.js
import { useState } from 'react';

function Button({ activeButton, setActiveButton }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-7">
        <button
          onClick={() => setActiveButton('parent')}
          className={`text-header3 font-bold w-full flex justify-center items-center px-4 py-2 rounded-tl-lg rounded-bl-lg focus:outline-none ${activeButton === 'parent' ? 'bg-primary text-white' : 'bg-third text-primary'}`}
          style={{ width: '190px', height: '48px' }}>
          Orangtua
        </button>

        <button
          onClick={() => setActiveButton('admin')}
          className={` text-header3 font-bold flex justify-center items-center px-4 py-2 rounded-tr-lg rounded-br-lg focus:outline-none ${activeButton === 'admin' ? 'bg-primary text-white' : 'bg-third text-primary' }`}
          style={{ width: '190px', height: '48px' }}>
          Admin
        </button>
      </div>
     </div>
  );
}

export default Button;