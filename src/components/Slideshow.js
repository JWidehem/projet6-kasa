import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <>
          <button className="slideshow-button previous" onClick={goToPrevious}>
            &lt;
          </button>
          <button className="slideshow-button next" onClick={goToNext}>
            &gt;
          </button>
          <div className="slideshow-indicator">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
      <img src={pictures[currentIndex]} alt="property" className="slideshow-image" />
    </div>
  );
};

export default Slideshow;
