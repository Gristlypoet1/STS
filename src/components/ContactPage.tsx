import React, { useState } from 'react';

interface ContactPageProps {
  language: string;
}

const supportedLanguages = ['nl', 'fr', 'en', 'de'] as const;
type LanguageKey = typeof supportedLanguages[number];

const translations: Record<LanguageKey, {
  title: string;
  name: string;
  email: string;
  message: string;
  send: string;
  success: string;
}> = {
  nl: {
    title: "Contact",
    name: "Naam",
    email: "E-mail",
    message: "Bericht",
    send: "Verstuur",
    success: "Bedankt voor je bericht!",
  },
  fr: {
    title: "Contact",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    send: "Envoyer",
    success: "Merci pour votre message !",
  },
  en: {
    title: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    success: "Thank you for your message!",
  },
  de: {
    title: "Kontakt",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Senden",
    success: "Danke für Ihre Nachricht!",
  },
};

const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const lang: LanguageKey = supportedLanguages.includes(language as LanguageKey)
    ? (language as LanguageKey)
    : 'nl';
  const t = translations[lang];

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Hier kun je eventueel een API-call toevoegen
  };

  return (
    <div className="contact-container">
      <h1>{t.title}</h1>
      {submitted ? (
        <p className="contact-success">{t.success}</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>
              {t.name}:<br />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              {t.email}:<br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              {t.message}:<br />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </label>
          </div>
          <button type="submit">{t.send}</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;