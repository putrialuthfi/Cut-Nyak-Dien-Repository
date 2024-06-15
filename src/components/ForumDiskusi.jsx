import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function ForumDiskusi() {
  const questions1 = [
    {
      id: 1,
      question: "Apa yang membuat anak GTM?",
      author: "Ervalsa Dwi Nanda",
      role: "Ibu Rumah Tangga",
      time: "2 hari yang lalu",
      answers: 10,
    }
  ];

  const questions2 = [
    {
      id: 1,
      question: "Moms, tips supaya anak rajin makan sayur gimana ya?",
      author: "Ervalsa Dwi Nanda",
      role: "Ibu Rumah Tangga",
      time: "2 hari yang lalu",
      answers: 10,
    }
  ];

  const questions3 = [
    {
      id: 1,
      question: "Mengapa anak saya sering demam ketika selesai imunisasi?",
      author: "Ervalsa Dwi Nanda",
      role: "Ibu Rumah Tangga",
      time: "2 hari yang lalu",
      answers: 10,
    }
  ];

  const questions4 = [
    {
      id: 1,
      question: "Anak saya sulit minum obat, bagaimana solusinya?",
      author: "Ervalsa Dwi Nanda",
      role: "Ibu Rumah Tangga",
      time: "2 hari yang lalu",
      answers: 10,
    }
  ];

  return (
    <forumdiskusi>
      <Navbar />
    <div className="min-h-screen bg-gray-100 p-4 pb-10">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Cari permasalahan yang serupa"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <a href="/formDiskusi">
          <button className="ml-2 px-5 py-2 bg-[#135D66] text-white rounded-lg text-[15px] text-nowrap">Tulis Pertanyaan Baru</button>
          </a>
        </div>
        <h2 className="pb-4">Filter berdasarkan: <span className="font-bold">Semua Diskusi</span></h2>

        {/* <!-- Box 1 --> */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-5">
          {questions1.map((question) => (
            <div key={question.id} className="py-1">
              <h3 className="text-lg font-bold">{question.question}</h3>
              <div className="text-sm text-gray-500 mt-1">
                <span>{question.author}</span> • <span>{question.role}</span> • <span>{question.time}</span>
              </div>
              <div className="flex justify-between items-center mt-2 py-2">
                <button className="text-teal-500">10 Jawaban</button>
                <button className="text-teal-500">Balas</button>
              </div>
            </div>
          ))}
        </div>

          {/* <!-- Box 2 --> */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-5">
          {questions2.map((question) => (
            <div key={question.id} className="py-1">
              <h3 className="text-lg font-bold">{question.question}</h3>
              <div className="text-sm text-gray-500 mt-1">
                <span>{question.author}</span> • <span>{question.role}</span> • <span>{question.time}</span>
              </div>
              <div className="flex justify-between items-center mt-2 py-2">
                <button className="text-teal-500">10 Jawaban</button>
                <button className="text-teal-500">Balas</button>
              </div>
            </div>
          ))}
        </div>

          {/* <!-- Box 3 --> */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-5">
          {questions3.map((question) => (
            <div key={question.id} className="py-1">
              <h3 className="text-lg font-bold">{question.question}</h3>
              <div className="text-sm text-gray-500 mt-1">
                <span>{question.author}</span> • <span>{question.role}</span> • <span>{question.time}</span>
              </div>
              <div className="flex justify-between items-center mt-2 py-2">
                <button className="text-teal-500">10 Jawaban</button>
                <button className="text-teal-500">Balas</button>
              </div>
            </div>
          ))}
        </div>

         {/* <!-- Box 4 --> */}
         <div className="bg-white p-4 rounded-lg shadow-lg mb-5">
          {questions4.map((question) => (
            <div key={question.id} className="py-1">
              <h3 className="text-lg font-bold">{question.question}</h3>
              <div className="text-sm text-gray-500 mt-1">
                <span>{question.author}</span> • <span>{question.role}</span> • <span>{question.time}</span>
              </div>
              <div className="flex justify-between items-center mt-2 py-2">
                <button className="text-teal-500">10 Jawaban</button>
                <button className="text-teal-500">Balas</button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="ml-2 px-5 py-2 bg-[#135D66] text-white rounded-lg text-[12px] text-nowrap">Terkini</button>
          <div>
            <button className="text-teal-500 mx-1 underline md:underline-offset-4">1</button>
            <button className="text-teal-500 mx-1">2</button>
            <button className="text-teal-500 mx-1">3</button>
            <button className="text-teal-500 mx-1">4</button>
            <button className="text-teal-500 mx-1">5</button>
            <button className="text-teal-500 mx-1">6</button>
          </div>
          <button className="ml-2 px-5 py-2 bg-[#135D66] text-white rounded-lg text-[12px] text-nowrap">Terlama</button>
        </div>
      </div>
    </div>
    <Footer />
    </forumdiskusi>
  );
}

export default ForumDiskusi;