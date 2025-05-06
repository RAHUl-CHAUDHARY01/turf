import { useState } from 'react';

export default function TurfGamesPage() {
  const [selectedSport, setSelectedSport] = useState(null);
  
  // Sports data
  const sports = [
    {
      id: 1,
      name: "Football",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 21.075 1 15 5.925 4 12 4zm5.75 10.456l-6.22 6.22c1.492.307 3.054.096 4.35-1.2c1.296-1.296 1.507-2.858 1.2-4.35l.67-.67zm.032-6.2c-.903-1.014-2.134-1.678-3.493-1.922l-4.9 4.9c.244 1.36.908 2.59 1.922 3.493l6.47-6.47zm-5.782-.9c-1.492-.307-3.054-.096-4.35 1.2c-1.296 1.296-1.507 2.858-1.2 4.35l6.22-6.22l-.67.67z" />
        </svg>
      ),
      description: "Experience the thrill of football on our premium turf with perfectly marked fields, professional-grade goals, and floodlights for evening matches.",
      price: "₹1200/hour",
      features: ["5-a-side", "7-a-side", "Full pitch"]
    },
    {
      id: 2,
      name: "Cricket",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c-1.5 0-2.75-1.25-2.75-2.75S10.5 16.5 12 16.5s2.75 1.25 2.75 2.75S13.5 22 12 22zM14.5 7.5v-5H9.5v5m8.5-3h-3M5 4.5h3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16.5V9" />
        </svg>
      ),
      description: "Play cricket on our specialized cricket turf with well-maintained pitches, practice nets, and professional equipment for an authentic experience.",
      price: "₹1500/hour",
      features: ["Nets practice", "Full pitch", "Equipment rental"]
    },
    {
      id: 3,
      name: "Pickleball",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c5 3 5 15 0 18m0-18c-5 3-5 15 0 18" />
        </svg>
      ),
      description: "Enjoy the rapidly growing sport of pickleball on our custom courts with proper markings, nets, and equipment for all skill levels.",
      price: "₹800/hour",
      features: ["2 courts", "Equipment available", "Beginner friendly"]
    },
    {
      id: 4,
      name: "Pedal",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
          <circle cx="19" cy="12" r="2" strokeWidth={1.5} />
          <circle cx="5" cy="12" r="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6M19 12h-4M9 12H5" />
        </svg>
      ),
      description: "Try our exciting pedal go-karts on specialized tracks with various obstacles and challenges for a fun-filled adventure.",
      price: "₹600/hour",
      features: ["Track access", "Go-kart rental", "Safety gear"]
    },
    {
      id: 5,
      name: "Badminton",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4l6 18M12 4L6 22M17 4c-1.5 2-7 3-7 3s5.5 1.5 7 3m-10 0c1.5-2 7-3 7-3s-5.5-1.5-7-3" />
        </svg>
      ),
      description: "Play badminton on our indoor courts with professional flooring, proper lighting, and high-quality equipment for an optimal playing experience.",
      price: "₹700/hour",
      features: ["4 courts", "Indoor facility", "Equipment rental"]
    }
  ];

  const bookings = [
    { time: "06:00 AM - 07:00 AM", available: true },
    { time: "07:00 AM - 08:00 AM", available: false },
    { time: "08:00 AM - 09:00 AM", available: true },
    { time: "09:00 AM - 10:00 AM", available: true },
    { time: "04:00 PM - 05:00 PM", available: false },
    { time: "05:00 PM - 06:00 PM", available: true },
    { time: "06:00 PM - 07:00 PM", available: false },
    { time: "07:00 PM - 08:00 PM", available: true },
    { time: "08:00 PM - 09:00 PM", available: true },
    { time: "09:00 PM - 10:00 PM", available: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-black via-black to-orange-900 h-96 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-pattern-dots"></div>
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">GAME</span>
              <span className="text-orange-500">ON</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Premium sports facilities for your passion. Book your turf now!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                BOOK NOW
              </button>
              <button className="bg-transparent border-2 border-white hover:border-orange-500 hover:text-orange-500 font-bold py-3 px-6 rounded-lg transition-all">
                EXPLORE FACILITIES
              </button>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Sports Selection */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            Choose Your <span className="text-orange-500">Game</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {sports.map((sport) => (
              <div 
                key={sport.id}
                className={`${
                  selectedSport === sport.id 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                } p-6 rounded-xl cursor-pointer transition-all transform hover:scale-105`}
                onClick={() => setSelectedSport(sport.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${
                    selectedSport === sport.id ? 'text-white' : 'text-orange-500'
                  } mb-4`}>
                    {sport.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{sport.name}</h3>
                  <p className="text-sm opacity-80">{sport.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Selected Sport Details */}
      {selectedSport && (
        <div className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Sport Image */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={`/api/placeholder/800/600`} 
                    alt={sports[selectedSport-1].name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {sports[selectedSport-1].name}
                    </span>
                  </div>
                </div>
                
                {/* Sport Details */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2">
                    {sports[selectedSport-1].name}
                    <span className="text-orange-500 ml-2">Turf</span>
                  </h3>
                  <p className="text-gray-400 mb-6">{sports[selectedSport-1].description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {sports[selectedSport-1].features.map((feature, index) => (
                        <span key={index} className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Pricing</h4>
                    <p className="text-2xl font-bold">{sports[selectedSport-1].price}</p>
                    <p className="text-gray-400 text-sm">Includes access to changing rooms and parking</p>
                  </div>
                  
                  <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
                    Book This Turf
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
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-400">Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-400">Booked</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {bookings.map((booking, index) => (
                <div 
                  key={index} 
                  className={`
                    p-4 rounded-lg text-center border
                    ${booking.available 
                      ? 'border-green-500 hover:bg-green-500 hover:bg-opacity-20 cursor-pointer' 
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
      
      {/* Testimonials */}
      <div className="bg-gradient-to-b from-black to-orange-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our <span className="text-orange-500">Players</span> Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-bold">U{item}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">User {item}</h4>
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">"Absolutely love the facilities here! The turfs are well maintained and the staff is super helpful. Best place to play with friends on weekends."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to <span className="text-orange-500">Play</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Book your slot now and experience the best sports facilities in town. We guarantee a premium playing experience every time.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
              BOOK A SLOT
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
                <span>GAME</span>
                <span className="text-orange-500">ON</span>
                <span className="text-gray-500 text-sm ml-2">TURF</span>
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
            © 2025 GameOn Turf. All rights reserved.
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