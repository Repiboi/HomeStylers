import React from 'react';
import './HomeStylerValue.css'; // Ensure to create and link your CSS file

const HomeStylerValues = () => {
    return (
        <div>
            <h2 className="val">Our Values</h2>
            <div className="container">
                <div className="image-section">
                    <img src="https://i.pinimg.com/474x/19/74/aa/1974aa71050e58c7d69b15c33a607aa7.jpg" alt="Modern Interior Design" />
                </div>
                <div className="info-section">
                    <div className="info-box">
                        <div className="icon">&#128716;</div>
                        <h3>10 Years of Interior Design Expertise</h3>
                        <p>We bring a decade of experience in transforming spaces into stunning interiors. From modern to classic, our designs have enhanced countless homes.</p>
                    </div>
                    <div className="info-box">
                        <div className="icon">&#128736;</div>
                        <h3>500+ Projects Completed</h3>
                        <p>Our portfolio showcases over 500 successful projects, spanning residential, commercial, and bespoke interior designs tailored to client visions.</p>
                    </div>
                    <div className="info-box">
                        <div className="icon">&#128175;</div>
                        <h3>7k Happy Clients</h3>
                        <p>Our clients are consistently satisfied with their revamped spaces. We pride ourselves on creating interiors that merge aesthetics with functionality.</p>
                    </div>
                    <div className="info-box">
                        <div className="icon">&#127969;</div>
                        <h3>100+ Homes Styled Every Year</h3>
                        <p>Each year, we design and style over 100 homes, turning blank spaces into elegant, functional, and inspiring environments for living and working.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeStylerValues;