import React from 'react';
import './Button.css';

const NumberButton = () => {
  return (
    <div className="number-button">
      <div className="num zero">0</div>
      <div className="num">1</div>
      <div className="num">2</div>
      <div className="num">3</div>
      <div className="num">4</div>
      <div className="num">5</div>
      <div className="num">6</div>
      <div className="num">7</div>
      <div className="num">8</div>
      <div className="num">9</div>
      <div className="num clear">clear</div>
    </div>
  )
};

export default NumberButton;
