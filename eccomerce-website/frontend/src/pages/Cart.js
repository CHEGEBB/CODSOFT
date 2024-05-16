import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const history = useNavigate();
  const location = useLocation();

  // Function to handle checkout button click
  const handleCheckout = () => {
    history.push('/checkout');
  };

  // Function to handle delete button click for a specific item
  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    if (location.state && location.state.item) {
      const newItem = location.state.item;
      // Check if the new item already exists in the cart
      const isItemInCart = cartItems.some(item => item._id === newItem._id);
      if (!isItemInCart) {
        // If the item is not already in the cart, add it
        const updatedCartItems = [...cartItems, newItem];
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      }
    }
  }, [location.state, cartItems]);

  // Calculate the total number of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-count">{cartItemCount}</div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item._id} className="product-details">
              <div className="product-info">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Category:</strong> {item.category}</p>
              </div>
              <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          ))}
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
