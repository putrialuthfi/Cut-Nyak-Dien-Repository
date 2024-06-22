import React, { useState } from 'react';
import Button from '../components/ButtonSignUp';
import image from '../assets/img-signup.png';
import { Link, useNavigate } from "react-router-dom";
import Validation from './auth/RegisterAuth';
import axios from 'axios';

function SignUp() {
  const [formType, setFormType] = useState('parent'); // 'parent' or 'admin'
  
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirm: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(true); // State to track password match

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    
    // Check if passwords match
    if (values.password !== values.confirm) {
      setPasswordMatch(false);
      return;
    }
    
    // Clear password match error
    setPasswordMatch(true);

    if (err.email === "" && err.password === "") {
      axios.post('http://localhost:8081/users', values)
        .then(res => {
          navigate('/signIn');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="flex h-screen flex-wrap box-border">
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center" style={{ height: '86vh' }}>
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
          <ParentForm handleInput={handleInput} handleSubmit={handleSubmit} errors={errors} passwordMatch={passwordMatch} />
        ) : (
          <AdminForm handleInput={handleInput} handleSubmit={handleSubmit} errors={errors} />
        )}

        {/* Button */}

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

function ParentForm({ handleInput, handleSubmit, errors, passwordMatch }) {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
        <div className='mb-3'>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
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
            required
            placeholder="Kata Sandi"
            onChange={handleInput}
            className="border border-gray-400 rounded p-4"
            style={{ width: '65vh', height: '7vh' }}
          />
          {errors.password && <span className='text-red-500'> {errors.password}</span>}
        </div>

        <div className='mb-3'>
          <label htmlFor="confirm" className="sr-only">Konfirmasi Ulang Kata Sandi</label>
          <input
            type="password"
            id="confirm"
            required
            name="confirm"
            placeholder="Konfirmasi Ulang Kata Sandi"
            onChange={handleInput}
            className={`border ${passwordMatch ? 'border-gray-400' : 'border-red-500'} rounded p-4`}
            style={{ width: '65vh', height: '7vh' }}
          />
          {errors.confirm && <span className='text-red-500'> {errors.confirm}</span>}
        </div>

        <div className="w-[65vh] items-center m-2">
          <button
            type="submit"
            value="signup"
            className="w-full border p-2.5 bg-[#135D66] text-white rounded-md font-semibold mb-2"
          >
            Daftar
          </button>
        </div>
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
          style={{ width: '65vh', height: '7vh' }}
        />

        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Masukan Email Anda"
          className="border border-gray-400 rounded p-4 mb-4"
          style={{ width: '65vh', height: '7vh' }}
        />

        <label htmlFor="password" className="sr-only">Kata Sandi</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Masukan Kata Sandi"
          required 
          className="border border-gray-400 rounded p-4 mb-4"
          style={{ width: '65vh', height: '7vh' }}
        />

        <label htmlFor="confirm" className="sr-only">Konfirmasi Ulang Kata Sandi</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          placeholder="Konfirmasi Ulang Kata Sandi"
          required
          className="border border-gray-400 rounded p-4 mb-4"
          style={{ width: '65vh', height: '7vh' }}
        />
        <div className="w-[65vh] items-center m-2">
          <button
            type="submit"
            value="signup"
            className="w-full border p-2.5 bg-[#135D66] text-white rounded-md font-semibold mb-2"
          >
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;