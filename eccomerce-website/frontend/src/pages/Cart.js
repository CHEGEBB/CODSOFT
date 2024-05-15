// Cart.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Extract the fetched item from the location state safely
  const fetchedItem = location.state && location.state.item;

  console.log(fetchedItem);

  return (
    <div>
      <h1>Cart</h1>
      {/* Display the fetched item */}
      {fetchedItem && (
        <div>
          <h2>Selected Item</h2>
          <p>Name: {fetchedItem.name}</p>
          <p>Price: ${fetchedItem.price}</p>
          {/* Add more details if needed */}
        </div>
      )}
    </div>
  );
};

export default Cart;
