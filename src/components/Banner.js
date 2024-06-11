import React from 'react';
import './Banner.scss';

const Banner = ({ image, text }) => (
  <div className="banner" style={{ backgroundImage: `url(${image})` }}>
    <h1>{text}</h1>
  </div>
);

export default Banner;
