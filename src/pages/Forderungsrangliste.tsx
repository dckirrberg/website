import React from "react";
import Layout from "@theme/Layout";
import styles from "./Forderungsrangliste.module.css";

const infoCards = [
  {
    icon: "🎯",
    title: "Was ist die Forderungsrangliste?",
    text: "Eine interne Rangliste für Vereinsmitglieder, um sich gegenseitig herauszufordern und die eigene Platzierung zu verbessern.",
  },
  {
    icon: "⚔️",
    title: "Wie funktioniert es?",
    text: "Fordere einen Spieler heraus, der maximal 3 Plätze über dir steht. Bei einem Sieg tauscht ihr die Plätze.",
  },
  {
    icon: "📈",
    title: "Aufstieg & Spannung",
    text: "Je höher du steigst, desto stärker die Gegner. Bleib aktiv und verteidige deinen Platz!",
  },
];

export default function Forderungsrangliste(): JSX.Element {
  return (
    <Layout
      title="Forderungsrangliste"
      description="Die interne Forderungsrangliste des DC Kirrberg e.V."
    >
      <main className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Forderungsrangliste</h1>
            <p className={styles.heroDescription}>
              Die interne Challenge-Rangliste des DC Kirrberg e.V. -
              Fordere deine Vereinskameraden heraus und kämpfe dich nach oben!
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Info Cards Section */}
        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>
            {infoCards.map((card, idx) => (
              <div key={idx} className={styles.infoCard}>
                <span className={styles.infoIcon}>{card.icon}</span>
                <div className={styles.infoContent}>
                  <div className={styles.infoTitle}>{card.title}</div>
                  <div className={styles.infoText}>{card.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Noch nicht registriert?</h2>
            <p className={styles.ctaSubtitle}>
              Als Vereinsmitglied kannst du dich für die Forderungsrangliste anmelden.
            </p>
            <a
              href="https://form.campai.com/Hk1wgT2woVcO"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Jetzt Registrieren
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Ranking Section */}
        <section className={styles.rankingSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Aktuelle Rangliste</h2>
            <p className={styles.sectionSubtitle}>Live-Daten von online-rangliste.de</p>
          </div>

          <div className={styles.iframeContainer}>
            <div className={styles.iframeWrapper}>
              <iframe
                src="https://www.online-rangliste.de/index.php?iframe=o0yG4uz9K9Akwukc"
                className={styles.rankingIframe}
                title="DC Kirrberg Forderungsrangliste"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
