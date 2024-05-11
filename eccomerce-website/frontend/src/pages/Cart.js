import React, { useState, useEffect } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => {
        setCartItems(data);
        calculateTotalPrice(data);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.discountedPrice;
    });
    setTotalPrice(total);
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    // Redirect user to the checkout page or perform other actions
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-price">${item.discountedPrice}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total: ${totalPrice}</p>
        <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
