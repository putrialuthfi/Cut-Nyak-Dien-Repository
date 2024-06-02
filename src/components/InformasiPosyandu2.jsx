import React from 'react';
import '../App.css';

const informasiPosyandu2 = () => {
  return (
    <div className="profile-section w-full gap-5 md:px-10">
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
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="pr-4">Nama Posyandu: </td>
                <td>Posyandu Dahlia I</td>
              </tr>
              <tr>
                <td className="pr-4">Alamat Posyandu: </td>
                <td>Kp Ceper Karadek RT 001 RW 001 Ds. Sukasari</td>
              </tr>
              <tr>
                <td className="pr-4"></td>
                <td>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.16862159823!2d106.68942963444113!3d-6.229728174304886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6841e4c046b34d%3A0x60f9b7e9efda1ae0!2sBekasi%2C%20West%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1620123456789!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    >
                 </iframe>
                </td>
              </tr>
              <tr>
                <td className="pr-4"></td>
                <td>
                  <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="map-link underline">
                    Lihat selengkapnya di peta
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">Jumlah Kegiatan:</td>
                <td>3</td>
              </tr>
              <tr>
                <td className="pr-4">Jumlah Kader:</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="schedule-section text-center">
        <h2 className="schedule-title text-center">Jadwal Kegiatan</h2>  
        <div className="flex flex-wrap justify-center space-x-8 mt-8">

        {/* card 1 */}
        <div className="w-80 h-full p-4 max-w-sm rounded-3xl overflow-hidden shadow-lg border border-[#76ABAE]">
          <div className="p-4">
            <h3><strong>Konsultasi Gizi dan Pemberian Suplemen</strong></h3>
            <p className="text-sm text-left mt-4">
            Memberikan informasi gizi serta pemberian suplemen nutrisi untuk mendukung pertumbuhan dan perkembangan optimal anak.
            </p>
            <div className="text-sm text-left mt-4">
              <table className="table-auto border-separate border-spacing-y-2">
                <tbody>
                  <tr className="mb-4">
                    <td className="pr-4">
                      <img src="src/assets/icon-clock.png" alt="" width={25} />
                    </td>
                    <td>9 Maret 2024 - 08.00 WIB</td>
                  </tr>
                  <tr className="mb-4">
                    <td className="pr-4">
                      <img src="src/assets/icon-location.png" alt="" width={25} />
                    </td>
                    <td>Posyandu Dahlia 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="w-80 h-full p-4 max-w-sm rounded-3xl overflow-hidden shadow-lg border border-[#76ABAE]">
          <div className="p-4">     
            <h3><strong>Penimbangan Balita dan Imunisasi</strong></h3>
            <p className="text-sm text-left mt-4">
            Memantau tumbuh kembang balita dengan menimbang berta badan serta memberikan vaksinasi sesuai yang direkomendasikan.
            </p>
            <div className="text-sm text-left mt-4">
              <table className="table-auto border-separate border-spacing-y-2">
                <tbody>
                  <tr className="mb-4">
                    <td className="pr-4">
                      <img src="src/assets/icon-clock.png" alt="" width={25} />
                    </td>
                    <td>10 Maret 2024 - 09.00 WIB</td>
                  </tr>
                  <tr className="mb-4">
                    <td className="pr-4">
                      <img src="src/assets/icon-location.png" alt="" width={25} />
                    </td>
                    <td>Posyandu Dahlia 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="w-80 h-full p-4 max-w-sm rounded-3xl overflow-hidden shadow-lg border border-[#76ABAE]">
          <div className="p-4">
            <h3><strong>Pemeriksaan Kesehatan Ibu Hamil</strong></h3>
            <p className="text-sm text-left mt-4">
            Pemeriksaan kehamilan, serta memberi informasi tentang perawatan kesehatan selama kehamilan.
            </p>
            <div className="text-sm text-left mt-4">
              <table className="table-auto border-separate border-spacing-y-2">
                <tbody>
                  <tr className="mb-4">
                    <td className="pr-4">
                      <img src="src/assets/icon-clock.png" alt="" width={25} />
                    </td>
                    <td>11 Maret 2024 - 10.00 WIB</td>
                  </tr>
                  <tr className="mb-4">
                    <td className="pr-4">
                      <img src="src/assets/icon-location.png" alt="" width={25} />
                    </td>
                    <td>Posyandu Dahlia 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      </div>
     </div> 
  );
};


export default informasiPosyandu2;