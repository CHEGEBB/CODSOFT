import React from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.scss'; // Import your custom styles for Cart

const Cart = () => {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Extract the fetched item from the location state safely
  const fetchedItem = location.state && location.state.item;

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {/* Display the fetched item */}
      {fetchedItem && (
        <div className="product-details">
          <div className="product-info">
            <p><strong>Name:</strong> {fetchedItem.name}</p>
            <p><strong>Price:</strong> ${fetchedItem.price}</p>
            <p><strong>Category:</strong> {fetchedItem.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
