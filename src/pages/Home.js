import React, { useEffect, useState } from 'react';
import '../index.scss';

import pic2 from '../images/pic2.jpg';
import wom2 from '../images/wom2.jpg';
import sneakers3 from '../images/sneakers3.jpg';

const images = [
  { src: pic2, text: 'First Image' },
  { src: wom2, text: 'Second Image' },
  { src: sneakers3, text: 'Third Image' }
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true); // Set loading to true when changing image
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Simulate loading delay of 2 seconds before showing the next image
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, [index]);

  return (
    <div className="Homepage">
      <div
        className="home-intro"
        style={{ backgroundImage: `url(${images[index].src})` }}
      >
        <h1>Welcome to Glamour Gallerie</h1>
        <p>Your one stop shop for all things beauty</p>
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
