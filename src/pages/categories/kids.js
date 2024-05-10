import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Kids.scss";
import Modal from "../../components/Modal";

const Kids = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Kid's Denim skirt with shirt",
      price: 250,
      discountedPrice: 150,
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
      name: "Kid's Denim jacket with urban trousers",
      price: 150,
      discountedPrice: 120,
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
      name: "Kid's Stylish shirt with white trousers",
      price: 200,
      discountedPrice: 180,
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
      name: "Kid's Casual wear with hat",
      price: 180,
      discountedPrice: 150,
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
      name: "Kid's t-shirt with trousers",
      price: 190,
      discountedPrice: 140,
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
      name: "Stylish sweaters for kids",
      price: 135.00,
      discountedPrice: 129.99,
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
    {
      id: 9,
      name: "FlashSale Kid 9",
      price: 50,
      discountedPrice: 40,
      rating: 5,
      images: [
        require("../../images/webp/kids/i1.jpg"),
        require("../../images/webp/kids/i2.jpg"),
        require("../../images/webp/kids/i3.jpg"),
        require("../../images/webp/kids/i4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "FlashSale Kid 10",
      price: 55,
      discountedPrice: 44,
      rating: 4,
      images: [
        require("../../images/webp/kids/j1.jpg"),
        require("../../images/webp/kids/j2.jpg"),
        require("../../images/webp/kids/j3.jpg"),
        require("../../images/webp/kids/j4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "FlashSale Kid 11",
      price: 60,
      discountedPrice: 48,
      rating: 3,
      images: [
        require("../../images/webp/kids/k1.jpg"),
        require("../../images/webp/kids/k2.jpg"),
        require("../../images/webp/kids/k3.jpg"),
        require("../../images/webp/kids/k4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "FlashSale Kid 12",
      price: 65,
      discountedPrice: 52,
      rating: 5,
      images: [
        require("../../images/webp/kids/l1.jpg"),
        require("../../images/webp/kids/l2.jpg"),
        require("../../images/webp/kids/l3.jpg"),
        require("../../images/webp/kids/l4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 13,
      name: "FlashSale Kid 13",
      price: 70,
      discountedPrice : 56,
      rating: 4,
      images: [
        require("../../images/webp/kids/m1.jpg"),
        require("../../images/webp/kids/m2.jpg"),
        require("../../images/webp/kids/m3.jpg"),
        require("../../images/webp/kids/m4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 14,
      name: "FlashSale Kid 14",
      price: 75,
      discountedPrice: 60,
      rating: 3,
      images: [
        require("../../images/webp/kids/n1.jpg"),
        require("../../images/webp/kids/n2.jpg"),
        require("../../images/webp/kids/n3.jpg"),
        require("../../images/webp/kids/n4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 15,
      name: "FlashSale Kid 15",
      price: 80,
      discountedPrice: 64,
      rating: 5,
      images: [
        require("../../images/webp/kids/o1.jpg"),
        require("../../images/webp/kids/o2.jpg"),
        require("../../images/webp/kids/o3.jpg"),
        require("../../images/webp/kids/o4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 16,
      name: "FlashSale Kid 16",
      price: 85,
      discountedPrice: 68,
      rating: 4,
      images: [
        require("../../images/webp/kids/p1.jpg"),
        require("../../images/webp/kids/p2.jpg"),
        require("../../images/webp/kids/p3.jpg"),
        require("../../images/webp/kids/p4.jpg")
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
                <div className="item-image" onClick={() => handleOpenModal(item)}>
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay" onClick={() => handleOpenModal(item)}>
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
                <div className="item-info-kids">
                  <div className="item-name">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price">${item.price}</span>
                    <span className="current-price">${item.discountedPrice}</span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="star-icon" style={{ color: "#F5AD42 ", fontSize: "1.5em" }}>★</span>
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

export default Kids;
