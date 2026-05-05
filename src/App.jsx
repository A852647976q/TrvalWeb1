import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LocationDetail from './pages/LocationDetail.jsx';

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:locationId" element={<LocationDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
