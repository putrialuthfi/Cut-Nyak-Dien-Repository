import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StuntingDetection from "./components/StuntingDetection";
import InformasiPosyandu from "./components/InformasiPosyandu";
import InformasiPosyandu2 from "./components/InformasiPosyandu2";
import SignUp from "./components/SignUp";
import Article_Page1 from "./components/Article_Page1";
import FormInputChildMon from "./components/FormInputChildMon";
import ForumDiskusi from "./components/ForumDiskusi";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formInputchildmon" element={<FormInputChildMon />} />
        <Route path="/stuntingDetection" element={<StuntingDetection />} />
        <Route path="/informasiPosyandu" element={<InformasiPosyandu />} />
        <Route path="/informasiPosyandu2" element={<InformasiPosyandu2 />} />
        <Route path="/article_Page1" element={<Article_Page1 />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forumDiskusi" element={<ForumDiskusi />} />
      </Routes>
    </Router>
  );
}

export default App;
