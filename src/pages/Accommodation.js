import React from 'react';
import { useParams } from 'react-router-dom';
import accommodations from '../data/accommodations.json';

const Accommodation = () => {
  const { id } = useParams();
  const accommodation = accommodations.find(acc => acc.id === id);

  return (
    <div>
      <h1>{accommodation.title}</h1>
      <img src={accommodation.cover} alt={accommodation.title} />
      <p>{accommodation.description}</p>
      <h3>Equipements :</h3>
      <ul>
        {accommodation.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Accommodation;
