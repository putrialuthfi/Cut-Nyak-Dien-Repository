import React, { useState } from 'react';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);

    const profiles = [
        {
            name: 'Kartika Ayu',
            image: 'src/assets/1.png',
            posyandu: 'Posyandu Dahlia',
            detail: (
                <div>
                    <p><strong>Profesi:</strong> Bidan</p>
                    <p><strong>Pengalaman:</strong> 5 Tahun</p>
                    <p><strong>Peran:</strong> Memberikan layanan kesehatan ibu dan anak</p>
                    <p><br />Ibu Kartika Ayu adalah seorang bidan berpengalaman yang telah memberikan kontribusi berharga dalam bidang kesehatan masyarakat, khususnya di Posyandu, selama lima tahun terakhir. Dengan pengetahuan dan keterampilan yang luas dalam bidangnya, beliau telah menjadi tiang utama dalam upaya meningkatkan kesehatan dan kesejahteraan masyarakat di wilayahnya.</p>
                </div>
            ),
        },
        {
            name: 'Laras Andini',
            image: 'src/assets/2.png',
            posyandu: 'Posyandu Lili',
            detail: (
                <div>
                    <p><strong>Profesi:</strong> Bidan</p>
                    <p><strong>Pengalaman:</strong> 3 Tahun</p>
                    <p><strong>Peran:</strong> Memberikan layanan kesehatan ibu dan anak</p>
                    <p><br />Ibu Laras Andini adalah seorang bidan yang memiliki pengalaman selama satu tahun dalam melayani masyarakat melalui Posyandu. Meskipun baru satu tahun dalam profesi ini, Ibu Laras telah berhasil membangun hubungan yang baik dengan masyarakat setempat. Ia dikenal sebagai sosok yang ramah, empatik, dan dapat diandalkan oleh para ibu dan keluarga yang mengandalkan layanannya. Keberadaannya di Posyandu telah menjadi tambahan berharga.</p>
                </div>
            ),
        },
        {
            name: 'Wati Sucia',
            image: 'src/assets/3.png',
            posyandu: 'Posyandu Melati',
            detail: (
                <div>
                    <p><strong>Profesi:</strong> Bidan</p>
                    <p><strong>Pengalaman:</strong> 5 Tahun</p>
                    <p><strong>Peran:</strong> Memberikan layanan kesehatan ibu dan anak</p>
                    <p><br />Ibu Wati Sucia adalah seorang bidan berpengalaman yang telah memberikan kontribusi signifikan dalam bidang kesehatan masyarakat, terutama di Posyandu, selama lima tahun terakhir. Dengan keahlian dan pengetahuan yang mendalam dalam bidang kebidanan, beliau telah menjadi pilar utama dalam meningkatkan kesehatan dan kesejahteraan masyarakat di wilayahnya. Wati Sucia dikenal karena dedikasinya yang tinggi dan komitmennya dalam memberikan layanan kesehatan terbaik kepada masyarakat.</p>
                </div>
            ),
        },
        {
            name: 'Ghina Fathia',
            image: 'src/assets/4.png',
            posyandu: 'Posyandu Mawar',
            detail: (
                <div>
                    <p><strong>Profesi:</strong> Bidan</p>
                    <p><strong>Pengalaman:</strong> 5 Tahun</p>
                    <p><strong>Peran:</strong> Memberikan layanan kesehatan ibu dan anak</p>
                    <p><br />Ibu Ghina Fathia adalah seorang bidan berpengalaman yang telah memberikan kontribusi luar biasa dalam bidang kesehatan masyarakat, khususnya di Posyandu, selama enam tahun terakhir. Dengan pengetahuan dan keterampilan yang mendalam dalam bidangnya, beliau telah menjadi pilar utama dalam upaya meningkatkan kesehatan dan kesejahteraan masyarakat di wilayahnya. Ghina Fathia dikenal karena dedikasinya yang tinggi dan komitmennya dalam memberikan layanan kesehatan yang optimal kepada masyarakat.</p>
                </div>
            ),
        }
    ];

    const openModal = (profile) => {
        setSelectedProfile(profile);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedProfile(null);
    };

    return (
        <section id='profile'>
            <h2 className='text-3xl font-bold text-center pt-12'>Profil Tenaga Kesehatan</h2>
            <p className='text-center pt-2'>Kenali lebih dekat para tenaga kesehatan yang berkontribusi langsung di Posyandu kita</p>
            <div className='container mx-auto flex items-center justify-center w-full h-full py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {profiles.map((profile, index) => (
                        <div key={index} className='flex flex-col items-center justify-center rounded-xl shadow-lg p-5 h-96'>
                            <div className='w-full flex-grow flex flex-col items-center'>
                                <div className='rounded-xl overflow-hidden mb-4'>
                                    <img className="w-full h-48 object-cover" src={profile.image} alt={profile.name}></img>
                                </div>
                                <p className='text-xl font-medium mt-3'>{profile.name}</p>
                                <p className='text-slate-500 text-base'>{profile.posyandu}</p>
                            </div>

                            <button 
                                onClick={() => openModal(profile)}
                                className='mx-auto text-center border mt-3 border-stone-950 text-black rounded-lg font-semibold h-[35px] w-[200px] flex items-center justify-center'>
                                Lihat Profil
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {isOpen && selectedProfile && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='absolute inset-0 bg-gray-600 bg-opacity-50' onClick={closeModal}></div>
                    <div className='relative z-50 p-5 border w-96 shadow-lg bg-white rounded-md flex'>
                        <div className='mr-5 flex-shrink-0'>
                            <img className="w-32 h-32 rounded-md object-cover" src={selectedProfile.image} alt={selectedProfile.name}></img>
                        </div>
                        <div>
                            <button 
                                onClick={closeModal} 
                                className='absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none'>
                                &times;
                            </button>
                            <h3 className='text-lg font-medium text-gray-900'>{selectedProfile.name}</h3>
                            <p className='text-slate-500'>{selectedProfile.posyandu}</p>
                            <div className='mt-2 text-sm text-gray-500'>
                                {selectedProfile.detail}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Profile;