import React, { useState, useEffect } from "react";
import LeftSideBar from "../components/LeftSideBar";
import "./Collections.scss";
import wishlistIcon from "../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../images/ic--round-shopping-cart.svg";

const Collections = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../images/webp/b1.webp"),
        require("../images/webp/suit4.webp"),
        require("../images/webp/suit4.webp"),
        require("../images/acc4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "Item 2",
      price: 15,
      discountedPrice: 12,
      rating: 3,
      images: [
        require("../images/webp/a5.webp"),
        require("../images/webp/d2.webp"),
        require("../images/webp/suit3.webp"),
        require("../images/webp/b5.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "Item 3",
      price: 20,
      discountedPrice: 16,
      rating: 5,
      images: [
        require("../images/webp/b3.webp"),
        require("../images/webp/c5.webp"),
        require("../images/webp/a3.webp"),
        require("../images/webp/suit4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "Item 4",
      price: 25,
      discountedPrice: 20,
      rating: 4,
      images: [
        require("../images/webp/b5.webp"),
        require("../images/webp/a5.webp"),
        require("../images/webp/c5.webp"),
        require("../images/webp/suit3.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "Item 5",
      price: 30,
      discountedPrice: 24,
      rating: 3,
      images: [
        require("../images/webp/a3.webp"),
        require("../images/webp/b3.webp"),
        require("../images/webp/d2.webp"),
        require("../images/webp/suit4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "Item 6",
      price: 35,
      discountedPrice: 28,
      rating: 5,
      images: [
        require("../images/webp/b1.webp"),
        require("../images/webp/a5.webp"),
        require("../images/webp/c5.webp"),
        require("../images/webp/suit3.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "Item 7",
      price: 40,
      discountedPrice: 32,
      rating: 4,
      images: [
        require("../images/webp/b3.webp"),
        require("../images/webp/a3.webp"),
        require("../images/webp/d2.webp"),
        require("../images/webp/suit4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "Item 8",
      price: 45,
      discountedPrice: 36,
      rating: 3,
      images: [
        require("../images/webp/b5.webp"),
        require("../images/webp/a5.webp"),
        require("../images/webp/c5.webp"),
        require("../images/webp/suit3.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "Item 9",
      price: 50,
      discountedPrice: 40,
      rating: 5,
      images: [
        require("../images/webp/a3.webp"),
        require("../images/webp/b3.webp"),
        require("../images/webp/d2.webp"),
        require("../images/webp/suit4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "Item 10",
      price: 55,
      discountedPrice: 44,
      rating: 4,
      images: [
        require("../images/webp/b1.webp"),
        require("../images/webp/a5.webp"),
        require("../images/webp/c5.webp"),
        require("../images/webp/suit3.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "Item 11",
      price: 60,
      discountedPrice: 48,
      rating: 3,
      images: [
        require("../images/webp/b3.webp"),
        require("../images/webp/a3.webp"),
        require("../images/webp/d2.webp"),
        require("../images/webp/suit4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "Item 12",
      price: 65,
      discountedPrice: 52,
      rating: 5,
      images: [
        require("../images/webp/b5.webp"),
        require("../images/webp/a5.webp"),
        require("../images/webp/c5.webp"),
        require("../images/webp/suit3.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 13,
      name: "Item 13",
      price: 70,
      discountedPrice: 56,
      rating: 4,
      images: [
        require("../images/webp/a3.webp"),
        require("../images/webp/b3.webp"),
        require("../images/webp/d2.webp"),
        require("../images/webp/suit4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 14,
      name: "Item 14",
      price: 75,
      discountedPrice: 60,
      rating: 3,
      images: [
        require("../images/webp/b1.webp"),
        require("../images/webp/a5.webp"),
        require("../images/webp/c5.webp"),
        require("../images/webp/suit3.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 15,
      name: "Item 15",
      price: 80,
      discountedPrice: 64,
      rating: 5,
      images: [
        require("../images/webp/b3.webp"),
        require("../images/webp/a3.webp"),
        require("../images/webp/d2.webp"),
        require("../images/webp/suit4.webp")
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

  return (
    <div className="collections-page">
      <div className="side-bar">
        <LeftSideBar />
      </div>
      <div className="collections-items">
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div className="row" key={`row-${rowIndex}`}>
            {items.slice(rowIndex * 3, rowIndex * 3 + 3).map((item) => (
              <div className="item-container" key={item.id}>
                <div className="item-image">
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay">
                    <div className="wish">
                      <img
                        src={item.wishlistIconPath}
                        alt="Wishlist"
                        className="wishlist-icon"
                      />
                    </div>
                    <button className="add-to-cart-btn">
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price">{item.discountedPrice}</div>
                  </div>
                </div>
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price">${item.price}</span>
                    <span className="current-price">${item.discountedPrice}</span>
                  </div>
                  <div className="item-rating">
                    <div className="item-rating">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <span
                          key={index}
                          className="star-icon"
                          style={{
                            color: "hsla(45, 100%, 50%, 1)",
                            fontSize: "1.5em"
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
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

export default Collections;
