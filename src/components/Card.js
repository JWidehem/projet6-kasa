import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, cover, title }) => (
  <div className="card">
    <img src={cover} alt={title} />
    <div className="title">{title}</div>
    <Link to={`/accommodation/${id}`}>Voir les détails</Link>
  </div>
);

export default Card;
