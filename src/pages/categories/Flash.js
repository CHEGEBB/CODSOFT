import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./FlashSales.scss";
import flashSaleBannerMP4 from "../../images/webp/men/ban.mp4";



const Flash = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "FlashSale Item 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/flash/a1.jpg"),
        require("../../images/webp/flash/a2.jpg"),
        require("../../images/webp/flash/a3.jpg"),
        require("../../images/webp/flash/a4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "FlashSale Item 2",
      price: 15,
      discountedPrice: 12,
      rating: 3,
      images: [
        require("../../images/webp/flash/b1.jpg"),
        require("../../images/webp/flash/b2.jpg"),
        require("../../images/webp/flash/b3.jpg"),
        require("../../images/webp/flash/b4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "FlashSale Item 3",
      price: 20,
      discountedPrice: 16,
      rating: 5,
      images: [
        require("../../images/webp/flash/e1.jpg"),
        require("../../images/webp/flash/e2.jpg"),
        require("../../images/webp/flash/e3.jpg"),
        require("../../images/webp/flash/e4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "FlashSale Item 4",
      price: 25,
      discountedPrice: 20,
      rating: 4,
      images: [
        require("../../images/webp/flash/f1.jpg"),
        require("../../images/webp/flash/f2.jpg"),
        require("../../images/webp/flash/f3.jpg"),
        require("../../images/webp/flash/f4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "FlashSale Item 5",
      price: 30,
      discountedPrice: 24,
      rating: 3,
      images: [
        require("../../images/webp/flash/c1.jpg"),
        require("../../images/webp/flash/c2.jpg"),
        require("../../images/webp/flash/c3.jpg"),
        require("../../images/webp/flash/c4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "FlashSale Item 6",
      price: 35,
      discountedPrice: 28,
      rating: 5,
      images: [
        require ("../../images/webp/a1.webp"),
        require("../../images/webp/a2.webp"),
        require("../../images/webp/a4.webp"),
        require("../../images/webp/a5.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "FlashSale Item 7",
      price: 40,
      discountedPrice: 32,
      rating: 4,
      images: [
        require("../../images/webp/a1.webp"),
        require("../../images/webp/a2.webp"),
        require("../../images/webp/a4.webp"),
        require("../../images/webp/a5.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "FlashSale Item 8",
      price: 45,
      discountedPrice: 36,
      rating: 3,
      images: [
        require("../../images/webp/a1.webp"),
        require("../../images/webp/a2.webp"),
        require("../../images/webp/a4.webp"),
        require("../../images/webp/a5.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "FlashSale Item 9",
      price: 50,
      discountedPrice: 40,
      rating: 5,
      images: [
        require("../../images/webp/a1.webp"),
        require("../../images/webp/a2.webp"),
        require("../../images/webp/a4.webp"),
        require("../../images/webp/a5.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "FlashSale Item 10",
      price: 55,
      discountedPrice: 44,
      rating: 4,
      images: [
        require("../../images/webp/a1.webp"),
        require("../../images/webp/a2.webp"),
        require("../../images/webp/a4.webp"),
        require("../../images/webp/a5.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "FlashSale Item 11",
      price: 60,
      discountedPrice: 48,
      rating: 3,
      images: [
        require ("../../images/webp/a1.webp"),
        require("../../images/webp/a2.webp"),
        require("../../images/webp/a4.webp"),
        require("../../images/webp/a5.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "FlashSale Item 12",
      price: 65,
      discountedPrice: 52,
      rating: 5,
      images: [
        require("../../images/webp/a1.webp"),
        require("../../images/webp/a2.webp"),
        require("../../images/webp/a4.webp"),
        require("../../images/webp/a5.webp")
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
    <div className="flash-sales-page">
      <h1>Flash Sales</h1>
      <div className="flash-sales-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="flash-sales-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`flash-sales-item-container ${
                  item.id >= 10 && item.id <= 15 ? "special-card" : ""
                }`}
                key={item.id}
              >
                {/* Flash sale banner or video */}
                <video autoPlay loop muted className="flash-sale-banner">
                  <source src={flashSaleBannerMP4} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* End of flash sale banner or video */}
  
                <div className="item-image">
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay">
                    <div className="item-discount-flash-sales">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn">
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price-flash-sales">
                      {item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info-flash">
                  <div className="item-name">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price">${item.price}</span>
                    <span className="current-price">${item.discountedPrice}</span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="star-icon" style={{ color: "#FFFD00", fontSize: "1.5em" }}>★</span>
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

export default Flash;