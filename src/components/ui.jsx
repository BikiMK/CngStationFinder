import React, { useState } from 'react';
import { MapPin, Star, Clock, Phone, Navigation, X, Search, Filter, User, LogIn } from 'lucide-react';

const CNGStationFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStation, setSelectedStation] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const stations = [
    {
      id: 1,
      name: 'Indian Oil Corp CNG Station',
      address: 'New Town, Kolkata',
      distance: '20.7 km',
      rating: 4.2,
      status: 'open',
      operatingHours: 'Open • 24/7',
      company: 'Indian Oil Corporation (IOC)',
      companyTag: 'IOC',
      launchedDate: 'March 22, 2021',
      suppliedBy: 'Bengal Gas Company',
      color: 'green',
      coordinates: '22.5726,88.3639' // Kolkata coordinates for demo
    },
    {
      id: 2,
      name: 'BPCL CNG Station',
      address: 'Garia, Kolkata',
      distance: '34 km',
      rating: 4.0,
      status: 'open',
      operatingHours: 'Open • 24/7',
      company: 'Bharat Petroleum Corporation Limited',
      companyTag: 'BPCL',
      launchedDate: 'January 15, 2021',
      suppliedBy: 'Bengal Gas Company',
      color: 'green',
      coordinates: '22.4676,88.3918'
    },
    {
      id: 3,
      name: 'Champion Hub',
      address: 'New Town, Kolkata',
      distance: '18.9 km',
      rating: 4.5,
      status: 'closed',
      operatingHours: 'Closed • Opens 6 AM',
      company: 'Champion Energy',
      companyTag: 'BPCL',
      launchedDate: 'June 10, 2020',
      suppliedBy: 'Bengal Gas Company',
      color: 'red',
      coordinates: '22.5726,88.3639'
    },
    {
      id: 4,
      name: 'Kasba WBTC Depot CNG Station',
      address: 'Kasba West Bengal Transport Corporation Depot, Kolkata',
      distance: '25.3 km',
      rating: 3.8,
      status: 'open',
      operatingHours: 'Open • 6 AM - 10 PM',
      company: 'West Bengal Transport Corporation',
      companyTag: 'BPCL',
      launchedDate: 'September 5, 2020',
      suppliedBy: 'Bengal Gas Company',
      color: 'green',
      coordinates: '22.5176,88.3832'
    }
  ];

  const filteredStations = stations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         station.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'open') return matchesSearch && station.status === 'open';
    if (activeFilter === 'topRated') return matchesSearch && station.rating >= 4.2;
    if (activeFilter === 'nearest') return matchesSearch;
    
    return matchesSearch;
  });

  const handleStationClick = (station) => {
    setSelectedStation(station);
  };

  const closeModal = () => {
    setSelectedStation(null);
  };

  const getStatusColor = (status) => {
    return status === 'open' ? 'text-success' : 'text-danger';
  };

  const getDirections = (station) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${station.coordinates}&destination_place_id=${encodeURIComponent(station.name + ', ' + station.address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        :root {
          --classic-gold: #C9A961;
          --classic-navy: #1a2332;
          --classic-cream: #F8F6F0;
          --classic-gray: #6B7280;
          --classic-border: #E5E7EB;
          --classic-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: var(--classic-cream);
          color: var(--classic-navy);
        }
        
        .min-vh-100 { min-height: 100vh; }
        .sidebar { width: 420px; }
        
        .classic-header {
          background: linear-gradient(135deg, var(--classic-navy) 0%, #2a3441 100%);
          border-bottom: 3px solid var(--classic-gold);
        }
        
        .classic-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .classic-subtitle {
          color: var(--classic-gold);
          font-weight: 500;
          opacity: 0.9;
        }
        
        .classic-fuel-icon {
          background: linear-gradient(45deg, var(--classic-gold), #D4AF37);
          box-shadow: var(--classic-shadow);
          border: 2px solid rgba(255,255,255,0.2);
        }
        
        .classic-btn-primary {
          background: linear-gradient(45deg, var(--classic-gold), #D4AF37);
          border: none;
          color: var(--classic-navy);
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: var(--classic-shadow);
        }
        
        .classic-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(201, 169, 97, 0.3);
          background: linear-gradient(45deg, #D4AF37, var(--classic-gold));
          color: var(--classic-navy);
        }
        
        .classic-btn-outline {
          border: 2px solid var(--classic-gold);
          color: var(--classic-gold);
          background: transparent;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .classic-btn-outline:hover {
          background: var(--classic-gold);
          color: var(--classic-navy);
          transform: translateY(-1px);
        }
        
        .classic-card {
          background: white;
          border: 1px solid var(--classic-border);
          border-radius: 12px;
          box-shadow: var(--classic-shadow);
          transition: all 0.3s ease;
        }
        
        .classic-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .classic-search {
          border: 2px solid var(--classic-border);
          border-radius: 8px;
          padding: 12px 16px 12px 45px;
          background: white;
          transition: all 0.3s ease;
        }
        
        .classic-search:focus {
          border-color: var(--classic-gold);
          box-shadow: 0 0 0 3px rgba(201, 169, 97, 0.1);
          outline: none;
        }
        
        .classic-filter-section {
          background: white;
          border: 1px solid var(--classic-border);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
          box-shadow: var(--classic-shadow);
        }
        
        .classic-filter-title {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          color: var(--classic-navy);
          margin-bottom: 16px;
        }
        
        .classic-location-card {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 2px solid #0ea5e9;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 24px;
        }
        
        .classic-stations-title {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          color: var(--classic-navy);
          border-bottom: 2px solid var(--classic-gold);
          padding-bottom: 8px;
          margin-bottom: 20px;
        }
        
        .status-indicator { 
          width: 14px; 
          height: 14px; 
          border-radius: 50%; 
          display: inline-block;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .status-green { background-color: #10b981; }
        .status-red { background-color: #ef4444; }
        
        .classic-modal-backdrop {
          background: rgba(26, 35, 50, 0.8);
          backdrop-filter: blur(8px);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1050;
        }
        
        .classic-modal-content {
          position: relative;
          z-index: 1060;
          max-width: 600px;
          margin: 0 auto;
          margin-top: 5%;
        }
        
        .classic-modal-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--classic-border);
        }
        
        .classic-modal-header {
          border-bottom: 2px solid var(--classic-gold);
          padding: 24px;
          background: linear-gradient(135deg, var(--classic-cream) 0%, white 100%);
          border-radius: 20px 20px 0 0;
        }
        
        .classic-modal-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          color: var(--classic-navy);
          margin: 0;
        }
        
        .classic-info-item {
          padding: 16px 0;
          border-bottom: 1px solid var(--classic-border);
        }
        
        .classic-info-item:last-child {
          border-bottom: none;
        }
        
        .classic-info-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(45deg, var(--classic-gold), #D4AF37);
          color: white;
          box-shadow: var(--classic-shadow);
        }
        
        .classic-badge {
          background: linear-gradient(45deg, var(--classic-gold), #D4AF37);
          color: var(--classic-navy);
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          box-shadow: var(--classic-shadow);
        }
        
        .classic-map-placeholder {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 2px dashed var(--classic-border);
          border-radius: 12px;
          min-height: 500px;
        }
        
        .classic-map-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(45deg, var(--classic-gold), #D4AF37);
          box-shadow: 0 10px 30px rgba(201, 169, 97, 0.3);
        }
        
        .classic-legend {
          background: white;
          border: 1px solid var(--classic-border);
          border-radius: 8px;
          padding: 16px;
          box-shadow: var(--classic-shadow);
        }
        
        .classic-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: white;
          border: 2px solid var(--classic-border);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--classic-gray);
        }
        
        .classic-close-btn:hover {
          background: var(--classic-gold);
          color: var(--classic-navy);
          border-color: var(--classic-gold);
        }
        
        .classic-rating {
          color: #f59e0b;
          font-weight: 600;
        }
        
        .classic-distance {
          color: #0ea5e9;
          font-weight: 600;
        }
        
        .classic-status-open {
          color: #10b981;
          font-weight: 600;
        }
        
        .classic-status-closed {
          color: #ef4444;
          font-weight: 600;
        }
        
        /* Map Styles */
        .station-marker {
          transition: all 0.3s ease;
        }
        
        .station-marker:hover {
          transform: scale(1.2);
          filter: drop-shadow(0 6px 12px rgba(0,0,0,0.3)) !important;
        }
        
        .pulse-ring {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .map-container {
          position: relative;
          overflow: hidden;
        }
        
        .map-zoom-area {
          transition: transform 0.5s ease;
        }
        
        .map-zoom-area.zoomed {
          transform: scale(1.5);
        }
      `}</style>

      <div className="min-vh-100">
        {/* Header */}
        <header className="classic-header">
          <div className="container-fluid px-4 py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="classic-fuel-icon rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '55px', height: '55px' }}>
                  <span className="text-white fs-3">⛽</span>
                </div>
                <div>
                  <h1 className="classic-title fs-3 mb-0">CNG Station Locator</h1>
                  <p className="classic-subtitle small mb-0">West Bengal, India</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button className="classic-btn-primary btn d-flex align-items-center px-4 py-2">
                  <LogIn className="me-2" size={18} />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="d-flex" style={{ height: 'calc(100vh - 84px)' }}>
          {/* Left Sidebar */}
          <div className="sidebar overflow-auto" style={{ background: 'var(--classic-cream)' }}>
            <div className="p-4">
              {/* Search Bar */}
              <div className="position-relative mb-4">
                <Search className="position-absolute text-muted" size={18} style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  className="classic-search form-control"
                  placeholder="Search stations or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="classic-filter-section">
                <div className="d-flex align-items-center mb-3">
                  <Filter className="text-muted me-2" size={18} />
                  <h6 className="classic-filter-title mb-0">Filter Options</h6>
                </div>
                <div className="row g-2 mb-2">
                  <div className="col-6">
                    <button
                      onClick={() => setActiveFilter('all')}
                      className={`btn w-100 ${
                        activeFilter === 'all' ? 'classic-btn-primary' : 'classic-btn-outline'
                      }`}
                    >
                      All Stations
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={() => setActiveFilter('open')}
                      className={`btn w-100 ${
                        activeFilter === 'open' ? 'classic-btn-primary' : 'classic-btn-outline'
                      }`}
                    >
                      Open Now
                    </button>
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col-6">
                    <button
                      onClick={() => setActiveFilter('topRated')}
                      className={`btn w-100 ${
                        activeFilter === 'topRated' ? 'classic-btn-primary' : 'classic-btn-outline'
                      }`}
                    >
                      ⭐ Top Rated
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={() => setActiveFilter('nearest')}
                      className={`btn w-100 ${
                        activeFilter === 'nearest' ? 'classic-btn-primary' : 'classic-btn-outline'
                      }`}
                    >
                      🚀 Nearest
                    </button>
                  </div>
                </div>
              </div>

              {/* Current Location */}
              <div className="classic-location-card">
                <div className="d-flex align-items-center">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px' }}>
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <h6 className="fw-bold text-primary mb-1">Your Current Location</h6>
                    <p className="text-muted small mb-0">Barasat, West Bengal</p>
                  </div>
                </div>
              </div>

              {/* Nearby Stations */}
              <div>
                <h5 className="classic-stations-title">
                  Available Stations ({filteredStations.length})
                </h5>
                <div className="d-flex flex-column gap-3">
                  {filteredStations.map((station) => (
                    <div
                      key={station.id}
                      onClick={() => handleStationClick(station)}
                      className="classic-card"
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center mb-3">
                              <span className={`status-indicator me-3 ${station.color === 'green' ? 'status-green' : 'status-red'}`}></span>
                              <h6 className="fw-bold mb-0" style={{ color: 'var(--classic-navy)' }}>{station.name}</h6>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                              <MapPin className="text-muted me-2" size={16} />
                              <span className="text-muted">{station.address}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="d-flex align-items-center me-4">
                                <Star className="text-warning me-1" size={16} fill="currentColor" />
                                <span className="classic-rating">{station.rating}</span>
                              </div>
                              <div className="d-flex align-items-center me-4">
                                <Navigation className="text-primary me-1" size={16} />
                                <span className="classic-distance">{station.distance}</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <Clock className="text-muted me-1" size={16} />
                                <span className={station.status === 'open' ? 'classic-status-open' : 'classic-status-closed'}>
                                  {station.status === 'open' ? 'Open' : 'Closed'}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="ms-3">
                            <span className="classic-badge">
                              {station.companyTag}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-grow-1">
            <div className="h-100 position-relative" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)' }}>
              {/* Map Container */}
              <div className="h-100 p-4">
                <div className="h-100 position-relative bg-white rounded-3 shadow-lg border overflow-hidden">
                  {/* Map Header */}
                  <div className="position-absolute top-0 start-0 end-0 bg-white border-bottom p-3 d-flex justify-content-between align-items-center" style={{ zIndex: 10 }}>
                    <div>
                      <h5 className="classic-title mb-0">West Bengal CNG Stations</h5>
                      <small className="text-muted">Interactive Map View</small>
                    </div>
                    <div className="d-flex gap-3">
                      <div className="d-flex align-items-center">
                        <span className="status-indicator status-green me-2"></span>
                        <span className="small fw-medium">Open</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="status-indicator status-red me-2"></span>
                        <span className="small fw-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* SVG Map */}
                  <svg 
                    width="100%" 
                    height="100%" 
                    viewBox="0 0 800 600" 
                    className="position-absolute" 
                    style={{ top: '80px', left: 0, background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
                  >
                    {/* West Bengal State Outline */}
                    <path
                      d="M150 100 L200 80 L280 90 L350 100 L400 120 L450 140 L500 160 L550 180 L580 220 L590 260 L595 300 L590 340 L580 380 L560 420 L530 450 L490 470 L440 480 L380 485 L320 480 L260 475 L200 465 L150 450 L110 420 L90 380 L85 340 L90 300 L100 260 L120 220 L140 180 L150 140 Z"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                    />
                    
                    {/* Major Cities */}
                    <g>
                      {/* Kolkata */}
                      <circle cx="450" cy="350" r="8" fill="#1e40af" stroke="white" strokeWidth="2"/>
                      <text x="460" y="345" fontSize="14" fill="#1e40af" fontWeight="bold">Kolkata</text>
                      
                      {/* Barasat */}
                      <circle cx="430" cy="320" r="5" fill="#64748b" stroke="white" strokeWidth="1"/>
                      <text x="440" y="315" fontSize="12" fill="#64748b">Barasat</text>
                      
                      {/* New Town */}
                      <circle cx="470" cy="330" r="5" fill="#64748b" stroke="white" strokeWidth="1"/>
                      <text x="480" y="325" fontSize="12" fill="#64748b">New Town</text>
                      
                      {/* Garia */}
                      <circle cx="440" cy="370" r="5" fill="#64748b" stroke="white" strokeWidth="1"/>
                      <text x="450" y="365" fontSize="12" fill="#64748b">Garia</text>
                      
                      {/* Kasba */}
                      <circle cx="460" cy="360" r="5" fill="#64748b" stroke="white" strokeWidth="1"/>
                      <text x="470" y="355" fontSize="12" fill="#64748b">Kasba</text>
                    </g>
                    
                    {/* CNG Stations */}
                    {stations.map((station, index) => {
                      const positions = [
                        { x: 470, y: 330 }, // New Town
                        { x: 440, y: 370 }, // Garia
                        { x: 470, y: 330 }, // New Town (Champion Hub)
                        { x: 460, y: 360 }  // Kasba
                      ];
                      
                      return (
                        <g key={station.id}>
                          <circle
                            cx={positions[index].x}
                            cy={positions[index].y}
                            r="12"
                            fill={station.color === 'green' ? '#10b981' : '#ef4444'}
                            stroke="white"
                            strokeWidth="3"
                            className="station-marker"
                            style={{ cursor: 'pointer', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
                            onClick={() => handleStationClick(station)}
                          />
                          <text
                            x={positions[index].x}
                            y={positions[index].y + 1}
                            fontSize="16"
                            fill="white"
                            textAnchor="middle"
                            style={{ cursor: 'pointer', pointerEvents: 'none' }}
                          >
                            ⛽
                          </text>
                          {selectedStation && selectedStation.id === station.id && (
                            <circle
                              cx={positions[index].x}
                              cy={positions[index].y}
                              r="20"
                              fill="none"
                              stroke="#fbbf24"
                              strokeWidth="3"
                              strokeDasharray="5,5"
                              className="pulse-ring"
                            />
                          )}
                        </g>
                      );
                    })}
                    
                    {/* Roads/Highways */}
                    <g stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="5,3">
                      <path d="M430 320 L450 350 L470 330" />
                      <path d="M440 370 L460 360 L470 330" />
                      <path d="M150 300 L450 350 L580 300" />
                    </g>
                    
                    {/* Compass */}
                    <g transform="translate(720, 120)">
                      <circle cx="0" cy="0" r="30" fill="white" stroke="#cbd5e1" strokeWidth="2"/>
                      <path d="M0,-20 L8,0 L0,20 L-8,0 Z" fill="#dc2626"/>
                      <text x="0" y="-35" fontSize="12" fill="#64748b" textAnchor="middle">N</text>
                    </g>
                    
                    {/* Scale */}
                    <g transform="translate(50, 520)">
                      <rect x="0" y="0" width="100" height="30" fill="white" stroke="#cbd5e1" strokeWidth="1" rx="5"/>
                      <line x1="10" y1="15" x2="90" y2="15" stroke="#374151" strokeWidth="2"/>
                      <line x1="10" y1="10" x2="10" y2="20" stroke="#374151" strokeWidth="2"/>
                      <line x1="90" y1="10" x2="90" y2="20" stroke="#374151" strokeWidth="2"/>
                      <text x="50" y="12" fontSize="10" fill="#374151" textAnchor="middle">50 km</text>
                    </g>
                  </svg>
                  
                  {/* Station Info Panel */}
                  {selectedStation && (
                    <div className="position-absolute bottom-0 start-0 end-0 bg-white border-top p-3" style={{ zIndex: 10 }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="fw-bold mb-1">{selectedStation.name}</h6>
                          <small className="text-muted">{selectedStation.address}</small>
                        </div>
                        <div className="d-flex gap-2">
                          <span className={`badge ${selectedStation.status === 'open' ? 'bg-success' : 'bg-danger'}`}>
                            {selectedStation.status === 'open' ? 'Open' : 'Closed'}
                          </span>
                          <span className="badge bg-warning text-dark">
                            ⭐ {selectedStation.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Station Details Modal */}
        {selectedStation && (
          <div className="classic-modal-backdrop d-flex align-items-center justify-content-center p-4">
            <div className="classic-modal-content">
              <div className="classic-modal-card">
                <div className="classic-modal-header position-relative">
                  <div
                    className="classic-close-btn"
                    onClick={closeModal}
                  >
                    <X size={20} />
                  </div>
                  <div className="d-flex align-items-center">
                    <span className={`status-indicator me-3 ${selectedStation.color === 'green' ? 'status-green' : 'status-red'}`}></span>
                    <h3 className="classic-modal-title">{selectedStation.name}</h3>
                  </div>
                </div>

                <div className="p-4">
                  <div className="row g-0">
                    <div className="col-12 classic-info-item">
                      <div className="d-flex align-items-center">
                        <div className="classic-info-icon me-3">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Address</h6>
                          <p className="text-muted mb-0">{selectedStation.address}, West Bengal</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 classic-info-item">
                      <div className="d-flex align-items-center">
                        <div className="classic-info-icon me-3">
                          <Navigation size={20} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Distance</h6>
                          <p className="text-muted mb-0">{selectedStation.distance} from your location</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 classic-info-item">
                      <div className="d-flex align-items-center">
                        <div className="classic-info-icon me-3">
                          <Clock size={20} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Operating Hours</h6>
                          <p className="text-muted mb-0">{selectedStation.operatingHours}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 classic-info-item">
                      <div className="d-flex align-items-center">
                        <div className="classic-info-icon me-3">
                          <Star size={20} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Rating</h6>
                          <p className="text-muted mb-0">{selectedStation.rating} ⭐ (Customer Reviews)</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 classic-info-item">
                      <div className="d-flex align-items-center">
                        <div className="classic-info-icon me-3">
                          <span style={{ fontSize: '16px' }}>🏢</span>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Operating Company</h6>
                          <p className="text-muted mb-0">{selectedStation.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3 mt-4 mb-3">
                    <div className="col-6">
                      <button 
                        className="classic-btn-primary btn w-100 d-flex align-items-center justify-content-center py-3"
                        onClick={() => getDirections(selectedStation)}
                      >
                        <Navigation className="me-2" size={18} />
                        <span>Get Directions</span>
                      </button>
                    </div>
                    <div className="col-6">
                      <button className="classic-btn-outline btn w-100 d-flex align-items-center justify-content-center py-3">
                        <Phone className="me-2" size={18} />
                        <span>Call Station</span>
                      </button>
                    </div>
                  </div>

                  <div className="text-center pt-3 border-top">
                    <p className="text-muted mb-0">
                      <strong>Launched:</strong> {selectedStation.launchedDate} • 
                      <strong> Supplied by:</strong> {selectedStation.suppliedBy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CNGStationFinder;