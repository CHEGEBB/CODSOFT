import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Women.scss";
import Modal from "../../components/Modal";

const Women = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Stylish all-pink outfit",
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
      name: "Elegant Essence Dress",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/b1.avif"),
        require("../../images/webp/women/b2.jpg"),
        require("../../images/webp/women/b3.jpg"),
        require("../../images/webp/women/b4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "Urban Chic Bodycon Dress",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/c1.jpg"),
        require("../../images/webp/women/c2.jpg"),
        require("../../images/webp/women/c3.jpg"),
        require("../../images/webp/women/c4.jpg")


      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "Sleek turtle-neck and trousers",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/d1.jpg"),
        require("../../images/webp/women/d2.jpg"),
        require("../../images/webp/women/d3.jpg"),
        require("../../images/webp/women/d4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "Executive lady suit",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/e1.jpg"),
        require("../../images/webp/women/e2.jpg"),
        require("../../images/webp/women/e3.jpg"),
        require("../../images/webp/women/e4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "Graceful Garnet Dress",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/f1.jpg"),
        require("../../images/webp/women/f2.jpg"),
        require("../../images/webp/women/f3.jpg"),
        require("../../images/webp/women/f4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },

    {
      id: 7,
      name: "Urban Chic stylish dress",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/g1.jpg"),
        require("../../images/webp/women/g2.jpg"),
        require("../../images/webp/women/g3.jpg"),
        require("../../images/webp/women/g4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "stylish women smart casual",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/h1.jpg"),
        require("../../images/webp/women/h2.jpg"),
        require("../../images/webp/women/h3.jpg"),
        require("../../images/webp/women/h4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "Full work-out attire",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/i1.jpg"),
        require("../../images/webp/women/i2.jpg"),
        require("../../images/webp/women/i3.jpg"),
        require("../../images/webp/women/i4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "Stylish women jeans and top",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/j1.jpg"),
        require("../../images/webp/women/j2.jpg"),
        require("../../images/webp/women/j3.avif"),
        require("../../images/webp/women/j4.jpg")
        
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "urban chic stylish attire",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/k1.jpg"),
        require("../../images/webp/women/k2.jpg"),
        require("../../images/webp/women/k3.jpg"),
        require("../../images/webp/women/k4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "Chic Charm dress",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/l1.jpg"),
        require("../../images/webp/women/l2.jpg"),
        require("../../images/webp/women/l3.jpg"),
        require("../../images/webp/women/l4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 13,
      name: "Modern stylish crop top and trouser",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/m1.jpg"),
        require("../../images/webp/women/m2.jpg"),
        require("../../images/webp/women/m3.jpg"),
        require("../../images/webp/women/m4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 14,
      name: "Stylish jeans and top",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/n1.jpg"),
        require("../../images/webp/women/n2.jpg"),
        require("../../images/webp/women/n3.avif"),
        require("../../images/webp/women/n4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 15,
      name: "Gentle Glow women attire",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/o1.jpg"),
        require("../../images/webp/women/o2.jpg"),
        require("../../images/webp/women/o3.avif"),
        require("../../images/webp/women/o4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 16,
      name: "Modern Muse Hoodie",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/p1.jpg"),
        require("../../images/webp/women/p2.jpg"),
        require("../../images/webp/women/p3.jpg"),
        require("../../images/webp/women/p4.jpg")
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
        require("../../images/webp/women/q1.jpg"),
        require("../../images/webp/women/q2.jpg"),
        require("../../images/webp/women/q3.jpg"),
        require("../../images/webp/women/q4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 18,
      name: "Cozy Chic Hoodie",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/r1.jpg"),
        require("../../images/webp/women/r2.jpg"),
        require("../../images/webp/women/r3.jpg"),
        require("../../images/webp/women/r4.jpg")
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
        require("../../images/webp/women/s1.jpg"),
        require("../../images/webp/women/s2.jpg"),
        require("../../images/webp/women/s3.jpg"),
        require("../../images/webp/women/s4.jpg")
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
        require("../../images/webp/women/t1.jpg"),
        require("../../images/webp/women/t2.jpg"),
        require("../../images/webp/women/t3.jpg"),
        require("../../images/webp/women/t4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 21,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/v1.jpg"),
        require("../../images/webp/women/v2.jpg"),
        require("../../images/webp/women/v3.jpg"),
        require("../../images/webp/women/v4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 22,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/w1.jpg"),
        require("../../images/webp/women/w2.jpg"),
        require("../../images/webp/women/w3.jpg"),
        require("../../images/webp/women/w4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 23,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/y1.jpg"),
        require("../../images/webp/women/y2.jpg"),
        require("../../images/webp/women/y3.jpg"),
        require("../../images/webp/women/y4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 24,
      name: "Women Item 1",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/women/x1.jpg"),
        require("../../images/webp/women/x2.jpg"),
        require("../../images/webp/women/x3.jpg"),
        require("../../images/webp/women/x4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    

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
                <div className="item-image" onClick={() => handleOpenModal(item)}>
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
                  <div className="item-overlay" onClick={() => handleOpenModal(item)}>
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
                    <button className="add-to-cart-btn" onClick={() => handleOpenModal(item)}>
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
                <div className="item-info-women">
                  <div className="item-name-women">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price-women">${item.price}</span>
                    <span className="current-price-women">
                      ${item.discountedPrice}
                    </span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span
                        key={index}
                        className="star-icon"
                        style={{ color: "#FF6F61", fontSize: "1.5em" }}
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

export default Women;
