import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

/**
 * Main App component for WeatherPulse
 * Serves as the entry point for the application
 */
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">⛅</span> WeatherPulse
            </div>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </nav>

      <main>
        <MainContainer />
      </main>
    </div>
  );
}

export default App;