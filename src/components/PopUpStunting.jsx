const PopUpStunting = ({ onClose, inputValues, prediction }) => {
    console.log(inputValues);
    console.log(prediction);
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
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded shadow-lg w-[400px] lg:w-[550px]">
          <p className="text-xl font-normal mb-4 text-center pb-7 ">Hasil Prediksi Dini Stunting</p>
          <h2 className="text-2xl font-bold mb-4 text-center pb-7">
            {predictionResult}
          </h2>
         
          <div>
            <p className="block text-normal mx-4 my-6 font-medium text-gray-700">Nama: {inputValues.nama}</p>
            <p className="block text-normal mx-4 my-6 font-medium text-gray-700">Usia: {inputValues.usia}</p>
            <p className="block text-normal mx-4 my-6 text-center font-normal text-gray-700">{predictionLabel}</p>
          </div>
          <button
            onClick={() => onClose()}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default PopUpStunting;
  