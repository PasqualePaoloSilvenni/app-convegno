import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MapPage.css';

const MapPage = () => {
  return (
    <div className="map-container">
      <h2 className="map-title">Dove sono le fontanelle? 💧</h2>
      
      {/* Canvas della mappa */}
      <div className="map-canvas">
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1tvDEDPgHnwgvxmjbaLztlgutxT-MD7s&ehbc=2E312F&noprof=1"
          className="map-embed"
          title="Planimetria dell'evento"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Link to="/" className="btn btn-back">Torna alla Home</Link>
    </div>
  );
};

export default MapPage;