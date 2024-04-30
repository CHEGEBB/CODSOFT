import React, { useState } from 'react';
import './LeftSideBar.scss';

const LeftSideBar = () => {
    const [availability, setAvailability] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [productType, setProductType] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    const handleAvailabilityChange = (event) => {
        setAvailability(event.target.value);
    };

    const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleProductTypeChange = (event) => {
        setProductType(event.target.value);
    };

    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <div className="sidebar">
            <div className="categories">
                <h3>Categories</h3>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Deals and Discounts</li>
                    <li>Latest</li>
                </ul>
            </div>
            <div className="filters">
                <h3>Filter By</h3>
                <div className="filter-item">
                    <h4>Availability</h4>
                    <div>
                        <label>
                            <input type="radio" name="availability" value="inStock" checked={availability === 'inStock'} onChange={handleAvailabilityChange} />
                            In Stock
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="availability" value="outOfStock" checked={availability === 'outOfStock'} onChange={handleAvailabilityChange} />
                            Out of Stock
                        </label>
                    </div>
                </div>
                <div className="filter-item">
                    <h4>Filter By Price</h4>
                    {/* Add your slider component for price range */}
                    <input type="range" min="0" max="100" value={priceRange} onChange={handlePriceRangeChange} />
                </div>
                <div className="filter-item">
                    <h4>Product Type</h4>
                    {/* Add your select component for product type */}
                    <select value={productType} onChange={handleProductTypeChange}>
                        <option value="">Select Product Type</option>
                        {/* Add options dynamically based on available product types */}
                    </select>
                </div>
                <div className="filter-item">
                    <h4>Brand</h4>
                    {/* Add your select component for brand */}
                    <select value={brand} onChange={handleBrandChange}>
                        <option value="">Select Brand</option>
                        {/* Add options dynamically based on available brands */}
                    </select>
                </div>
                <div className="filter-item">
                    <h4>Color</h4>
                    {/* Add your select component for color */}
                    <select value={color} onChange={handleColorChange}>
                        <option value="">Select Color</option>
                        {/* Add options dynamically based on available colors */}
                    </select>
                </div>
                <div className="filter-item">
                    <h4>Size</h4>
                    {/* Add your select component for size */}
                    <select value={size} onChange={handleSizeChange}>
                        <option value="">Select Size</option>
                        {/* Add options dynamically based on available sizes */}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;
