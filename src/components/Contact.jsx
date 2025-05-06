import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    location: '',
    chatTopic: 'Turf Booking',
    message: ''
  });

  const [countryCode, setCountryCode] = useState('+91');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTopicSelect = (topic) => {
    setFormData({
      ...formData,
      chatTopic: topic
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Replace with backend integration or email service
  };

  return (
    <div className="min-h-screen bg-white px-8 py-12" style={{ fontFamily: 'Now' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-12 border-b pb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <a href="#" className="flex items-center gap-2 text-black hover:text-gray-700 transition-all">
            Book a Slot <ArrowRight size={16} />
          </a>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-600">
            Planning a match or event? Reach out to us for turf bookings, maintenance, or partnerships. We’ll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-500">FIRST NAME</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="Ashwin"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-500">LAST NAME</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="Rao"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="ashwin.sports@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-500">PHONE</label>
              <div className="flex">
                <div className="flex items-center p-3 border-b border-gray-200">
                  <select
                    className="bg-transparent outline-none text-sm"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent ml-2"
                  placeholder="9876543210"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="organization" className="block mb-2 text-sm font-medium text-gray-500">ORGANIZATION / TEAM</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="Hyderabad Strikers"
              />
            </div>

            <div>
              <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-500">PREFERRED LOCATION</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="Gachibowli, Hyderabad"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block mb-4 text-sm font-medium text-gray-500">WHAT WOULD YOU LIKE TO CHAT ABOUT?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Turf Booking', 'Event Setup', 'Maintenance Inquiry', 'Partnership'].map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleTopicSelect(topic)}
                  className={`p-3 text-center transition-all font-medium
                    ${formData.chatTopic === topic
                      ? 'bg-black text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-black'
                    }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500">TELL US MORE</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full p-3 border border-gray-200 focus:border-black focus:outline-none bg-transparent resize-none"
              placeholder="Mention your preferred timings, sports, group size or any other requirement..."
            ></textarea>
          </div>

          <div className="mb-12">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 flex items-center gap-2 hover:bg-gray-800 transition-all"
            >
              <span>Submit</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
