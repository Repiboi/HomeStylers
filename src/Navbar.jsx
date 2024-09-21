import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { MdOutlineRealEstateAgent } from "react-icons/md";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarContent} ${isActive ? styles.active : ''}`}>
        <Link to='/' className={styles.logo}><MdOutlineRealEstateAgent className='Icon'/>HomeStyler</Link>
        
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={styles.navLinks}>
          <li><Link className={styles.navList} to='/Design'>Design</Link></li>
          <li><Link className={styles.navList} to='/Gallery'>Gallery</Link></li>
          <li><Link className={styles.navList} to='/Products'>Product</Link></li>
          <li><Link className={styles.navList} to='/Contact'>Contact us</Link></li>
          <li><Link className={styles.navList} to='/About'>About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
