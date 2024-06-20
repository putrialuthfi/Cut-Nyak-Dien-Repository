import React, { useState } from 'react';
import Button from '../components/ButtonSignIn';
import image from '../assets/img-signin.jpg';
import { Link } from "react-router-dom";
import Validation from './auth/LoginAuth';

function SignIn() {
  const [formType, setFormType] = useState('parent'); // 'parent' or 'admin'
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center" style={{ height: '86vh' }}>
        <img src={image} alt="Foto SignIn" />
      </div>

      <div className="w-full md:w-1/2 bg-white p-3 flex flex-col items-center justify-center">
        <div className="md:px-12 p-6 text-center">
          <h1 className="text-2xl font-bold mb-1 text-[#9D9D9C]">Selamat Datang di</h1>
          <h1 className="text-2xl font-bold mb-4 text-[#135D66]">Posyandu-Line</h1>
        </div>

        {/* Toggle Button */}
        <Button activeButton={formType} setActiveButton={setFormType} />

        {/* Form */}
        {formType === 'parent' ? (
          <ParentForm handleInput={handleInput} handleSubmit={handleSubmit} errors={errors} />
        ) : (
          <AdminForm handleInput={handleInput} handleSubmit={handleSubmit} errors={errors} />
        )}

        {/* Button */}


        <footer className="w-full text-center text-primary text-[14px] mt-4">
          <p>Belum Punya Akun?
            <Link to="/signUp">
              <span className="font-bold underline"> Daftar Disini</span>
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

function ParentForm({ handleInput, handleSubmit, errors }) {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
        <div className='mb-3'>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleInput}
          className="border border-gray-400 rounded p-4"
          style={{ width: '65vh', height: '7vh' }}
        />
        {errors.email && <span className='text-red-500'> {errors.email}</span>}
        </div>

        <div className='mb-3'>
        <label htmlFor="password" className="sr-only">Kata Sandi</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Kata Sandi"
          onChange={handleInput}
          className="border border-gray-400 rounded p-4"
          style={{ width: '65vh', height: '7vh' }}
        />
        {errors.password && <span className='text-red-500 mb-4'> {errors.password}</span>}
        </div>
        <div className="w-[65vh] items-center mt-4 mb-2">
            <button
              type="submit"
              className="w-full border p-2.5 bg-[#135D66] text-white rounded-md font-semibold mb-2"
            >
              Masuk
            </button>
          </div>
      </form>

      <div className="w-full max-w-md flex justify-end text-[14px] mb-4" style={{ width: '65vh' }}>
        <p className="text-gray-600">
          Lupa Kata Sandi?
          <a href="">
            <span className="font-bold underline text-primary"> Klik Disini</span>
          </a>
        </p>
      </div>
    </div>
  );
}

function AdminForm({ handleInput, handleSubmit, errors }) {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
        <label htmlFor="kodereg" className="sr-only">Kode Registrasi Kader</label>
        <input
          type="text"
          id="kodereg"
          name="kodereg"
          placeholder="Kode Registrasi Kader"
          onChange={handleInput}
          className="border border-gray-400 rounded p-4 mb-4"
          style={{ width: '65vh', height: '7vh' }}
        />

        <label htmlFor="password" className="sr-only">Kata Sandi</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Kata Sandi"
          onChange={handleInput}
          className="border border-gray-400 rounded p-4 mb-4"
          style={{ width: '65vh', height: '7vh' }}
        />
        <div className="w-[65vh] items-center mt-4 mb-2">
            <button
              type="submit"
              className="w-full border p-2.5 bg-[#135D66] text-white rounded-md font-semibold mb-2"
            >
              Masuk
            </button>
          </div>
      </form>

      <div className="w-full max-w-md flex justify-end text-[14px] mb-4" style={{ width: '65vh' }}>
        <p className="text-gray-600">
          Lupa Kata Sandi?
          <a href="">
            <span className="font-bold text-primary underline"> Klik Disini</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;