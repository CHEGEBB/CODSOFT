// Cart.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Cart = (props) => {
  // Extract the fetched item from props safely
  const fetchedItem = props.location && props.location.state && props.location.state.item;

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
