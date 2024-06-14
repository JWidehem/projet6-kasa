import React, { useState, useRef, useEffect } from 'react';
import './Collapse.scss';

const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggleCollapse}>
        {label}
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div ref={contentRef} className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
