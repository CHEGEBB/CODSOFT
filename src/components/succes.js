// SuccessMessage.js
import React from "react";
import "./SuccessMessage.scss";

const SuccessMessage = ({ productName, onClose }) => {
  return (
    <div className="success-message">
      <div className="message">
        <p>{productName} added to cart successfully!</p>
        <div className="actions">
          <button onClick={onClose}>Continue Shopping</button>
          <button onClick={() => alert("View Cart")}>View Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
