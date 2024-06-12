import React from 'react'
import loading from '../assets/loading.png'
import belajar from '../assets/belajar.png'
import jimmy from '../assets/jimmy.png'
import Scale from '../components/Scale'
import x from '../assets/x.png'

const PopStuntingDetection = () => {
  return (
    
    <div className='h-screen bg-white p-7 border rounded-xl relative justify-center items-center m-10'
    style={{width: '526px', height: '730px'}}>
        <img src={x} alt=""
        style={{width: '45px', height:'45px'}}
        className='absolute top-0 right-0 '/>
        
            <img src={jimmy} alt=""
            style={{width: '107px', height: '104px'}}
            className='rounded-full mr-auto ml-auto mb-5'/>
            <h1 className='font-bold font-poppinsBold text-header2 text-center mb-5'>Jiemmy</h1>


        <div className='shadow-lg shadow-gray-500 buttom  bg-gray-200 rounded-xl m-'>
            <div className='justify-center text-center'>
                <h1 className='font-poppinsBold font-bold text-lg pt-8 pb-3'>Hasil Deteksi Dini Stunting</h1>
                <h1 className='font-poppinsBold font-bold text-header2'>Normal</h1>
            </div>
            <div className='flex justify-evenly'>
            {/* <p className=''>Umur <span>2 Tahun</span></p>
            <p className=''>Tinggi (cm) <span>143</span></p> */}
            <Scale age={2} initialHeight={143} />
            </div>

            <div className='my-4'>
            <p className='font-poppinsMedium justify-center text-center text-lg'>Pertahankan asupan gizi dan protein anak Anda</p>

            <div className='flex mr-4 justify-end my-6'>
            <img src={loading} alt=""
            className='mb-5'/>
            <p className='text-black font-poppinsMedium font-bold '>Cek Ulang</p>
            </div>
            </div>
        </div>

            {/* Bagian 2 */}
        <div className=' shadow-gray-400 bg-gray-200 rounded-t-lg buttom mt-9 p-5 justify-between flex items-center'>
            <div className='justify-between'>
                <h1 className='font-poppinsBold font-bold text-xl'>Yuk, Cegah Stunting!</h1>
                <p className='font-poppinsMedium text-lg'>Konsultasi dengan ahlinya di <br />forum diskusi.</p>
            </div>
            <img src={belajar} alt=""
                className='h-28 w-32'/>
        </div>
    </div>
  )
}

export default PopStuntingDetection