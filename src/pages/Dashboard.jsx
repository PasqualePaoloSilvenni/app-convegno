import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CounterContext } from '../context/CounterContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { bottleRefills, setRefills, reset, bottlesSaved, plasticSaved } = useContext(CounterContext);

  const handleChangeRefills = (e) => {
    setRefills(parseInt(e.target.value, 10));
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🌍 Il Tuo Impatto Ambientale</h2>
      
      <div className="counter-section">
        <h3>Quante volte mi hai riempito?</h3>
        
        <div className="input-section">
          <select 
            value={bottleRefills}
            onChange={handleChangeRefills}
            className="refill-select"
          >
            {[...Array(101)].map((_, i) => (
              <option key={i} value={i}>
                {i} volte
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="impact-section">
        <h3>Statistiche Risparmio</h3>
        
        <div className="impact-card">
          <div className="impact-icon">🧴</div>
          <div className="impact-info">
            <p className="impact-label">Bottiglie Risparmiate</p>
            <p className="impact-value">{bottlesSaved}</p>
          </div>
        </div>

        <div className="impact-card">
          <div className="impact-icon">♻️</div>
          <div className="impact-info">
            <p className="impact-label">Plastica Risparmiata</p>
            <p className="impact-value">{plasticSaved}g</p>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button onClick={handleReset} className="btn btn-reset">
          🔄 Resetta
        </button>
        <Link to="/" className="btn btn-back">⬅️ Torna alla Home</Link>
      </div>
    </div>
  );
};

export default Dashboard;