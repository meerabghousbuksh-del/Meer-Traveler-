import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';

export default function Home() {
  const [showCalendarPopup, setShowCalendarPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  // Temporary local cities data taake koi import error na aaye
  const dummyCities = [
    {
      id: 1,
      name: "Kyoto",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop",
      price: "$1,200",
      rating: 4.8
    },
    {
      id: 2,
      name: "Istanbul",
      country: "Turkey",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=600&auto=format&fit=crop",
      price: "$950",
      rating: 4.7
    },
    {
      id: 3,
      name: "Rio de Janeiro",
      country: "Brazil",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=600&auto=format&fit=crop",
      price: "$1,100",
      rating: 4.9
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Banner Section */}
      <div className="hero-banner">
        <div className="hero-overlay-content">
          <h1>EXPLORE HIDDEN GEM DESTINATIONS</h1>
          <p>Plan your dream vacations with customized itineraries and live local guides.</p>

          {/* Hero Search Bar Box */}
          <div className="hero-search-container glass-widget">
            <div className="search-field">
              <FaSearch className="field-icon" />
              <input type="text" placeholder="Where to go?" />
            </div>

            {/* Date Select Field with Clickable Popup */}
            <div className="search-field date-field-wrapper">
              <FaCalendarAlt className="field-icon" />
              <div 
                className="date-trigger" 
                onClick={() => setShowCalendarPopup(!showCalendarPopup)}
              >
                {selectedDate ? selectedDate : "Select Dates"}
              </div>

              {/* On-Click Date Popup */}
              {showCalendarPopup && (
                <div className="date-popup-box">
                  <label>Choose your trip date:</label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setShowCalendarPopup(false);
                    }}
                    className="popup-date-input"
                  />
                </div>
              )}
            </div>

            <button className="btn-primary search-action-btn">Search</button>
          </div>
        </div>
      </div>

      {/* 2. Trending Destinations Section */}
      <section className="trending-container">
        <div className="section-header">
          <h2>Trending Destinations</h2>
          <span className="subtitle">Popular choices among travelers this month</span>
        </div>

        <div className="cities-grid" style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
          {dummyCities.map((city) => (
            <div key={city.id} className="city-card glass-widget" style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '15px', borderRadius: '12px', width: '250px' }}>
              <img src={city.image} alt={city.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3>{city.name}, {city.country}</h3>
              <p>Price: {city.price}</p>
              <span>⭐ {city.rating}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}