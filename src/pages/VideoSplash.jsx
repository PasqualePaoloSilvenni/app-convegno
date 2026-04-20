import React, { useState, useRef, useEffect } from 'react';
import '../styles/VideoSplash.css';

const VideoSplash = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleSkip = () => {
    setIsSkipped(true);
    if (onComplete) onComplete();
  };

  const handleVideoEnd = () => {
    if (onComplete) onComplete();
  };

  if (isSkipped) return null;

  return (
    <div className="video-splash-overlay">
      <div className="video-splash-container">
        <video
          ref={videoRef}
          className="splash-video"
          onEnded={handleVideoEnd}
          autoPlay
          muted
        >
          <source 
            src="/videoplayback.mp4" 
            type="video/mp4" 
          />
          Il tuo browser non supporta i video HTML5
        </video>
        
        <button 
          className="skip-video-btn"
          onClick={handleSkip}
        >
          ⏭️ Salta
        </button>
      </div>
    </div>
  );
};

export default VideoSplash;
