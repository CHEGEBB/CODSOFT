import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // Fetch the cart items from the backend after adding an item to the cart
        const { data } = await axios.post('http://localhost:3000/add-to-cart', {/* send any required data */});
        setCartItems(data); // Assuming the data returned by the backend is an array of cart items
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    // Call the fetchCartItems function when the component mounts
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
