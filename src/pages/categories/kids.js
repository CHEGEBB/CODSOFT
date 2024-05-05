import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Kids.scss";

const Kids = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "FlashSale Kid 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/kid1.avif"),
        require("../../images/webp/kid2.jpg"),
        require("../../images/webp/kid3.avif"),
        require("../../images/webp/kid4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "FlashSale Kid 2",
      price: 15,
      discountedPrice: 12,
      rating: 3,
      images: [
        require("../../images/webp/kids/a1.jpg"),
        require("../../images/webp/kids/a2.jpg"),
        require("../../images/webp/kids/a3.jpg"),
        require("../../images/webp/kids/a4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "FlashSale Kid 3",
      price: 20,
      discountedPrice: 16,
      rating: 5,
      images: [
        require("../../images/webp/kids/b1.jpg"),
        require("../../images/webp/kids/b2.jpg"),
        require("../../images/webp/kids/b3.jpg"),
        require("../../images/webp/kids/b4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "FlashSale Kid 4",
      price: 25,
      discountedPrice: 20,
      rating: 4,
      images: [
        require("../../images/webp/kids/c1.jpg"),
        require("../../images/webp/kids/c2.jpg"),
        require("../../images/webp/kids/c3.jpg"),
        require("../../images/webp/kids/c4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "FlashSale Kid 5",
      price: 30,
      discountedPrice: 24,
      rating: 3,
      images: [
        require("../../images/webp/kids/d1.avif"),
        require("../../images/webp/kids/d2.avif"),
        require("../../images/webp/kids/d3.jpg"),
        require("../../images/webp/kids/d4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "FlashSale Kid 6",
      price: 35,
      discountedPrice: 28,
      rating: 5,
      images: [
        require("../../images/webp/kids/e1.jpg"),
        require("../../images/webp/kids/e2.jpg"),
        require("../../images/webp/kids/e3.jpg"),
        require("../../images/webp/kids/e4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "FlashSale Kid 7",
      price: 40,
      discountedPrice: 32,
      rating: 4,
      images: [
        require("../../images/webp/kids/f1.avif"),
        require("../../images/webp/kids/f2.jpg"),
        require("../../images/webp/kids/f3.jpg"),
        require("../../images/webp/kids/f4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "FlashSale Kid 8",
      price: 45,
      discountedPrice : 36,
      rating: 3,
      images: [
        require("../../images/webp/kids/h4.jpg"),
        require("../../images/webp/kids/h2.jpg"),
        require("../../images/webp/kids/h3.avif"),
        require("../../images/webp/kids/h4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
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
    <div className="kids-page"> 
      <h1>Kids Flash Sale</h1>
      <div className="kids-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="kids-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`kids-item-container ${item.id >= 10 && item.id <= 15 ? "special-card" : ""}`}
                key={item.id}
              >
                <div className="item-image">
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay">
                    <div className="item-discount-kids">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn">
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price-kids">
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

export default Kids;
