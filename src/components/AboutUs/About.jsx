import React from 'react';
import vk from '../../assets/vk.jpg';
import vk5 from '../../assets/vk5.jpg';
import OurJourney from './Journey';
import SportsClub from './Why';

const About = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="h-[500px] bg-cover bg-center flex items-center justify-center text-white relative"
          style={{ backgroundImage: `url(${vk})` }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="text-center z-10 relative">
            <p className="tracking-widest text-sm uppercase text-orange-500 font-bold">About Covilla</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-2">Family travel agency</h1>
          </div>
        </div>

        {/* Overlap Card Section */}
        <div className="bg-white text-black -mt-16 z-10 relative px-6 md:px-12 lg:px-20 py-12 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-12 w-[90%] lg:w-[80%] mx-auto rounded-lg shadow-xl">
          {/* Left Text Section */}
          <div className="max-w-xl">
            <p className="text-xs tracking-widest uppercase text-orange-500 font-bold mb-2">
              The Future of Travel
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4 leading-tight">
              Changing the future <br /> of family travel
            </h2>
            <p className="text-gray-700 mb-6">
              Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque.
              Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas
              massa lacinia volutpat. Integer et facilisis elit, vitae.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-sm tracking-widest uppercase font-bold transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
              Contact Us
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src={vk5}
              alt="Family Travel"
              className="rounded-lg shadow-md w-full object-cover border-4 border-orange-500"
            />
          </div>
        </div>
      </section>
      
      <OurJourney />
      <SportsClub />
    </div>
  );
};

export default About;