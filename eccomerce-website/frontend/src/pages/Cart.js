import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.scss'; // Import your custom styles for Cart

const Cart = () => {
  // Initialize state to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Use the useLocation hook to get the current location
  const location = useLocation();
  const history = useNavigate();

  // Function to handle checkout button click
  const handleCheckout = () => {
    // Navigate to the checkout page
    history.push('/checkout');
  };

  // Function to handle delete button click for a specific item
  const handleDelete = (itemId) => {
    // Filter out the item with the specified ID from the cartItems array
    const updatedCartItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Add the fetched item to the cartItems array
  const addToCart = () => {
    if (location.state && location.state.item) {
      setCartItems([...cartItems, location.state.item]);
    }
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {/* Display the fetched items */}
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item._id} className="product-details">
              <div className="product-info">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Category:</strong> {item.category}</p>
              </div>
              {/* Delete button */}
              <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          ))}
          {/* Checkout button */}
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <p>Click the button below to see your items.</p>
      )}
      {/* Add to cart button */}
      <button className="add-to-cart-button" onClick={addToCart}>View Items</button>
    </div>
  );
};

export default Cart;
