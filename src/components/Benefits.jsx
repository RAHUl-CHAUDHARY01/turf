import React, { useState, useEffect } from 'react';
import turfImage from '../assets/vk.jpg';

export default function Benefits() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const featureCards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-4H5l7-7 7 7h-4v4H9z" />
        </svg>
      ),
      title: "Easy Booking",
      description: "Book your preferred turf slot in just a few clicks—no hassle, full convenience.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Premium Turf Quality",
      description: "Top-notch grass and lighting for an unbeatable playing experience every time.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 19h14M9 15h6" />
        </svg>
      ),
      title: "24/7 Access",
      description: "Choose your time, day or night—our turfs are ready when you are.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
        </svg>
      ),
      title: "Custom Events",
      description: "Book entire turfs for tournaments, parties, or corporate games with ease.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left - Text */}
          <div className="w-full md:w-1/2">
            <p className="text-sm font-semibold tracking-wide uppercase text-orange-500">
              Why Choose Us
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold">
              Your Game Starts Here
            </h1>
            <p className="mt-6 text-gray-300">
              Book high-quality turfs with real-time availability, seamless scheduling, and unbeatable service—because your match deserves the best.
            </p>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 flex items-center">
              BOOK NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.293 15.707a1 1 0 001.414 0l5.293-5.293a1 1 0 000-1.414L11.707 3.707a1 1 0 10-1.414 1.414L14.586 10l-4.293 4.293a1 1 0 000 1.414z" />
              </svg>
            </button>
          </div>

          {/* Right - Image with animation */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl shadow-xl">
            <img
              src={turfImage}
              alt="Turf Booking"
              className="w-full h-auto"
            />
            <div
              className={`absolute left-0 top-0 bg-white w-full h-1/2 transition-transform duration-[1500ms] ease-in-out ${
                animationStarted ? '-translate-y-full' : ''
              }`}
            />
            <div
              className={`absolute left-0 bottom-0 bg-white w-full h-1/2 transition-transform duration-[1500ms] ease-in-out ${
                animationStarted ? 'translate-y-full' : ''
              }`}
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 text-white">
            What Makes Us Stand Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl hover:shadow-orange-500/50 shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-black border border-orange-500 p-4 rounded-full mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-center text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wiggle animation */}
      <style jsx global>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
        .group:hover .group-hover\\:animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
