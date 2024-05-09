import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, handleClose, product, selectedImageIndex, handleNextImage, handlePrevImage }) => {
    if (!isOpen || !product) return null;

    const { title, desc, images } = product;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>
                    &times;
                </span>
                <div className="modal-body">
                    <div className="product-images">
                        <img src={images[selectedImageIndex]} alt={title} />
                        <button className="arrow prev" onClick={handlePrevImage}>
                            &#8249;
                        </button>
                        <button className="arrow next" onClick={handleNextImage}>
                            &#8250;
                        </button>
                    </div>
                    <div className="product-info">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        {/* Add more product details, size options, color options, etc. */}
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
