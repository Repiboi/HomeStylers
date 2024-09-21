import React from 'react';
import styles from './footer.module.css'; // Import CSS module
import {Link} from 'react-router-dom'
import { MdOutlineRealEstateAgent } from "react-icons/md";
import Date from './date'
const Footer = () => { 
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3 className={styles.font}><MdOutlineRealEstateAgent className='homeIcon' />HomeStyler</h3>
          <p>Providing quality solutions for your business, helping you navigate challenges with innovative strategies and expert insights.</p>
          <p className={styles.phoneNumber}>(+234) 9024582724</p>
          <p>contact@ aptechibadan@gmail.com</p>
          <div className={styles.socialIcons}>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <h3>Navigation</h3>
          <ul>
            <Link to='/'className={styles.navLink}><li>Home</li></Link>
            <Link to='/About' className={styles.navLink}><li>About</li></Link>
            <Link to='/Gallery'className={styles.navLink}><li>Gallery</li></Link>
            <Link to='/Product'className={styles.navLink}><li>Product</li></Link>
            <Link to='/Design'className={styles.navLink}><li>Design</li></Link>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Services</h3>
          <ul>
            <li><a href="#drone-mapping">Drone Mapping</a></li>
            <li><a href="#real-state">Real State</a></li>
            <li><a href="#commercial">Commercial</a></li>
            <li><a href="#construction">Construction</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Subscribe newsletter</h3>
          <p>Subscribe to get updates about our services and offers.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Email Address" />
            <button type="submit">→</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright ©<span className={styles.dateChange}><Date/></span> All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
