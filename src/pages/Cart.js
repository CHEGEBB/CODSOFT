import React from 'react';
import './Cart.scss'; // Import your cart page styles here

const Cart = ({ cartItems }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.discountedPrice, 0);

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
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
