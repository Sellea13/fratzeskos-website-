'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDown,
  Fish,
  Mail,
  MapPin,
  Phone,
  UtensilsCrossed,
  Waves,
  Wine,
} from 'lucide-react';

type Language = 'el' | 'en';

const copy = {
  el: {
    nav: { story: 'Η ιστορία μας', flavors: 'Οι γεύσεις', contact: 'Επικοινωνία' },
    eyebrow: 'Νέα Χώρα · Χανιά · Κρήτη',
    title: 'Δίπλα στη θάλασσα, όπως παλιά.',
    intro:
      'Τσίπουρο, μεζέδες και φρέσκο ψάρι σε ένα απλό τραπέζι πάνω στο κύμα.',
    reserve: 'Κράτηση τραπεζιού',
    discover: 'Ανακαλύψτε μας',
    storyKicker: 'Το τραπέζι μας',
    storyTitle: 'Κρητική φιλοξενία με θέα το απέραντο γαλάζιο.',
    storyBody:
      'Στη Νέα Χώρα των Χανίων, λίγα βήματα από την άμμο, σας περιμένουμε για όσα αγαπάμε κι εμείς: καθαρές γεύσεις, καλό τσίπουρο και παρέες που μένουν στο τραπέζι μέχρι να δύσει ο ήλιος.',
    flavorsKicker: 'Απλά και νόστιμα',
    flavorsTitle: 'Γεύσεις της θάλασσας και της Κρήτης',
    items: [
      { title: 'Φρέσκο ψάρι', text: 'Από το Αιγαίο στο πιάτο, ψημένο απλά.' },
      { title: 'Μεζέδες στη μέση', text: 'Μικρά πιάτα για μοίρασμα και καλή παρέα.' },
      { title: 'Τσίπουρο & ρακή', text: 'Ένα ποτήρι στην υγειά της στιγμής.' },
    ],
    placeKicker: 'Θα μας βρείτε',
    placeTitle: 'Στη Νέα Χώρα, πάνω στη θάλασσα',
    placeBody: 'Νέα Χώρα, Χανιά, Κρήτη',
    mapNote: 'Η ακριβής τοποθεσία θα προστεθεί σύντομα.',
    contactKicker: 'Κρατήσεις',
    contactTitle: 'Ελάτε να μοιραστούμε το τραπέζι.',
    contactBody:
      'Σύντομα θα μπορείτε να μας καλέσετε ή να μας στείλετε email για την κράτησή σας.',
    phone: 'Τηλέφωνο σύντομα',
    email: 'Email σύντομα',
    footer: 'Νέα Χώρα · Χανιά · Κρήτη',
  },
  en: {
    nav: { story: 'Our story', flavors: 'Flavours', contact: 'Contact' },
    eyebrow: 'Nea Chora · Chania · Crete',
    title: 'By the sea, just as it used to be.',
    intro:
      'Tsipouro, meze and fresh fish at a simple table right by the water.',
    reserve: 'Book a table',
    discover: 'Discover our place',
    storyKicker: 'Our table',
    storyTitle: 'Cretan hospitality overlooking the endless blue.',
    storyBody:
      'In Nea Chora, Chania, just a few steps from the sand, we welcome you to everything we love: honest flavours, good tsipouro and company that stays around the table until sunset.',
    flavorsKicker: 'Simple and delicious',
    flavorsTitle: 'Flavours of the sea and Crete',
    items: [
      { title: 'Fresh fish', text: 'From the Aegean to your plate, simply grilled.' },
      { title: 'Meze to share', text: 'Small plates made for the middle of the table.' },
      { title: 'Tsipouro & raki', text: 'A glass raised to the moment.' },
    ],
    placeKicker: 'Find us',
    placeTitle: 'In Nea Chora, right by the sea',
    placeBody: 'Nea Chora, Chania, Crete',
    mapNote: 'The exact location will be added soon.',
    contactKicker: 'Reservations',
    contactTitle: 'Come share our table.',
    contactBody:
      'Soon you will be able to call or email us to reserve your table.',
    phone: 'Phone coming soon',
    email: 'Email coming soon',
    footer: 'Nea Chora · Chania · Crete',
  },
};

const itemIcons = [Fish, UtensilsCrossed, Wine];

export default function Home() {
  const [language, setLanguage] = useState<Language>('el');
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" />
        <header className="site-header shell">
          <a className="brand" href="#top" aria-label="Νέα Χώρα – αρχική">
            <Waves aria-hidden="true" />
            <span>
              <strong>Νέα Χώρα</strong>
              <small>Τσιπουράδικο · Ταβέρνα</small>
            </span>
          </a>

          <nav aria-label={language === 'el' ? 'Κύρια πλοήγηση' : 'Main navigation'}>
            <a href="#story">{t.nav.story}</a>
            <a href="#flavors">{t.nav.flavors}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="language-switch" aria-label="Language selection">
            <button
              type="button"
              className={language === 'el' ? 'active' : ''}
              aria-pressed={language === 'el'}
              onClick={() => setLanguage('el')}
            >
              ΕΛ
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              aria-pressed={language === 'en'}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </header>

        <div id="top" className="hero-content shell">
          <p className="eyebrow light">{t.eyebrow}</p>
          <h1 id="hero-title">{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#contact">
              {t.reserve}
            </a>
            <a className="text-link" href="#story">
              {t.discover}
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="story" className="story section shell">
        <div className="story-mark" aria-hidden="true">
          <Waves />
        </div>
        <div>
          <p className="eyebrow">{t.storyKicker}</p>
          <h2>{t.storyTitle}</h2>
          <p className="lead">{t.storyBody}</p>
        </div>
      </section>

      <section id="flavors" className="flavors section">
        <div className="shell">
          <p className="eyebrow">{t.flavorsKicker}</p>
          <h2>{t.flavorsTitle}</h2>
          <div className="flavor-grid">
            {t.items.map((item, index) => {
              const Icon = itemIcons[index];
              return (
                <article key={item.title}>
                  <span className="icon-wrap">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="place section shell">
        <div className="place-card">
          <MapPin aria-hidden="true" />
          <div>
            <p className="eyebrow light">{t.placeKicker}</p>
            <h2>{t.placeTitle}</h2>
            <p>{t.placeBody}</p>
            <small>{t.mapNote}</small>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow light">{t.contactKicker}</p>
            <h2>{t.contactTitle}</h2>
          </div>
          <div className="contact-details">
            <p>{t.contactBody}</p>
            <div className="contact-links">
              <span>
                <Phone aria-hidden="true" />
                {t.phone}
              </span>
              <span>
                <Mail aria-hidden="true" />
                {t.email}
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell">
          <span>© 2026 Νέα Χώρα</span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </main>
  );
}
