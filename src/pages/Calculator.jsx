import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Calculator.css';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('sedentario');
  const [result, setResult] = useState(null);

  const calculateWater = (e) => {
    e.preventDefault();
    if (!weight || weight <= 0) return;

    // Formula base: 30ml per ogni kg di peso
    let waterMl = weight * 30;

    // Bonus in base all'attività fisica
    if (activity === 'moderato') {
      waterMl += 500;
    } else if (activity === 'intenso') {
      waterMl += 1000;
    }

    // Convertiamo in litri per la visualizzazione
    const waterLiters = (waterMl / 1000).toFixed(1);
    
    // Suggerimento pratico sulle borracce (assumendo una borraccia da 500ml)
    const bottles = Math.round(waterMl / 500);

    setResult({ liters: waterLiters, bottles: bottles });
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Calcolatore Idratazione 💧</h2>
      <p className="calculator-subtitle">
        Scopri quanta acqua dovresti bere oggi durante il convegno!
      </p>
      
      <form className="bmi-form" onSubmit={calculateWater}>
        <div className="input-group">
          <label>Il tuo peso (kg)</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            placeholder="es. 70" 
            min="30"
            max="200"
            required 
          />
        </div>

        <div className="input-group">
          <label>Quanto ti muoverai oggi?</label>
          <select 
            className="input-select"
            value={activity} 
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="sedentario">Poco</option>
            <option value="moderato">Moderato</option>
            <option value="intenso">Intenso</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-calculate">
          Calcola Obiettivo
        </button>
      </form>

      {result && (
        <div className="result-card">
          <h3 className="result-title">Il tuo obiettivo giornaliero:</h3>
          <div className="result-value">
            {result.liters} L
          </div>
          <p className="result-text">
            Circa <strong>{result.bottles} borracce</strong> da 500ml!
          </p>
          <div className="result-bottles">
            {[...Array(result.bottles)].map((_, i) => (
              <span key={i} className="bottle-icon">🧴</span>
            ))}
          </div>
        </div>
      )}

      <Link to="/" className="btn btn-back">Torna alla Home</Link>
    </div>
  );
};

export default Calculator;