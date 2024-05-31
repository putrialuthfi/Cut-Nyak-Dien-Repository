import React from 'react';
import '../App.css';

const informasiPosyandu2 = () => {
  return (
    <div className="profile-section w-full">
      <div className="flex mt-10">
        <div className="w-1/2 flex justify-center">
          <img
            src="src/assets/profil-dahlia1.jpeg"
            alt="Posyandu Dahlia 1"
            className="profile-image w-full h-auto"
          />
        </div>
        <div className="profile-details text-left w-1/2 leading-8 p-4">
          <h2 className="profile-title text-2xl font-bold mb-4">Profil Posyandu</h2>
          <p><strong>Nama Posyandu:</strong> Posyandu Dahlia 1</p>
          <p><strong>Alamat Posyandu:</strong> Kp Ceper Karadek RT 001 RW 001 Ds. Sukasari, Kec. Serang Baru</p>
          <p><strong>Jumlah Kegiatan:</strong> 3</p>
          <p><strong>Jumlah Kader:</strong> 10</p>
        </div>
      </div>
      <div className="map-section text-left">
        <h2 className="map-title text-left">Detail Lokasi Posyandu</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.16862159823!2d106.68942963444113!3d-6.229728174304886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6841e4c046b34d%3A0x60f9b7e9efda1ae0!2sBekasi%2C%20West%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1620123456789!5m2!1sen!2sus"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="map-link underline">
          Lihat selengkapnya di peta
        </a>
      </div>
     </div> 
  );
};


export default informasiPosyandu2;
