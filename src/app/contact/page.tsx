import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="Contact">
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="map-container">
              <iframe
                width="100%"
                height="100%"
                className="map-iframe"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1724843218579!5m2!1sen!2s"
                style={{ filter: "contrast(1.2) opacity(0.4)" }}
              />
              <div className="contact-info">
                <div className="address-info">
                  <h2 className="contact-title">ADDRESS</h2>
                  <p className="contact-detail">Karachi, Pakistan</p>
                </div>
                <div className="email-phone-info">
                  <h2 className="contact-title">EMAIL</h2>
                  <a className="contact-detail">khaanmaria110@gmail.com</a>
                  <h2 className="contact-title">PHONE</h2>
                  <p className="contact-detail">0333-2173102</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h2 className="form-title">Contact</h2>
              <p className="form-description">Feel Free to Contact</p>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-textarea" defaultValue={""} />
              </div>
              <button className="submit-button">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
