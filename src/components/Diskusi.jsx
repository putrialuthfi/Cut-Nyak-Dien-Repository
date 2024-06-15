import { Link } from 'react-router-dom';
import IllustRight from '../assets/doctor.svg';
import IllustLeft from '../assets/mom.svg';

const Diskusi = () => {
  return (
    <section id='discuss' className='flex flex-col md:flex-row w-full h-auto'>
      {/* Left Section */}
      <div className='flex-1 min-h-[200px] md:min-h-[300px] flex justify-center items-center'>
        <img src={IllustRight} alt="Background Diskusi" className="max-w-full max-h-full" />
      </div>

      {/* Center Section */}
      <div className='flex-1 flex flex-col justify-center p-8 bg-white'>
        <div className='text-center md:text-left'>
        <h2 className='text-3xl font-bold text-center pt-2 justify-center text-[25px]'>Tingkatkan Kesehatan Anak</h2>
        <p className='text-[#6D737A] py-2 pb-[20px] text-center items-center'>Hubungi Kami untuk Layanan Posyandu yang <br />Ramah dan Profesional</p>
            <div className='flex justify-center'>
              <Link to='/forumDiskusi'
              className='p-3 px-6 text-white bg-[#135D66] rounded-[12px] hover:bg-[#3b939e]'
            >
              Join Forum Diskusi!
            </Link>
            </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='flex-1 min-h-[200px] md:min-h-[300px] flex justify-center items-center'>
        <img src={IllustLeft} alt="Background Diskusi" className="max-w-full max-h-full" />
      </div>
    </section>
  );
};

export default Diskusi;