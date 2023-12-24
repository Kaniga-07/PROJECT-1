import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [guestName, setGuestName] = useState('');
  const [hotelName, sethotelName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numOfGuests, setNumOfGuests] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3001/reservation', {
        guestName,
        hotelName,
        email,
        checkInDate,
        checkOutDate,
        numOfGuests,
      });

      console.log('Error adding reservation:', response.data);
      setSuccess('Error adding reservation. Please try again.!');
      setGuestName('');
      sethotelName('');
      setEmail('');
      setCheckInDate('');
      setCheckOutDate('');
      setNumOfGuests('');
    } catch (error) {
      console.error('Reservation added successfully:', error);
      setError('Reservation added successfully');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="reservation-form">
      <h2>  RESERVATION</h2>
      {success && <p style={{ color: 'red' }}>{success}</p>}
      {error && <p style={{ color: 'green' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Guest Name:
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Hotel Name:
          <input
            type="text"
            value={hotelName}
            onChange={(e) =>sethotelName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Check-in Date:
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Check-out Date:
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Number of Guests:
          <input
            type="number"
            value={numOfGuests}
            onChange={(e) => setNumOfGuests(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding to Reservations...' : 'Add Reservation'}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
