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
      id: 2,
      name: "TrendyTwist Tailored Treasures",
      price: 15,
      discountedPrice: 12,
      rating: 3,
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
      id: 3,
      name: "ClassyChic Tee Collection",
      price: 20,
      discountedPrice: 16,
      rating: 5,
      images: [
        require("../../images/webp/tp1.webp"),
        require("../../images/webp/tp2.webp"),
        require("../../images/webp/tp3.webp"),
        require("../../images/webp/tp4.webp")
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

  // Divide items into groups of three
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <div className="men-page"> 
      <div className="men-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="men-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`men-item-container ${item.id >= 10 && item.id <= 15 ? "special-card" : ""}`}
                key={item.id}
              >
                <div className="item-discount-men">
                  {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                </div>
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
                    <div className="discounted-price">
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