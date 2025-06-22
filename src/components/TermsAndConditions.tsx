import React from 'react';

interface TermsAndConditionsProps {
  language: string;
}

const termsContent: Record<string, { title: string; body: JSX.Element }> = {
  nl: {
    title: 'Algemene voorwaarden',
    body: (
      <>
        <p>Welkom bij STS. Door gebruik te maken van onze diensten ga je akkoord met de volgende voorwaarden:</p>
        <ul>
          <li>Alle prijzen zijn inclusief BTW.</li>
          <li>Op maat gemaakte producten kunnen niet geretourneerd worden.</li>
          <li>Betaling dient te gebeuren voor productie.</li>
          <li>Levertermijnen zijn indicatief.</li>
          <li>Voor vragen, neem contact op via het contactformulier.</li>
        </ul>
      </>
    ),
  },
  fr: {
    title: 'Conditions générales',
    body: (
      <>
        <p>Bienvenue chez STS. En utilisant nos services, vous acceptez les conditions suivantes :</p>
        <ul>
          <li>Tous les prix incluent la TVA.</li>
          <li>Les produits personnalisés ne peuvent pas être retournés.</li>
          <li>Le paiement doit être effectué avant la production.</li>
          <li>Les délais de livraison sont indicatifs.</li>
          <li>Pour toute question, contactez-nous via le formulaire de contact.</li>
        </ul>
      </>
    ),
  },
  en: {
    title: 'Terms and Conditions',
    body: (
      <>
        <p>Welcome to STS. By using our services, you agree to the following terms:</p>
        <ul>
          <li>All prices include VAT.</li>
          <li>Custom-made products cannot be returned.</li>
          <li>Payment is required before production.</li>
          <li>Delivery times are indicative.</li>
          <li>For questions, contact us via the contact form.</li>
        </ul>
      </>
    ),
  },
  de: {
    title: 'Allgemeine Geschäftsbedingungen',
    body: (
      <>
        <p>Willkommen bei STS. Durch die Nutzung unserer Dienste stimmen Sie den folgenden Bedingungen zu:</p>
        <ul>
          <li>Alle Preise verstehen sich inklusive MwSt.</li>
          <li>Maßgeschneiderte Produkte können nicht zurückgegeben werden.</li>
          <li>Die Zahlung ist vor der Produktion erforderlich.</li>
          <li>Lieferzeiten sind unverbindlich.</li>
          <li>Bei Fragen kontaktieren Sie uns bitte über das Kontaktformular.</li>
        </ul>
      </>
    ),
  },
};

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ language }) => {
  const content = termsContent[language] || termsContent['nl'];
  return (
    <div>
      <h1>{content.title}</h1>
      {content.body}
    </div>
  );
};

export default TermsAndConditions;