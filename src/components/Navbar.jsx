import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container py-1 md:px-10 px-7 bg-[#135D66]'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img class="w-66 h-75" src="src/assets/main-icon.png"></img>
                <img class="w-184 h-34" src="src/assets/main-text.png"></img>
            </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex text-white font-semibold'>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Beranda
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Layanan
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Artikel
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Tentang Kami
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Masuk ke Akun
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;