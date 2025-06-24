import React from 'react';
import '../styles/PricesPage.css';

interface PricesPageProps {
  language: string;
}

const tableHeaders: Record<string, string[]> = {
  nl: ['Product', 'Alleen vooraan', 'Alleen achteraan', 'Voor- en achteraan'],
  fr: ['Produit', 'Devant seulement', 'Dos seulement', 'Devant et dos'],
  en: ['Product', 'Front only', 'Back only', 'Front & Back'],
  de: ['Produkt', 'Nur vorne', 'Nur hinten', 'Vorne & hinten'],
};

const tableRows: Record<string, { product: string; front: string; back: string; both: string }[]> = {
  nl: [
    { product: 'T-shirt', front: '€12', back: '€12', both: '€20' },
    { product: 'Pullover', front: '€18', back: '€18', both: '€30' },
  ],
  fr: [
    { product: 'T-shirt', front: '12€', back: '12€', both: '20€' },
    { product: 'Pull', front: '18€', back: '18€', both: '30€' },
  ],
  en: [
    { product: 'T-shirt', front: '€12', back: '€12', both: '€20' },
    { product: 'Sweater', front: '€18', back: '€18', both: '€30' },
  ],
  de: [
    { product: 'T-Shirt', front: '12€', back: '12€', both: '20€' },
    { product: 'Pullover', front: '18€', back: '18€', both: '30€' },
  ],
};

const PricesPage: React.FC<PricesPageProps> = ({ language }) => {
  const headers = tableHeaders[language] || tableHeaders['nl'];
  const rows = tableRows[language] || tableRows['nl'];

  return (
    <div className="container container--plain">
      {language === 'nl' && <h1>Prijzen</h1>}
      {language === 'fr' && <h1>Prix</h1>}
      {language === 'en' && <h1>Prices</h1>}
      {language === 'de' && <h1>Preise</h1>}
      <p>
        {language === 'nl' && 'Hier vind je onze prijzen voor op maat gemaakte kleding.'}
        {language === 'fr' && 'Ici, vous pouvez trouver nos prix pour les vêtements personnalisés.'}
        {language === 'en' && 'Here you can find our pricing for custom printed clothes.'}
        {language === 'de' && 'Hier finden Sie unsere Preise für maßgeschneiderte Kleidung.'}
      </p>
      <table className="prices-table">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td data-label={headers[0]}>{row.product}</td>
              <td data-label={headers[1]}>{row.front}</td>
              <td data-label={headers[2]}>{row.back}</td>
              <td data-label={headers[3]}>{row.both}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="prices-note">
        {language === 'nl' && "Alle prijzen zijn incl. btw en onder voorbehoud van typefouten."}
        {language === 'fr' && "Tous les prix incluent la TVA et sont sous réserve d'erreurs typographiques."}
        {language === 'en' && "All prices include VAT and are subject to typographical errors."}
        {language === 'de' && "Alle Preise inkl. MwSt. und vorbehaltlich Tippfehlern."}
      </div>
    </div>
  );
};

export default PricesPage;