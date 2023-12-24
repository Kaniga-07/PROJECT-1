import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const handleIconClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Extremely simple and easy to use with minimum training.</p>
        </div>
        <div className="footer-section">
          <h2>Connect With Us</h2>
          <p>&copy; 2023 Your Website. All rights reserved.</p>
          <div className="social-icons">
            <FaFacebook className="icon" onClick={() => handleIconClick('https://www.facebook.com')} />
            <FaTwitter className="icon" onClick={() => handleIconClick('https://www.twitter.com')} />
            <FaInstagram className="icon" onClick={() => handleIconClick('https://www.instagram.com')} />
            <FaLinkedin className="icon" onClick={() => handleIconClick('https://www.linkedin.com')} />
            <FaEnvelope className="icon" onClick={() => handleIconClick('mailto:info@example.com')} />
          </div>
        </div>
        <div className="footer-section">
          <h2>Contact Information</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1 900 361 2511</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
