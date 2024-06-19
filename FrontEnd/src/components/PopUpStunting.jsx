import { useNavigate } from "react-router-dom";

const PopUpStunting = ({ onClose, inputValues, prediction }) => {
  const navigate = useNavigate();
  const handleRedirectForum = () => {
    navigate("/forumDiskusi");
  };
  let predictionLabel;
  let predictionResult;
  if (prediction === 0) {
    predictionLabel =
      "Anak Anda stunting berat. Kunjungi dokter terdekat segera!";
  } else if (prediction === 1) {
    predictionLabel =
      "Anak Anda terindikasi stunting. Beri asupan nutrisi dan protein segera!";
  } else if (prediction === 2) {
    predictionLabel =
      "Anak Anda sehat dan tidak mengalami stunting. Pertahankan asupan nutrisi dan protein!";
  } else if (prediction === 3) {
    predictionLabel =
      "Anak Anda sehat dan tidak mengalami stunting. Pertahankan asupan nutrisi dan protein!";
  } else {
    predictionLabel = "Unknown"; // Handle any unexpected values
  }

  if (prediction === 0) {
    predictionResult = "Stunting Berat";
  } else if (prediction === 1) {
    predictionResult = "Stunting Ringan";
  } else if (prediction === 2) {
    predictionResult = "Normal";
  } else if (prediction === 3) {
    predictionResult = "Normal";
  } else {
    predictionResult = "Unknown"; // Handle any unexpected values
  }
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] lg:w-[550px] overflow-y-auto max-h-[700px]">
        <div className="flex justify-center items-center pb-5">
          <img
            src="https://placehold.co/24x24"
            alt="Admin"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <h2 className="text-xl font-bold text-center pb-7">
          {inputValues.nama}
        </h2>
        <div className="bg-[#F3F1F1] pt-6 pb-6 mb-3 rounded-lg">
          <p className="text-xl font-normal mb-4 text-center ">
            Hasil Prediksi Dini Stunting:
          </p>
          <h2 className="text-2xl font-bold mb-4 text-center pb-7">
            {predictionResult}
          </h2>

          <div className="flex justify-between pt-3 pb-3">
            <p className="block text-left text-normal mx-4 font-medium text-gray-700">
              Usia (bulan): {inputValues.usia}
            </p>
            <p className="block text-right text-normal mx-4 font-medium text-gray-700">
              Tinggi (cm): {inputValues.tinggiBadan}
            </p>
          </div>
          <p className="block text-normal mx-4 pt-3 pb-6 text-center font-normal text-gray-700">
            {predictionLabel}
          </p>
          <div className="flex items-end justify-end pr-4">
            <button
              onClick={() => onClose()}
              className="bg-primary text-white px-4 py-2 w-[128px] rounded-lg items-center justify-center"
            >
              Cek Ulang
            </button>
          </div>
        </div>
        <div className="bg-[#F3F1F1] pt-3 pb-6 mb-3 rounded-lg">
          <h2 className="mx-4 pb-3 font-bold">Yuk, Cegah Stunting!</h2>
          <p className="block text-normal mx-4 font-normal text-black">
            Konsultasikan dengan ahlinya di Forum Diskusi
          </p>
          <div className="flex px-4 pt-4">
            <button
              onClick={() => handleRedirectForum()}
              className="bg-primary text-white w-[180px] h-[50px] text-sm rounded-lg items-center justify-center"
            >
              Konsultasikan ke Ahli
            </button>
          </div>
        </div>
        <div className="bg-[#F3F1F1] pt-6 pb-8 mb-8 rounded-lg">
          <h2 className="mx-4 pb-3 font-bold">Rekomendasi Untukmu</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
            <div className="flex justify-center items-center mb-4 md:mb-0 mx-2">
              <a
                href="https://hellosehat.com/parenting/anak-6-sampai-9-tahun/gizi-anak/jenis-sayur-untuk-anak-terbaik/"
                target="_blank"
              >
                <img
                  src="src\assets\sayuran.jpg"
                  alt="Sayuran"
                  className="w-28 h-28 object-cover rounded-lg"
                />
              </a>
            </div>
            <div className="flex justify-center items-center mb-4 md:mb-0 mx-2">
              <img
                src="src\assets\ikan.jpg"
                alt="Ikan"
                className="w-28 h-28 object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center mb-4 md:mb-0 mx-2">
              <img
                src="src\assets\susu.jpeg"
                alt="Susu"
                className="w-28 h-28 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpStunting;
