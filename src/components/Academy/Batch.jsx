import React from "react";

import vk4 from '../../assets/vk4.avif';
export default function CoachingEnrollment() {
    return (
      <div className="font-sans text-gray-800 px-4 py-20 md:px-20">
        {/* Batch Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-100 p-6 rounded shadow text-center">
            <h3 className="text-lg font-bold mb-2">Batch 1</h3>
            <p>Monday - 5:00pm to 7:00pm</p>
            <p>Wednesday - 5:00pm to 7:00pm</p>
            <p>Friday - 5:00pm to 7:00pm</p>
            <p>Saturday - 8:30pm to 10:30pm</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow text-center">
            <h3 className="text-lg font-bold mb-2">Batch 2</h3>
            <p>Tuesday - 5:00pm to 7:00pm</p>
            <p>Thursday - 5:00pm to 7:00pm</p>
            <p>Saturday - 5:00pm to 7:00pm</p>
            <p>Sunday - 8:30pm to 10:30pm</p>
          </div>
        </div>
  
        {/* Enrollment Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <form className="space-y-4">
            <h2 className="text-3xl font-extrabold uppercase mb-6">Enroll in our coaching academy</h2>
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Write A Message"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded uppercase tracking-wide font-medium transition"
            >
              Post Message →
            </button>
          </form>
  
          {/* Image */}
          <img
            src={vk4}
            alt="Coaching Academy"
            className="rounded shadow-lg w-full object-cover"
          />
        </div>
      </div>
    );
  }
  