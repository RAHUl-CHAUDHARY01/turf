import React from "react";

const teamMembers = [
  {
    name: "Ajay Vaid",
    role: "Founder/Coach (Pickleball)",
    image: "/images/ajay.jpg",
  },
  {
    name: "Sunanjita Mahajan",
    role: "Chief Strategist/Marketing Head",
    image: "/images/sunanjita.jpg",
  },
  {
    name: "Nipun Vaid",
    role: "Chief Advisor",
    image: "/images/nipun.jpg",
  },
  {
    name: "Rakesh Kumar Vaid",
    role: "General Manager",
    image: "/images/rakesh.jpg",
  },
  {
    name: "Rohit Choudhary",
    role: "Ground Incharge",
    image: "/images/rohit.jpg",
  },
  {
    name: "Vishwa Mitter",
    role: "Coach (Football)",
    image: "/images/vishwa.jpg",
  },
  {
    name: "Vineet Rawal",
    role: "Coach (Football)",
    image: "/images/vineet.jpg",
  },
];

const features = [
  {
    title: "Pioneers in J&K",
    description:
      "J&K's first private football turf since 2018, sets the standard for sports!",
    icon: "⚽",
  },
  {
    title: "Social-Centric",
    description:
      "Uniting sports lovers, creating Jammu's home ground and a vibrant local culture",
    icon: "🎯",
  },
  {
    title: "Bold Leadership",
    description:
      "Embracing risk to cater all players' needs proving our brilliance and vision",
    icon: "🎖️",
  },
  {
    title: "Sports for All",
    description:
      "Practising inclusivity, making sports accessible by all, improving lifestyles",
    icon: "🏈",
  },
  {
    title: "Connect with Nature",
    description:
      "Indulge in a serene escape from the urban bustle and dive into a natural haven in Queen's Orchid",
    icon: "🌱",
  },
];

const Stats = [
  { label: "Members", value: "1,400+" },
  { label: "Tournaments", value: "19+" },
  { label: "Trainees", value: "250+" },
];

export default function SportsClub() {
  return (
    <div className="bg-black text-white px-4 sm:px-6 py-16 space-y-20">
      {/* Team Section */}
      <section className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-lg uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">Our Passionate Guides</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 justify-center">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="group relative bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              <div className="h-24 w-24 mx-auto mt-4  overflow-hidden ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-orange-500 font-bold text-base">{member.name}</h3>
                <p className="font-medium text-gray-400 text-xs mt-1">{member.role}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <div className="text-center p-3">
                  <p className="text-white text-xs">Connect</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer">
                      <i className="text-xs">in</i>
                    </span>
                    <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer">
                      <i className="text-xs">@</i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-lg uppercase tracking-wider">Our Advantages</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-900 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="font-bold text-xl text-orange-500 mb-3">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-md text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 uppercase tracking-wider">
            BOOK NOW
          </button>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-24">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url(/images/grass-bg.jpg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-lg uppercase tracking-wider">Success</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">Our Achievements To Date</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-center max-w-4xl mx-auto">
            {Stats.map((stat) => (
              <div key={stat.label} className="w-64 p-6 bg-black bg-opacity-60 rounded-lg border border-orange-500">
                <p className="text-6xl font-black text-orange-500 mb-2">{stat.value}</p>
                <p className="font-bold text-xl uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}