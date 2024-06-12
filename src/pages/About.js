import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import './About.scss';

const About = () => (
  <div className="about">
    <Banner image="/about-banner.jpg" showText={false} />
    <div className="content">
      <Collapse label="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </Collapse>
      <Collapse label="Respect">
        <p>Chez Kasa, le respect est une valeur primordiale. Nous nous assurons que chaque location respecte la vie privée de nos clients, ainsi que les réglementations locales et internationales en vigueur.</p>
      </Collapse>
      <Collapse label="Service">
        <p>Notre service clientèle est disponible 24/7 pour répondre à toutes vos questions et préoccupations. Nous nous engageons à fournir une assistance rapide et efficace pour garantir une expérience utilisateur optimale.</p>
      </Collapse>
      <Collapse label="Sécurité">
        <p>La sécurité de nos utilisateurs est notre priorité. Tous nos logements sont inspectés régulièrement pour assurer des conditions de séjour sûres et confortables. Nous fournissons également des recommandations pour un séjour en toute tranquillité.</p>
      </Collapse>
    </div>
  </div>
);

export default About;
