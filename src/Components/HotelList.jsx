// src/components/HotelList.jsx
import React from 'react';
import HotelCard from './HotelCard';

const HotelList = () => {
  const hotels = [
    {
      Id: "H01",
      Name: "Horizon Hotel",
      Description:
        "A luxurious and comfortable retreat offering premium accommodations, fine dining, and exceptional hospitality. Perfect for business and leisure travelers alike.",
      Price: 50000,
      Image: "https://via.placeholder.com/400x300", // Replace with your actual image link
    },
    // Add more hotels if needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.Id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
