import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <p className="header-title-name">LambdaSchool</p>
      <p className="header-title-handle">@LambdaSchool</p>
      <ul className="header-title-date">
        <li>26 jan</li>
      </ul>
    </div>
  )
};

export default HeaderTitle;
