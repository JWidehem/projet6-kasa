import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggleCollapse}>
        {label}
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
