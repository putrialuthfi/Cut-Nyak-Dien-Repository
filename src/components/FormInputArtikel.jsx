import React, { useState } from 'react';
import Popup from './PopupArtikel';
import '/src/App.css';

const FormInputArtikel = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="items-center justify-center w-full h-full bg-gray-100">
            {/* Bagian Popup */}
            <Popup isVisible={isPopupVisible} onClose={closePopup} />

            {/* Bagian Form Input */}
            <div className="w-full grid grid-cols-2 gap-4 mb-4 px-8">
                <div className="col-span-2 md:col-span-1 mb-4">
                    <div className="text-left">
                        <h1 className="text-2xl font-bold mb-2">Masukan Judul Artikel</h1>
                        <h2 className="text-lg text-black-600">Ketik tulisan anda disini ...</h2>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 mb-4 flex justify-end">
                    <button
                        className="bg-[#135D66] text-white py-2 px-4 rounded-[14px] hover:bg-opacity-90"
                        onClick={handleSubmit}
                    >
                        Publish Artikel
                    </button>
                </div>
            </div>
            <form className="w-full h-full mt-4 pr-8 pl-8" onSubmit={handleSubmit}>
                <input
                    id="deskripsi"
                    type="text"
                    className="w-full p-4"
                    style={{ height: '600px' }}
                    placeholder="Ketik tulisan anda disini ..."
                />
            </form>
        </div>
    );
};

export default FormInputArtikel;
