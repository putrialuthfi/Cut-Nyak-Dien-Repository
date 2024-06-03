import React, { useState } from 'react';
import OrtuNavbar from '../components/OrtuNavbar';
import Footer from '../components/Footer';

const ProfileAnak = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

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
    <profile>
        <OrtuNavbar />
    <div className="w-full h-full mx-auto p-8 px-[80px]">
        <div className='flex flex-col md:flex-row items-center justify-between mb-10'>
        <p>
        <img
          src="./src/assets/bayi.png"
          alt="profile"
          className="ml-[110px] w-[120px] h-[150px]"
        />
        </p>
        <h1 className="text-3xl text-center mb-2 mr-[240px]">
            <span className='font-bold'>
        Selamat Datang, Jiemmy!
        </span>
        <p className="text-center mb-8 text-[13px]">
        Ini adalah halaman informasi mengenai profil dan fitur untukmu di website
        Posyandu-Line.
      </p>
      </h1>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 h-[270px] bg-[#97C9C4] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Navigasi Profil</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 2a6 6 0 00-6 6v3.5a.5.5 0 01-1 0V8a8 8 0 1116 0v3.5a.5.5 0 01-1 0V8a6 6 0 00-6-6z"
                  />
                </svg>
                Profil Anak
              </a>
            </li>
            <li>
              <a
                href="/profileOrtu"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
                Profil Orangtua
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM4 15a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                  />
                </svg>
                Stunting Detection
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9 2a1 1 0 00-1 1v1H5a1 1 0 00-1 1v11a1 1 0 101 1h14a1 1 0 101-1V5a1 1 0 00-1-1h-3V3a1 1 0 00-1-1z"
                  />
                  <path d="M9 15h2v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1z" />
                </svg>
                Data Child Monitoring Record
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h6a1 1 0 100-2H5zm7 1a1 1 0 011-1V5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H9a1 1 0 110-2h1V5a1 1 0 011-1h1a1 1 0 110 2h-1zm-1 9a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
                  />
                </svg>
                Gabung Forum Diskusi
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-3/4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="Jiemmy Pradipta Wijaya"
                onChange={(e) => setName(e.target.value)} disabled
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-gray-700 font-bold mb-2"
              >
                Tanggal Lahir
              </label>
              <input
                type="text"
                id="dob"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="05/05/2024"
                onChange={(e) => setDob(e.target.value)} disabled
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                No. HP
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="-"
                onChange={(e) => setPhoneNumber(e.target.value)} disabled
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="-"
                onChange={(e) => setEmail(e.target.value)} disabled
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray-700 font-bold mb-2"
              >
                Gender
              </label>
              <input
                id="gender"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="Laki-Laki"
                onChange={(e) => setGender(e.target.value)} disabled
                >

                </input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-bold mb-2"
              >
                Domisili
              </label>
              <input
                type="text"
                id="address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="Banjarmasin"
                onChange={(e) => setAddress(e.target.value)} disabled
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#135D66] hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update Profil
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </profile>
  );
};

export default ProfileAnak;
