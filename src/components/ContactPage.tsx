import React, { useState } from 'react';
import '../styles/ContactPage.css';

interface ContactPageProps {
  language: string;
}

const translations = {
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
  const t = translations[language as keyof typeof translations] || translations.nl;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // API-call kan hier toegevoegd worden
  };

  return (
    <section className="contact-root">
      <h1>{t.title}</h1>
      {submitted ? (
        <p className="contact-success">{t.success}</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <label>
            {t.name}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <label>
            {t.email}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <label>
            {t.message}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </label>
          <button type="submit">{t.send}</button>
        </form>
      )}
    </section>
  );
};

export default ContactPage;