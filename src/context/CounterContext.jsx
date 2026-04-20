import React, { createContext, useState, useEffect } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [bottleRefills, setBottleRefills] = useState(() => {
    const saved = localStorage.getItem('app_bottle_refills');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('app_bottle_refills', bottleRefills);
  }, [bottleRefills]);

  const addRefill = () => setBottleRefills(prev => prev + 1);
  const setRefills = (num) => setBottleRefills(Math.max(0, num));
  const reset = () => setBottleRefills(0);

  // Calcoli risparmio
  const bottlesSaved = bottleRefills; // 1 riempimento borraccia = 1 bottiglia risparmiata
  const plasticSaved = bottleRefills * 40; // ~40g di plastica per bottiglia

  return (
    <CounterContext.Provider value={{ 
      bottleRefills, 
      addRefill, 
      setRefills,
      reset,
      bottlesSaved,
      plasticSaved
    }}>
      {children}
    </CounterContext.Provider>
  );
};