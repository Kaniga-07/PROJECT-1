import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import "./ViewDetails.css";
//import { useTheme } from './ThemeContext';

const Foote = () => {


  return (
    <footer>
      <div style={{ display: 'flex', justifyContent:'space-around', alignItems:'center',textAlign:'center',height:'100%' }}>
        <div>
          <p>Follow us on social media:</p>
          <div className="social-icons">
            <FaFacebook className="icon" onClick={() => window.open('https://www.facebook.com', '_blank')} />
            <FaTwitter className="icon" onClick={() => window.open('https://www.twitter.com', '_blank')} />
            <FaInstagram className="icon" onClick={() => window.open('https://www.instagram.com', '_blank')} />
            <FaEnvelope className="icon" onClick={() => window.open('mailto:info@example.com', '_blank')} />
            <FaWhatsapp className="icon" onClick={() => window.open('https://wa.me/1234567890', '_blank')} />
          </div>

        </div>
        <div>
          <p>Contact us:</p>
          <p>Email: info@yourhotel.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};
const ViewDetails = () => {
 
  return (
    // <div style={{backgroundImage:`URL("https://cdn.britannica.com/74/182174-050-6755AB49/balloon-sky.jpg")`}}>

    <div style={{marginTop:"100rem"}}>
      <h1 style={{color:"blue",textAlign:"center"}}>Hotel Management System</h1>
      <p>
        A hotel management system helps manage different aspects of a hotel, including reservations,
        room availability, customer information, and more.
      </p>

      <h2>Types of Hotels:</h2>

      <div>
        <h3>Luxury Hotel:</h3>
        <p>Indulge in luxury and sophistication in our elegant Luxury Hotel.</p>
        <p>Room Types: Deluxe Suites, Executive Rooms, Presidential Suite</p>
        <p>Amenities: Spa, fine dining, concierge service</p>
      </div>

      <div>
        <h3>Business Hotel:</h3>
        <p>Perfect for business travelers with top-notch amenities and services.</p>
        <p>Room Types: Business Suites, Executive Rooms, Meeting Facilities</p>
        <p>Amenities: Business center, conference rooms, high-speed internet</p>
      </div>

      <div>
        <h3>Budget Inn</h3>
        <p>Affordable and cozy accommodations for your budget. Book your room today!</p>
        <p>Room Types: Standard Rooms, Economy Rooms, Family Rooms</p>
        <p>Amenities: Complimentary breakfast, free Wi-Fi, budget-friendly</p>
      </div>

      <div>
        <h3>Beach Resort:</h3>
        <p>Escape to paradise in our Beach Resort. Relax and enjoy the sun and sea!</p>
        <p>Room Types: Ocean View Suites, Beachfront Bungalows, Standard Rooms</p>
        <p>Amenities: Private beach access, water activities, beachfront dining</p>
      </div>

      <div>
        <h3>City View Hotel</h3>
        <p>Enjoy stunning city views from our centrally located City View Hotel. Book your urban retreat!</p>
        <p>Room Types: City View Suites, Executive Rooms, Standard Rooms</p>
        <p>Amenities: Rooftop bar, cityscape views, central location</p>
      </div>

      <div>
        <h3>Mountain Lodge:</h3>
        <p>Experience the beauty of nature in our Mountain Lodge. Perfect for outdoor enthusiasts!</p>
        <p>Room Types: Mountain View Cabins, Lodge Rooms, Cozy Cottages</p>
        <p>Amenities: Hiking trails, outdoor activities, mountain views</p>
      </div>

      <div>
        <h3> Family Inn:</h3>
        <p>Welcome to our Family Inn! We offer family-friendly accommodations with activities for all ages.</p>
        <p>Room Types: Family Suites, Connecting Rooms, Kid-Friendly Amenities</p>
        <p>Amenities: Children's play area, family-friendly services</p>
      </div>

      <div>
        <h3>Historic Hotel</h3>
        <p>Step back in time in our Historic Hotel. Immerse yourself in the charm of the past!</p>
        <p>Room Types: Historic Suites, Vintage Rooms, Antique Decor</p>
        <p>Amenities: Historic tours, period architecture, cultural experiences</p>
      </div>

      <div>
        <h3>Spa Retreat:</h3>
        <p>Indulge in relaxation and rejuvenation at our luxurious Spa Retreat.</p>
        <p>Room Types: Standard Spa Rooms, Deluxe Suites, Private Spa Villas</p>
        <p>Amenities: In-room spa services, hot tubs, meditation gardens</p>
      </div>

      <div>
        <h3>Golf Resort:</h3>
        <p>Play a round of golf in the scenic surroundings of our premium Golf Resort.</p>
        <p>Room Types: Golf View Rooms, Suites with Golf Course Access</p>
        <p>Amenities: Golf courses, golf lessons, golf club access</p>
      </div>

      <div>
        <h3>Skyline Tower Hotel:</h3>
        <p>Experience luxury living at new heights with breathtaking views from our Skyline Tower Hotel.</p>
        <p>Room Types: Skyline Suites, Executive Rooms with City View</p>
        <p>Amenities: Rooftop restaurant, panoramic views, exclusive lounge</p>
      </div>

      <div>
        <h3> Riverside Lodge :</h3> 
        <p>Relax by the riverside in our cozy Riverside Lodge.</p>
        <p>Room Types: Riverside Cabins, Lodge Rooms with River Views</p>
        <p>Amenities: Riverfront dining, fishing access, outdoor activities</p>
      </div>
      <br></br>
      <p><i><b>Additional details contact our management.</b></i></p>
      <Foote/>
    </div>
    // </div>
  );
};

export default ViewDetails;
