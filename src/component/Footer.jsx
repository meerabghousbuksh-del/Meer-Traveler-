import React from 'react';

export default function Footer() {
  return (
    <footer className="glass-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Meer Traveler</h3>
          <p>Explore hidden gem destinations with custom itineraries and live widgets.</p>
        </div>

        <div className="footer-col">
          <h4>Site Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/planner">Planner</a></li>
            <li><a href="/saved">Saved Places</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Community</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#profits">Profits</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Social Media</h4>
          <div className="social-links-row">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023-2026 Meer Traveler. All rights reserved.</p>
      </div>
    </footer>
  );
}