import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import PricesPage from './components/PricesPage';
import ContactPage from './components/ContactPage';
import './styles/App.css';
import TermsAndConditions from './components/TermsAndConditions';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('nl');

  return (
    <>
      <header className={menuOpen ? "menu-open" : ""}>
        <img src="/images/sts_logo.avif" alt="STS Logo" className="logo" />
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

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/prices" element={<PricesPage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions language={language} />} />
        </Routes>
      </div>

      <footer>
        <p>&copy; 2025 STS Comic. All rights reserved.</p>
        <p><Link className="nav-link" to="/terms-and-conditions">Terms and Conditions</Link></p>
        <p>Follow us on <a href="https://www.instagram.com/sts_comic" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p>Powered by <a href="https://www.scriptwave.be" target='_blank'>ScriptWave</a></p>
      </footer>
    </>
  );
};

export default App;