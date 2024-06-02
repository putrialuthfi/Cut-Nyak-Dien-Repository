import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '/src/App.css';

const FormInputJadwal = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
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
            <button className="bg-white text-[#135D66] py-2 px-4 rounded-[14px]  hover:bg-[#135D66] hover:text-white" style={{ border: '1px solid #135D66' }}>
               + Tambah Jadwal Lain
            </button>
          </Link>
          <Link to="/PopupInputChild">
            <button className="bg-[#135D66] text-white py-2 px-4 rounded-[14px] hover:bg-opacity-90">
              Upload Jadwal
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormInputJadwal;