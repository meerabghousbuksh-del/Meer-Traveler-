triptale/
├── src/
│   ├── assets/             # Images, icons, logos
│   ├── components/         # Global components jo har jagah reuse honge
│   │   ├── Navbar.jsx      # Top navigation bar
│   │   ├── Footer.jsx      # Bottom footer section
│   │   ├── CityCard.jsx    # City display karne wala individual card
│   │   └── WeatherWidget.jsx # City detail page par weather dikhane ke liye
│   │
│   ├── pages/              # Routing wale main pages
│   │   ├── Home.jsx        # Explore / Trending destinations ( / )
│   │   ├── CityDetail.jsx  # Dynamic page ( /city/:cityName )
│   │   ├── Planner.jsx     # Itinerary builder ( /planner )
│   │   └── Saved.jsx       # Bookmarked places ( /saved )
│   │
│   ├── data/               # Mock data (Cities info, places, images)
│   │   └── citiesData.js   # Dummy JSON data taake API ke baghair chal sake
│   │
│   ├── App.jsx             # Main routing setup
│   ├── main.jsx            # Entry point (BrowserRouter wrapper)
│   └── index.css           # Global styles & Glassmorphism classes