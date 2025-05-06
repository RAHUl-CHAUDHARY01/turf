import React from 'react';
import vk from '../../assets/vk.jpg';
const journeyHighlights = [
  {
    title: "Vision & Foundation",
    description: "Founded as J&K's first private football turf, we started with a clear vision to revolutionize sports culture in the region and create a vibrant community space.",
    icon: "🏆"
  },
  {
    title: "Growth & Development",
    description: "We rapidly expanded our facilities and offerings, introducing structured training programs for youth and adults while hosting regional tournaments.",
    icon: "📈"
  },
  {
    title: "Community Building",
    description: "With over 1,400 active members today, we've cultivated a passionate community of sports enthusiasts who call our grounds their second home.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Excellence & Recognition",
    description: "Our commitment to quality has earned us recognition as the premier sports destination in the region, setting standards for others to follow.",
    icon: "🌟"
  }
];

const OurJourney = () => {
  return (
    <section className="py-24 bg-white text-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-orange-500 opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-500 opacity-10 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-lg uppercase tracking-wider">Our Story</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2 text-black">The Journey So Far</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-700">
            Our path from inception to becoming the region's premier sports destination 
            has been an adventure of passion, innovation, and community-building.
          </p>
        </div>

        {/* Image and text section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                 <img src={vk} alt="Image" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-lg flex items-center justify-center text-white text-3xl font-bold">
                2018
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">From Dream to Reality</h3>
            <p className="text-gray-700 mb-6">
              What started as a dream to create a professional sports facility in J&K has 
              blossomed into the region's most vibrant sports community. Our founders envisioned 
              a place where athletes of all levels could train, compete, and connect, setting a new 
              standard for sports facilities in the region.
            </p>
            <p className="text-gray-700">
              Through determination and a passion for excellence, we've overcome numerous challenges
              to build not just a sports facility, but a thriving community that continues to grow 
              and evolve with each passing year.
            </p>
          </div>
        </div>

        {/* Journey cards */}
        <div className="mt-20">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 text-black">
            Key Milestones in Our Journey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl hover:shadow-orange-500/50 shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-black border border-orange-500 p-4 rounded-full mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-center text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-20 bg-black text-white p-10 rounded-lg relative">
          <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 24H6C6 14.05 14 6 24 6V14C19.58 14 16 17.58 16 22V24H24V40H8V24H14ZM38 24H30C30 14.05 38 6 48 6V14C43.58 14 40 17.58 40 22V24H48V40H32V24H38Z" fill="#F97316" opacity="0.2"/>
            </svg>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl italic mb-6">
              "Watching our vision come to life and seeing the positive impact we've made on the 
              local sports community has been the most rewarding journey of my life. We're just 
              getting started."
            </p>
            <div className="font-bold text-orange-500">Ajay Vaid</div>
            <div className="text-gray-400">Founder & Head Coach</div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Be Part of Our Story</h3>
          <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-md text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg uppercase tracking-wider">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;