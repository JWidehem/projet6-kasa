import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        {" | "}
        <Link to="/about">À propos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
