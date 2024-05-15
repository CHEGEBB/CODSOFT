import React from 'react';
import { useLocation } from 'react-router-dom';

// Importing a sample image for reference
import image from '../images/webp/men/k1.jpg';

const Cart = () => {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Extract the fetched item from the location state safely
  const fetchedItem = location.state && location.state.item;

  console.log(fetchedItem);

  // Define a function to extract the desired part of the image URL
  const getImageUrl = (imageUrl, category) => {
    // Extract the filename from the image URL
    const filename = imageUrl.split('/').pop();
    // Extract the desired part (e.g., 'm1') from the filename
    const desiredPart = filename.split('.')[0];
    // Construct the new image URL based on the category and the desired part
    return `../images/webp/${category}/${desiredPart}.jpg`;
  };

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
          {/* Display only one image */}
          <img src={getImageUrl(fetchedItem.images[0], fetchedItem.category)} alt={fetchedItem.name} />
        </div>
      )}
    </div>
  );
};

export default Cart;
