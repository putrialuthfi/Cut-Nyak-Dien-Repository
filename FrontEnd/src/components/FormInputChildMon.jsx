import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from "./Navbar";
import '/src/App.css';
import Footer from "./Footer";

const FormInputChildMon = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleUploadClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <forminputchildmon>
    <Navbar />
    <div className="flex items-center justify-center w-full bg-gray-100">
      <form className="bg-white p-9 rounded shadow-md w-full max-w-[646px] mb-10 mt-10">
        {/* Judul dan Subjudul */}
        <div className="mb-6 text-left">
          <h1 className="text-2xl font-bold mb-2">Form Input Data Child Monitoring Record</h1>
          <h2 className="text-lg text-black-600"><b>Nama Anak: </b>Jiemmy Pradipta Wijaya</h2>
        </div>
        <br />
        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2 md:col-span-1 mb-4">
            <label htmlFor="umur" className="text-left block mb-2">Umur</label>
            <select id="umur" className="border p-2 rounded w-full h-12">
              <option value="">Pilih salah satu</option>
              <option value="0">0 bulan</option>
              <option value="1">1 bulan</option>
              <option value="2">2 bulan</option>
              <option value="3">3 bulan</option>
              <option value="4">4 bulan</option>
              <option value="5">5 bulan</option>
              <option value="6">6 bulan</option>
              <option value="7">7 bulan</option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1 mb-4">
            <label htmlFor="tglImunisasi" className="block text-left text-black mb-2">Tanggal Imunisasi</label>
            <DatePicker
              id="tglImunisasi"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="border p-2 rounded w-full"
              calendarClassName="custom-datepicker"
              style={{ height: '3rem' }}
            />
          </div>
          <div className="col-span-2 md:col-span-1 mb-4">
            <label htmlFor="namaImunisasi" className="text-left block mb-2">Nama Imunisasi</label>
            <select id="namaImunisasi" className="border p-2 rounded w-full h-12">
              <option value="">Pilih salah satu</option>
              <option value="Campak">Campak</option>
              <option value="Polio">Polio</option>
              <option value="BCG">BCG</option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1 mb-4">
            <label htmlFor="keterangan" className="text-left block mb-2">Keterangan</label>
            <input id="keterangan" type="text" className="border p-2 rounded w-full h-12" />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <Link to="#">
            <button className="bg-white text-[#135D66] py-2 px-4 rounded-[14px] hover:bg-[#135D66] hover:text-white" style={{ border: '1px solid #135D66' }}>
               + Tambah Data Lain
            </button>
          </Link>
          <button
            type="button"
            onClick={handleUploadClick}
            className="bg-[#135D66] text-white py-2 px-4 rounded-[14px] hover:bg-opacity-90"
          >
            Upload Data
          </button>
        </div>
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md relative max-w-sm w-full">
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                &times;
              </button>
              <div className="text-center">
                <br />
                <h2 className="text-xl font-bold mb-4">Data Child Monitoring Record Berhasil Diupload</h2>
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
      </form>
    </div>
    <Footer />
    </forminputchildmon>
  );
}

export default FormInputChildMon;