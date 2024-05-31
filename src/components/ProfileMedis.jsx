import { Link } from 'react-router-dom';

const Profile = () => {
    return (
      <section id='profile'>
        <h2 className='text-4xl font-bold text-center pt-12 bg-[#F9F9F9]'>Profil Tenaga Kesehatan</h2>
        <p className='text-center pt-2 bg-[#F9F9F9]'>Kenali lebih dekat para tenaga kesehatan yang berkontribusi langsung di Posyandu kita</p>
        <div className='flex items-center justify-center w-full h-full mx-auto bg-[#F9F9F9] pt-10 pb-10'>
            {/* Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-4'>
                {/* Card 1 */}
                <div className='rounded-xl shadow-lg'>
                    <div className=' flex flex-col h-[380px]'>
                        <div className='rounded-xl overflow-hidden'>
                            <img className="w-270 h-240" src="src/assets/1.png"></img>
                        </div>
                        <h5 className='text-[23px] font-medium mt-3'>Kartika Ayu</h5>
                        <p className='text-slate-500 text-[15px]'>Posyandu Dahlia</p>
                        <a href='#' className='mx-auto text-center border-2 mt-5 border-stone-950 text-black rounded-lg font-semibold h-[30px] w-[200px]'>Lihat Profil</a>
                    </div>
                </div>

                 {/* Card 2 */}
                 <div className='rounded-xl shadow-lg'>
                    <div className=' flex flex-col h-[380px]'>
                        <div className='rounded-xl overflow-hidden'>
                            <img className="w-270 h-240" src="src/assets/2.png"></img>
                        </div>
                        <h5 className='text-[23px] font-medium mt-3'>Laras Andini</h5>
                        <p className='text-slate-500 text-[15px]'>Posyandu Lili</p>
                        <a href='#' className='mx-auto text-center border-2 mt-5 border-stone-950 text-black rounded-lg font-semibold h-[30px] w-[200px]'>Lihat Profil</a>
                    </div>
                </div>

                 {/* Card 3 */}
                 <div className='rounded-xl shadow-lg'>
                    <div className=' flex flex-col h-[380px]'>
                        <div className='rounded-xl overflow-hidden'>
                            <img className="w-270 h-240" src="src/assets/3.png"></img>
                        </div>
                        <h5 className='text-[23px] font-medium mt-3'>Wati Sucia</h5>
                        <p className='text-slate-500 text-[15px]'>Posyandu Melati</p>
                        <a href='#' className='mx-auto text-center border-2 mt-5 border-stone-950 text-black rounded-lg font-semibold h-[30px] w-[200px]'>Lihat Profil</a>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='rounded-xl shadow-lg'>
                    <div className=' flex flex-col h-[380px]'>
                        <div className='rounded-xl overflow-hidden'>
                            <img className="w-270 h-240" src="src/assets/4.png"></img>
                        </div>
                        <h5 className='text-[23px] font-medium mt-3'>Ghina Fathia</h5>
                        <p className='text-slate-500 text-[15px]'>Posyandu Mawar</p>
                        <a href='#' className='mx-auto text-center border-2 mt-5 border-stone-950 text-black rounded-lg font-semibold h-[30px] w-[200px]'>Lihat Profil</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Profile;