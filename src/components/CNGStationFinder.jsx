// src/components/CNGStationFinder.jsx
import React, { useState } from 'react';
import { User, Login } from 'lucide-react';
import { stations } from './stationData';
import StationCard from './StationCard';
import StationModal from './StationModal';
import SearchFilter from './SearchFilter';

const CNGStationFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStation, setSelectedStation] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter stations based on search query and active filter
  const filteredStations = stations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         station.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    switch (activeFilter) {
      case 'open':
        return matchesSearch && station.status === 'Open';
      case 'nearby':
        return matchesSearch && parseFloat(station.distance) <= 25;
      case '24-7':
        return matchesSearch && station.operatingHours.includes('24/7');
      default:
        return matchesSearch;
    }
  });

  const handleStationClick = (station) => {
    setSelectedStation(station);
  };

  const closeModal = () => {
    setSelectedStation(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">CNG Station Finder</h1>
            <div className="flex items-center space-x-4">
              <User className="w-6 h-6 text-gray-600" />
              <Login className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Found {filteredStations.length} station{filteredStations.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Station List */}
        <div className="space-y-4">
          {filteredStations.map(station => (
            <StationCard
              key={station.id}
              station={station}
              onClick={handleStationClick}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredStations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No stations found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Modal */}
      <StationModal
        station={selectedStation}
        onClose={closeModal}
      />
    </div>
  );
};

export default CNGStationFinder;