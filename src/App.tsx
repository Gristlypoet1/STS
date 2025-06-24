import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import PricesPage from './components/PricesPage';
import ContactPage from './components/ContactPage';
import TermsAndConditions from './components/TermsAndConditions';
import './styles/App.css';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('nl');

  return (
    <>
      <header className={menuOpen ? "menu-open" : ""}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/images/sts_logo.avif" alt="STS Logo" className="logo" />
        </Link>
        <nav>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={menuOpen ? "open" : ""}>
            <li><Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link className="nav-link" to="/prices" onClick={() => setMenuOpen(false)}>Prices</Link></li>
            <li><Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <select value={language} onChange={e => setLanguage(e.target.value)} className="language-select">
          <option value="nl">NL</option>
          <option value="fr">FR</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
      </header>

      {/* Alleen container rond Home en Prices */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage language={language} />
          }
        />
        <Route
          path="/prices"
          element={
            <div className="container">
              <PricesPage language={language} />
            </div>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <div className="container">
              <TermsAndConditions language={language} />
            </div>
          }
        />
        {/* Contactpagina zonder container */}
        <Route
          path="/contact"
          element={<ContactPage language={language} />}
        />
      </Routes>

      <footer>
        <p>&copy; 2025 STS Comic. All rights reserved.</p>
        <p><Link className="nav-link" to="/terms-and-conditions">Terms and Conditions</Link></p>
        <p>Follow us on <a href="48:a4:93:ea:57:4c" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p>Powered by <a href="https://www.scriptwave.be" target='_blank'>ScriptWave</a></p>
      </footer>
    </>
  );
};

export default App;