import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    if (location.pathname === '/') {
      setShowNavbar(false);
      window.addEventListener('scroll', handleScroll);
    } else {
      setShowNavbar(true); // Show immediately on all non-home routes
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } bg-transparent text-white shadow-lg backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-wider text-white drop-shadow-lg"
          style={{ fontFamily: 'Bungee, sans-serif' }}
        >
          CoVilla
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {['Home', 'Games', 'Farms', 'About Us', 'Academy'].map((text) => (
            <li key={text}>
              <Link
                to={`/${text === 'Home' ? '' : text.toLowerCase().replace(' ', '')}`}
                className="hover:text-black transition duration-300 hover:underline underline-offset-4 decoration-white"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 pt-2 flex flex-col space-y-4 bg-[#1a1a1a] text-white text-lg rounded-b-xl shadow-md">
          {['Home', 'Games', 'Farms', 'About Us', 'Academy'].map((text) => (
            <li key={text}>
              <Link
                to={`/${text === 'Home' ? '' : text.toLowerCase().replace(' ', '')}`}
                className="block hover:text-[#ffb347] transition duration-300"
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
