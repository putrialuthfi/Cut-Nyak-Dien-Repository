import React, { useState } from 'react';
import Popup from './PopupArtikel';
import '/src/App.css';
import Navbar from './Navbar';
import Footer from './Footer';

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
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow items-center justify-center w-full bg-gray-100 p-6">
                {/* Bagian Popup */}
                <Popup isVisible={isPopupVisible} onClose={closePopup} />

                {/* Bagian Form Input */}
                <form action="">
                <div className="max-w-4xl mx-auto p-4 space-y-4">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="text"
                            placeholder="Masukan Judul Artikel"
                            className="flex-grow p-2 border border-gray-300 rounded-lg"
                        />
                        <button
                            className="bg-[#135D66] text-white py-2 px-4 rounded-lg hover:bg-opacity-90"
                            onClick={handleSubmit}
                        >
                            Publish Artikel
                        </button>
                    </div>
                </div>
                </form>

                {/* Bagian Textarea */}
                <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
                    <textarea
                        id="deskripsi"
                        className="w-full p-4 border border-gray-300 rounded-lg"
                        style={{ height: '380px' }}
                        placeholder="Ketik tulisan anda disini ..."
                    ></textarea>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default FormInputArtikel;
