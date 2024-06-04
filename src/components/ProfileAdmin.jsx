import React, { useState } from 'react';
import OrtuNavbar from '../components/OrtuNavbar';
import Footer from '../components/Footer';

const ProfileAdmin = () => {
  const [name, setName] = useState('Kartika Ayu');
  const [dob, setDob] = useState('05/05/1996');
  const [phoneNumber, setPhoneNumber] = useState('0876-9080-7761');
  const [email, setEmail] = useState('tikatika@gmail.com');
  const [gender, setGender] = useState('Perempuan');
  const [address, setAddress] = useState('Purworejo');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted with data:', {
      name,
      dob,
      phoneNumber,
      email,
      gender,
      address,
    });
  };

  return (
    <div>
      <OrtuNavbar />
      <div className="w-full h-full mx-auto p-8 px-[80px]">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex flex-col items-center">
            <img src="./src/assets/profile.png" alt="profile" className="ml-[110px] w-[120px] h-[150px]" />
          </div>
          <div className="text-center md:mr-[240px]">
            <h1 className="text-3xl mb-2">
              <span className="font-bold">Selamat Datang, Admin!</span>
            </h1>
            <p className="text-[13px]">Ini adalah halaman informasi mengenai profil dan fitur untukmu di website Posyandu-Line.</p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 bg-[#F0F4F4] p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Navigasi Profil</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.5a.5.5 0 01-1 0V8a8 8 0 1116 0v3.5a.5.5 0 01-1 0V8a6 6 0 00-6-6z" />
                  </svg>
                  Profil Saya
                </a>
              </li>
              <li>
                <a href="/profileOrtu" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  Upload Jadwal
                </a>
              </li>
              <li></li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 00-1 1v1H5a1 1 0 00-1 1v11a1 1 0 101 1h14a1 1 0 101-1V5a1 1 0 00-1-1h-3V3a1 1 0 00-1-1z" />
                    <path d="M9 15h2v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1z" />
                  </svg>
                  Data Child Monitoring Record
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h6a1 1 0 100-2H5zm7 1a1 1 0 011-1V5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H9a1 1 0 110-2h1V5a1 1 0 011-1h1a1 1 0 110 2h-1zm-1 9a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" />
                  </svg>
                  Tulis Artikel Baru
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-3/4">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
                  Tanggal Lahir
                </label>
                <input
                  type="text"
                  id="dob"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                  Gender
                </label>
                <input
                  id="gender"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  disabled
                ></input>
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                  Domisili
                </label>
                <input
                  type="text"
                  id="address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                  No. HP
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />
              </div>
              <div className="col-span-1 md:col-span-2 flex justify-end">
                <button type="submit" className="bg-[#135D66] hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Update Profil
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileAdmin;
