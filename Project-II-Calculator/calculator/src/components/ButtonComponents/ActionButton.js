import React from 'react';
import './Button.css';

const ActionButton = () => {
  return (
    <div className="action-button">
      <div className="num action">/</div>
      <div className="num action">X</div>
      <div className="num action">+</div>
      <div className="num action">-</div>
      <div className="num action equals">=</div>
    </div>
  )
};

export default ActionButton;
