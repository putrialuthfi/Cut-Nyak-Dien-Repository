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
            <h2 className='text-4xl font-bold text-center pt-12'>Profil Tenaga Kesehatan</h2>
            <p className='text-center pt-2 bg-[#F9F9F9]'>Kenali lebih dekat para tenaga kesehatan yang berkontribusi langsung di Posyandu kita</p>
            <div className='flex items-center justify-center container mx-auto w-[1519px] h-[500px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-5'>
                    {profiles.map((profile, index) => (
                        <div key={index} className='rounded-xl shadow-lg'>
                            <div className='flex flex-col h-[380px]'>
                                <div className='rounded-xl overflow-hidden'>
                                    <img className="w-270 h-240" src={profile.image} alt={profile.name}></img>
                                </div>
                                <h5 className='text-[23px] font-medium mt-3'>{profile.name}</h5>
                                <p className='text-slate-500 text-[15px]'>{profile.posyandu}</p>
                                <button 
                                    onClick={() => openModal(profile)}
                                    className='mx-auto text-center border mt-5 border-stone-950 text-black rounded-lg font-semibold h-[35px] w-[200px] flex items-center justify-center'>
                                    Lihat Profil
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isOpen && selectedProfile && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='absolute inset-0 bg-gray-600 bg-opacity-50' onClick={closeModal}></div>
                    <div className='relative z-50 p-5 border w-[600px] shadow-lg bg-white rounded-md flex'>
                        <div className='mr-5 flex-shrink-0'>
                            <img className="w-32 h-32 rounded-md" src={selectedProfile.image} alt={selectedProfile.name}></img>
                        </div>
                        <div>
                            <button 
                                onClick={closeModal} 
                                className='absolute top-0 right-0 m-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center'>
                                &times;
                            </button>
                            <h3 className='text-lg leading-6 font-medium text-gray-900'>{selectedProfile.name}</h3>
                            <p className='text-slate-500'>{selectedProfile.posyandu}</p>
                            <div className='mt-2'>
                                <p className='text-sm text-gray-500'>{selectedProfile.detail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Profile;