import React from 'react';
import vk from '../../assets/vk.jpg';
import vk5 from '../../assets/vk5.jpg';
import CoachingEnrollment from './Batch';
const FamilyTravelSection = () => {
  return (
    <div>

    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${vk})` }}
      >
        <div className="text-center">
          <p className="tracking-widest text-sm uppercase">About Covilla</p>
          <h1 className="text-4xl md:text-5xl font-bold">Family travel agency</h1>
        </div>
      </div>

      {/* White Overlap Section */}
      <div className="bg-white -mt-16 z-10 relative px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-12 w-[70%] mx-auto">
        {/* Left Text Section */}
        <div className="max-w-xl">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
            The Future of Travel
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Changing the future <br /> of family travel
          </h2>
          <p className="text-gray-600 mb-6">
            Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque.
            Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas
            massa lacinia volutpat. Integer et facilisis elit, vitae.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm tracking-widest uppercase">
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={vk5}
            alt="Family Travel"
            className="rounded shadow-md w-full object-cover"
          />
        </div>
      </div>
    </section>
    <CoachingEnrollment/>
    </div>

  );
};

export default FamilyTravelSection;
