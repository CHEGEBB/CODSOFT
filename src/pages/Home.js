import React, { useEffect, useState } from 'react';
import './Home.scss'

import pic2 from '../images/pic2.jpg';
import wom2 from '../images/pic3.jpg';
import sneakers3 from '../images/js.jfif';

const images = [
    {
      src: pic2,
      text: 'First Image',
      heading: 'Discover Your Style',
      paragraph: 'Explore our latest collection and find the perfect outfit that reflects your unique personality',
      buttonText: 'Shop Now'
    },
    {
      src: wom2,
      text: 'Second Image',
      heading: 'Elevate Your Wardrobe',
      paragraph: 'Revamp your closet with our exclusive selection of trendy apparel',
      buttonText: 'Shop Now'
    },
    {
      src: sneakers3,
      text: 'Third Image',
      heading: 'Step into Comfort',
      paragraph: 'Experience unparalleled comfort and style with our premium footwear collection',
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
        <h1>Shop Women's</h1>
          <button>Shop Now</button>
        </div>
        <div className="mens-shop">
        <h1>Shop Men's</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="welcome">
        <h1>Welcome to Glamour Gallerie</h1>
        <h2>
            Elevate Your Style with Our Exclusive Collection
        </h2>
        <p>Discover the latest fashion trends and elevate your wardrobe with Glamour Gallerie. Our exclusive collection of apparel, footwear, and accessories is designed to help you make a statement wherever you go. Explore our online store and find the perfect outfit that reflects your unique personality.</p>
        <div className="items">
            <div className="dresses">
                <h3>Dresses</h3>
                <button>Shop Now</button>
            </div>
            <div className="watches">
                <h3>Watches</h3>
                <button>Shop Now</button>
            </div>
            <div className="shoes">
                <h3>Shoes</h3>
                <button>Shop Now</button>
                </div>
                <div className="accessories">
                <h3>Accessories</h3>
                <button>Shop Now</button>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
