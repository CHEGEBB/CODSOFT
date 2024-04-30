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

    const handlePriceRangeChange = (event) => {
        setPriceRange(event.target.value);
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
            <div className="categories-bar">
            <div className="cate">
            <h3>Categories</h3>
            </div>
                <div className="ul">
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Deals and Discounts</li>
                    <li>Latest</li>
                </ul>
                </div>
                
            </div>
            <div className="filters">
                <h3>Filter By</h3>
                <div className="filter-item">
                    <h4>Availability</h4>
                    <div>
                        <label className="square-radio">
                            <input type="radio" name="availability" value="inStock" checked={availability === 'inStock'} onChange={handleAvailabilityChange} />
                            In Stock
                        </label>
                    </div>
                    <div>
                        <label className="square-radio">
                            <input type="radio" name="availability" value="outOfStock" checked={availability === 'outOfStock'} onChange={handleAvailabilityChange} />
                            Out of Stock
                        </label>
                    </div>
                </div>
                <div className="filter-item">
                    <h4>Filter By Price</h4>
                    <input type="range" min="0" max="100" value={priceRange} onChange={handlePriceRangeChange} />
                </div>
                <div className="filter-item">
                    <h4>Product Type</h4>
                    <label className="square-radio">
                        <input type="radio" name="productType" value="t-shirts" checked={productType === 't-shirts'} onChange={handleProductTypeChange} />
                        T-Shirts
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="productType" value="shirts" checked={productType === 'shirts'} onChange={handleProductTypeChange} />
                        Shirts
                    </label>
                    
                    <label className="square-radio">
                        <input type="radio" name="productType" value="pants" checked={productType === 'pants'} onChange={handleProductTypeChange} />
                        Pants 
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="productType" value="shorts" checked={productType === 'shorts'} onChange={handleProductTypeChange} />
                        Shorts
                        </label>
                    <label className="square-radio">
                        <input type="radio" name="productType" value="shoes" checked={productType === 'shoes'} onChange={handleProductTypeChange} />
                        Shoes
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="productType" value="accessories" checked={productType === 'accessories'} onChange={handleProductTypeChange} />
                        Accessories
                        </label>
                        <label className="square-radio">
                        <input type="radio" name="productType" value="jackets" checked={productType === 'jackets'} onChange={handleProductTypeChange} />
                        Jackets
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="productType" value="dress" checked={productType === 'dress'} onChange={handleProductTypeChange} />
                        Dress
                    </label>
                </div>
                <div className="filter-item">
                    <h4>Brand</h4>
                    <label className="square-radio">
                        <input type="radio" name="brand" value="nike" checked={brand === 'nike'} onChange={handleBrandChange} />
                        Nike
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="brand" value="adidas" checked={brand === 'adidas'} onChange={handleBrandChange} />
                        Adidas
                    </label>
                    {/*Louis Vuitton */}
                    <label className="square-radio">
                        <input type="radio" name="brand" value="louisVuitton" checked={brand === 'louisVuitton'} onChange={handleBrandChange} />
                        Louis Vuitton
                    </label>
                    
                    <label className="square-radio">
                        <input type="radio" name="brand" value="gucci" checked={brand === 'gucci'} onChange={handleBrandChange} />
                        Gucci
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="brand" value="zara" checked={brand === 'zara'} onChange={handleBrandChange} />
                        Zara
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="brand" value="hm" checked={brand === 'hm'} onChange={handleBrandChange} />
                        H&M
                    </label>
                </div>
                <div className="filter-item">
                    <h4>Color</h4>
                    <label className="square-radio">
                        <input type="radio" name="color" value="red" checked={color === 'red'} onChange={handleColorChange} style={{border:'2px solid red'}} />
                        Red
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="color" value="blue" checked={color === 'blue'} onChange={handleColorChange} style={{border:'2px solid blue'}} />
                        Blue
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="color" value="black" checked={color === 'black'} onChange={handleColorChange} style={{border:'2px solid black'}} />
                        Black
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="color" value="white" checked={color === 'white'} onChange={handleColorChange} style={{border:'2px solid white'}} />
                        White
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="color" value="green" checked={color === 'green'} onChange={handleColorChange} style={{border:'2px solid green'}} />
                        Green
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="color" value="yellow" checked={color === 'yellow'} onChange={handleColorChange} style={{border:'2px solid yellow'}} />
                        Yellow
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="color" value="purple" checked={color === 'purple'} onChange={handleColorChange} style={{border:'2px solid purple'}} />
                        Purple
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="color" value="pink" checked={color === 'pink'} onChange={handleColorChange} style={{border:'2px solid pink'}} />
                        Pink
                    </label>
                </div>
                <div className="filter-item">
                    <h4>Size</h4>
                    <label className="square-radio">
                        <input type="radio" name="size" value="small" checked={size === 'small'} onChange={handleSizeChange} />
                        Small
                    </label>
                    <label className="square-radio">
                        <input type="radio" name="size" value="medium" checked={size === 'medium'} onChange={handleSizeChange} />
                        Medium
                    </label>
                    {/* Add other sizes as needed */}
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;
