import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.scss'; // Import your custom styles for Cart

const Cart = () => {
  // Use the useLocation hook to get the current location
  const location = useLocation();
  const history = useNavigate();

  // Initialize state to store the fetched item
  const [cartItem, setCartItem] = useState(location.state && location.state.item);

  // Function to handle checkout button click
  const handleCheckout = () => {
    // Navigate to the checkout page
    history.push('/checkout');
  };

  // Function to handle delete button click
  const handleDelete = () => {
    // Clear the cart item
    setCartItem(null);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {/* Display the fetched item */}
      {cartItem && (
        <div className="product-details">
          <div className="product-info">
            <p><strong>Name:</strong> {cartItem.name}</p>
            <p><strong>Price:</strong> ${cartItem.price}</p>
            <p><strong>Category:</strong> {cartItem.category}</p>
          </div>
          {/* Delete button */}
          <button className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
      )}
      {/* Checkout button */}
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
