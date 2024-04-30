import React, { useState, useEffect } from 'react';
import LeftSideBar from '../components/LeftSideBar';
import './Collections.scss';
import wishlistIcon from '../images/icon-park-solid--love-and-help.svg';
import cartIcon from '../images/ic--round-shopping-cart.svg';

const Collections = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Item 1',
            price: '$10',
            rating: 4,
            images: [
                require('../images/webp/b1.webp'),
                require('../images/webp/suit4.webp'),
                require('../images/webp/suit4.webp'),
                require('../images/acc4.jpg')
            ],
            wishlistIconPath: wishlistIcon,
            addToCartIconPath:cartIcon,
            currentImageIndex: 0
        },
        {
            id: 2,
            name: 'Item 2',
            price: '$15',
            rating: 3,
            images: [
                require('../images/webp/a5.webp'),
                require('../images/webp/d2.webp'),
                require('../images/webp/suit3.webp'),
                require('../images/webp/b5.webp')
            ],
            wishlistIconPath: 'wishlist_icon.svg',
            addToCartIconPath: 'cart_icon.svg',
            currentImageIndex: 0
        },
        {
            id: 3,
            name: 'Item 3',
            price: '$20',
            rating: 5,
            images: [
                require('../images/webp/b3.webp'),
                require('../images/webp/c5.webp'),
                require('../images/webp/a3.webp'),  
                require('../images/webp/suit4.webp')
            ],
            wishlistIconPath: 'wishlist_icon.svg',
            addToCartIconPath: 'cart_icon.svg',
            currentImageIndex: 0
        },
        // Add more items as needed
    ]);

    useEffect(() => {
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
