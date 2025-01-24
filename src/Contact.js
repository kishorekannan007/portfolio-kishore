import React, { useState } from 'react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);  // Reset after 3 seconds
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-heading">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="action-button">Send Message</button>
      </form>
      {messageSent && (
        <div className="popup-message">
          <p>Message sent successfully! I'll get back to you soon.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
