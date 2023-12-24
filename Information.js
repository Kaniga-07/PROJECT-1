import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Information.css";
const Information = () => {
  const [hotels, setHotels] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [newHotel, setNewHotel] = useState({ name: '', location: '' });
  const [newBooking, setNewBooking] = useState({
    hotelId: '',
    guestName: '',
    checkInDate: '',
    checkOutDate: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotelsResponse = await axios.get("http://localhost:8080/hotels");
        const bookingsResponse = await axios.get("http://localhost:8080/bookings");

        setHotels(hotelsResponse.data.hotels);
        setBookings(bookingsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e, stateSetter, category) => {
    const { name, value } = e.target;
    stateSetter((prevState) => ({ ...prevState, [name]: value, category }));
  };

  const handleAddHotel = async () => {
    try {
      const response = await axios.post("http://localhost:8080/hotels", newHotel);
      setHotels((prevHotels) => [...prevHotels, response.data]);
      setNewHotel({ name: '', location: '' });
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  const handleAddBooking = async () => {
    try {
      const response = await axios.post("http://localhost:8080/bookings", newBooking);
      setBookings((prevBookings) => [...prevBookings, response.data]);
      setNewBooking({
        hotelId: '',
        guestName: '',
        checkInDate: '',
        checkOutDate: '',
        setNumOfGuests:'',
      });
    } catch (error) {
      console.error('Error adding booking:', error);
    }
  };

  const handleDeleteHotel = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/hotels/${id}`);
      setHotels((prevHotels) => prevHotels.filter((hotel) => hotel.id !== id));
    } catch (error) {
      console.error('Error deleting hotel:', error);
    }
  };

  const handleDeleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/bookings/${id}`);
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div className="app-container">
     
    <div style={{ marginTop: "20vh"}}>
      <h2 style={{color:"blue",fontFamily:"cursive"}}>Hotel Management</h2>
      <div>
        <label htmlFor="name">Hotel Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newHotel.name}
          onChange={(e) => handleInputChange(e, setNewHotel, 'hotel')}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={newHotel.location}
          onChange={(e) => handleInputChange(e, setNewHotel, 'hotel')}
        />
        <button onClick={handleAddHotel}>Add Hotel</button>
      </div>

      <div>
        <label htmlFor="hotelId">Hotel ID:</label>
        <input
          type="text"
          id="hotelId"
          name="hotelId"
          value={newBooking.hotelId}
          onChange={(e) => handleInputChange(e, setNewBooking, 'booking')}
        />
        <label htmlFor="guestName">Guest Name:</label>
        <input
          type="text"
          id="guestName"
          name="guestName"
          value={newBooking.guestName}
          onChange={(e) => handleInputChange(e, setNewBooking, 'booking')}
        />
        <label htmlFor="checkInDate">Check-In Date:</label>
        <input
          type="text"
          id="checkInDate"
          name="checkInDate"
          value={newBooking.checkInDate}
          onChange={(e) => handleInputChange(e, setNewBooking, 'booking')}
        />
        <label htmlFor="checkOutDate">Check-Out Date:</label>
        <input
          type="text"
          id="checkOutDate"
          name="checkOutDate"
          value={newBooking.checkOutDate}
          onChange={(e) => handleInputChange(e, setNewBooking, 'booking')}
        />
        <label htmlFor="Noofguests">Number of Guests:</label>
        <input
          type="text"
          id="Noofguests"
          name="Noofguests"
          value={newBooking.noofguests}
          onChange={(e) => handleInputChange(e, setNewBooking, 'booking')}
        />
        <button onClick={handleAddBooking}>Add Bookings</button>
      </div>

      <h3 style={{textAlign:"center",color:"blue",fontFamily:"cursive"}}>Hotels</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.id}</td>
              <td>{hotel.name}</td>
              <td>{hotel.location}</td>
              <td>
                <button onClick={() => handleDeleteHotel(hotel.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{textAlign:"center",color:"blue",fontFamily:"cursive"}}>Bookings</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Hotel ID</th>
            <th>Guest Name</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Number of Guests</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.hotelId}</td>
              <td>{booking.guestName}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default Information;
