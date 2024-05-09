import React from 'react';
import './Custom.scss';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <span>{message}</span>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CustomAlert;
