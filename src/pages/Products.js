import React from 'react';
import '../pages/Products.scss';
import Footer from '../components/Footer';

const Products = () => {
    return (
        <div className="products-page">
            <div className="products-row-one">
            <div className="t-shirts">
                <h2>T-Shirts</h2>
                <p>Our T-Shirts are made from the finest cotton in the world. They are soft, comfortable, and durable. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
            </div>
            <div className="suits">
                <h2>Suits</h2>
                <p>We sell high-class suits that are made from the finest materials. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
            </div>

            <div className="shoes-prod">
                <h2>Shoes</h2>
                <p>Our shoes are made from the finest leather in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
                </div>
                
            </div>
            <div className="products-row-two">
            <div className="trousers">
                <h2>Trousers</h2>
                <p>Our trousers are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
                </div>
                <div className="hoodies">
                <h2>Hoodies</h2>
                <p>See our wide array of hoodies</p>
                <button>Buy Now</button>
                </div>
                <div className="dresses-prod">
                <h2>Dresses</h2>
                <p>
                    At our store, we have a wide array of dresses ranging from casual to formal. Our dresses are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes.
                </p>
                <button>Buy Now</button>
                </div>
            </div>
            <div className="products-row-three">
            <div className="accessories-prod">
                <h2>Accessories</h2>
                <p>Our accessories are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
                </div>
                <div className="bags">
                <h2>Bags</h2>
                <p>Our bags are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
                </div>
                <div className="hats">
                <h2>Hats</h2>
                <p>Our hats are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
                </div>
            </div>
            <div className="products-row-four">
            <div className="jackets">
                <h2>Jackets</h2>
                <p>Our jackets are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
                </div>
                <div className="shorts">
                <h2>Shorts</h2>
                <p>Our shorts are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
            </div>
            
            <div className="skirts">
                <h2>Skirts</h2>
                <p>Our skirts are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes.</p>
                <button>Buy Now</button>
            </div>
            </div>
            <div className="footer">
            <Footer />
        </div>
        </div>
    );
}

export default Products;

