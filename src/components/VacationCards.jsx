import React from 'react';
import vk5 from '../assets/vk5.jpg';

function VacationCards() {
  return (
    <div>
      <section className="relative w-full bg-black py-14 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Redefining Turf Sports <br /> in Jammu & Kashmir
            </h2>
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              Welcome to Isle of Ball — the premier private turf and sports arena in J&K. We're not just a facility; we're a revolution in grassroots sports. From late-night football matches to early-morning cricket sessions, we foster a vibrant community of athletes, hobbyists, and dreamers. Our mission is to make quality play accessible, enjoyable, and memorable for all.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-sm font-semibold tracking-wider uppercase transition duration-300 shadow-md">
              Book Your Slot
            </button>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={vk5}
              alt="Turf Ground Facility"
              className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[450px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default VacationCards;
