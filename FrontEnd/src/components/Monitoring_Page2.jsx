import React from 'react';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const Monitoring2 = () => {
  return (
    <monitoring2>
    <Navbar />
    <div className="w-full h-full flex justify-center items-center py-4 px-10">
      <div className="bg-white p-6 w-full ">
        <h1 className="text-xl font-bold mb-5 text-center">Child Monitoring Record</h1>
        <div className="mb-4">
          <p><strong>Nama Anak :</strong> Jiemmy Pradipta Wijaya</p>
          <p><strong>Umur :</strong> 0 Bulan</p>
        </div>
        <table className="min-w-full bg-[white] border border-gray-300">
          <thead>
            <tr>
              <th className="py-5 px-4 border-b text-white bg-[#135D66]">Tanggal Imunisasi</th>
              <th className="py-5 px-4 border-b text-white bg-[#135D66]">Vaksin yang Sudah Diberikan</th>
              <th className="py-5 px-4 border-b text-white bg-[#135D66]">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-5 px-4 border-b">10 Mei 2024</td>
              <td className="py-2 px-4 border-b">
                <div className="inline-block bg-[#76ABAE] text-white px-2 py-1 rounded mr-2">Hepatitis B</div>
                <div className="inline-block bg-[#76ABAE] text-white px-2 py-1 rounded">Polio</div>
              </td>
              <td className="py-2 px-4 border-b">Perkembangan baik dan normal</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">19 September 2024</td>
              <td className="py-2 px-4 border-b">
                <div className="inline-block bg-[#76ABAE] text-white px-2 py-1 rounded">BCG</div>
              </td>
              <td className="py-2 px-4 border-b">Hasil pengukuran berat badan : 3.4 kg</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
            <Link to="/monitoring">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 mt-4">
            Halaman Sebelumnya
          </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </monitoring2>
  );
};

export default Monitoring2;
