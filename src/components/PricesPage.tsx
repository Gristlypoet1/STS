import React from 'react';

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
    <div>
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
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 24 }}>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} style={{ border: '1px solid #ccc', padding: 8, background: '#f5f5f5' }}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{row.product}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{row.front}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{row.back}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{row.both}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricesPage;