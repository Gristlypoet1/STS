import React from 'react';

interface ContactPageProps {
  language: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ language }) => (
  <div>
    {language === 'nl' && <h1>Contact</h1>}
    {language === 'fr' && <h1>Contact</h1>}
    {language === 'en' && <h1>Contact Us</h1>}
    {language === 'de' && <h1>Kontakt</h1>}
    <p>
      {language === 'nl' && 'Neem contact op voor jouw bedrukte kleding!'}
      {language === 'fr' && 'Contactez-nous pour vos vêtements personnalisés !'}
      {language === 'en' && 'Get in touch for your custom clothing needs!'}
      {language === 'de' && 'Kontaktieren Sie uns für Ihre bedruckte Kleidung!'}
    </p>
    {/* Voeg hier je contactformulier of gegevens toe */}
  </div>
);

export default ContactPage;