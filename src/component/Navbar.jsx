import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloudSun, FaSearch } from 'react-icons/fa'; // Icon import kiya
import { FaCompass } from 'react-icons/fa';
export default function Navbar() {
  return (
    <nav className="navbar-container glass-widget">
      {/* 1. Logo */}
      <div className="nav-logo">
  {/* Span ki jagah seedha icon component use karein */}
  <FaCompass className="logo-icon" size={24} color="#6366f1" />
  <h3>Meer Traveler</h3>
</div>

      {/* 2. Nav Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/saved">Saved Places</Link>
      </div>

      {/* 3. Weather Widget & Button (Chota sa compact design) */}
      <div className="nav-right-section">
        {/* Chota Weather Widget jo Navbar mein fit ho jaye */}
        <div className="nav-weather-badge" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>
          <FaCloudSun style={{ color: '#f39c12', fontSize: '18px' }} />
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>26°C</span>
        </div>

        <button className="btn-primary start-exploring-btn">Start Exploring</button>
      </div>
    </nav>
  );
}