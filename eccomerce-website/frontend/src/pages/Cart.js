import React from 'react';
import { useLocation } from 'react-router-dom';
import image from '../images/webp/men/k1.jpg';

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
          <p>Category: {fetchedItem.category}</p>
          <img src ={image} alt="image"/>
          {/* Construct the relative image URL */}
          <img src={`../images/${fetchedItem.images[fetchedItem.currentImageIndex]}`} alt={fetchedItem.name} />
        </div>
      )}
    </div>
  );
};

export default Cart;
