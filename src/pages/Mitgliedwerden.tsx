import React from "react";
import Layout from "@theme/Layout";
import styles from "./Mitgliedwerden.module.css";

const benefits = [
  {
    icon: "🎯",
    title: "Regelmäßiges Training",
    description: "Trainiere mit erfahrenen Spielern wie Jens Kniest & Björn Quoiffy und verbessere dein Spiel",
  },
  {
    icon: "🏆",
    title: "Ligaspiele & Turniere",
    description: "Nimm an offiziellen Wettkämpfen und Turnieren teil",
  },
  {
    icon: "💸",
    title: "Wir übernehmen die Ligagebühren",
    description: "Die vom Verband für jeden Spieler berechnete Ligagebühr wird von uns zu 100% übernommen",
  },
  {
    icon: "🖤♥️",
    title: "Starke Gemeinschaft",
    description: "Werde Teil einer leidenschaftlichen Darts-Familie",
  },
];

export default function Mitgliedwerden(): JSX.Element {
  return (
    <Layout
      title="Mitglied werden"
      description="Werde Mitglied beim DC Kirrberg e.V. - Die Sterne vom Tussberch"
    >
      <main className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Mitglied werden</h1>
            <p className={styles.heroSubtitle}>
              Werde Teil der DC Kirrberg Familie
            </p>
            <p className={styles.heroIntro}>
              Du liebst Darts und suchst einen Verein, in dem du dich sportlich
              weiterentwickeln und gleichzeitig neue Freundschaften schließen
              kannst? Dann bist du bei uns genau richtig!
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Deine Vorteile</h2>
            <p className={styles.sectionSubtitle}>
              Was dich als Mitglied erwartet
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={styles.benefitCard}
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              >
                <span className={styles.benefitIcon}>{benefit.icon}</span>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Membership Options Section */}
        <section className={styles.optionsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>So wirst du Mitglied</h2>
            <p className={styles.sectionSubtitle}>Wähle deinen Weg</p>
          </div>

          <div className={styles.optionsGrid}>
            {/* Online Option */}
            <div className={styles.optionCard}>
              <div className={styles.optionBadge}>Empfohlen</div>
              <h3 className={styles.optionTitle}>Online-Antrag</h3>
              <p className={styles.optionDescription}>
                Fülle unser digitales Anmeldeformular aus und werde direkt
                Mitglied. Schnell, einfach und papierlos.
              </p>
              <a
                href="https://antrag.dckirrberg.de"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.optionButtonPrimary}
              >
                Zum Online-Formular
                <span className={styles.buttonIcon}>→</span>
              </a>
            </div>

            {/* In Person Option */}
            <div className={styles.optionCard}>
              <h3 className={styles.optionTitle}>Vor Ort im Verein</h3>
              <p className={styles.optionDescription}>
                Komm einfach zu einem unserer Trainingsabende vorbei. Du kannst
                den Antrag auch direkt im Vereinsheim unterzeichnen.
              </p>
              <div className={styles.optionLinks}>
                <a
                  href="/dateien/Mitgliederantrag.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.optionButtonSecondary}
                >
                  PDF-Antrag herunterladen
                </a>
                <a
                  href="mailto:vorstand@dckirrberg.de"
                  className={styles.optionButtonSecondary}
                >
                  Per E-Mail kontaktieren
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Final CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Bereit für deine erste 180?</h2>
            <p className={styles.ctaText}>
              Werde noch heute Teil unserer Gemeinschaft und erlebe den
              Dartsport.
            </p>
            <a
              href="https://antrag.dckirrberg.de"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Jetzt Mitglied werden
              <span className={styles.buttonIcon}>→</span>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
