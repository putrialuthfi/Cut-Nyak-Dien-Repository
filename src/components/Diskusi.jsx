import { Link } from 'react-router-dom';
import BgDiskusi from '../assets/background-diskusi.png';

const Diskusi = () => {
  return (
    <section id='testimonials'>
      {/* Container */}
      <div className='px-5 mx-auto text-center bg-cover w-[1113px] h-[275px]' style={{backgroundImage: `url(${BgDiskusi})`}}>
        {/* Heading */}
        <h2 className='text-4xl font-bold text-center pt-12 justify-center text-[25px]'>Tingkatkan Kesehatan Anak</h2>
        <p className='text-[#6D737A] py-0 text-center items-center pb-[40px]'>Hubungi Kami untuk Layanan Posyandu yang Ramah dan Profesional</p>
        <Link
              to='/forumDiskusi'
              className='p-3 px-6 pt-2 text-white bg-[#135D66] rounded-md baseline hover:bg-[#3b939e]'
            >
              Join Forum Diskusi!
            </Link>
      </div>
    </section>
  );
};

export default Diskusi;