import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mainDropdownOpen, setMainDropdownOpen] = useState(false); // State for main navigation dropdown
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false); // State for sidebar dropdown
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false); // State to manage authentication
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleMainDropdownToggle = () => {
    setMainDropdownOpen(!mainDropdownOpen);
    // Close sidebar dropdown if open
    if (sidebarDropdownOpen) {
      setSidebarDropdownOpen(false);
    }
  };

  const handleSidebarDropdownToggle = () => {
    setSidebarDropdownOpen(!sidebarDropdownOpen);
    // Close main dropdown if open
    if (mainDropdownOpen) {
      setMainDropdownOpen(false);
    }
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLinkClick = () => {
    setMainDropdownOpen(false);
    setSidebarDropdownOpen(false);
    setSidebarOpen(false);
  };

  const closeDropdowns = () => {
    setMainDropdownOpen(false);
    setSidebarDropdownOpen(false);
  };

  return (
    <nav className="w-full h-full relative py-3 md:px-10 px-7 bg-[#135D66]">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to="/">
            <img className="w-auto h-10" src="src/assets/main-logo.png" alt="Logo Posyandu-Line" />
          </Link>
        </div>
        {/* Tombol untuk Sidebar */}
        <div className="md:hidden">
          <button onClick={handleSidebarToggle} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Item Menu di Desktop */}
        <div className="hidden items-center space-x-6 md:flex text-white font-regular">
          <Link to="/" className="hover:text-darkGrayishBlue">
            Beranda
          </Link>
          <div className="relative">
            <button onClick={handleMainDropdownToggle} className="hover:text-darkGrayishBlue dropdown-button">
              Layanan
            </button>
            {mainDropdownOpen && (
              <div className="absolute bg-white text-black mt-2 py-2 w-48 shadow-lg dropdown-menu">
                <Link to="/InformasiPosyandu" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-200">
                  Informasi Posyandu
                </Link>
                <Link to="/stuntingDetection" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-200">
                  Stunting Detection
                </Link>
                <Link to="/monitoring" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-200">
                  Monitoring Record
                </Link>
              </div>
            )}
          </div>
          <Link to="/Article_Page1" className="hover:text-darkGrayishBlue">
            Artikel
          </Link>
          <Link to="/aboutUs" className="hover:text-darkGrayishBlue">
            Tentang Kami
          </Link>
          {authenticated ? (
            <div className="flex items-center bg-white rounded-xl py-1">
              <button
                type="button"
                className=""
                onClick={handleSidebarDropdownToggle}
              >
                <span className="text-[#135D66] font-semibold px-4 text-nowrap">Halo, Anggita</span>
              </button>
              {sidebarDropdownOpen && (
                <div className="absolute mt-[130px] py-2 w-40 rounded-lg shadow-lg bg-white">
                  <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <li>
                      <a
                        href="/profileOrtu"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdowns}
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={logout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signIn" className="hover:text-darkGrayishBlue">
              Masuk ke Akun
            </Link>
          )}
        </div>
      </div>
      {/* Sidebar untuk Mobile */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-transform transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <div className="fixed inset-y-0 left-0 w-64 bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold text-2xl">
              <Link to="/" onClick={handleLinkClick}>
                <img className="w-auto h-10" src="src/assets/main-logo.png" alt="Logo Posyandu-Line" />
              </Link>
            </div>
            <button onClick={handleSidebarToggle} className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <Link to="/" onClick={handleLinkClick} className="block py-2 text-black hover:bg-gray-200">
            Beranda
          </Link>
          <div className="relative">
            <button onClick={handleSidebarDropdownToggle} className="block w-full text-left py-2 text-black hover:bg-gray-200 dropdown-button">
              Layanan
            </button>
            {sidebarDropdownOpen && (
              <div className="pl-4">
                <Link to="/InformasiPosyandu" onClick={handleLinkClick} className="block py-2 text-black hover:bg-gray-200">
                  Informasi Posyandu
                </Link>
                <Link to="/stuntingDetection" onClick={handleLinkClick} className="block py-2 text-black hover:bg-gray-200">
                  Stunting Detection
                </Link>
                <Link to="/monitoring" onClick={handleLinkClick} className="block py-2 text-black hover:bg-gray-200">
                  Monitoring Record
                </Link>
              </div>
            )}
          </div>
          <Link to="/Article_Page1" onClick={handleLinkClick} className="block py-2 text-black hover:bg-gray-200">
            Artikel
          </Link>
          <Link to="/aboutUs" onClick={handleLinkClick} className="block py-2 text-black hover:bg-gray-200">
            Tentang Kami
          </Link>
          {authenticated ? (
            <div className="flex items-center bg-white rounded-xl py-1">
              <button
                type="button"
                className=""
                onClick={handleSidebarDropdownToggle}
              >
                <span className="text-[#135D66] font-semibold px-4 text-nowrap">Halo, Anggita</span>
              </button>
              {sidebarDropdownOpen && (
                <div className="absolute mt-[130px] py-2 w-40 rounded-lg shadow-lg bg-white">
                  <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <li>
                      <a
                        href="/profileOrtu"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdowns}
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={logout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signIn" className="block py-2 text-black hover:bg-gray-200">
              Masuk ke Akun
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;