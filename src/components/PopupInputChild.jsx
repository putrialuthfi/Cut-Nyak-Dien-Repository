// src/components/PopupInputChild.jsx
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const PopupInputChild = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button 
        onClick={openPopup} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Open Pop-up
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full relative">
            <button 
              onClick={closePopup} 
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Form Input Data Child Monitoring Record</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="umur" className="block mb-2">Umur</label>
                <select id="umur" className="border p-2 rounded w-full h-12">
                  <option value="">Pilih salah satu</option>
                  <option value="0">0 bulan</option>
                  <option value="1">1 bulan</option>
                  <option value="2">2 bulan</option>
                </select>
              </div>
              <div>
                <label htmlFor="tanggalVaksin" className="block mb-2">Tanggal Vaksin</label>
                <input 
                  type="date"
                  id="tanggalVaksin"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="border p-2 rounded w-full h-12"
                />
              </div>
              <div>
                <label htmlFor="namaVaksin" className="block mb-2">Nama Vaksin</label>
                <select id="namaVaksin" className="border p-2 rounded w-full h-12">
                  <option value="">Pilih salah satu</option>
                  <option value="Campak">Campak</option>
                  <option value="Polio">Polio</option>
                  <option value="BCG">BCG</option>
                </select>
              </div>
              <div>
                <label htmlFor="keterangan" className="block mb-2">Keterangan</label>
                <input id="keterangan" type="text" className="border p-2 rounded w-full h-12" />
              </div>
            </form>
            <div className="flex justify-end space-x-4 mt-4">
              <button 
                onClick={closePopup} 
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button 
                onClick={closePopup} 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupInputChild;
