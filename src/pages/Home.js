import React, { useEffect, useState } from 'react';
import '../index.scss';

import pic2 from '../images/pic2.jpg';
import wom2 from '../images/pic3.jpg';
import sneakers3 from '../images/pic5.jpg';

const images = [
    {
      src: pic2,
      text: 'First Image',
      heading: 'Discover Your Style',
      paragraph: 'Explore our latest collection and find the perfect outfit that reflects your unique personality. From casual chic to elegant sophistication, we have something for every fashionista.',
      buttonText: 'Shop Now'
    },
    {
      src: wom2,
      text: 'Second Image',
      heading: 'Elevate Your Wardrobe',
      paragraph: 'Revamp your closet with our exclusive selection of trendy apparel. Stay ahead of the fashion curve and make a statement wherever you go. Quality and style guaranteed.',
      buttonText: 'Shop Now'
    },
    {
      src: sneakers3,
      text: 'Third Image',
      heading: 'Step into Comfort',
      paragraph: 'Experience unparalleled comfort and style with our premium footwear collection. Whether you’re hitting the gym or strolling around the city, our sneakers will keep you looking and feeling great.',
      buttonText: 'Shop Now'
    }
  ];
  

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
      element.classList.remove('fadeIn');
      void element.offsetWidth;
      element.classList.add('fadeIn');
    });
  }, [index]);

  return (
    <div className="Homepage">
      <div
        className="home-intro"
        style={{
          backgroundImage: `url(${images[index].src})`,
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="text-container animate">
          <h1 className="heading animate">{images[index].heading}</h1>
          <p className="paragraph animate">{images[index].paragraph}</p>
          <p className="colored-paragraph animate">{images[index].paragraph}</p>
          <button className="animate">{images[index].buttonText}</button>
        </div>
      </div>
      <div className="loading-indicator">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={i === index ? 'dot active' : 'dot'}
          ></span>
        ))}
      </div>
      <div className="home-content">
        <div className="women-shop">
          <button>Shop Now</button>
        </div>
        <div className="mens-shop">
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
