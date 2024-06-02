import React from 'react';
import Footer from './Footer';
import { Link } from "react-router-dom";

const FormDiskusi = () => {
  return (
    <form>
    <div className="flex justify-center items-center w-full h-full">
      <div className="bg-white p-6 w-full mx-12 my-10">
        <h2 className="text-black text-lg mb-4 font-semibold">Judul Pertanyaan</h2>
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=""
        />
        <h2 className="text-gray-800 text-lg mb-2 pt-4">Tuliskan secara detail pertanyaan anda:</h2>
        <textarea
          className="w-full h-40 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=""
        ></textarea>
        <Link to="/forumDiskusi">
        <button className="mt-4 px-4 py-2 bg-[#135D66] text-white rounded-lg hover:bg-[#1e8896] focus:outline-none">
          Kirim Pertanyaan
        </button>
        </Link>
      </div>
    </div>
    <Footer />
    </form>
  );
};

export default FormDiskusi;
