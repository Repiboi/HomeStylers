import React, { useState } from 'react';
import styles from './contact.module.css';  // Import the CSS module
import Navbar from './Navbar';
import Footer from './footer';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && email && message) {
      console.log('Feedback submitted:');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      alert('Your feedback has been sent!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.contactContainer}>
      <h4 className={styles.infoTitle}>INFORMATION</h4>
      <h1 className={styles.contactHeader}>CONTACT DETAILS</h1>
      <p className={styles.contactDescription}>
        As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
      </p>

      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <img src="https://preview.colorlib.com/theme/staging/img/contact/ci-1.png" alt="Phone Icon" className={styles.icon} />
          <div className={styles.info}>
            <p className={styles.title}>PHONE NUMBER</p>
            <p className={styles.details}>+234 902 4582 724</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <img src="https://preview.colorlib.com/theme/staging/img/contact/ci-2.png" alt="Email Icon" className={styles.icon} />
          <div className={styles.info}>
            <p className={styles.title}>EMAIL ADDRESS</p>
            <p className={styles.details}>aptechngibadan@gmail.com</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <img src="https://preview.colorlib.com/theme/staging/img/contact/ci-3.png" alt="Location Icon" className={styles.icon} />
          <div className={styles.info}>
            <p className={styles.title}>OFFICE LOCATION</p>
            <p className={styles.details}>189A, MODUPE HOUSE, ADAMASINGBA, OYO STATE</p>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <div className={styles.iframeDiv}>
          <iframe
            title="Aptech Ibadan Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6087209832363!2d3.8856843099856926!3d7.397663792581463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d6a657b14c9%3A0xb43849f101727e38!2sAptech%20Ibadan!5e0!3m2!1sen!2sng!4v1726671826896!5m2!1sen!2sng"
            width="1100"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.formContainer}>
          <h4 className={styles.formTitle}>Form</h4>
          <h1 className={styles.formHeader}>GET IN TOUCH</h1>
          <p className={styles.formDescription}>
            As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
          </p>

          <form onSubmit={handleSubmit} className={styles.feedbackForm}>
            <div className={styles.inputRow}>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactForm;
