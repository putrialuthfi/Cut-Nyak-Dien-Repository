import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home'
import StuntingDetection from "./components/StuntingDetection"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stuntingDetection' element={<StuntingDetection />} />
      </Routes>
    </Router>
  );
}

export default App;
