const StuntingDetection = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Posyandu-Online</div>
        <div className="flex items-center">
          <span className="mr-4">Halo, Admin</span>
          <img
            src="path/to/profile-pic.jpg"
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      <main className="flex flex-col md:flex-row mt-8 w-full max-w-6xl bg-white rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-6 flex items-center justify-center sm:hidden md:block">
          <img
            src="./src/assets/baby_img.png"
            alt="Baby"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4 text-center pb-14">
            Stunting Detection Page
          </h2>
          <div className="flex justify-center items-center pb-16">
            
            <img
              src="path/to/profile-pic.jpg"
              alt="Admin"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-7"><a href="" className="font-bold hover:text-primary underline">Edit Photo</a></span>
          </div>
          <div className="bg-third rounded-xl ">
            <form className="space-y-7 mx-8 py-8">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">
                  Jenis Kelamin
                </span>
                <div className="mt-1 flex space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" className="form-radio" />
                    <span className="ml-2">Laki-laki</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" className="form-radio" />
                    <span className="ml-2">Perempuan</span>
                  </label>
                </div>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">
                  Apakah anak Anda lahir Prematur?
                </span>
                <div className="mt-1 flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="premature"
                      className="form-radio"
                    />
                    <span className="ml-2">Tidak</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="premature"
                      className="form-radio"
                    />
                    <span className="ml-2">Ya</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Berat Badan Saat Ini
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Lingkar Kepala
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Golongan Darah
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tinggi Badan
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">
                  Alergi
                </span>
                <div className="mt-1 flex space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="allergy" className="form-radio" />
                    <span className="ml-2">Ada</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="allergy" className="form-radio" />
                    <span className="ml-2">Tidak Ada</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white font-bold rounded-md"
              >
                Lihat Hasil
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer className="w-full bg-gray-800 text-white p-4 flex justify-between items-center mt-8">
        <div>
          <h3 className="font-bold">Informasi</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Layanan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Layanan</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Informasi Posyandu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Stunting Detection
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Child Monitoring Record
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Kontak</h3>
          <ul>
            <li>
              <a href="tel:+628956001321" className="hover:underline">
                +62 895 6001 321
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@eposyandu_line"
                className="hover:underline"
              >
                @eposyandu_line
              </a>
            </li>
            <li>
              <a
                href="mailto:eposyandu_line@gmail.com"
                className="hover:underline"
              >
                eposyandu_line@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default StuntingDetection;
