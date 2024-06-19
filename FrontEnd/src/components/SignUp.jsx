import React, { useState } from 'react';
import Button from './ButtonSignUp';
import image from '../assets/img-signup.png';
import { Link } from "react-router-dom";

function SignUp() {
  const [formType, setFormType] = useState('parent'); // 'parent' or 'admin'

  return (
    <div className="flex h-screen flex-wrap box-border">
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center" style={{height: '86vh' }}>
        <img src={image} alt="Foto SignUp"/>
      </div>

      <div className="w-full md:w-1/2 bg-white p-3 flex flex-col items-center justify-center">
        <div className="md:px-12 p-6 text-center">
          <h1 className="text-2xl font-bold mb-1 text-[#9D9D9C]">Daftar Akun</h1>
          <h1 className="text-2xl font-bold mb-4 text-[#135D66]">Posyandu-Line</h1>
        </div>

        {/* Toggle Button */}
        <Button activeButton={formType} setActiveButton={setFormType} height="40px"/>

        {/* Form */}
        {formType === 'parent' ? (
          <ParentForm />
        ) : (
          <AdminForm />
        )}

        {/* Button */}
        <a href="/signUp">
          <div className="w-[65vh] items-center m-2">
            <button
              type="button"
              className="w-full border p-2.5 bg-[#135D66] text-white rounded-md font-semibold mb-2"
            >
              Daftar
            </button>
          </div>
        </a>

        <footer className="w-full text-center text-primary text-[14px] mt-4">
          <p>Sudah Punya Akun? 
            <a href="/signIn">
              <span className="font-bold ml-2 underline">Masuk Disini</span>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

function ParentForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-4">
      <form action="" className="w-full max-w-md flex flex-col items-center">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="border border-gray-400 rounded p-4 mb-4"
          style={{width:'65vh', height: '7vh'}}
        />

        <label htmlFor="password" className="sr-only">Kata Sandi</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Kata Sandi"
          required
          className="border border-gray-400 rounded p-4 mb-4"
          style={{width:'65vh', height: '7vh'}}
        />

        <label htmlFor="confirmpassword" className="sr-only">Konfirmasi Ulang Kata Sandi</label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Konfirmasi Ulang Kata Sandi"
          required
          className="border border-gray-400 rounded p-4 mb-4"
          style={{width:'65vh', height: '7vh'}}
        />
      </form>
    </div>
  );
}

function AdminForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-4">
      <form action="" className="w-full max-w-md flex flex-col items-center">
        <label htmlFor="kodereg" className="sr-only">Kode Registrasi Kader</label>
        <input
          type="text"
          id="kodereg"
          name="kodereg"
          placeholder="Masukan Kode Registrasi Kader"
          required
          className="border border-gray-400 rounded p-4 mb-4"
          style={{width:'65vh', height: '7vh'}}
        />

        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Masukan Email Anda"
          className="border border-gray-400 rounded p-4 mb-4"
          style={{width:'65vh', height: '7vh'}}
        />

        <label htmlFor="password" className="sr-only">Kata Sandi</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Masukan Kata Sandi"
          required 
          className="border border-gray-400 rounded p-4 mb-4"
          style={{width:'65vh', height: '7vh'}}
        />

        <label htmlFor="confirmpassword" className="sr-only">Konfirmasi Ulang Kata Sandi</label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Konfirmasi Ulang Kata Sandi"
          required
          className="border border-gray-400 rounded p-4 mb-4"
          style={{width:'65vh', height: '7vh'}}
        />
      </form>
    </div>
  );
}

export default SignUp;