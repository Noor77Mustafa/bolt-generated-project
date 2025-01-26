import React from 'react';
    import BeamCalculator from './BeamCalculator';
    import TorqueCalculator from './TorqueCalculator';
    
    const App = () => {
      return (
        <div className="app">
          <h1>Mechanical Engineering Calculator</h1>
          <div className="calculators">
            <BeamCalculator />
            <TorqueCalculator />
          </div>
        </div>
      );
    };
    
    export default App;
