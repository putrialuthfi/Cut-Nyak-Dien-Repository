import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../components/Footer';
// import OrtuNavbar from '../components/OrtuNavbar';

const CardInformasiPsy = ({ content }) => {
  return (
    // <informasiposyandu>
    // <Navbar />
    <div className="flex items-center justify-between w-full max-w-[1146px] h-[72px] p-6 bg-gray-100 rounded-[14px] shadow-md mb-4">
      <div className="text-gray-800">
        {content}
      </div>
      <Link to="/informasiPosyandu2">
        <button className="px-4 py-2 bg-[#135D66] text-white rounded-[14px] hover:bg-opacity-90">
          Lihat Selengkapnya
        </button>
      </Link>
    </div>
    // {/* <Footer />
    // </informasiposyandu> */}
  );
};

function App() {
  const cardContents = [
    "Posyandu Dahlia 1",
    "Posyandu Dahlia 2",
    "Posyandu Dahlia 3",
    "Posyandu Dahlia 4",
    "Posyandu Dahlia 5"
  ];

  return (
    <informasiposyandu>
      {/* <OrtuNavbar /> */}
      <Navbar />
    <div className="bg-[#f9f9f9] p-4 md:px-10">
      <header className="mb-8">
        <h3 className="text-2xl font-bold mb-2 text-left">Data Posyandu</h3>
        <h6 className="text-lg font-regular mb-8 text-left">Lokasi: Desa Sukasari, Kecamatan Serang Baru, Kabupaten Bekasi</h6>
      </header>
      <div className="flex flex-col items-center">
        {cardContents.map((content, index) => (
          <CardInformasiPsy key={index} content={content} />
        ))}
      </div>
    </div>
    <Footer />
    </informasiposyandu>
  );
}

export default App;
