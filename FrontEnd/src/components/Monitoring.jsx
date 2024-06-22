import React from 'react';
import profilePic from '../assets/jimmy.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ChildMonitoringRecord = () => {
  const records = [
    { id: 1, name: 'Jiemmy 0 Bulan' },
    { id: 2, name: 'Jiemmy 1 Bulan' },
    { id: 3, name: 'Jiemmy 2 Bulan' },
  ];

  return (
    <childmonitor>
      <Navbar />
    <div className="w-full h-full flex flex-col items-center bg-gray-100 py-10">
      <div className="text-2xl font-bold mb-8">Child Monitoring Record</div>
      <div className="space-y-4 w-full max-w-screen-xl">
        {records.map((record) => (
          <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow">
            <div className="flex items-center space-x-4">
              <img src={profilePic} alt="Profile" className="w-12 h-12 rounded-full" />
              <div>
                <div className="font-bold text-[#135D66]">{record.name}</div>
                <button className="text-[#135D66]">Lihat Hasil</button>
              </div>
            </div>
            <a href="/monitoring2">
            <button className="bg-[#135D66] text-white py-2 px-4 rounded">Lihat Hasil</button>
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2 mt-8">
        <button className="text-black">Prev</button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button key={page} className={`py-1 px-3 rounded-full ${page === 1 ? 'bg-[#135D66] text-white' : 'text-gray-500'}`}>
            {page}
          </button>
        ))}
        <button className="text-[#135D">Next</button>
      </div>
    </div>
    <Footer />
    </childmonitor>
  );
};

export default ChildMonitoringRecord;
