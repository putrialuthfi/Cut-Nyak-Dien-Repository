import React from "react";
import Layanan from "./Layanan";
import Profile from "./ProfileMedis";
import Informasi from "./Informasi";
import Diskusi from "./Diskusi";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
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
