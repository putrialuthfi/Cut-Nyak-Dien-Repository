import React from 'react';
import '../App.css';

const ProfilePosyandu = () => {
  return (
    <div className="profile-section">
      <div className="flex">
        <img
          src="https://via.placeholder.com/150" // ganti pakai gambar posyandu kita
          alt="Posyandu"
          className="profile-image"
        />
        <div className="profile-details">
          <h2 className="profile-title">Profil Posyandu</h2>
          <p><strong>Nama Posyandu:</strong> Posyandu Dahlia 1</p>
          <p><strong>Alamat Posyandu:</strong> Kp Ceper Karadek RT 001 RW 001 Ds. Sukasari, Kec. Serang Baru, Kab. Bekasi, Jawa Barat</p>
          <p><strong>Jumlah Kegiatan:</strong> 3</p>
          <p><strong>Jumlah Kader:</strong> 10</p>
        </div>
      </div>
      <div className="map-section">
        <h2 className="map-title">Detail Lokasi Posyandu</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.16862159823!2d106.68942963444113!3d-6.229728174304886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6841e4c046b34d%3A0x60f9b7e9efda1ae0!2sBekasi%2C%20West%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1620123456789!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="map-link">
          Lihat selengkapnya di peta
        </a>
      </div>
    </div>
  );
};

const ActivityCard = ({ iconUrl, title, description, date }) => {
  return (
    <div className="activity-card">
      <img src={iconUrl} alt={title} className="activity-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      <time>{date}</time>
    </div>
  );
};

const Schedule = () => {
  const activities = [
    {
      iconUrl: '/path-to-gizi-icon.png',
      title: 'Konsultasi Gizi dan Pemberian Suplemen',
      description: 'Memberikan informasi gizi serta memberikan suplemen untuk mendukung pertumbuhan anak yang optimal.',
      date: '9 Maret 2024 - 08:00 WIB'
    },
    // Tambahkan kegiatan lainnya sesuai kebutuhan Anda
  ];

  return (
    <div className="schedule">
      <h1>Jadwal Kegiatan</h1>
      <div className="activities-container">
        {activities.map(activity => (
          <ActivityCard key={activity.title} {...activity} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] p-4">
      <ProfilePosyandu />
      <Schedule />
    </div>
  );
};

export default App;
