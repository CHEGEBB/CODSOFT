import React, { useState, useEffect } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Shoes.scss";
import Modal from "../../components/Modal";

const Shoes = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "UrbanTech Sneakers",
      price: 40,
      discountedPrice: 30,
      rating: 4,
      images: [
        require("../../images/webp/shoes/a1.jpg"),
        require("../../images/webp/shoes/a2.jpg"),
        require("../../images/webp/shoes/a3.jpg"),
        require("../../images/webp/shoes/a4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "StrideFlex Sneakers",
      price: 60,
      discountedPrice: 35,
      rating: 3,
      images: [
        require("../../images/webp/shoes/b4.jpg"),
        require("../../images/webp/shoes/b2.jpg"),
        require("../../images/webp/shoes/b3.jpg"),
        require("../../images/webp/shoes/b4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "UrbanStep Casuals",
      price: 30,
      discountedPrice: 25,
      rating: 5,
      images: [
        require("../../images/webp/shoes/c1.jpg"),
        require("../../images/webp/shoes/c2.jpg"),
        require("../../images/webp/shoes/c3.jpg"),
        require("../../images/webp/shoes/c4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "PowerStep men's shoes",
      price: 80,
      discountedPrice: 75,
      rating: 5,
      images: [
        require("../../images/webp/shoes/d1.jpg"),
        require("../../images/webp/shoes/d2.jpg"),
        require("../../images/webp/shoes/d3.jpg"),
        require("../../images/webp/shoes/d4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "EliteStride Derby Shoes",
      price: 50,
      discountedPrice: 45,
      rating: 3,
      images: [
        require("../../images/webp/shoes/e1.jpg"),
        require("../../images/webp/shoes/e2.jpg"),
        require("../../images/webp/shoes/e3.jpg"),
        require("../../images/webp/shoes/e4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "AeroFlex Casual Sneakers",
      price: 60,
      discountedPrice : 55,
      rating: 4,
      images: [
        require("../../images/webp/shoes/f1.jpg"),
        require("../../images/webp/shoes/f2.jpg"),
        require("../../images/webp/shoes/f3.jpg"),
        require("../../images/webp/shoes/f4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "FashionFlex for men",
      price: 70,
      discountedPrice: 65,
      rating: 5,
      images: [
        require("../../images/webp/shoes/g1.jpg"),
        require("../../images/webp/shoes/g2.jpg"),
        require("../../images/webp/shoes/g3.jpg"),
        require("../../images/webp/shoes/g4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "GlideEase Slip-Ons",
      price: 80,
      discountedPrice: 75,
      rating: 3,
      images: [
        require("../../images/webp/shoes/h1.jpg"),
        require("../../images/webp/shoes/h2.jpg"),
        require("../../images/webp/shoes/h3.jpg"),
        require("../../images/webp/shoes/h4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "UrbanFlex Sneakers",
      price: 60,
      discountedPrice: 55,
      rating: 4,
      images: [
        require("../../images/webp/shoes/i1.jpg"),
        require("../../images/webp/shoes/i2.jpg"),
        require("../../images/webp/shoes/i3.jpg"),
        require("../../images/webp/shoes/i4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "Nike Air force 1",
      price: 100,
      discountedPrice: 95,
      rating: 5,
      images: [
        require("../../images/webp/shoes/j4.jpg"),
        require("../../images/webp/shoes/j2.jpg"),
        require("../../images/webp/shoes/j3.jpg"),
        require("../../images/webp/shoes/j4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "ClassicChic Sneakers",
      price: 70,
      discountedPrice : 65,
      rating: 4,
      images: [
        require("../../images/webp/shoes/k1.jpg"),
        require("../../images/webp/shoes/k2.jpg"),
        require("../../images/webp/shoes/k3.jpg"),
        require("../../images/webp/shoes/k4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "StyleSprint ladies sneakers",
      price: 50,
      discountedPrice: 35,
      rating: 4,
      images: [
        require("../../images/webp/shoes/l1.jpg"),
        require("../../images/webp/shoes/l2.jpg"),
        require("../../images/webp/shoes/l3.jpg"),
        require("../../images/webp/shoes/l4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 13,
      name: "NovaGlam  sneakers",
      price: 60,
      discountedPrice: 55,
      rating: 5,
      images: [
        require("../../images/webp/shoes/m1.jpg"),
        require("../../images/webp/shoes/m2.jpg"),
        require("../../images/webp/shoes/m3.jpg"),
        require("../../images/webp/shoes/m4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 14,
      name: "UrbanStyle ladies Sneakers",
      price: 70,
      discountedPrice: 55,
      rating: 4,
      images: [
        require("../../images/webp/shoes/n1.jpg"),
        require("../../images/webp/shoes/n2.jpg"),
        require("../../images/webp/shoes/n3.jpg"),
        require("../../images/webp/shoes/n4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 15,
      name: "ActiveStride Walking Shoes",
      price: 80,
      discountedPrice: 75,
      rating: 3,
      images: [
        require("../../images/webp/shoes/o1.jpg"),
        require("../../images/webp/shoes/o2.jpg"),
        require("../../images/webp/shoes/o3.jpg"),
        require("../../images/webp/shoes/o4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 16,
      name: "UrbanStyle sneakers ",
      price: 60,
      discountedPrice: 55,
      rating: 4,
      images: [
        require("../../images/webp/shoes/p1.jpg"),
        require("../../images/webp/shoes/p2.jpg"),
        require("../../images/webp/shoes/p3.jpg"),
        require("../../images/webp/shoes/p4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 17,
      name: "Ladies sneakers",
      price: 70,
      discountedPrice: 65,
      rating: 5,
      images: [
        require("../../images/webp/shoes/q1.jpg"),
        require("../../images/webp/shoes/q2.jpg"),
        require("../../images/webp/shoes/q3.jpg"),
        require("../../images/webp/shoes/q4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 18,
      name: "FlashSale Shoe 18",
      price: 180,
      discountedPrice: 175,
      rating: 3,
      images: [
        require("../../images/webp/shoes/r1.jpg"),
        require("../../images/webp/shoes/r2.jpg"),
        require("../../images/webp/shoes/r3.jpg"),
        require("../../images/webp/shoes/r4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 19,
      name: "FlashSale Shoe 19",
      price: 190,
      discountedPrice: 185,
      rating: 4,
      images: [
        require("../../images/webp/shoes/s1.jpg"),
        require("../../images/webp/shoes/s2.jpg"),
        require("../../images/webp/shoes/s3.jpg"),
        require("../../images/webp/shoes/s4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 20,
      name: "FlashSale Shoe 20",
      price: 200,
      discountedPrice: 195,
      rating: 5,
      images: [
        require("../../images/webp/shoes/t1.jpg"),
        require("../../images/webp/shoes/t2.jpg"),
        require("../../images/webp/shoes/t3.jpg"),
        require("../../images/webp/shoes/t4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 21,
      name: "FlashSale Shoe 21",
      price: 210,
      discountedPrice: 205,
      rating: 3,
      images: [
        require("../../images/webp/shoes/u1.jpg"),
        require("../../images/webp/shoes/u2.jpg"),
        require("../../images/webp/shoes/u3.jpg"),
        require("../../images/webp/shoes/u4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 22,
      name: "FlashSale Shoe 22",
      price: 220,
      discountedPrice: 215,
      rating: 4,
      images: [
        require("../../images/webp/shoes/v1.jpg"),
        require("../../images/webp/shoes/v2.jpg"),
        require("../../images/webp/shoes/v3.jpg"),
        require("../../images/webp/shoes/v4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 23,
      name: "FlashSale Shoe 23",
      price: 230,
      discountedPrice: 225,
      rating: 5,
      images: [
        require("../../images/webp/shoes/w1.jpg"),
        require("../../images/webp/shoes/w2.jpg"),
        require("../../images/webp/shoes/w3.jpg"),
        require("../../images/webp/shoes/w4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 24,
      name: "FlashSale Shoe 24",
      price: 240,
      discountedPrice: 235,
      rating: 3,
      images: [
        require("../../images/webp/shoes/x1.jpg"),
        require("../../images/webp/shoes/x2.jpg"),
        require("../../images/webp/shoes/x3.jpg"),
        require("../../images/webp/shoes/x4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 25,
      name: "FlashSale Shoe 25",
      price: 250,
      discountedPrice: 245,
      rating: 4,
      images: [
        require("../../images/webp/shoes/y1.jpg"),
        require("../../images/webp/shoes/y2.jpg"),
        require("../../images/webp/shoes/y3.jpg"),
        require("../../images/webp/shoes/y4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 26,
      name: "FlashSale Shoe 26",
      price: 260,
      discountedPrice: 255,
      rating: 5,
      images: [
        require("../../images/webp/shoes/z1.jpg"),
        require("../../images/webp/shoes/z2.jpg"),
        require("../../images/webp/shoes/z3.jpg"),
        require("../../images/webp/shoes/z4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 27,
      name: "FlashSale Shoe 27",
      price: 270,
      discountedPrice: 265,
      rating: 3,
      images: [
        require("../../images/webp/shoes/a11.jpg"),
        require("../../images/webp/shoes/a22.jpg"),
        require("../../images/webp/shoes/a33.jpg"),
        require("../../images/webp/shoes/a44.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 28,
      name: "FlashSale Shoe 28",
      price: 280,
      discountedPrice: 275,
      rating: 4,
      images: [
        require("../../images/webp/shoes/b11.jpg"),
        require("../../images/webp/shoes/b22.jpg"),
        require("../../images/webp/shoes/b33.jpg"),
        require("../../images/webp/shoes/b44.jpg"),
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
    <div className="shoes-page"> 
      <h1>Shoes Flash Sale</h1>
      <div className="shoes-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="shoes-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`shoes-item-container ${item.id >= 10 && item.id <= 15 ? "special-card" : ""}`}
                key={item.id}
              >
                <div className="item-image" onClick={() => handleOpenModal(item)}>
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay" onClick={() => handleOpenModal(item)}>
                    <div className="item-discount-shoes">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn" onClick={() => handleOpenModal(item)}>
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price-shoes">
                      {item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info-shoes">
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

export default Shoes;
