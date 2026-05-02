import React, { useState } from 'react';
import { BrowserRouter as Router, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CounterProvider } from './context/CounterContext';
import Grainient from './components/Grainient';
import VideoSplash from './pages/VideoSplash';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import Model3D from './pages/Model3D';
import './App.css';

// Componente interno per tracciare la location
function AppContent({ showVideo, setShowVideo }) {
  const location = useLocation();

  React.useEffect(() => {
    // Se non siamo sulla home, nascondi il video
    if (location.pathname !== '/') {
      setShowVideo(false);
    }
  }, [location.pathname, setShowVideo]);
  
  return (
    <div className="app-container">
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/models" element={<Model3D />} />
        </Routes>
      </div>
    </div>
  );
}

// Componente per le transizioni di pagina
function PageTransition({ children }) {
  return (
    <div className="page-transition">
      {children}
    </div>
  );
}

function App() {
  const [showVideo, setShowVideo] = useState(() => {
    const path = window.location.pathname;
    return path === '/' || path === '/app-convegno/';
  });

  const handleVideoComplete = () => {
    sessionStorage.setItem('video_shown', 'true');
    setShowVideo(false);
  };

  // Usa HashRouter su GitHub Pages (produzione), BrowserRouter in dev
  const RouterComponent = import.meta.env.DEV ? Router : HashRouter;
  const basename = import.meta.env.DEV ? '/' : undefined;

  return (
    <CounterProvider>
      {showVideo && <VideoSplash onComplete={handleVideoComplete} />}
      <Router>
        <AppContent showVideo={showVideo} setShowVideo={setShowVideo} />
      </Router>
    </CounterProvider>
  );
}

export default App;