import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Instagram,
  Facebook,
  Linkedin,
  Play
} from 'lucide-react';
import vk from '../assets/vk.jpg';
import vk2 from '../assets/vk2.webp';
import vk3 from '../assets/vk3.webp';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const facilities = [
    {
      name: "Elite Football Turf, Delhi",
      price: "₹1500/hr",
      image: vk
    },
    {
      name: "SmashPad Cricket Arena, Mumbai",
      price: "₹2000/hr",
      image: vk2
    },
    {
      name: "Arena Multi-sport Zone, Bangalore",
      price: "₹1800/hr",
      image: vk3
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facilities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <div className="h-screen w-full relative bg-slate-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={facilities[currentSlide].image}
          alt="Sports facility"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-slate-800/50" />
      </div>

      {/* Header/Navigation */}
      <header className="relative z-10 flex justify-between items-center p-6 sm:p-8">
        <button className="p-2 text-white">
          <Menu size={24} />
        </button>
        <div className="text-white text-xl sm:text-2xl font-bold">TURFZONE</div>
        <div className="hidden sm:block">
          <button className="px-4 sm:px-6 py-2 text-white border border-white/30 rounded-md text-sm">
            FACILITIES
            <ChevronRight className="inline ml-1 sm:ml-2" size={16} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-center h-4/6 px-6 sm:px-12">
        <div className="text-white max-w-xl">
          <h2 className="text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4">PREMIUM SPORTS FACILITIES</h2>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6 sm:mb-8">
            Book your next turf session now
          </h1>
          <button
            className="bg-white text-gray-800 px-6 py-3 text-sm font-semibold tracking-wide"
            onClick={() => navigate('/contact')}
          >
            CONTACT US
          </button>
        </div>
      </main>

      {/* Social Media Links */}
      <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-4">
        <a href="#" className="text-white/70 hover:text-white">
          <Instagram size={20} />
        </a>
        <a href="#" className="text-white/70 hover:text-white">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-white/70 hover:text-white">
          <Linkedin size={20} />
        </a>
      </div>

      {/* Play Button */}
      <div className="absolute right-8 sm:right-48 top-1/2 transform -translate-y-1/2 z-10 hidden sm:flex">
        <button className="h-16 w-16 sm:h-20 sm:w-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Play size={24} fill="white" color="white" />
        </button>
      </div>

      {/* Facility Info + Carousel Controls */}
      <div className="absolute bottom-0 right-0 z-10 flex flex-col sm:flex-row w-full sm:w-auto">
        {/* Carousel Controls */}
        <div className="bg-white/10 backdrop-blur-sm flex flex-row sm:flex-col">
          <button
            onClick={nextSlide}
            className="p-4 sm:p-6 border-r sm:border-r-0 sm:border-b border-white/20 text-white"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={prevSlide}
            className="p-4 sm:p-6 text-white"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Facility Info */}
        <div className="bg-white p-6 sm:p-8 w-full sm:w-72">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            {facilities[currentSlide].name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">STARTING AT {facilities[currentSlide].price}</p>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
