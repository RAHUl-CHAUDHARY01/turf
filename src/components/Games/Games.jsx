import { useState } from 'react';
import bgImage from '../../assets/vk2.webp';
import fb from '../../assets/footballvector.png';
import cricketbg from '../../assets/cricketvector.png';
import pb from '../../assets/pickleballvecctor.png';
import padel from '../../assets/padel.png';
import badminton from '../../assets/badmintonvector.png';
export default function TurfGamesPage() {
  const [selectedSport, setSelectedSport] = useState(null);
  
  // Sports data
  const sports = [
    {
      id: 1,
      name: "Football",
      image:fb,
      description: "Experience the thrill of football on our premium turf with perfectly marked fields, professional-grade goals, and floodlights for evening matches.",
      price: "₹1200/hour",
      features: ["5-a-side", "7-a-side", "Full pitch"]
    },
    {
      id: 2,
      name: "Cricket",
      image:cricketbg,
      description: "Play cricket on our specialized cricket turf with well-maintained pitches, practice nets, and professional equipment for an authentic experience.",
      price: "₹1500/hour",
      features: ["Nets practice", "Full pitch", "Equipment rental"]
    },
    {
      id: 3,
      name: "Pickleball",
      image:pb,
      description: "Enjoy the rapidly growing sport of pickleball on our custom courts with proper markings, nets, and equipment for all skill levels.",
      price: "₹800/hour",
      features: ["2 courts", "Equipment available", "Beginner friendly"]
    },
    {
      id: 4,
      name: "Pedal",
      image:padel,
      description: "Try our exciting pedal go-karts on specialized tracks with various obstacles and challenges for a fun-filled adventure.",
      price: "₹600/hour",
      features: ["Track access", "Go-kart rental", "Safety gear"]
    },
    {
      id: 5,
      name: "Badminton",
      image:badminton,
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
    <div className="min-h-screen  text-white font-sans">
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
      
      {/* Sports Selection */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16">
            Choose Your <span className="text-orange-500">Game</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {sports.map((sport) => (
              <div 
                key={sport.id}
                className={`${
                  selectedSport === sport.id 
                    ? 'bg-orange-500 text-white shadow-xl' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                } p-8 rounded-2xl cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg`}
                onClick={() => setSelectedSport(sport.id)}
              >
                <div className="flex flex-col items-center text-center">
                  {/* <div className={`${
                    selectedSport === sport.id ? 'text-white' : 'text-orange-500'
                  } mb-6`}>
                    {sport.icon}
                  </div> */}
                  <img src={sport.image} alt={sport.name} className="w-24 h-24 object-cover mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{sport.name}</h3>
                  <p className="text-base font-medium opacity-90">{sport.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Selected Sport Details */}
      {selectedSport && (
        <div className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Sport Image */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={`/api/placeholder/800/600`} 
                    alt={sports[selectedSport-1].name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                      {sports[selectedSport-1].name}
                    </span>
                  </div>
                </div>
                
                {/* Sport Details */}
                <div className="p-10">
                  <h3 className="text-4xl font-extrabold mb-4">
                    {sports[selectedSport-1].name}
                    <span className="text-orange-500 ml-3">Turf</span>
                  </h3>
                  <p className="text-gray-400 mb-8 text-lg font-light leading-relaxed">{sports[selectedSport-1].description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-orange-500">Features</h4>
                    <div className="flex flex-wrap gap-3">
                      {sports[selectedSport-1].features.map((feature, index) => (
                        <span key={index} className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-3 text-orange-500">Pricing</h4>
                    <p className="text-3xl font-extrabold">{sports[selectedSport-1].price}</p>
                    <p className="text-gray-400 text-base font-light">Includes access to changing rooms and parking</p>
                  </div>
                  
                  <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 text-lg shadow-lg hover:shadow-orange-500/30">
                    Book This Turf
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Available Slots */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Available <span className="text-orange-500">Slots</span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Today's Schedule</h3>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-400 font-medium">Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-400 font-medium">Booked</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {bookings.map((booking, index) => (
                <div 
                  key={index} 
                  className={`
                    p-5 rounded-xl text-center border-2 transition-all
                    ${booking.available 
                      ? 'border-green-500 hover:bg-green-500 hover:bg-opacity-20 cursor-pointer hover:shadow-green-500/20' 
                      : 'border-red-500 bg-red-500 bg-opacity-10 opacity-70 cursor-not-allowed'}
                  `}
                >
                  <p className="text-base font-semibold">{booking.time}</p>
                  <p className="text-xs mt-2 text-gray-400 font-medium">
                    {booking.available ? 'Available' : 'Booked'}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 text-lg">
                View Full Week
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-gradient-to-b from-black to-orange-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            What Our <span className="text-orange-500">Players</span> Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-orange-500 transition-all">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center mr-5">
                    <span className="text-orange-500 font-bold text-xl">U{item}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">User {item}</h4>
                    <div className="flex text-orange-500 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 font-light leading-relaxed">"Absolutely love the facilities here! The turfs are well maintained and the staff is super helpful. Best place to play with friends on weekends."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Ready to <span className="text-orange-500">Play</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg font-light">Book your slot now and experience the best sports facilities in town. We guarantee a premium playing experience every time.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 text-lg shadow-lg hover:shadow-orange-500/30">
              BOOK A SLOT
            </button>
            <button className="bg-black text-white font-bold py-4 px-10 rounded-xl transition-all hover:bg-gray-900 text-lg">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
      {/* Add background pattern styles */}
      <style jsx global>{`
        .bg-pattern-dots {
          background-image: radial-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px);
          background-size: 25px 25px;
        }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
      `}</style>
    </div>
  );
}