import React, { useEffect } from 'react';
import AOS from 'aos';
import './HomeStylerAbout.css';
import 'aos/dist/aos.css';
import Ay from './Gallery/AY.jpg'
import Gab from './Gallery/Gab.jpg'
import Faw from './Gallery/Faw.jpg'
import Ste from './Gallery/ste.jpg'
import Isa from './Gallery/Isaac.jpg'
import Navbar from './Navbar';
import Footer from './footer';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Value from './value'

const HomeStylerAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);
    return (
        <div>
          <Navbar/>
            <div data-aos="fade-up" className="about-section">
                <div className="about-text">
                    <h1>About Homestyler</h1>
                    <h3>Discover Our Interior Design Expertise</h3>
                    <p>
                        At Homestyle, we bring life to your living spaces with our exceptional interior design solutions. 
                        Our focus is on creating beautiful, functional, and sustainable interiors tailored to our clients' needs. 
                        Since our inception, we've been dedicated to transforming homes and workspaces, making them not just aesthetically pleasing but also practical.
                    </p>
                    <div className="social-icons">
                        <a href="/"><FaFacebookF /></a>
                        <a href="/"><FaTwitter /></a>
                        <a href="/"><FaInstagram /></a>
                    </div>
                    <button className="learn-more-btn">LEARN MORE</button>
                </div>
                <div className="about-image">
                    <img src="https://i.pinimg.com/564x/50/a8/a2/50a8a2d6416bb97543b06199a979390a.jpg" alt="HomeImages" />
                </div>
            </div>

            <h3 className="teams">Meet Our Team</h3>
            <div className="team">
                <div className="team-member">
                    <img src={Ay} alt="Ayomide" />
                    <h4>Ayomide</h4>
                </div>
                <div className="team-member">
                    <img src={Gab} alt="Gabriel" />
                    <h4>Gabriel</h4>
                </div>
                <div className="team-member">
                    <img src={Faw} alt="Fawaz" />
                    <h4>Fawaz</h4>
                </div>
                <div className="team-member">
                    <img src={Ste} alt="Stephen" />
                    <h4>Stephen</h4>
                </div>
                <div className="team-member">
                    <img src={Isa} alt="Isaac" />
                    <h4>Isaac</h4>
                </div>
            </div>
            <Value/>
            <Footer/>
        </div>
    );
};

export default HomeStylerAbout;

