import React from 'react';
import '../pages/Products.scss';
import Footer from '../components/Footer';
import { useState,useEffect } from 'react';


const Products = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            images: [
                "../images/webp/shirt1.webp",
                "../images/webp/shirt2.webp",
                "../images/webp/shirt3.webp",
                "../images/webp/shirt4.webp"
            ],
            title: "T-Shirts",
            desc: "Our T-Shirts are made from the finest cotton in the world. They are soft, comfortable, and durable. They are available in a variety of colors and sizes."
        },
        {
            id: 2,
            images: [
                "https://example.com/suit1.jpg",
                "https://example.com/suit2.jpg",
                "https://example.com/suit3.jpg",
                "https://example.com/suit4.jpg"
            ],
            title: "Suits",
            desc: "We sell high-class suits that are made from the finest materials. They are available in a variety of colors and sizes."
        },
        {
            id: 3,
            images: [
                "https://example.com/shoe1.jpg",
                "https://example.com/shoe2.jpg",
                "https://example.com/shoe3.jpg",
                "https://example.com/shoe4.jpg"
            ],
            title: "Shoes",
            desc: "Our shoes are made from the finest leather in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 4,
            images: [
                "https://example.com/trouser1.jpg",
                "https://example.com/trouser2.jpg",
                "https://example.com/trouser3.jpg",
                "https://example.com/trouser4.jpg"
            ],
            title: "Trousers",
            desc: "Our trousers are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 5,
            images: [
                "https://example.com/hoodie1.jpg",
                "https://example.com/hoodie2.jpg",
                "https://example.com/hoodie3.jpg",
                "https://example.com/hoodie4.jpg"
            ],
            title: "Hoodies",
            desc: "See our wide array of hoodies"
        },
        {
            id: 6,
            images: [
                "https://example.com/dress1.jpg",
                "https://example.com/dress2.jpg",
                "https://example.com/dress3.jpg",
                "https://example.com/dress4.jpg"
            ],
            title: "Dresses",
            desc: "At our store, we have a wide array of dresses ranging from casual to formal. Our dresses are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 7,
            images: [
                "https://example.com/accessory1.jpg",
                "https://example.com/accessory2.jpg",
                "https://example.com/accessory3.jpg",
                "https://example.com/accessory4.jpg"
            ],
            title: "Accessories",
            desc: "Our accessories are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 8,
            images: [
                "https://example.com/bag1.jpg",
                "https://example.com/bag2.jpg",
                "https://example.com/bag3.jpg",
                "https://example.com/bag4.jpg"
            ],
            title: "Bags",
            desc: "Our bags are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 9,
            images: [
                "https://example.com/hat1.jpg",
                "https://example.com/hat2.jpg",
                "https://example.com/hat3.jpg",
                "https://example.com/hat4.jpg"
            ],
            title: "Hats",
            desc: "Our hats are made from the finest materials in the world. They are comfortable, durable, and stylish"
        },
        {
            id: 10,
            images: [
                "https://example.com/jacket1.jpg",
                "https://example.com/jacket2.jpg",
                "https://example.com/jacket3.jpg",
                "https://example.com/jacket4.jpg"
            ],
            title: "Jackets",
            desc: "Our jackets are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 11,
            images: [
                "https://example.com/short1.jpg",
                "https://example.com/short2.jpg",
                "https://example.com/short3.jpg",
                "https://example.com/short4.jpg"
            ],
            title: "Shorts",
            desc: "Our shorts are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 12,
            images: [
                "https://example.com/skirt1.jpg",
                "https://example.com/skirt2.jpg",
                "https://example.com/skirt3.jpg",
                "https://example.com/skirt4.jpg"
            ],
            title: "Skirts",
            desc: "Our skirts are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        }
    ]);
     
    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prevCards => prevCards.map(product => ({
                ...product,
                images: [...product.images.slice(1), product.images[0]]
            })));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Function to render each product card
    const renderProductCard = (product) => (
        <div className="product-card" key={product.id}>
            <h2>{product.title}</h2>
            <div className="image-container">
                {product.images.map((image, index) => (
                    <img src={image} alt={`Product ${index + 1}`} key={index} />
                ))}
            </div>
            <p>{product.desc}</p>
            <button>Buy Now</button>
        </div>
    );

    // Function to split the cards into rows of three
    const splitIntoRows = (cards) => {
        const rows = [];
        for (let i = 0; i < cards.length; i += 3) {
            rows.push(cards.slice(i, i + 3));
        }
        return rows;
    };

    // Render all rows of product cards
    return (
        <div className="products-page">
            {splitIntoRows(cards).map((row, index) => (
                <div className="row" key={index}>
                    {row.map(renderProductCard)}
                </div>
            ))}
            <Footer />
        </div>
    );
}

export default Products;