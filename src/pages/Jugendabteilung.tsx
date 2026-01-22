import React from "react";
import Layout from "@theme/Layout";
import styles from "./Jugendabteilung.module.css";

const stats = [
  { value: "SEIT 2025", label: "eigene Jugendabteilung" },
  { value: "15+", label: "Kinder/Jugendliche im Training" },
  { value: "SADV", label: "Jugendrangliste" },
  { value: "FAIRPLAY", label: "Respekt & Teamgeist" },
  { value: "ENTWICKLUNG", label: "Wir fördern unsere jungen Talente" },
];

const pillars = [
  {
    icon: "🎯",
    title: "Technik & Fokus",
    description:
      "Saubere Grundlagen, Wurftechnik und ein ruhiger Kopf – Schritt für Schritt, ohne Druck.",
  },
  {
    icon: "🤝",
    title: "Respekt & Miteinander",
    description:
      "Darts ist Sport – bei uns zählen Fairness, Rücksicht und ein gutes Teamgefühl.",
  },
  {
    icon: "🧠",
    title: "Mentale Stärke",
    description:
      "Umgang mit Nervosität, Konzentration und Routinen – wichtige Skills fürs Spiel (und darüber hinaus).",
  },
  {
    icon: "🏅",
    title: "Turniere & Entwicklung",
    description:
      "Erste Talente nehmen bereits an SADV-Jugendranglistenturnieren teil und wachsen in den Spielbetrieb hinein.",
  },
];

const trainingCards = [
  {
    icon: "📍",
    title: "Ort",
    text:
      "Unser Jugendtraining findet in Kirrberg statt. Den genauen Trainingsort (Sportpark Lerchenhübel/Bürgerhaus) bestätigen wir dir gerne kurz per E-Mail / Instagram / Facebook.",
  },
  {
    icon: "🕒",
    title: "Zeiten",
    text:
      "Regelmäßige Trainingszeiten – Immer Mittwochs von 17:00 Uhr - 19:00 Uhr",
  },
  {
    icon: "🧒",
    title: "Einstieg",
    text:
      "Reinschnuppern ist jederzeit möglich. Wir zeigen alles in Ruhe – auch ohne eigene Darts.",
  },
  {
    icon: "🎒",
    title: "Mitbringen",
    text:
      "Gute Laune 🙂 Wenn vorhanden: eigene Darts. Ansonsten haben wir Leih-Darts vor Ort.",
  },
];

type Contact = {
  name: string;
  role: string;
  image?: string;
  mail?: string;
  phone?: string;
  text: string;
};

const contacts: Contact[] = [
  {
    name: "Michael Boscolo („Bossi“)",
    role: "Jugendleiter",
    image: "/dateien/vorstand/Michael.Boscolo.jpeg",
    mail: "jugendleitung@dckirrberg.de",
    // phone: "+49 176 802 514 40",
    text:
      "Bossi leitet das Jugendtraining mit viel Herzblut & Geduld – und sorgt für eine positive Trainingsatmosphäre.",
  },
  {
    name: "Marc Schmitt",
    role: "Co-Coach Technik (1. Mannschaft)",
    // Optional: Wenn du ein Bild hast, lege es unter static/dateien/vorstand/ ab und trage es hier ein:
    image: "/dateien/vorstand/Marc.Schmitt.jpeg",
    mail: "jugendleitung@dckirrberg.de",
    text:
      "Marc unterstützt insbesondere in der technischen Ausbildung: Wurftechnik, Zielroutine und zielgerichtete Trainingsmethoden.",
  },
];

const faqs = [
  {
    q: "Braucht mein Kind eigene Darts?",
    a: "Nein. Fürs Probetraining haben wir Leih-Darts da. Wenn später eigene Darts gewünscht sind, beraten wir gern.",
  },
  {
    q: "Wie läuft ein Probetraining ab?",
    a: "Wir starten mit Basics (Stand, Griff, Wurf), dann kleine Spiele – entspannt und ohne Leistungsdruck.",
  },
  {
    q: "Gibt es Turniere?",
    a: "Ja – wer möchte, kann an SADV-Jugendranglistenturnieren teilnehmen. Das ist aber kein Muss.",
  },
];

function ContactCard({ person }: { person: Contact }) {
  return (
    <div className={styles.contactCard}>
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          className={styles.contactImage}
          loading="lazy"
        />
      ) : (
        <div className={styles.contactImagePlaceholder} aria-hidden="true">
          👤
        </div>
      )}

      <h3 className={styles.contactName}>{person.name}</h3>
      <p className={styles.contactRole}>{person.role}</p>

      <p className={styles.contactText}>{person.text}</p>

      {person.mail && (
        <a href={`mailto:${person.mail}`} className={styles.contactLink}>
          {person.mail}
        </a>
      )}

      {person.phone && (
        <>
          <br />
          <a
            href={`tel:${person.phone.replace(/\s+/g, "")}`}
            className={styles.contactLink}
          >
            {person.phone}
          </a>
        </>
      )}
    </div>
  );
}

export default function Jugendabteilung(): JSX.Element {
  return (
    <Layout
      title="Jugendabteilung"
      description="Jugendabteilung des DC Kirrberg e.V. – Unsere Zukunft am Oche"
    >
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Jugendabteilung</h1>
            <p className={styles.heroSubtitle}>Unsere Zukunft am Oche</p>
            <p className={styles.heroIntro}>
              Seit 2025 haben wir eine eigene Jugendabteilung. Unser Ziel ist
              ein sportlicher, sozialer und respektvoller Zugang zum Dartsport –
              fernab von Klischees. Aktuell trainieren bereits rund 15 Kinder
              und Jugendliche regelmäßig bei uns.
            </p>
          </div>
        </section>

        <div className={styles.divider} />

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className={styles.statsBar}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* Pillars */}
        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Was wir vermitteln</h2>
            <p className={styles.sectionSubtitle}>Sportlich. Sozial. Respektvoll.</p>
          </div>

          <div className={styles.benefitsGrid}>
            {pillars.map((item, idx) => (
              <div key={idx} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{item.icon}</span>
                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* Training */}
        <section className={styles.trainingSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Training & Einstieg</h2>
            <p className={styles.sectionSubtitle}>
              Kurz erklärt – unkompliziert starten
            </p>
          </div>

          <div className={styles.trainingGrid}>
            {trainingCards.map((c, idx) => (
              <div key={idx} className={styles.trainingCard}>
                <div className={styles.trainingIcon}>{c.icon}</div>
                <div className={styles.trainingTitle}>{c.title}</div>
                <div className={styles.trainingText}>{c.text}</div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* Contact */}
        <section className={styles.contactSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ansprechpartner</h2>
            <p className={styles.sectionSubtitle}>
              Fragen? Probetraining? Schreib uns einfach.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {contacts.map((p, idx) => (
              <ContactCard key={idx} person={p} />
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>FAQ</h2>
            <p className={styles.sectionSubtitle}>Die häufigsten Fragen</p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((f, idx) => (
              <div key={idx} className={styles.faqCard}>
                <div className={styles.faqQ}>{f.q}</div>
                <div className={styles.faqA}>{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Mehr Details im Konzept</h2>
            <p className={styles.ctaText}>
              In unserem Sponsorenkonzept stellen wir auch die Jugendabteilung
              vor – inklusive Vision und Einblick in die Vereinsarbeit.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="/dateien/Sponsorenkonzept_DCK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}
              >
                <span className={styles.buttonIcon}>📄</span>
                Konzept öffnen
              </a>
              <a
                href="mailto:jugendleitung@dckirrberg.de"
                className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
              >
                <span className={styles.buttonIcon}>✉️</span>
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}