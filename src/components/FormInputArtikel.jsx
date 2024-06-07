import React from 'react';
import { Link } from 'react-router-dom';
import '/src/App.css';

const FormInputArtikel = () => {
    return(
        <div className="items-center justify-center w-full h-full bg-gray-100">
            <div className="w-full grid grid-cols-2 gap-4 mb-4 p-10">
                <div className="col-span-2 md:col-span-1 mb-4">
                    <div className="text-left">
                        <h1 className="text-2xl font-bold mb-2">Masukan Judul Artikel</h1>
                        <h2 className="text-lg text-black-600">Ketik tulisan anda disini ...</h2>
                    </div>
                </div>        
                <div className="col-span-2 md:col-span-1 mb-4 flex justify-end">
                    <Link to="">
                        <button className="bg-[#135D66] text-white py-2 px-4 rounded-[14px] hover:bg-opacity-90">
                            Publish Artikel
                        </button>
                    </Link>
                </div>
            </div>
            <form className="p-8 w-full h-full mt-4">
                <input id="deskripsi" type="text" className="w-full" style={{ height: '600px' }} />
            </form>
        </div>
    );
}

export default FormInputArtikel;