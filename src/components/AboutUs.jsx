import React from 'react';
import groupPhoto from '../assets/aboutus.png';
import Footer from "./Footer";
import OrtuNavbar from '../components/OrtuNavbar';

const AboutUs = () => {
  return (
    <aboutus>
      <OrtuNavbar />
    <div className="w-full h-full flex flex-wrap place-items-center pt-[100px] pb-[100px] px-[100px]">
    <div className="flex flex-col lg:flex-row items-center justify-between p-8">
      <div className="flex justify-center lg:w-1/2">
        <img
          src={groupPhoto}
          alt="Group of people"
          className="rounded-lg w-full lg:max-w-md"
        />
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2 lg:ml-8 mx-auto justify-center">
      <img className="w-auto h-[50px] mx-auto my-5" src="src/assets/main-logo-2.png" alt="Logo Posyandu-Line" />
        <h1 className="text-[20px] text-wrap font-semibold text-gray-800 mb-4 text-center">
          Membantu Orangtua Menjaga Kesehatan Sang Buah Hati Tercinta.
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Kami menyediakan layanan website untuk memudahkan Anda dalam{' '}
          <span className="font-semibold text-gray-800">mengakses jadwal pelayanan Posyandu</span> serta membantu Anda dalam memahami dan{' '}
          <span className="font-semibold text-gray-800">memantau tumbuh kembang</span> sang buah hati.
        </p>
      </div>
    </div>
    </div>
    <Footer />
    </aboutus>
  );
};

export default AboutUs;
