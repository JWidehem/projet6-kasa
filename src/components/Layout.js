import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Kasa Logo" />
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        {" | "}
        <Link to="/about">À propos</Link>
      </nav>
    </header>
    <main className="main-content">
      {children}
    </main>
    <footer className="footer">
      <p>© 2024 Kasa. Tous droits réservés.</p>
    </footer>
  </div>
);

export default Layout;
