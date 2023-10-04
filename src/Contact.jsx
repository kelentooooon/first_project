import React, { useState } from 'react';
import "./Contact.css"
import Nav from "./Navbar"
import Footer from "./Footer"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here,
    // such as sending the form data to a server

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
      <>
      <Nav />

      <div className="container">
      <div className="form">
      <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
    </div>
    </div>
    
    <Footer />
    </>
  );
};

export default Contact;