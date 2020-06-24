import React from 'react';
import './App.css';

function App() {
  const api = {
    key: process.env.API_KEY,
    base: process.env.API_BASE
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
