import React from 'react';
import Collapse from '../components/Collapse';
import './About.scss';

const About = () => (
  <div className="about">
    <div className="banner">
      <img src="/about-banner.jpg" alt="About banner" />
    </div>
    <Collapse label="Fiabilité">
      <p>Contenu de la section Fiabilité...</p>
    </Collapse>
    <Collapse label="Respect">
      <p>Contenu de la section Respect...</p>
    </Collapse>
    <Collapse label="Service">
      <p>Contenu de la section Service...</p>
    </Collapse>
    <Collapse label="Sécurité">
      <p>Contenu de la section Sécurité...</p>
    </Collapse>
  </div>
);

export default About;
