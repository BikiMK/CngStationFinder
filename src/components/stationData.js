// src/data/stationData.js
export const stations = [
  {
    id: 1,
    name: "Indian Oil Corp CNG Station",
    address: "New Town, Kolkata",
    distance: "20.7 km",
    rating: 4.2,
    status: "Open",
    operatingHours: "Open • 24/7",
    company: "Indian Oil Corporation (IOC)",
    companyTag: "IOC",
    launchDate: "March 22, 2021",
    suppliedBy: "Bengal Gas Company",
    color: "green",
    coordinates: "22.5726,88.3639" // Kolkata coordinates for demo
  },
  {
    id: 2,
    name: "BPCL CNG Station",
    address: "Garia, Kolkata",
    distance: "34 km",
    rating: 4.0,
    status: "Open",
    operatingHours: "Open • 24/7",
    company: "Bharat Petroleum Corporation Limited",
    companyTag: "BPCL",
    launchDate: "January 15, 2021",
    suppliedBy: "Bengal Gas Company",
    color: "green",
    coordinates: "22.4625,88.3712"
  },
  // Add more stations as needed
];

export default stations;