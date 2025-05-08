import { useState } from 'react';
import bgImage from '../../assets/vk2.webp';
export default function FarmSportsPage() {
  const [selectedFarm, setSelectedFarm] = useState(null);
  
  // Farms data
  const farms = [
    {
      id: 1,
      name: "orange Valley Farm",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
        </svg>
      ),
      description: "Experience the beauty of countryside sports on our expansive orange farm with panoramic views, fresh air, and natural playing surfaces for an authentic outdoor experience.",
      price: "₹1500/hour",
      features: ["Football", "Cricket", "Volleyball"],
      sportsAvailable: ["Football", "Cricket", "Archery", "Horse Riding"]
    },
    {
      id: 2,
      name: "Riverside Ranch",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      description: "Play alongside the serene riverside with cool breezes and lush orangeery. Perfect for water sports and land-based activities with stunning natural backdrops.",
      price: "₹1800/hour",
      features: ["Water sports", "Open fields", "BBQ area"],
      sportsAvailable: ["Kayaking", "Fishing", "Football", "Volleyball"]
    },
    {
      id: 3,
      name: "Highland Meadows",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      description: "Elevated farm experience with stunning hill views and cooler temperatures. Perfect for endurance sports and training in unique atmospheric conditions.",
      price: "₹2000/hour",
      features: ["Hiking trails", "Mountain biking", "Camping"],
      sportsAvailable: ["Mountain Biking", "Trail Running", "Camping", "Outdoor Yoga"]
    },
    {
      id: 4,
      name: "Orchard Estate",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16c1.5 0 3-1.5 3-3s-1.5 3-3 3-3-1.5-3-3 1.5 3 3 3z" />
        </svg>
      ),
      description: "Play amidst fruit orchards with seasonal blooms and fruits. A unique setting with shaded areas perfect for family sports and recreational activities.",
      price: "₹1200/hour",
      features: ["Fruit picking", "Picnic areas", "Family activities"],
      sportsAvailable: ["Frisbee Golf", "Badminton", "Croquet", "Picnicking"]
    },
    {
      id: 5,
      name: "Lakeside Farm",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      description: "Beautiful lakefront farm offering water-based activities alongside traditional sports fields. Enjoy spectacular sunsets while playing your favorite sports.",
      price: "₹1600/hour",
      features: ["Lakefront access", "Boating", "Sunset views"],
      sportsAvailable: ["Swimming", "Paddle Boarding", "Beach Volleyball", "Fishing"]
    }
  ];

  const bookings = [
    { time: "06:00 AM - 08:00 AM", available: true },
    { time: "08:00 AM - 10:00 AM", available: false },
    { time: "10:00 AM - 12:00 PM", available: true },
    { time: "12:00 PM - 02:00 PM", available: true },
    { time: "02:00 PM - 04:00 PM", available: false },
    { time: "04:00 PM - 06:00 PM", available: true },
    { time: "06:00 PM - 08:00 PM", available: false },
    { time: "08:00 PM - 10:00 PM", available: true },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
           {/* Hero Section */}
           <div className="relative overflow-hidden bg-black">
             <div className="h-96 flex items-center justify-center" style={{backgroundImage: `url(${bgImage})`}}>
             </div>
             <div className="container  px-4 z-10 text-center bg-white border-2 border-orange-500 rounded-3xl mt-[-8rem] py-8 mx-auto w-[80%]">
                 <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                   <span className="text-black">GAME</span>
                   <span className="text-orange-500">ON</span>
                 </h1>
                 <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-black">
                   Premium sports facilities for your passion. Book your turf now!
                 </p>
                 <div className="mt-10 flex flex-wrap justify-center gap-6">
                   <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 text-lg">
                     BOOK NOW
                   </button>
                   <button className="border-orange-500  border-2 text-orange-500 hover:border-orange-500 hover:text-orange-500 font-semibold py-4 px-8 rounded-xl transition-all text-lg">
                     EXPLORE FACILITIES
                   </button>
                 </div>
               </div>
           </div>
      {/* Farms Selection */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            Choose Your <span className="text-orange-500">Farm</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {farms.map((farm) => (
              <div 
                key={farm.id}
                className={`${
                  selectedFarm === farm.id 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                } p-6 rounded-xl cursor-pointer transition-all transform hover:scale-105`}
                onClick={() => setSelectedFarm(farm.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${
                    selectedFarm === farm.id ? 'text-white' : 'text-orange-500'
                  } mb-4`}>
                    {farm.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{farm.name}</h3>
                  <p className="text-sm opacity-80">{farm.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Selected Farm Details */}
      {selectedFarm && (
        <div className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Farm Image */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={`/api/placeholder/800/600`} 
                    alt={farms[selectedFarm-1].name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {farms[selectedFarm-1].name}
                    </span>
                  </div>
                </div>
                
                {/* Farm Details */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2">
                    {farms[selectedFarm-1].name}
                    <span className="text-orange-500 ml-2">Farm</span>
                  </h3>
                  <p className="text-gray-400 mb-6">{farms[selectedFarm-1].description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Sports Available</h4>
                    <div className="flex flex-wrap gap-2">
                      {farms[selectedFarm-1].sportsAvailable.map((sport, index) => (
                        <span key={index} className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {farms[selectedFarm-1].features.map((feature, index) => (
                        <span key={index} className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Pricing</h4>
                    <p className="text-2xl font-bold">{farms[selectedFarm-1].price}</p>
                    <p className="text-gray-400 text-sm">Includes access to farm facilities and equipment rental</p>
                  </div>
                  
                  <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
                    Book This Farm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Available Slots */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Available <span className="text-orange-500">Slots</span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Today's Schedule</h3>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-400">Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-400">Booked</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {bookings.map((booking, index) => (
                <div 
                  key={index} 
                  className={`
                    p-4 rounded-lg text-center border
                    ${booking.available 
                      ? 'border-orange-500 hover:bg-orange-500 hover:bg-opacity-20 cursor-pointer' 
                      : 'border-red-500 bg-red-500 bg-opacity-10 opacity-60 cursor-not-allowed'}
                  `}
                >
                  <p className="text-sm font-medium">{booking.time}</p>
                  <p className="text-xs mt-1 text-gray-400">
                    {booking.available ? 'Available' : 'Booked'}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-all">
                View Full Week
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Farm Activities */}
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular <span className="text-orange-500">Farm Activities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="h-48 bg-gray-300 relative">
                <img src="/api/placeholder/400/200" alt="Farm football" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Football</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Experience football on natural grass fields with panoramic farm views. Perfect for friendly matches and team-building events.</p>
                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-all">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="h-48 bg-gray-300 relative">
                <img src="/api/placeholder/400/200" alt="Horse riding" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Horse Riding</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Enjoy guided horse riding on scenic trails through farmlands and countryside. Available for beginners and experienced riders.</p>
                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-all">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="h-48 bg-gray-300 relative">
                <img src="/api/placeholder/400/200" alt="Outdoor yoga" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Outdoor Yoga</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Practice yoga in serene farm settings with professional instructors. Morning and evening sessions available in natural surroundings.</p>
                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-gradient-to-b from-black to-orange-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our <span className="text-orange-500">Visitors</span> Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-bold">V{item}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Visitor {item}</h4>
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">"What an amazing experience playing sports in a natural farm setting! The fresh air and beautiful surroundings made our football match extra special. Will definitely return soon!"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to <span className="text-orange-500">Experience</span> Farm Sports?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Book your farm experience now and enjoy sports in natural settings. Connect with nature while enjoying your favorite activities.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
              BOOK A FARM
            </button>
            <button className="bg-black text-white font-bold py-3 px-8 rounded-lg transition-all hover:bg-gray-900">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">
                <span>FARM</span>
                <span className="text-orange-500">PLAY</span>
                <span className="text-gray-500 text-sm ml-2">SPORTS</span>
              </h3>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400 text-center">
            © 2025 FarmPlay Sports. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Add background pattern styles */}
      <style jsx global>{`
        .bg-pattern-dots {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}