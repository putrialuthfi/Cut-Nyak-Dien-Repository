import { Link } from 'react-router-dom';
import BgLayanan from '../assets/background-layanan.png';

const Layanan = () => {
  return (
    <section id='testimonials'>
      {/* Container */}
      <div className='mx-auto text-center bg-cover w-full h-full pb-10' style={{ backgroundImage: `url(${BgLayanan})` }}>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center pt-12'>
          Layanan <span className='text-[#135D66]'>Posyandu-Line</span>
        </h2>
        {/* Container Layanan */}
        <div className='flex flex-col md:flex-row justify-center items-center mx-auto mt-14 space-y-8 md:space-y-0 md:space-x-12 w-full max-w-4xl px-6 md:px-0 min-h-[320px] md:min-h-[320px]'>
          {/* Informasi Posyandu */}
          <Link to="/informasiPosyandu" className='flex flex-col items-center p-6 space-y-4 rounded-lg w-full md:w-1/3 bg-[#135D66] text-white shadow-md'>
            <img className="w-32 h-32 md:w-140 md:h-30" src="src/assets/InformasiPosyandu.png" alt="Informasi Posyandu" />
            <h5 className='text-[20px] font-semibold pt-4'>Informasi Posyandu</h5>
            <p className='text-sm text-darkGrayishBlue text-center md:text-center'>
              Temukan jadwal dan lihat kegiatan. Akses dengan mudah!
            </p>
          </Link>
          {/* Stunting Detection */}
          <Link to="/stuntingDetection" className='flex flex-col items-center p-6 space-y-4 rounded-lg w-full md:w-1/3 bg-[#135D66] text-white shadow-md'>
            <img className="w-32 h-32 md:w-140 md:h-30" src="src/assets/StuntingDetection.png" alt="Stunting Detection" />
            <h5 className='text-[20px] font-semibold pt-4'>Stunting Detection</h5>
            <p className='text-sm text-darkGrayishBlue text-center md:text-center'>
              Taklukkan stunting, jaga masa depan anak-anak. Cek sekarang!
            </p>
          </Link>
          {/* Monitoring Record */}
          <Link to="/monitoring" className='flex flex-col items-center p-6 space-y-4 rounded-lg w-full md:w-1/3 bg-[#135D66] text-white shadow-md'>
            <img className="w-32 h-32 md:w-140 md:h-30" src="src/assets/Monitoring Record.png" alt="Monitoring Record" />
            <h5 className='text-[20px] font-semibold pt-4'>Monitoring Record</h5>
            <p className='text-sm text-darkGrayishBlue text-center md:text-center'>
              Simpan jejak kesehatan dengan mudah, akses informasi dimanapun.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
