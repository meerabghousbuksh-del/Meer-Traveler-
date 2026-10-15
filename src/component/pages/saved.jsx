import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaStar } from 'react-icons/fa';

export default function Saved() {
  // Saved places ki list state
  const [savedCities, setSavedCities] = useState([
    {
      id: 1,
      name: "Kyoto",
      country: "Japan",
      price: "$1,200",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600"
    },
    {
      id: 3,
      name: "Rio de Janeiro",
      country: "Brazil",
      price: "$1,100",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=600"
    }
  ]);

  const handleRemove = (id) => {
    setSavedCities(savedCities.filter(city => city.id !== id));
  };

  return (
    <div className="saved-page">
      {/* Header Section */}
      <div className="saved-header">
        <h1 className="saved-title">Saved Places</h1>
        <p className="saved-subtitle">
          Aapki pasandeeda destinations jo aapne future trips ke liye save ki hain.
        </p>
      </div>

      {/* Saved Grid Section */}
      <div className="saved-grid-container">
        {savedCities.length > 0 ? (
          <div className="saved-grid">
            {savedCities.map((city) => (
              <div key={city.id} className="city-card">
                <div className="city-card-img-wrapper">
                  <img src={city.image} alt={city.name} />
                </div>
                <div className="city-card-body">
                  <div className="city-card-title-row">
                    <h3>{city.name}, {city.country}</h3>
                    <div className="city-card-rating">
                      <FaStar className="star-icon" /> <span>{city.rating}</span>
                    </div>
                  </div>
                  <p className="city-card-desc">Saved for your dream vacation.</p>
                  <div className="card-footer">
                    <span className="card-price">{city.price}</span>
                    <button 
                      onClick={() => handleRemove(city.id)} 
                      className="remove-btn"
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-saved-places">
            <p>Aapne abhi tak koi bhi place save nahi ki hai.</p>
            <Link to="/explore" className="explore-more-link">Explore Destinations</Link>
          </div>
        )}
      </div>
    </div>
  );
}