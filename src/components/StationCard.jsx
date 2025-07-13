// src/components/StationCard.jsx
import React from 'react';
import { MapPin, Star, Clock, Phone, Navigation, X } from 'lucide-react';

const StationCard = ({ station, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(station)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{station.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{station.address}</p>
          
          <div className="flex items-center mb-2">
            <MapPin className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{station.distance}</span>
          </div>
          
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm text-gray-600">{station.rating}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{station.operatingHours}</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            station.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {station.status}
          </span>
          <span className="text-xs text-gray-500 mt-1">{station.companyTag}</span>
        </div>
      </div>
    </div>
  );
};

export default StationCard;