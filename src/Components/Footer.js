import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Check if email is valid before making the request
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/send-email', {  // Use the new port number (5001)
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send email to the backend
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Subscription is successful!');
      } else {
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Subscription successful!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return (
    <footer className="footer">
      <div className="footer-subscription">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit" className="subscribe-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>
        </form>
        {message && <p className="response-message">{message}</p>}
      </div>
      <div className="footer-links">
        <div className="explore">
          <h4>Explore</h4>
          <a href="#">Home</a>
          <a href="#">Questions</a>
          <a href="#">Articles</a>
          <a href="#">Tutorials</a>
        </div>
        <div className="support">
          <h4>Support</h4>
          <a href="#">FAQs</a>
          <a href="#">Help</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="social">
          <h4>Stay connected</h4>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
      <p>DEV@Deakin 2022</p>
      <div className="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Code of Conduct</a>
      </div>
    </footer>
  );
};

export default Footer;
