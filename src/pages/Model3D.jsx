import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Model3D.css';

const Model3D = () => {
  const [selectedModel, setSelectedModel] = useState(0);

  // Array di modelli - da popolare con i tuoi file GLB/GLTF
  const models = [
    {
      id: 1,
      name: 'Box',
      url: import.meta.env.BASE_URL + 'models/Box.glb',
      description: 'Modello geometrico di base - Box'
    },
    {
      id: 2,
      name: 'Duck',
      url: import.meta.env.BASE_URL + 'models/Duck.glb',
      description: 'Modello organico - Duck'
    },
    {
      id: 3,
      name: 'Fox',
      url: import.meta.env.BASE_URL + 'models/Fox.glb',
      description: 'Modello animale realistica - Fox'
    }
  ];

  return (
    <div className="model3d-container">
      <h2 className="model3d-title">🖼️ Visualizza i Modelli 3D</h2>
      
      <div className="model3d-content">
        {/* Viewport 3D */}
        <div className="model3d-viewport">
          <model-viewer
            key={models[selectedModel].id}
            src={models[selectedModel].url}
            alt={models[selectedModel].name}
            auto-rotate
            camera-controls
            touch-action="pan-y"
            style={{
              width: '100%',
              height: '100%'
            }}
          ></model-viewer>
        </div>

        {/* Info modello */}
        <div className="model3d-info">
          <h3>{models[selectedModel].name}</h3>
          <p>{models[selectedModel].description}</p>
        </div>
      </div>

      {/* Selector modelli */}
      <div className="models-selector">
        {models.map((model, index) => (
          <button
            key={model.id}
            className={`model-btn ${index === selectedModel ? 'active' : ''}`}
            onClick={() => setSelectedModel(index)}
          >
            {model.name}
          </button>
        ))}
      </div>

      <Link to="/" className="btn btn-back">Torna alla Home</Link>
    </div>
  );
};

export default Model3D;
