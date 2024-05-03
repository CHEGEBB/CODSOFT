import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Men.scss";

const Men = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "DapperDaze Designer Tees",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/men/jack1.jpg"),
        require("../../images/webp/men/jack2.jpg"),
        require("../../images/webp/men/jack3.jpg"),
        require("../../images/webp/men/jack4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "TrendyTwist Tailored Treasures",
      price: 15,
      discountedPrice: 12,
      rating: 3,
      images: [
        require("../../images/webp/men/g1.jpg"),
        require("../../images/webp/men/g2.jpg"),
        require("../../images/webp/men/g3.jpg"),
        require("../../images/webp/men/g4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "ClassyChic Tee Collection",
      price: 20,
      discountedPrice: 16,
      rating: 5,
      images: [
        require("../../images/webp/men/f1.jpg"),
        require("../../images/webp/men/f2.jpg"),
        require("../../images/webp/men/f3.jpg"),
        require("../../images/webp/men/f4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "TrendyTees Designer Collection",
      price: 25,
      discountedPrice: 20,
      rating: 4,
      images: [
        require("../../images/webp/men/h1.avif"),
        require("../../images/webp/men/h2.jpg"),
        require("../../images/webp/men/h3.jpg"),
        require("../../images/webp/men/h4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "DapperDaze Designer Tees",
      price: 30,
      discountedPrice: 24,
      rating: 3,
      images: [
        require("../../images/webp/ts1.webp"),
        require("../../images/webp/ts2.webp"),
        require("../../images/webp/ts3.webp"),
        require("../../images/webp/ts4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "TrendyTwist Tailored Treasures",
      price: 35,
      discountedPrice: 28,
      rating: 5,
      images: [
        require("../../images/webp/men/i1.avif"),
        require("../../images/webp/men/i2.avif"),
        require("../../images/webp/men/i3.avif"),
        require("../../images/webp/men/i4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "ClassyChic Tee Collection",
      price: 40,
      discountedPrice: 32,
      rating: 4,
      images: [
        require("../../images/webp/tp1.webp"),
        require("../../images/webp/tp2.webp"),
        require("../../images/webp/tp3.webp"),
        require("../../images/webp/tp4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "TrendyTees Designer Collection",
      price: 45,
      discountedPrice: 36,
      rating: 3,
      images: [
        require("../../images/webp/ts1.webp"),
        require("../../images/webp/ts2.webp"),
        require("../../images/webp/ts3.webp"),
        require("../../images/webp/ts4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "DapperDaze Designer Tees",
      price: 50,
      discountedPrice: 40,
      rating: 5,
      images: [
        require("../../images/webp/ts1.webp"),
        require("../../images/webp/ts2.webp"),
        require("../../images/webp/ts3.webp"),
        require("../../images/webp/ts4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "TrendyTwist Tailored Treasures",
      price: 55,
      discountedPrice: 44,
      rating: 4,
      images: [
        require("../../images/webp/womsuit1.webp"),
        require("../../images/webp/womsuit2.webp"),
        require("../../images/webp/womsuit3.jpg"),
        require("../../images/webp/womsuit4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "ClassyChic Tee Collection",
      price: 60,
      discountedPrice: 48,
      rating: 3,
      images: [
        require("../../images/webp/tp1.webp"),
        require("../../images/webp/tp2.webp"),
        require("../../images/webp/tp3.webp"),
        require("../../images/webp/tp4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "TrendyTees Designer Collection",
      price: 65,
      discountedPrice: 52,
      rating: 5,
      images: [
        require("../../images/webp/ts1.webp"),
        require("../../images/webp/ts2.webp"),
        require("../../images/webp/ts3.webp"),
        require("../../images/webp/ts4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map((item) => {
          const nextImageIndex =
            (item.currentImageIndex + 1) % item.images.length;
          return { ...item, currentImageIndex: nextImageIndex };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedItems.push(items.slice(i, i + 4));
  }

  return (
    <div className="men-page"> 
      <h1>
      Men's Collection
      </h1>
      <div className="men-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="men-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`men-item-container ${item.id >= 10 && item.id <= 15 ? "special-card" : ""}`}
                key={item.id}
              >
                <div className="item-image">
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay">
                    <div className="item-discount-men">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn">
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price-men">
                      {item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price">${item.price}</span>
                    <span className="current-price">${item.discountedPrice}</span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="star-icon" style={{ color: "crimson", fontSize: "1.5em" }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;