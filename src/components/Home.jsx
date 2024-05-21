import React from "react";
import Layanan from "./Layanan";
import Profile from "./ProfileMedis";
import Informasi from "./Informasi";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Layanan />
      <Profile />
      <Informasi />
    </div>
  );
};

export default Home;
