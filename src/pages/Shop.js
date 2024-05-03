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
    const [activeCategory, setActiveCategory] = useState('flashSales');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setActiveCategory(category);
    };

    useEffect(() => {
        const zoomOutTimer = setTimeout(() => {
            setShowZoomOut(true);
        }, 5000);

        return () => clearTimeout(zoomOutTimer);
    }, []);

    return (
        <div className={`shop-page ${showZoomOut ? 'zoom-out' : ''}`}>
            <div className="overlay">
                <div className="shop-intro">
                    <h1>Shop</h1>
                    <p>Discover the latest trends in fashion at glamourgallerie we've got you covered with a wide range of products from various categories.</p>
                    <p style={{color:'blueViolet',textDecoration:'underline',fontWeight:'bold'}}>Click on any category to view products.</p>
                </div>
            </div>
            <div className="content-container">
                <div className="categories-nav">
                    <button className={activeCategory === 'flashSales' ? 'active' : ''} onClick={() => handleCategoryClick('flashSales')}>Flash Sales</button>
                    <button className={activeCategory === 'men' ? 'active' : ''} onClick={() => handleCategoryClick('men')}>Men</button>
                    <button className={activeCategory === 'women' ? 'active' : ''} onClick={() => handleCategoryClick('women')}>Women</button>
                    <button className={activeCategory === 'kids' ? 'active' : ''} onClick={() => handleCategoryClick('kids')}>Kids</button>
                    <button className={activeCategory === 'accessories' ? 'active' : ''} onClick={() => handleCategoryClick('accessories')}>Accessories</button>
                    <button className={activeCategory === 'shoes' ? 'active' : ''} onClick={() => handleCategoryClick('shoes')}>Shoes</button>
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
