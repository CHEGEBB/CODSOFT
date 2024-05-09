import React from 'react';
import './Custom.scss';
import { useNavigate } from 'react-router-dom';

const CustomAlert = ({ message, onClose }) => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleViewCart = () => {
    // Navigate to the Cart page
    navigate('/cart');
    onClose(); // Close the alert after viewing the cart
  };

  return (
    <div className="custom-alert">
      <span>{message}</span>
      <div className="buttons-container">
        <button className="close-btn" onClick={onClose}>Close</button>
        <button className="view-cart-btn" onClick={handleViewCart}>View Cart</button>
      </div>
    </div>
  );
};

export default CustomAlert;
