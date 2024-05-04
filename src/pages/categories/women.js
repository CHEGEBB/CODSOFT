import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Women.scss";

const Women = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/a1.jpg"),
        require("../../images/webp/women/a2.jpg"),
        require("../../images/webp/women/a3.jpg"),
        require("../../images/webp/women/a4.jpg"),

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/b1.avif"),
        require("../../images/webp/women/b2.jpg"),
        require("../../images/webp/women/b3.jpg"),
        require("../../images/webp/women/b4.jpg"),

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 4,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 5,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 6,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 7,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 9,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 10,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 12,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 13,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 14,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 15,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 16,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 17,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 18,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 19,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
      id: 20,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
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
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedItems.push(items.slice(i, i + 4));
  }

  return (
    <div className="women-page">
      <h1>Women's Collection</h1>
      <div className="women-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="women-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`women-item-container ${
                  item.id >= 10 && item.id <= 15 ? "special-card" : ""
                }`}
                key={item.id}
              >
                <div className="item-image">
                  <img
                    src={item.images[item.currentImageIndex]}
                    alt={item.name}
                    className={item.nextImage ? "next" : ""}
                    onAnimationEnd={() => {
                      setItems((prevItems) =>
                        prevItems.map((prevItem) =>
                          prevItem.id === item.id
                            ? { ...prevItem, nextImage: false }
                            : prevItem
                        )
                      );
                    }}
                  />
                  <div className="item-overlay">
                    <div className="item-discount-women">
                      {(
                        ((item.price - item.discountedPrice) / item.price) *
                        100
                      ).toFixed(0)}
                      % off
                    </div>
                    <div className="wish">
                      <img
                        src={item.wishlistIconPath}
                        alt="Wishlist"
                        className="wishlist-icon"
                      />
                    </div>
                    <button className="add-to-cart-btn">
                      <img
                        src={item.addToCartIconPath}
                        alt="Add to Cart"
                      />
                      Add to Cart
                    </button>
                    <div className="discounted-price-women">
                      {item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price">${item.price}</span>
                    <span className="current-price">
                      ${item.discountedPrice}
                    </span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span
                        key={index}
                        className="star-icon"
                        style={{ color: "crimson", fontSize: "1.5em" }}
                      >
                        ★
                      </span>
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

export default Women;
