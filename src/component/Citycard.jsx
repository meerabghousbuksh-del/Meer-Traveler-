import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import "../Explore.css"
export default function CityCard({ city = {} }) { // Default empty object de diya
  // Optional chaining (?.) lagane se agar city undefined hoga toh app crash nahi hogi
  const [isSaved, setIsSaved] = useState(city?.saved || false);

  return (
    <div className="glass-card">
      <div className="card-image-container">
        <img src={city?.image} alt={city?.title} className="card-image" />
        <button 
          className="heart-btn" 
          onClick={() => setIsSaved(!isSaved)}
          aria-label="Save Destination"
        >
          {isSaved ? <FaHeart color="#ef4444" /> : <FaRegHeart color="#475569" />}
        </button>
        <span className="badge-tag">Trending</span>
      </div>

      <div className="card-content">
        <div className="location-heading">
          <FaMapMarkerAlt className="loc-icon" />
          <h3>{city?.title}</h3>
        </div>
        <p className="card-desc">{city?.description}</p>
        
        <div className="card-footer-row">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color={i < (city?.rating || 0) ? "#f59e0b" : "#cbd5e1"} size={14} />
            ))}
          </div>
          <span className={`save-status ${isSaved ? 'text-saved' : ''}`}>
            {isSaved ? '❤️ Saved' : '🤍 Save'}
          </span>
        </div>

        <Link to={`/city/${encodeURIComponent(city?.title || '')}`} className="card-btn">
          Explore City
        </Link>
      </div>
    </div>
  );
}