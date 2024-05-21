import { Link } from 'react-router-dom';
import BgLayanan from '../assets/background-layanan.png';

const Layanan = () => {
  return (
    <section id='testimonials'>
      {/* Container */}
      <div className='px-5 mx-auto text-center bg-cover w-[1519px] h-[553px]' style={{backgroundImage: `url(${BgLayanan})`}}>
        {/* Heading */}
        <h2 className='text-4xl font-bold text-center pt-12'>Layanan <span className='text-[#135D66]'>Posyandu-Line</span></h2>
        {/* Container Layanan */}
        <div className='flex justify-center mt-14 md:flex-row md:space-x-12 h-[320px] w-[850px] ml-[320px]'>
          {/* Informasi Posyandu */}
          <button className='flex flex-col items-center p-6 space-y-1 rounded-lg md:w-1/3 text-white bg-[#135D66] '>
          <img class="w-140 h-30" src="src/assets/InformasiPosyandu.png"></img>
            <h5 className='text-[20px] font-bold pt-8'>Informasi Posyandu</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Temukan jadwal dan lihat kegiatan. Akses dengan mudah!
            </p>
          </button>

          {/* Stunting Detection */}
          <button className='flex flex-col items-center p-6 space-y-1 rounded-lg md:w-1/3 text-white bg-[#135D66] '>
          <img class="w-140 h-30" src="src/assets/StuntingDetection.png"></img>
            <h5 className='text-[20px] font-bold pt-8'>Stunting Detection</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Taklukkan stunting, jaga masa depan anak-anak. Cek sekarang!
            </p>
          </button>

          {/* Monitoring Record */}
          <button className='flex flex-col items-center p-6 space-y-1 rounded-lg md:w-1/3 text-white bg-[#135D66] '>
          <img class="w-140 h-30" src="src/assets/Monitoring Record.png"></img>
            <h5 className='text-[20px] font-bold pt-8'>Monitoring Record</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Simpan jejak kesehatan dengan mudah, akses informasi penting kapan saja.
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Layanan;