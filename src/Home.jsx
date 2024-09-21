import React, { useState, useEffect } from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { MdOutlineRealEstateAgent } from "react-icons/md";
import Footer from './footer';
import { FaBars } from 'react-icons/fa'; // For the hamburger icon
import { IoMdClose } from 'react-icons/io'; // Close icon for hamburger menu

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="hero-section">
        <div className="typed">
          <TypeAnimation
            sequence={[
              'Let us beautify your interiors.',
              2000,
              'We create, recreate and transform beauty.',
              2000,
              'Quality is not our only Standard.',
              2000,
              'Focus On Design Quality!',
              2000,
              'Creativity is a Wild Mind and a Disciplined Eye!',
            ]}
            wrapper="span"
            speed={200}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <div className="homeButton">
          <Link to='/About' className='linked'>
            <button className='classbutton'>
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <Link to='/' className='logo'><MdOutlineRealEstateAgent className='homeIcon' />HomeStyler</Link>

          {/* Hamburger Icon for Mobile View */}
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose /> : <FaBars />}
          </div>

          {/* Navbar Links */}
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link className='nav_list' to='Design'>Design</Link></li>
            <li><Link className='nav_list' to='Gallery'>Gallery</Link></li>
            <li><Link className='nav_list' to='Products'>Product</Link></li>
            <li><Link className='nav_list' to='Contact'>Contact us</Link></li>
            <li><Link className='nav_list' to='About'>About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className='content'>
       <div className="grid">
        <div className="split">
          <div className="text">
          <h1 className='header1'>WHO ARE WE</h1>
          <h2 className='header2'>We propose and discuss design rules</h2>
          <p className='paragraph'>
           
            Here’s a revised suggestion for the content based on the structure of your design:

            Innovating Design Solutions for a Better Future

            Our team is dedicated to pushing the boundaries of design by integrating creativity with advanced technology. Through collaborative efforts, we offer cutting-edge solutions tailored to meet the evolving demands of today's industries.

            Whether you're seeking to enhance your business environment or develop groundbreaking products, we work with you to craft designs that are both functional and visionary.
            Join us in reshaping the future of design.


         </p>
          <Link to='/About'className='learnBtn'><button className='txtBtn'>Learn More</button></Link>
          </div>
            <img src="https://cdn-aicin.nitrocdn.com/HIAjYmsdLpRQdKpIMJLXFmZsSAYnEnkl/assets/images/optimized/rev-86c0feb/www.amitree.com/wp-content/uploads/2024/01/10-Tips-to-Deal-with-Difficult-Clients-as-a-Real-Estate-Agent.jpeg" alt="" />
        </div>
       </div>
      </div>

      <div className="content2">
        <div className="contentText">
          <h1 className='contentTextH1'>OUR SPECIALIZATION</h1>
          <h2 className='contentTextH2'>WHAT WE DO</h2>
        </div>
         <div className="textGrid">
          <div className="Cards">
           <img src="https://preview.colorlib.com/theme/staging/img/services/services-3.png" alt="" />
           <h1 className='cardsh1'>HOME DESIGN</h1>
           <p className='path'>
           Interdisciplinary architectural studio with cultural, 
           residential and commercial projects built worldwide.
           </p>
          </div>
          <div className="Cards">
           <img src="https://preview.colorlib.com/theme/staging/img/services/services-2.png" alt="" />
           <h1 className='cardsh1' >OFFICE DESIGN</h1>
           <p className='path'>
           Our commitment to exceptional quality has never wavered. 
           To day ranks as one of the most highly-regarded construction.
           </p>
          </div>
          <div className="Cards">
           <img src="https://preview.colorlib.com/theme/staging/img/services/services-1.png" alt="" />
           <h1 className='cardsh1'>INTERIOR DESIGN</h1>
           <p className='path'>
           As you might expect  of a company that began as a high-end 
           interiors contractor, we pay strict attention.
           </p>
          </div>
          <div className="Cards">
           <img src="https://preview.colorlib.com/theme/staging/img/services/services-4.png" alt="" />
           <h1 className='cardsh1' >DESIGN DRAWING</h1>
           <p className='path'>
           Creating architectural and creative solutions
           to help people realize their vision and make them a reality.
           </p>
          </div>
         </div>
      </div>

      <div className="needed">
          <div className="contentNeeded">
            <h1 className='neededH1'>Any Help Needed?</h1>
          <p className='neededP'> 
          If you have any questions or need help, 
          we're here for you! Feel free to reach out, 
          and our team will be happy to assist you with whatever you need.
          </p>
            </div>
               
          <Link  to="/Contact" className='neededLink'>
          <button className='neededButton'>
            Contact Us
          </button>
          </Link>
      </div>
      <Footer/> 
    </div>
  );
};

export default Home;
