import React, { useEffect, useState } from 'react';
import '../index.scss';

import pic2 from '../images/pic2.jpg';
import wom2 from '../images/pexels-godisable-jacob-226636-794062.jpg';
import sneakers3 from '../images/pexels-rfera-432059.jpg';

const images = [
  {
    src: pic2,
    text: 'First Image',
    heading: 'Heading 1',
    paragraph: 'This is the paragraph for the first image.',
    buttonText: 'Shop Now'
  },
  {
    src: wom2,
    text: 'Second Image',
    heading: 'Heading 2',
    paragraph: 'This is the paragraph for the second image.',
    buttonText: 'Shop Now'
  },
  {
    src: sneakers3,
    text: 'Third Image',
    heading: 'Heading 3',
    paragraph: 'This is the paragraph for the third image.',
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
