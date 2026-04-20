import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRandomFact } from '../data/waterFacts';
import '../styles/Home.css';

const Home = () => {
  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState('');

  const handleGenerateFact = () => {
    setCurrentFact(getRandomFact());
    setShowFact(true);
  };

  const closeFact = () => {
    setShowFact(false);
  };

  return (
    <div className="home-container">
      <header>
        <img src="/logo.svg" alt="Logo Convegno" className="header-logo" />
        <div className="header-content">
          <h1>Acqua Summit 2026</h1>
          <p>Ciao! Scegli cosa vuoi fare:</p>
        </div>
        <img src="/logo.svg" alt="Logo Convegno" className="header-logo" />
      </header>

      <div className="menu-buttons">
        <Link to="/map" className="btn">🗺️ Scopri dove riempirmi</Link>
        <Link to="/dashboard" className="btn btn-success">
          📊 Traccia il Tuo Impatto
        </Link>
        <Link to="/calculator" className="btn">💧 Quanto devi bere?</Link>
        <Link to="/models" className="btn">
          🖼️ Galleria Interattiva
        </Link>
        <button onClick={handleGenerateFact} className="btn">
          💡 Scopri una curiosità
        </button>
      </div>

      {showFact && (
        <>
          <div className="modal-overlay" onClick={closeFact}></div>
          <div className="modal-container">
            <div className="modal-content">
              <p className="modal-text">{currentFact}</p>
              <button onClick={closeFact} className="modal-close-btn">
                Chiudi
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;