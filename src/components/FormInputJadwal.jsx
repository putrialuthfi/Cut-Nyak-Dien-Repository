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
        {/* Judul dan Subjudul */}
        <div className="mb-6 text-left">
          <h1 className="text-2xl font-bold mb-6">Upload Jadwal Posyandu</h1>
        </div>
        {/* Table */}
        <div className="rounded-lg overflow-hidden">
        <table className="min-w-full h-full border-collapse border-2 border-[#135D66] text-center mb-10">
            <tbody>
                <tr className="bg-[#135D66] text-white">
                    <td className="py-2">Hari/Tanggal</td>
                    <td className="py-2">Waktu</td>
                    <td className="py-2">Lokasi</td>
                    <td className="py-2">Kegiatan</td>
                    <td className="py-2">Deskripsi</td>
                </tr>
                <tr>
                  <td className="border-2 border-[#76ABAE] h-16 p-2"></td>
                  <td className="border-2 border-[#76ABAE] h-16 p-2"></td>
                  <td className="border-2 border-[#76ABAE] h-16 p-2"></td>
                  <td className="border-2 border-[#76ABAE] h-16 p-2"></td>
                  <td className="border-2 border-[#76ABAE] h-16 p-2"></td>
                </tr>
            </tbody>
        </table>
        </div>
        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <Link to="#">
            <button className="bg-white text-[#135D66] py-2 px-4 rounded-[14px]  hover:bg-[#135D66] hover:text-white" style={{ border: '1px solid #135D66' }}>
               + Tambah Jadwal Lain
            </button>
          </Link>
          <Link to="#">
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