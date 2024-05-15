import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the server when the component mounts
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      // Fetch cart items from the server
      const { data } = await axios.get('http://localhost:3000/cart/cart-items');
      // Update the cartItems state with the fetched data
      setCartItems(data);
    } catch (error) {
      // Handle errors if any
      console.error('Error fetching cart items:', error);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {/* Map over the cartItems state and render each item */}
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
