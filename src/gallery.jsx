import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './gallery.css'
import { Link } from 'react-router-dom';
import Value from './value' 
import Navbar from './Navbar';
import Footer from './footer';

const HomeStylerGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <section className="gallery-section">
        <div data-aos="fade-up" className="gall-text">
          <h1 className='gallhead1'>Explore Eastern European Art in our Gallery</h1>
          <p className='gallP'>Victory Art, gallery of unique contemporary artworks from Eastern Europe</p>
          <a href="/" className="explore-btn">Explore Interior Designs</a>
        </div>
        <div className="gall-image">
          <img data-aos="fade-up" src="https://i.pinimg.com/474x/ab/f7/57/abf7570c4d918fc8a5fbda63c9fe291f.jpg" alt="HomeImages" />
        </div>
      </section>
{/* 
      <div className="slider" style={{ '--width': '100px', '--height': '50px', '--quantity': 10 }}>
        <div className="list">
          {[ 
             
             <Link to='/About'>Sitting Room</Link>
            
          ]
            .map((src, index) => (
              <div className="item" key={index} style={{ '--position': index + 1 }}>
                <img src={src} alt="HomeImages" />
              </div>
            ))}
        </div>
      </div> */}

      <Value/>

      <div className="homestylerImg">
        {[
          {
            src: 'https://i.pinimg.com/564x/a0/f3/b8/a0f3b865ff16bb7c7634223fe6c4b33b.jpg',
            title: 'Sitting Room:',
            description: 'Relax in a stylish sitting room, featuring sleek modern furniture for a comfortable yet chic space.',
          },
          {
            src: 'https://i.pinimg.com/474x/39/d8/be/39d8be077020a2a4c7d630c498dbf81f.jpg',
            title: 'Decor/Frame:',
            description: 'Elegant decor frames that transform your walls into artistic masterpieces.',
          },
          {
            src: 'https://i.pinimg.com/564x/ee/83/79/ee83791a2ee34333b5341134b62efe5d.jpg',
            title: 'Exclusive Kitchen:',
            description: 'An exquisite kitchen merging into a stylish dining area for seamless elegance.',
          },
          {
            src:"https://i.pinimg.com/474x/0e/41/fe/0e41feecda496658d5701500226acf8c.jpg",
            title: 'Elegant Bedroom:',
            description: '  A cozy and elegant bedroom lit with soft, ambient rubber lights for a serene vibe.',
          },
          {
            src:"https://i.pinimg.com/474x/b8/df/6d/b8df6d894b54d5ecc94893f1a6d2aef4.jpg",
             title:'Front View Kitchen: ',
             description: 'A modern kitchen with a sleek, minimalist design and a large window for natural light'
          },
          {
             src:"https://i.pinimg.com/474x/d4/da/16/d4da16553ce03854778487ebb08a6b93.jpg",
            title:'Bedroom with Circular Chandelier:',
            description:'Sleep beneath a circular chandelier, creating a warm and luxurious ambiance.'
          },
          {
            src:"https://i.pinimg.com/474x/c9/50/59/c9505967bca9deb510eaf0339c98d867.jpg",
            title:'Bathroom with Black Jacuzzi:',
            description:'A modern bathroom with a black Jacuzzi tub, creating a relaxing and rejuvenating space complemented by a striking gold-lit ceilin'
          },
          {
            src:"https://i.pinimg.com/474x/25/62/a1/2562a123dfd39a03d422b3ebb5a62c76.jpg",
            title:'Front View:',
            description:'Glamorous gold-toned kitchen furnishings that elevate the art of cooking and style.'
          },
          {
            src:"https://i.pinimg.com/474x/e9/8b/9a/e98b9a4a760cbd00887d842da1b67f71.jpg",
            title:'Green-Themed Bedroom with Hanging Bulbs:',
            description:' A nature-inspired bedroom with a fresh green palette and unique hanging rope bulbs for a rustic charm.'
          },
          {
            src:"https://i.pinimg.com/474x/36/2a/9e/362a9e0e9b132cd0e3a64c97e2d2dc95.jpg" ,
            title:'Simple Furniture Sitting Room',
            description:' A minimalist sitting room adorned with a dainty decor for understated elegance.'
          },
          {
               src:"https://i.pinimg.com/474x/ca/9d/43/ca9d436ba3d234d6b4739594a536807d.jpg" ,
               title:'Spacious Parlor with Spiral Chandelier:',
               description:'An expansive parlor illuminated by a captivating spiral chandelier, adding grandeur to the room.' ,
          },
          {
            src:'https://i.pinimg.com/564x/b8/15/7a/b8157aa6a3c2350455dad14916ed70a3.jpg',
            title:'Kitchen Sink Design:',
            description:'A modern kitchen sink design with a sleek, minimalist aesthetic and a large window for natural, White kitchen and sink, white cabinets with gray countertop by bridgette.jons'
          },
          {
            src:'https://i.pinimg.com/564x/4e/bf/61/4ebf61c8743198419d0c407ea93dbe80.jpg',
            title:'  A Modern and Cozy Retreat:',
            description:'This living room showcases a perfect blend of modern aesthetics and cozy comfort. The dark accent wall creates a dramatic focal point, while the neutral tones of the furniture and decor maintain a sense of warmth and tranquility.'
          },
          {
            src:'https://i.pinimg.com/564x/a2/44/93/a244939c1f60cb0334ebd829037a3c63.jpg',
            title:'Tropical Elegance Dinnig Room:',
            description:' This stunning dining room features a vibrant color palette of deep emerald and lush green. '
          },
          {
            src:'https://i.pinimg.com/564x/01/54/0c/01540c5a7bdaee4d2dda2808237ab764.jpg',
            title:'Nala Dark Washed Oak 6 Seater Dining Table:',
            description:' The Nala Table takes the industrial look to a new level. The heavy wooden top with crossed leg detail gives this table its modern and designer look, while still being practical for busy families or entertaining friends. '
          },
          {
            src:'https://i.pinimg.com/564x/88/c6/cb/88c6cb638ed51d1ee7db3ee5ba4e3636.jpg',
            title:'Modern Dining Room with a  Noir Elegance:',
            description:'This dramatic dining room is a masterpiece of modern design. The dark walls and ceiling create a luxurious and intimate atmosphere, while the sparkling chandelier and mirrored wall add a touch of glamor',
          },
          {
            src:'https://i.pinimg.com/236x/35/ae/1e/35ae1e6e3042994c7966d9da091528ae.jpg',
            title:'Crystal Glam:',
            description:'This elegant dining room features a stunning crystal chandelier that takes center stage. The sparkling crystals create a glamorous and luxurious atmosphere.'
          },
          {
            src:'https://i.pinimg.com/564x/74/d9/35/74d9355a3bbb36bc15f02f61abc3ff19.jpg',
            title:' Modern Minimalism:',
            description:'This sleek and sophisticated living room features a minimalist design with clean lines and neutral tones. The focal point of the room is the built-in fireplace and TV wall, which creates a modern and functional space.'

          },
          {
            src:'https://i.pinimg.com/564x/2e/13/00/2e13002fac45d697b1f6b576639dabb5.jpg',
            title:'Coastal Chic Kithen:',
            description:'his stunning kitchen features a bright and airy design with a coastal aesthetic. The white cabinetry and neutral tones create a clean and fresh atmosphere.'
          },
          {
            src:'https://i.pinimg.com/564x/85/b5/f3/85b5f38c8c629734c873c641fa015c8f.jpg',
            title:'Classic Comfort Interior:',
            description:'This inviting living room features a neutral color palette and classic design elements. The white walls and trim create a bright and airy atmosphere, while the hardwood floors add warmth and texture.'
          },
          {
            src:'https://i.pinimg.com/236x/f9/2e/d7/f92ed700858447436497a072c70cd4c6.jpg',
            title:' Industrial Chic Sitting Room:',
            description:'This modern loft apartment features a spacious open-plan layout with high ceilings and large windows. The industrial-inspired elements, such as the exposed brick wall and metal staircase, create a raw and edgy atmosphere.'
          },
          {
            src:'https://i.pinimg.com/564x/4e/71/53/4e71538ed4e17ae1f5fd6e9c74ad6a76.jpg',
            title:'Minimalist Zen Bathroom:',
            description:'This small but stylish bathroom features a minimalist design with clean lines and neutral tones. The wood accents and open shelving add warmth and functionality.'
          },
        ].map((item, index) => (
          <div className="home-gallery" key={index}>
            <img data-aos="fade-up" src={item.src} alt="HomeImages" />
            <div className="gallery-text">
              <b>{item.title}</b>
              {item.description}
            <Link to='/Contact'className='contLink'> <button className="contact-btn">Contact Us</button>
            </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="gall-vids">
        <video controls muted loop autoPlay>
          <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </div>
      <Footer/>
    </div>
  );
};

export default HomeStylerGallery;
