import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = ({ location }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Check if item data is passed from Men.js
    if (location.state && location.state.item) {
      // If item data is passed, add it to cartItems state
      setCartItems([location.state.item]);
    } else {
      // If no item data is passed, fetch cart items from the backend
      fetchCartItems();
    }
  }, [location.state]);

  const fetchCartItems = async () => {
    try {
      // Fetch cart items from the backend
      const { data } = await axios.get('http://localhost:3000/cart/cart-items');
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartItems.map(item => (
          <div key={item._id}>
            <p>Name: {item.name}</p>
            <p>Price: ${item.discountedPrice}</p>
            {/* Add other item details */}
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
