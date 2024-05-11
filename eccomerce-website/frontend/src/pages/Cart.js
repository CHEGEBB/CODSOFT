// frontend/src/pages/Cart.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/cart');
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartItems.map(item => (
          <div key={item._id}>
            <p>Name: {item.name}</p>
            <p>Price: ${item.discountedPrice}</p>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
