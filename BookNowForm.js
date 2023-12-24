import React, { useState } from 'react';
import axios from 'axios';

const BookNowForm = () => {
  const [guestName, setGuestName] = useState('');
  const [hotelName, setHotelName] = useState('');
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
      const response = await axios.post('http://localhost:3001/booknow', {
        guestName,
        hotelName,
        email,
        checkInDate,
        checkOutDate,
        numOfGuests,
      });

      console.log('Error in Booking:', response.data);
      setSuccess('Error !');
      setGuestName('');
      setHotelName('');
      setEmail('');
      setCheckInDate('');
      setCheckOutDate('');
      setNumOfGuests('');
    } catch (error) {
      console.error('Booking is successful:', error.message);
      setError('Your Room is Successfully Booked!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Booking-form" style={{ backgroundImage:'https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg', padding: '20px', borderRadius: '10px' }}>
      <h2>BOOK NOW</h2>
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
            onChange={(e) => setHotelName(e.target.value)}
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
          {loading ? 'Booking your Rooms...' : 'Book Now'}
        </button>
      </form>
    </div>
  );
};

export default BookNowForm;
