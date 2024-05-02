import React, { useState } from 'react';
import './Shop.scss';
import Men from '../pages/categories/men';
import Women from '../pages/categories/women';
import Kids from '../pages/categories/kids';
import Accessories from '../pages/categories/accessories';
import Shoes from '../pages/categories/shoes';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('flashSales');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        // Navigation to select the category of products to display
        <div className="shop-page">
            <div className="categories-nav">
                <button onClick={() => handleCategoryClick('flashSales')}>Flash Sales</button>
                <button onClick={() => handleCategoryClick('men')}>Men</button>
                <button onClick={() => handleCategoryClick('women')}>Women</button>
                <button onClick={() => handleCategoryClick('kids')}>Kids</button>
                <button onClick={() => handleCategoryClick('accessories')}>Accessories</button>
                <button onClick={() => handleCategoryClick('shoes')}>Shoes</button>
            </div>

            {/* Render products based on selectedCategory */}
            {selectedCategory === 'flashSales' && (
                <div className="flash-sales-products">
                    {/* Render flash sales products */}
                    Flash Sales
                </div>
            )}
            {selectedCategory === 'men' && <Men />}
            {selectedCategory === 'women' && <Women />}
            {selectedCategory === 'kids' && <Kids />}
            {selectedCategory === 'accessories' && <Accessories />}
            {selectedCategory === 'shoes' && <Shoes />}
        </div>
    );
}

export default Shop;
