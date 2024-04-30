import React, { useState, useEffect } from 'react';
import LeftSideBar from '../components/LeftSideBar';
import './Collections.scss';

const Collections = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Item 1',
            price: '$10',
            rating: 4,
            images: ['item1_1.jpg', 'item1_2.jpg', 'item1_3.jpg', 'item1_4.jpg'],
            wishlistIconPath: 'wishlist_icon.svg',
            addToCartIconPath: 'cart_icon.svg',
        },
        {
            id: 2,
            name: 'Item 2',
            price: '$15',
            rating: 3,
            images: ['item2_1.jpg', 'item2_2.jpg', 'item2_3.jpg', 'item2_4.jpg'],
            wishlistIconPath: 'wishlist_icon.svg',
            addToCartIconPath: 'cart_icon.svg',
        },
        {
            id: 3,
            name: 'Item 3',
            price: '$20',
            rating: 5,
            images: ['item3_1.jpg', 'item3_2.jpg', 'item3_3.jpg', 'item3_4.jpg'],
            wishlistIconPath: 'wishlist_icon.svg',
            addToCartIconPath: 'cart_icon.svg',
        },
        // Add more items as needed
    ]);

    useEffect(() => {
        // Function to cycle through images every 3 seconds for each item
        const interval = setInterval(() => {
            setItems(prevItems =>
                prevItems.map(item => {
                    const nextImageIndex = (item.currentImageIndex + 1) % item.images.length;
                    return { ...item, currentImageIndex: nextImageIndex };
                })
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="collections-page">
            <div className="side-bar">
                <LeftSideBar />
            </div>
            <div className="collections-items">
                {items.map(item => (
                    <div className="item-container" key={item.id}>
                        <div className="item-image">
                            <img src={item.images[item.currentImageIndex]} alt={item.name} />
                            <div className="item-overlay">
                                <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                                <button className="add-to-cart-btn">
                                    <img src={item.addToCartIconPath} alt="Add to Cart" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="item-info">
                            <span className="item-price">{item.price}</span>
                            <div className="item-rating">
                                {/* Render star rating here */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collections;
