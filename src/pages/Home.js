import React from 'react';
import '../index.scss';

const Home = () => {
    return (
        <div className="Homepage">
        <div className="home-intro">
            <h1>Welcome to Glamour Gallerie</h1>
            <p>Your one stop shop for all things beauty</p>
        </div>
        <div className="home-cta">
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
