import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-menu") && !event.target.closest(".dropdown-button")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="w-full relative py-3 md:px-10 px-7 bg-[#135D66]">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to="/">
            <img className="w-auto h-10" src="src/assets/main-logo.png" alt="Logo Posyandu-Line" />
          </Link>
            
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex text-white font-regular ">
          <Link to="/" className="hover:text-darkGrayishBlue">
            Beranda
          </Link>
          <div className="relative">
            <button onClick={handleDropdownToggle} className="hover:text-darkGrayishBlue dropdown-button">
              Layanan
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white text-black mt-2 py-2 w-48 shadow-lg dropdown-menu">
                <Link to="/signIn" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-200">
                  Stunting Detection
                </Link>
                <Link to="/signIn" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-200">
                  Informasi Posyandu
                </Link>
                <Link to="/signIn" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-200">
                  Monitoring Record
                </Link>
              </div>
            )}
          </div>
          <Link to="/signIn" className="hover:text-darkGrayishBlue">
            Artikel
          </Link>
          <Link to="/aboutUs" className="hover:text-darkGrayishBlue">
            Tentang Kami
          </Link>
          <Link to="signIn" className="hover:text-darkGrayishBlue">
            Masuk ke Akun
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
