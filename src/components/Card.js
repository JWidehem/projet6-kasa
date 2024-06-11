import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/accommodation/${id}`} className="card">
      <div className="card-content">
        <img src={cover} alt={title} />
        <div className="card-title">{title}</div>
      </div>
    </Link>
  );
};

export default Card;
