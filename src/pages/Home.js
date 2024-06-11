import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import accommodations from '../data/accommodations.json';
import './Home.scss';

const Home = () => (
  <div className="home">
    <Banner image="/banner.jpg" text="Chez vous, partout et ailleurs" />
    <div className="accommodations">
      {accommodations.map(accommodation => (
        <Card key={accommodation.id} id={accommodation.id} cover={accommodation.cover} title={accommodation.title} />
      ))}
    </div>
  </div>
);

export default Home;
