import React, { useState, useEffect } from 'react';
import turfImage from '../assets/vk.jpg';
import f1 from '../assets/feature1.png';
import f2 from '../assets/feature2.png';
import f3 from '../assets/feature3.png';
import f4 from '../assets/feature4.png';
import f5 from '../assets/feature5.png';
export default function Benefits() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const featureCards = [
    {
      title: "Pioneers in J&K",
      description:
        "Being the first in business we embody innovative thinking, risk taking and market foresight.",
      icon: f2, // replace with your actual icons
    },
    {
      title: "Social-Centric",
      description:
        "Uniting sports lovers, creating Jammu’s home ground and a vibrant local culture",
      icon: f1,
    },
    {
      title: "Leading by Example",
      description:
        "Boldly embracing risk to redefine the sporting landscape, catering to every player's desire, and proving our exceptional vision and ingenuity",
      icon: f3,
    },
    {
      title: "Sports for All",
      description:
        "We’re driven to make sports accessible to all, inspiring you to get off your phone and onto your feet.",
      icon: f4,
    },
    {
      title: "Connect with Nature",
      description:
        'Indulge in a serene escape from the urban bustle of the city and dive into a natural haven in the lush green "Queen’s Orchid"',
      icon: f5,
    },
  ];

  return (
    <div className=" text-white h-full flex flex-col" style={{fontFamily:'Bungee'}}>
      <div className="container mx-auto ">
        <div className=" px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left - Text */}
          <div className="w-full md:w-1/2">
            <p className="text-sm font-semibold tracking-wide uppercase text-orange-500">
              Why Choose Us
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-black">
              Your Game Starts Here
            </h1>
            <p className="mt-6 text-black font-[500] ">
              Book high-quality turfs with real-time availability, seamless scheduling, and unbeatable service—because your match deserves the best.
            </p>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 flex items-center">
              BOOK NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.293 15.707a1 1 0 001.414 0l5.293-5.293a1 1 0 000-1.414L11.707 3.707a1 1 0 10-1.414 1.414L14.586 10l-4.293 4.293a1 1 0 000 1.414z" />
              </svg>
            </button>
          </div>

          {/* Right - Image with animation */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl shadow-xl">
            <img
              src={turfImage}
              alt="Turf Booking"
              className="w-full h-auto"
            />
            <div
              className={`absolute left-0 top-0 bg-white w-full h-1/2 transition-transform duration-[1500ms] ease-in-out ${
                animationStarted ? '-translate-y-full' : ''
              }`}
            />
            <div
              className={`absolute left-0 bottom-0 bg-white w-full h-1/2 transition-transform duration-[1500ms] ease-in-out ${
                animationStarted ? 'translate-y-full' : ''
              }`}
            />
          </div>
        </div>

        <div className="bg-[#f9f8f3] py-20 px-4">
      {/* Background faint title */}
      <div className="relative text-center mb-16">
        <h2 className="text-[100px] font-extrabold text-gray-200 tracking-widest absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-20">
          BENEFITS
        </h2>
        <h3 className="relative text-3xl md:text-4xl font-extrabold text-black z-10">
          WHY CHOOSE US?
        </h3>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Because together we share a passion for sports and we strive to offer you the finest experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {featureCards.map((card, index) => (
          <div key={index} className="text-center px-4">
            <div className="mb-4 flex justify-center"><img src={card.icon} alt={card.title} className="w-12 h-12 animate-wiggle group-hover:animate-wiggle" /></div>
            <h4 className="uppercase font-bold text-sm tracking-wider text-black mb-2">
              {card.title}
            </h4>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
      </div>

      {/* Wiggle animation */}
      <style jsx global>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
        .group:hover .group-hover\\:animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
