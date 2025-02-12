import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapSection.css";

// Default Marker Icon
const customIcon = new L.Icon({
  iconUrl: "/pin.png", // Default pin
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10],
});

// Red Marker for Tunis
const redIcon = new L.Icon({
  iconUrl: "/red-pin.png", // You need to add a red pin image in public folder
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10],
});

// Locations
const locations = [
  { id: 1, name: "Shenzhen, China", coords: [22.5431, 114.0579] },
  { id: 2, name: "Madrid, Spain", coords: [40.4168, -3.7038] },
  { id: 26, name: "New York City, New York, USA", "coords": [40.7505, -73.9934] },
  { id: 3, name: "Orlando, USA", coords: [28.5383, -81.3792] },
  { id: 4, name: "Culemborg, Netherlands", coords: [51.9545, 5.2267] },
  { id: 5, name: "West Drayton, UK", coords: [51.5030, -0.4740] },
  { id: 6, name: "Nurtingen, Germany", coords: [48.6250, 9.3422] },
  { id: 7, name: "Moscow, Russia", coords: [55.7558, 37.6173] },
  { id: 8, name: "Yokohama, Japan", coords: [35.4437, 139.6380] },
  { id: 9, name: "Seoul, South Korea", coords: [37.5665, 126.9780] },
  { id: 10, name: "Mulgrave, Australia", coords: [-37.9167, 145.2000] },
  { id: 11, name: "Singapore, Singapore", coords: [1.3521, 103.8198] },
  { id: 12, name: "Hong Kong, Hong Kong", coords: [22.3193, 114.1694] },
  { id: 13, name: "Bangkok, Thailand", coords: [13.7563, 100.5018] },
  { id: 14, name: "Thankot, Nepal", coords: [27.6937, 85.2699] },
  { id: 15, name: "Yangon, Myanmar", coords: [16.8409, 96.1735] },
  { id: 16, name: "Tunis, Tunisia", coords: [36.8065, 10.1815], isRed: true }, // Tunis with red pin
  { id: 17, name: "Mexico City, Mexico", coords: [19.4326, -99.1332] },
  { id: 18, name: "Rabat, Morocco", coords: [34.0209, -6.8417] },
  { id: 19, name: "Dakar, Senegal", coords: [14.6928, -17.4467] },
  { id: 20, name: "Riyadh, Saudi Arabia", coords: [24.7136, 46.6753] },
  { id: 21, name: "Delhi, India", "coords": [28.7041, 77.1025] },
  { id: 22, name: "Hanoi, Vietnam", "coords": [21.0285, 105.8542] },
  { id: 23, name: "Bogotá, Colombia", "coords": [4.7110, -74.0721] },
  { id: 24, name: "Santiago, Chile", "coords": [-33.4489, -70.6693] },
  { id: 25, name: "Lima, Peru", "coords": [-12.0464, -77.0428] },
  { id: 27, name: "Orlando, Florida, USA", "coords": [28.5383, -81.3792] }
];

const MapSection = () => {
  return (
    <section id="map" className="map-section">
      <h2 className="map-title"> Global Presence</h2>
      <MapContainer
        center={[20, 0]} 
        zoom={2}
        className="leaflet-map"
        zoomControl={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
        style={{ width: "90%", height: "500px", margin: "auto", borderRadius: "10px" }}
      >
        {/* Dark Themed Map */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coords}
            icon={location.isRed ? redIcon : customIcon} // Red pin for Tunis
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapSection;