// src/components/StationModal.jsx
import React from 'react';
import { X, MapPin, Star, Clock, Phone, Navigation } from 'lucide-react';

const StationModal = ({ station, onClose }) => {
  if (!station) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">{station.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <p className="text-gray-800">{station.address}</p>
                <p className="text-sm text-gray-600">{station.distance} away</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <p className="text-gray-800">Rating: {station.rating}/5</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <p className="text-gray-800">{station.operatingHours}</p>
                <p className={`text-sm font-medium ${
                  station.status === 'Open' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {station.status}
                </p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold text-gray-800 mb-2">Company Details</h3>
              <p className="text-gray-600 mb-1">Company: {station.company}</p>
              <p className="text-gray-600 mb-1">Supplied by: {station.suppliedBy}</p>
              <p className="text-gray-600">Launch Date: {station.launchDate}</p>
            </div>
            
            <div className="flex space-x-3 pt-4">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </button>
              <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                <Navigation className="w-4 h-4 mr-2" />
                Navigate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationModal;