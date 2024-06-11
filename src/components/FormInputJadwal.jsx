import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from "./Navbar";
import '/src/App.css';
import Footer from "./Footer";

const FormInputJadwal = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleUploadClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <forminputjadwal>
    <Navbar />
    <div className="flex items-center justify-center w-full bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-[646px] mb-10 mt-10">
        {/* Judul*/}
        <div className="mb-8 text-left">
          <h1 className="text-2xl font-bold">Upload Jadwal Posyandu</h1>
        </div>
        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2 md:col-span-1 mb-4">
            <label htmlFor="jadwalPsy" className="block text-left text-black mb-2">Tanggal/Jadwal Posyandu</label>
            <DatePicker
              id="jadwalPsy"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="border p-2 rounded w-full"
              calendarClassName="custom-datepicker"
              style={{ height: '3rem' }}
            />
          </div>
          <div className="col-span-2 md:col-span-1 mb-4">
            <label htmlFor="waktu" className="text-left block mb-2">Waktu</label>
            <input id="waktu" type="text" className="border p-2 rounded w-full h-12" />
          </div>
          <div className="col-span-2 md:col-span-1 mb-4">
            <label htmlFor="lokasiPsy" className="text-left block mb-2">Lokasi</label>
            <input id="lokasiPsy" type="text" className="border p-2 rounded w-full h-12" />
          </div>
          <div className="col-span-2 md:col-span-1 mb-4">
            <label htmlFor="kegiatanPsy" className="text-left block mb-2">Kegiatan</label>
            <input id="kegiatanPsy" type="text" className="border p-2 rounded w-full h-12" />
          </div>
        </div>
        <div className="w-full h-full mb-8">
            <label htmlFor="deskripsi" className="text-left block mb-2">Deskripsi</label>
            <input id="deskripsi" type="text" className="border p-2 rounded w-full h-20" />
        </div>
        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <Link to="#">
            <button className="bg-white text-[#135D66] py-2 px-4 rounded-[14px] hover:bg-[#135D66] hover:text-white" style={{ border: '1px solid #135D66' }}>
               + Tambah Jadwal Lain
            </button>
          </Link>
          <button
            type="button"
            onClick={handleUploadClick}
            className="bg-[#135D66] text-white py-2 px-4 rounded-[14px] hover:bg-opacity-90"
          >
            Upload Jadwal
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md relative max-w-sm w-full">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
            <div className="text-center">
              <br />
              <h2 className="text-xl font-bold mb-4">Informasi Jadwal Berhasil Diupload</h2>
              <button
                onClick={closePopup}
                className="bg-[#135D66] text-white py-2 px-4 rounded hover:bg-opacity-90"
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </forminputjadwal>
  );
}

export default FormInputJadwal;