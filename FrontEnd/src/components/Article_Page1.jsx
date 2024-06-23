import { Link } from 'react-router-dom'; // Import Link untuk navigasi internal
import Navbar from "./Navbar";
import Footer from '../components/Footer';

const Article_Page1 = () => {
  return (
    <article>
      <Navbar />
      <div className="min-h-screen bg-white mx-10 my-10">
        <div className="text-center">
          <h1 className="font-poppinsSemiBold text-header1">Informasi Hari Ini</h1>
          <p className="font-poppins text-body tracking-normal">Cari tahu informasi menarik dan penting bagi kesehatan buah hati anda.</p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-y-5 gap-x-12 my-10">
          {/* Item 1 */}
          <div className="rounded-xl bg-white flex flex-col p-4 border-1 shadow-md">
            <img src="/src/assets/Rectangle 39.png" alt="brokoli" className=" rounded-lg object-cover w-full" />
            <p className="text-left font-poppinsSemiBold text-body mt-2">Manfaat Konsumsi Brokoli untuk Anak</p>
            <p className="text-left font-poppins text-body mt-1 mb-5">Beberapa anak tidak suka brokoli karena rasanya langu. Namun, brokoli sebenarnya punya banyak manfaat!</p>
            <Link to="/article/1" className="bg-[#135D66] text-white font-poppins rounded-lg py-2 px-4 mt-auto">Baca Selengkapnya</Link>
          </div>

          {/* Item 2 */}
          <div className="rounded-xl bg-white flex flex-col p-4 border-1 shadow-md">
            <img src="/src/assets/card-artikel-2.png" alt="susu" className="rounded-lg object-cover w-full" />
            <p className="text-left font-poppinsSemiBold text-body mt-2">Peran Susu Bagi Pertumbuhan Anak</p>
            <p className="text-left font-poppins text-body mt-1">Kenali peran baik susu dalam proses pertumbuhan buah hati Anda!</p>
            <Link to="/article/2" className="bg-[#135D66] text-white font-poppins rounded-lg py-2 px-4 mt-auto">Baca Selengkapnya</Link>
          </div>

          {/* Item 3 */}
          <div className="rounded-xl bg-white flex flex-col border-1 shadow-md p-4">
            <img src="/src/assets/Rectangle 36.png" alt="obat" className="rounded-lg object-cover w-full" />
            <p className="text-left font-poppinsSemiBold text-body mt-2">Tips Ajari Anak Minum Obat Pil atau Tablet</p>
            <p className="text-left font-poppins text-body mt-1">Banyak anak yang kesulitan minum obat pil atau tablet. Bagaimana cara...</p>
            <Link to="/article/3" className="bg-[#135D66] text-white font-poppins rounded-lg py-2 px-4 mt-auto">Baca Selengkapnya</Link>
          </div>

          {/* Item 4 */}
          <div className="rounded-xl bg-white flex flex-col border-1 shadow-md p-4">
            <img src="/src/assets/Rectangle 37.png" alt="masker" className="rounded-lg object-cover w-full" />
            <p className="text-left font-poppinsSemiBold text-body mt-2">Dokter Anjurkan Anak Pakai Masker untuk Cegah Penyakit Saat Pancaroba</p>
            <p className="text-left font-poppins text-body mt-1 mb-5">Musim pancaroba telah tiba! Dokter menganjurkan anak untuk pakai mask...</p>
            <Link to="/article/4" className="bg-[#135D66] text-white font-poppins rounded-lg py-2 px-4 mt-auto">Baca Selengkapnya</Link>
          </div>

          {/* Item 5 */}
          <div className="rounded-xl bg-white flex flex-col border-1 shadow-md p-4">
            <img src="/src/assets/Rectangle 38.png" alt="semangka" className="rounded-lg object-cover w-full" />
            <p className="text-left font-poppinsSemiBold text-body mt-2">Nutrisi Yang Terkandung Dalam Buah Semangka</p>
            <p className="text-left font-poppins text-body mt-1">Selain manis, ternyata banyak nutrisi dan vitamin yang terkandung di dala...</p>
            <Link to="/article/5" className="bg-[#135D66] text-white font-poppins rounded-lg py-2 px-4 mt-auto">Baca Selengkapnya</Link>
          </div>

          {/* Item 6 */}
          <div className="rounded-xl bg-white flex flex-col border-1 shadow-md p-4">
            <img src="/src/assets/Rectangle 40.png" alt="anak aktif" className="rounded-lg object-cover w-full" />
            <p className="text-left font-poppinsSemiBold text-body mt-2">Benarkah Anak Bergerak Aktif Bisa Jadi Cerdas?</p>
            <p className="text-left font-poppins text-body mt-1">Orang tua kadang kerepotan jika anaknya banyak bergerak. Namun, be...</p>
            <Link to="/article/6" className="bg-[#135D66] text-white font-poppins rounded-lg py-2 px-4 mt-auto">Baca Selengkapnya</Link>
          </div>

          {/* Item 7 */}
          <div className="rounded-xl bg-white flex flex-col border-1 shadow-md p-4">
            <img src="/src/assets/Rectangle 35.png" alt="kebiasaan baik" className="rounded-lg object-cover w-full" />
            <p className="text-left font-poppinsSemiBold text-body mt-2">7 Kebiasaan Baik Orang Tua Yang Disukai Anak</p>
            <p className="text-left font-poppins text-body mt-1 mb-5">Berdasarkan psikologis anak, terdapat tujuh kebiasaan baik orang tua yang d...</p>
            <Link to="/article/7" className="bg-[#135D66] text-white font-poppins rounded-lg py-2 px-4 mt-auto">Baca Selengkapnya</Link>
          </div>

          {/* Item 8 */}
          <div className="rounded-xl bg-white flex flex-col border-1 shadow-md p-4">
            <img src="/src/assets/Rectangle 97.png" alt="imunisasi" className="rounded-lg object-cover w-full" />
            <p className="text-left font-poppinsSemiBold text-body mt-2">Dokter Melakukan Imunisasi Pada Anak Berusia Dini</p>
            <p className="text-left font-poppins text-body mt-1 mb-5">Imunisasi merupakan langkah pertama dan terpenting bagi anak untuk menc...</p>
            <Link to="/article/8" className="bg-[#135D66] text-white font-poppins rounded-lg py-2 px-4 mt-auto">Baca Selengkapnya</Link>
          </div>

          {/* Item 9 */}
          <div className="rounded-xl bg-white flex flex-col border-1 shadow-md p-4">
            <img src="/src/assets/Rectangle 36-1.png" alt="makanan cepat saji" className="rounded-lg object-cover w-full" />
            <p className="text-left font-poppinsSemiBold text-body mt-2">Dampak Mengkonsumsi Makanan Cepat Saji Bagi Anak</p>
            <p className="text-left font-poppins text-body mt-1">Anak-anak suka sekali makanan cepat saji. Namun, tahukah Anda bahaya di...</p>
            <Link to="/article/9" className="bg-[#135D66] text-white font-poppins rounded-lg py-2 px-4 mt-auto">Baca Selengkapnya</Link>
          </div>
        </div>
      </div>
      <Footer />
    </article>
  );
};

export default Article_Page1;
