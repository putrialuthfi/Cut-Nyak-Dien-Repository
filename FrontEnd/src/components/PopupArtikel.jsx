import React from 'react';

const Popup = ({ isVisible, onClose }) => {
    return (
        isVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="relative bg-white p-4 rounded shadow-lg text-center">
                    <button
                        className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-400"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    <h2 className="text-xl font-bold">Berhasil Upload Artikel!</h2>
                    <p>Artikel anda telah berhasil diunggah.</p>
                    <button
                        className="mt-4 bg-[#135D66] text-white py-2 px-4 rounded hover:bg-[#76ABAE]"
                        onClick={onClose}
                    >
                        OK
                    </button>
                </div>
            </div>
        )
    );
};

export default Popup;
