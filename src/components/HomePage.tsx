import React from 'react';

const HomePage: React.FC<{ language: string }> = ({ language }) => (
  <div>
    {language === 'nl' && <h1>Welkom bij STS</h1>}
    {language === 'fr' && <h1>Bienvenue chez STS</h1>}
    {language === 'en' && <h1>Welcome to STS</h1>}
    {language === 'de' && <h1>Willkommen bei STS</h1>}
    <p>Showcase of our realised custom printed clothes:</p>
    {/* Add your showcase gallery here */}
  </div>
);

export default HomePage;