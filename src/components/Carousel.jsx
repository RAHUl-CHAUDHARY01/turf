import { useState } from 'react';
import vk from '../assets/vk.jpg';
import vk2 from '../assets/vk2.webp';
import vk3 from '../assets/vk3.webp';
import vk4 from '../assets/vk4.avif';
import vk5 from '../assets/vk5.jpg';

export default function Carousel() {
  const slides = [
    {
      id: 1,
      location: "Turf Nights at Isle of Ball",
      image: vk,
      description: "Experience the thrill of evening football and late-night cricket under our floodlights. Book your turf time now!"
    },
    {
      id: 2,
      location: "Cricket Turf Arena",
      image: vk2,
      description: "Jammu’s first premium cricket turf — built for serious play and community bonding. Let's make runs, not excuses."
    },
    {
      id: 3,
      location: "Pickleball and More",
      image: vk3,
      description: "From casual pickleball games to high-energy workouts, Isle of Ball is your daily escape into active living."
    },
    {
      id: 4,
      location: "Training & Coaching Camps",
      image: vk4,
      description: "Host your coaching academy or skill-building camp in our pro-level turf with gear, guidance, and goals."
    },
    {
      id: 5,
      location: "Weekend Tournaments",
      image: vk5,
      description: "Join competitive leagues, weekend tournaments, and fun events that bring sports lovers together."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden" style={{fontFamily:'Bungee'}}>
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <img
          src={slide.image}
          alt={slide.location}
          className="w-full h-full object-cover brightness-75"
        />
  
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90 z-10"></div>
  
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-orange-500 drop-shadow-xl mb-4 uppercase tracking-wide">
            {slide.location}
          </h2>
          <p className="text-white text-base md:text-lg max-w-xl">
            {slide.description}
          </p>
        </div>
      </div>
    ))}
  
    {/* Dots */}
    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 space-y-3">
      {slides.map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 rounded-full cursor-pointer border-2 ${
            index === currentSlide ? 'bg-orange-500 border-orange-500 scale-110' : 'border-white'
          } transition-all`}
        />
      ))}
    </div>
  
    {/* Navigation Arrows */}
    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-4">
      <button onClick={prevSlide} className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition shadow-lg">
        ↑
      </button>
      <button onClick={nextSlide} className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition shadow-lg">
        ↓
      </button>
    </div>
  
    {/* CTA Button */}
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
      <button className="bg-orange-500 hover:bg-white hover:text-orange-600 text-black font-bold py-3 px-8 rounded-full transition tracking-wide text-lg shadow-lg uppercase">
        Book Your Turf
      </button>
    </div>
  </div>
  
  );
}
