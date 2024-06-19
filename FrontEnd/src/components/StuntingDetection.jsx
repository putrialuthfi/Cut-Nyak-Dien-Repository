import { useState } from "react";
import PopUpStunting from "./PopUpStunting.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const StuntingDetection = () => {
  const [prediction, setPrediction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    nama: "",
    jenisKelamin: "",
    beratBadan: "",
    tinggiBadan: "",
    usia: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (inputValues.usia === "") {
        alert("Usia tidak boleh kosong!");
        return;
      }
      if (inputValues.jenisKelamin === "") {
        alert("Jenis kelamin tidak boleh kosong!");
        return;
      }
      if (inputValues.tinggiBadan === "") {
        alert("Tinggi badan tidak boleh kosong!");
        return;
      }
      const requestData = {
        umur: inputValues.usia,
        jenis_kelamin: inputValues.jenisKelamin,
        tinggi_badan: inputValues.tinggiBadan,
      };
      const response = await fetch(
        "https://posyandu-line-flask.onrender.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const responseData = await response.json();
      setPrediction(responseData.prediction);
      setIsModalOpen(true); // Open the modal upon successful prediction
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col items-center">
        <main className="flex flex-col md:flex-row m-8 w-full max-w-6xl bg-white rounded-lg overflow-hidden">
          <div className="md:w-1/2 p-6 flex items-center justify-center sm:hidden md:block">
            <img
              src="./src/assets/baby_img.png"
              alt="Baby"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 text-center pb-14">
              Stunting Detection Page
            </h2>
            <div className="flex justify-center items-center pb-8">
              <img
                src="https://placehold.co/24x24"
                alt="Admin"
                className="w-24 h-24 rounded-full"
              />
              <span className="ml-7">
                <a href="" className="font-bold hover:text-primary underline">
                  Edit Photo
                </a>
              </span>
            </div>
            <div className="bg-third rounded-xl ">
              <form className="space-y-7 mx-8 py-8" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={inputValues.nama}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Nama Lengkap Bayi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Usia
                  </label>
                  <input
                    type="number"
                    name="usia"
                    value={inputValues.usia}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Usia (dalam Bulan)"
                  />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700">
                    Jenis Kelamin
                  </span>
                  <div className="mt-1 flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="0" // Assign a value for male
                        className="form-radio"
                        checked={inputValues.jenisKelamin === "0"}
                        onChange={handleInputChange}
                      />
                      <span className="ml-2">Laki-laki</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="1" // Assign a value for female
                        className="form-radio"
                        checked={inputValues.jenisKelamin === "1"}
                        onChange={handleInputChange}
                      />
                      <span className="ml-2">Perempuan</span>
                    </label>
                  </div>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700">
                    Apakah anak Anda lahir Prematur?
                  </span>
                  <div className="mt-1 flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="premature"
                        className="form-radio"
                      />
                      <span className="ml-2">Tidak</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="premature"
                        className="form-radio"
                      />
                      <span className="ml-2">Ya</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Berat Badan Saat Ini
                  </label>
                  <input
                    type="number"
                    name="beratBadan"
                    value={inputValues.beratBadan}
                    onChange={handleInputChange}
                    placeholder="Berat Badan Bayi (dalam kg)"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                {/* <div>
                <label className="block text-sm font-medium text-gray-700">
                  Lingkar Kepala
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Lingkar Kepala Bayi (dalam cm)"
                />
              </div> */}
                {/* <div>
                <label className="block text-sm font-medium text-gray-700">
                  Golongan Darah
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Golongan Darah Bayi"
                />
              </div> */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tinggi Badan
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    name="tinggiBadan"
                    value={inputValues.tinggiBadan}
                    onChange={handleInputChange}
                    placeholder="Tinggi Badan Bayi (dalam cm)"
                  />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700">
                    Alergi
                  </span>
                  <div className="mt-1 flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="allergy"
                        className="form-radio"
                      />
                      <span className="ml-2">Ada</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="allergy"
                        className="form-radio"
                      />
                      <span className="ml-2">Tidak Ada</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary text-white font-bold rounded-md"
                >
                  Lihat Hasil
                </button>
              </form>
            </div>
          </div>
          {isModalOpen && (
            <PopUpStunting
              onClose={() => setIsModalOpen(false)}
              inputValues={inputValues}
              prediction={prediction}
            />
          )}
        </main>
      
      </div>
      <Footer />
    </>
  );
};

export default StuntingDetection;
