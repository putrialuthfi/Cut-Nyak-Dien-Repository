import React from 'react';

const signUp = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section (Image) */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <img
          src="/path/to/your/image.jpg"
          alt="Healthcare Professional"
          className="max-h-full"
        />
      </div>

      {/* Right Section (Form) */}
      <div className="w-1/2 bg-white p-8">
        <h1 className="text-2xl font-semibold mb-4">Daftar Akun Posyandu-Line</h1>
        <br />
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">
            Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-medium">
            Konfirmasi Kata Sandi
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          Daftar
        </button>
        <p className="mt-4 text-sm">
          Sudah Punya Akun?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Masuk Disini
          </a>
        </p>
      </div>
    </div>
  );
};

export default signUp;