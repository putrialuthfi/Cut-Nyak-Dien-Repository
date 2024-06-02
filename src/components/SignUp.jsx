import React from 'react';

const signUp = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Section (Image) */}
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center" style={{ height: '90vh' }}>
        <img
          src="/src/assets/img-signup.png"
          alt="Illustration SignUp Posyandu-Line"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Section (Form) */}
      <div className="w-full lg:w-1/2 bg-white p-8">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold mb-1 text-[#9D9D9C]">Daftar Akun</h1>
          <h1 className="text-2xl font-bold mb-4 text-[#135D66]">Posyandu-Line</h1>
        </div>
        <div className="mb-10">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukan Email Anda"
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukan Kata Sandi"
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Konfirmasi Kembali Kata Sandi Anda"
              className="w-full border rounded p-2"
            />
          </div>
        </div>
        <a href="/signin">
        <button
          type="button"
          className="w-full border p-2.5 bg-[#135D66] text-white rounded-md font-semibold mb-6"
        >
          Daftar
        </button>
        </a>
        <div className="mt-4 text-[#135D66] text-center">
          <p className="mb-1">
            Sudah Punya Akun?{' '}
            <a href="/signIn" className="font-bold hover:underline">Masuk Disini</a>
          </p>
          <p>
            <a href="/signIn" className="font-bold hover:underline">Klik Disini</a> Untuk Masuk ke Akun Orang Tua
          </p>
        </div>
      </div>
    </div>
  );
};

export default signUp;