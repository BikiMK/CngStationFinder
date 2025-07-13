// src/components/SearchFilter.jsx
import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchFilter = ({ 
  searchQuery, 
  setSearchQuery, 
  activeFilter, 
  setActiveFilter 
}) => {
  return (
    <div className="mb-6 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search CNG stations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      {/* Filter Buttons */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            activeFilter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Stations
        </button>
        <button
          onClick={() => setActiveFilter('open')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            activeFilter === 'open' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Open Now
        </button>
        <button
          onClick={() => setActiveFilter('nearby')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            activeFilter === 'nearby' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Nearby
        </button>
        <button
          onClick={() => setActiveFilter('24-7')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            activeFilter === '24-7' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          24/7
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;