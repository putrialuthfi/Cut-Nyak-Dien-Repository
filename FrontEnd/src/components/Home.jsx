import React from "react";
import Layanan from "./Layanan";
import Profile from "./ProfileMedis";
import Informasi from "./Informasi";
import Diskusi from "./Diskusi";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Layanan />
      <Profile />
      <Informasi />
      <Diskusi />
      <Footer />
    </div>
  );
};

export default Home;
