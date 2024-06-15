import React from 'react';
import Footer from './Footer';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const FormDiskusi = () => {
  return (
    <form className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-100 p-10">
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg w-full">
          <h2 className="text-black text-lg mb-2">Judul Pertanyaan</h2>
          <input
            type="text"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
          />
          <h2 className="text-black text-lg mb-2">Tuliskan secara detail pertanyaan anda:</h2>
          <textarea
            className="w-full h-60 px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
          ></textarea>
          <div className="flex justify-end">
            <Link to="/forumDiskusi">
              <button className="px-4 py-2 bg-[#135D66] text-white rounded-lg hover:bg-[#1e8896] focus:outline-none">
                Kirim Pertanyaan
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </form>
  );
};

export default FormDiskusi;