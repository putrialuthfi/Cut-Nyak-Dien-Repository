import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Navbar from "./components/Navbar";
import OrtuNavbar from "./components/OrtuNavbar";
import Home from "./components/Home";
import StuntingDetection from "./components/StuntingDetection";
import InformasiPosyandu from "./components/InformasiPosyandu";
import InformasiPosyandu2 from "./components/InformasiPosyandu2";
import SignUp from "./components/SignUp";
import Article_Page1 from "./components/Article_Page1";
import FormInputChildMon from "./components/FormInputChildMon";
import PopupInputChild from "./components/PopupInputChild";
import ForumDiskusi from "./components/ForumDiskusi";
import AboutUs from "./components/AboutUs";
import Monitoring from"./components/Monitoring";
import FormInputJadwal from "./components/FormInputJadwal";
import FormInputArtikel from "./components/FormInputArtikel";
import FormDiskusi from "./components/FormDiskusi";
import Monitoring2 from './components/Monitoring_Page2';
import SignIn from './components/SignIn';
import OrtuHome from './components/OrtuHome';
import ProfileOrtu from './components/ProfileOrtu';
import ProfileAnak from './components/ProfileAnak';
import ProfileAdmin from './components/ProfileAdmin';
import Article_Page2 from './components/Article_Page2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<OrtuHome />} />
        <Route path="/formInputartikel" element={<FormInputArtikel />} />
        <Route path="/formInputjadwal" element={<FormInputJadwal />} />
        <Route path="/formInputchildmon" element={<FormInputChildMon />} />
        <Route path="/popup" component={<PopupInputChild/>} />
        <Route path="/stuntingDetection" element={<StuntingDetection />} />
        <Route path="/informasiPosyandu" element={<InformasiPosyandu />} />
        <Route path="/informasiPosyandu2" element={<InformasiPosyandu2 />} />
        <Route path="/article_Page1" element={<Article_Page1 />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/forumDiskusi" element={<ForumDiskusi />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/formDiskusi" element={<FormDiskusi />} />
        <Route path="/monitoring2" element={<Monitoring2 />} />
        <Route path="/profileOrtu" element={<ProfileOrtu />} />
        <Route path="/profileAnak" element={<ProfileAnak />} />
        <Route path="/profileAdmin" element={<ProfileAdmin />} />
        <Route path="/article/:articleId" element={<Article_Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
