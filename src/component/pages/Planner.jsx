import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaPlus, FaTrash } from 'react-icons/fa';

export default function Planner() {
  const [trips, setTrips] = useState([]);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleAddTrip = (e) => {
    e.preventDefault();
    if (!destination || !date) return;

    const newTrip = {
      id: Date.now(),
      destination,
      date,
    };

    setTrips([...trips, newTrip]);
    setDestination('');
    setDate('');
  };

  const handleDeleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  return (
    <div className="planner-page" style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#1e293b', fontWeight: '800', marginBottom: '10px' }}>Your Travel Planner</h1>
        <p style={{ color: '#64748b', fontSize: '16px' }}>Plan your upcoming dream destinations and manage your trip schedule easily.</p>
      </div>

      {/* Planner Form */}
      <form onSubmit={handleAddTrip} style={{ background: '#ffffff', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '40px', border: '1px solid #e2e8f0' }}>
        <div style={{ flex: '1', minWidth: '250px', position: 'relative' }}>
          <FaMapMarkerAlt style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input 
            type="text" 
            placeholder="Destination City (e.g., Kyoto)" 
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{ width: '100%', padding: '12px 12px 12px 45px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px' }}
          />
        </div>

        <div style={{ flex: '1', minWidth: '200px', position: 'relative' }}>
          <FaCalendarAlt style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: '100%', padding: '12px 12px 12px 45px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px' }}
          />
        </div>

        <button type="submit" style={{ background: '#4f46e5', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}>
          <FaPlus /> Add Trip
        </button>
      </form>

      {/* Planned Trips List */}
      <div>
        <h2 style={{ fontSize: '22px', color: '#1e293b', marginBottom: '20px' }}>Saved Itineraries</h2>
        {trips.length > 0 ? (
          <div style={{ display: 'grid', gap: '15px' }}>
            {trips.map((trip) => (
              <div key={trip.id} style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#0f172a' }}>{trip.destination}</h3>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Date: {trip.date}</p>
                </div>
                <button onClick={() => handleDeleteTrip(trip.id)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                  <FaTrash /> Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: '#94a3b8', textAlign: 'center', padding: '30px', background: '#ffffff', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>Aapne abhi tak koi trip plan nahi ki.</p>
        )}
      </div>
    </div>
  );
}