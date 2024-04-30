import React from 'react';
import '../pages/Products.scss';
import Footer from '../components/Footer';
import { useState,useEffect } from 'react';


const Products = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            images: [
                require("../images/webp/shirt1.webp"),
                require("../images/webp/shirt2.webp"),
                require("../images/webp/shirt3.webp"),
                require("../images/webp/shirt4.webp")
            ],
            title: "T-Shirts",
            desc: "Our T-Shirts are made from the finest cotton in the world. They are soft, comfortable, and durable. They are available in a variety of colors and sizes."
        },
        {
            id: 2,
            images: [
                require("../images/webp/suit1.webp"),
                require("../images/webp/suit2.webp"),
                require("../images/webp/suit3.webp"),
                require("../images/webp/suit4.webp")
            ],
            title: "Suits",
            desc: "We sell high-class suits that are made from the finest materials. They are available in a variety of colors and sizes."
        },
        {
            id: 3,
            images: [
                require("../images/womshoe.jpg"),
                require("../images/jumpman-mvp-shoes-wm0F96.png"),
                require("../images/webp/shoewom.webp"),
                require("../images/webp/form2.webp")
            ],
            title: "Shoes",
            desc: "Our shoes are made from the finest leather in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 4,
            images: [
                require("../images/pants2.jpg"),
                require("../images/pants3.jpg"),
                require("../images/pants4.jpg"),
                require("../images/pants5.jpg")
            ],
            title: "Trousers",
            desc: "Our trousers are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 5,
            images: [
                require("../images/hodie1.avif"),
                require("../images/hoodie7.jpg"),
                require("../images/hoodie3.jpg"),
                require("../images/hoodie6.jpg")
            ],
            title: "Hoodies",
            desc: "See our wide array of hoodies"
        },
        {
            id: 6,
            images: [
                require("../images/dress2.jpg"),
                require("../images/dress3.jpg"),
                require("../images/dress4.jpg"),
                require("../images/dress5.jpg")
            ],
            title: "Dresses",
            desc: "At our store, we have a wide array of dresses ranging from casual to formal. Our dresses are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 7,
            images: [
               require("../images/ses1.jpg"),
                require("../images/ses2.avif"),
                require("../images/ses3.jpg"),
                require("../images/ses4.avif")
            ],
            title: "Accessories",
            desc: "Our accessories are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 8,
            images: [
                "../images/airmaxplus.jfif",
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
                require("../images/shorts1.jpg"),
                require("../images/shorts2.jpg"),
                require("../images/shorts3.jpg"),
                require("../images/shorts4.jpg")
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
            setCards(prevCards => 
                prevCards.map(product => {
                    const rotatedImages = [...product.images.slice(1), product.images[0]];
                    return { ...product, images: rotatedImages };
                })
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="products-page">
            {cards.map(product => (
                <div className="product-card" key={product.id}>
                    <div className="product-images">
                        <img src={product.images[0]} alt={product.title} />
                    </div>
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <p>{product.desc}</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    );
}

export default Products;