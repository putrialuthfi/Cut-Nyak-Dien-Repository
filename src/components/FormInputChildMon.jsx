import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const formInputchildmon = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="flex items-center justify-center w-full bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-[646px] mb-10 mt-10">
        {/* Judul dan Subjudul */}
        <div className="mb-6 text-left">
          <h1 className="text-2xl font-bold mb-2">Form Input Data Child Monitoring Record</h1>
          <h2 className="text-lg text-black-600"><b>Nama Anak: </b>Jiemmy Pradipta Wijaya</h2>
        </div>
        <br />
        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4 max-w-[646px]">

          <label htmlFor="input2" className="text-left">Umur</label>
          <select id="input2" className="border p-2 rounded">
            <option value="">Pilih salah satu</option>
            <option value="option1">0 bulan</option>
            <option value="option2">1 bulan</option>
            <option value="option3">2 bulan</option>
          </select>
          <label htmlFor="input2" className="block text-left text-black mb-2">Tanggal Vaksin:</label>
          <DatePicker
            id="input2"
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            className="border p-2 rounded w-full"
          />

          {/* <label htmlFor="input2" className="text-left">Tanggal Vaksin</label>
          <input id="input2" type="text" className="border p-2 rounded" /> */}

          <label htmlFor="input2" className="text-left">Nama Vaksin</label>
          <select id="input2" className="border p-2 rounded">
            <option value="">Pilih salah satu</option>
            <option value="option1">Campak</option>
            <option value="option2">Polio</option>
            <option value="option3">BCG</option>
          </select>

          <label htmlFor="input2" className="text-left">Keterangan</label>
          <input id="input2" type="text" className="border p-2 rounded" />
        </div>
        <br />
        {/* Buttons */}
        <div className="flex justify-end space-x-4">
        <Link to="#">
          <button className="bg-[#135D66] text-white py-2 px-4 rounded-[14px] hover:bg-opacity-90">
            + Input Data Lain
          </button>
        </Link>
        <Link to="">
          <button className="bg-[#135D66] text-white py-2 px-4 rounded-[14px] hover:bg-opacity-90">
            Upload Data
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default formInputchildmon;