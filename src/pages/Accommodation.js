import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import accommodations from '../data/accommodations.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import './Accommodation.scss';

const Accommodation = () => {
  const { id } = useParams();
  const accommodation = accommodations.find((acc) => acc.id === id);

  if (!accommodation) {
    return <Navigate to="/404" replace />;
  }

  const rating = 4; // Assurer que seulement 4 étoiles sont pleines

  return (
    <div className="accommodation">
      <Slideshow pictures={accommodation.pictures} />
      <div className="accommodation-details">
        <div className="accommodation-info">
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          <div className="tags">
            {accommodation.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="host-info-container">
          <div className="host-info">
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={index < rating ? 'filled' : 'empty'}>★</span>
              ))}
            </div>
            <div className="host">
              <p>{accommodation.host.name}</p>
              <img src={accommodation.host.picture} alt={accommodation.host.name} className="host-picture" />
            </div>
          </div>
        </div>
      </div>
      <div className="collapse-section">
        <Collapse label="Description">{accommodation.description}</Collapse>
        <Collapse label="Équipements">
          <ul>
            {accommodation.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Accommodation;
