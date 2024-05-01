import React, { useState, useEffect } from "react";
import LeftSideBar from "../components/LeftSideBar";
import "./Collections.scss";
import wishlistIcon from "../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../images/ic--round-shopping-cart.svg";
import Footer from "../components/Footer";

const Collections = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "DapperDaze Designer Tees",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../images/webp/ts1.webp"),
        require("../images/webp/ts2.webp"),
        require("../images/webp/ts3.webp"),
        require("../images/webp/ts4.webp")
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
        require("../images/webp/womsuit1.webp"),
        require("../images/webp/womsuit2.webp"),
        require("../images/webp/womsuit3.jpg"),
        require("../images/webp/womsuit4.jpg")
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
        require("../images/webp/tp1.webp"),
        require("../images/webp/tp2.webp"),
        require("../images/webp/tp3.webp"),
        require("../images/webp/tp4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "UrbanChic Tee Collection",
      price: 25,
      discountedPrice: 20,
      rating: 4,
      images: [
        require("../images/webp/tz1.webp"),
        require("../images/webp/tz2.webp"),
        require("../images/webp/tz5.webp"),
        require("../images/webp/tz4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "UrbanKhaki",
      price: 30,
      discountedPrice: 24,
      rating: 3,
      images: [
        require("../images/webp/khaki1.jpg"),
        require("../images/webp/khaki2.jpg"),
        require("../images/webp/khaki3.jpg"),
        require("../images/webp/khaki4.jpg")
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
        require("../images/webp/cool1.webp"),
        require("../images/webp/cool2.webp"),
        require("../images/webp/cool3.webp"),
        require("../images/webp/cool4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "StreetStyle Statement Shirts",
      price: 40,
      discountedPrice: 32,
      rating: 4,
      images: [
        require("../images/webp/tss1.webp"),
        require("../images/webp/tss2.webp"),
        require("../images/webp/tss3.webp"),
        require("../images/webp/tss4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "Ladies Denim Delight",
      price: 45,
      discountedPrice: 36,
      rating: 3,
      images: [
        require("../images/webp/womdenim.webp"),
        require("../images/webp/womendenim6.jpeg"),
        require("../images/webp/womdenim2.avif"),
        require("../images/webp/womdenim3.jpg")
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
        require("../images/webp/menstyle1.jpg"),
        require("../images/webp/menstyle2.jpg"),
        require("../images/webp/menstyle3.jpg"),
        require("../images/webp/menstyle4.jpg")
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
        require("../images/webp/hoodies1.jpg"),
        require("../images/webp/hoodies2.jpg"),
        require("../images/webp/hoodies3.jpg"),
        require("../images/webp/hoodies4.jpg")
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
        require("../images/webp/m1.jpg"),
        require("../images/webp/m2.jpg"),
        require("../images/webp/m7.jpg"),
        require("../images/webp/m6.jpg")
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
        require("../images/webp/autumn1.avif"),
        require("../images/webp/autumn2.jpg"),
        require("../images/webp/autumn3.jpg"),
        require("../images/webp/autumn4.avif")
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
        require("../images/webp/pink1.jpg"),
        require("../images/webp/pink2.jpg"),
        require("../images/webp/pink3.jpg"),
        require("../images/webp/pink4.jpg")
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
        require("../images/webp/mid1.jpg"),
        require("../images/webp/mid2.jpg"),
        require("../images/webp/mid3.jpg"),
        require("../images/webp/mid4.jpg")
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
        require("../images/webp/cs1.jpg"),
        require("../images/webp/cs2.jpg"),
        require("../images/webp/cs3.jpg"),
        require("../images/webp/cs4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 16,
      name: "Item 16",
      price: 85,
      discountedPrice: 68,
      rating: 4,
      images: [
        require("../images/webp/be1.jpg"),
        require("../images/webp/be5.jpg"),
        require("../images/webp/be3.jpg"),
        require("../images/webp/be4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 17,
      name: "Item 17",
      price: 90,
      discountedPrice: 72,
      rating: 3,
      images: [
        require("../images/webp/bea1.jpg"),
        require("../images/webp/bea2.jpg"),
        require("../images/webp/bea3.jpg"),
        require("../images/webp/bea4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 18,
      name: "Item 18",
      price: 95,
      discountedPrice: 76,
      rating: 5,
      images: [
        require("../images/webp/kid1.avif"),
        require("../images/webp/kid2.jpg"),
        require("../images/webp/kid3.avif"),
        require("../images/webp/kid4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 19,
      name: "Item 19",
      price: 100,
      discountedPrice: 80,
      rating: 4,
      images: [
        require("../images/webp/jack1.jpg"),
        require("../images/webp/jack2.jpg"),
        require("../images/webp/jack3.jpg"),
        require("../images/webp/jack4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 20,
      name: "Item 20",
      price: 105,
      discountedPrice: 84,
      rating: 3,
      images: [
        require("../images/webp/kids1.avif"),
        require("../images/webp/kids2.jpg"),
        require("../images/webp/kids3.jpg"),
        require("../images/webp/kids4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 21,
      name: "Item 21",
      price: 110,
      discountedPrice: 88,
      rating: 5,
      images: [
        require("../images/webp/bag1.jpg"),
        require("../images/webp/bag2.jpg"),
        require("../images/webp/bag4.jpg"),
        require("../images/webp/bag3.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 22,
      name: "Item 22",
      price: 115,
      discountedPrice: 92,
      rating: 4,
      images: [
        require("../images/webp/man1.jpg"),
        require("../images/webp/man2.jpg"),
        require("../images/webp/man3.jpg"),
        require("../images/webp/man4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 23,
      name: "Item 23",
      price: 120,
      discountedPrice: 96,
      rating: 3,
      images: [
        require("../images/webp/purse1.jpg"),
        require("../images/webp/purse5.jpg"),
        require("../images/webp/purse3.jpg"),
        require("../images/webp/purse4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 24,
      name: "Item 24",
      price: 125,
      discountedPrice: 100,
      rating: 5,
      images: [
        require("../images/webp/jeans1.jpg"),
        require("../images/webp/jeans2.jpg"),
        require("../images/webp/jeans3.jpg"),
        require("../images/webp/jeans4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 25,
      name: "Item 25",
      price: 130,
      discountedPrice: 104,
      rating: 4,
      images: [
        require("../images/webp/k1.avif"),
        require("../images/webp/k2.avif"),
        require("../images/webp/k3.jpg"),
        require("../images/webp/k4.avif")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 26,
      name: "Item 26",
      price: 135,
      discountedPrice: 108,
      rating: 3,
      images: [
        require("../images/webp/skirt1.jpg"),
        require("../images/webp/skirt2.jpg"),
        require("../images/webp/skirt3.jpg"),
        require("../images/webp/skirt4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 27,
      name: "Item 27",
      price: 140,
      discountedPrice: 112,
      rating: 5,
      images: [
        require("../images/webp/ms1.jpg"),
        require("../images/webp/ms2.jpg"),
        require("../images/webp/ms3.jpg"),
        require("../images/webp/ms4.jpg")
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
    <div className="collections-page">
      <div className="side-bar">
        <LeftSideBar />
      </div>
      <div className="collections-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`item-container ${
                  item.id >= 10 && item.id <= 15 ? "special-card" : ""
                }`}
                key={item.id}
              >
                <div className="item-discount">
                  {(
                    ((item.price - item.discountedPrice) / item.price) *
                    100
                  ).toFixed(0)}
                  % off
                </div>
                <div className="item-image">
                  <img
                    src={item.images[item.currentImageIndex]}
                    alt={item.name}
                  />
                  <div className="item-overlay">
                    <div className="item-discount">
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
                    <span className="current-price">
                      ${item.discountedPrice}
                    </span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span
                        key={index}
                        className="star-icon"
                        style={{
                          color: "crimson",
                          fontSize: "1.5em"
                        }}
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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Collections;
