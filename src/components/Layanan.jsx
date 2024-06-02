import { Link } from 'react-router-dom';
import BgLayanan from '../assets/background-layanan.png';

const Layanan = () => {
  return (
    <section id='testimonials'>
      {/* Container */}
      <div className='mx-auto text-center bg-cover w-full h-full pb-10' style={{backgroundImage: `url(${BgLayanan})`}}>
        {/* Heading */}
        <h2 className='text-4xl font-bold text-center pt-12'>Layanan <span className='text-[#135D66]'>Posyandu-Line</span></h2>
        {/* Container Layanan */}
        <div className='flex mx-auto justify-center mt-14 md:flex-row md:space-x-12 h-[320px] w-[850px]'>
          {/* Informasi Posyandu */}
          <button className='flex flex-col items-center p-6 space-y-1 rounded-lg md:w-1/3 text-white bg-[#135D66] '>
          <img className="w-140 h-30" src="src/assets/InformasiPosyandu.png"></img>
          <Link to="/informasiPosyandu">
            <h5 className='text-[20px] font-bold pt-8 text-nowrap pb-3'>Informasi Posyandu</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Temukan jadwal dan lihat kegiatan. Akses dengan mudah!
            </p>
            </Link>
          </button>

          {/* Stunting Detection */}
          <button className='flex flex-col items-center p-6 space-y-1 rounded-lg md:w-1/3 text-white bg-[#135D66] '>
          <img className="w-140 h-30" src="src/assets/StuntingDetection.png"></img>
          <Link to="/stuntingDetection">
            <h5 className='text-[20px] font-bold pt-8 pb-3 text-nowrap'>Stunting Detection</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Taklukkan stunting, jaga masa depan anak-anak. Cek sekarang!
            </p>
            </Link>
          </button>

          {/* Monitoring Record */}
          <button className='flex flex-col items-center p-6 space-y-1 rounded-lg md:w-1/3 text-white bg-[#135D66] '>
          <img className="w-140 h-30" src="src/assets/Monitoring Record.png"></img>
          <Link to="/monitoring">
            <h5 className='text-[20px] font-bold pt-8 pb-3 text-nowrap'>Monitoring Record</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Simpan jejak kesehatan dengan mudah, akses informasi penting kapan saja.
            </p>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Layanan;