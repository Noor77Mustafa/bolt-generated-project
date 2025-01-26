import React, { useState } from 'react';
    
    const TorqueCalculator = () => {
      const [force, setForce] = useState('');
      const [radius, setRadius] = useState('');
      const [result, setResult] = useState('');
      
      const calculateTorque = () => {
        const F = parseFloat(force);
        const r = parseFloat(radius);
        const result = F * r;
        setResult(result.toFixed(2));
      };
      
      return (
        <div className="calculator">
          <h2>Torque Calculator</h2>
          <div className="inputs">
            <div>
              <label>Force (N):</label>
              <input type="number" value={force} onChange={(e) => setForce(e.target.value)} />
            </div>
            <div>
              <label>Radius (m):</label>
              <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} />
            </div>
            <button onClick={calculateTorque}>Calculate</button>
          </div>
          <div className="result">
            <p>Torque: {result} Nm</p>
          </div>
        </div>
      );
    };
    
    export default TorqueCalculator;
