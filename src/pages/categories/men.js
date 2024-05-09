import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Men.scss";
import Modal from "../../components/Modal";

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
        require("../../images/webp/men/j1.jpg"),
        require("../../images/webp/men/j2.jpg"),
        require("../../images/webp/men/j3.jpg"),
        require("../../images/webp/men/j4.jpg")
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
        require("../../images/webp/men/k1.jpg"),
        require("../../images/webp/men/k2.jpg"),
        require("../../images/webp/men/k3.jpg"),
        require("../../images/webp/men/k4.jpg")
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
        require("../../images/webp/men/l1.jpg"),
        require("../../images/webp/men/l2.jpg"),
        require("../../images/webp/men/l3.jpg"),
        require("../../images/webp/men/l4.jpg")
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
        require("../../images/webp/men/m1.jpg"),
        require("../../images/webp/men/m2.jpg"),
        require("../../images/webp/men/m3.jpg"),
        require("../../images/webp/men/m4.jpg")
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
        require("../../images/webp/men/n1.jpg"),
        require("../../images/webp/men/n2.jpg"),
        require("../../images/webp/men/n3.jpg"),
        require("../../images/webp/men/n4.jpg")
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
        require("../../images/webp/men/q1.jpg"),
        require("../../images/webp/men/q2.jpg"),
        require("../../images/webp/men/q3.jpg"),
        require("../../images/webp/men/q4.jpg")
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
        require("../../images/webp/men/p1.jpg"),
        require("../../images/webp/men/p2.jpg"),
        require("../../images/webp/men/p3.jpg"),
        require("../../images/webp/men/p4.jpg")
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

  const handleAddToCart = (item) => {
    alert(`${item.name} has been added to your cart`);
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
                <div className="item-image" onClick={() => handleOpenModal(item)}>
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay" onClick={() => handleOpenModal(item)}>
                    <div className="item-discount-men">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price-men">
                      {item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info-men">
                  <div className="item-name-men">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price-men">${item.price}</span>
                    <span className="current-price-men">${item.discountedPrice}</span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="star-icon" style={{ color: "#F5AD42", fontSize: "1.5em" }}>★</span>
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

export default Men;