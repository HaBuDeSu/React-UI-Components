import React from 'react';
import './Button.css';

const ActionButton = () => {
  return (
    <div className="action-button">
      <button className="num action">/</button>
      <button className="num action">X</button>
      <button className="num action">+</button>
      <button className="num action">-</button>
      <button className="num action equals">=</button>
    </div>
  )
};

export default ActionButton;
