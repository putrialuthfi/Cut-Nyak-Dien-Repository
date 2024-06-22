import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/schedules')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full gap-5 md:px-10">
        <h2 className="schedule-title text-2xl text-center font-bold mt-10 mb-10">Informasi Jadwal Posyandu</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img
              src="src/assets/profil-dahlia1.jpeg"
              alt="Posyandu Dahlia 1"
              className="profile-image w-full object-cover"
            />
          </div>
          <div className="profile-details text-left md:w-3/4 leading-8 p-4">
            <h3 className="profile-title text-2xl font-bold mb-4">Profil Posyandu</h3>
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="pr-4 font-semibold">Nama Posyandu:</td>
                  <td>Posyandu Dahlia I</td>
                </tr>
                <tr>
                  <td className="pr-4 font-semibold">Alamat Posyandu:</td>
                  <td>Kp Ceper Karadek RT 001 RW 001 Ds. Sukasari</td>
                </tr>
                <tr>
                  <td className="pr-4 font-semibold"></td>
                  <td>
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="map-link underline">
                      Lihat selengkapnya di peta
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pr-4 font-semibold">Jumlah Kegiatan:</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td className="pr-4 font-semibold">Jumlah Kader:</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="schedule-title text-2xl text-center font-bold mt-10 mb-6">Jadwal Kegiatan</h2>
        <table className="bg-white mb-10 rounded-lg overflow-x-auto w-full border border-[#135D66]">
          <thead className="bg-[#135D66] text-white font-semibold">
            <tr>
              <th className="py-2">Tanggal</th>
              <th className="py-2">Waktu</th>
              <th className="py-2">Lokasi</th>
              <th className="py-2">Kegiatan</th>
              <th className="py-2">Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{row.tanggal}</td>
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{row.waktu}</td>
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{row.lokasi}</td>
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{row.kegiatan}</td>
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{row.deskripsi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default DataTable;