import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Layanan from "./components/Layanan"
import Profile from './components/ProfileMedis';
import Informasi from './components/Informasi';
import StuntingDetection from "./components/StuntingDetection"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Layanan />
      <Profile />
      <Informasi />
    </BrowserRouter>
  );
}

export default App
