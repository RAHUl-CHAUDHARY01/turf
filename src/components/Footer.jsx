import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white" style={{ fontFamily: 'Spectral' }}>
      {/* Location Section */}
      <section className="py-16 bg-[#1a1a1a] relative overflow-hidden">
        {/* Light orange SVG pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Cpath fill='%23ff6a00' fill-opacity='0.5' d='M3 0h1v1H3V0zm2 3h1v1H5V3zM0 2h1v1H0V2z'%3E%3C/path%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative container mx-auto px-4 z-10">
          <h2 className="text-3xl font-light tracking-wide mb-8 text-center text-[#ff6a00]">
            Our Location
          </h2>
          <div className="rounded-md overflow-hidden shadow-lg border-2 border-[#ff6a00]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2681163223806!2d77.5128098!3d28.4714711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1394fec5329%3A0x437df683b47b499b!2sSHIVIKA%20INFRA%20(Real%20Estate%20%26%20Builders)!5e0!3m2!1sen!2sin!4v1742892578530!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>

    </footer>
  );
};

export default Footer;
