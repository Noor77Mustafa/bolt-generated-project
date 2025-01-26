import React, { useState } from 'react';
    
    const BeamCalculator = () => {
      const [length, setLength] = useState('');
      const [load, setLoad] = useState('');
      const [result, setResult] = useState('');
      
      const calculateDeflection = () => {
        const w = parseFloat(load);
        const L = parseFloat(length);
        const result = (w * L ** 3) / 8;
        setResult(result.toFixed(2));
      };
      
      return (
        <div className="calculator">
          <h2>Beam Deflection Calculator</h2>
          <div className="inputs">
            <div>
              <label>Load (N):</label>
              <input type="number" value={load} onChange={(e) => setLoad(e.target.value)} />
            </div>
            <div>
              <label>Length (m):</label>
              <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <button onClick={calculateDeflection}>Calculate</button>
          </div>
          <div className="result">
            <p>Deflection: {result} m</p>
          </div>
        </div>
      );
    };
    
    export default BeamCalculator;
