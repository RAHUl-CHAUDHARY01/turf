import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DestinationDropdown = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
      >
        Destinations <span>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-80 bg-white rounded-xl shadow-xl p-6">
          <p className="text-xs tracking-widest text-gray-600 uppercase mb-4">Choose a location</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'France', path: '/france' },
              { name: 'Indonesia', path: '/indonesia' },
              { name: 'Greece', path: '/greece' },
              { name: 'Egypt', path: '/egypt' },
            ].map((item) => (
              <div
                key={item.name}
                onClick={() => handleSelect(item.path)}
                className="cursor-pointer border rounded-lg p-4 hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <p className="text-xs tracking-widest text-gray-500">6 Vacations</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDropdown;
