import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/banner-homepage.png';

const Home = () => {
  return (
    <section id='home'>
      {/* Flex Container */}
      <div className='w-full flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row h-[532px] bg-cover' style={{backgroundImage: `url(${BackgroundImage})`}}>
        {/* Left Item */}
        <div className='flex flex-col mb-22 space-y-6 md:w-1/2'>
          <h1 className='max-w-xl text-[55px] font-bold text-center md:text-left text-[#135D66] pl-11'>
            Stunting Detection
          </h1>
          <p className='max-w-xl text-center font-semibold text-[20px] md:text-left text-[#135D66] pl-11'>
          <span className='text-[35px] font-bold text-[#135D66]'>Ayo!</span> Segera deteksi stunting pada anak anda. Dan gunakan fitur <span className='text-[30px] font-bold text-[#135D66]'>Child Monitoring Record</span> untuk pantau perkembangan tumbuh kembang anak anda dengan mudah tanpa ribet.
          </p>
          <div className='flex justify-center md:justify-start pl-11'>
            <Link
              to='/stuntingDetection'
              className='p-3 px-6 pt-2 text-white bg-[#135D66] rounded-md baseline hover:bg-[#3b939e]'
            >
              Coba Sekarang!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;