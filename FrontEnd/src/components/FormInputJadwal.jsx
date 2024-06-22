import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Navbar from "./Navbar";
import Footer from "./Footer";

const FormInputJadwal = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [waktu, setWaktu] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [kegiatan, setKegiatan] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [schedules, setSchedules] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/schedules')
      .then(response => {
        setSchedules(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSchedule = {
      tanggal: selectedDate ? selectedDate.toISOString().split('T')[0] : null,
      waktu,
      lokasi,
      kegiatan,
      deskripsi
    };

    if (editMode) {
      axios.put(`http://localhost:3000/schedules/${editId}`, newSchedule)
        .then(response => {
          setSchedules(schedules.map(schedule => schedule.id === editId ? response.data : schedule));
          resetForm();
        })
        .catch(error => {
          console.error('There was an error updating the form!', error);
        });
    } else {
      axios.post('http://localhost:3000/schedules', newSchedule)
        .then(response => {
          setSchedules([...schedules, response.data]);
          resetForm();
        })
        .catch(error => {
          console.error('There was an error submitting the form!', error);
        });
    }
  };

  const resetForm = () => {
    setSelectedDate(null);
    setWaktu('');
    setLokasi('');
    setKegiatan('');
    setDeskripsi('');
    setShowPopup(true);
    setEditMode(false);
    setEditId(null);
  };

  const handleEdit = (schedule) => {
    setSelectedDate(new Date(schedule.tanggal));
    setWaktu(schedule.waktu);
    setLokasi(schedule.lokasi);
    setKegiatan(schedule.kegiatan);
    setDeskripsi(schedule.deskripsi);
    setEditMode(true);
    setEditId(schedule.id);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/schedules/${id}`)
      .then(() => {
        setSchedules(schedules.filter(schedule => schedule.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the data!', error);
      });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-3/4 mx-auto mt-10 mb-10 border">
        <h1 className="text-2xl text-center font-bold mb-8">{editMode ? 'Edit Jadwal Posyandu' : 'Upload Jadwal Posyandu'}</h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="jadwalPsy" className="block text-left text-black mb-2">Tanggal/Jadwal Posyandu</label>
            <DatePicker
              id="jadwalPsy"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="waktu" className="text-left block mb-2">Waktu</label>
            <input
              id="waktu"
              type="text"
              value={waktu}
              onChange={e => setWaktu(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="lokasiPsy" className="text-left block mb-2">Lokasi</label>
            <input
              id="lokasiPsy"
              type="text"
              value={lokasi}
              onChange={e => setLokasi(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="kegiatanPsy" className="text-left block mb-2">Kegiatan</label>
            <input
              id="kegiatanPsy"
              type="text"
              value={kegiatan}
              onChange={e => setKegiatan(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>
        <div className="mb-8">
          <label htmlFor="deskripsi" className="text-left block mb-2">Deskripsi</label>
          <textarea
            id="deskripsi"
            value={deskripsi}
            onChange={e => setDeskripsi(e.target.value)}
            className="border p-2 rounded w-full"
            rows="4"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-[#135D66] text-white py-2 px-4 rounded-[14px] hover:bg-opacity-90">
            {editMode ? 'Update Jadwal' : 'Upload Jadwal'}
          </button>
        </div>
      </form>

      <div className="w-full gap-5 md:px-10">
        <h2 className="schedule-title text-2xl text-center font-bold mt-10 mb-6">Jadwal Kegiatan</h2>
        <table className="bg-white mb-10 rounded-lg overflow-x-auto w-full border border-[#135D66]">
          <thead className="bg-[#135D66] text-white font-semibold">
            <tr>
              <th className="py-2">Tanggal</th>
              <th className="py-2">Waktu</th>
              <th className="py-2">Lokasi</th>
              <th className="py-2">Kegiatan</th>
              <th className="py-2">Deskripsi</th>
              <th className="py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map(schedule => (
              <tr key={schedule.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{schedule.tanggal}</td>
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{schedule.waktu}</td>
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{schedule.lokasi}</td>
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{schedule.kegiatan}</td>
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">{schedule.deskripsi}</td>
                <td className="px-4 py-2 border border-[#135D66] text-sm text-gray-700">
                  <button
                    className="bg-[#76ABAE] hover:[#135D66] text-white py-1 px-3 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                    onClick={() => handleEdit(schedule)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#FF0000] hover:bg-red-500 text-white py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => handleDelete(schedule.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
            <h2 className="text-xl font-bold mb-4">Informasi Jadwal Berhasil Diupload</h2>
              <button
                onClick={closePopup}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default FormInputJadwal;