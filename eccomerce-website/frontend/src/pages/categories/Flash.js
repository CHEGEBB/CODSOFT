import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./FlashSales.scss";
import flashSaleBannerMP4 from "../../images/webp/men/ban.mp4";
import Modal from "../../components/Modal";



const Flash = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Stylish Women's v-neck blouse",
      price: 170,
      discountedPrice: 150,
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
      name: "Ladies' Stylish jeans",
      price: 150,
      discountedPrice: 120,
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
      name: "Men's Urban Denim Jacket",
      price: 200,
      discountedPrice: 160,
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
      name: "Men's Shirt and Trousers",
      price: 250,
      discountedPrice: 200,
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
      name: "CityChic Skinny Jeans",
      price: 100,
      discountedPrice: 75,
      rating: 3,
      images: [
        require("../../images/webp/flash/n1.avif"),
        require("../../images/webp/flash/n2.jpg"),
        require("../../images/webp/flash/n3.jpg"),
        require("../../images/webp/flash/n4.jpg")
       
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "CoupleCouture Collection",
      price: 350,
      discountedPrice: 280,
      rating: 5,
      images: [
        require ("../../images/webp/flash/i1.jpg"),
        require("../../images/webp/flash/i2.jpg"),
        require("../../images/webp/flash/i3.jpg"),
        require("../../images/webp/flash/i4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "Urban Dapper Suit",
      price: 140,
      discountedPrice: 120,
      rating: 4,
      images: [
        require("../../images/webp/flash/h1.jpg"),
        require("../../images/webp/flash/h2.jpg"),
        require("../../images/webp/flash/h3.jpg"),
        require("../../images/webp/flash/h2.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "CoupleElegance Ensemble",
      price: 450,
      discountedPrice: 300,
      rating: 3,
      images: [
        require("../../images/webp/flash/j1.jpg"),
        require("../../images/webp/flash/j2.jpg"),
        require("../../images/webp/flash/j3.jpg"),
        require("../../images/webp/flash/j4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "His&Her Harmony Collection",
      price: 250,
      discountedPrice: 150,
      rating: 5,
      images: [
        require("../../images/webp/flash/cp1.jpg"),
        require("../../images/webp/flash/cp2.jpg"),
        require("../../images/webp/flash/cp3.jpg"),
        require("../../images/webp/flash/cp4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "PartnerStyle Collection",
      price: 550,
      discountedPrice: 440,
      rating: 4,
      images: [
        require("../../images/webp/flash/k1.jpg"),
        require("../../images/webp/flash/k2.jpg"),
        require("../../images/webp/flash/k3.jpg"),
        require("../../images/webp/flash/k4.avif")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "Contemporary Skirt & Vest Set",
      price: 160,
      discountedPrice: 148.99,
      rating: 3,
      images: [
        require ("../../images/webp/flash/l1.jpg"),
        require("../../images/webp/flash/l2.jpg"),
        require("../../images/webp/flash/l3.jpg"),
        require("../../images/webp/flash/l4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "UrbanEssence dress",
      price: 165,
      discountedPrice: 150,
      rating: 5,
      images: [
        require("../../images/webp/flash/m1.jpg"),
        require("../../images/webp/flash/m2.jpg"),
        require("../../images/webp/flash/m3.jpg"),
        require("../../images/webp/flash/m4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    }
  ]);

  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpenModal = (item) =>{
    setSelectedProduct(item);
    setIsModalOpen(true);
  }

  const handleCloseModal = () =>{
    setSelectedProduct(null);
    setIsModalOpen(false);
    setSelectedImageIndex(0);
  }

  const handleNextImage = () =>{
    setSelectedImageIndex((prevIndex) => (prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1));
  }

  const handlePrevImage = () =>{
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1));
  }

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
                {/* Conditionally render video only on the first card of each row */}
                {columnIndex === 0 && (
                  <video autoPlay loop muted className="flash-sale-banner">
                    <source src={flashSaleBannerMP4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {/* End of conditional rendering */}
                
                <div className="item-image">
                  <img src={item.images[item.currentImageIndex]} alt={item.name}  onClick={() => handleOpenModal(item)}/>
                  <div className="item-overlay" onClick={() => handleOpenModal(item)}>
                    <div className="item-discount-flash-sales">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn" onClick={() => handleOpenModal(item)}>
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
                    <span className="previous-price-flash">${item.price}</span>
                    <span className="current-price-flash">${item.discountedPrice}</span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="star-icon" style={{ color: "#8B008B", fontSize: "1.5em" }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        product={selectedProduct}
        selectedImageIndex={selectedImageIndex}
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
      />
    </div>
  );
  
  
};

export default Flash;