import React from 'react';

const HomePage: React.FC<{ language: string }> = ({ language }) => (
  <div className="home-container">
    {language === 'nl' && <h1>Welkom bij STS</h1>}
    {language === 'fr' && <h1>Bienvenue chez STS</h1>}
    {language === 'en' && <h1>Welcome to STS</h1>}
    {language === 'de' && <h1>Willkommen bei STS</h1>}

    <section className="hero-section">
      <p>
        {language === 'nl' && "Dé specialist in gepersonaliseerde kleding en textielbedrukking."}
        {language === 'fr' && "Le spécialiste des vêtements personnalisés et de l'impression textile."}
        {language === 'en' && "The specialist in personalized clothing and textile printing."}
        {language === 'de' && "Der Spezialist für personalisierte Kleidung und Textildruck."}
      </p>
    </section>

    <section className="features-section">
      <h2>
        {language === 'nl' && "Waarom kiezen voor STS?"}
        {language === 'fr' && "Pourquoi choisir STS ?"}
        {language === 'en' && "Why choose STS?"}
        {language === 'de' && "Warum STS wählen?"}
      </h2>
      <ul>
        <li>
          {language === 'nl' && "Snelle levering en topkwaliteit"}
          {language === 'fr' && "Livraison rapide et qualité supérieure"}
          {language === 'en' && "Fast delivery and top quality"}
          {language === 'de' && "Schnelle Lieferung und Top-Qualität"}
        </li>
        <li>
          {language === 'nl' && "Persoonlijke service en advies"}
          {language === 'fr' && "Service et conseils personnalisés"}
          {language === 'en' && "Personal service and advice"}
          {language === 'de' && "Persönlicher Service und Beratung"}
        </li>
        <li>
          {language === 'nl' && "Voor bedrijven, verenigingen en particulieren"}
          {language === 'fr' && "Pour entreprises, associations et particuliers"}
          {language === 'en' && "For businesses, clubs and individuals"}
          {language === 'de' && "Für Unternehmen, Vereine und Privatpersonen"}
        </li>
      </ul>
    </section>

    <section className="gallery-section">
      <h2>
        {language === 'nl' && "Voorbeeld van onze realisaties"}
        {language === 'fr' && "Exemple de nos réalisations"}
        {language === 'en' && "Showcase of our work"}
        {language === 'de' && "Beispiele unserer Arbeiten"}
      </h2>
      <div className="gallery-placeholder">
        <div className="gallery-item">[Foto 1]</div>
        <div className="gallery-item">[Foto 2]</div>
        <div className="gallery-item">[Foto 3]</div>
      </div>
    </section>

    <section className="about-section">
      <h2>
        {language === 'nl' && "Over STS"}
        {language === 'fr' && "À propos de STS"}
        {language === 'en' && "About STS"}
        {language === 'de' && "Über STS"}
      </h2>
      <p>
        {language === 'nl' && "STS is al jaren actief in de textielsector en staat bekend om zijn kwaliteit en klantgerichtheid. Wij helpen je graag met al je vragen over gepersonaliseerde kleding, bedrukkingen en meer."}
        {language === 'fr' && "STS est actif depuis des années dans le secteur du textile et est reconnu pour sa qualité et son orientation client. Nous sommes heureux de vous aider avec toutes vos questions concernant les vêtements personnalisés, les impressions et plus encore."}
        {language === 'en' && "STS has been active in the textile sector for years and is known for its quality and customer focus. We are happy to help you with all your questions about personalized clothing, printing, and more."}
        {language === 'de' && "STS ist seit Jahren in der Textilbranche tätig und bekannt für Qualität und Kundenorientierung. Wir helfen Ihnen gerne bei allen Fragen zu personalisierter Kleidung, Druck und mehr."}
      </p>
    </section>

    <section className="cta-section">
      <button className="cta-btn">
        {language === 'nl' && "Vraag vrijblijvend een offerte aan"}
        {language === 'fr' && "Demandez un devis sans engagement"}
        {language === 'en' && "Request a free quote"}
        {language === 'de' && "Fordern Sie ein unverbindliches Angebot an"}
      </button>
    </section>

    <section className="partners-section">
      <h2>
        {language === 'nl' && "Onze partners"}
        {language === 'fr' && "Nos partenaires"}
        {language === 'en' && "Our partners"}
        {language === 'de' && "Unsere Partner"}
      </h2>
      <div className="partners-placeholder">
        <div className="partner-logo">[Logo 1]</div>
        <div className="partner-logo">[Logo 2]</div>
        <div className="partner-logo">[Logo 3]</div>
      </div>
    </section>
  </div>
);

export default HomePage;