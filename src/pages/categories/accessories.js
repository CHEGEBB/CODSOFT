import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Accessories.scss";

const Accessories = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "FlashSale Accessory 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a1.avif"),
        require("../../images/webp/accessories/a2.jpg"),
        require("../../images/webp/accessories/a3.jpg"),
        require("../../images/webp/accessories/a4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "FlashSale Accessory 2",
      price: 20,
      discountedPrice: 15,
      rating: 5,
      images: [
        require("../../images/webp/accessories/b1.jpg"),
        require("../../images/webp/accessories/b2.jpg"),
        require("../../images/webp/accessories/b3.jpg"),
        require("../../images/webp/accessories/b4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "FlashSale Accessory 3",
      price: 30,
      discountedPrice: 25,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a9.avif"),
        require("../../images/webp/accessories/a10.jpg"),
        require("../../images/webp/accessories/a11.jpg"),
        require("../../images/webp/accessories/a12.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "FlashSale Accessory 4",
      price: 40,
      discountedPrice: 35,
      rating: 3,
      images: [
        require("../../images/webp/accessories/a13.avif"),
        require("../../images/webp/accessories/a14.jpg"),
        require("../../images/webp/accessories/a15.jpg"),
        require("../../images/webp/accessories/a16.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "FlashSale Accessory 5",
      price: 50,
      discountedPrice: 45,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a17.avif"),
        require("../../images/webp/accessories/a18.jpg"),
        require("../../images/webp/accessories/a19.jpg"),
        require("../../images/webp/accessories/a20.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "FlashSale Accessory 6",
      price : 60,
      discountedPrice: 55,
      rating: 5,
      images: [
        require("../../images/webp/accessories/a21.avif"),
        require("../../images/webp/accessories/a22.jpg"),
        require("../../images/webp/accessories/a23.jpg"),
        require("../../images/webp/accessories/a24.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "FlashSale Accessory 7",
      price: 70,
      discountedPrice: 65,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a25.avif"),
        require("../../images/webp/accessories/a26.jpg"),
        require("../../images/webp/accessories/a27.jpg"),
        require("../../images/webp/accessories/a28.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "FlashSale Accessory 8",
      price: 80,
      discountedPrice: 75,
      rating: 3,
      images: [
        require("../../images/webp/accessories/a29.avif"),
        require("../../images/webp/accessories/a30.jpg"),
        require("../../images/webp/accessories/a31.jpg"),
        require("../../images/webp/accessories/a32.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "FlashSale Accessory 9",
      price: 90,
      discountedPrice: 85,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a33.avif"),
        require("../../images/webp/accessories/a34.jpg"),
        require("../../images/webp/accessories/a35.jpg"),
        require("../../images/webp/accessories/a36.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "FlashSale Accessory 10",
      price: 100,
      discountedPrice: 95,
      rating: 5,
      images: [
        require("../../images/webp/accessories/a37.avif"),
        require("../../images/webp/accessories/a38.jpg"),
        require("../../images/webp/accessories/a39.jpg"),
        require("../../images/webp/accessories/a40.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "FlashSale Accessory 11",
      price: 110,
      discountedPrice: 105,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a41.avif"),
        require("../../images/webp/accessories/a42.jpg"),
        require("../../images/webp/accessories/a43.jpg"),
        require("../../images/webp/accessories/a44.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "FlashSale Accessory 12",
      price: 120,
      discountedPrice: 115,
      rating: 3,
      images: [
        require("../../images/webp/accessories/a45.avif"),
        require("../../images/webp/accessories/a46.jpg"),
        require("../../images/webp/accessories/a47.jpg"),
        require("../../images/webp/accessories/a48.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 13,
      name: "FlashSale Accessory 13",
      price: 130,
      discountedPrice: 125,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a49.avif"),
        require("../../images/webp/accessories/a50.jpg"),
        require("../../images/webp/accessories/a51.jpg"),
        require("../../images/webp/accessories/a52.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 14,
      name: "FlashSale Accessory 14",
      price: 140,
      discountedPrice: 135,
      rating: 5,
      images: [
        require("../../images/webp/accessories/a53.avif"),
        require("../../images/webp/accessories/a54.jpg"),
        require("../../images/webp/accessories/a55.jpg"),
        require("../../images/webp/accessories/a56.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 15,
      name: "FlashSale Accessory 15",
      price: 150,
      discountedPrice: 145,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a57.avif"),
        require("../../images/webp/accessories/a58.jpg"),
        require("../../images/webp/accessories/a59.jpg"),
        require("../../images/webp/accessories/a60.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 16,
      name: "FlashSale Accessory 16",
      price: 160,
      discountedPrice: 155,
      rating: 3,
      images: [
        require("../../images/webp/accessories/a61.avif"),
        require("../../images/webp/accessories/a62.jpg"),
        require("../../images/webp/accessories/a63.jpg"),
        require("../../images/webp/accessories/a64.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 17,
      name: "FlashSale Accessory 17",
      price: 170,
      discountedPrice: 165,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a65.avif"),
        require("../../images/webp/accessories/a66.jpg"),
        require("../../images/webp/accessories/a67.jpg"),
        require("../../images/webp/accessories/a68.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 18,
      name: "FlashSale Accessory 18",
      price: 180,
      discountedPrice: 175,
      rating: 5,
      images: [
        require("../../images/webp/accessories/a69.avif"),
        require("../../images/webp/accessories/a70.jpg"),
        require("../../images/webp/accessories/a71.jpg"),
        require("../../images/webp/accessories/a72.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 19,
      name: "FlashSale Accessory 19",
      price: 190,
      discountedPrice: 185,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a73.avif"),
        require("../../images/webp/accessories/a74.jpg"),
        require("../../images/webp/accessories/a75.jpg"),
        require("../../images/webp/accessories/a76.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 20,
      name: "FlashSale Accessory 20",
      price: 200,
      discountedPrice: 195,
      rating: 3,
      images: [
        require("../../images/webp/accessories/a77.avif"),
        require("../../images/webp/accessories/a78.jpg"),
        require("../../images/webp/accessories/a79.jpg"),
        require("../../images/webp/accessories/a80.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 21,
      name: "FlashSale Accessory 21",
      price: 210,
      discountedPrice: 205,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a81.avif"),
        require("../../images/webp/accessories/a82.jpg"),
        require("../../images/webp/accessories/a83.jpg"),
        require("../../images/webp/accessories/a84.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 22,
      name: "FlashSale Accessory 22",
      price: 220,
      discountedPrice: 215,
      rating: 5,
      images: [
        require("../../images/webp/accessories/a85.avif"),
        require("../../images/webp/accessories/a86.jpg"),
        require("../../images/webp/accessories/a87.jpg"),
        require("../../images/webp/accessories/a88.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 23,
      name: "FlashSale Accessory 23",
      price: 230,
      discountedPrice: 225,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a89.avif"),
        require("../../images/webp/accessories/a90.jpg"),
        require("../../images/webp/accessories/a91.jpg"),
        require("../../images/webp/accessories/a92.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 24,
      name: "FlashSale Accessory 24",
      price: 240,
      discountedPrice: 235,
      rating: 3,
      images: [
        require("../../images/webp/accessories/a93.avif"),
        require("../../images/webp/accessories/a94.jpg"),
        require("../../images/webp/accessories/a95.jpg"),
        require("../../images/webp/accessories/a96.jpg"),
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
    <div className="accessories-page"> 
      <h1>Accessories Flash Sale</h1>
      <div className="accessories-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="accessories-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`accessories-item-container ${item.id >= 10 && item.id <= 15 ? "special-card" : ""}`}
                key={item.id}
              >
                <div className="item-image">
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay">
                    <div className="item-discount-accessories">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn">
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price-accessories">
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

export default Accessories;
