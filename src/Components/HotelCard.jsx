// src/components/HotelCard.jsx
import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={hotel.Image} alt={hotel.Name} />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{hotel.Name}</h2>
        <p className="text-gray-600 mt-2">{hotel.Description}</p>
        <p className="text-xl font-semibold text-gray-800 mt-4">Price: ₹{hotel.Price}</p>
      </div>
    </div>
  );
};

export default HotelCard;
