import React, { useState } from 'react';
import CityCard from '../Citycard';
import { FaSearch } from 'react-icons/fa';
export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');

  const allCities = [
    { 
      id: 1, 
      name: "Kyoto", 
      country: "Japan", 
      price: "$1,200", 
      rating: 4.8, 
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600" 
    },
    { 
      id: 2, 
      name: "Istanbul", 
      country: "Turkey", 
      price: "$950", 
      rating: 4.7, 
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=600" 
    },
    { 
      id: 3, 
      name: "Rio de Janeiro", 
      country: "Brazil", 
      price: "$1,100", 
      rating: 4.9, 
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=600" 
    },
    { 
      id: 4, 
      name: "Paris", 
      country: "France", 
      price: "$1,350", 
      rating: 4.6, 
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600" 
    },
    { 
      id: 5, 
      name: "Bali", 
      country: "Indonesia", 
      price: "$850", 
      rating: 4.9, 
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600" 
    },
    { 
      id: 6, 
      name: "New York", 
      country: "USA", 
      price: "$1,500", 
      rating: 4.7, 
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600" 
    }
  ];

  const filteredCities = allCities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="explore-page">
      {/* Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-overlay">
          <div className="explore-hero-content">
            <h1 className="explore-title">Explore All Destinations</h1>
            <p className="explore-subtitle">
              Discover breathtaking places, curated itineraries, and unforgettable experiences around the globe.
            </p>

            {/* Search Bar */}
            <div className="explore-search-box">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by city or country..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="explore-search-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cities Grid Section */}
      <div className="explore-grid-container">
        <div className="explore-grid">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))
          ) : (
            <p className="no-city-found">Koi destination nahi mili!</p>
          )}
        </div>
      </div>
    </div>
  );
}