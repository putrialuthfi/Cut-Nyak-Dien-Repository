import React, { useState } from 'react';
import Button from '../components/ButtonSignIn';
import image from '../assets/img-signup.png';
import { Link } from "react-router-dom";

function SignIn() {
  const [formType, setFormType] = useState('parent'); // 'parent' or 'admin'

  return (
    <div className="flex h-screen flex-wrap box-border">
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center">
        <img src={image} alt="" className="w-full h-auto object-cover" />
      </div>

      <div className="w-full md:w-1/2 bg-white p-10 flex flex-col items-center">
        <div className="px-6 md:px-12 pt-12 pb-10 text-center">
          <h1 className="text-header1 text-2xl font-bold mb-4 text-gray-400">
            Selamat Datang di <br />
            <span className="text-primary pt-8">Posyandu-Line</span>
          </h1>
        </div>

        {/* Toggle Button */}
        <Button activeButton={formType} setActiveButton={setFormType} />

        {/* Form */}
        {formType === 'parent' ? (
          <ParentForm />
        ) : (
          <AdminForm />
        )}

        {/* Button */}
         {/* Button */}
        <a href="home">
         <div className="w-[400px] items-center mt-12 mb-7">
          <button className="text-white font-bold bg-primary w-full max-w-md h-12 rounded-xl text-header3" type="submit">Masuk</button>
        </div>
        </a>

        <footer className="w-full text-center text-primary text-[15px] mt-2">
          <p>Belum Punya Akun? 
            <a href="/signUp">
            <span className="font-bold ml-2">Daftar Disini</span>
            </a>
            </p>
        </footer>
      </div>
    </div>
  );
}

function ParentForm() {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      <form action="" className="w-full max-w-md">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="border border-gray-400 rounded w-full p-4 mb-2"
        />

        <label htmlFor="password" className="sr-only">Kata Sandi</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Kata Sandi"
          required
          className="border border-gray-400 rounded w-full p-4 mb-2"
        />
      </form>

      <div className="w-full max-w-md flex justify-end mb-4">
        <p className="text-gray-600">
          Lupa Kata Sandi? <span className="font-bold text-blue-600 cursor-pointer">Klik Disini</span>
        </p>
      </div>
    </div>
  );
}

function AdminForm() {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      <form action="" className="w-full max-w-md">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="border border-gray-400 rounded w-full p-4 mb-2"
        />

        <label htmlFor="password" className="sr-only">Kata Sandi</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Kata Sandi"
          required
          className="border border-gray-400 rounded w-full p-4 mb-2"
        />
      </form>

      <div className="w-full max-w-md flex justify-end mb-4">
        <p className="text-gray-600">
          Lupa Kata Sandi? <span className="font-bold text-blue-600 cursor-pointer">Klik Disini</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;