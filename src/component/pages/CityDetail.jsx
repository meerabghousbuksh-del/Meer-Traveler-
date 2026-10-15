import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
export default function CityDetail() {
  const { cityName } = useParams();

  const cityInfo = {
    name: cityName ? cityName.toUpperCase() : "KYOTO",
    country: "Japan",
    tagline: "The ancient capital of Japan, famous for classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    reviewsCount: 1240,
    price: "$1,200",
    highlights: [
      "Fushimi Inari Shrine walking tour",
      "Traditional Tea Ceremony experience",
      "Bamboo Grove serenity walk",
      "Local authentic Japanese cuisine tasting"
    ]
  };

  return (
    <div className="city-detail-page">
      {/* Back Link */}
      <Link to="/" className="city-back-link">
        <FaArrowLeft /> Back to Home
      </Link>

      {/* Main Card */}
      <div className="city-detail-container">
        {/* Header Image Section */}
        <div className="city-image-wrapper">
          <img src={cityInfo.image} alt={cityInfo.name} className="city-detail-img" />
          <div className="city-image-gradient">
            <h1 className="city-main-title">{cityInfo.name}</h1>
            <p className="city-country-text">
              <FaMapMarkerAlt /> {cityInfo.country}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="city-detail-body">
          <div className="city-top-row">
            <div>
              <span className="city-badge">Featured Destination</span>
              <div className="city-rating-box">
                <FaStar className="star-icon" /> {cityInfo.rating} 
                <span className="reviews-count">({cityInfo.reviewsCount} reviews)</span>
              </div>
            </div>

            <div className="city-price-area">
              <span className="starting-text">Starting from</span>
              <span className="price-tag">{cityInfo.price}</span>
            </div>
          </div>

          <h3 className="section-title">About the Destination</h3>
          <p className="city-description">{cityInfo.tagline}</p>

          <h3 className="section-title">Trip Highlights</h3>
          <div className="highlights-grid">
            {cityInfo.highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <FaCheckCircle className="highlight-check" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="btn-primary book-btn">
            Book This Trip Now
          </button>
        </div>
      </div>
    </div>
  );
}