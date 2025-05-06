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
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black">
            <img
              src={slide.image}
              alt={slide.location}
              className="w-full h-full object-cover opacity-70"
            />
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
              <p className="text-orange-400 text-lg md:text-xl font-light mb-4">
                {slide.description}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
                {slide.location}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* Vertical slide indicator */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30">
        <div className="flex flex-col items-center space-y-4">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === currentSlide
                  ? 'bg-orange-400 scale-125'
                  : 'bg-white bg-opacity-30 hover:bg-opacity-70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-md hover:bg-gray-200 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-md hover:bg-gray-200 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Book Now CTA */}
      <div className="absolute left-1/2 bottom-24 transform -translate-x-1/2 z-30">
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-semibold text-sm tracking-wide transition">
          Book Your Turf
        </button>
      </div>
    </div>
  );
}
