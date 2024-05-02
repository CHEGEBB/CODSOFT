import React, { useState } from 'react';
import './Shop.scss';
import Men from '../pages/categories/men';
import Women from '../pages/categories/women';
import Kids from '../pages/categories/kids';
import Accessories from '../pages/categories/accessories';
import Shoes from '../pages/categories/shoes';
import LeftSidebar from '../components/LeftSideBar';
import Flash from '../pages/categories/Flash';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('flashSales');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="shop-page">
            <div className="left-sidebar">
                <LeftSidebar />
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
