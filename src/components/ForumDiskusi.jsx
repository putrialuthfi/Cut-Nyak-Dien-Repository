import React from 'react';


function ForumDiskusi() {
  const questions = [
    {
      id: 1,
      question: "Apa yang membuat anak GTM?",
      author: "Ervalsa Dwi Nanda",
      role: "Ibu Rumah Tangga",
      time: "2 hari yang lalu",
      answers: 10,
    },
    {
      id: 2,
      question: "Tips agar anak doyan makan sayur, dong bu bidan",
      author: "Ervalsa Dwi Nanda",
      role: "Ibu Rumah Tangga",
      time: "2 hari yang lalu",
      answers: 10,
    },
    {
      id: 3,
      question: "Mengapa anak saya demam ketika selesai imunisasi?",
      author: "Ervalsa Dwi Nanda",
      role: "Ibu Rumah Tangga",
      time: "2 hari yang lalu",
      answers: 10,
    },
    {
      id: 4,
      question: "Anak saya susah minum obat, gimana ya bu solusinya?",
      author: "Ervalsa Dwi Nanda",
      role: "Ibu Rumah Tangga",
      time: "2 hari yang lalu",
      answers: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Cari permasalahan yang serupa"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button className="ml-2 px-5 py-2 bg-[#135D66] text-white rounded-lg text-[15px] text-nowrap">Tulis Pertanyaan Baru</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Semua diskusi</h2>
          {questions.map((question) => (
            <div key={question.id} className="border-t border-gray-200 py-4">
              <h3 className="text-lg font-medium">{question.question}</h3>
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
          <button className="text-teal-500">Terkini</button>
          <div>
            <button className="text-teal-500 mx-1">1</button>
            <button className="text-teal-500 mx-1">2</button>
            <button className="text-teal-500 mx-1">3</button>
            <button className="text-teal-500 mx-1">4</button>
            <button className="text-teal-500 mx-1">5</button>
            <button className="text-teal-500 mx-1">6</button>
          </div>
          <button className="text-teal-500">Terlama</button>
        </div>
      </div>
    </div>
  );
}

export default ForumDiskusi;