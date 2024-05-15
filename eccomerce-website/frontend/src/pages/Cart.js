import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
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
    // Update local storage after deleting item
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Add the fetched item to the cartItems array
  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    // Add the new item to cart if present in location state
    if (location.state && location.state.item) {
      setCartItems(prevCartItems => [...prevCartItems, location.state.item]);
    }
  }, [location.state]);

  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
