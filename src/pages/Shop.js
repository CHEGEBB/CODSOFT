import React, { useState, useEffect } from 'react';
import './Shop.scss';
import Men from '../pages/categories/men';
import Women from '../pages/categories/women';
import Kids from '../pages/categories/kids';
import Accessories from '../pages/categories/accessories';
import Shoes from '../pages/categories/shoes';
import Flash from '../pages/categories/Flash';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('flashSales');
    const [showZoomOut, setShowZoomOut] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        const zoomOutTimer = setTimeout(() => {
            setShowZoomOut(true);
        }, 5000); // 5000 milliseconds = 5 seconds

        return () => clearTimeout(zoomOutTimer);
    }, []);

    return (
        <div className={`shop-page ${showZoomOut ? 'zoom-out' : ''}`}>
            <div className="overlay">
                <div className="shop-intro">
                    <h1>Shop</h1>
                    <p>Discover the latest trends in fashion at glamourgallerie we've got you covered with a wide range of products from various categories.</p>
                    <p>Click on any category to view products.</p>
                </div>
            </div>
            <div className="content-container">
                <div className="categories-nav">
                    <button onClick={() => handleCategoryClick('flashSales')}>Flash Sales</button>
                    <button onClick={() => handleCategoryClick('men')}>Men</button>
                    <button onClick={() => handleCategoryClick('women')}>Women</button>
                    <button onClick={() => handleCategoryClick('kids')}>Kids</button>
                    <button onClick={() => handleCategoryClick('accessories')}>Accessories</button>
                    <button onClick={() => handleCategoryClick('shoes')}>Shoes</button>
                </div>
                {selectedCategory === 'flashSales' && <Flash />}
                {selectedCategory === 'men' && <Men />}
                {selectedCategory === 'women' && <Women />}
                {selectedCategory === 'kids' && <Kids />}
                {selectedCategory === 'accessories' && <Accessories />}
                {selectedCategory === 'shoes' && <Shoes />}
            </div>
        </div>
    );
}

export default Shop;
