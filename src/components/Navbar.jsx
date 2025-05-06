import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can install lucide-react or use heroicons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#1a1a1a] text-white shadow-md px-6 py-4 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-[#ff6a00] tracking-wider">
          CoVilla
        </Link>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {['Home', 'Games', 'Farms', 'About Us', 'Academy'].map((text, idx) => (
            <li key={idx}>
              <Link
                to={`/${text === 'Home' ? '' : text.toLowerCase().replace(' ', '')}`}
                className="hover:text-[#ff6a00] transition duration-300"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-4 text-lg px-2">
          {['Home', 'Games', 'Farms', 'About Us', 'Academy'].map((text, idx) => (
            <li key={idx}>
              <Link
                to={`/${text === 'Home' ? '' : text.toLowerCase().replace(' ', '')}`}
                className="block hover:text-[#ff6a00] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
