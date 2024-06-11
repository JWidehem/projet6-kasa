import React from 'react';
import { Link } from 'react-router-dom';
import accommodations from '../data/accommodations.json';

const Home = () => (
  <div>
    <h1>Page d'accueil</h1>
    <div>
      {accommodations.map(accommodation => (
        <div key={accommodation.id}>
          <h2>{accommodation.title}</h2>
          <img src={accommodation.cover} alt={accommodation.title} width="200" />
          <Link to={`/accommodation/${accommodation.id}`}>Voir les détails</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
